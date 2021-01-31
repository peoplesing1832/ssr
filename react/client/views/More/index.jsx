import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHome } from 'client/store/actions/more';

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

export default connect(mapStateToProps, null)(More);
