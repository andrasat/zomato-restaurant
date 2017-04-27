import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  enterSearch = (e) => {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.keyword);
  }

  render() {
    const { keyword } = this.state;
    return (
      <div className="Search">
        <div className="columns">
          <div className="column is-6 search-box">
            <div>
              <form onSubmit={this.enterSearch}>
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
      </div>
    );
  }
}

SearchBox.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
};

const mapDispatchProps = dispatch => ({
  fetchRestaurants: keyword => dispatch(fetchRestaurants(keyword)),
});

export default connect(null, mapDispatchProps)(SearchBox);
