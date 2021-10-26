import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
    <div className='header'>
            <div className="header__left">
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1634149895~hmac=fbe345b68679046818311210bd8cdfea" alt=""/>
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text" name="" id=""/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Chats"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D176811486372032&imgrefurl=https%3A%2F%2Fm.facebook.com%2FRandom-176811486372032%2F&tbnid=28WseG_shT2cbM&vet=12ahUKEwiM-YGPnMvzAhUDkUsFHfnUD98QMygBegUIARC9AQ..i&docid=TBlIsmmBIzRPHM&w=705&h=711&q=profile%20pic%20random&ved=2ahUKEwiM-YGPnMvzAhUDkUsFHfnUD98QMygBegUIARC9AQ" title="me"></HeaderOption>
            </div>
    </div>
    )
}

export default Header

