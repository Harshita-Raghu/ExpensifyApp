import React  from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashBoard=()=>(
    <div>This is from dashboard component
        <ExpenseListFilters/>
        <ExpenseList/>
       
    </div>

)
export default ExpenseDashBoard;