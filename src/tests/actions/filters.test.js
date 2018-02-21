import{setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter} from '../../actions/filters'
import moment from 'moment';

test('should genearte setstartdate object',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })

})

test('should genearte setenddate object',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
    
})

test('should genearte sortbydate object',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
        
    })
    
})

test('should genearte sortbyamount object',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        
    })
    
})

test('should genearte setTextFilter object',()=>{
    const action=setTextFilter('Hello');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Hello'
        
    })
    
})




