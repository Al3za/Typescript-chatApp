import React,{useState} from 'react'
import Styled from 'styled-components';

const SendButton = Styled.button`margin: 5px; padding:5px; color: #555; background: papaya-whip`;
const Input = Styled.input`margin: 5px; padding:5px; color: #555; background: papaya-whip`;


                         
 const MessageSendButton = (props: { onSend: (message: string) => void }) => {

  const [message, setMessage] = useState  < string > ('');
 
  return (
    <>
        <Input value={message} onChange={(e) => { setMessage(e.target.value) }} />
        <SendButton  onClick={(e)=> props.onSend(message)} > send</SendButton>
    </>
  )
}

export default MessageSendButton;


