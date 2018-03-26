/**
 *
 * App.js
 *
 */
import React from 'react';

class Footer extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return <div className="footer">Machine 1 {this.props.title}</div>
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Footer;
