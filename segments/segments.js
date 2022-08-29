import  {makeDecartPoint, getX, getY}  from 'points.js';


function makeSegment (point1, point2) {
    const beginPoint = makeDecartPoint(getX(point1), getY(point1));
    const endPoint = makeDecartPoint(getX(point2), getY(point2));
    const segment = ({beginPoint, endPoint});
    return segment;
  };
  
  
  function getMidpointOfSegment () {
  
  };
  
  
  function getBeginPoint () {
  
  };
  
  
  function getEndPoint () {
  
  };
  
  export { makeSegment, getMidpointOfSegment, getBeginPoint, getEndPoint };