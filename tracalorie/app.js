// Storage Controller

// Item Controller
const itemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / State
  const data = {
    items: [
      {
        id: 0,
        name: "Steak Dinner",
        calories: 1200,
      },
      {
        id: 1,
        name: "Cookies",
        calories: 300,
      },
      {
        id: 2,
        name: "Eggs",
        calories: 700,
      },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let ID;
      // Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new Item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelector = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
  };

  //Public methods
  return {
    populateItemList: function (items) {
      let html = "";

      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name} : </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fas fa-pencil-alt"></i>
          </a>
      </li>
        `;
      });

      // Insert List Items
      document.querySelector(UISelector.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelector.itemNameInput).value,
        calories: document.querySelector(UISelector.itemCaloriesInput).value,
      };
    },
    addListItem: function (item) {
      // Create li element
      const li = document.createElement("li");

      // Add Class
      li.className = "collection-item";
      // Add iD
      li.id = `item-${item.id}`;

      // Add html
      li.innerHTML = `
          <strong>${item.name} : </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fas fa-pencil-alt"></i>
          </a>
      `;

      // insert Item
      document.querySelector(UISelector.itemList).insertAdjacentElement("beforeend", li);
    },
    getSelectors: function () {
      return UISelector;
    },
  };
})();

// App Controller
const App = (function (itemCtrl, UICtrl) {
  // Load Event Listeners
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors();

    // Add Item event
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    e.preventDefault();

    // Get form input from UI Ctroller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      // Add item
      const newItem = itemCtrl.addItem(input.name, input.calories);
      // Add item UI List
      UICtrl.addListItem(newItem);

      clearInput: function() {
        document.querySelector(UISelector.itemNameInput).value = "";
      }
      // Clear fields
      UICtrl.clearInput();
    }
  };

  // Public methods
  return {
    init: function () {
      console.log("Initialize App...");

      // Fetch Items from data structure
      const items = itemCtrl.getItems();

      // Populate List with items
      UICtrl.populateItemList(items);

      // Load event listeners
      loadEventListeners();
    },
  };
})(itemCtrl, UICtrl);

// Initialize App
App.init();
