import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import type { ChangeEvent } from 'react'


export type ChatMessages={
  message:string,
  sender:'User'|'Chatbot',
  id:string
}

export function ChatInput({chatMessages,setChatMessages}:{chatMessages:ChatMessages[],setChatMessages:React.Dispatch<React.SetStateAction<ChatMessages[]>>}){
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