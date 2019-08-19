$(document).ready(function() {
  $('#base_table').DataTable({
    data: objs,
    "columns": [
      { title: "Name", data: 'name', className: "la" },
      { title: "Position", data: 'position', className: "la" },
      { title: "Salary", data: 'salary', className: "la" },
      { title: "Start Date", data: 'start_date', className: "la" },
      { title: "Office", data: 'office', className: "la" },
    ]
  });
} );

var objs =
 [
 {
 "name": "Jerry Nixon",
 "position": "System Architect",
 "salary": "$95,000",
 "start_date": "2010/03/19",
 "office": "Scottsdale"
 },
 {
 "name": "George Parker",
 "position": "Director",
 "salary": "$123,000",
 "start_date": "2002/01/19",
 "office": "Phoenix"
 },
 {
 "name": "Cindy Stackhouse",
 "position": "Development Manager",
 "salary": "$93,000",
 "start_date": "2016/04/25",
 "office": "Dallas"
 }
];
