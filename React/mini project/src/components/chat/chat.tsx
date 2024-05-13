// App.tsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.scss';

const socket = io();

const App: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.on('chat message', (msg: string) => {
            setMessages(prevMessages => [...prevMessages, msg]);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim()) {
            socket.emit('chat message', inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="App">
            <ul id="messages">
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <form id="form" onSubmit={handleSubmit}>
                <input
                    id="input"
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default App;
