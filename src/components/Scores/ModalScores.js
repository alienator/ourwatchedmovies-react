import React from 'react';

class ModalScores extends React.Component {
    constructor(props) {
        super(props);
    }

    changeScore(value) {
        //        this.setState({ comment: value });
        this.props.score.value = value;
    }

    handleSubmit() {
        this.props.onSubmit(this.props.score);
    }

    render() {
        return (
            <div className='modal'>
                <form
                    id="scores"
                    onSubmit={
                        (e) => {
                            e.preventDefault(); this.handleSubmit();
                        }
                    }>
                    <h2>Score</h2>
                    <div className='form-body'>
                        <label>
                            Score
                            <input
                                type='text'
                                onChange={
                                    (e) => this.changeScore(e.target.value)
                                }
                                name='score'
                                defaultValue={this.props.score.value} />
                        </label>
                        <button type='submit'>save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ModalScores;
