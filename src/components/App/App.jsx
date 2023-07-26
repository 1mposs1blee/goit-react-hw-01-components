import user from 'assets/user.json';
import data from 'assets/data.json';
import friends from 'assets/friends.json'
import transactions from 'assets/transactions.json';
import { Container } from './App.styled';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </Container>
  );
};
