// ChatComponent.tsx

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const socket = io(); // assuming the socket.io server is hosted on the same domain

    useEffect(() => {
        // Listener for receiving messages
        socket.on('chat message', (msg: string) => {
            setMessages(prevMessages => [...prevMessages, msg]);
            window.scrollTo(0, document.body.scrollHeight);
        });

        // Clean up function to remove the listener when component unmounts
        return () => {
            socket.off('chat message');
        };
    }, []); // empty dependency array means this effect runs only once on mount

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            socket.emit('chat message', inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    autoComplete="off"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatComponent;
