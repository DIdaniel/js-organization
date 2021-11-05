// Singleton pattern with IIFE(Imediately-invoked function express)

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Brad" });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
const instance3 = Singleton.getInstance();

console.log(instance1);
console.log(instance2 === instance2);
