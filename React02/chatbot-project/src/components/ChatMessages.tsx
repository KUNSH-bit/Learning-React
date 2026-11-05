import { useRef,useEffect } from 'react'
import {ChatMsg} from './ChatMsg.tsx'
import type {ChatMessages} from './ChatInput.tsx'

function ChatMessage({chatMessages}:{chatMessages:ChatMessages[]}){
            const chatMsgRef=useRef<HTMLDivElement>(null);
            useEffect(()=>{
                const containerElem=chatMsgRef.current;
                if (containerElem){
                    containerElem.scrollTop=containerElem.scrollHeight;
                }
            },[chatMessages]);
            // const array = React.useState(
            //     [{
            //     message:'hello chatbot',sender:'User',id:'1'
            //     },{
            //     message:"Hello! How can i help you today?" ,sender:"Chatbot",id:'2'
            //     },{
            //     message:"can you flip a coin", sender:"User",id:'3'
            //     },{
            //     message:"Sure! It flipped to Heads.", sender:"Chatbot",id:'4'
            // }]);
            return(
                <div className="chat-msg-bottom" ref={chatMsgRef}>
                    {chatMessages.map((chatMessage)=>{
                        return(<ChatMsg message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id}/>)
                    })}
                </div>
            );
        }

export default ChatMessage;