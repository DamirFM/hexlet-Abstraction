//Реализуйте и экспортируйте по умолчанию функцию, 
//которая находит точку посередине между двумя указанными точками.
// BEGIN (write your solution here)
export default function getMidpoint(point1, point2) {
    const point3 = {"x": (point1.x + point2.x) / 2, "y": (point1.y + point2.y) / 2 };
      return point3;
    }
    // END
    
    
    //  x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
    
    // point1 = { x: 0, y: 0 };
    // point2 = { x: 4, y: 4 };
    // point3 = {"x": 2, "y": 2}
    
    //const point1 = { x: 0, y: 0 };
    //const point2 = { x: 4, y: 4 };
    //const point3 = getMidpoint(point1, point2);
    //console.log(point3); // => { x: 2, y: 2 };