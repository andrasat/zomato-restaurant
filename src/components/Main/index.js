import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import { fetchRestaurants } from '../../actions';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants('');
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div className="Main">
        <SearchBox />
        { this.props.restaurants.length === 0
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
                        <a href={each.restaurant.url} target="_blank" rel="noopener noreferrer">{ each.restaurant.name }</a>
                      </p>
                      <p className="subtitle is-6">{ each.restaurant.location.address }</p>
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

Main.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
});

const mapDispatchProps = dispatch => ({
  fetchRestaurants: keyword => dispatch(fetchRestaurants(keyword)),
});

export default connect(mapStateToProps, mapDispatchProps)(Main);
