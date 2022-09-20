import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableElement,
} from '../ui/index';

function TransactionHistory({ transaction }) {
  return (
    <Container>
      <TableContainer>
        <TableHead>
          <tr>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Currency</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {transaction &&
            transaction.map(item => (
              <TableRow key={item.id}>
                <TableElement>{item.type}</TableElement>
                <TableElement>{item.amount}</TableElement>
                <TableElement>{item.currency}</TableElement>
              </TableRow>
            ))}
        </tbody>
      </TableContainer>
    </Container>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(PropTypes.object),
};

/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>; */
