import React, { Component } from 'react'

import Group from './Chat/group'
import Jack from './Chat/jack'
import User from './Chat/user'

import MultiInput from './Form/multi_input'
import SubmitButton from './Form/button'
import Input from './Form/input'


export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      business: '',
      primary_industry: '',
      secondary_trade: '',
      work_portion: 50,
      only_one: false,
      current: 1,

     }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.chats.length === this.state.current) {
      return
    }
    this.setState({
      current: this.state.current+1
    })
  }

  render() {
    this.chats = this.getChats()
    const chats = this.chats.slice(0, this.state.current)
    return (
      <form onSubmit={this.handleSubmit} className="chat-window">
        {
          chats.map(({jack, user}, i) => {
            return (
              <Group key={i}>
                <Jack>{jack.call ? jack() : jack}</Jack>
                <User text={user.text.call ? user.text() : user.text} error={user.error}>
                  {user.render()}
                </User>
              </Group>
            )
          })
        }

        <SubmitButton> {this.chats.length === this.state.current ? 'SUBMIT' : 'NEXT'}</SubmitButton>
      </form>
    )
  }

  getChats = () => ([
        {
          jack: "Hey, I'm Jack. Let's get you a Professional Indemnity quote! You know my name, what's yours?",
          user: {
            text: "Hi Jack, nice to meet you! I’m",
            render: () => (
              <div className="chat-input chat-input--required">
                <Input 
                  value={this.state.username} 
                  placeholder="Full Name" 
                  onChange={(e) => {
                    this.setState({username: e.target.value})
                  }}
                />
              </div>
            )
          },
        },
        {
          jack: () => (<span>Hi, {this.state.username}. Why not tell me a bit about your business?</span>),
          user: {
            text: "Sure! My business is called",
            render: () => (
              <div>
                <div className="chat-input chat-input--required">
                  <Input 
                    value={this.state.business} 
                    placeholder="Wonderful Co." 
                    onChange={(e) => {
                      this.setState({business: e.target.value})
                    }}
                  />
                </div>
                <p/>
                <p className="chat-text">And it’s registered as a</p>
                <MultiInput data={['Sole Trader', 'Ltd. Company', 'Partnership']} onChange={v => console.log(v)} />
              </div>
            )
          }
        },
        {
          jack: `Isn’t that fantastic?? Now, please tell me a bit more about what your company does. 
                  First, what industry do you mainly work in?`,
          user: {
            text: "Gladly! My primary industry is",
            render: () => (
              <div className="chat-input chat-input--required">
                <Input 
                  value={this.state.primary_industry} 
                  placeholder="Web design" 
                  onChange={(e) => {
                    this.setState({primary_industry: e.target.value})
                  }}
                />
              </div>
            )
          }

        },
        {
          jack: `That sounds fun! Do you have a secondary trade or are you simply focused on web design?`,
          user: {
            text: this.state.only_one ? "" : "I also do a bit of",
            render: () => (
              <div>
                {
                  this.state.only_one ? null : (
                    <div className="chat-input">
                      <Input 
                        value={this.state.secondary_trade} 
                        placeholder="Front-end development" 
                        onChange={(e) => {
                          this.setState({secondary_trade: e.target.value})
                        }}
                      />
                    </div>
                  )
                }
                <button className="chat-btn" type="button" onClick={(e) => {
                  if (this.state.only_one) return
                  this.setState({only_one: true})
                  this.handleSubmit(e)
                }}>
                  No, I just do {this.state.primary_industry}
                </button>
              </div>
            )
          }
        },

        this.state.only_one ?
        {
          jack: `Nice, you're a specialist. Do you know how much you’d like to be covered for? If not, we've written a blog post that might help!`,
          user: {
            text: `Yep, I know how much cover I need.`,
            render: () => (
              <MultiInput data={['£100,000', '£250,000', '£500,000', '£1,000,000', '£2,000,000']} />
            )
          }
        } :
        {
          jack: `Oh nice, you're multi-talented! Roughly what portion of your work is spent doing your primary trade?`,
          user: {
            text: () => (
              <span>I’d say my primary trade makes up about <b className="chat-range--readout">{this.state.work_portion}</b>% of my work.</span>
            ),
            render: () => (
              <div className="chat-input chat-range"> 
                <input 
                  type="range" 
                  value={this.state.work_portion} 
                  onChange={ e => {
                    this.setState({work_portion: e.target.value})
                  }}
                  className="chat-input--range" 
                />
              </div>
            )
          }
        },

        {
          jack: `Great! This is a bit personal, but how much money do you expect to turnover on an annual basis?`,
          user: {
            text: `My estimated turnover for this year is`,
            render: () => (
              <div className="chat-input chat-input--prefixed chat-input--required">
                <span className="prefix">£</span> <Input placeholder="100,000" name="turnover"/>
              </div>
            )
          }
        },

        {
          jack: `Making it rain! 💵 We’re almost done now, but we need to know how you’d like us to get back to you.`,
          user: {
            text: "My email is",
            render: () => (
              <div>
                <div className="chat-input chat-input--required">
                  <Input type="email" placeholder="awesome@wonderful.co" />
                </div>
                <p/>

                <p className="chat-text">And my phone number is</p>
                <div className="chat-input">
                  <Input placeholder="0115 123 9887" />
                </div>
                <p/>

                <p className="chat-text">Please contact me by</p>
                <MultiInput data={['Email', 'Phone']} />
              </div>
            )
          }
        },

        {
          jack: `Perfect! That’s all we need right now. We take an interest in what our customers are doing.
              We'd love to follow you on Twitter and see the interesting projects you’re working on.`,
          user: {
            text: "Okey doke! My twitter is",
            render: () => (
              <div className="chat-input chat-input--prefixed">
                <span className="prefix">@</span> 
                <Input placeholder="username" />
              </div>
            )
          }
        },

      ])
}