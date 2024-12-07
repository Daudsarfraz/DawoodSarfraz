// blog-script.js

// JavaScript to fetch and display the markdown file
fetch('blogs/blog-post.md')  // Path to the Markdown file in the blogs directory
  .then(response => response.text())  // Get the content as text
  .then(markdown => {
    // Convert the markdown content to HTML using marked.js
    document.getElementById('blog-content').innerHTML = marked(markdown);
  })
  .catch(err => {
    console.log('Error loading blog content:', err);
    document.getElementById('blog-content').innerHTML = 'Sorry, there was an error loading the blog content.';
  });

