import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 10px;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  width: 150px;

  text-align: center;

  background-color: ${props => props.backgroundColor};
`;

export const StatisticsItemFormat = styled.span`
  margin-bottom: 10px;

  display: block;
`;

export const StatisticsItemPercentage = styled.span``;
