import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHome } from 'client/store/actions/home';

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
  return dispatch(fetchHome());
};

export default connect(mapStateToProps, null)(Home);
