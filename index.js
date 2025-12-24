// Function to display posts called displayPosts()
function displayPosts(posts) {
    // The id of the ul is post-list
    const postList = document.getElementById('post-list');
    
    // Loop through the posts list
    posts.forEach(post => {
        // Create a li tag
        const li = document.createElement('li');
        
        // Create a new h1 tag
        const h1 = document.createElement('h1');
        // Add the title as the textContent
        h1.textContent = post.title;
        
        // Create a new p tag
        const p = document.createElement('p');
        // Add the body as the textContent
        p.textContent = post.body;
        
        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);
        
        // Append li to the ul
        postList.appendChild(li);
    });
}

// Create function to house fetch and apply async to function
async function fetchPosts() {
    try {
        // Fetch only the first 10 posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const posts = await response.json();
        
        // Call displayPosts() function after fetch
        displayPosts(posts);
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the fetch function immediately
fetchPosts();