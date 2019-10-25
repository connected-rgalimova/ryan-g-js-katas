const GameOfLife = require('./GameOfLife');

describe('GameOfLife', () => {
  it('works', () => {
    expect(new GameOfLife()).toBeInstanceOf(GameOfLife);
  });
});
