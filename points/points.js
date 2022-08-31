
const makePoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };
  
 // BEGIN (write your solution here)
const getX = (point) => point.radius * Math.cos(point.angle); //radius * cos(angle)
console.log(getX)
const getY = (point) => point.radius * Math.sin(point.angle); //radius * sin(angle)
console.log(getY)
// END

  
  export { makePoint, getX, getY };