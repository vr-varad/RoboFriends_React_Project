// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: [],
      searchFeild: ''

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({robots: user}))
  }

   onSearchChange = (event) => {
    this.setState({searchFeild: event.target.value})
  }

  render(){
    const {robots,searchFeild} = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFeild.toLowerCase())
    })
      return !robots.length ? 
      <div className='main-bg h-screen '><h1 className='main_header'>Loading...</h1></div>:
      (<div className='main-bg'>
        <h1 className='main_header'>RoboFriends</h1>
        <SearchBox searchFeild={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary><CardList robots={filteredRobots}/></ErrorBoundary>
          
        </Scroll>
        </div>)
  }
}

export default App
