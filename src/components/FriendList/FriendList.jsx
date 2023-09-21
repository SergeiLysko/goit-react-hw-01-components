import { Container } from "components/index.styled"
import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <Container>
            <ul>
                {friends.map(({ avatar, name, isOnline, id }) => 
                    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
                )}
            </ul>
        </Container>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}