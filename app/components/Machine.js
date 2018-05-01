/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css" // for ES6 modules



class Machine extends React.Component {
  
/* constructor(props) {
    super(props);
   // this.state = {isActive:true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
     */
 onToggleClick() {
    // On envoie l'index à la méthode qui changera la valeur
    // La méthode et son argument sont tous les deux accessibles
    // via des props qui ont été passées au composant
    this.props.handleStatusChange(this.props.index);
    //this.props.onToggle(this.props.index);
  }

  render() {
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }> {/* Si isActive passée en props est à true, ajouter la classe "active" */}
          {this.props.name}
          {/* On appelle handleClick avec (e) pour pouvoir accéder à this*/}
     <label>
  <Toggle
    defaultChecked={this.props.isActive}
    onChange={ (e) => this.onToggleClick(e)} />
  
</label>
     
          <button onClick={(e) => this.onToggleClick(e)} type="button" className="btn">
            {this.props.isActive ? "active" : "desactive"}
          </button>
        </div>
      )
  }
}
 
 
 // handleClick() {
   // this.setState(prevState => ({
   //   isActive: !prevState.isActive
   // }));
   //console.log('woot.');
  // console.log(this.props.name);
   //console.log(this.props.isActive); 
     
 
 //if( this.props = {isActive: true}){
   //   this.props ={ isActive: false};
     // console.log('hello');
// };
 //console.log(this.props.isActive)
 //if (this.props ={isActive :false}){
 //    this.props ={ isActive: true};
 //    console.log('bye');
 //};
 //else (this.props={isActive:false})
    // this.props ={isActive: true};
  //   console.log('coucou');
 //};
 
  
  
   // if (this.props.isActive ){
       //  return(
        //         this.props.isActive : false
         //        );
        //return true;
       // this.props.isActive ? true : false ; 
     //  console.log('hello');
  // }; 
 /* console.log(this.props.isActive);
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
}*/

// Le composant sera accessible avec le nom "Machine"
export default Machine;
