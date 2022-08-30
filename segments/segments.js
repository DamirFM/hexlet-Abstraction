import  {makeDecartPoint, getX, getY}  from 'points.js';

function makeSegment(point1, point2) {
  const beginPoint = makeDecartPoint(getX(point1), getY(point1));
  const endPoint = makeDecartPoint(getX(point2), getY(point2));
  const segment = ({ beginPoint, endPoint });
  return segment;
}
function getMidpointOfSegment(segment) {
  const midPoint = ({ x: (segment.beginPoint.x + segment.endPoint.x) / 2,
    y: (segment.beginPoint.y + segment.endPoint.y) / 2 });
  return midPoint;
}
const getBeginPoint = (segment) => segment.beginPoint;
const getEndPoint = (segment) => segment.endPoint;
export { makeSegment, getMidpointOfSegment, getBeginPoint, getEndPoint };