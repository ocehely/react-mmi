/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css" // for ES6 modules


// On importe ici les composants qu'on veut afficher
import AddMachine from '../../components/AddMachine.js';
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import '../../CSS/style.css'; 
// On peut aussi importer du CSS de la meme facon.


class App extends React.Component{
 constructor(props) {
    super(props);
   
    this.handleStatusChange = this.handleStatusChange.bind(this);
     this.addMachineToState = this.addMachineToState.bind(this);
     
    
  
    this.state ={
      machines : [
      { 
        id:0,
        name: "machine1 def dans le state",
        isActive : true
      },
      {
        id:1,
        name:"machine2 def dans le state",
        isActive : false
      },
      {
        id:2,
        name: "machine3 def dans le state",
        isActive : true
      },
      ]
      
    };
    
 }
    // Méthode pour activer une machine
  handleStatusChange(key) {
    console.log ('handleStatusChange');
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    console.log(machines[key].isActive);
    // 2. On modifie le status de CETTE machine
    machines[key].isActive =  !machines[key].isActive;
    // Pour vérifier la nouvelle collection dans la console :
    
    console.log({ machines });

    // 3. On applique cette nouvelle collection au state
    this.setState({ machines });
    /* console.log(this.state.machines.map (z=> z));*/
 /* console.log(Object.keys(this.state.machines) .map(machine =>  ));*/

 console.log(machines[key].isActive);
 
  }
   // Méthode pour ajouter un formulaire
     addMachineToState(machine) {
    console.log("addMachineToState");
    console.log(machine);
    return 
    this.setState({machine}) ; 
  } 

 
 
   render() {
       // Calcul des compteurs
     const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
      const machine = this.state.machines[key];
      const isAvailable = machine && machine.isActive;
      // On incrémente le compteur à chaque fois que l'on trouve une machine active
      return isAvailable ? prevTotal + 1 : prevTotal
    }, 0);
    const total = machinesIds.length;
    
     return (
         
          /*Conteneur de notre liste*/
          /*Compteurs*/
        
    // Dans tous les cas, afficher
   <div>
     <div className="counter">
            <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
     </div>
   <Header />
   <AddMachine addMachineToState={this.addMachineToState}/>
    {
     Object
     .keys(this.state.machines)
     
      .map(key =>
      //console.log(machine.name) //appel dans la console
         <Machine name={this.state.machines[key].name}
                     
                       key={this.state.machines[key].id}
                       index={this.state.machines[key].id}
                       handleStatusChange={this.handleStatusChange}
                       isActive={this.state.machines[key].isActive}/>
                       )}
                       
                 
    <Footer />
   
    </div>
    );
  }
}
export default App;