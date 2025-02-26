type PatternPixel = "orange" | "teal" | "nothing" | null;

export default function generateBlobPattern() {
  // Generate a 12 * 12 grid, within which we will create the blob's pattern.
  const patternArray: PatternPixel[][] = Array.from({ length: 12 }, () => new Array(12).fill(null));

  // todo: Add different blob pattern types in future. This one is 'blotches'.

  patternArray[0][0] = Math.random() < 0.5 ? "orange" : "teal";

  // next, set each subsequent array element
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      if (i === 0 && j === 0) continue;

      let totalNeighbours = 0;
      let orangeNeighbours = 0;

      if (j !== 0) {
        totalNeighbours += 1;
        if (patternArray[i][j - 1] === "orange") orangeNeighbours += 1;
      }

      if (i !== 0) {
        totalNeighbours += 1;
        if (patternArray[i - 1][j] === "orange") orangeNeighbours += 1;
      }

      if (i !== 0 && j !== 0) {
        totalNeighbours += 1;
        if (patternArray[i - 1][j - 1] === "orange") orangeNeighbours += 1;
      }

      let orangeChance = orangeNeighbours / totalNeighbours;

      // we want the chance to be non-zero at all times
      if (orangeChance === 0) orangeChance = 0.1
      if (orangeChance === 1) orangeChance = 0.9

      patternArray[i][j] = Math.random() > orangeChance ? "orange" : "teal";
    }
  }

  return patternArray;
}