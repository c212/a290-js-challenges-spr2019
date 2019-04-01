var movie = { // Code will be tested with different actors and movies
   name: "Pirates of the Caribbean: At World's End",
   director: "Gore Verbinski",
   composer: "Hans Zimmer",
   cast: {
      "Johnny Depp": "Jack Sparrow",
      "Orlando Bloom": "Will Turner",
      "Keira Knightley": "Elizabeth Swann",
      "Geoffrey Rush": "Hector Barbossa"
   },
   roleOf: function(actorName) {
      if (!(actorName in this.cast)) {
         return "Not in this movie.";
      }
      return this.cast[actorName];
   }
};
