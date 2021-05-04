import React, {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Signin from './components/Signin'
import AddUser from './components/AddUser'
import ClientList from './components/ClientList'
import Locations from './schedule/Locations'
import CreateShift from './components/CreateShift'
import CreateLocation from './components/CreateLocation'


const App =()=> {
const [isSignedIn, setIsSignedIn] = useState(false)
const [route, setRoute] = useState('signout')
const [param, setParam] = useState("");

const [location, setLocation] = useState('CalgaryNW')
const locationList = ['CalgaryNW', 'CalgaryNE','CalgarySW','CalgarySW']

console.log(location)

const  onRouteChange =(route, param)=>{
  if(route === 'signout'){
    setIsSignedIn(false)
  }
  setRoute(route)
  if(param){ setParam(Object.values(param)[0])}
 
}
console.log(route, isSignedIn)
let displayPage;

if(route=== 'clientList'){
  displayPage = <ClientList />
}
if(route=== 'createShift'){
  displayPage = <CreateShift locationList={locationList} setLocation={setLocation} location={location} onRouteChange={onRouteChange} />
}
if(route=== 'signout'){
  displayPage = <Signin setIsSignedIn={setIsSignedIn} onRouteChange={onRouteChange}  />
}
if(route=== 'addUser'){
  displayPage = <AddUser onRouteChange={onRouteChange}/>
}
if(route=== 'createLocation'){
  displayPage = <CreateLocation onRouteChange={onRouteChange} />
}

  return (
    <div className='container' >
     <NavBar isSignedIn={isSignedIn} onRouteChange={onRouteChange} setIsSignedIn={setIsSignedIn}/>
    
     {displayPage}
     
     
    </div>
  );
}

export default App;
