import PropTypes from 'prop-types'
import React from 'react'
import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={s.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}

export default FriendList
