import * as React from 'react';

interface AddPostFormState {
    post: {
        title: string;
        body: string;
    };
}

const emptyPost = { title: '', body: '' };

class AddPostForm extends React.Component<{}, AddPostFormState> {
    constructor() {
        super();
        this.state = { post: emptyPost };
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { post } = this.state;
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        }).then(response => {
            if (response.status === 201) {
                this.setState({ post: emptyPost });
            } else {
                alert(`Failed to add new post.\n${response.status}: ${response.statusText}`);
            }
        });
        e.preventDefault();
    }

    handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const post = { ...this.state.post };
        post[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ post });
    }

    render() {
        const { post } = this.state;
        const isValid = post.title && post.body;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Add New Post</label>
                    <input type="text"
                        className="form-control"
                        name="title"
                        value={post.title}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <textarea className="form-control"
                        name="body"
                        value={post.body}
                        onChange={this.handleChange} />
                </div>
                <button type="submit"
                    className="btn btn-default"
                    disabled={!isValid}>Post</button>
            </form>
        );
    }
}

export default AddPostForm;
