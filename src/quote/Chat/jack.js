import React from 'react'


const Jack = ({children}) => (
  <div className="chat-message chat-message--jack">
    <div className="chat-avatar chat-avatar--jack">
      <img src={require('../img/logo.png')} alt="Jack" className="chat-image" />
    </div>
    <div className="chat-bubble chat-bubble--jack">
      <p className="chat-text">
        {children}
      </p>
    </div>
  </div>
)

export default Jack