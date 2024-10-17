// domUtils.js

// Function to display user data in a table
export function displayUsers(users) {
    const userTableBody = document.querySelector('#userTable tbody');
    users.forEach(user => {
        const row = `<tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                     </tr>`;
        userTableBody.innerHTML += row;
    });
}

// Function to display albums in a table
export function displayAlbums(albums) {
    const albumTableBody = document.querySelector('#albumTable tbody');
    albums.forEach(album => {
        const row = `<tr>
                        <td>${album.id}</td>
                        <td>${album.title}</td>
                     </tr>`;
        albumTableBody.innerHTML += row;
    });
}

// Function to display comments in a table
export function displayComments(comments) {
    const commentTableBody = document.querySelector('#commentTable tbody');
    comments.forEach(comment => {
        const row = `<tr>
                        <td>${comment.id}</td>
                        <td>${comment.name}</td>
                        <td>${comment.body}</td>
                     </tr>`;
        commentTableBody.innerHTML += row;
    });
}