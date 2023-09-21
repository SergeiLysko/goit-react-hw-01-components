// import css from "./Transactions.module.css";
import { Container } from 'components/index.styled.js';
import { TransactionTable, TransactionTableThead, TransactionTableTh, TransactionTableTr, TransactionTableTd } from './Transactions.styled.js';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
      <Container>
      <TransactionTable>
  <TransactionTableThead>
          <TransactionTableTr>
      <TransactionTableTh>Type</TransactionTableTh>
      <TransactionTableTh>Amount</TransactionTableTh>
      <TransactionTableTh>Currency</TransactionTableTh>
    </TransactionTableTr>
  </TransactionTableThead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => {
     return (<TransactionTableTr key={id} >
                <TransactionTableTd>{ type}</TransactionTableTd>
                <TransactionTableTd>{amount}</TransactionTableTd>
                <TransactionTableTd>{currency}</TransactionTableTd>
            </TransactionTableTr>
            )
    })}
  </tbody>
      </TransactionTable>
      </Container>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })
  )
}