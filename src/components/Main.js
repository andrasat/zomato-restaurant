import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState({
      keyword: newState,
    });
  }

  render() {
    const { restaurants, keyword } = this.props;
    return (
      <div className="Main">
        <div className="columns">
          <div className="column is-10 search-box">
            <div>
              <form>
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Search here..."
                      value={keyword}
                      onChange={this.handleChange}
                    />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        { this.props.restaurants.length > 0
          &&
          <p className="title is-3 loading">Fetching data..</p> }
        <div className="columns is-multiline main-page">
          { restaurants.map(each =>
            <div className="column is-4" key={each.restaurant.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-2by1">
                    <img src={each.restaurant.featured_image} alt="Restaurant" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">
                        <a href={each.restaurant.url}>{ each.restaurant.name }</a>
                      </p>
                      <p className="subtitle is-6">{ each.restaurant.address }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
          ) }
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  keyword: '',
};

Main.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
});

const mapDispatchProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchProps)(Main);
