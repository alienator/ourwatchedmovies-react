import React from 'react';

class ModalAddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            watchedDate: '',
            score: '',
            comment: ''
        };

    }

    submit() {
        this.props.onSubmit({
            watchedDate: this.state.watchedDate,
            score: this.state.score,
            comment: this.state.comment
        });
    }

    changeWatchedDate(value) {
        this.setState({ watchedDate: value });
    }

    changeScore(value) {
        this.setState({ score: value });
    }

    changeComment(value) {
        this.setState({ comment: value });
    }

    render() {
        return (
            <div className='modal'>
                <form id="add-movie" onSubmit={() => this.submit()}>
                    <h2>Add movie</h2>
                    <div className='form-body'>
                        <label>
                            Watched Date *
                            <input
                                onChange={(e) => this.changeWatchedDate(e.target.value)}
                                type='date'
                                name='watched-date' />
                        </label>
                        <label>
                            Score
                            <input
                                onChange={(e) => this.changeScore(e.target.value)}
                                placeholder='2.2 (0 - 10)'
                                type='text'
                                name='score' />
                        </label>
                        <label>
                            Comment
                            <textarea
                                onChange={(e) => this.changeComment(e.target.value)}
                                name='comment'></textarea>
                        </label>
                        <button type='submit'>add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ModalAddMovie;
