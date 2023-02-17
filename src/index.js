import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

class Api {
    user = {
        name: 'User Loged 1',
        imagePath: 'user.jpg'
    };

    details = {
        id: 'AABB11',
        title: 'Movie 1',
        imagePath: 'movie.jpg',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
        releaseDate: '2008',
        globalScore: 3.3,
        ourScore: 0.0,
        watchedDate: ''
    };

    comments = [];

    login() {
        return true;
    }

    userInfo() {
        return this.user;
    }

    find(what, where) {
        return [
            { id: 'AAA', title: 'Movie1', summary: 'something', imagePath: 'movie.jpg' },
            { id: 'AAA', title: 'Movie1', summary: 'something', imagePath: 'movie.jpg' },
            { id: 'AAA', title: 'Movie1', summary: 'something', imagePath: 'movie.jpg' },
        ];
    }

    movieDetails() {
        return this.details;
    }

    addMovie(d, m) {
        this.details.watchedDate = d.watchedDate;
        this.details.ourScore = d.score;

        let c = {
            comment: d.comment,
            creationDate: (new Date).toLocaleString('en-GB'),
            user: this.user,
        };

        this.comments.push(c);

        return true;
    }

    movieComments(id) {
        return this.comments;
    }

    saveComment(d) {
        let c = {
            comment: d,
            creationDate: (new Date).toLocaleString('en-GB'),
            user: this.user,
        };

        this.comments.push(c);
    }
};

const api = new Api();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App Api={api} />
    </React.StrictMode>
);
