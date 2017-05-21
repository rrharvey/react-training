import * as React from 'react';

export interface PostProps {
    title: string;
    body: string;
}

const Post: React.SFC<PostProps> = ({ title, body }) => (
    <div>
        <h4>{title}</h4>
        <p>{body}</p>
    </div>
);

export default Post;
