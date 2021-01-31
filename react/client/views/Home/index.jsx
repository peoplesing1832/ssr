import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMore } from 'client/store/actions/home';

const mapStateToProps = (state) => ({
  list: state.home.list
});

const Home = () => {
  return (
    <>
      <Link to="/more">more</Link>
      <h1>Home</h1>
    </>
  );
};

Home.getInitialData = async (dispatch) => {
  return dispatch(fetchMore());
};

export default connect(mapStateToProps, null)(Home);
