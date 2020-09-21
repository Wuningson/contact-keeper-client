import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    this.logPageChange(this.props.location.pathname);
  }
  componentDidUpdate({ location: prevLocation }) {
    const { pathname } = this.props.location;
    const isDifferentPathname = pathname !== prevLocation.pathname;
    if (isDifferentPathname) {
      this.logPageChange(pathname);
    }
  }
  logPageChange(pathname) {
    if (
      pathname === '/about' ||
      pathname === '/register' ||
      pathname === '/login'
    ) {
      let page = pathname;
      const { location } = window;
      ReactGA.set({
        page,
        location: `${location.origin}${page}`,
        ...this.props.options
      });
      ReactGA.pageview(page);
    }
  }
  render() {
    return null;
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string
  }).isRequired,
  options: PropTypes.object
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = () => {
  ReactGA.initialize('UA-178515991-1');
  return true;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init
};
