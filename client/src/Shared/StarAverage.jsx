export default function starAverage(obj) {
  let result = 0;
  if (obj) {
    let ratingsTotal = 0;
    let ratingsCount = 0;
    const ratings = Object.keys(obj);
    ratings.forEach((rating) => {
      ratingsTotal += (Number(obj[rating]) * Number(rating));
      ratingsCount += Number(obj[rating]);
    });
    result = Math.floor(4 * (ratingsTotal / ratingsCount)) / 4;
  }
  return result;
}
