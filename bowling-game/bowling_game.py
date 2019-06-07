class BowlingGame:
    score = 0
    roll_num = 0
    pins_knocked_down = 0
    multiplier = 1
    def roll(self, pins):
        # strike = 10 points in one ball over a single frame
        # spare = 10 points in two balls over a single frame
        self.roll_num += 1
        self.score += (pins * self.multiplier)
        self.multiplier = 1
        if (self.roll_num % 2) == 0: # first roll
            self.pins_knocked_down = pins
        elif (self.roll_num % 2) == 1: # second roll
            if (self.pins_knocked_down + pins) == 10:
                self.multiplier = 2

    def get_score(self):
        return self.score
