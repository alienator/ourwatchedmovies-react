import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

class Api {
    login() {
        return true;
    }

    userInfo() {
        return {
            name: 'User Loged 1',
            imagePath: 'user.jpg'
        };
    }
};

const api = new Api();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App Api={api}/>
  </React.StrictMode>
);
