import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

class Api {
    comments = [];

    user = {
        id: 1,
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
            ourScore: 4
        },
        {
            id: 'BBB1',
            title: 'Movie2',
            summary: 'something',
            imagePath: 'movie.jpg',
            globalScore: 3.6,
            releaseDate: '1958',
            watchedDate: '',
            ourScore: 0
        }, 
        {
            id: 'CCC1',
            title: 'Movie3',
            summary: 'something',
            imagePath: 'movie.jpg',
            globalScore: 3.6,
            releaseDate: '1958',
            watchedDate: '2010',
            ourScore: 7.2
        }, 
    ];

    saveComment(movie, user, data) {
        const c = {
            id: (data.id == 0) ? (this.comments.length + 1) : data.id,
            comment: data.comment,
            userId: user.id,
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
                id: this.comments.lenght + 1,
                comment: data.comment,
                userId: user.id,
                movieId: movie.id,
                creationDate: (new Date).toLocaleDateString('en-GB')
            };

            this.comments.push(c);
        }
    }

    login(email, password) {
        return this.user;
    }

    find(what, where) {
        return this.movies;
    }

    getMovieDetails(id) {
        let movie = null;
        this.movies.forEach((m) => {
            if (m.id == id)  {
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
};

const api = new Api();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App Api={api} />
    </React.StrictMode>
);
