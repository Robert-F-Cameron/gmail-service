import React from 'react'
import ViewingPane from './ViewingPane'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      emails : [],
    }
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:3001/emails')
    const json = await response.json()
    this.setState({emails: json})
  }
  render(){
    return (
      <div>
        <h1>Email App!</h1>
        <ViewingPane emails = {this.state.emails}/>
      </div>
    );
  }
  
}

export default App;
