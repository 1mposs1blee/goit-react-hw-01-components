import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableThead,
  TransactionTableTr,
  TransactionTableTh,
  TransactionTableTbody,
  TransactionTableTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableThead>
        <TransactionTableTr>
          <TransactionTableTh>Type</TransactionTableTh>
          <TransactionTableTh>Amount</TransactionTableTh>
          <TransactionTableTh>Currency</TransactionTableTh>
        </TransactionTableTr>
      </TransactionTableThead>

      <TransactionTableTbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <TransactionTableTr key={id}>
              <TransactionTableTd>{type}</TransactionTableTd>
              <TransactionTableTd>{amount}</TransactionTableTd>
              <TransactionTableTd>{currency}</TransactionTableTd>
            </TransactionTableTr>
          );
        })}
      </TransactionTableTbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
