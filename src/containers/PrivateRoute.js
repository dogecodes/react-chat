import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom'
import { recieveAuth } from '../actions';

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.recieveAuth();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route {...rest} render={props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/welcome',
            state: { from: props.location }
          }} />
        )
      )} />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  recieveAuth
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute));
