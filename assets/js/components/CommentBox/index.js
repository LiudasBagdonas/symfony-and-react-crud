import React from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import './index.css';

function CommentBox({ comments }) {


    return (
        <>
            {comments ?
                comments.map((comment, index) =>
                    <div key={index} className="comment-box">
                        <img className="user-img" src="pics/anonymous.jpg"></img>
                        <div className="comment-content">

                            <div className="name-index-box">
                                <p className="comment-name">{comment.name}</p>
                                <p className="comment-index-id">Comment #{index + 1}</p>
                            </div>

                            <p className="comment-text">{comment.comment}</p>
                            <div className="time-edit-delete-box">
                                <p className="comment-timestamp">
                                    <SimpleDateTime format="MYD" dateSeparator="-" timeSeparator=":">{comment.timestamp}</SimpleDateTime></p>
                                <div className="edit-delete-box">
                                    <a href={`/comments/edit/${comment.id}`} className="edit-comment-button">Edit</a>
                                    <a href="#" className="delete-comment-button" data-id={comment.id}>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                :
                <p className="no-comments-text">No comments to show.</p>}
        </>
    );
}

export default CommentBox;