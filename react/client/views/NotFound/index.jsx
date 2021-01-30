import React, { useEffect } from 'react';

class NotFound extends React.PureComponent {
  UNSAFE_componentWillMount() {
    const { staticContext = {} } = this.props;
    staticContext.NotFound = true;
  };

  render () {
    return (
      <>
        <h1>404</h1>
      </>
    );
  }
};

export default NotFound;
