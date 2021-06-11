import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

// using array
const Avatar = (props) => {
    const AvatarListArray = [
        {
            id:1,
            name:"Seeta",
            work:"Frontend"
        },
        {
            id:2,
            name:"Geeta",
            work:"Android"
        },
        {
            id:3,
            name:"Meeta",
            work:"Backend"
        },
        {
            id:4,
            name:"Reeta",
            work:"Graphic"
        }
    ]

    // using map/ loop
    const avatarcard = AvatarListArray.map( (avatari, i) => {
        return <AvatarList id={AvatarListArray[i].id} 
                            name={AvatarListArray[i].name} 
                            work={AvatarListArray[i].work}/>
    })

    return (
        <div className="tc">
            <h1>WELCOME TO AVATAR</h1>
            {avatarcard}
            <button className="br3 bg-grey w-third h3"> Like </button>
        </div>
    )

    // using saperately:
    // return (
    //     <div className="tc">
    //         <h1>WELCOME TO AVATAR</h1>
    //         <AvatarList id={AvatarListArray[0].id} 
    //                     name={AvatarListArray[0].name} 
    //                     work={AvatarListArray[0].work}/>
    //         <AvatarList id={AvatarListArray[1].id} 
    //                     name={AvatarListArray[1].name} 
    //                     work={AvatarListArray[1].work}/>
    //         <AvatarList id={AvatarListArray[2].id} 
    //                     name={AvatarListArray[2].name} 
    //                     work={AvatarListArray[2].work}/>
    //         <AvatarList id={AvatarListArray[3].id} 
    //                     name={AvatarListArray[3].name} 
    //                     work={AvatarListArray[3].work}/>
    //                     {avatarcard}
    //         <button className="br3 bg-grey w-third h3"> Like </button>
    //     </div>
}

export default Avatar; 