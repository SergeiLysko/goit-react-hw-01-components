import { FriendsItem, FriendsStatus } from "./FriendListItem.styled"
import PropTypes from "prop-types";


export const FriendListItem = ({ avatar, name, isOnline }) => {
        return (<FriendsItem>
            <FriendsStatus $isOnline={isOnline} ></FriendsStatus>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </FriendsItem>
        )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}