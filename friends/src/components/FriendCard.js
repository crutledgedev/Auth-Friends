import React from 'react';
import {axiosWithAuth} from '../util/axiosWithAuth';

const FriendCard = props => {

    const handleDelete = () => {
        // e.preventDefault();
        axiosWithAuth()
          .delete(`/api/friends/${props.id}`)
     //   .then(this.props.history.push('/protected'))

    };

    console.log('card', props)
    return (
        <div> 
            <h3>{props.name}</h3>
            <ul>
                <li>Age:{props.age}</li>
                <li>Email:{props.email}</li>
                <button onClick={handleDelete}>Delete</button>
            </ul>


        </div>
    )
}

export default FriendCard;