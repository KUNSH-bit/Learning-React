import user from '../assets/User.jpg'
import chatbot from'../assets/chatbot.jpg'

type ChatMsgProps={
  message:string,
  sender:'User'|'Chatbot'
}

export function ChatMsg({message,sender}:ChatMsgProps){
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