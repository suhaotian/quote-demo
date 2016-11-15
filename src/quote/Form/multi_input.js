import React, { Component } from 'react'

export default class MultiInput extends Component {

  state = {
    current: this.props.current
  }

  handleChange = (i) => {
    this.setState({current: i})
    this.props.onChange(this.props.data[i])
  }

  render() {
    return (
      <div className="multi-input">
        {
          this.props.data.map((item, i) => {
            return (
              <div 
                key={i} 
                className={
                  `multi-input--option${i === this.state.current ? ' active' : ''}`
                }
                onClick={() => { this.handleChange(i) }}
              >{item}</div>
            )
          })
        }
      </div>
    )
  }
}

MultiInput.defaultProps = {
  current: 0,
  onChange: function(n){},
}