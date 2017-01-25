require('normalize.css/normalize.css');
require('styles/App.css');
import {connect} from 'react-redux';
import React from 'react';

let yeomanImage = require('../images/login_bg.jpg');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
         {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default connect()(AppComponent);
