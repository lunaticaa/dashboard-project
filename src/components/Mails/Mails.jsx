import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mails.css';

const Mails = () => {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);
  const [reply, setReply] = useState('');

  // شبیه‌سازی دریافت پیام‌ها
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments') // API نمونه برای پیام‌ها
      .then((response) => {
        const enrichedMails = response.data.slice(0, 10).map((mail) => ({
          id: mail.id,
          senderName: mail.name,
          email: mail.email,
          message: mail.body,
          avatar: `https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 70
          )}`, // تصویر آواتار تصادفی
          read: Math.random() > 0.5, // پیام خوانده‌شده یا نه
        }));
        setMails(enrichedMails);
      })
      .catch((error) => console.error('Error fetching mails:', error));
  }, []);

  // تغییر وضعیت پیام به "خوانده‌شده"
  const markAsRead = (id) => {
    setMails(
      mails.map((mail) =>
        mail.id === id ? { ...mail, read: true } : mail
      )
    );
  };

  // مدیریت تغییر در پاسخ پیام
  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  // ارسال پاسخ
  const handleReplySubmit = () => {
    if (reply.trim() && selectedMail) {
      alert(`Reply sent to: ${selectedMail.email}\nMessage: ${reply}`);
      setReply('');
      setSelectedMail(null); // بستن فرم پس از ارسال
    }
  };

  return (
    <div className="mails-container">
      <h1>Inbox</h1>

      <div className="mails-list">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className={`mail-item ${mail.read ? 'read' : 'unread'}`}
            onClick={() => {
              setSelectedMail(mail);
              markAsRead(mail.id);
            }}
          >
            <img src={mail.avatar} alt={mail.senderName} className="avatar" />
            <div className="mail-details">
              <h3>{mail.senderName}</h3>
              <p>{mail.message.slice(0, 50)}...</p>
              <span className="status">
                {mail.read ? 'Read' : 'Unread'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedMail && (
        <div className="reply-section">
          <h2>Reply to: {selectedMail.senderName}</h2>
          <p><strong>Message:</strong> {selectedMail.message}</p>
          <textarea
            value={reply}
            onChange={handleReplyChange}
            placeholder="Type your reply here..."
          />
          <button onClick={handleReplySubmit}>Send Reply</button>
          <button onClick={() => setSelectedMail(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Mails;