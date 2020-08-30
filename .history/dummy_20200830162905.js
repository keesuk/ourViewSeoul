  
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


// import * as d3 from 'd3';

// const voronoi = d3.voronoi();

// const minRadius = 0.5,
//   maxRadius = 3.5;

// const radius = d3
//   .scaleLinear()
//   .range([maxRadius, minRadius])
//   .clamp(true);

// let iterations = 0;

// const quadtree = d3.quadtree();

// onmessage = function(event) {
//   const { points, width, height, density, threshold } = event.data;

//   voronoi.extent([[0, 0], [width, height]]);
//   radius.domain([0, threshold]);
//   compute();

//   function compute() {
//     if (iterations < 12) {
//       voronoi(points)
//         .polygons()
//         .map(d3.polygonCentroid)
//         .forEach(function(centroid, i) {
//           points[i] = [
//             ...centroid,
//             density[width * Math.floor(centroid[1]) + Math.floor(centroid[0])]
//           ];
//           points[i].r = points[i][2] > threshold ? 0 : radius(points[i][2]);
//         });
//     } else if (!shrink(points)) {
//       return;
//     }
//     iterations++;
//     postMessage(points);
//     setTimeout(compute, 0);
//   }
// };

// function shrink(points) {
//   if (!quadtree.size()) {
//     quadtree.addAll(points);
//   }

//   points.forEach(function(point) {
//     point.shrink = false;
//     quadtree.visit(function(node, x0, y0, x1, y1) {
//       if (
//         point.shrink ||
//         (!node.data &&
//           (node.x0 > point[0] + point.r ||
//             node.x1 < point[0] - point.r ||
//             (node.y0 > point[1] + point.r || node.y1 < point[1] - point.r)))
//       ) {
//         return true;
//       }
//       if (node.data && node.data !== point) {
//         const diff = collides(node.data, point);
//         if (diff > 0) {
//           [point, node.data].forEach(function(p) {
//             p.shrink = true;
//           });
//         }
//       }
//     });
//   });

//   let collision = false;

//   points.forEach(function(point) {
//     if (point.shrink && point.r > minRadius) {
//       point.r = Math.max(minRadius, point.r * 0.9);
//       collision = true;
//     }
//   });

//   return collision;
// }

// function collides(a, b) {
//   const dx = a[0] - b[0],
//     dy = a[1] - b[1],
//     dr = a.r + b.r;

//   return dr - Math.sqrt(dx * dx + dy * dy);
// }

const width = 800;
const height = 500;
const threshold = 0.9;

function getDensityFunction(props) {
    const {context} = props
    const data = context.getImageData(0, 0, width, height).data;

    return d3.range(0, data.length, 4).map(i => data[i] / 255);
}

function generatePoints(props) {
    const {density, numPoints} = props
    return d3.range(numPoints).map(function() {
        let x, y, d;
    
        while (true) {
            x = Math.random() * width;
            y = Math.random() * height;
    
            d = density[width * Math.floor(y) + Math.floor(x)];
    
            if (Math.random() > d) {
                return [x, y, d];
            }
        }
    });
}

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



