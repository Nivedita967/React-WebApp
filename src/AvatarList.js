import React from 'react';

const AvatarList = (props) => {
    return <div className="avatar_style ma4 bg-light-purple dib pa3">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
        <h1>{props.name}</h1>
        <p>{props.work}</p>
    </div>
}

export default AvatarList;