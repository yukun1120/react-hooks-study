import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react';

const selfInfoContext = {
  name: "山田太郎",
  age: 22,
  hobby: "ゲーム"
}

const SelfInfoContext = createContext(selfInfoContext);

createRoot(document.getElementById('root')).render(
  <SelfInfoContext.Provider value={selfInfoContext}>
    <StrictMode>
      <App />
    </StrictMode>
  </SelfInfoContext.Provider>
)

export default SelfInfoContext;