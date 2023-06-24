import React, { Component } from 'react'
import App from '../App'

  class imgs extends Component {
    state ={
        "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

    }


  render() {
    return (
      <img src='{this.state.image}'></img>
    )
        


  }
}
export default App
