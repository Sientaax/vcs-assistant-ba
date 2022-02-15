import './App.css';

import { Assistant } from './components/assistant'

const URL = 'ws://localhost:80'
export var ws = new WebSocket(URL)

export const App = () => {
  return (
    <div className="App">
      <Assistant />
    </div>
  );
}
