import React,{ useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';
import firebase from './firebase';

function Feed() {
    // eslint-disable-next-line
    const [posts,setPosts] = useState([]);
// eslint-disable-next-line
    const [input, setInput] = useState('');

    useEffect(() => {
        // db.collection["posts"].onSnapshot((snapshot) => 
        //     setPosts(
        //         snapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data(),
        //     }))
        //    )
        // );
    }, []);

    const sendPost = (e) => {
        e.prevent.default();

        db.collection['posts'].add({
            name: 'Ankit Negi',
            description: 'This is test post',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.fieldValue.serverTimestamp(),
        });
    }

    return (
       <div className="feed">
           <div className="feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon />
                   <form>
                       <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                       <button onClick={sendPost} type="submit">Send</button>
                   </form>                
               </div>
               <div className="feed__inputOptions">
                   <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                   <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A3E" />
                   <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
                   <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                 
               </div>
           </div>
          { posts.map(({id, data: {name,description,message,photoUrl} }) => {
             return <Post 
                key= {id}
                name= {name}
                description={description}
                message={message} 
                photoUrl={photoUrl}
                />
          })}
      
       </div>
    )
}

export default Feed
