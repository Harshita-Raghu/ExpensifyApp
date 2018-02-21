import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'
test('should render expense list ',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test('should render expense form correctly with expense data ',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render error msessage  when submitted without description or amount',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value='Some description'
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
})

test('should setnote on textarea change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value='Some notes'
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
})

test('should set amount if valid input',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value='67.89';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);

})

test('should set amount if invalid input',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value='7..8';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');

})

test('should call onSubmit  prop for valid submission',()=>{

    const onSubmitSpy=jest.fn();
   const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
   wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
})
    expect(wrapper.state('error')).toBeFalsy();
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        createdAt:expenses[0].createdAt,
        note:expenses[0].note
    });
})

test('should set new date on date change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const now=moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);

})

test('should set calender focus on change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const focused=true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocus')).toEqual(focused);

})