import React, { Component } from 'react'
import Form from './form'
import Footer from './footer'
import './css/screen.css'
import './css/fonts.css'

export default class Quote extends Component {
  render() {
    return (
      <div>
        <Form />
        <Footer />
      </div>
    )
  }
}