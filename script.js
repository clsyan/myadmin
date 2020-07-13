var options = {
    time: '.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    
    autoMatchOsTheme: true // default: true
  }
const darkmode =  new Darkmode(options);

function dark(){
    darkmode.toggle();
}

    
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSales);
google.charts.setOnLoadCallback(drawPerformance);
function drawPerformance() {
var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Eletronics',     10],
    ['Furniture',      6],
    ['Toys',  4],
]);

var options = {
    backgroundColor: { fill:'transparent' },
    legend: {

        position: 'top',
        alignment: 'center',

        maxLines: 1,
        textStyle: {fontSize: 15},
    },
    chartArea:{left:50,right:50, top:20,width:"100%",height:"100%"},
    pieHole: 0.3,
};

var chart = new google.visualization.PieChart(document.getElementById('categories_div'));
chart.draw(data, options);
}

function drawSales() {
var data = google.visualization.arrayToDataTable([
    ['', 'Laptops', 'Headsets','Monitors', 'Phones'],
    ['',  700,      400, 240, 50],
    ['',  1170,      900, 543, 90],
    ['',  660,       500, 123, 150],
    ['',  1400,      1000, 542, 50],
    ['',  300,      250, 242, 0]
]);

var options = {
    backgroundColor: { fill:'transparent' },
    
    lineWidth: 0.1,
    legend: {
        position: 'top',

        maxLines: 1,
        textStyle: {
            fontSize: 16,
        },
        alignment: 'center',
    },
    chartArea:{left:0,top:20,width:"100%",height:"100%"},
    hAxis: { textPosition: 'none' },
    vAxis: { textPosition: 'none' },

};

var chart2 = new google.visualization.AreaChart(document.getElementById('sales_div'));
chart2.draw(data, options);
}



$(document).ready(function(){

    $('#dontShowMessage').click(function(){
        localStorage.setItem('popState','shown')
    })
    $('#accountSettings').click(function(){
        $('#settingsModal').modal('show');
    })
    $('#cog-icon').click(function(){
        $('#settingsGeneral').modal('show');
    })

    if(localStorage.getItem('popState') != 'shown'){
        $('#themeModal').modal('show');
    }



    $("#toggler-icon").click(function(){
        
        $('#sidebar-items').toggleClass('toggled')
        
    })
})
    