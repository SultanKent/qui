const questions = [
  {
    question: "Вычислить расстояние между точками А(1;-2;-3) и В(3;1;-9)",
    options: ["7", "3", "5", "6", "2"],
    correctAnswer: "7"
  },
  {
    question: "Вычислить расстояние между точками А(2;-3) и В(-1;1)",
    options: ["5", "3", "6", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние между точками А(-2;-3) и В(1;1)",
    options: ["5", "3", "60", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние между точками А(2;3) и В(-1;-1)",
    options: ["5", "3", "4", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние между точками А(-2;3) и В(1;-1)",
    options: ["5", "3", "0", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние между точками А(3;1;-9) и В(-1;1;-12)",
    options: ["5", "3", "6", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние между точками А(-3;1;-9) и В(1;1;-12)",
    options: ["5", "4", "6", "2", "11"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние между точками А(3;-1;9) и В(-1;-1;12)",
    options: ["5", "3", "0", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Вычислить расстояние от начала координат 0 до точки А(4;-2;-4)",
    options: ["6", "3", "5", "2", "1"],
    correctAnswer: "6"
  },
  {
    question: "Вычислить расстояние от начала координат 0 до точки А(-4;3)",
    options: ["5", "3", "6", "2", "1"],
    correctAnswer: "5"
  },
  {
    question: "Найти угловой коэффициент прямой 2х-у+3=0",
    options: ["2", "3", "6", "-1", "1"],
    correctAnswer: "2"
  },
  {
    question: "Найти угловой коэффициент прямой 2х+у+3=0",
    options: ["-2", "3", "6", "-1", "1"],
    correctAnswer: "-2"
  },
  {
    question: "Найти угловой коэффициент прямой 3х-у+3=0",
    options: ["3", "-3", "6", "-1", "1"],
    correctAnswer: "3"
  },
  {
    question: "Найти угловой коэффициент прямой 8х-2у+3=0",
    options: ["4", "3", "-4", "-1", "1"],
    correctAnswer: "4"
  },
  {
    question: "Найти угловой коэффициент прямой 4х-4у+3=0",
    options: ["1", "3", "6", "-1", "12"],
    correctAnswer: "1"
  },
  {
    question: "Найти угловой коэффициент прямой 9х-3у+8=0",
    options: ["3", "5", "0", "-1", "1"],
    correctAnswer: "3"
  },
  {
    question: "Найти угловой коэффициент прямой 14х-2у+3=0",
    options: ["7", "3", "6", "-1", "1"],
    correctAnswer: "7"
  },
  {
    question: "Найти угловой коэффициент прямой 10х+5у+3=0",
    options: ["-2", "3", "6", "-1", "1"],
    correctAnswer: "-2"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(-1;3) и В(4;5)",
    options: ["2х-5у+17=0", "х=3", "у+2у-6=0", "х-1=0", "у=1"],
    correctAnswer: "2х-5у+17=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(-1;2) и В(1;3)",
    options: ["х-2у+5=0", "2х-5у+17=0", "у+2у-6=0", "х-1=0", "х-у=1"],
    correctAnswer: "х-2у+5=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(1;-2) и В(-1;3)",
    options: ["5х+2у-1=0", "2х-5у+1=0", "у+2у-6=0", "х-1=0", "х-у=1"],
    correctAnswer: "5х+2у-1=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(-1;0) и В(-4;-5)",
    options: ["5х-3у+5=0", "х+у=3", "у+2у-6=0", "х-2у+1=0", "у=1"],
    correctAnswer: "5х-3у+5=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(-2;2) и В(-1;3)",
    options: ["х-у+4=0", "х+у=3", "у+2у-6=0", "х-1=0", "у=1"],
    correctAnswer: "х-у+4=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(-1;-2) и В(1;-1)",
    options: ["х-2у-3=0", "х-2у+2=0", "у+2у-6=0", "х-1=0", "у=1"],
    correctAnswer: "х-2у-3=0"
  },
  {
    question: "Составить уравнение плоскости, которая проходит через точку М(2;1;-1) и имеет нормальный вектор n = {1, -2, 3 }",
    options: ["х-2у+3z+3=0", "х+2у+3z+3=0", "х-2у-3z+3=0", "х-2у+3z+2=0", "х-2у+3z+1=0"],
    correctAnswer: "х-2у+3z+3=0"
  },
  {
    question: "Составить уравнение плоскости, которая проходит через начало координат и имеет нормальный вектор n = {5, 0, -3 }",
    options: ["5х-3z=0", "5х+3у=0", "3х-5z=0", "5х-3у-z=0", "2x-3z=0"],
    correctAnswer: "5х-3z=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точку А(-2;1) параллельно прямой 2х-у+1=0",
    options: ["2х-у+5=0", "5х+3у=0", "3х-5у-1=0", "5х-3у-3=0", "2x-3у=0"],
    correctAnswer: "2х-у+5=0"
  },
  {
    question: "Составить уравнение плоскости, проходящей через точку M(3, -1, 2) перпендикулярно вектору n = {1, 0, 1}",
    options: ["х+z-5=0", "5х+3у-1=0", "3х-5z=0", "5х-3у-z=0", "2x-3z=0"],
    correctAnswer: "х+z-5=0"
  },
  {
    question: "Составить уравнение плоскости, проходящей через точку перпендикулярно вектору n = {3, 1, -1}",
    options: ["3х+у-z-18=0", "5х+3у-1=0", "3х-5z-2у+3=0", "5х-3у-z=0", "2x-3z=0"],
    correctAnswer: "3х+у-z-18=0"
  },
  {
    question: "Уравнение прямой с угловым коэффициентом представлено в виде:",
    options: ["у=кх+в", "х+ку-1=0", "3х--2у+3=0", "5х-3у+в=0", "2x-ку=в"],
    correctAnswer: "у=кх+в"
  },
  {
    question: "Установить, какие из следующих пар уравнений определяют параллельные плоскости: 1. 2x - 3y + 5z - 7 = 0, 2x - 3y + 5z + 3 = 0; 2. 4x + 2y - 4z + 5 = 0, 2x + y + 2z - 1 = 0; 3. x - 3z + 2 = 0, 2x - 6z - 7 = 0",
    options: ["1 и 3", "2 и 3", "1,2 и 3", "1 и 2", "нет таких плоскостей"],
    correctAnswer: "1 и 3"
  },
  {
    question: "Установить, какие из следующих пар уравнений определяют перпендикулярные плоскости: 1. 3x - y - 2z - 5 = 0, x + 9y - 3z + 2 = 0; 2. 3x + 3y - z - 3 = 0, x - y - z + 5 = 0; 3. 2x - 5y + z = 0, x + 2z - 3 = 0",
    options: ["1", "3", "1 и 2", "2 и 3", "нет перпендикулярных плоскостей"],
    correctAnswer: "3"
  },
  {
    question: "Общее уравнение прямой представлено в виде:",
    options: ["ах+ву+с=0", "ах--ву+с=0", "ах-ву+с=0", "2x-ву=а", "ах-ву-с=0"],
    correctAnswer: "ах-ву+с=0"
  },
  {
    question: "Составить уравнение плоскости, которая проходит через начало координат параллельно плоскости 5x - 3y + 2z - 3 = 0",
    options: ["5x - 3y + 2z = 0", "5x - 3y - 2z + 3 = 0", "5x - 3y - 2z - 3 = 0", "5x - 3y + 2z + 13 = 0", "5x + 3y + 2z -3 = 0"],
    correctAnswer: "5x - 3y + 2z = 0"
  },
  {
    question: "Составить уравнение плоскости, которая проходит через точку M1(3, -2, 1) параллельно плоскости 2x - 3z + 5 = 0",
    options: ["2х-3z-3=0", "4x+3z-1=0", "x-y+2z=1", "x-3e+z-1=0", "2y-z=0"],
    correctAnswer: "2х-3z-3=0"
  },
  {
    question: "Дано уравнение плоскости. Написать для нее уравнение в 'отрезках' на осях координат х + 2y - 3z -6 = 0",
    options: [
      "x / 6 + y / 3 - z / 2 = 1",
      "x - y / 3 - z / 2 = 1",
      "x / 6 + y / 3 + z / 2 = 1",
      "-x + y / 3 - z / 2 = 1",
      "x + y / 3 - z / 2 = -1"
    ],
    correctAnswer: "x / 6 + y / 3 - z / 2 = 1"
  },
  {
    question: "Найдите острый угол между прямыми x - 3 / 1 = y + 2 / -1 = z / √2, x + 2 / 1 = y - 3 / 1 = z + 5 / √2",
    options: ["60", "45", "30", "90", "0"],
    correctAnswer: "60"
  },
  {
    question: "Вычислить определитель Δ = | cosx / sinx -sinx / cosx |",
    matrix: [
      ["cosx", "sinx"],
      ["-sinx", "cosx"]
    ],
    options: ["1", "5", "4", "3", "0"],
    correctAnswer: "1"
  },
  {
    question: "Вычислить определитель Δ = | 4 / 5 -6 / 7 |",
    matrix: [
      [4, 5],
      [-6, 7]
    ],
    options: ["58", "0", "17", "52", "90"],
    correctAnswer: "58"
  },
  {
    question: "Вычислить определитель Δ = | 1 / 6, -4 / -8 |",
    matrix: [
      [1, 6],
      [-4, -8]
    ],
    options: ["16", "-16", "32", "-32", "0"],
    correctAnswer: "-16"
  },
  {
    question: "Вычислить определитель Δ = | 1 / -1 / 1,  0 / 2 / 3, 2 / 4 / 1 |",
    matrix: [
      [1, -1, 1],
      [0, 2, 3],
      [2, 4, 1]
    ],
    options: ["-20", "18", "20", "5", "30"],
    correctAnswer: "-20"
  },
  {
    question: "Вычислить определитель Δ = | -1 / 0 / 1,  3 / 2 / 3, 1 / 3 / 1 |",
    matrix: [
      [-1, 0, 1],
      [3, 2, 3],
      [1, 3, 1]
    ],
    options: ["14", "10", "20", "6", "5"],
    correctAnswer: "14"
  },
  {
    question: "Вычислить определитель Δ = | 1 / -1 / 0,  3 / 2 / 3, 1 / 3 / 1 |",
    matrix: [
      [1, -1, 0],
      [3, 2, 3],
      [1, 3, 1]
    ],
    options: ["-7", "0", "4", "-6", "2"],
    correctAnswer: "-7"
  },
  {
    question: "Вычислить определитель Δ = | 1 / 1 / 1,  3 / 2 / 3, 1 / 0 / 1 |",
    matrix: [
      [1, 1, 1],
      [3, 2, 3],
      [1, 0, 1]
    ],
    options: ["0", "1", "2", "-1", "-2"],
    correctAnswer: "0"
  },
  {
    question: "Вычислить определитель Δ = | 2 / -1 / 5,  3 / 2 / 3, 1 / 0 / 1 |",
    matrix: [
      [2, -1, 5],
      [3, 2, 3],
      [1, 0, 1]
    ],
    options: ["-6", "1", "5", "9", "0"],
    correctAnswer: "-6"
  },
  {
    question: "Вычислить определитель Δ = | 0 / 0 / 5,  3 / 2 / 3, 1 / 3 / 1 |",
    matrix: [
      [0, 0, 5],
      [3, 2, 3],
      [1, 3, 1]
    ],
    options: ["35", "28", "61", "-32", "0"],
    correctAnswer: "35"
  },
  {
    question: "Найти A+B, если A = (2 / 4, 1 / 2), B = (3 / -2, 0 / 1)",
    matrix: [
      [2, 4],
      [1, 2]
    ],
    matrix: [
      [3, -2],
      [0, 1]
    ],
    options: [
      "(5 / 2, 1 / 3)",
      "(5 / 2, 1 / 3)", // Duplicate options for variety
      "(2 / 1, 1 / 3)",
      "(2 / 2, 1 / 3)",
      "(-5 / 2, 1 / 3)"
    ],
    correctAnswer: "(5 / 2, 1 / 3)"
  },
  {
    question: "Найти A-B, если A = (2 / 4, 1 / 2), B = (3 / -2, 0 / 1)",
    matrixA: [
      [2, 4],
      [1, 2]
    ],
    matrixB: [
      [3, -2],
      [0, 1]
    ],
    options: [
      "(-1 / 6, 1 / 1)",
      "(5 / 2, -1 / 3)",
      "(1 / 2, -1 / 3)",
      "(2 / 2, -1 / 3)",
      "(5 / 2, -1 / 0)"
    ],
    correctAnswer: "(5 / 2, -1 / 3)"
  },
  {
    question: "Найти A+B, если A = (-2 / 3, 1 / 2), B = (3 / -2, 0 / 1)",
    matrixA: [
      [-2, 3],
      [1, 2]
    ],
    matrixB: [
      [3, -2],
      [0, 1]
    ],
    options: [
      "(1 / 1, 1 / 3)",
      "(5 / 2, -1 / 0)",
      "(0 / 2, -1 / 1)",
      "(-1 / 2, -1 / 0)",
      "(5 / 2, -1 / 4)"
    ],
    correctAnswer: "(5 / 2, -1 / 4)"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(2;3) и В(5;4)",
    options: [
      "х-3у+7=0",
      "х=6",
      "х+у-7=9",
      "2х-3у-7=0",
      "у-5=0"
    ],
    correctAnswer: "х-3у+7=0"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(3;1) и В(3;5)",
    options: [
      "х=3",
      "х+у=2",
      "у=",
      "х=-3",
      "у-=0"
    ],
    correctAnswer: "х=3"
  },
  {
    question: "Найти уравнение прямой, проходящей через точки А(3;1) и В(-4;1)",
    options: [
      "у=1",
      "х-у=2",
      "х=1",
      "у-2=0",
      "х+2у=3"
    ],
    correctAnswer: "у=1"
  },
  {
    question: "Составить уравнение прямой, проходящей через точку А(2;1) параллельно прямой 3х-2у+2=0",
    options: [
      "3х-2у-4=0",
      "3х+2у-4=0",
      "3х-2у+4=0",
      "-3х-2у+4=0",
      "3х+2у+4=0"
    ],
    correctAnswer: "3х-2у-4=0"
  },
  {
    question: "Составить уравнение прямой, проходящей через точку А(2;1) перпендикулярно прямой 3х-2у+2=0",
    options: [
      "2х+3у-7=0",
      "3х+2у-7=0",
      "2х-2у+4=0",
      "-3х+2у+4=0",
      "3х+2у+7=0"
    ],
    correctAnswer: "2х+3у-7=0"
  },
  {
    question: "Найти расстояние от точки А(2;1) до прямой 3х-4у+3=0",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "1"
  },
  {
    question: "Найти расстояние от точки А(2;-1) до прямой 3х-4у+5=0",
    options: [
      "3",
      "2",
      "1",
      "4",
      "0"
    ],
    correctAnswer: "2"
  },
  {
    question: "Найти расстояние от точки А(0;6) до прямой 3х+4у-24=0",
    options: [
      "0",
      "2",
      "3",
      "4",
      "1"
    ],
    correctAnswer: "2"
  },
  {
    question: "Найти расстояние от точки А(0;6) до прямой 3х+4у+6=0",
    options: [
      "6",
      "2",
      "3",
      "4",
      "1"
    ],
    correctAnswer: "3"
  },
  {
    question: "Уравнение прямой 4х-3у+12=0 представить в виде уравнения с угловым коэффициентом",
    options: [
      "у=4/3х+4",
      "у=3/4х+4",
      "у=4х-12",
      "х=3у-12",
      "х-у=1"
    ],
    correctAnswer: "у=4/3х+4"
  },
  {
    question: "Уравнение прямой 2х-3у+6=0 представить в виде уравнения с угловым коэффициентом",
    options: [
      "у=2/3х+2",
      "у=3/4х+6",
      "у=4х-6",
      "х=3у-4",
      "х-у=12"
    ],
    correctAnswer: "у=2/3х+2"
  },
  {
    question: "Определить угол между прямыми у=5х+7 и у=2/3х+1",
    options: [
      "450",
      "300",
      "600",
      "900",
      "1350"
    ],
    correctAnswer: "450"
  },
  {
    question: "Определить угол между прямыми 5х-у+7=0 и 3х+2у=0",
    options: [
      "450",
      "300",
      "600",
      "900",
      "1350"
    ],
    correctAnswer: "450"
  },
  {
    question: "Определить угол между прямыми х-у-5=0 и х+у-2=0",
    options: [
      "900",
      "300",
      "600",
      "450",
      "1350"
    ],
    correctAnswer: "900"
  },
  {
    question: "Определить угловой коэффициент прямой 2у-х+2=0",
    options: [
      "1/2",
      "0",
      "1",
      "-1/2",
      "3"
    ],
    correctAnswer: "1/2"
  },
  {
    question: "Написать уравнение прямой, проходящей через точку А(1;2) параллельно прямой х-2у-6=0",
    options: [
      "х-2у+3=0",
      "х-2у-3=0",
      "х+2у+3=0",
      "2х+у-2=0",
      "х-3у+3=0"
    ],
    correctAnswer: "х-2у+3=0"
  },
  {
    question: "Написать уравнение прямой, проходящей через точку А(1;2) перпендикулярно прямой х-у+2=0",
    options: [
      "х+у-3=0",
      "х-у-3=0",
      "х+у+3=0",
      "2х+у-2=0",
      "х-3у+3=0"
    ],
    correctAnswer: "х+у-3=0"
  },
  {
    question: "Компланарные вектора это:",
    options: [
      "Три вектора, лежащие на одной плоскости",
      "Три вектора, лежащие на одной прямой или параллельных прямых",
      "Три вектора, лежащие на пересекающихся прямых",
      "Три вектора, образующие пирамиду",
      "Три вектора, лежащие на параллельных плоскостях"
    ],
    correctAnswer: "Три вектора, лежащие на одной плоскости"
  },
  {
    question: "Коллинеарные вектора это:",
    options: [
      "Два вектора, лежащие на одной прямой или параллельных прямых",
      "Два вектора, лежащие на одной плоскости",
      "Два вектора, лежащие на пересекающихся прямых",
      "Два ортогональных вектора",
      "Два вектора, лежащие на параллельных плоскостях"
    ],
    correctAnswer: "Два вектора, лежащие на одной прямой или параллельных прямых"
  },
  {
    question: "Условие параллельности двух прямых y = k1x + b1 и y = k2 + b2",
    options: [
      "k1 = k2",
      "k1k2 = 1",
      "k1 ≠ k2",
      "k1k2 = -1",
      "k1 - k2 = 1"
    ],
    correctAnswer: "k1 = k2"
  },
  {
    question: "Условие перпендекулярности двух прямых y = k1x + b1 и y = k2 + b2",
    options: [
      "k1k2 = -1",
      "k1k2 = 1",
      "k1 ≠ k2",
      "k1 = k2",
      "k1 - k2 = 1"
    ],
    correctAnswer: "k1k2 = -1"
  },
  {
    question: "Минором M элемента Q называется",
    options: [
      "определитель, полученный из определителя матрицы А вычеркиванием i-й строки и j-го столбца",
      "определитель, полученный из определителя матрицы А вычеркиванием j-й строки и j-го столбца",
      "определитель, полученный из определителя матрицы А вычеркиванием j-й строки",
      "определитель, полученный из определителя матрицы А вычеркиванием i-й строки и i-го столбца",
      "определитель, полученный из определителя матрицы А вычеркиванием i-й строки"
    ],
    correctAnswer: "определитель, полученный из определителя матрицы А вычеркиванием i-й строки и j-го столбца"
  },
  {
    question: "Общие уравнения прямой в пространстве",
    options: [
      "A1x + B1y + C1z + D1 = 0, A2x + B2y + C2z + D2 = 0",
      "A1x + B1y + C1z + D1 = 1, A2x + B2y + C2z + D2 = 0",
      "A1x + B1y + C1z + D1 = 0, A2x + B2y + C2z + D2 = 1",
      "A1x + B1y + C1z = 0, A2x + B2y + C2z + D2 = 0",
      "A1x + B1y + C1z + D1 = 0, A2x + B2y + C2z = 0"
    ],
    correctAnswer: "A1x + B1y + C1z + D1 = 0, A2x + B2y + C2z + D2 = 0"
  },
  {
    question: "Найти сумму векторов: a = 2j - 4k, b = 2i - 3j + k",
    options: [
      "c = 2i - j - 3k",
      "c = 2i + j - 3k",
      "c = -2i - j - 3k",
      "c = 2i - j + 3k",
      "c = -2i + j - 3k"
    ],
    correctAnswer: "c = 2i - j - 3k"
  },
  {
    question: "Дан вектор a = { 3, -2; 5 }. Найти вектор c = -3a.",
    options: [
      "c = { -9, 6, 15 }",
      "c = { 9, 6, 15 }",
      "c = { -9, -6, 15 }",
      "c = { -9, 2, 5 }",
      "c = { -9, 6, 1 }"
    ],
    correctAnswer: "c = { -9, 6, 15 }"
  },
  {
    question: "Найти разность векторов a = 2i и b = -3j + k",
    options: [
      "c = 2i + 3j - k",
      "c = 2i + j - 3k",
      "c = -2i - j - 3k",
      "c = 2i - j + 3k",
      "c = -2i + j - 3k"
    ],
    correctAnswer: "c = 2i + 3j - k"
  },
  {
    question: "Найти скалярное произведение векторов a = {4, -2, -4} и b = {6, -3, 2}",
    options: [
      "22",
      "23",
      "21",
      "20",
      "24"
    ],
    correctAnswer: "20"
  },
  {
    question: "Найти угол между векторами a = {1, -3, 1} и b = {3, 1, 0}",
    options: [
      "90",
      "0",
      "30",
      "60",
      "120"
    ],
    correctAnswer: "60"
  },
  {
    question: "Найти координаты нормального вектора плоскости 3x - 5y + 4z - 10 = 0",
    options: [
      "n = {3; -5; 4}",
      "n = {3; 5; 4}",
      "n = {3; -5; -4}",
      "n = {-3; -5; 4}",
      "n = {3; 4; 5}"
    ],
    correctAnswer: "n = {3; -5; 4}"
  },
  {
    question: "Найти координаты нормального вектора плоскости 2x - z + 5 = 0",
    options: [
      "n = {2, 0, -1}",
      "n = {-3, 0, -1}",
      "n = {3, -1, 0}",
      "n = {-2, 0, 4}",
      "n = {3, 4, 5}"
    ],
    correctAnswer: "n = {2, 0, -1}"
  },
  {
    question: "Найти координаты нормального вектора плоскости 2y + z = 0",
    options: [
      "n = {0; 2; 1}",
      "n = {-1; 0; -1}",
      "n = {0; -1; 0}",
      "n = {0; 0; 1}",
      "n = {1; 0; 2}"
    ],
    correctAnswer: "n = {0; 2; 1}"
  },
  {
    question: "При каком значении плоскости 2x - y + z - 10 = 0 и 4x - y + 2z + 6 = 0 параллельны?",
    options: [
      "a = 2",
      "a = -2",
      "a = 1",
      "a = 3",
      "a = 0.5"
    ],
    correctAnswer: "a = 0.5"
  },
  {
    question: "При каком значении плоскости x - 5z - 6 = 0 и x + y - 5z + 4 = 0 параллельны?",
    options: [
      "a = 0",
      "a = -2",
      "a = 1",
      "a = 3",
      "a = 0.5"
    ],
    correctAnswer: "a = 1"
  },
  {
    question: "При каком значении плоскости x - 3y + 9z - 8 = 0 и x - y + 3z + 5 = 0 параллельны?",
    options: [
      "a = 0",
      "a = -2",
      "a = 1",
      "a = 3",
      "a = 0.5"
    ],
    correctAnswer: "a = 0"
  },
  {
    question: "При каком значении плоскости x - 3y + 9z - 8 = 0 и x - y + 3z + 5 = 0 перпендикулярны?",
    options: [
      "a = -30",
      "a = -20",
      "a = 10",
      "a = 30",
      "a = 0.5"
    ],
    correctAnswer: "a = 10"
  },
  {
    question: "При каком значении плоскости 2x - y + z - 10 = 0 и 4x - y + 2z + 6 = 0 перпендикулярны?",
    options: [
      "a = -10",
      "a = -20",
      "a = 10",
      "a = 30",
      "a = 0.5"
    ],
    correctAnswer: "a = 10"
  },
  {
    question: "При каком значении плоскости x - 4y + 5z - 6 = 0 и x + y - 5z + 4 = 0 перпендикулярны?",
    options: [
      "a = 6",
      "a = -2",
      "a = -1",
      "a = 3",
      "a = 0.5"
    ],
    correctAnswer: "a = -2"
  },
  {
    question: "Указать направляющий вектор прямой x - 2/3 = y - 2/-3 = z/1",
    options: [
      "s = {3; -3; 1}",
      "s = {3; 3; 1}",
      "s = {3; -3; -1}",
      "s = {-3; -3; 1}",
      "s = {2; 2; 0}"
    ],
    correctAnswer: "s = {3; -3; 1}"
  },
  {
    question: "Указать направляющий вектор прямой x - 2/0 = y - 4/-2 = z/1",
    options: [
      "s = {0; -2; 1}",
      "s = {0; 2; 1}",
      "s = {2; -4; 0}",
      "s = {-3; -3; 1}",
      "s = {2; 2; 0}"
    ],
    correctAnswer: "s = {0; -2; 1}"
  },
  {
    question: "Указать направляющий вектор прямой x/1 = y - 4/0 = z + 5/0",
    options: [
      "s = {1; 0; 0}",
      "s = {0; 1; 1}",
      "s = {2; 1; 0}",
      "s = {0; 4; -5}",
      "s = {2; 2; 0}"
    ],
    correctAnswer: "s = {1; 0; 0}"
  },
  {
    question: "Найти a = i - 2j + k, b = 3i + j - k, найти a * b = ?",
    options: [
      "0",
      "3",
      "2",
      "5",
      "6"
    ],
    correctAnswer: "0"
  },
  {
    question: "Найти a = i - 2j + k, b = 3i + j - k, найти a × b = ?",
    options: [
      "i + 4j + 7k",
      "2i - 2j + k",
      "i + j - k",
      "i + 2j - k",
      "i + j"
    ],
    correctAnswer: "i + 4j + 7k"
  },
  {
    question: "lim x -> 0 (sin 3x / x) = ?",
    options: [
      "3",
      "0",
      "1",
      "-3",
      "-1"
    ],
    correctAnswer: "3"
  },
  {
    question: "lim x -> 5 (√(x - 1) - 2) / (x - 5) = ?",
    options: [
      "1 / 4",
      "1 / 2",
      "2",
      "-1 / 4",
      "0"
    ],
    correctAnswer: "1 / 4"
  },
  {
    question: "y = sin^2x, y^n = ?",
    options: [
      "2cos2x",
      "cos2x",
      "sin2x",
      "2sinx",
      "cosx"
    ],
    correctAnswer: "2cos2x"
  },
  {
    question: "y = sin^2x, d^2y = ?",
    options: [
      "2cos2xdx^2",
      "cos2xdx^2",
      "sin2xdx^2",
      "2sinxdx^2",
      "cosxdx^2"
    ],
    correctAnswer: "2cos2xdx^2"
  },
  {
    question: "y = cos^2x, d^2y = ?",
    options: [
      "-2cos2xdx^2",
      "cos2xdx^2",
      "sin2xdx^2",
      "2sinxdx^2",
      "cosxdx^2"
    ],
    correctAnswer: "-2cos2xdx^2"
  },
  {
    question: "y = 6^2x, y = ?",
    options: [
      "2 * ln6 * 6^2x",
      "2 * ln6",
      "ln6 * 6^2x",
      "2 * ln6 * x",
      "ln6 * x"
    ],
    correctAnswer: "2 * ln6 * 6^2x"
  },
  {
    question: "y = ln(sinx), y = ?",
    options: [
      "ctgx",
      "tgx",
      "cosx",
      "3tgx",
      "-cosx"
    ],
    correctAnswer: "ctgx"
  }
];

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let consecutiveCorrectCount = 0; // Track consecutive correct answers

// Shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  if (shuffledQuestions.length === 0) {
    shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions); // Shuffle questions once
  }

  const question = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question-text").innerText = question.question;

  const optionsContainer = document.getElementById("answer-options");
  optionsContainer.innerHTML = ""; // Clear previous options

  // Очистить матрицу
  const matrixContainer = document.getElementById("matrix-container");
  matrixContainer.innerHTML = ''; // Clear previous matrix

  // Очистить график
  const chartContainer = document.getElementById("question-chart").getContext("2d");
  chartContainer.clearRect(0, 0, chartContainer.canvas.width, chartContainer.canvas.height);

  let options = [...question.options];
  shuffleArray(options); // Shuffle options

  options.forEach(option => {
    const optionBtn = document.createElement("button");
    optionBtn.classList.add("option-button");
    optionBtn.innerText = option;
    optionBtn.onclick = () => checkAnswer(option, question.correctAnswer);
    optionsContainer.appendChild(optionBtn);
  });

  // Render matrix if data is provided
  if (question.matrix) {
    renderMatrix(question.matrix);
  }

  // Render chart if data is provided
  if (question.chartData) {
    renderChart(question.chartData);
  }

  // Update consecutive correct count on the page
  document.getElementById("correct-count").innerText = `Правильных ответов: ${consecutiveCorrectCount}`;
}


// Check the selected answer
function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    alert("Правильно!");
    consecutiveCorrectCount++; // Increment the count for correct answer
  } else {
    alert(`Неправильно лох иди учи уроки. Правильный ответ: ${correctAnswer}`);
    consecutiveCorrectCount = 0; // Reset the count for wrong answer
  }

  currentQuestionIndex = (currentQuestionIndex + 1) % shuffledQuestions.length;
  loadQuestion();
}

// Render matrix as a table
function renderMatrix(matrix) {
  const matrixContainer = document.getElementById("matrix-container");
  matrixContainer.innerHTML = ''; // Clear previous matrix if any

  const table = document.createElement('table');
  matrix.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.innerText = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  matrixContainer.appendChild(table);
}

// Render chart (if applicable)
function renderChart(data) {
  const ctx = document.getElementById("question-chart").getContext("2d");
  new Chart(ctx, {
    type: "line", // Example chart type
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Dataset',
        data: data.values,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

document.getElementById("next-button").addEventListener("click", loadQuestion);

// Initialize quiz
loadQuestion();


  

  

  
