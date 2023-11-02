// Гринчук Тарас
// Лабораторна робота № 7.1
// Варіант №4

function generateMatrix(rows, cols, min, max, i = 0, matrix = []) {
   if(i < rows) {
      matrix[i] = generateRow(cols, min, max);
      return generateMatrix(rows, cols, min, max, i + 1, matrix);
   }
   return matrix;
}
function generateRow(cols, min, max, j = 0, row = []) {
   if(j < cols) {
      row[j] = Math.floor(Math.random() * (max - min + 1)) + min;
      return generateRow(cols, min, max, j + 1, row);
   }
   return row;
}
function printMatrix(matrix, i = 0) {
   if(i < matrix.length) {
      console.log(matrix[i].join("\t"));
      printMatrix(matrix, i + 1);
   }
}

function getMaxOfArray(arrayRow, i = 0, max = -Infinity) {
   if (i >= arrayRow.length) {
      return max;
   }
   if (arrayRow[i] > max) {
      max = arrayRow[i];
   }
   return getMaxOfArray(arrayRow, i + 1, max);
}

function sumMaxElOfEvenRows(matrix, i = 0, sum = 0) {
   if (i >= matrix.length) {
      return sum;
   }
   if (i % 2 === 0) {
      sum += getMaxOfArray(matrix[i]);
   }
   return sumMaxElOfEvenRows(matrix, i + 1, sum);
}

const matrix = generateMatrix(6, 5, 1, 50);
printMatrix(matrix);
const sum = sumMaxElOfEvenRows(matrix);
console.log("Сума максимальних елементів по парних рядках: " + sum);




