import React from 'react'
import s from './FriendList.module.css'
import FriendListItem from './FriendListItem'

function Friends({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((el) => (
        <li className={s.item} key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        </li>
      ))}
    </ul>
  )
}

export default Friends
