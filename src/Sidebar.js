import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <div className="sidebar__hash">#</div>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar"> 
          
           <div className="sidebar__top">
           <img src="https://images.unsplash.com/photo-1547532182-bf296f6be875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80" alt="" />
               <AccountCircleIcon className="sidebar__avatar" />
               <h2>Ankit Negi</h2>
               <h4>ankitnegi2008@gmail.com</h4>
           </div>
           <div className="sidebar__stats">

          
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,332</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,332</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>

                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('php')}
            </div>

        </div>
      
    )
}

export default Sidebar
