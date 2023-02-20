/*
    Returns the age of the posting.
*/

const getPostingAge = (args: { datePosted: string }) => {
  // Date must be passed in as string that confroms to this pattenrn: "YYYY-MM-DDT14:48:00+09:00" or subset of
  const datedPosted = Date.parse(args.datePosted);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const age = Math.abs(Date.now() - datedPosted) / millisecondsPerDay;
  const roundedAge = Math.floor(age);

  if (roundedAge <= 1) {
    return "1 day";
  } else if (roundedAge <= 7) {
    return `${roundedAge} days`;
  } else if (roundedAge <= 12) {
    return "1 week";
  } else if (roundedAge <= 20) {
    return "2 weeks";
  } else if (roundedAge <= 25) {
    return "3 weeks";
  } else if (roundedAge <= 35) {
    return "1 month";
  } else return "more than 1 month";
};

export { getPostingAge };
