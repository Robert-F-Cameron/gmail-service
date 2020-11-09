import React from 'react'

function EmailDetails(props){

    let emailList = props.emails.map(each => <li>{each.sender} - {each.subject}</li>);

    return(
        <div>
            <h3>All email list</h3>
            <ul>{emailList}</ul>
        </div>
        
    )
}
export default EmailDetails