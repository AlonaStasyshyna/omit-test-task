import { useEffect, useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [message, setMessage] = useState(localStorage.getItem('message') || '');

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  }, [name, email, message]);

  const changeForm = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const submitForm = e => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter your Name"
          required
          onChange={changeForm}
        />
      </label>

      <label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your Email Address"
          required
          onChange={changeForm}
        />
      </label>

      <textarea
        name="message"
        value={message}
        rows="6"
        placeholder="Your Message"
        required
        onChange={changeForm}
      ></textarea>

      <button type="submit">Send</button>
    </form>
  );
};
