import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const Header = ()=>{
    const[clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }
    const closeMobMenu =()=>{
        setClicked(false);
    }

    return(
        <div className="header">
            <div className="h_left">
              <MenuIcon/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png" alt=""/>
            </div>
            <div className="h_middle">
                <input className="hm_input" type="text" placeholder="Search"/>
                <SearchIcon className="hm_icon"/>
            </div>
            <div className="navbar_menuicon">
           <IconButton onClick={handleClick} >
              {clicked? <CloseIcon className="nav_icon"/>:<ArrowDropDownIcon className="nav_icon"/>}
           </IconButton>
          </div>
            <div className={clicked? 'h_right active':'h_right'}>
             <VideoCallIcon className="hr_icon"/>
             <AppsIcon className="hr_icon"/>
             <NotificationsIcon className="hr_icon"/>
             <Avatar className="hr_icon" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.0-1/cp0/e15/q65/p120x120/102981840_3280599295498964_5955365528490904221_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=vKnbUgf2yFMAX97Cwbc&_nc_ht=scontent.fkhi16-1.fna&tp=3&oh=c9a38978ac3b095576a46e7d96e562cf&oe=5F8A7B23" />
            </div>
        </div>
    )
}

export default Header;