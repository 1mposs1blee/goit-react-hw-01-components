import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendImage,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
          <FriendStatus isOnline={isOnline}>{isOnline ? "Online" : "Offline"}</FriendStatus>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
