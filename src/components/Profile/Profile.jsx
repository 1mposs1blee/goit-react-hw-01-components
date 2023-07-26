import PropTypes from 'prop-types';
import {
  UserCard,
  UserDescription,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatOption,
  UserOptionName,
  UserOptionValue
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <UserDescription>
        <UserImage width={200} src={avatar} alt="User profile" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <UserStatOption>
          <UserOptionName>Followers:</UserOptionName>
          <UserOptionValue>{stats.followers}</UserOptionValue>
        </UserStatOption>
        <UserStatOption>
          <UserOptionName>Views:</UserOptionName>
          <UserOptionValue>{stats.views}</UserOptionValue>
        </UserStatOption>
        <UserStatOption>
          <UserOptionName>Likes:</UserOptionName>
          <UserOptionValue>{stats.likes}</UserOptionValue>
        </UserStatOption>
      </UserStats>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
