import React from 'react'

const Button = (props) => (
  <div className="chat-next">
    <button type="submit" className="btn btn--primary">
      {props.children}
    </button>
  </div>
)

export default Button