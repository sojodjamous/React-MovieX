import './App.css';
import Navb from './Navb';
import React from 'react';
import M from './M';
import Login from './Login';
import Search from './Search'
import Contact from './Contact'





function App() {

let comp
switch (window.location.pathname) {
  case "/":
    comp=<M/>
    break;
    case "/M":
    comp=<M/>
    break;
    case "/Login":
    comp=<Login/>
break
case "/Search":
    comp=<Search/>
break
case "/Contact":
    comp=<Contact/>
break

}






  return (
    <div className="App">
      <Navb/>
      {comp}
    
    </div>
  );
}

export default App;
