import React from 'react';
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'
let editExpense,removeExpense,history,wrapper;

beforeEach(()=>{
    editExpense=jest.fn();
    removeExpense=jest.fn();
    history={push:jest.fn()}
    wrapper=shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        expense={expenses[1]}
         history={history}/>)

})

test('Should render edit expense page correctly',()=>{
    

    expect(wrapper).toMatchSnapshot();

})

test('Should handle on submit',()=>{
   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);

})

test('Should handle on click',()=>{
   
    wrapper.find('button').at(0).simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id});

})