import React from 'react';
import TextPost from '../entities/TextPost';
import VideoPost from '../entities/VideoPost';
import ImagePost from '../entities/ImagePost';

const SinglePagePost = ({post}) => {
    const {text, type, commentsNum, videUrl, imageUrl, postId, body } = post;
    if ({type} === 'text') {

    
    return (
        <div className="post-text">

                 <div className="user-displayed-data">

                 <div className="user-feed-photo">

                    </div>

                    </div>

                <div className="post-text-content">
                    {text}
                </div>
                <div className="post-type">
                    {type} post
                </div>

                
                <div className="post-comments">
                    {commentsNum} comments
                </div>

            </div>

            <div className="comment-body">
                {body}
            </div>
        
    )
}

if ({type} === 'image') {

    
    return (
        <div className="post-text">

            <div className="user-displayed-data">

                <div className="user-feed-photo">

                    </div>

            </div>

            <div className="post-text-content">
                {text}
            </div>
            <div className="post-type">
                {type} post
            </div>

            
            <div className="post-comments">
                {commentsNum} comments
            </div>
        </div>
    )
}

if ({type} === 'video') {

    
    return (
        <div className="post-text">

            <div className="user-displayed-data">

                <div className="user-feed-photo">

                    </div>

            </div>

            <div className="post-text-content">
                {text}
            </div>
            <div className="post-type">
                {type} post
            </div>

            
            <div className="post-comments">
                {commentsNum} comments
            </div>
        </div>
    )
}

}

export { SinglePagePost }