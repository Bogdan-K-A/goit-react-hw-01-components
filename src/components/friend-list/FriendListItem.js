import React from 'react'
import PropTypes from 'prop-types'
import s from './FriendList.module.css'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? s.statusOnline : s.statusOfline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem
