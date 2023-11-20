// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";

class ErrorBoundary extends Component{
  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch( ){
    this.setState({hasError: true})
  }

  render(){
    if(this.hasError){
      return <h1>Ooops. There comes an Errorr.........</h1>
    }else{
      // eslint-disable-next-line react/prop-types
      return this.props.children
    }
  }
}

export default ErrorBoundary;