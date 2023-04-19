import person from '../../images/person.svg';
import paperclip from '../../images/paperclip.svg';
import paperPlane from '../../images/paperPlane.svg';
import { useEffect, useState } from 'react';

export const ModalChat = () => {
  const [arrOfMessages, setArrOfMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      setArrOfMessages(prevState => [...prevState, message]);
    }
  }, [message]);

  const sendMessage = e => {
    e.preventDefault();

    setMessage(e.target.elements.message.value);
    e.target.reset();
  };

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursString = String(hours).length > 1 ? hours : `0${hours}`;
    const minutesString = String(minutes).length > 1 ? minutes : `0${minutes}`;

    return `${hoursString}:${minutesString}`;
  };

  return (
    <div>
      <div>
        <img src={person} alt="Person" />
        <p>eLearning company</p>
        <p>Operator is online</p>
      </div>

      <div>
        <p>today</p>
        {arrOfMessages.length > 0 &&
          arrOfMessages.map((el, i) => (
            <div key={i}>
              <p>{el}</p>
              <span>{getTime()}</span>
            </div>
          ))}
      </div>

      <form onSubmit={sendMessage}>
        <label>
          <input
            type="text"
            name="message"
            placeholder="Your message..."
            required
          />
        </label>
        <button type="button" aria-label="Add file button">
          <img src={paperclip} alt="Paperclip" />
        </button>
        <button type="submit" aria-label="Submit form button">
          <img src={paperPlane} alt="Paper plane" />
        </button>
      </form>
    </div>
  );
};
