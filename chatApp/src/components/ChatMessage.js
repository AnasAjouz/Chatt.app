import "./ChatMessage.scss";

export const ChatMessage = ({
  selectedContact,
  index,
  message,
  timestamp,
  userId,
}) => (
  <>
    {index === 0 && <span className="chat-initial-timestamp">{timestamp}</span>}
    <div
      className={[
        "chat-bubble-wrapper",
        userId === selectedContact.id ? "left" : "right",
      ].join(" ")}
    >
      <div className="chat-bubble-col">
        {index > 0 && <span className="chat-timestamp">{timestamp}</span>}
        <p className="chat-bubble">{message}</p>
      </div>
    </div>
  </>
);
