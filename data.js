const w = 800;
const h = 500;

const svg = d3.select('body').append('svg').attr('width',w).attr('height',h)

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
.then(response => response.json())
.then(data => {
    var graphData = data.data.map(function(item){
        return item
    })
    var xScale = d3.scaleBand().range([0,w]).domain(graphData.map((d) => d[0]))
    var yScale = d3.scaleLinear().range([h, 0]).domain([0,d3.max(graphData, (d) => d[1])])

    


    //svg.selectAll('rect').data(graphData).enter().append('rect').attr('x',(d)=>xScale(d[0])).attr('y',(d) =>yScale(d[1])).attr('height',h).attr('width',(d)=> h-yScale(d[1]))
})