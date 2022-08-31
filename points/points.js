
const makePoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };
  
  // BEGIN (write your solution here)
  const getX = (point) => point.x; 
  
  const getY = (point) => point.y;
  
  
  //const x = (getX(point) + getX(endPoint)) / 2; //radius * cos(angle)
  //const y = (getY(beginPoint) + getY(endPoint)) / 2;
  // END
  
  export { makePoint, getX, getY };