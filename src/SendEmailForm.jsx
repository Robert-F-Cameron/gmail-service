import React from 'react'

function SendEmailForm(props){
    //emails.push({ sender: emailSender.sender, recipient: emailSender.recipient, subject: emailSender.subject, email: emailSender.message, })
    return(
        <form onSubmit = {props.handleSendEmail}> 
            <input type= 'text' value='jane@galvanize.com' placeholder= 'Sender' disabled/>
            <input type= 'text' onChange={props.handleRecipientInput} placeholder= 'Recipient'/>
            <input type= 'text' onChange={props.handleSubjectInput} placeholder= 'Subject'/>
            <input type= 'text' onChange={props.handleMessageInput} placeholder= 'Message'/>
            <button type='submit'>Send!</button>
        </form>
    )
}
export default SendEmailForm