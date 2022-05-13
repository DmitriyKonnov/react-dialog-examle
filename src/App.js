import React, {useState} from 'react';
import Header from './components/Header';
import Dialog from './components/Dialog';
import Sender from './components/Sender';

const App = () => {
  const [message, addMessege] = useState(null);

  return (
    <div className='container'>
      <Header />
      <Dialog newMessege = {message}/>
      <Sender onAddMessege = {addMessege}/>
    </div>
  )
}

export default App;