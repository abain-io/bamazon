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
    // readProducts();
  });
  
  function readProducts() {
    connection.query("SELECT items FROM products", function(err, res) {
      if (err) throw err;
    
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }

  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        id: "1",
        name: "Shampoo",
        price: 8
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }

//   updates product codes
  function updateProduct() {
    console.log("Updating all product quantities...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          id: 1
        },
        {
          name: "Shampoo"
        },
        {
          flavor: "8"
        }
      ],

