/* ---------------------------------- ДЗ 1 ---------------------------------- */
import Profile from './components/social-profile/Profile'
import Container from './components/container/Container'
import user from './components/social-profile/user.json'
/* ---------------------------------- ДЗ 2 ---------------------------------- */
import StatisticsList from './components/statistics/StatisticsList'
import data from './components/statistics/data.json'
import FriendList from './components/friend-list/FriendList'
import friends from './components/friend-list/friends.json'
import TranactionList from './components/transaction-history/TranactionList'
import transactions from './components/transaction-history/transactions.json'
export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticsList title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TranactionList items={transactions} />
    </Container>
  )
}
