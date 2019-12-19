import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import Moment from 'react-moment'

import '../App.css'

export default class Home extends Component {
    state = {
      loading: true,
      posts: [],
    };

    componentDidMount() {
    axios.get('http://derrickstrong.com/wp-json/wp/v2/posts').then(res => {
      this.setState({ posts: res.data, loading: false });
    });
  }

  render() {
    const { posts } = this.state;
    console.warn('state', this.state)

    return (
      <div>
        {this.state.loading ? (
          <div>
            <p className="center">Loading...</p>
          </div>
        ) : (
          <div className="app container">
            <div className="app jumbotron">
              <h1 className="display-4">100 Days of Code</h1>
              <p>By D. Strong</p>
            </div>
            <div className="deck">
              {posts.map((post, i) => (
                <div className="app card" key={post.id}>
                  <div className="app card-header">
                    <Link to={`/post/${post.id}`}>
                      Day {i} - {renderHTML(post.title.rendered)}
                    </Link>
                  </div>
                  <div id="card" className="card-body">
                    <p className="card-text">
                      {renderHTML(post.excerpt.rendered)}{' '}
                    </p>
                  </div>
                  <div className="card-footer small">
                    Posted <Moment fromNow>{post.date}</Moment>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}