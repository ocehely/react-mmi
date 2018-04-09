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
 OntoggleClick(){
  
 };
 
 
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
  console.log(this.props.isActive);
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
