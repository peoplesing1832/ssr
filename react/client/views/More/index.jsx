import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMore } from 'client/store/actions/more';

const mapStateToProps = (state) => ({
  list: state.more.list
});

const More = () => {
  return (
    <>
      <Link to="/home">home</Link>
      <h1>More</h1>
    </>
  );
};

More.getInitialData = async () => {
  return dispatch(fetchMore());
};

export default connect(mapStateToProps, null)(More);
