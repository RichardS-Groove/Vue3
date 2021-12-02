const app = Vue.createApp({
  data() {
    return {
      user: {
        title: "Hello Vue.js!",
        name: "Richard",
        age: 150,
        job: "Web Developer",
        website: "https://www.google.com",
        websiteTag: "https://www.google.com",
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        error: null,
        counter: 0,
        movies: ["Spiderman", "Avengers", "Iron", "Thor", "Captain America"],
        url: "https://github.com/RichardS-Groove/Vue3",
        picture:
          "https://cdn.pixabay.com/photo/2019/05/04/14/22/woman-4178187_960_720.jpg",
          classValue: "good"
      },

      person: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
      },
    };
  },
});
