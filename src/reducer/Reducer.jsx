 import React from 'react'

 const initial = {
     daata:[],
 }
 
 function Reducer(state=initial,action) {
    switch(action.type){
        case "ADD":
            return {...state , daata: [...state.daata,action.payload] }
            case "REMOVE":
                return{...state,daata:state.daata.filter((value,index)=> index !== action.payload )}
                default :
                return state
    }
 }
 
 export default Reducer