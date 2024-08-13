// chop vege;
// cook vege;
// serve vege;
// CALLBACKS
// function chopVege(callback){
//     console.log("Started Chopping");
//     setTimeout(()=>{
//         console.log("chop vege DONE");
//         callback();
//     },4000);
//     console.log("Thinking Next Tasks");
// }
// function cookVege(callback){
//     console.log("Started Cooking ");
//     setTimeout(()=>{
//         console.log("cook vege DONE");
//         callback();
//     },4000);
//     console.log("Thinking Next Tasks");
// }
// function serveVege(callback){
//     console.log("Stated Serving");
//     setTimeout(()=>{
//         console.log("Serve vege DONE (NO MORE THINKING EAT AND SLEEP)");
//         callback();
//     },4000);
//      console.log("Thinking Next Tasks");
// }
// chopVege(()=>{
//     cookVege(()=>{
//         serveVege(()=>{
//             console.log("All Done");
//         });
//     })
// })

/// THE ABOVE TASK IS CREATING CALL BACK HELL(ALSO CALLED AS NESTED CALL BACKS) WHICH IS TOUGH TO DEAL AND UNDERSTAND (LESS READIBILITY)

//// SO WE ARE COMING WITH THE CONCEPT CALLED  PROMISING

//// PROMISE IS AN OBJECT WHICH TELLS EVENTUAL COMPLETION OR FAILURE OF A CODE ====> WHICH HAS THREE STATES PENDING , FULLFILLMENT AND REJECTION ON SOME CONDITON WITH MESSAGE

function chopVege(){
    const myPromise = new Promise((resolve,reject)=>{
        console.log("Started Chopping");
        setTimeout(()=>{
            console.log("chop vege DONE");
            resolve()
         },4000);
         console.log("Thinking Next Tasks");
    })
    return myPromise;   
}
function cookVege(){
    const myPromise = new Promise((resolve,reject)=>{
        console.log("Started Cooking ");
        setTimeout(()=>{
            console.log("cook vege DONE");
            resolve();
        },4000);
        console.log("Thinking Next Tasks");
    })
    return myPromise;
}
function serveVege(){
    const myPromise = new Promise((resolve,reject)=>{
    console.log("Stated Serving");
    setTimeout(()=>{
        console.log("Serve vege DONE (NO MORE THINKING EAT AND SLEEP)");
        resolve();
    },4000);
     console.log("Thinking Next Tasks");
    })
return myPromise;
}



// chopVege()
// .then(()=>{
//   return cookVege(); /// return statement is compulsory as it is arrow function u need to return on multiple line stmt and onw thing u used {} on multi stmts((returning the promise)
// }).then(()=>{
//    return serveVege();
// }).then(()=>{
//     console.log("ALL TASKS DONE");
// })
// .catch((err)=>{
//     console.log("Error Occured");
// })



//// async and await  are keywords that handle asynchronous operations. async is a function that return promise await waits until a promise is resolved
//// try catch is the block to handle the errors for async and await


let handleOperations = async () =>{
await chopVege();
await cookVege();
await serveVege();
console.log("ALL DONE")
}
handleOperations();