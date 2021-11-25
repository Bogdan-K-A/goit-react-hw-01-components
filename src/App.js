/* ---------------------------------- ТЗ 1 ---------------------------------- */
import Profile from './components/social-profile/Profile'
import Container from './components/container/Container'
import user from './components/social-profile/user.json'
/* ---------------------------------- ТЗ 2 ---------------------------------- */
import Statistics from './components/statistics/Statistics'
import data from './components/statistics/data.json'
/* ---------------------------------- ТЗ 3 ---------------------------------- */
import FriendList from './components/friend-list/FriendList'
import friends from './components/friend-list/friends.json'
/* ---------------------------------- ТЗ 4 ---------------------------------- */
import TransactionList from './components/transaction-history/TransactionList'
import transactions from './components/transaction-history/transactions.json'

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionList items={transactions} />
    </Container>
  )
}
