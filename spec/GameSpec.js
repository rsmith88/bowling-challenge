describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    game.create();
    total = new Total();
  });

  describe("create", function() {
    it("create 10 rounds for the game", function() {
      game.create();
      expect(game.round[2] instanceof Round).toBeTruthy();
    });
  });

  describe("update", function() {
    it("if round complete, it should update total score", function() {
      game.round[0].firstRoll(2);
      game.round[0].secondRoll(2);
      game.update(game.round[0]);
      expect(total.score()).toEqual(4);
    });
  });

});
