import React from 'react';

class ES_Class extends React.Component {
  // this.myVariable
  myVariable = '나(this)의 멤버(지역) 변수여~';

  // static member no!! no!!
  static method() {
    // console.log(this); // static에서는 this를 사용할 수 없다.
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
