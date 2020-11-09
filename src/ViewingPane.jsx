import React from 'react'

function ViewingPane(props){

    let emailList = props.emails.map(each => 
    <li>
    {each.sender} - {each.subject} <button onClick={props.handleDetails} value ={each.id}>Details</button>
    </li>);

    return(
        <div>
            <h3>All email list</h3>
            <ul>{emailList}</ul>
        </div>
        
    )
}
export default ViewingPane