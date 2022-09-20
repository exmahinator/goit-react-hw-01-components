import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ProfileList,
  ProfileListItem,
  ProfileStyle,
  ProfileDescription,
  ProfileTitle,
  ProfileImage,
  ProfileStat,
  ContainerLimiter,
} from '../ui/index';

function Profile({ data }) {
  const { username, tag, location, avatar, stats } = data;
  return (
    <Container>
      <ContainerLimiter>
        <ProfileStyle>
          <ProfileImage src={avatar} alt="Happy guy" />
          <ProfileTitle>{username}</ProfileTitle>
          <ProfileDescription>@{tag}</ProfileDescription>
          <ProfileDescription>{location}</ProfileDescription>
        </ProfileStyle>
        <ProfileList>
          <ProfileListItem>
            <span>Followers</span>
            <ProfileStat>{stats.followers}</ProfileStat>
          </ProfileListItem>
          <ProfileListItem>
            <span>Views</span>
            <ProfileStat>{stats.views}</ProfileStat>
          </ProfileListItem>
          <ProfileListItem>
            <span>Likes</span>
            <ProfileStat>{stats.likes}</ProfileStat>
          </ProfileListItem>
        </ProfileList>
      </ContainerLimiter>
    </Container>
  );
}

export default Profile;

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

/* <div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
    <p className="name">Petra Marica</p>
    <p className="tag">@pmarica</p>
    <p className="location">Salvador, Brasil</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>; */

// import user from 'path/to/user.json;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />
