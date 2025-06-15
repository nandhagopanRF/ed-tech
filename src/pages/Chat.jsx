import React, { useEffect, useRef, useState } from "react";
import '../css/Chat.css'
import { useNavigate, useParams } from "react-router-dom";
const Chat = () => {
    
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey, How r u?", type: "received"},
        { id: 2, text: "I'm fine what abt u?", type: "sent"},
    ]);
    
    const navigate = useNavigate();
    const {name} = useParams();

    // For sending message
    const sendMessage = () => {
        const trimmed = input.trim();
        if(!trimmed) return;

        const newMessage = {
            id: messages.length + 1,
            text: trimmed,
            type: "sent"
        };

        setMessages([...messages, newMessage]);
        setInput("");
    }

    // Sends message when pressed Enter
    const handleEnter = (e) => {
        if (e.key === "Enter")
        {
            sendMessage();
        }
    }

    // Back button
    const backBtn = () => {
        navigate("/feed")
    }

    const bottomRef = useRef();

    // Scroll effect
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth"});
    }, [messages]);

    return (
        <>
            <div className="chat-wrapper">
                <button className="back-btn" onClick={backBtn}> ← </button>
                <div className="chat-container">
                    {/* Instead of demo replace it with user ka name */}
                    <div className="chat-header">Chat with {decodeURIComponent(name)}</div>

                    <div className="chat-message-list">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.type}`}>    
                                {msg.text}
                            </div>
                        ))}
                        <div ref={bottomRef}></div>
                    </div>

                    <div className="chat-footer">
                        <input 
                            type="text" 
                            className="chat-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleEnter}
                        />
                        <button className="chat-btn" onClick={sendMessage}>Send</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chat;