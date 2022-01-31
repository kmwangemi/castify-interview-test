import './message.css';

const Message = ({ children }) => {
   return <div className='alert-danger'>{children}</div>;
};

export default Message;
