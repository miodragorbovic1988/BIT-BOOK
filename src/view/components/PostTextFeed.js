import React from 'react';
import { Route, Link } from "react-router-dom";
import { SinglePagePost } from './SinglePagePost';

const PostTextFeed = (props) => {


    return (
        <div className="post-text">

            <div className="user-displayed-data">

                <div className="user-feed-photo">

                </div>

            </div>

            <div className="post-text-content">
                {props.post.text}
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

export { PostTextFeed }