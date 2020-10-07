import axios from 'axios';
import Loader from './loader';

export default class App {
    render() {
        const page = document.querySelector('#page');
        const loader = new Loader();
        page.innerHTML = loader.render();

        axios.get('/posts')
        .then((response) => {
        this.renderPosts(response.data);
        });
    }

    // render all posts
    renderPosts(posts) {
    const page = document.querySelector('#page');
      let postsMarkup = '';
  
      for (let i = 0; i < posts.length; i++) {
        postsMarkup += this.renderPost(posts[i]);
        }
        page.innerHTML = postsMarkup;
  
  }
  renderPost(postData) {
    const post = new Post(postData);
    return post.render();
  }
  // "Read More" Button
  
  renderLoader() {
    return `<img class="loader" src="/images/loader.gif" alt="Loading...">`;
  }
}

