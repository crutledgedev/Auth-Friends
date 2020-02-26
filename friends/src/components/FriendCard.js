import React from 'react';

const FriendCard = props => {
    return (
        <div> 
            <h3>{props.name}</h3>
            <ul>
                <li>Age:{props.age}</li>
                <li>Email:{props.email}</li>
            </ul>
        </div>
    )
}

export default FriendCard;