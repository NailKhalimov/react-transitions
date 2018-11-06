import React, { Component } from 'react';
import UserTemplate from './user_template';

class User extends Component {

  state = {
    name: 'Nail',
    lastname: 'Khalimov',
    age: 21,
    hob: [1, 2, 3],
    spanish: false,
    message(){console.log('message')},
    car:{brand: 'ford'},
    mother: "Matha"
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state}/>
      </div>
    );
  }
}

export default User;