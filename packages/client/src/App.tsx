import { useState } from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Styled from 'styled-components';
import './App.css';
import MessageSendButton from './pages/MessageSendButton';
import User  from './pages/User';
//import UserName from "../../shared/src/interfaces"


const Message= Styled.p`margin: 5px; padding:5px; color: #555; background: papaya-whip`


function App() {


  const navigate = useNavigate();

  const [messages, setMessages] = useState<string[]>([]);
  const [users, setUsers] = useState<string>('');
  const [error, setError] = useState<string>('');

  const sendMessage = (message: string) => {
    messages.push(users);
      setMessages([...messages, message]);
      console.log(messages.length)
  }

  const ActualUser =  (item: string | undefined )  => {
    console.log()
     if (!item ) {
       return setError('ange ett giltig username')
     } else {
       setUsers(item)
       navigate('/Chat')
     }
  } 
  
  
  return (
    
    <div className="App">
       
        <Routes>
          <Route path='/' element={< User onSend2={ActualUser}/>} />
          <Route path='/Chat' element={< MessageSendButton onSend={sendMessage} />} />
        </Routes>
      
      

      <div className='App-content' >
        <div className='MessageList' >
          
        {
          messages.map((message,index) => {
            return (
              <Message key={index} > {message} </Message>
            )
          })
          } {error} 
          
      </div>
      </div>
      </div>
      
  );
}

export default App;

