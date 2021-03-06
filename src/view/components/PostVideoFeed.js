import React from 'react';
import { Route, Link } from "react-router-dom";
import { SinglePagePost } from './SinglePagePost';

const PostVideoFeed = (props) => {

    return (
        <div className="post-video">

            <div className="user-displayed-data">

                <div className="user-feed-photo">

                </div>

            </div>

            <div className="post-video-content">
                {props.post.videoUrl.startsWith('http') && <iframe title="videoPost" src={props.post.videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            </div>
            <div className="post-type">
                {props.post.type} post
            </div>

            <div className="post-comments">
                <Link to={"/post/video/" + props.post.id}>{props.post.commentsNum} comments</Link>
            </div>
        </div>
    )
}

export { PostVideoFeed };