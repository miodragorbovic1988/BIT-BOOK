import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { SinglePagePost } from './SinglePagePost';

const PostImageFeed = (props) => {

    return (
        <div className="post-image">

             <div className="user-displayed-data">

                    <div className="user-feed-photo">

                     </div>

            </div>

            <div className="post-image-content">
                <img className="post-image-inner" src={props.post.imageUrl} alt="imagePost"/>
            </div>

            <div className="post-type">
                {props.post.type} post
            </div>

            <div className="post-comments">
                {props.post.commentsNum} 
                <BrowserRouter> 
                <Link to={{
                    pathname:`${props.postId}/singlepagepost`
                    }}>comments</Link>

                    <Route path="/singlepagepost/postId" component={SinglePagePost}/>
                </BrowserRouter>
            </div>
        </div>
    )
}

export {PostImageFeed};