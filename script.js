//your JS code here. If required.
const myName = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.getElementById("btn");

// create promise
function promise1(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 18) {
                reject(`Oh sorry ${myName.value}. You aren't old enough.`)
            }
            else {
                resolve(`Welcome, ${myName.value}. You can vote.`)
            }
        }, 4000);
    });
}


btn.addEventListener("click", () => {
    promise1(age.value).then((res)=>{
        alert(res);
    })
});
