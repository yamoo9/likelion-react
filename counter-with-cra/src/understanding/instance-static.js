import React from 'react';

// Namespace.member(method)
// Class.classMember
// e.g)
// - jQuery.each
// - Lodash.drop

class ES_Class extends React.Component {
  // this.myVariable
  myVariable = '나(this)의 멤버(지역) 변수여~';

  // static member no!! no!!
  static numberWithComma(n) {
    return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  state = {};

  render() {
    return <div lang="en">ECMAScript Class Syntax</div>;
  }

  otherMethod() {
    console.log(this.myVariable);
  }

  anotherMethod() {
    console.log(this.myVariable);
  }
}

// static defaultProps = {}
ES_Class.defaultProps = {
  // ... props object default value
};

// STATIC MEMBERS (=== CLASS.MEMBERS)

// ES_Class.numberWithComma = function numberWithComma(n) {
//   return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
// }

// ES_Class.numberWithComma(19800); // '19,800'

ES_Class.getRandomNumber = (n) => {
  return Math.round(Math.random() * n);
};

ES_Class.getRandomMinMax = function getRandomMinMax(min = 0, max = 100) {
  return ES_Class.getRandomNumber(max - min) + min;
};
