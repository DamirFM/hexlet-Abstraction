
const makePoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };
  
// BEGIN (write your solution here)
const getAngle = (point) => point.angle;

const getRadius = (point) => point.radius;

const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));

const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));

  // END
  export { makePoint, getX, getY };