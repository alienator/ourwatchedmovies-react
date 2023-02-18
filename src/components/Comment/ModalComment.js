import React from 'react';

class ModalComment extends React.Component {
    c = (this.props.comment) ? this.props.comment.comment : '';
    
    constructor(props) {
        super(props);
        
        this.state = {
            comment: this.c
        };
    }

    changeComment(value) {
        this.setState({ comment: value });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.comment);
    }

    render() {
        return (
            <div className='modal'>
                <form id="comment" onSubmit={
                    (e) => { e.preventDefault(); this.handleSubmit(); }}>
                    <h2>Comment</h2>
                    <div className='form-body'>
                        <label>
                            Comment
                            <textarea
                                onChange={(e) => this.changeComment(e.target.value)}
                                name='comment'
                                defaultValue={this.c}></textarea>
                        </label>
                        <button type='submit'>add</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default ModalComment;
