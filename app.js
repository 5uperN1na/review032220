//creating a promise

function slowEcho(message, delay){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            if (random % 2 == 0) {
                resolve(message);
            } else {
                let err = new Error ("Something odd has happened.");
                reject (err);
            }
        }, delay);
    });
}

/*
document.getElementById('btn')
.addEventListener('click', () => {
    slowEcho('hello world!', 1000)
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log(e);
    });
});
*/


document.getElementById('btn')
.addEventListener('click', async () => {
    try {
        let message = await slowEcho("Hello everyone!", 1000);
        console.log(message);
    } catch(e) {
        console.log(e);
    }
    
});
