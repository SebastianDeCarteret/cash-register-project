// FREEZE CODE BEGIN
const drawer = require("./drawer");
// FREEZE CODE END
const coinsArr = ["penny", "nickel", "dime", "quarter"];
const notesArr = ["one", "five", "ten", "twenty", "hundred"];

// Level 1: removeItem and addItem

//let nameRemove = "penny";
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

//let nameAdd = "nickel";
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

//console.log(canMakeAmount(5467, drawer));
function canMakeAmount(target, drawer) {
  // Copy array with no reference
  let copyOfDrawer = JSON.parse(JSON.stringify(drawer)).slice().reverse();
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

//console.log(transaction(450, 1000, drawer));
function transaction(cost, paid, drawer) {
  // Copy array with no reference
  let copyOfDrawer = JSON.parse(JSON.stringify(drawer)).slice().reverse();
  // Loop to add paid amount to drawer(what the customer paid)
  let targetAdd = paid;
  let lastLoopTargetAdd = 0;
  let hasLoopedAdd = false;
  while (targetAdd > 0 && lastLoopTargetAdd != targetAdd) {
    lastLoopTargetAdd = targetAdd;
    copyOfDrawer.forEach((obj) => {
      if (!hasLoopedAdd) {
        if (obj.quantity > 0 && targetAdd > 0) {
          if (targetAdd - obj.value >= 0) {
            hasLoopedAdd = true;
            targetAdd -= obj.value;
            obj.quantity++;
          }
        }
      }
    });
    hasLoopedAdd = false;
  }
  // Loop to subtract change from drawer(what the customer gets back)
  let targetSubtract = paid - cost;
  let lastLoopTargetSubtract = 0;
  let hasLoopedSubtract = false;
  while (targetSubtract > 0 && lastLoopTargetSubtract != targetSubtract) {
    lastLoopTargetSubtract = targetSubtract;
    copyOfDrawer.forEach((obj) => {
      if (!hasLoopedSubtract) {
        if (obj.quantity > 0 && targetSubtract > 0) {
          if (targetSubtract - obj.value >= 0) {
            hasLoopedSubtract = true;
            targetSubtract -= obj.value;
            obj.quantity--;
          }
        }
      }
    });
    hasLoopedSubtract = false;
  }
  return copyOfDrawer.reverse();
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
