import React, {useState,useEffect} from 'react';

import {db} from '../../firebase'

import Mapcomponent from '../components/MapComponent';
  



const  MapScreen =()=>    {
const [coordinates,setCoordinates]=useState('','');


useEffect(()=>{
const fetchCoordinate = async()=> 
{ 
  onValue(ref(db, 'GPS/'), (data) => {
  const coordinates =data.val()
  setCoordinates(coordinates)
  console.log(coordinates);

});

}

fetchCoordinate();

},[])

return(
  <Mapcomponent  coordinates={coordinates}/>
)



}

export default MapScreen
// const [markerCoords, setMarkerCoords] = useState({a[0],a[1]})



  
   

