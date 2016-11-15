import React from 'react'


const Input = (props) => (
  <input {...props} className="chat-input--text" />
)

Input.defaultProps = {
  type: 'text',
}

export default Input