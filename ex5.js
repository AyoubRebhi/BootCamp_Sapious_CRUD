const N = 8;
const empty = "-";

const setQueens = (side) => {
  let result = [];

  for (let i = 0; i < side; i++) {
    result.push(Array.from({ length: side }, () => undefined));
  }

  for (let i = 0; i < result.length; i++) {
    console.log(`line ${i}`);
    // Check the line
    const queenFoundOnRow = doRowHasQueen(result, i);
    if (queenFoundOnRow) {
      console.log("Line already has Queen");
    } else {
      console.log("No Queen on this line");
      for (let j = 0; j < result[i].length; j++) {
        // Check the column
        const queenFoundOnCol = doColumnHasQueen(result, j);
        if (queenFoundOnCol) {
          console.log("Column already has Queen");
        } else {
          console.log("No Queen on this column");
          // Check the diagonals
          const queenFoundOnAscDiago = doAscendingDiagonalHasQueen(result, i, j);
          const queenFoundOnDescDiago = doDescendingDiagonalHasQueen(result, i, j);
          if (!queenFoundOnAscDiago && !queenFoundOnDescDiago) {
            console.log("No Queen on diagonals");
            result[i][j] = 'Q';
          } else {
            console.log("Diagonals already have Queen");
          }
          displayChessboard(result);
          break;
        }
      }
    }
  }

  return result;
};

const doRowHasQueen = (chessboard, index) => {
  return getRow(chessboard, index).includes("Q");
};

const getRow = (chessboard, index) => {
  return chessboard[index];
}

const doColumnHasQueen = (chessboard, index) => {
  return getColumn(chessboard, index).includes('Q');
};

const getColumn = (chessboard, index) => {
  let result = [];
  for (let i = 0; i < chessboard.length; i++) {
    const row = chessboard[i];
    result.push(row[index]);
  }
  return result;
}

const doDescendingDiagonalHasQueen = (chessboard, x, y) => {
  return checkDiagonal(chessboard, 1, x, y);
};

const doAscendingDiagonalHasQueen = (chessboard, x, y) => {
  return checkDiagonal(chessboard, -1, x, y);
};

// Descending : 1
// Ascending : -1

const checkDiagonal = (chessboard, direction, _x, _y) => {
  return getDiagonal(chessboard, direction, _x, _y).includes("Q");
};

const getDiagonal = (chessboard, direction, _x, _y) => {
  let x = _x;
  let y = _y;
  const side = chessboard.length;
  const value = chessboard[_x][_y];

  let before = [];
  let after = [];

  x = _x - 1;
  y = _y - direction;

  while (x >= 0 && y >= 0 && y < side) {
    const item = chessboard[x][y];
    // console.log(`[before] ${x}:${y} => ${item}`);
    before.push(item);
    x--;
    y = y - direction;
  }

  x = _x + 1;
  y = _y + direction;

  while (x < side && y < side && y >= 0) {
    const item = chessboard[x][y];
    // console.log(`[after] ${x}:${y} => ${item}`);
    after.push(chessboard[x][y]);
    x++;
    y = y + direction;
  }

  before = before.reverse();
  let diagonal = [...before, value, ...after];

  if (direction <= 0) {
    diagonal = diagonal.reverse();
  }

  // console.log(`before of ${_x}:${_y} => `, before);
  // console.log(`diagonal of ${_x}:${_y} => `, diagonal);
  // console.log(`after of ${_x}:${_y} => `, after);

  return diagonal;
};

const displayChessboard = (chessboard) => {
  const length = chessboard.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const value = chessboard[i][j];
      result = result + ` ${value ?? "-"}`;
    }
    result = result + "\n";
  }
  console.log(result);
};

const displayLine = (line) => {
  let result = "";
  line.forEach((e) => (result = result + ` ${e ?? "-"}`));
  console.log(result);
};

const displayColumn = (line) => {
  let result = "";
  line.forEach((e) => (result = result + ` ${e ?? "-"}\n`));
  console.log(result);
};

displayChessboard(setQueens(N));

let example = [
  ["Q", , , 1, , 6, ,],
  [, , , , "Q", , ,],
  [, , , 5, , 2, , "Q"],
  [, , , , , "Q", ,],
  [, , "Q", , , , ,],
  [, , , , , , "Q"],
  [, "Q", , , , , ,],
  [, , , "Q", , , ,]
];

const x = 2;
const y = 3;

// displayChessboard(example);
// console.log(`Column ${y} => `, displayColumn(getColumn(example, y)));

// console.log(`Target ${x}:${y} => `, example[x][y]);
// console.log(`Desc ${x}:${y} => `, getDiagonal(example, -1, x, y));
// console.log(`Asc ${x}:${y} => `, getDiagonal(example, 1, x, y));
// console.log(`Asc ${x}:${y} => `, checkAscendingDiagonal(example, x, y));
