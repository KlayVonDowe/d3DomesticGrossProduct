const w = 500;
const h = 500;
const padding = 60;

const svg = d3.select('body').append('svg').attr('width',w).attr('height',h)

const scale = d3.scaleLinear()
const output = scale(50)

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
.then(response => response.json())
.then(data => {
    var two = data.data.map(function(item){
        return (item[1])
    })
   svg.selectAll('rect').data(two).enter().append('rect')
   .attr('x',(d, i) => { return i * 6})
   .attr('y',(d, i ) => {return h - d * 3})
   .attr('width',5)
   .attr('height',(d, i )=>{return d * 3})
})



