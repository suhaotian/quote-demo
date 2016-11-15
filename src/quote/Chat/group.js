import React, { Component } from 'react'
import jump from 'jump.js'

class Group extends Component {

  componentDidMount() {
    // document.body.scrollTop = this._el.offsetTop
    jump(this._el, {duration: 400})
  }

  render() {
    const {children, ...other} = this.props
    return (
      <div 
        className="chat-group" 
        ref={c => {this._el = c} } 
        {...other}
      >
        {children}
      </div>
    )
  }
}

export default Group