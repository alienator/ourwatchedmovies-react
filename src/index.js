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

    find(what, where) {
        return [
            {id: 'AAA', title:'Movie1', summary:'something', imagePath: 'movie.jpg'},
            {id: 'AAA', title:'Movie1', summary:'something', imagePath: 'movie.jpg'},
            {id: 'AAA', title:'Movie1', summary:'something', imagePath: 'movie.jpg'},
        ];
    }

    movieDetails() {
        return (
            {
                id: 'AABB11',
                title: 'Movie 1',
                imagePath: 'movie.jpg',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                releaseDate: '2008',
                globalScore: 3.3,
                ourScore: 0.0,
                watchedDate: '2009'
            }
        );
    }
};

const api = new Api();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App Api={api}/>
  </React.StrictMode>
);
