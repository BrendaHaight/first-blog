document.addEventListener("DOMContentLoaded", function () {
  // Select the form element
  const form = document.getElementById("blogForm");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve values from form fields
    const username = document.querySelector("#username").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;

    // Check if any field is empty
    if (!username || !title || !content) {
      alert("Please complete all fields");
      return;
    }

    // Create a post object with the form data
    const post = {
      username,
      title,
      content,
    };

    // Retrieve posts from localStorage or initialize an empty array
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Push the new post object into the posts array
    posts.push(post);

    // Store the updated posts array back into localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirect to the blog page after form submission
    window.location.href = "blog.html";
  });
});
