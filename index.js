// Write your code here!

function displayPosts(posts) {
    // Select the <ul> from HTML
    const postList = document.getElementById('post-list');

    // Loop through the posts list
    posts.forEach(post => {
    // 1. Creating a li tag
     const li = document.createElement('li');

    // Creating a new h1 tag and adding the title
 const h1 = document.createElement('h1');
        h1.textContent = post.title;

     // Creating a new p tag and adding the body text
  const p = document.createElement('p');
        p.textContent = post.body;

     // Appending h1 and p to the li
 li.appendChild(h1);
 li.appendChild(p);

        // Appending the li to the ul
        postList.appendChild(li);
    });
}

// Implementing the async function to fetch posts from the API
async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
// Use await for the fetch request
 const response = await fetch(url);

// Checking if the response is successful
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

// Use await to parse the JSON
const data = await response.json();

// Call the display function with the fetched data.
        displayPosts(data);

    } catch (error) {
// Error handling by showing a display message.
        console.error("Oh no! Could not fetch posts:", error.message);
    }
}

// Call the async function to start the process
fetchPosts();
