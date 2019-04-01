var movie = { // Code will be tested with different actors and movies
   name: "Forrest Gump",
   director: "Robert Zemeckis",
   composer: "Alan Silvestri",
   cast: {
      "Tom Hanks": "Forrest Gump",
      "Michael Connor Humphreys": "Young Forrest Gump",
      "Robin Wright": "Jenny Curran",
      "Gary Sinise": "Lieutenant Dan Taylor"
   },
   roleOf: function(actorName) {

      return this.cast[actorName];

   }
};
