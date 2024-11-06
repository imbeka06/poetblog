// Display a greeting based on the time of day
function displayGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = "Good morning!";
    } else if (hours < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }

    greetingElement.textContent = greetingMessage;
}

// "Load More" functionality for additional posts
function loadMorePosts() {
    const postsContainer = document.getElementById("posts-container");
    
    const newPost = document.createElement("article");
    newPost.innerHTML = `
        <h2>Another Blog Post</h2>
        <p>Published on <time datetime="2023-11-05">November 5, 2023</time></p>
        <p>This is the content of a new blog post added dynamically.</p>
    `;
    
    postsContainer.appendChild(newPost);
}

// Run the greeting function when the page loads
window.onload = displayGreeting;
