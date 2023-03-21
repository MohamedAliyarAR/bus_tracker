import React from 'react';
import {FlatList} from 'react-native';
import Card from '../components/Card';

const bus=[

  {
    id:1,
    busno:['1','2',],
    Area:"Pudukottai"
  },
  
  {
    id:2,
    busno:['1','2','3'],
    
    Area:"BHEL"
  },
  
  {
    id:3,
    busno:['1','2','3'],
    
    Area:"K.K.Nagar"
  },
  
  {
    id:4,
    busno:['1','2','3'],
    
    Area:"Chathram"
  },
  
  {
    id:5,
    busno:['1','2','3'],
   
    Area:"Central"
  },
  {
    id:6,
    busno:['1','2','3'],
    
    Area:"Central"
  },
  {
    id:7,
    busno:['1','2','3'],
    
    Area:"Central"
  }
]

const HomeScreen = () => {
  return (

      <FlatList
        data={bus}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(bus) => bus.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      

  );
}

export default HomeScreen