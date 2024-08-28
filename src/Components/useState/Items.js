export const Items =() =>{

const items = [];

for(let i=1;i<=10;i++){
    let o={
        id:i,
        item:`Item ${i}`
    };
    items.push(o);
};
console.log(items);
return items

}
Items();
