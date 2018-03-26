/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return <p>Machine 1 {this.props.number}, className = {this.props.isActive ? " yes" : "no"  } </p>
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
