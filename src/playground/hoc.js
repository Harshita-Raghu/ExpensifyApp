
import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>Info is here {props.info}</p>
    </div>
)

const withAdminWarning=(WrappedComponenet)=>{
    return(props)=>(
        <div>
            { props.isAdmin && <p> This is private dont share</p>}
            <WrappedComponenet {...props}/>
        </div>
    );

}

const requireAuthentication=(WrappedComponenet)=>{
    return(props)=>(
        <div>
        { !props.isAuthenticated ? <p> Please Authenticate yourself to see the details</p> :
         <WrappedComponenet {...props}/>}
        </div>
    )
}

const AdminInfo=withAdminWarning(Info);



const AuthInfo=requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info='hjxvsj'/>,document.getElementById('app'))

ReactDOM.render(<AuthInfo isAuthenticated={true} info='these are the details'/>,document.getElementById('app'))