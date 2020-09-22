import React from 'react';
import ReactGA from 'react-ga';

type Props = {
  location: {
    pathname: string;
  };
};

function GoogleAnalytics(WrappedComp: React.FC | React.ComponentClass) {
  return class extends React.Component<Props> {
    componentDidMount() {
      ReactGA.initialize('UA-178515991-1');
      this.logPageChange(this.props.location.pathname);
    }

    componentDidUpdate({ location: prevLocation }: Props) {
      const { pathname } = this.props.location;
      const isDifferentPathname = pathname !== prevLocation.pathname;
      if (isDifferentPathname) {
        this.logPageChange(pathname);
      }
    }

    logPageChange(pathname: string) {
      let page = pathname;
      const { location } = window;
      ReactGA.set({
        page,
        location: `${location.origin}${page}`
      });
      ReactGA.pageview(page);
    }

    render(): JSX.Element {
      return <WrappedComp {...this.props} />;
    }
  };
}

export default GoogleAnalytics;
