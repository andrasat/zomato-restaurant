import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class Main extends React.Component {

  componentDidMount() {

  }

  render() {
    const { restaurants } = this.props
    return (
      <div className="Main">
        <div className="columns">
          {}
        </div>
      </div>
    );
  }
}

Main.PropTypes = {
  restaurants: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
});

const mapDispatchProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchProps)(Main);
