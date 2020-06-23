import React, { Component, Fragment } from 'react';
import ModalWarning from '../components/ModalWarning'
import Layout from './Layout';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {warningModal: true};
    this.callback = this.callback.bind(this);
  }

  callback () {
    const { warningModal }  = this.state;
    console.log('warningModalwarningModal', warningModal)
    this.setState({ warningModal: !warningModal })
  }

  render() {
    const { warningModal }  = this.state;
    return (
      <Fragment>
        { warningModal && <ModalWarning status={warningModal} action={this.callback} /> }
        <Layout />
      </Fragment>
    )
  }
}

export default App; 
