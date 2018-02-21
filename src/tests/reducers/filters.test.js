import filterReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})

test('should set sortBy to amount',()=>{
const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
expect(state.sortBy).toBe('amount');

})

test('Should set sort by to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }

    const action={type:'SORT_BY_DATE'};
    const state=filterReducer(currentState,action);
    expect(state.sortBy).toBe('date');

})

test('Should set text filter',()=>{
   
    const action={type:'SET_TEXT_FILTER',text:'rent'};
    const state=filterReducer(undefined,action);
    expect(state.text).toBe('rent');

})


test('Should set start date',()=>{
    
    const action={type:'SET_START_DATE',startDate:moment(0)};
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(moment(0));

})

test('Should set end date',()=>{
    
    const action={type:'SET_END_DATE',endDate:moment(0)};
    const state=filterReducer(undefined,action);
    expect(state.endDate).toEqual(moment(0));

})