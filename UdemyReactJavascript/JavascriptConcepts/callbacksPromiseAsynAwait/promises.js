const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    console.log('Inside getPosts')
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 3000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            console.log('Post three added')
            const error = false;
            if(!error) {
                resolve();
                console.log('Done')
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
        console.log('going out from createPost')
    });
}

// createPost({title: 'Post Three', body: 'This is post three'})
//     .then(getPosts())
//     .catch((err) => console.log(err));
//********************************************************* */
//Promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values));

/********************************************************** */
//Asyn Await
// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }

// init();

/*********************************************************** */
//Async / Await / fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();