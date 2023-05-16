let products = [
  {
    code: "A001",
    name: "T-Shirt",
    color: "Red",
    size: "Medium",
    price: 20,
  },
  {
    code: "B002",
    name: "Lipstick",
    brand: "MAC",
    shade: "Ruby Woo",
    price: 15,
  },
  {
    code: "E003",
    name: "Headphones",
    brand: "Sony",
    color: "Black",
    price: 50,
  },
  {
    code: "F004",
    name: "Chocolate",
    brand: "Cadbury",
    flavor: "Milk",
    price: 5,
  },
  {
    code: "H005",
    name: "Cushion",
    color: "Blue",
    shape: "Square",
    price: 10,
  },
  {
    code: "A006",
    name: "Jeans",
    color: "Black",
    size: "32",
    price: 35,
  },
  {
    code: "B007",
    name: "Nail Polish",
    brand: "OPI",
    shade: "Bubble Bath",
    price: 12,
  },
  {
    code: "E008",
    name: "Smartphone",
    brand: "Samsung",
    color: "White",
    price: 500,
  },
  {
    code: "F009",
    name: "Cereal",
    brand: "Kellogg's",
    flavor: "Fruit Loops",
    price: 3,
  },
  {
    code: "H010",
    name: "Curtains",
    color: "Green",
    material: "Cotton",
    price: 25,
  },
  {
    code: "A011",
    name: "Sweatshirt",
    color: "Grey",
    size: "Large",
    price: 30,
  },
  {
    code: "B012",
    name: "Mascara",
    brand: "Maybelline",
    shade: "Blackest Black",
    price: 8,
  },
  {
    code: "E013",
    name: "Tablet",
    brand: "Apple",
    color: "Silver",
    price: 800,
  },
  {
    code: "F014",
    name: "Potato Chips",
    brand: "Lays",
    flavor: "Original",
    price: 2,
  },
  {
    code: "H015",
    name: "Throw Blanket",
    color: "Pink",
    material: "Fleece",
    price: 15,
  },
  {
    code: "A016",
    name: "Dress",
    color: "Blue",
    size: "Small",
    price: 40,
  },
  {
    code: "B017",
    name: "Eyeliner",
    brand: "Kat Von D",
    shade: "Trooper",
    price: 18,
  },

  {
    code: "E018",
    name: "Laptop",
    brand: "HP",
    color: "Silver",
    price: 1000,
  },
  {
    code: "F019",
    name: "Ice Cream",
    brand: "Ben & Jerry's",
    flavor: "Chocolate Chip Cookie Dough",
    price: 6,
  },
  {
    code: "H020",
    name: "Picture Frame",
    color: "Gold",
    material: "Wood",
    price: 8,
  },
];

/**
 * Create a function that determines the category of a product based on its code. The product codes are as follows:
 *
 * Code starting with "A": Apparel
 * Code starting with "B": Beauty
 * Code starting with "E": Electronics
 * Code starting with "F": Food
 * Code starting with "H": Home
 *
 * Add a category property to each product object with the value as the correct property category
 *  */

// create an empty array -- resultProducts
// create a loop to iterate though all the elements in the products array
// for each element in the array, check the starting char of code property and add a category property that suits it
// add the element(product) to the new array(resultProducts)

// for loop
// push()
// charAt(0)

let resultProducts = [];
for (let index = 0; index < products.length; index++) {
  let product = products[index];
  let firstCharOfProductCode = product.code.charAt(0);
  if (firstCharOfProductCode === "A") {
    product.category = "Apparrel";
  } else if (firstCharOfProductCode === "B") {
    product.category = "Beauty";
  } else if (firstCharOfProductCode === "E") {
    product.category = "Electronics";
  } else if (firstCharOfProductCode === "F") {
    product.category = "Food";
  } else if (firstCharOfProductCode === "H") {
    product.category = "Home";
  } else {
    product.category = "random";
  }
  resultProducts.push(product);
}
console.log(resultProducts);
