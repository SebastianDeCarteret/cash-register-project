**GOAL**: In index.js, there are a collection of functions which provide functionality for a cash register to be used by a point-of-sale system. Your task is to complete the functions by writing the logic to meet the specifications below:

- **Level 1**:
  - `removeItem(name, drawer)`: Removes a single item from the drawer
  - `addItem(name, drawer)`: Adds a single item to the drawer
- **Level 2**:
  - `countCoins(drawer)`: Counts how many coins are in the drawer
  - `countNotes(drawer)`: Counts how many notes/bills are in the drawer
- **Level 3**:
  - `sumDrawer(drawer)`: Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
- **Level 4**:
  - `canMakeAmount(target, drawer)`: Determines whether it is possible to create a specific cash amount from the items in the drawer.
- **Level 5**:
  - `transaction(cost, paid, drawer)`: Calculates the change required from a transaction and removes it from the drawer if possible.

Each function accepts a `drawer` array of objects. Currency types and amounts that may be in the `drawer` array are [represented in integers rather than decimals](https://blog.agentrisk.com/you-better-work-in-cents-not-dollars-2edb52cdf308).
Currency | Unit Amount
------ | ------
Penny | 1
Nickel | 5
Dime | 10
Quarter | 25
Dollar | 100
Five Dollars | 500
Ten Dollars | 1000
Twenty Dollars | 2000
One-hundred Dollars | 10000

An example `drawer` array of objects has been provided for you in the `drawer.js` file.

```javascript
const drawer = [
  { name: "penny", value: 1, quantity: 72 },
  { name: "nickel", value: 5, quantity: 41 },
  { name: "dime", value: 10, quantity: 31 },
  { name: "quarter", value: 25, quantity: 17 },
  { name: "one", value: 100, quantity: 90 },
  { name: "five", value: 500, quantity: 11 },
  { name: "ten", value: 1_000, quantity: 2 },
  { name: "twenty", value: 2_000, quantity: 3 },
  { name: "hundred", value: 10_000, quantity: 1 },
];
```

## Level 1: `removeItem(name, drawer)` and `addItem(name, drawer)`

1. The `removeItem` function goes into the given drawer and removes 1 item with the given name.
   - **Parameters**: Accepts a `name` of the currency to remove and a `drawer` of currency
   - Returns the drawer after removing the item
2. The `addItem` function goes into a given drawer and adds 1 item with the given name.
   - **Parameters**: Accepts a `name` of the currency to remove and a `drawer` of currency
   - Returns the drawer after adding the item

### Examples

```javascript
const drawer = [{ name: "penny", value: 1, quantity: 5 }];
const returnedDrawer = removeItem("penny", drawer); // Removes 1 penny
console.log(returnedDrawer); // [{ name: 'penny', value: 1, quantity: 4 }]

const drawerToAdd = [{ name: "nickel", value: 5, quantity: 5 }];
const updatedDrawer = addItem("nickel", drawerToAdd); // Adds 1 nickel
console.log(updatedDrawer); // [{ name: 'nickel', value: 5, quantity: 6 }];
```

## Level 2: `countCoins(drawer)` and `countNotes(drawer)`

1. The `countCoins` function goes through the given drawer and counts how many **_coins_** there are in total.

   - The function should count just the number of coins, not the total value of them
   - The $1 bill is a note, not a coin
   - **Parameter**: Accepts a `drawer` of currency
   - Returns a count of how many coins are in the drawer.

2. The `countNotes` performs the same action as `countCoins`, but counts the **_notes_** instead.
   - **Parameter**: Accepts a `drawer` of currency
   - Returns a count of how many notes (bills) are in the drawer.

### Examples

```javascript
const drawer = [
  { name: "penny", value: 1, quantity: 72 },
  { name: "nickel", value: 5, quantity: 41 },
  { name: "dime", value: 10, quantity: 31 },
  { name: "quarter", value: 25, quantity: 17 },
  { name: "one", value: 100, quantity: 90 },
  { name: "five", value: 500, quantity: 11 },
  { name: "ten", value: 1_000, quantity: 2 },
  { name: "twenty", value: 2_000, quantity: 3 },
  { name: "hundred", value: 10_000, quantity: 1 },
];

const coins = countCoins(drawer); // Returns 161
const notes = countNotes(drawer); // Returns 107
```

## Level 3: sumDrawer(drawer)

sumDrawer calculates the total value of all money in the drawer.
Parameter: Accepts a drawer of currency
Returns the amount of money in drawer as a string formatted in dollars. E.g. “$23.78” not 2378
Consider using the .toFixed() method

### Examples

```javascript
const drawer = [
  { name: "penny", value: 1, quantity: 72 },
  { name: "nickel", value: 5, quantity: 41 },
  { name: "dime", value: 10, quantity: 31 },
  { name: "quarter", value: 25, quantity: 17 },
  { name: "one", value: 100, quantity: 90 },
  { name: "five", value: 500, quantity: 11 },
  { name: "ten", value: 1_000, quantity: 2 },
  { name: "twenty", value: 2_000, quantity: 3 },
  { name: "hundred", value: 10_000, quantity: 1 },
];

const total = sumDrawer(drawer); // Returns '$335.12'
```

## Level 4: canMakeAmount(target, drawer)

canMakeAmount returns true if it is possible to make the target amount out of the cash in the drawer and false if it is not possible.
Parameter: Accepts a target amount of money to try and make and a drawer of currency
Returns a boolean of whether it is possible to make the amount from the drawer

### Examples

```javascript
const drawer = [
  { name: "penny", value: 1, quantity: 2 },
  { name: "nickel", value: 5, quantity: 0 },
  { name: "dime", value: 10, quantity: 0 },
  { name: "quarter", value: 25, quantity: 3 },
  { name: "one", value: 100, quantity: 2 },
  { name: "five", value: 500, quantity: 1 },
  { name: "ten", value: 1000, quantity: 1 },
];

const test1 = canMakeAmount(613, drawer); // Returns false
const test2 = canMakeAmount(1651, drawer); // Returns true
```

## Level 5: transaction(cost, paid, drawer)

transaction works out the amount of change the customer is owed based on the cost of their items and the amount they have paid. The function
Adds the customer’s paid amount to the drawer
Removes their change from the drawer
Returns the new drawer.
A few structural factors to consider as you create your transaction function:
Parameters: Accepts the cost of the customers basket, the paid amount that was handed to the cashier, and a drawer of currency.
Returns the drawer after the transaction has taken place.
You should assume that the paid amount and the change are given in the largest denominations available
For example, 2.25 should be a 2 dollar bills and 1 quarter, if they are available, rather than 2 dollar bills and 5 nickels. However, if no quarters and dimes are available you should then use nickels.

### Examples

```javascript
const drawer = [
  { name: "penny", value: 1, quantity: 2 },
  { name: "nickel", value: 5, quantity: 0 },
  { name: "dime", value: 10, quantity: 0 },
  { name: "quarter", value: 25, quantity: 3 },
  { name: "one", value: 100, quantity: 2 },
  { name: "five", value: 500, quantity: 1 },
  { name: "ten", value: 1000, quantity: 1 },
];

const returnedDrawer = transaction(450, 1000, drawer);
/*
Returns the following drawer with 1 five and 2 quarters removed and 1 ten added.
[
{ name: 'penny', value: 1, quantity: 2 },
{ name: 'nickel', value: 5, quantity: 0 },
{ name: 'dime', value: 10, quantity: 0 },
{ name: 'quarter', value: 25, quantity: 1 },
{ name: 'one', value: 100, quantity: 2 },
{ name: 'five', value: 500, quantity: 0 },
{ name: 'ten', value: 1_000, quantity: 2 }
]
*/
```
