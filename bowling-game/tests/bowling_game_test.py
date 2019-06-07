import unittest
from bowling_game import BowlingGame


class TestBowlingGame(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.game = BowlingGame()

    def test_gutterGame(self):
        # game = BowlingGame()
        for i in range(20):
            self.game.roll(0)
        self.assertEqual(self.game.get_score(), 0)

    def test_allOneGame(self):
        # game = BowlingGame()
        for i in range(20):
            self.game.roll(1)
        self.assertEqual(self.game.get_score(), 20)

    def test_oneSpareGame(self):
        # game = BowlingGame()
        self.game.roll(5)
        self.game.roll(5)
        self.game.roll(3)
        for i in range(17):
            self.game.roll(0)
        self.assertEqual(self.game.get_score(), 16)

if __name__ == '__main__':
    unittest.main()
