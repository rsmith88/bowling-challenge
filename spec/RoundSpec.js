describe("Round", function() {

  beforeEach(function() {
    game = new Game();
    round1 = new Round();
  });

  describe("score", function() {
    it("should return the total score of the round", function() {
      expect(round1.score()).toEqual(0);
    });
  });

  describe("firstRoll", function() {
    it("if strike, it should add 10 points to roundscore", function() {
      round1.firstRoll('strike');
      expect(round1.score()).toEqual(10);
    });

    it("if not strike, it should add roll to roundscore", function() {
      round1.firstRoll(8);
      expect(round1.score()).toEqual(8);
    });
  });
  
  describe("secondRoll", function() {
    it("if not strike, it should add roll to roundscore", function() {
      round1.firstRoll(8);
      expect(round1.score()).toEqual(8);
    });
  });

});
