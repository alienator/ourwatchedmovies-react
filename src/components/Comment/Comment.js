import React from 'react';

import './Comments.scss';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='comment'>
                <div className='image'>
                    <img
                        src={this.props.comment.user.imagePath}
                        alt={this.props.comment.user.name}
                        title={this.props.comment.user.name} />
                </div>
                <div className='desc'>
                    <p>{this.props.comment.comment}</p>
                </div>
                <div className='actions'>
                    <span>Date: {this.props.comment.creationDate}</span>
                    {this.props.comment.editable &&
                        <button
                            type='button'
                            onClick={() => {
                                this.props.handleEditComment(this.props.comment)
                            }
                            }>edit</button>}

                </div>
            </div>
        );
    }
}

export default Comment;
