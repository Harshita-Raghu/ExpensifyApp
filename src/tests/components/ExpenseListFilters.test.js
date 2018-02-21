import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter,sortByDate,sortByAmount,setEndDate,setStartDate,wrapper;

beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setEndDate=jest.fn();
    setStartDate=jest.fn();
    wrapper=shallow(
        <ExpenseListFilters
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filters={filters}
        />
    )
})

test('should render expenselistfilters  correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should render expenselistfilters with alt data correctly',()=>{
wrapper.setProps({
    filters:altFilters
})

    expect(wrapper).toMatchSnapshot();
})

test('should handle text change',()=>{

    const value='Some text'
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
   
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
 
})


test('should sort by date',()=>{
    const value='date';
    wrapper.find('select').at(0).simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenLastCalledWith();
 
})

test('should sort by amount',()=>{
    const value='amount';
    wrapper.find('select').at(0).simulate('change',{
        target:{value}
    })
  
    expect(sortByAmount).toHaveBeenLastCalledWith();
  
})

test('should handle date changes',()=>{
    const date={
        startDate:moment(0),
        endDate:moment(0).add(1,'days')
    }
    wrapper.find('DateRangePicker').prop('onDatesChange')(date);
    expect(setStartDate).toHaveBeenLastCalledWith(date.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(date.endDate);
  
})
test('should handle date focus changes',()=>{
    const calenderFocused='startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
 
    expect(wrapper.state('calenderFocused')).toBe('startDate');
   
})
