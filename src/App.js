import './App.css';

import { Assistant } from './components/assistant'

const URL = 'ws://localhost:80'
export var ws = new WebSocket(URL)

export const App = () => {
  ws.onopen = () => {
    console.log("connected")
  }

  ws.onclose = () => {
    console.log("disconnected")
  }

  return (
    <div className="App">
      <Assistant />
    </div>
  );
}
