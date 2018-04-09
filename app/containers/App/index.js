/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import '../../CSS/style.css'; 
// On peut aussi importer du CSS de la meme facon.

/*export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
   
   
   
  /*<div >
  <Header />
      <Machine name ="Machine 1" isActive />
      <Machine name ="Machine 2" />
      <Machine name ="Machine 3" isActive/>
    
  
  <Footer />
  </div>
 

  );
}*/

class App extends React.Component{
 constructor(props) {
    super(props);
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
    // Méthode pour activer une machine
  handleStatusChange(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On modifie le status de CETTE machine
    machines[key].isActive = true;
    // Pour vérifier la nouvelle collection dans la console :
    console.log({ machines });

    // 3. On applique cette nouvelle collection au state
    this.setState({ machines });
    /* console.log(this.state.machines.map (z=> z));*/
 /* console.log(Object.keys(this.state.machines) .map(machine =>  ));*/
  }
 
 /* <Machine name ={this.state.machines[0].name} 
     isActive={this.state.machines[0].isActive} />
      <Machine  name ={this.state.machines[1].name} 
      isActive={this.state.machines[1].isActive}/>
      <Machine  name ={this.state.machines[2].name} 
      isActive={this.state.machines[2].isActive}/>*/
   render() {
     return (
    // Dans tous les cas, afficher
    <div>
    <Header />
    {
      this.state.machines.map(machine =>
      //console.log(machine.name) //appel dans la console
      <Machine 
      key={machine.id}
      name={machine.name}
      isActive={machine.isActive}/> //appel dans sur la page 
    )}
    <Footer />
   
    </div>
    );
  }
}
export default App;