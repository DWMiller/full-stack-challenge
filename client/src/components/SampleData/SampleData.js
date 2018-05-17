import React, { Component } from 'react';

const demoAccounts = [
  {
    email: 'test1@email.com',
    name: 'The Boss',
    isAdmin: true,
  },
  {
    email: 'test2@email.com',
    name: 'John',
    isAdmin: false,
  },
  {
    email: 'test3@email.com',
    name: 'Bob',
    isAdmin: false,
  },
  {
    email: 'test4@email.com',
    name: 'Dave',
    isAdmin: false,
  },
  {
    email: 'test5@email.com',
    name: 'Alex',
    isAdmin: false,
  },
];

class SampleData extends Component {
  renderDemoAccounts() {
    return demoAccounts.map((account, i) => {
      return (
        <tr key={i}>
          <td>{account.email}</td>
          <td>{account.name}</td>
          <td>{account.isAdmin.toString()}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <table border="1">
          <caption>Sample Login Data</caption>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>{this.renderDemoAccounts()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default SampleData;
