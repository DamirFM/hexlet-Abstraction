//Реализуйте и экспортируйте по умолчанию функцию,
// которая находит расстояние между двумя точками на плоскости:

//Примеры
//point1 = [0, 0];
//point2 = [3, 4];
//calculateDistance(point1, point2); // 5
export default function calculateDistance(point1, point2) {
    const p1 = (point1[0] - point2[0]) ** 2;
    const p2 = (point1[1] - point2[1]) ** 2;
    const result = Math.sqrt(p1 + p2);
    return result;
  }