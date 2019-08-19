
var ctx = $("#chartArea"); // using jquery
var chart = new Chart(ctx,
{
  type: 'line',
  data: {
  labels: ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
  datasets: [{
  label: 'Planning Poker Sizes',
  backgroundColor: 'cyan',
  borderColor: 'blue',
  data: [1, 2, 3, 5, 8, 13]
  }]
},
options: {}
});