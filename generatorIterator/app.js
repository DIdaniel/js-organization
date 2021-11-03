const data = [
  {
    name: "Patrick KIM",
    age: 32,
    gender: "Male",
    lookingfor: "Female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Kiana Lee",
    age: 24,
    gender: "Female",
    lookingfor: "mail",
    location: "Cannada CA",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Daniel KIM",
    age: 50,
    gender: "Male",
    lookingfor: "Female",
    location: "Korea Seoul",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `
      <img src="${currentProfile.image}" />
    `;
  } else {
    // No more Profile
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
