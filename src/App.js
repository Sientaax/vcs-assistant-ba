import './App.css';

import { Notification } from './components/Notification/notification'
import { Assistant } from './components/AssistanceSystem/assistant'

export const App = () => {

  const isClicked = () => {
    document.getElementById('assistant').classList.remove('assistant-hidden')
    document.getElementById('notification').classList.add('notification-hidden')
  }

  return (
    <div className="App">
      <div id='notification'>
        <Notification clickListener={isClicked} />
      </div>
      <div id="assistant" className='assistant-hidden'>
        <Assistant />
      </div>
    </div>
  );
}
