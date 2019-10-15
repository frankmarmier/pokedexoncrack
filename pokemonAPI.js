const getPokemons = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
});

export default getPokemons;



let product = {
  name: "headphones",
  price: 83.7,
  //discount: "7%",
};
​
​
let hasDiscount = false;
​
for(let key in product){
​ if(key === "discount") hasDiscount = true;
}

if(hasDiscount){ // check if "discount" exists
console.log(`Already discounted by ${product.discount}`); // if yes print message
}else {                          // if "discount doesn't exist"
if (product.price > 100) {
  product.discount = 10;
  product.price = product.price * 0.90;
}
else {
  product.discount = 7;
  product.price = product.price * 0.93;
}
console.log(product);
}
