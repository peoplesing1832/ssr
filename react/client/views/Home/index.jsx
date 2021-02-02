import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import { fetchHome } from 'client/store/actions/home';
import styles from './index.css';

const Home = (props) => {
  return (
    <>
      <Link to="/more">more</Link>
      <h1 className="title">Home</h1>
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.home.list
});

Home.getInitialData = async (dispatch) => {
  return dispatch(fetchHome());
};

export default compose(connect(mapStateToProps, null), withStyles(styles))(Home);
