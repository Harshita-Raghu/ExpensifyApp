import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';
import moment from 'moment'
test('should set default state',()=>{

    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])

})


test('should not remove expenses if id not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses)

})

test('should add an expense',()=>{
    const expense={
        id:'4',
        description:'Swimmming class fee',
        note:'Its really imp',
        amount:1000,
        createdAt:0
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses, expense])

})

test('should edit an expense if id  found',()=>{
    const id='1';
    const updates={description:"internet bill"}
    const action={
        type:'EDIT_EXPENSE',
        id,
        updates

    }
    const state=expensesReducer(expenses,action);
    
    expect(state[0]).toEqual({...expenses[0],...updates})

})

test('should not edit an expense if id not  found',()=>{
    const id='-1';
    const updates={description:"internet bill"}
    const action={
        type:'EDIT_EXPENSE',
        id,
        updates

    }
    const state=expensesReducer(expenses,action);
    
    expect(state).toEqual(expenses)

})