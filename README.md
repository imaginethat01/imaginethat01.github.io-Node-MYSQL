# imaginethat01.github.io-Node-MYSQL

<h1>This is a simple app (Bamazon!) - using Node.JS and MYSQL</h1>
<br>

We run the script bamazonCustomer.js to start the application. 
A list of items which have their properties laid out in a SQL database / table is returned to the user. 

<img src="projectphotos/firstscreen.jpg"> 
<br> 

Then, pick a product! - 

<img src="projectphotos/secondscreen.jpg">
<br>

The CLI prompt will then update. Showing you the total, and asking to confirm the order.

<img src="projectphotos/thirdscreen.jpg">

Once you have confirmed your order, hitting Y for "yes" will send the order through.

<img src="projectphotos/finalscreen.jpg">

If you order a product which is out of stock, you will see the following CLI message.

<img src="projectphotos/oos.jpg">
<br>

<h1>SO! - What does this "SQL" thing do anyways?</h1> 

Well... SQL allows us to make a database which is a fancy way of saying - "this is our stuff put into rows and columns" 
Sort of like Excel... but SQL is much more cool. Because it allows you to store and alter persistant data-sets with very little
"hands on" exposure - lots of people working on one spreadsheet is messy. SQL allows us to decide how the information is stored, and how
it is interacted with!

Below is a picture of our "un-altered" SQL workspace. Our database.

<img src="projectphotos/sqlscreen.jpg">

Kind of cool right? 

After our command line is sent through our Node.JS CLI APP - If the table is refreshed, we can see the changes inside of SQL Workbench.
Remember, we bought 2 counts of "Fairy in a bottle" - If you look at the bottom of the SQL table now, its values have changed. 
<img src="projectphotos/sqlconfirm.jpg">



These changes happen instantly. and are stored forever. Kind of nifty. This is how most inventory programs will handle the bulk of what they do. A SQL table can be easily altered or modified on a supervisory level, and then others can work with the information. Such is the basis for many modern inventory programs. 






