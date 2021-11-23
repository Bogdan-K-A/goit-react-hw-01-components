import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline, type }) {
  return (
    <div>
      <span className={isOnline ? ` ${s[type]} ` : ` ${s[type]}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // isOnline: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['statusOnline', 'statusOfline']),
};

export default FriendListItem;
