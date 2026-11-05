import { useState} from 'react'
import './App.css'
import {ChatInput } from './components/ChatInput.tsx'
import type { ChatMessages } from './components/ChatInput.tsx';
import ChatMessage from './components/ChatMessages.tsx';


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
                    <ChatMessage chatMessages={chatMessages}/>
                    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
                </div>        
            );
        }

export default App
