var mom = moment();
var bad = moment("no date");
var momISO = moment("2019-02-08 09:30");
var rfc = moment("22 Mar 2017 21:22:23 GMT");

$(document).ready(function () {
  console.log(mom.format('YYYY MM DD'));
  console.log("Bad Date: " + bad);
  console.log(momISO.format());
  console.log(rfc.format());
  
  longDayShortMonthYearTime();
  shortMonthDayYearTime();
  weekShortYear();
  quarterLongYear();
  diffISOrfc();
  diffCurrentrfc();
});

// Using the values in the chart, print each of the above dates in the following formats:
// Long day, short month, day number, year and time

const longDayShortMonthYearTime = () => console.log(mom.format('[Day: ]dddd, [Month: ]MMM, [Day Number: ]D [Year: ]YYYY, [Time: ]HH:MM:ss'));

// Short month, day, year, and time

const shortMonthDayYearTime = () => console.log(mom.format('[Month: ]MMM, [Day: ]Do, [Year: ]YYYY, [Time: ]HH:MM:ss'))

// Week of year, short year

const weekShortYear = () => console.log(mom.format('[Week: ]WW, [Year: ]YY'))

// quarter of year, long year.

const quarterLongYear = () => console.log(mom.format('[Quarter: ]Q, [Year: ]YYYY'))

// Using the difference function, find the difference between the ISO and rfc dates in days, weeks, and
// months. 

const diffISOrfc = () => {
  const diff = momISO.diff(rfc);
  console.log(`Difference between ISO and rfc in days = ${moment.duration(diff).asDays()}`)
  console.log(`Difference between ISO and rfc in weeks = ${moment.duration(diff).asWeeks()}`)
  console.log(`Difference between ISO and rfc in months = ${moment.duration(diff).asMonths()}`)
}

// Find the difference between the current date and the rfc in weeks, months, and years.

const diffCurrentrfc = () => {
  const diff = mom.diff(rfc);
  console.log(`Difference between current time and rfc in weeks = ${moment.duration(diff).asWeeks()}`)
  console.log(`Difference between current time and rfc in months = ${moment.duration(diff).asMonths()}`)
  console.log(`Difference between current time and rfc in years = ${moment.duration(diff).asYears()}`)
}
