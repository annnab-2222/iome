import './styles/index.css'
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';


const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Or, if you want to use the other import:
  // createRoot(rootElement).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  // );
} else {
  console.error("Root element not found");
}
