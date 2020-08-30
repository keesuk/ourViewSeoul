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

onmessage = event => {
  const {data: {data, width, height, n}} = event;
  const points = new Float64Array(n * 2);
  const c = new Float64Array(n * 2);
  const s = new Float64Array(n);

  // Initialize the points using rejection sampling.
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < 30; ++j) {
      const x = points[i * 2] = Math.floor(Math.random() * width);
      const y = points[i * 2 + 1] = Math.floor(Math.random() * height);
      if (Math.random() < data[y * width + x]) break;
    }
  }

  const delaunay = new d3.Delaunay(points);
  const voronoi = delaunay.voronoi([0, 0, width, height]);

  for (let k = 0; k < 80; ++k) {

    // Compute the weighted centroid for each Voronoi cell.
    c.fill(0);
    s.fill(0);
    for (let y = 0, i = 0; y < height; ++y) {
      for (let x = 0; x < width; ++x) {
        const w = data[y * width + x];
        i = delaunay.find(x + 0.5, y + 0.5, i);
        s[i] += w;
        c[i * 2] += w * (x + 0.5);
        c[i * 2 + 1] += w * (y + 0.5);
      }
    }

    // Relax the diagram by moving points to the weighted centroid.
    // Wiggle the points a little bit so they don’t get stuck.
    const w = Math.pow(k + 1, -0.8) * 10;
    for (let i = 0; i < n; ++i) {
      const x0 = points[i * 2], y0 = points[i * 2 + 1];
      const x1 = s[i] ? c[i * 2] / s[i] : x0, y1 = s[i] ? c[i * 2 + 1] / s[i] : y0;
      points[i * 2] = x0 + (x1 - x0) * 1.8 + (Math.random() - 0.5) * w;
      points[i * 2 + 1] = y0 + (y1 - y0) * 1.8 + (Math.random() - 0.5) * w;
    }

    postMessage(points);
    voronoi.update();
  }

  close();
};