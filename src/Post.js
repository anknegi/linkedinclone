import React from 'react'
import './Post.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({ name,description,message,photoUrl }) {
    return (
        <div className="post">
            <div class="post__header">
                <AccountCircleIcon />
                <div class="post__info">
                    <h2>Ankit Negi</h2>
                    <p>Description</p>
                </div>
            </div>
            <div class="post__body">
               <p>{message}</p>
           </div>

           <div class="post__buttons">
               <InputOption Icon={ThumbUpOffAltIcon} title="Like" />
               <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" />
               <InputOption Icon={ShareIcon} title="Share" />
               <InputOption Icon={SendIcon} title="Send" />
           </div>
        </div>
        
    )
}

export default Post
