import styled from "@emotion/styled";

export const UserCard = styled.div`
    border: 4px solid black;
    border-radius: 8px;
`;

export const UserDescription = styled.div`
    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

export const UserImage = styled.img``;

export const UserName = styled.p``;

export const UserTag = styled.p``;

export const UserLocation = styled.p``;

export const UserStats = styled.ul`
    padding: 20px;

    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 20px;

    border-top: 4px solid black;
`;

export const UserStatOption = styled.li``;

export const UserOptionName = styled.span``;

export const UserOptionValue = styled.span`
margin-left: 8px;
`;