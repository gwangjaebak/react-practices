import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProdeucts1 = state.order.products;
updateProdeucts1.push({
    "no": "c002-003",
    "name": "블루모자",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProdeucts1, state.order.products === updateProdeucts1);

console.log("===================================")

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProdeucts2 = state.order.products.concat({
    "no": "c002-003",
    "name": "블루모자",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProdeucts2, state.order.products === updateProdeucts2);

console.log("===================================")

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}


const updateProdeucts3 = [...state.order.products, {
    "no": "c002-003",
    "name": "블루모자",
    "price": 2000,
    "amount": 1
}];

console.log(state.order.products, updateProdeucts3, state.order.products === updateProdeucts3);
