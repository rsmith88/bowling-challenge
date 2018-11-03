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
    it("if strike, it should add 10 points to roundscore & record strike", function() {
      round1.firstRoll('strike');
      expect(round1.score()).toEqual(10);
      expect(round1._strike).toEqual(true)
    });

    it("if not strike, it should add roll points to roundscore", function() {
      round1.firstRoll(8);
      expect(round1.score()).toEqual(8);
    });
  });

  // describe("secondRoll", function() {
  //   it("if a spare, it should add roll to roundscore", function() {
  //     round1.firstRoll('spare');
  //     expect(round1.score()).toEqual(10);
  //   });
  //
  //   it("if not a spare, it should add roll to roundscore", function() {
  //     round1.firstRoll(8);
  //     expect(round1.score()).toEqual(8);
  //   });
  //
  //   it("if a total of 10 points is entered, it should record spare", function() {
  //     round1.firstRoll('strike');
  //     expect(round1.score()).toEqual(10);
  //   });
  // });

});
