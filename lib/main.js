import React from 'react'
import { isCreditCard, isLength, isDate, isAfter, isNumeric } from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      ccNumValid: false,
      ccNameValid: false,
      expDateValid: false,
      allValidate: false,
      }
    },
    allValidate() {
  if((this.state.expDateValid === false) || (this.state.ccNameValid === false) || (this.state.ccNumValid === false)){
    this.setState({
      ccInvalid: true
    })
  }else{
    this.setState({
      ccInvalid: false
    })
  }
},
onCCNumberChange(e){
  var ccNum = e.target.value;
  if(isCreditCard(ccNum)){
    this.setState({
      ccNumValid: true
    })
  } else{
    this.setState({
      ccNumValid: false
    })
  }
  this.allValidate();
},
  onCCNameChange(e){
    var ccName = e.target.value;
    if(isLength(ccName, {min: 7})) {
      this.setState({
        ccNameValid: true
      })
    } else {
      this.setState({
        ccNameValid: false
      })
    }
    this.allValidate();
  },
  expirationValidate(e) {
  var expDate = e.target.value;
  if(isAfter(expDate)) {
    this.setState({
      expDateValid: true
    })
  }else {
    this.setState({
      expDateValid: false
    })
  }
  this.allValidate();
},
  render() {
    return (
      <main>
        <h1>Enter you Card Information</h1>
          <div className="credit_card">
            <h2 className="cc_title">Your Credit Card</h2>
            <input className={this.state.ccNumValid ? "cc_number cc_numberValid" : "cc_number"}
                   type="text"
                   name="card number"
                   onEdit={this.onCCNumberChange}
                   placeholder="XXXXXXXXXXXXXXXX"/>
                 <input className={this.state.ccNameValid ? "cc_name cc_nameValid" : "cc_name"}
                   type="text"
                   name="card holder"
                   onEdit={this.onCCNameChange}
                   placeholder="Your Name" />
                 <input className={this.state.expDateValid ? "cc_exp cc_expValid" : "cc_exp"}
                   type="text"
                   name="expiration date"
                   onEdit={this.expirationValidate}
                   placeholder="MM/YY" />
                 <img src="assets/visa.png"
                      alt="visa logo"
                      className="visa_logo"/>
           </div>
      </main>
    )
  }
})
