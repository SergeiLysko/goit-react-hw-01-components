import { styled } from "styled-components";

export const ProfilePhoto = styled.img`
    margin: 0 auto;
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
    box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
`;

export const ProfileText = styled.p`
    margin-top: 10px;
    text-align: center;
`;

export const StatsList = styled.ul`
    margin-top: 20px;
    gap: 10px;
    display: flex;
    font-size: smaller;
    border-top: 1px solid #fff;
    justify-content: center;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
