const w = 800;
const h = 500;
const p = 60;

const svg = d3.select('body').append('svg').attr('height',h + p).attr('width',w + p).attr('class','graph')

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
.then(response => response.json())
.then(data => {
    var GDP = data.data.map(function(items){
        return (items)
    })

    var year = data.data.map(function(item){
        return new Date(item[0])
    })

    var product = data.data.map(function(item){
        return (item[1])
    })

    const xScale = d3.scaleBand().domain(GDP.map((d) => d[0])).range([0+p,w])
    const yScale = d3.scaleLinear().domain([0,d3.max(GDP,(d) => d[1])]).range([h, 0])
    
    svg.selectAll('rect').data(GDP).enter().append('rect').attr('x',(d) => xScale(d[0]))
    .attr('y',(d) => yScale(d[1])).attr('height',(d) => h - yScale(d[1])).attr('width', 2.5)
    .attr('fill','teal').attr('border','3px solid black')

    const xAxis = d3.scaleTime().domain([d3.min(year) , d3.max(year)]).range([0, w])
    const yAxis = d3.scaleLinear().domain([0,d3.max(product)]).range([h,0])
    const bottomAxis =d3.axisBottom(xAxis);
    const leftAxis = d3.axisLeft(yAxis);
    svg.append('g').call(bottomAxis).attr('transform','translate(60,' + h  + ')')
    svg.append('g').call(leftAxis).attr('transform','translate(60,0)')

})