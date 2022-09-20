import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendName } from '../ui/index';

function FriendsItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus status={isOnline ? 'green' : 'red'} />
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

export default FriendsItem;

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
