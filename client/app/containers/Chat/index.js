import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/chat'

import Messages from '../../components/Messages'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { chat, actions } = this.props
    return (
      <Messages name={chat.name} updateName={actions.updateName} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.Chat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
