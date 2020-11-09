import React from 'react'
import ViewingPane from './ViewingPane'
import EmailDetails from './EmailDetails'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      emails : [],
      currentEmail: '',
      emailDetails: [],
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
  render(){
    return (
      <div>
        <h1>Email App!</h1>
        <ViewingPane emails = {this.state.emails} handleDetails={this.handleDetails.bind(this)}/>
        <EmailDetails emailDetails = {this.state.emailDetails}/>
      </div>
    );
  }
  
}

export default App;
