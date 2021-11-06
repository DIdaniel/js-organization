const PageState = function () {
  let currentState = new homeState();

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// HomeState
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  `;
};

// About state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `
    <p>This is The about page</p>
  `;
};

// Contact state
const contactState = function (page) {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `
    <p>This is The Contact page</p>
  `;
};

// Initial pageState
const page = new PageState();

// Init the first state
page.init();

// UI vars
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
