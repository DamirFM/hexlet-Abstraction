const makeDecartPoint = (x, y) => {
    const point = { x, y };
   // console.log(point)
    return point;
  
  };
  
  const getX = (point) => point.x;
  
  const getY = (point) => point.y;
  
  export { makeDecartPoint, getX, getY };