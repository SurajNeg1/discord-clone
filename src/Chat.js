import React, { useEffect, useState } from 'react'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db  from './firebase';
import firebase from "firebase";

function Chat() {

    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
                .orderBy('timestamp','desc')
                .onSnapshot(snapshot=>
                    setMessages(snapshot.docs.map((doc)=>doc.data())
                ))
        }
    },[channelId])

    const sendMessages = (e)=>{
        e.preventDefault();

            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add(
                {
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    messages:input,
                    user: user
                }
            );
            setInput("");    
    }
    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>

            <div className="chat__messages">
                {messages.map((message)=>(
                    <Message
                        timestamp={message.timestamp}
                        message={message.messages}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large"/>
                <form>
                    <input 
                        placeholder={`Message ${channelName}`} 
                        value={input}   
                        onChange={(e)=> setInput(e.target.value)}
                        disabled={!channelId}    
                    />
                    <button 
                        type="submit" 
                        className="chat__inputButton"
                        onClick={sendMessages}
                    >
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardRoundedIcon fontSize="large"/>
                    <GifRoundedIcon fontSize="large"/>
                    <EmojiEmotionsRoundedIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
