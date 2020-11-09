import React from 'react'

function EmailDetails(props){

    let emailDetails = props.emailDetails.map(each => 
            <table>
                <thead>
                    <tr>
                        <th colspan="2">{each.subject}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>From: {each.sender}</td>
                        <td> Date: {each.date}</td>
                    </tr>
                    <tr colSpan ="2">
                    {each.message}
                    </tr>
                </tbody>
            </table>
    );

    return(
        <div>
            <h3>Email Detail</h3>
            <ul>{emailDetails}</ul>
        </div>
        
    )
}
export default EmailDetails