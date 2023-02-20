import React from 'react';

class ModalComment extends React.Component {
    constructor(props) {
        super(props);

    }

    changeComment(value) {
        //        this.setState({ comment: value });
        this.props.comment.comment = value;
    }

    handleSubmit() {
        this.props.onSubmit(this.props.comment);
    }

    render() {
        return (
            <div className='modal'>
                <form
                    id="comment"
                    onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }
                    }>
                    <h2>Comment</h2>
                    <div className='form-body'>
                        <label>
                            Comment
                            <textarea
                                onChange={(e) => this.changeComment(e.target.value)}
                                name='comment'
                                defaultValue={this.props.comment.comment}></textarea>
                        </label>
                        <button type='submit'>add</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default ModalComment;
