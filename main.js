// main.js

// Function to fetch user data and display it in the table
async function fetchAndDisplayUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const userTableBody = document.querySelector('#userTable tbody');

    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
                <td>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary btn-sm" onclick="showUserDetails(${user.id})">View Details</button>
                        <button class="btn btn-secondary btn-sm" onclick="showUserPosts(${user.id})">View Posts</button>
                        <button class="btn btn-info btn-sm" onclick="showUserComments(${user.id})">View Comments</button>
                    </div>
                </td>
            </tr>
        `;
        userTableBody.innerHTML += row;
    });
}

// Function to show user details in a modal
function showUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            // Update modal content with user details
            document.getElementById('detailId').innerText = user.id;
            document.getElementById('detailName').innerText = user.name;
            document.getElementById('detailUsername').innerText = user.username;
            document.getElementById('detailEmail').innerText = user.email;
            document.getElementById('detailPhone').innerText = user.phone;
            document.getElementById('detailWebsite').innerText = user.website;
            document.getElementById('detailCompany').innerText = user.company.name;

            // Show the modal
            const modal = new bootstrap.Modal(document.getElementById('userDetailModal'));
            modal.show();
        });
}

// Function to show user posts in a modal
function showUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const userPostsList = document.getElementById('userPostsList');
            userPostsList.innerHTML = ''; // Clear previous posts

            posts.forEach(post => {
                const postItem = `
                    <li class="list-group-item">
                        <h5>${post.title}</h5>
                        <p>${post.body}</p>
                    </li>
                `;
                userPostsList.innerHTML += postItem;
            });

            // Show the modal with posts
            const modal = new bootstrap.Modal(document.getElementById('userPostsModal'));
            modal.show();
        });
}

// Function to show user comments in a modal
function showUserComments(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const userCommentsList = document.getElementById('userCommentsList');
            userCommentsList.innerHTML = ''; // Clear previous comments

            // Fetch comments for each post
            const commentPromises = posts.map(post => {
                return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                    .then(response => response.json())
                    .then(comments => {
                        comments.forEach(comment => {
                            const commentItem = `
                                <li class="list-group-item">
                                    <strong>${comment.name}</strong>
                                    <p>${comment.body}</p>
                                </li>
                            `;
                            userCommentsList.innerHTML += commentItem;
                        });
                    });
            });

            // Wait for all comments to be fetched and displayed
            Promise.all(commentPromises).then(() => {
                // Show the modal with comments
                const modal = new bootstrap.Modal(document.getElementById('userCommentsModal'));
                modal.show();
            });
        });
}

// Call the function when the page loads
fetchAndDisplayUsers();