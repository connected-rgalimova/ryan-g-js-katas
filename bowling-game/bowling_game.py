class BowlingGame:
    score = 0
    roll_num = 0
    pins_knocked_down = 0
    multiplier = 1
    scores = [0] * 21
    def roll(self, pins):
        self.scores[self.roll_num] = pins
        self.roll_num += 1

    def get_score(self):
        score = 0
        for i in range(0, 19, 2):
            frame_val = self.scores[i] + self.scores[i + 1]
            
            if self.scores[i] == 10:
                frame_val += self.scores[i + 2] + self.scores[i + 3]

            if frame_val == 10:
                score += self.scores[i + 2]

            score += frame_val
        return score
