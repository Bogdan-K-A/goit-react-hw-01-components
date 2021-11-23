import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li className="item" key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.avatar}
          />
        </li>
      ))}
    </ul>
  );
}

export default Friends;
