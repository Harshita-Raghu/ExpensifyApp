import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

test('should set up remove expense object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('should setup edit expense object',()=>{
    const action=editExpense('123abc',{notes:'im a looser'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{notes:'im a looser'}
    })
})

test('should setup add expense action object with provided values',()=>{
    const expenseData={
        description:'Motor bike',
        amount:176000,
        createdAt:1000,
        note:'I want my harley davidson bike'

    }
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
        }
    })

})

test('should setup add expense action object with default values',()=>{
    const expenseData={
        description:'',
        amount:0,
        createdAt:0,
        note:''

    }
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
        }
    })
    
})