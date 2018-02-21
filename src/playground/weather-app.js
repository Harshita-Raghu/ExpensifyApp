import {createStore,combineReducers} from 'redux';
import React from 'react';




const weatherReducer=()=>{
    switch


}

const filterReducer=()=>{


}

const store=createStore(
    combineReducers({
        weathers:weatherReducer,
        filter:filterReducer
    }

))

const demoState={
    weather:{
        day:"mon",
        maxTemp:65,
        minTemp:56,
        description:"cloudy"
    },
    filter:{
        tempIn:"C" //celcius or fahrenheit
    }
}

console.log(demoState);