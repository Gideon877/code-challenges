const assert = require("assert");
const rotateImage = require("../Rotate Image/main");

describe("rotateImage function", function() {
  it("should return array rotated 90 degree clockwise", function() {
    assert.deepEqual(rotateImage([[7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]]), [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]);
  });
});
