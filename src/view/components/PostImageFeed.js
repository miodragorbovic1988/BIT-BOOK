import React from 'react';
import { Route, Link } from "react-router-dom";
import { SinglePagePost } from './SinglePagePost';

const PostImageFeed = (props) => {

    return (
        <div className="post-image">

            <div className="user-displayed-data">

                <div className="user-feed-photo">

                </div>

            </div>

            <div className="post-image-content">
                <img className="post-image-inner" src={props.post.imageUrl} alt="imagePost" />
            </div>

            <div className="post-type">
                {props.post.type} post
            </div>

            <div className="post-comments">
                <Link to={"/post/image/" + props.post.id}>
                    {props.post.commentsNum} comments</Link>
            </div>
        </div>
    )
}

export { PostImageFeed };