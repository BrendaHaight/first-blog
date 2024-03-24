document.addEventListener("DOMContentLoaded", function () {
  const postList = document.getElementById("post-list");

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach(post => {
    const postItem = document.createElement("div");
    postItem.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const content = document.createElement("p");
    content.textContent = post.content;

    const author = document.createElement("p");
    author.textContent = `By: ${post.username}`;

    postItem.appendChild(title);
    postItem.appendChild(content);
    postItem.appendChild(author);

    postList.appendChild(postItem);
  });
});

const backButton = document.getElementById("back-btn");
ba