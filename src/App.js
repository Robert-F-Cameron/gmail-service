import React from 'react'
import ViewingPane from './ViewingPane'
import EmailDetails from './EmailDetails'
import SendEmailForm from './SendEmailForm'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      emails : [],
      currentEmail: '',
      emailDetails: [],
      newEmail : {sender: 'jane@galvanize.com',
                  recipient: '',
                  subject: '',
                  message: ''}
    }
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:3001/emails')
    const json = await response.json()
    this.setState({emails: json})
  }
  handleDetails(e){
    e.preventDefault()
    this.setState({currentEmail: e.target.value})
    let json = this.state.emails.filter(each => each.id === parseInt(this.state.currentEmail))
    this.setState({emailDetails: json})
  }
  //handleRecipientInput
  handleRecipientInput(e){
    this.setState({newEmail: {...this.state.newEmail, recipient: e.target.value} })
  }
  handleSubjectInput(e){
    this.setState({newEmail: {...this.state.newEmail, subject: e.target.value} })
  }
  handleMessageInput(e){
    this.setState({newEmail: {...this.state.newEmail, message: e.target.value} })
  }
  async handleSendEmail(e){
    e.preventDefault();
    const response = await fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    

      body: JSON.stringify(this.state.newEmail)
    })
    return response.json();
  }
  
  render(){
    return (
      <div>
        <h1>Email App!</h1>
        <ViewingPane emails = {this.state.emails} handleDetails={this.handleDetails.bind(this)}/>
        <EmailDetails emailDetails = {this.state.emailDetails}/>
        <SendEmailForm handleSendEmail={this.handleSendEmail.bind(this)} handleRecipientInput={this.handleRecipientInput.bind(this)} handleSubjectInput={this.handleSubjectInput.bind(this)} handleMessageInput={this.handleMessageInput.bind(this)}/>
      </div>
    );
  }
  
}

export default App;
