// Revealing Module pattern

const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("item Added!!!🐨");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add,
    get,
  };
})();

ItemCtrl.add({ id: 1, name: "Patrick KIM" });
ItemCtrl.add({ id: 2, name: "Kiana Marie Elliott" });
ItemCtrl.add({ id: 3, name: "Daniel" });

console.log(ItemCtrl.get(2));
