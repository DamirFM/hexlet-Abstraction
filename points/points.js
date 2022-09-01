
const makePoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };
  
// BEGIN (write your solution here)
const getX = (point) => {
    const x = (point.radius) * Math.cos(point.angle);
    return Math.round(x);
  }; //radius * cos(angle)
  
  const getY = (point) => {
    const y = point.radius * Math.sin(point.angle);
    return Math.round(y);
  }; //radius * sin(angle)
  // END
  export { makePoint, getX, getY };