import React, {Component} from 'react';

class Transactions extends Component {
  render() {
    const {value} = this.props;
    return (
      <table>
        <tr>
          <th>Amount</th>
          <th>Interest</th>
        </tr>

        {value.map((value, index) => (
          <tr key={value}>
            <th key={value.value}>{value.value} </th>

            <th key={index}>{value.interest}</th>
          </tr>
        ))}
      </table>
    );
  }
}

export default Transactions;
