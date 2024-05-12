import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [messageInput, setMessageInput] = useState<string>('');
    const socket = io('http://localhost:3001');

    useEffect(() => {
        socket.on('message', (message: string) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <div>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatComponent;
