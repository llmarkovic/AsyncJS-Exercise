
const posts = [ 
    {
        title: 'Post One', body: 'This is post One'
    },
    {
        title: 'Post Two', body: 'This is post Two'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title: 'Post Tree', body: 'This is post Tree'}, getPosts);








console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback ({userEmail: email});
    }, 5000);
}

const user = loginUser("luka12markovic@gmail.com", 123456, user => {
    console.log(user);
});






































