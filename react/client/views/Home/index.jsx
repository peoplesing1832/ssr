import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from 'isomorphic-style-loader/useStyles';
import { fetchHome } from 'client/store/actions/home';
import styles from './index.css';

const mapStateToProps = (state) => ({
  list: state.home.list
});

const Home = (props) => {
  useStyles(styles);
  return (
    <>
      <Link to="/more">more</Link>
      <h1 className="title">Home</h1>
    </>
  );
};

Home.getInitialData = async (dispatch) => {
  return dispatch(fetchHome());
};

export default connect(mapStateToProps, null)(Home);
