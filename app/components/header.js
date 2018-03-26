/**
 *
 * App.js
 *
 */
import React from 'react';

class Header extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return <div className="header">Machine 1 {this.props.title}</div>
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Header;
