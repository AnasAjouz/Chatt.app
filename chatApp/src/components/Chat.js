import { useState, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./Chat.scss";

export const Chat = ({ selectedContact, onSubmit }) => {
  const [draftMessage, setDraftMessage] = useState("");

  useEffect(() => {
    setDraftMessage("");
  }, [selectedContact]);

  const handleChange = (e) => {
    const { value } = e.target;

    setDraftMessage(value);
  };

  return (
    <div className={["chat", !selectedContact ? "no-contact" : ""].join(" ")}>
      {selectedContact ? (
        <>
          <div className="chat-header">
            <div className="chat-avatar">
              <img src={selectedContact.avatarURL} alt="avatar" />
              <div
                className={[
                  "badge",
                  selectedContact.online ? "online" : "",
                ].join(" ")}
              ></div>
            </div>
            <div className="chat-contact-details">
              <h3>
                {selectedContact.name} {selectedContact.surname}
              </h3>
              <p>{selectedContact.lastMessage}</p>
            </div>
          </div>
          <div className="chat-history">
            {selectedContact.messageHistory.map((message, index) => (
              <ChatMessage
                key={message.id}
                selectedContact={selectedContact}
                index={index}
                {...message}
              />
            ))}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => onSubmit(e, draftMessage)}
          >
            <input
              value={draftMessage}
              onChange={handleChange}
              type="text"
              placeholder="Write a message..."
            />
            <button type="submit" disabled={!draftMessage.length}>
              Send
            </button>
          </form>
        </>
      ) : (
        <h2>Select a contact to start chatting</h2>
      )}
    </div>
  );
};
