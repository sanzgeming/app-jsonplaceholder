// data.js

// Static user data
export const users = [
    { id: 1, username: "Bret", email: "Sincere@april.biz" },
    { id: 2, username: "Antonette", email: "Shanna@melissa.tv" },
];

// Static album data (userId corresponds to the user)
export const albums = [
    { userId: 1, id: 1, title: "quidem molestiae enim" },
    { userId: 1, id: 2, title: "sunt qui excepturi placeat culpa" },
    { userId: 2, id: 3, title: "omnis laborum odio" },
];

// Static comments data (postId corresponds to user's post)
export const comments = [
    { postId: 1, id: 1, name: "id labore ex et quam laborum", body: "laudantium enim quasi est quidem magnam voluptate ipsam eos" },
    { postId: 1, id: 2, name: "quo vero reiciendis velit similique earum", body: "est natus enim nihil est dolore omnis voluptatem numquam" },
    { postId: 2, id: 3, name: "odio adipisci rerum aut animi", body: "quia molestiae reprehenderit quasi aspernatur" },
];
