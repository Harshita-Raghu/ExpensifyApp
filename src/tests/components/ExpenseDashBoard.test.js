import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoard'

test('should render ExpenseDashBoardPage ',()=>{
    const wrapper=shallow(<ExpenseDashBoardPage/>)
    expect(wrapper).toMatchSnapshot();
})