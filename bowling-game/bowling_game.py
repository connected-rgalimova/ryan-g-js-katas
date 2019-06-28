class BowlingGame:
    score = 0
    roll_num = 0
    pins_knocked_down = 0
    multiplier = 1
    scores = [0] * 21
    frame = 0

    def roll(self, pins):
        self.scores[self.roll_num] = pins
        self.roll_num += 1

    def get_score(self):
        score = 0

        i = 0
        while i < 19:
            if self.frame == 9:
                frame_val = self.scores[i] + \
                    self.scores[i+1] + self.scores[i+2]
                score += frame_val
                break
            else:
                frame_val = self.scores[i] + self.scores[i + 1]

                if self.scores[i] == 10:  # strike
                    frame_val += self.scores[i + 2]
                    i += 1
                else:
                    if frame_val == 10:  # spare
                        frame_val += self.scores[i + 2]
                    i += 2

                score += frame_val
                self.frame += 1

        return score
