const w = 600;
const h = 500;
const p = 60;

const svg = d3.select('body').append('svg').attr('height',h +p).attr('width',w + p).attr('class','graph').style('padding',p)

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
    
console.log(xScale)

    svg.selectAll('rect').data(GDP).enter().append('rect')
    .attr('x',(d) => xScale(d[0]))
    .attr('y',(d) => yScale(d[1]))
    .attr('height',(d) => h - yScale(d[1])).attr('width', 2.5)
    .attr('fill','teal').attr('border','3px solid black').attr('class','bar')
    .attr('data-date', function (d) {
      return d[0];
    }).attr('data-gdp', function (d) {
      return d[1];
    })
    .on("mouseover", function(d){
      tooltip
        .style("left", d3.event.pageX - 100 + "px")
        .style("top", d3.event.pageY - 80 + "px")
        .style("display", "inline-block")
        .html("Date: "+d[0])
        .attr("data-date",d[0]);
   }).on("mouseout", function(d){ tooltip.style("display", "none");});
    
   svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("y", 0)
    .attr('x',-250)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("GDP");

    svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x',350)
    .attr('y', 530)
    .text('Years')

    svg.append('text')
    .attr('Title', 'middle')
    .attr('text-anchor', 'middle')
    .attr('x',350)
    .attr('y', 10)
    .text('United States GDP')
    

    const xAxis = d3.scaleTime().domain([d3.min(year) , d3.max(year)]).range([0, w-p])
    const yAxis = d3.scaleLinear().domain([0,d3.max(product)]).range([h,0])
    const bottomAxis =d3.axisBottom(xAxis);
    const leftAxis = d3.axisLeft(yAxis);
    svg.append('g').call(bottomAxis).attr('transform','translate(60,' + (500)  + ')').attr('id','x-axis')
    svg.append('g').call(leftAxis).attr('transform','translate(60,0)').attr('id','y-axis')

    var tooltip = d3.select("body")
              .append("div")
              .attr("class", "toolTip")
              .attr("id","tooltip");



})