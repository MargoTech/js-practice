function showInfo(prefix) {
  console.log(prefix + ": " + this.name);
}

const user = {
  name: "Margarita",
};

const guest = {
  name: "Guest",
};

showInfo("User"); // this = undefined

showInfo.call(user, "User"); // this=user, "User: Margarita"

showInfo.apply(guest, ["Guest"]); // "Guest: Guest"

const boundShowInfo = showInfo.bind(guest);
boundShowInfo("Bound"); // create new function with this=guest => "Bound: Guest"
