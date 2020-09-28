import React from 'react';
import Row from './Row';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CopyrightIcon from '@material-ui/icons/Copyright';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const SideBar=()=>{
    return(
        <div className="sidebar">
      
            <Row clicked Icon={HomeIcon} title="Home"/>
            <Row Icon={WhatshotIcon} title="Trending"/>
            <Row Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <Row Icon={VideoLibraryIcon} title="Library"/>
            <Row Icon={HistoryIcon} title="Hitory"/>
            <Row Icon={PlayArrowIcon} className="ss" title="Your videos"/>
            <Row Icon={WatchLaterIcon} title="Watch Later"/>
            <Row Icon={ThumbUpIcon} title="Liked videos"/>
            <hr/>
            <h4>MORE FROM YOUTUBE</h4>
            <Row Icon={VideogameAssetIcon} title="Gaming"/>
            <Row Icon={WifiTetheringIcon} title="Live"/>
            <hr/>
            <Row Icon={SettingsIcon} title="Settings"/>
            <Row Icon={FlagIcon} title="Report history"/>
            <Row Icon={HelpIcon} title="Help"/>
            <Row Icon={FeedbackIcon} title="Send feedback"/>
            <hr/>
            <p>About Press Copyright Contact us Creators Advertise Developers</p>
            <p>Terms Privicy Policy & Safety How Youtube works Test new Features</p>
            <span><CopyrightIcon className="span_icon"/> 2020 Google LLC</span>
        </div>
    )
}
export default SideBar;