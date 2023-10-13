// FREEZE CODE BEGIN
const drawer = require("./drawer");
// FREEZE CODE END

// Level 1: removeItem and addItem
let nameRemove = "penny";
//console.log(removeItem(nameRemove, drawer));
function removeItem(name, drawer) {
  let objToUse;
  drawer.forEach((obj) => {
    if (obj.name === name) {
      objToUse = obj; //the object with the name key of penny
    }
  });
  objToUse.quantity -= 1;
  return drawer;
}

let nameAdd = "nickel";
//console.log(addItem(nameAdd, drawer));
function addItem(name, drawer) {
  let objToUse;
  drawer.forEach((obj) => {
    if (obj.name === name) {
      objToUse = obj; //the object with the name key of penny
    }
  });
  objToUse.quantity += 1;
  return drawer;
}

// Level 2: countCoins and countNotes
function countCoins(drawer) {
  // WRITE YOUR CODE HERE
}

function countNotes(drawer) {
  // WRITE YOUR CODE HERE
}

// Level 3: sumDrawer

function sumDrawer(drawer) {
  // WRITE YOUR CODE HERE
}

// Level 4: canMakeAmount

function canMakeAmount(target, drawer) {
  // WRITE YOUR CODE HERE
}

// Level 5: transaction

function transaction(cost, paid, drawer) {
  // WRITE YOUR CODE HERE
}

// FREEZE CODE BEGIN
module.exports = {
  removeItem,
  addItem,
  countCoins,
  countNotes,
  sumDrawer,
  canMakeAmount,
  transaction,
};
// FREEZE CODE END
