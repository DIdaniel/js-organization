// Singleton pattern with IIFE(Imediately-invoked function express)

// const Singleton = (function () {
//   let instance;

//   function createInstance() {
//     const object = new Object({ name: "Brad" });
//     return object;
//   }

//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }

//       return instance;
//     },
//   };
// })();

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();
// const instance3 = Singleton.getInstance();

// console.log(instance1);
// console.log(instance2 === instance2);

// Factory pattern
// function MemberFactory() {
//   this.createMember = function (name, type) {
//     let member;

//     if (type === "simple") {
//       member = new SimpleMembership(name);
//     } else if (type === "standard") {
//       member = new StandardMembership(name);
//     } else if (type === "super") {
//       member = new SuperMembership(name);
//     }

//     member.type = type;

//     member.define = function () {
//       console.log(`${this.name} (${this.type} : ${this.cost})`);
//     };

//     return member;
//   };
// }

// const SimpleMembership = function (name) {
//   this.name = name;
//   this.cost = "$5";
// };

// const StandardMembership = function (name) {
//   this.name = name;
//   this.cost = "$15";
// };

// const SuperMembership = function (name) {
//   this.name = name;
//   this.cost = "$25";
// };

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember("Patrick KIM", "simple"));
// members.push(factory.createMember("Chris Park", "standard"));
// members.push(factory.createMember("Elliott Lee", "super"));
// members.push(factory.createMember("Marie Loo", "standard"));

// console.log(members);

// members.forEach(function (member) {
//   member.define();
// });
