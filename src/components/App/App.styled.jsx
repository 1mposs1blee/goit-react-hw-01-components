import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    font-size: 40px;

    color: ${({theme}) => theme.colors.black};
`;