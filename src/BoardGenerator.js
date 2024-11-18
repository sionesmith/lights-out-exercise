/**
 * Generates a random 5x5 solvable board
 * @returns 5x5 array of bools
 */
export function newBoard() {
    let board = randomBoard();

    while (!isSolvable(board)) {
        board = randomBoard();
    }

    return board;
}

function randomBoard() {
    const size = 5;
    const chanceLightStartsOn = 0.4;

    const lightsGrid = Array.from({ length: size }).map( 
        row => row = Array.from({ length: size }).map(
            cell => cell = Math.random() < chanceLightStartsOn)
    )
    return lightsGrid;
}

function isSolvable(board) {
    // To test if a 5x5 Lights Out pattern is solvable, you need to check two things. 
    //
    // First look at the top, middle and bottom rows, at the first two and last two lights marked with "x":
    // [x, x, ., x, x]
    // [., ., ., ., .]
    // [x, x, ., x, x]
    // [., ., ., ., .]
    // [x, x, ., x, x]
    // If there are an odd number of lights lit up, then the puzzle is unsolvable.
    //
    // Second look at the first, middle and last columns instead, again only the first two and last two lights:
    // [x, ., x, ., x]
    // [x, ., x, ., x]
    // [., ., ., ., .]
    // [x, ., x, ., x]
    // [x, ., x, ., x]
    // If there are an odd number of lights lit up, then the puzzle is unsolvable.
    //
    // If both tests pass, then the pattern is solvable.
    // https://puzzling.stackexchange.com/questions/123075/how-do-i-determine-whether-a-5x5-lights-out-puzzle-is-solvable-without-trying-to


    const firstTestIndices = [
        [0,0], [0,1], [0,3], [0,4],
        [2,0], [2,1], [2,3], [2,4],
        [4,0], [4,1], [4,3], [4,4]
    ];

    const secondTestIndices = [
        [0,0], [0,2], [0,4],
        [1,0], [1,2], [1,4],
        [3,0], [3,2], [3,4],
        [4,0], [4,2], [4,4],
    ];

    const firstCount = firstTestIndices.reduce((partialSum, i) => partialSum + board[i[0]][i[1]], 0);

    const secondCount = secondTestIndices.reduce((partialSum, i) => partialSum + board[i[0]][i[1]], 0);

    return (firstCount % 2 == 0) && (secondCount % 2 == 0);
}