import React from 'react';

class SinglePagePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            comments: []
        };
    }

    componentDidMount() {
        const { postId, type } = this.props.match.params;

        console.log(postId, type)

        // fetchPost(postId, type)
        //  .then(post => this.setState({ post }))
    }

    render() {
        const { type, text, commentsNum } = this.state.post;

        if (type === 'text') {
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
    
        if (type === 'image') {
    
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
    
        if (type === 'video') {
    
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

        return "";
    }
}

export { SinglePagePost }