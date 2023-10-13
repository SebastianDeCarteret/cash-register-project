// FREEZE CODE BEGIN
const drawer = require("./drawer");
// FREEZE CODE END
const coinsArr = ["penny", "nickel", "dime", "quarter"];
const notesArr = ["one", "five", "ten", "twenty", "hundred"];

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

//console.log(countCoins(drawer));
function countCoins(drawer) {
  let sumCoins = 0;
  drawer.forEach((obj) => {
    if (coinsArr.includes(obj.name)) {
      sumCoins += obj.quantity;
    }
  });
  return sumCoins;
}

//console.log(countNotes(drawer));
function countNotes(drawer) {
  let sumNotes = 0;
  drawer.forEach((obj) => {
    if (notesArr.includes(obj.name)) {
      sumNotes += obj.quantity;
    }
  });
  return sumNotes;
}

// Level 3: sumDrawer

//console.log(sumDrawer(drawer));
function sumDrawer(drawer) {
  let sum = 0;
  drawer.forEach((obj) => {
    sum += obj.value * obj.quantity;
  });
  return `$${sum / 100}`;
}

// Level 4: canMakeAmount

console.log(
  canMakeAmount(613, [
    { name: "penny", value: 1, quantity: 3 },
    { name: "nickel", value: 5, quantity: 0 },
    { name: "dime", value: 10, quantity: 1 },
    { name: "quarter", value: 25, quantity: 3 },
    { name: "one", value: 100, quantity: 2 },
    { name: "five", value: 500, quantity: 1 },
    { name: "ten", value: 1000, quantity: 1 },
  ])
);
function canMakeAmount(target, drawer) {
  let copyOfDrawer = JSON.parse(JSON.stringify(drawer)).slice().reverse(); // copy array withouy reference
  let lastLoopTarget = 0;
  while (target > 0 && lastLoopTarget != target) {
    lastLoopTarget = target;
    copyOfDrawer.forEach((obj) => {
      if (obj.quantity > 0 && target > 0) {
        if (target - obj.value >= 0) {
          target -= obj.value;
          obj.quantity--;
        }
      }
    });
  }
  return target === 0;
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
