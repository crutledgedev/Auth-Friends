import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';
import FriendCard from './FriendCard';
import NewFriend from './NewFriend';

export default function FriendList(props) {

    const [friends, setFriends] = useState([])


    const getData = () =>{
        axiosWithAuth().get('/api/friends')
        .then(res => {
            setFriends(res.data)
             console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    

    useEffect(()=>{
       getData()
    },[]);
    

    return (
        <div>
         <h3>Friends</h3>
         <NewFriend/>
         <div>
         {
             friends.map(each => (
                 <div>
                <FriendCard name={each.name} age={each.age} email={each.email} />
                </div>
             ))
         }
         
         </div>
        </div>
    )
}
