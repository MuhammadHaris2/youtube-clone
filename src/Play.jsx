import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const Play = ({title,views,channel,timestamp,image,profileimage})=>{
    return(
        <div className="play">
            <img className="play_image" src={image} alt="ssa"/>

            <div className="play_info">
                <Avatar className="play_avatar" src={profileimage} alt={channel}/>

                <div className="play_text">
                 <h4>{title}</h4>
                 <p>{channel}</p>
                 <p>{views} * {timestamp}</p>


                 </div>
  
            
            </div>


        </div>
    )
}

export default Play;