export default function starAverage(obj) {
  const result = { average: 0, total: 0 };
  if (Object.keys(obj).length > 0) {
    let ratingsTotal = 0;
    let ratingsCount = 0;
    const ratings = Object.keys(obj);
    ratings.forEach((rating) => {
      ratingsTotal += (Number(obj[rating]) * Number(rating));
      ratingsCount += Number(obj[rating]);
    });
    result.average = Math.round(4 * (ratingsTotal / ratingsCount)) / 4;
    result.total = ratingsCount;
  }
  return result;
}
