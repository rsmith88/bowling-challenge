describe("Round", function() {

  beforeEach(function() {
    game = new Game();
    game.create();
    total = new Total();
  });

  describe("score", function() {
    it("should return the total score of the round (roundScore)", function() {
      expect(game.round[0].score()).toEqual(0);
    });
  });

  describe("firstRoll", function() {
    it("if strike, it should add 10 points to roundScore & record strike", function() {
      game.round[0].firstRoll('strike');
      expect(game.round[0].score()).toEqual(10);
      expect(game.round[0].strike).toEqual(true)
    });

    it("if not strike, it should add rollPoints to roundScore", function() {
      game.round[0].firstRoll(8);
      expect(game.round[0].score()).toEqual(8);
    });
  });

  describe("secondRoll", function() {
    it("if a spare, it should add rollPoints to roundScore & record spare", function() {
      game.round[0].firstRoll(2);
      game.round[0].secondRoll('spare');
      expect(game.round[0].score()).toEqual(10);
      expect(game.round[0].spare).toEqual(true);
    });

    it("if not a spare, it should add rollPoints to roundScore", function() {
      game.round[0].firstRoll(1);
      game.round[0].secondRoll(8);
      expect(game.round[0].score()).toEqual(9);
      expect(game.round[0].spare).toEqual(false);
    });

    it("if more than 10 points is entered, it should record spare & set roundScore to 10", function() {
      game.round[0].firstRoll(3);
      game.round[0].secondRoll(8);
      expect(game.round[0].score()).toEqual(10);
      expect(game.round[0].spare).toEqual(true);
    });
  });

});
