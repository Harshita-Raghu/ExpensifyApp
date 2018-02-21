import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense,editExpense,removeExpense} from './actions/expenses'
import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses.js'
import 'react-dates/lib/css/_datepicker.css';

const store=configureStore();
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpense=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpense)
    //console.log(store.getState())
})
const expense1=store.dispatch(addExpense({description:'water bill',amount:1800,createdAt:1000}))
const expense2=store.dispatch(addExpense({description:'Gas bill',amount:3900,createdAt:-1000}))
const expense3=store.dispatch(addExpense({description:'Rent',amount:7800,createdAt:5000}))
 //store.dispatch(setTextFilter('water'));
 //store.dispatch(setTextFilter('bill'));

//  setTimeout(()=>{
//      store.dispatch(setTextFilter('bill'))},3000)

const jsx=(
   <Provider store={store}>
        <AppRouter/>
   </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));
