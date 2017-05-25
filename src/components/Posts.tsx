import * as React from 'react';
import Post from './Post';
import { PostData, loadPosts } from '../actions';
import { Store } from '../store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface PostsProps {
}

interface ConnectedStoreProps {
    posts: PostData[];
}

interface ConnectedDispatchProps {
    loadPosts(): void;
}

const mapStateToProps = (state: Store.All, ownProps: PostsProps): ConnectedStoreProps => ({
    posts: state.api.posts
});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>) => ({
    loadPosts: () => dispatch(loadPosts())
});

class PostsComponent extends React.Component<PostsProps & ConnectedStoreProps & ConnectedDispatchProps, {}> {

    componentDidMount() {
        this.props.loadPosts();
    }

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

const Posts: React.ComponentClass<PostsProps> = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
