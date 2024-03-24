/* Event listener to ensure DOM content is loaded before executing */
document.addEventListener("DOMContentLoaded", function () {
  /* Get reference to the post list container */
  const postList = document.getElementById("post-list");

  /* Retrieve posts from local storage or initialize as empty array */
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  /* Iterate over each post and create corresponding HTML elements */
  posts.forEach(post => {
    /* Create div element for each post */
    const postItem = document.createElement("div");
    postItem.classList.add("post");

    /* Create h2 element for post title */
    const title = document.createElement("h2");
    title.textContent = post.title;

    /* Create p element for post content */
    const content = document.createElement("p");
    content.textContent = post.content;

    /* Create p element for post author */
    const author = document.createElement("p");
    author.textContent = `By: ${post.username}`;

    /* Append title, content, and author elements to post div */
    postItem.appendChild(title);
    postItem.appendChild(content);
    postItem.appendChild(author);

    /* Append post div to post list container */
    postList.appendChild(postItem);
  });
});

/* Event listener for back button */
const backButton = document.getElementById("back-btn");
backButton.addEventListener("click", function () {
  /* Redirect to index.html when back button is clicked */
  window.location.href = "../index.html";
});
