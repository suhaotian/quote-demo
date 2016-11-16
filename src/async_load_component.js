import React, { Component } from 'react'

export default function async_load_component(getComponent) {
  return class AsyncComponent extends Component {
    state = { component: null }

    componentDidMount() {
      if (!this.state.component) {
        getComponent(component => {
          this.setState({ component: component.default })
        })
      }
    }

    render() {
      const Component = this.state.component
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}