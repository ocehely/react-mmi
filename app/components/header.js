/**
 *
 * App.js
 *
 */
import React from 'react';

class Header extends React.Component {
  render() {
  

    
    // Dans tous les cas, afficher
    return (
      <div className="header">header {this.props.title}
      </div>
        );
    
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Header;
