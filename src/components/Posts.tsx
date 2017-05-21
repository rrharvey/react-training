import * as React from 'react';
import Post from './Post';

export interface PostData {
    id?: number;
    title: string;
    body: string;
}

interface PostsProps {
    posts: PostData[];
}

class Posts extends React.Component<PostsProps, null> {
    render() {
        const { posts } = this.props;

        return (
            <div>
                {posts.map(p => (
                    <Post key={p.id}
                        title={p.title}
                        body={p.body} />
                ))}
            </div>
        );
    }
}

export default Posts;
