'use strict';
const BASE_URL = "http://localhost:5500/data/";

export async function getDataUser(endPoint){
  try {
  
  const response = await fetch(BASE_URL + endPoint + ".json",{
    method: 'GET',
    headers:{
        "Content-Type" : "application/json",
    },  
  }); 
  const DataUser = await response.json();
  return DataUser;
  }catch(err){
    console.log(err); 
  }
}