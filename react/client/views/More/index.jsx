import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import { fetchMore } from 'client/store/actions/more';
import styles from './index.css';

const More = () => {
  return (
    <>
      <Link to="/home">home</Link>
      <h1 className="more-title">More</h1>
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.more.list
});


More.getInitialData = async () => {
  return dispatch(fetchMore());
};

export default compose(connect(mapStateToProps, null), withStyles(styles))(More);
