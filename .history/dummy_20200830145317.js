  
drawSeoul() {

    const svgCanvas = d3.select(this.refs.canvas)
        .append("div")
        .classed("svg-container", true) 
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 1280 1280")
        .classed("svg-content-responsive", true)
    
    svgCanvas.selectAll("text")
        .data(dataArray)
        .enter()
            .append("text")
            .classed("text", true)
            .attr("x", d => { return d.xCor})
            .attr("y", d => { return height - d.yCor})
            .text(d => { return d.station})
            .attr("font-size", "6px")
} 

const addLineBreaks = string =>
  string.split('n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <div/>
    </React.Fragment>
));









