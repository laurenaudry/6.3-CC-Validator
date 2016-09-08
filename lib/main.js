import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      ccNum: {
        isInvalid: false
      },
      ccName: {
        isInvalid: false
      }
      expDate: {
        isInvalid: false
      },
      ccForm: {
        isInvalid: false
      }
    }
  },
  checkFormValidity(){
    if ((this.state.ccNum.isInvalid === true) || (this.state.ccName.isInvalid === true) || (this.state.expDate.isInvalid === true){
    this.setState({
    allValid: {
      isInvalid: true
     }
    })
  } else {
    this.setState({
    allValid: {
      isInvalid: false
    }
  })
},
  }
  render() {
    return (
      <form>
        <input type="text" className="cc_number">
        <input type="text" className="cc_name">
        <input type="text" className="exp_date">
      </form>
    )
  }
})
