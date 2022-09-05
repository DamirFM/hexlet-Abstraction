import { makeDecartPoint, getX, getY, getQuadrant } from './points.js';

// BEGIN (write your solution here)
export const makeRectangle = (point, width, height) => {
    const p = makeDecartPoint(getX(point), getY(point));
    const rectangle = makeRectangle(p, width, height);
    console.log(rectangle)
    return rectangle; 
  };
  //const rectangle = makeRectangle(makeDecartPoint, width, height)
  
  //selections
  const getStartPoint = (rectangle) => makeDecartPoint(getX(point), getY(point));
  
  const getWidth = (rectangle) => {
  
  }
  
  const getHeight = (rectangle) => {
  }
  
  export const containsOrigin = (rectangle) => {
  
  } 
// END