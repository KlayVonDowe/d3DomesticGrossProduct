const w = 800;
const h = 500;
const padding = 60;

const svg = d3.select('.visHolder').append('svg').attr('width',w + padding).attr('height',h + padding).attr('id','center').style('margin','auto')

//data
fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
.then(response => response.json())
.then(data => {
    var info = data.data.map(function(item){
        return (item)   
    })

const xScale = d3.scaleBand().range([0, w]).domain( info.map((d)=>d[0]))
const yScale = d3.scaleLinear().range([h , 0]).domain([0, d3.max(info,(d) => d[1])])

const year = data.data.map(function(item){
    return new Date(item[0])
})

const linear = data.data.map(function(item){
    return (Math.round(item[1]) )
})

//bargraph
svg.selectAll('rect').data(info).enter().append('rect')
.attr('x',(d) => xScale(d[0]))
.attr('y',(d) => yScale(d[1]))
.attr('width',1)
.attr('height',(d) =>h - yScale(d[1]))
.attr('fill','purple')
.attr('class','bar');

//axis
const xaxis = d3.scaleTime().domain([d3.min(year),d3.max(year)]).range([0, w]);
const yaxis = d3.scaleLinear().domain([0,d3.max(linear)]).range([h, 0 ])
const axis = d3.axisBottom(xaxis);
const axisTwo = d3.axisLeft(yaxis);
svg.append('g').call(axisTwo).attr('transform','translate(60, 0)')
svg.append('g').call(axis).attr('transform','translate(0,' + (h)+')')
})

//hover






