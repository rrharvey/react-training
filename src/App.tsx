import * as React from 'react';
import './App.css';

const reactLogo = require('./react.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">About</a></li>
              <li role="presentation"><a href="#">Contact</a></li>
            </ul>
          </nav>
          <h3 className="text-muted"><img src={reactLogo} className="app-logo" />React Training</h3>
        </div>

        <div className="jumbotron">
          <h1>Jumbotron heading</h1>
          <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </div>

        <div className="row marketing">
          <div className="col-md-6">
            <h4>sunt aut facere repellat</h4>
            <p>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut
              ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>

            <h4>qui est esse</h4>
            <p>est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat
              blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus 
              qui neque nisi nulla</p>

            <h4>ea molestias quasi exercitationem</h4>
            <p>et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel
              accusantium quis pariatur molestiae porro eius odio et labore et velit aut</p>
          </div>

          <div className="col-md-6">
            <div className="alert alert-success alert-dismissible" role="alert">
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Well done!</strong> You successfully read this important alert message.
            </div>

            <div className="alert alert-info alert-dismissible" role="alert">
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </div>

            <div className="alert alert-warning alert-dismissible" role="alert">
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>

            <div className="alert alert-danger alert-dismissible" role="alert">
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2017 Company, Inc.</p>
        </footer>

      </div>
    );
  }
}

export default App;
