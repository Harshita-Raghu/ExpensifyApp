import React from 'react';
import {SingleDatePicker} from 'react-dates'
import moment from 'moment';

const now =moment();
console.log(now.format('MMM Do,YYYY'));
export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calenderFocus:false,
            error:false
        }
    
    }
    
   
onSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
        this.setState(()=>({error:true}))

    }else{
        this.setState(()=>({error:false}))
        this.props.onSubmit({
            description:this.state.description,
            amount:parseFloat(this.state.amount,10)*100,
            createdAt:this.state.createdAt.valueOf(),
            note:this.state.note
        })
    }

}
 onDescriptionChange=(e)=>{
    const description=e.target.value;
    this.setState(()=>({description}))
    }
onnoteChange=(e)=>{
    const note=e.target.value;
    this.setState(()=>({note}))
}

onChangeAmount=(e)=>{
   const amount=e.target.value;
   if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
       this.setState(()=>({amount}))
   }

}


onDateChange=(createdAt)=>{
    if(createdAt){
        this.setState(()=>({createdAt}))
    }

}
onFocusChange=({focused})=>{
    this.setState(()=>({calenderFocus:focused}))
}

    render(){
        return(
            <div>
            {this.state.error && <p>Please type description and amount</p>}
                <form onSubmit={this.onSubmit} >
                    <input type='text' 
                    placeholder='Description' 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                     autoFocus/>
                    <input type='text'
                     placeholder='amount'
                     value={this.state.amount}
                     onChange={this.onChangeAmount}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocus}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                    <textarea 
                    placeholder='Add some note' 
                    rows='5'
                    value={this.state.note}
                    onChange={this.onnoteChange}></textarea>
                    <button> Add expense</button>
                </form>   
            </div>
        )
    }
}