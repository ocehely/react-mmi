// JavaScript File
import React from 'react';
class AddMachineForm extends React.Component {
  onAddClick(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // On stocke les valeurs du formulaire dans une variable newMachine
    const newMachine = {
      name: this.name.value,
      status: this.status.value
    }

     this.props.addMachineToState(newMachine);
     this.machineForm.reset();
  
}


render() {
    return (
      // On a passé addMachineToState en props depuis App
      <form ref={(input) => this.machineForm = input} onSubmit={(e) => this.onAddClick(e)} className="add-machine-form">
        <input ref={(input) => this.name = input} type="text"  placeholder="Nom de la machine" />
        <select ref={(input) => this.status = input}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit" className="btn">+ Ajouter une machine</button>
      </form>
   )
 }
}
export default AddMachineForm; 