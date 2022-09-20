import React from 'react';
import { Container, FriendList } from '../ui/index';
import FriendsItem from './FriendsItem';

function Friends({ friendsData }) {
  return (
    <Container>
      <FriendList>
        {friendsData &&
          friendsData.map(friend => (
            <FriendsItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
      </FriendList>
    </Container>
  );
}

export default Friends;

// avatar - посилання на аватар
// name - ім'я друга
// isOnline
