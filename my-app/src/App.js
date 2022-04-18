import logo from './logo.svg';
import './App.css';
import React from 'react';

// import element komponen HellowWorld
import HelloWorld from './helloWorld';

function App() {
  const namaPengurus = ['Kak Ikhwan', 'kak Ahmad', 'kak Angga'];
  const listNamaPengurus = namaPengurus.map((namaPengurus) => 
    <li>{namaPengurus}</li>
  );

  const namaDepan = 'Arya';
  const namaBelakang = 'Surya';

  const header = (
    <div className='header'>
      <h1>Tugas React JS</h1>
    </div>
  );

  const content = (
    <div className='content'>
      <div className='namaSurya style'>
        {namaDepan +" "+ namaBelakang}
      </div>
      <div className='namaPengurus style'>
        <h3>Nama Pengurus :</h3> 
        <ul>{listNamaPengurus}</ul>
      </div>
    </div>
  );

  const footer = (
    <div className='footer'>
      <h3>Thanks!</h3>
    </div>

  );
  
  return (
    <div>
      {header}
      {content}
      {footer}
    </div>
  );
}

export default App;
