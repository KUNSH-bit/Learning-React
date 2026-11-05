import { useState,useRef,useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { Chatbot } from 'supersimpledev'
import './App.css'
import user from'./assets/User.jpg'
import chatbot from'./assets/chatbot.jpg'


type ChatMessages={
  message:string,
  sender:'User'|'Chatbot',
  id:string
}
type ChatMsgProps={
  message:string,
  sender:'User'|'Chatbot'
}
function ChatInput({chatMessages,setChatMessages}:{chatMessages:ChatMessages[],setChatMessages:React.Dispatch<React.SetStateAction<ChatMessages[]>>}){
        const[inputText,setInputText]=useState('');
        function saveInputText(event:ChangeEvent<HTMLInputElement>){
            setInputText(event.target.value)
        }

        function sendMessage(){
            const newChatMessages:ChatMessages[]=[
                    ...chatMessages,{
                        message:inputText,
                        sender:'User',
                        id: crypto.randomUUID()
                   }
            ]

            setChatMessages(newChatMessages);

            const response = Chatbot.getResponse(inputText);
            setChatMessages([
                ...newChatMessages,{
                    message:response,
                    sender:'Chatbot',
                    id: crypto.randomUUID()
                   }
            ]);
            setInputText('');
        }

        return(
            <div className="flex-box">
                <input placeholder="Send a message to ChatBot" size={30} onChange={saveInputText} value={inputText} className="Input"/>
                <button onClick={sendMessage} className="Send-Button">Send</button>
            </div>
        );
      }

      function ChatMsg({message,sender}:ChatMsgProps){
        // const message = props.message; // instead of this use
        // const sender=props.sender;
        // const {message,sender} = props; // instead of this also there is a better way
        // if(sender === 'Chatbot'){
        //     return(
        //         <div>
        //             <img src="chatbot.jpg" width="40"/>
        //             {message}
        //         </div>  
        //     );
        // }
            return(
                <div className={sender==='User'?'chat-msg-user':'chat-msg-chatbot'}>
                    {sender ==='Chatbot' && <img src={chatbot} className='chat-msg-profile'/>}
                    <div className="chat-msg-text">
                        {message}
                    </div>
                    {sender === 'User' && <img src={user} className='chat-msg-profile' />}
                </div>
            );
        }


        function ChatMessages({chatMessages}:{chatMessages:ChatMessages[]}){
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

function App(){

            const [chatMessages,setChatMessages]=useState<ChatMessages[]>([

                {
                    message: 'hello chatbot',
                    sender: 'User',
                    id: '1'
                },
                {
                    message: 'Hello! How can I help you today?',
                    sender: 'Chatbot',
                    id: '2'
                },
                {
                    message: 'can you flip a coin',
                    sender: 'User',
                    id: '3'
                },
                {
                    message: 'Sure! It flipped to Heads.',
                    sender: 'Chatbot',
                    id: '4'
                }
            ]);
            
            // const chatMessages = array[0];
            // const setChatMessages = array[1];

            return(
                <div className="to-mid">
                    <ChatMessages chatMessages={chatMessages}/>
                    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
                </div>        
            );
        }

export default App
