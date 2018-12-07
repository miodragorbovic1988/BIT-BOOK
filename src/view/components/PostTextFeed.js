import React from 'react';
import { Route, Link } from "react-router-dom";
import { SinglePagePost } from './SinglePagePost';

const PostTextFeed = ({ post }) => {
    const { text, type, commentsNum } = post

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
                {commentsNum}
            </div>
        </div>
    )
}

export { PostTextFeed }