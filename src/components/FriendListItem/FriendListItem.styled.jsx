import styled from "@emotion/styled";

export const Friend = styled.li`
margin-bottom: 10px;

display: flex;
align-items: center;
gap: 10px;
`;

export const FriendStatus = styled.span`
color: ${({isOnline, theme}) => (isOnline ? theme.colors.green : theme.colors.red)};
`;

export const FriendImage = styled.img``;

export const FriendName = styled.p``;