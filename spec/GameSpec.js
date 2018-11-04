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
    it("if round complete, it should update that round", function() {
      game.round[1].firstRoll(2);
      game.round[1].secondRoll(2);
      game.update();
      expect(total.score()).toEqual(4);
    });

    it("if round is a spare, it should update after following round", function() {
      game.round[1].firstRoll(2);
      game.round[1].secondRoll('spare');
      game.update();
      expect(total.score()).toEqual(10);
      game.round[2].firstRoll(2);
      game.round[2].secondRoll(3);
      game.update();
      expect(total.score()).toEqual(17);
    });

    it("if round is a strike, it should update after following round", function() {
      game.round[1].firstRoll('strike');
      game.update();
      expect(total.score()).toEqual(10);
      game.round[2].firstRoll(2);
      game.round[2].secondRoll(3);
      game.update();
      expect(total.score()).toEqual(20);
    });

  });


});
