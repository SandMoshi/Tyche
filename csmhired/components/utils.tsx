// type imports
import { StaticImageData } from "next/image";

const getRandomImage = (arr: Array<StaticImageData>): StaticImageData => {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};

export { getRandomImage };
