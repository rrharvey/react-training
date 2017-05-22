import * as React from 'react';
import Post from './Post';

function randomPage() {
    return Math.floor(Math.random() * 3) + 1;
}

export interface PostData {
    id?: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: PostData[];
}

class Posts extends React.Component<{}, PostsState> {
    state = {
        posts: [] as PostData[]
    };

    componentDidMount() {
        fetch(`http://localhost:3001/posts?_page=${randomPage()}&_limit=3`)
            .then(resp => resp.json())
            .then(posts => this.setState({posts}));
    }

    render() {
        const { posts } = this.state;

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
