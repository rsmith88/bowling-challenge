describe("Round", function() {

  beforeEach(function() {
    game = new Game();
    round1 = new Round();
    total = new Total();
  });

  describe("score", function() {
    it("should return the total score of the round (roundScore)", function() {
      expect(round1.score()).toEqual(0);
    });
  });

  describe("firstRoll", function() {
    it("if strike, it should add 10 points to roundScore & record strike", function() {
      round1.firstRoll('strike');
      expect(round1.score()).toEqual(10);
      expect(round1.strike).toEqual(true)
    });

    it("if not strike, it should add rollPoints to roundScore", function() {
      round1.firstRoll(8);
      expect(round1.score()).toEqual(8);
    });
  });

  describe("secondRoll", function() {
    it("if a spare, it should add rollPoints to roundScore & record spare", function() {
      round1.firstRoll(2);
      round1.secondRoll('spare');
      expect(round1.score()).toEqual(10);
      expect(round1.spare).toEqual(true);
    });

    it("if not a spare, it should add rollPoints to roundScore", function() {
      round1.firstRoll(1);
      round1.secondRoll(8);
      expect(round1.score()).toEqual(9);
      expect(round1.spare).toEqual(false);
    });

    it("if more than 10 points is entered, it should record spare & set roundScore to 10", function() {
      round1.firstRoll(3);
      round1.secondRoll(8);
      expect(round1.score()).toEqual(10);
      expect(round1.spare).toEqual(true);
    });
  });

});
