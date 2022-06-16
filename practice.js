// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      results ++;
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var targetedFruits = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return targetedFruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  // define target fruit variable that is filter
  var targetFruit = _.filter(fruits, function (fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
    // if the first letter is p return the word
  // return the target fruit variable
  return targetFruit;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  // use filter and define to variable
  var cookieDesserts = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
    // check if current desert type is cookie
    // if it is return it
  // return the filter variable
  return cookieDesserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var totalPrice = _.reduce(products, function(total, product) {
    if (typeof total === 'object') {
      product = parseFloat(product.price.slice(1));
      total = parseFloat(total.price.slice(1));
      return total + product;
    } else {
      product = parseFloat(product.price.slice(1));
      return total + product;
    }
  });
  return totalPrice;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
// I: Array
// O: object
// C: none
// E: none

var dessertCategories = function(desserts) {
  // create placeholder variable
  var dessertCount = {};
  // use reduce
  var dessertTypeCount = _.reduce(desserts, function(total, dessert) {
    // check if it exists in place holder variable
    var currentType = dessert.type;
    if (dessertCount[currentType] === undefined) {
      dessertCount[currentType] = 1;
    } else {
      dessertCount[currentType] += 1;
    }
  }, 0);
  // return placeholder variables
  return dessertCount;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
// i: array
// O: array
// C: none
// E: none

var ninetiesKid = function(movies) {
  // define result array to add to
  var result = [];
  // use reduce to go over array
  _.reduce(movies, function(total, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      result.push(movie.title);

    }
  }, 0);
  // return the result array
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  // set variable can watch movie to false
  var canIWatch = false;
  // iterate over the array with reduce
  _.reduce(movies, function(total, movie) {
    // compare current movies time with time limit if its less change can watch movie to true
    if (movie.runtime <= timeLimit) {
      canIWatch = true;
    }
  }, 0);
  return canIWatch;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(value, index, fruits) {
    return value.substring(0, 1).toUpperCase() + value.substring(1);
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
// I: array of objects
// O: array of objects
// C: none
// E: none

var glutenFree = function(desserts) {
  _.map(desserts, function(value, index, desserts) {
    // define new object key gluten free
    value.glutenFree = true;
    // define counter variable
    var counter = 0;
    // define current ingrediants
    var ingredients = value.ingredients;
    // iterate over the array of ingrediants
    _.each(ingredients, function (ingredient, index, list) {
      // if the current ingredient is flour
      if (ingredient === 'flour') {
        // add one to the counter
        counter += 1;
      }
    });
    // if the counter is greater than one change the gluten free variable to true
    if (counter >= 1) {
      value.glutenFree = false;
    }
  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

  I: array of item objects
  O:array of item objects - add a new key salePrice
  C: None
  E: None
*/
var applyCoupon = function(groceries, coupon) {
  var coupons = _.map(groceries, function(grocery, index, groceries) {
    var currentPrice = parseFloat(grocery.price.substring(1));
    grocery.salePrice = '$' + (currentPrice - (currentPrice * coupon)).toFixed(2);
    return grocery;
  });
  return coupons;
};
