import * as d3 from 'd3';

export default function Worker() {
    const voronoi = d3.voronoi();

    const minRadius = 0.5,
        maxRadius = 3.5;

    const radius = d3
        .scaleLinear()
        .range([maxRadius, minRadius])
        .clamp(true);

    let iterations = 0;

    const quadtree = d3.quadtree();

    function postMessage(props) {
        const { density, points, width, height, threshold } = props
        return props;
    }

    onmessage = function(event) {
        const { points, width, height, density, threshold } = event.data;

        voronoi.extent([[0, 0], [width, height]]);
        radius.domain([0, threshold]);
        compute();

        function compute() {
            if (iterations < 12) {
                voronoi(points)
                    .polygons()
                    .map(d3.polygonCentroid)
                    .forEach(function(centroid, i) {
                        points[i] = [
                            ...centroid,
                            density[width * Math.floor(centroid[1]) + Math.floor(centroid[0])]
                        ];
                        points[i].r = points[i][2] > threshold ? 0 : radius(points[i][2]);
                    });
            } else if (!shrink(points)) {
                return;
            }
            iterations++;
            postMessage(points);
            setTimeout(compute, 0);
        }
    };

    function shrink(points) {
        if (!quadtree.size()) {
            quadtree.addAll(points);
        }

        points.forEach(function(point) {
            point.shrink = false;
            quadtree.visit(function(node, x0, y0, x1, y1) {
                if (
                    point.shrink ||
                    (!node.data &&
                    (node.x0 > point[0] + point.r ||
                    node.x1 < point[0] - point.r ||
                    (node.y0 > point[1] + point.r || node.y1 < point[1] - point.r)))
                ) {
                    return true;
                }
                if (node.data && node.data !== point) {
                    const diff = collides(node.data, point);
                    if (diff > 0) {
                        [point, node.data].forEach(function(p) {
                            p.shrink = true;
                        });
                    }
                }
            });
        });

        let collision = false;

        points.forEach(function(point) {
            if (point.shrink && point.r > minRadius) {
            point.r = Math.max(minRadius, point.r * 0.9);
            collision = true;
            }
        });

        return collision;
    }

    function collides(a, b) {
        const dx = a[0] - b[0],
            dy = a[1] - b[1],
            dr = a.r + b.r;

        return dr - Math.sqrt(dx * dx + dy * dy);
    }
}