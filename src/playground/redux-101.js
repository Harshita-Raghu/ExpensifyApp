import {createStore} from 'redux'
import { instanceOf } from 'prop-types';


const incrementCount=({incrementBy=1}={})=>(
    {type:'INCREMENT',
     incrementBy
    }
)
const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy})

const resetCount=()=>({
    type:'RESET'

})

const setCount=({count}={})=>({
    type:'SET',
    count
})

//Reducers
//1.pure functions
//2.never change state or action

const countReducer=(state={count:0},action) =>{
    switch(action.type){
        case 'INCREMENT':
             //const incrementBy=typeof action.incrementBy=='number'?action.incrementBy:1;
             return {count:state.count+action.incrementBy}
        case 'DECREMENT':
             //const decrementBy=typeof action.decrementBy=='number'?action.decrementBy:1;
             return {count:state.count-action.decrementBy} 
         case 'SET':
         return{count:action.count}
        case 'RESET':
             return {count:0}                    
        default:
             return state
    }
 }
const store=createStore(countReducer)

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})



store.dispatch(incrementCount({incrementBy:2}));

store.dispatch(incrementCount());

//unsubscribe();
store.dispatch(resetCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count:23}));


// store.dispatch({
//     type:'SET',
//     count:101
// })