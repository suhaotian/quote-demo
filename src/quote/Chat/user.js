import React from 'react'


const User = ({text, children, error}) => (
  <div className="chat-message chat-message--user">
    <div className="chat-bubble chat-bubble--user">
      {
        text ? 
        <p className="chat-text">
          {text}
        </p> : null
      }
      {children}
    </div>

    {error ? <div className="inline-error" style={{paddingBottom: '3rem'}}>{error}</div> : null}
  </div>
)

export default User