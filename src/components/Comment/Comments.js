import React from 'react';

import Comment from './Comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="comments">
                <div className='add'>
                    <button
                        onClick={() => this.props.handleAddComment()}>add comment</button>
                </div>
                {this.props.comments.map((comment, key) =>
                    <Comment comment={comment}  key={key}/>)}
            </div>
        );
    }
}

export default Comments;
