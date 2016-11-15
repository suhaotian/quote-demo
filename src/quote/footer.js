import React, { Component } from 'react'
import jump from 'jump.js'

export default class Footer extends Component {
  
  goTop() {
    jump(document.body)
  }

  render() {
    return (
      <footer className="container footer">
        <div className="logo back-to-top" onClick={this.goTop}>
          <h1><span className="hide-text">Jack</span></h1>
        </div>
        <p>1046-1048 Govan Road,<br /> Glasgow, G51 4XS</p>
        <a href="http://worryandpeace.com">
          <img src={require('./img/worrypeace@2x.png')} alt="Member of the Worry+Peace network" />
        </a>
        <p className="fca">
          Jack is a trading style operated by Ashley Baxter Limited and an Appointed Representative of Innovative Risk Ltd. 
          These products are arranged by Innovative Risk Ltd who are authorised and regulated by the Financial Conduct Authority. 
          Registration number: 609155. You can check this by visiting the Financial Services Register or by contacting them on 0800 111 6768.
          <br />
          <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
        </p>
      </footer>
    )
  }
}