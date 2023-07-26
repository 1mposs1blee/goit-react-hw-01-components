import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 80%;

  border-collapse: collapse;
`;

export const TransactionTableThead = styled.thead`
  background-color: ${({theme}) => theme.colors.gray95};
`;

export const TransactionTableTr = styled.tr``;

export const TransactionTableTh = styled.th`
  padding: 8px;

  text-align: center;

  border: ${({theme}) => `1px solid ${theme.colors.gray80}`};
`;

export const TransactionTableTbody = styled.tbody``;

export const TransactionTableTd = styled.td`
  padding: 8px;

  text-align: center;

  border: ${({theme}) => `1px solid ${theme.colors.gray80}`};
`;
