import './App.css';

import { Notification } from './components/Notification/notification'
import { Assistant } from './components/AssistanceSystem/assistant'

export const App = () => {

  const isClicked = () => {
    if(document.getElementById('assistant').classList.contains('assistant-hidden')){
      document.getElementById('assistant').classList.remove('assistant-hidden')
    } else{
      document.getElementById('assistant').classList.add('assistant-hidden')
    }
  }

  const shutDownAssistant = () => {
      document.getElementById('assistant').classList.add('assistant-hidden')
  }

  return (
    <div className="App">
      <div id='notification'>
        <Notification clickListener={isClicked} />
      </div>
      <div id="assistant" className='assistant-hidden'>
        <Assistant closeAssistant={shutDownAssistant}/>
      </div>
    </div>
  );
}
