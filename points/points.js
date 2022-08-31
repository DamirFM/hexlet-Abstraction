
const makePoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };
  
 // BEGIN (write your solution here)
 const x = radius * Math.cos(angle);
 const y = radius * Math.sin(angle);
 
 console.log(x)
 
 
 
 const getX = (point) => point.angle; //radius * cos(angle)
 
 
 
 
 const getY = (point) => point.radius; //radius * sin(angle)
// END

  
  export { makePoint, getX, getY };