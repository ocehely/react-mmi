/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  
/* constructor(props) {
    super(props);
   // this.state = {isActive:true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
     */
  handleClick() {
   // this.setState(prevState => ({
   //   isActive: !prevState.isActive
   // }));
   console.log('woot.');
   console.log(this.props.name);
  }
  render() {
    // Dans tous les cas, afficher
    return <div className="machine" className = {this.props.isActive ? " machine active" : "machine"} >
    {this.props.name} 
    <button type="button" className="btn" onClick={(e) => this.handleClick(e)} > 

   {this.props.isActive ? "active" : "desactive"}
    </button>
    
    </div>




    
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
