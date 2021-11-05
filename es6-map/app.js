// mediator pattern

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const patrick = new User("Patrick KIM");
const kiana = new User("Kiana KIM");
const daniel = new User("Daniel KIM");

const chatroom = new Chatroom();

chatroom.register(patrick);
chatroom.register(kiana);
chatroom.register(daniel);

patrick.send("Hello Kiana", kiana);
kiana.send("Hello patrick You are the best dev ever!", daniel);
daniel.send("Hello everyone");
