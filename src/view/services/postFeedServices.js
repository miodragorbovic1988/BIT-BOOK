import { BASE_URL, API_KEY, SESSION_ID, GET_POSTS, TEXT_POSTS, IMAGE_POSTS, VIDEO_POSTS, COMMENTS_VIEW, POST_ID } from '../config/constants';
import { VideoPost } from '../entities/VideoPost';
import { ImagePost } from '../entities/ImagePost';
import { TextPost } from '../entities/TextPost';
import { Comments } from '../entities/Comments';

class PostService {
    getPosts = () => {
        return fetch(`${BASE_URL}${GET_POSTS}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Key': API_KEY,
                'SessionId': SESSION_ID
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
           return posts.map((post) => {
            if (post.type === 'video'){

                const { videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new VideoPost(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum)
            }
            if (post.type === 'image'){
                const { imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new ImagePost(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum)
            }
            if (post.type === 'text'){
                const { text, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new TextPost(text, id, dateCreated, userId, userDisplayName, type, commentsNum)
            }
            })
        })
    }
    getComments = (postId) => {
        return fetch(`${BASE_URL}${COMMENTS_VIEW}${POST_ID}${postId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Key': API_KEY,
                'SessionId': SESSION_ID
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((comments) => {
            return comments.map((comment) => {
                const { id, dateCreated, body, postId, authorName, authorId} = comment;
                return new Comments(id, dateCreated, body, postId, authorName, authorId)
            })
        })
    }

    uploadTextPost = (textPost) => {
        return fetch(`${BASE_URL}${TEXT_POSTS}`, {
            method: "POST",
            body: JSON.stringify({
                text: textPost
            }),
            headers: {
                'Content-Type': 'application/json',
                'Key': API_KEY,
                'SessionId': SESSION_ID
            }})
            .then((response) => {
                return response.json();
            })
            .then(response => {
                return response;
            })
        }

        uploadImagePost = (imagePost) => {
            return fetch(`${BASE_URL}${IMAGE_POSTS}`, {
            method: "POST",
            body:JSON.stringify({
                imageUrl: imagePost
            }),
            headers: {
                'Content-Type': 'application/json',
                'Key': API_KEY,
                'SessionId': SESSION_ID
            }})
            .then((response) => {
                return response.json();
            })
            .then(response => {
                return response;
            })        
        }

        uploadVideoPost = (videoPost) => {
            return fetch(`${BASE_URL}${VIDEO_POSTS}`, {
                method: "POST",
                body: JSON.stringify({
                    videoUrl: videoPost
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Key': API_KEY,
                    'SessionId': SESSION_ID
                }})
                .then((response) => {
                    return response.json();
                })
                .then(response => {
                    return response;
                })
            }
        
}

export const postService = new PostService();