  
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





updateCanvas() {
  const canvas = d3.select(this.refs.canvas)
  const context = this.refs.canvas.getContext('2d');
  const img = new Image();

  context.fillStyle = "#000";

  img.onload = () => {
      context.drawImage(img, 0, 0, width, height);

      StackBlur.canvasRGB(canvas, 0, 0, width, height)
      const density = getDensityFunction({context});
    
    
      const points = generatePoints({density, numPoints : 5000});

      this.worker.postMessage({ density, points, width, height, threshold });
      this.worker.onmessage = (event) => this.draw(event.data);
  }
  img.src = this.props.src;

  this.draw = (props) => {
      const points = props
      context.clearRect(width, 0, width, height);
  
      points.forEach(function(point) {
          context.beginPath();
  
          if (point.r) {
              context.arc(width + point[0], point[1], point.r, 0, 2 * Math.PI);
              context.fill();
          }
      });
  }
  console.log(canvas);
}



