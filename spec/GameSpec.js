describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    game.create();
    total = new Total
  });

  describe("create", function() {
    it("create 10 rounds for the game", function() {
      expect(game.round[2] instanceof Round).toBeTruthy();
    });
  });

  describe("update", function() {
    it("if round complete, it should update that round", function() {
      game.round[1].firstRoll(2);
      game.round[1].secondRoll(2);
      game.update(total);
      expect(total.score()).toEqual(4);
      game.round[2].firstRoll(2);
      game.round[2].secondRoll(2);
      game.update(total);
      expect(total.score()).toEqual(8);
    });

    it("if round is a spare, it should update after following round", function() {
      game.round[1].firstRoll(2);
      game.round[1].secondRoll('spare');
      game.update(total);
      expect(total.score()).toEqual(10);
      game.round[2].firstRoll(2);
      game.round[2].secondRoll(3);
      game.update(total);
      expect(total.score()).toEqual(17);
    });

    it("if round is a strike, it should update after following round", function() {
      game.round[1].firstRoll('strike');
      game.update(total);
      expect(total.score()).toEqual(10);
      game.round[2].firstRoll(2);
      game.round[2].secondRoll(3);
      game.update(total);
      expect(total.score()).toEqual(20);
    });

    it("should update score if two strikes are scored in a row", function() {
      game.round[1].firstRoll('strike');
      game.round[2].firstRoll('strike');
      game.update(total);
      expect(total.score()).toEqual(30);
      game.round[3].firstRoll(4);
      game.round[3].secondRoll(1);
      game.update(total);
      expect(total.score()).toEqual(40);
    });

    it("should update score if two spares are scored in a row", function() {
      game.round[1].firstRoll(5);
      game.round[1].secondRoll('spare');
      game.round[2].firstRoll(5);
      game.round[2].secondRoll('spare');
      game.update(total);
      expect(total.score()).toEqual(25);
      game.round[3].firstRoll(4);
      game.round[3].secondRoll(1);
      game.update(total);
      expect(total.score()).toEqual(34);
    });
  });

});
