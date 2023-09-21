import { Container } from "components/index.styled";
import {  ProfilePhoto, ProfileText, StatsList, StatsItem } from "./Profile.styled";
import PropTypes from 'prop-types';


export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <Container>
            <div>
                <ProfilePhoto
                src={avatar}
                alt={username}
                    width={300}
                    height={300}
                />
                <ProfileText>{username}</ProfileText>
                <ProfileText>#{tag}</ProfileText>
                <ProfileText>{location}</ProfileText>
            </div>

            <StatsList>
                <StatsItem>
                    <span>Followers:&nbsp;</span>
                    <span>{followers}</span>
                </StatsItem>
                <StatsItem>
                    <span>Views:&nbsp;</span>
                    <span>{views}</span>
                </StatsItem>
                <StatsItem>
                    <span>Likes:&nbsp;</span>
                    <span>{likes}</span>
                </StatsItem>
            </StatsList>
        </Container>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }
    )
}