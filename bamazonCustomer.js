
var inquirer = require('inquirer') 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : 3333, 
  password : 'lavieenrose919',
  database : 'bamazon_db'
});
 
  connection.query("SELECT * FROM PRODUCTS", function(error, results) {
    if (error) throw (error)
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "list",
          choices: function() {
            var choiceArray = [];
 

            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name)
            }
       
            return choiceArray 
           
          },
          message: "What would you like to buy?"
        },
        {
          name: "bid",
          type: "input",
          message: "How many of this item would you like to buy?",
         
        },
      
    
      ])
      .then
      (function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];

          }
        }

  
      
      inquirer
      .prompt([

        {
          type: "confirm",
          message: "You are ordering " + answer.bid + 
          ' ' + answer.choice + ' for ' + 
          chosenItem.price + ' rupees each' + '\nthis will cost ' + 
          (chosenItem.price * answer.bid) + ' rupees are you sure?',
          name: "confirm",
          default: true,
        },
    

      ])
      .then
       (function fireOrder() {
        // determine if bid was high enough
        if (chosenItem.stock_quanity > parseInt(answer.bid)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE PRODUCTS SET ? WHERE ?",
            [
              {
                stock_quanity: chosenItem.stock_quanity - answer.bid
              },
              {
                item_id: chosenItem.item_id
              },
            ],
            function(error) {
              if (error) throw error;
              console.log("Order placed succesfully!");
            
            }
          );
        }
        else {
          console.log("Sorry! We are out of stock.");
         
        }
      });
      });
     
  });
  
  
