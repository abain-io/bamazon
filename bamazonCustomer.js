// Create connection to DB for access to Tables //
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazonDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
  });

  // function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Welcome to bamazon. What product would you like to order?",
      choices: ["1 Bleach $7.95", "2 Soap $2.95", "3 Paper Towels $7.95", "4 Batteries $7.95", "5 TV $7.95", "6 gameboy $7.95", "7 Shampoo $7.95", "8 Conditioner $7.95"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toLowerCase() === "POST") {
      //   postAuction();
      // }
      // else {
      //   bidAuction();
      }
    });
}

// Still trying to get this to work //

//   function readProducts() {
//     connection.query("SELECT items FROM products", function(err, res) {
//       if (err) throw err;
    
//       // Log all results of the SELECT statement
//       console.log(res);
//       connection.end();
//     });
//   }

//   function createProduct() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//       "INSERT INTO products SET ?",
//       {
//         id: "1",
//         name: "Shampoo",
//         price: 8
//       },
//       function(err, res) {
//         console.log(res.affectedRows + " product inserted!\n");
//         // Call updateProduct AFTER the INSERT completes
//         updateProduct();
//       }
//     );
  
//     // logs the actual query being run
//     console.log(query.sql);
//   }

// //   updates product codes
//   function updateProduct() {
//     console.log("Updating all product quantities...\n");
//     var query = connection.query(
//       "UPDATE products SET ? WHERE ?",
//       [
//         {
//           id: 1
//         },
//         {
//           name: "Shampoo"
//         },
//         {
//           flavor: "8"
//         }
//       ]