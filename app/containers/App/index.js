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

export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div className="machine">
      <Machine number="1" isActive="yes" title ="nespresso"/>
      <button >
  Activate Lasers
</button>

      <Machine number="2" isActive="no" title ="nespresso1"/>
      <Machine number="3" isActive="no" title ="nespresso2"/>
       <Machine number="4" isActive="no" title ="nespresso4"/>
</div>
  );
}
