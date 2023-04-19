import envelope from '../../../images/envelope.svg';

export const ModalChatButton = ({ openChat }) => {
  return (
    <button type="button" onClick={openChat} aria-label="Open chat button">
      <img src={envelope} alt="Envelope" />
    </button>
  );
};
