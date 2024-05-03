import React, {Component} from 'react'
import CardList from './Components/CardList/CardList'
import Navbar from './Components/Navbar/Navbar'
import Scroll from './Components/Scroll/Scroll'
import "./App.css"



class App extends Component{
  constructor(){
    super()
    this.state ={
      robots : [],
      searchfield : '',
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // Use response.json() to parse the JSON response
      .then(users => this.setState({ robots: users }))
      .catch(error => console.error('Error fetching data:', error)); // Add error handling
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield :event.target.value})
  }
  render(){
    const { robots, searchfield} = this.state;
    const filtered = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
     return !robots.length?
       <h1 className='error-hd'>Loading...</h1>
    :
      
        <div>
          <Navbar searchfield={this.onSearchChange}/>
          <Scroll>
          <CardList robots={filtered}/>
          </Scroll>
        </div>;
  }
}
export default App
