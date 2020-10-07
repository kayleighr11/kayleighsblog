export default class Post {
    constructor(post) {
        this.id = postData_id$id;
        this.title = post.title;
        this.content = post.content;
    }
    render() {
        const content = this.truncateContent(post.content);;
        return `<h2>${title}</h2><p>${content}</p>${this.renderLink()}<hr />`;

    }
    truncateContent(content) {
        return `${content.slice(0, 500)}...`;
      }
      renderLink() { 
        return `<a href="#/posts/${this.id}">Read More</a>`;
      }
}