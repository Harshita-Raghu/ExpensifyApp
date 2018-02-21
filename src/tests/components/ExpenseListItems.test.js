import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItems from '../../components/ExpenseListItems'
import expenses from '../fixtures/expenses'

test('should render expense list ',()=>{

    expenses.map((expense)=>{
        const wrapper=shallow(<ExpenseListItems expense={expense}/>)
    expect(wrapper).toMatchSnapshot();
    })
    
})
