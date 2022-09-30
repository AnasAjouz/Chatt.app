import "./Contact.scss";

export const Contact = ({
  avatarURL,
  online,
  name,
  surname,
  messageHistory,
  onSelect,
}) => (
  <div className="contact-card" onClick={onSelect}>
    <div className="contact-avatar">
      <img src={avatarURL} alt="avatar" />
      <div className={["badge", online ? "online" : ""].join(" ")}></div>
    </div>
    <div className="contact-details">
      <h3>
        {name} {surname}
      </h3>
      <p>{messageHistory[messageHistory.length - 1].message}</p>
    </div>
  </div>
);
