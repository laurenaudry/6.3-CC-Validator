import React from 'react'
import { isCreditCard, isLength, isDate, isAfter, isNumeric } from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      ccNumValid: false,
      ccNameValid: false,
      expDateValid: false,
      }
    },
  onCCNameChange(e){
    var ccName = e.target.value;
    if(isLength(ccName, {min: 8})) {
      this.setState({
        ccNameValid: true
      })
    } else {
      this.setState({
        ccNameValid: true
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
},
  render() {
    return (
      <main>
        <div>
          <h1>Enter you Card Information</h1>
            <input className={this.state.ccNameValid ? "card__name card__name--valid" : "card__name"}
                   type="text"
                   name="card holder"
                   onEdit={this.ccNameValidate}
                   placeholder="Your Name" />
            <input className={this.state.ccNumValid ? "cc_number cc_numberValid" : "cc_number"}
                   type="text"
                   name="card number"
                   onEdit={this.ccNumValid}
                   placeholder="XXXXXXXXXXXXXXXX"/>
                 <input className={this.state.expireValid ? "card_exp card_expValid" : "card_exp"}
                   type="text"
                   name="expiration date"
                   onEdit={this.expirationValidate}
                   placeholder="MM/YY" />
           </div>
      </main>
    )
  }
})
