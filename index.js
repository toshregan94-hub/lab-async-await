// Write your code here!

function displayPosts(posts) {
    // Select the <ul> from your HTML
    const postList = document.getElementById('post-list');

    // Loop through the posts list
    posts.forEach(post => {
    // 1. Create a li tag
     const li = document.createElement('li');

    // Create a new h1 tag and add the title
 const h1 = document.createElement('h1');
        h1.textContent = post.title;

     // Create a new p tag and add the body text
  const p = document.createElement('p');
        p.textContent = post.body;

     // Append h1 and p to the li
 li.appendChild(h1);
 li.appendChild(p);

        // Append the li to the ul
        postList.appendChild(li);
    });
}

// Implementing the async function to fetch posts from the API
async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
// Use await for the fetch request
 const response = await fetch(url);

// Basic check to see if the response is successful
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

// Use await to parse the JSON
const data = await response.json();

// Call the display function with our fetched data
        displayPosts(data);

    } catch (error) {
// Error handling for developer tools / console
        console.error("Oh no! Could not fetch posts:", error.message);
    }
}

// Call the async function to start the process
fetchPosts();
