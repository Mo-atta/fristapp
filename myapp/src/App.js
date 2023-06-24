import React, { Component } from 'react'

export default class App extends Component {
  state = {"id":1,
  "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price":109.95,
  "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category":"men's clothing",
  "rating":{"rate":3.9,"count":120},
  "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}
  render() {

    return <div className='data'>
      <div className='date1'>
      <ol>
        <li>ID : {this.state.id}</li>
        <li>title : {this.state.title}</li>
        <li>price : {this.state.price}</li>
        <li>description : {this.state.description}</li>
        <li>rating of rate: {this.state.rating.rate}</li>
        <li>rating of count : {this.state.rating.count}</li>
        
      </ol>
      
      </div>
<div className='w-25'><img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' className='w-25'></img></div>
    </div>

    
  }
}

