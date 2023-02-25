import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

class Api {
    scores = [];
    comments = [];

    user = {
        name: 'User 1',
        imagePath: 'user.jpg'
    };

    movies = [
        {
            id: 'AAA1',
            title: 'Movie1',
            summary: 'something',
            imagePath: 'movie.jpg',
            globalScore: 5,
            releaseDate: '2005',
            watchedDate: '2009',
        },
        {
            id: 'BBB1',
            title: 'Movie2',
            summary: 'something',
            imagePath: 'movie.jpg',
            globalScore: 3.6,
            releaseDate: '1958',
            watchedDate: '',
        },
        {
            id: 'CCC1',
            title: 'Movie3',
            summary: 'something',
            imagePath: 'movie.jpg',
            globalScore: 3.6,
            releaseDate: '1958',
            watchedDate: '2010',
        },
    ];

    saveComment(movie, user, data) {
        const c = {
            id: (data.id == 0) ? (this.comments.length + 1) : data.id,
            comment: data.comment,
            movieId: movie.id,
            creationDate: (new Date).toLocaleDateString('en-GB')
        };

        if (data.id > 0) {
            const index = this.comments.findIndex(o => o.id == data.id);
            this.comments.splice(index, 1, c);
        } else {
            this.comments.push(c);
        }
    }

    addMovie(movie, user, data) {
        movie.ourScore = data.score;
        movie.watchedDate = data.watchedDate;
        this.movies.push(movie);

        if (data.comment) {
            const c = {
                id: this.comments.length + 1,
                comment: data.comment,
                movieId: movie.id,
                creationDate: (new Date).toLocaleDateString('en-GB')
            };

            this.comments.push(c);
        }

        if (data.score) {
            const s = {
                id: this.scores.length + 1,
                value: data.score,
                movieId: movie.id,
                modificationDate: (new Date).toLocaleDateString('en-GB'),
                editable: true
            };

            this.scores.push(s);
        }
    }

    login(email, password) {
        localStorage.setItem('loged', true);
        return this.user;
    }

    isUserLoged() {
        return (localStorage.getItem('loged')) ? this.user : null ;
    }
    

    find(what, where) {
        return this.movies;
    }

    getMovieDetails(id) {
        let movie = null;
        this.movies.forEach((m) => {
            if (m.id == id) {
                movie = m;
                return;
            }
        });

        return movie;
    }

    getComments(id) {
        let res = [];
        this.comments.forEach((c) => {
            if (c.movieId == id) {
                c.user = this.user;
                c.editable = true;
                res.push(c);
            }
        });
        return res;
    }

    getScores(movieId) {
        return this.scores;
    }

    saveScore(data) {
        let c = data;
        if (data.id == 0) {
            c.id = this.scores.length + 1;
            c.modificationDate = (new Date).toLocalDateString('en-GB');
        }

        if (data.id > 0) {
            const index = this.scores.findIndex(o => o.id == data.id);
            this.scores.splice(index, 1, c);
        } else {
            this.scores.push(c);
        }
    }

    saveUser(user) {
        console.log('UU', user);
    }
};

const api = new Api();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App Api={api} user={api.isUserLoged()}/>
    </React.StrictMode>
);
