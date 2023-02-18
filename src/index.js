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
            id: this.comments.length + 1,
            comment: d.comment,
            editable: true,
            creationDate: (new Date).toLocaleString('en-GB'),
            user: this.user,
        };

        this.comments.push(c);

        return true;
    }

    movieComments(id) {
        return this.comments;
    }

    saveComment(d, id = 0) {
        const i = (id > 0) ? id : this.comments.length + 1;
        let c = {
            id: i,
            comment: d,
            editable: true,
            creationDate: (new Date).toLocaleString('en-GB'),
            user: this.user,
        };

        if (id == 0)
            this.comments.push(c);
        else  {
            const o = this.comments.find(c => c.id==i);
            const index = this.comments.indexOf(o);
            this.comments.splice(index, 1, c);
        }
    }
};

const api = new Api();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App Api={api} />
    </React.StrictMode>
);
