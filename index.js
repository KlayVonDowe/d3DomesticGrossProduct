const w = 600;
const h = 500;
const padding = 10;

const svg = d3.select('body').append('svg').attr('width',w).attr('height',h)




fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
.then(response => response.json())
.then(data => {
    var info = data.data.map(function(item){
        return (item)   
    })

const xScale = d3.scaleBand().range([0, w]).domain(info.map((d)=>d[0]))
const yScale = d3.scaleLinear().range([h, 0]).domain([0, d3.max(info,(d) => d[1])])

svg.selectAll('rect').data(info).enter().append('rect')
.attr('x',(d) => xScale(d[0]))
.attr('y',(d) => yScale(d[1]))
.attr('width',5)
.attr('height',(d) => h - yScale(d[1]))
})

//    svg.selectAll('rect').data(product).enter().append('rect')
//    .attr('x',(d, i) => { return i * 6})
//    .attr('y',(d, i ) => {return h - d * 3})
//    .attr('width',5)
//    .attr('height',(d, i )=>{return d * 3})



