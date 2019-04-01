var movie = { // Code will be tested with a different movie
   name: "Interstellar",
   director: "Christopher Nolan",
   composer: "Hans Zimmer",
   cast: {
      "Matthew McConaughey": "Cooper",
      "Anne Hathaway": "Brand",
      "Jessica Chastain": "Murph",
      "Matt Damon": "Mann",
      "Mackenzie Foy": "Young Murph"
   },
   budget: 165000000,
   boxOffice: 675100000,
   awards: [],

   get totalRevenue() {
      return this.boxOffice - this.budget;
   }

};
