import * as React from 'react';

interface PostPropTypes {
    title: string;
    body: string;
}

const Post = ({ title, body }: PostPropTypes) => (
    <div>
        <h4>{title}</h4>
        <p>{body}</p>
    </div>
);

export default Post;
