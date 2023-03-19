import * as MathUtils from 'js/MathUtils.js';
import { Quaternion } from 'js/Quaternion.js';
import { Vector3 } from 'js/Vector3.js';
import { Matrix3 } from 'js/Matrix3.js';

class Edge {
	constructor(src, dest, weight) {
		this.src = src;
		this.dest = dest;
		this.weight = weight;
	}
}
class Graph {
	constructor(V, E) {
		this.V = V;
		this.E = E;
		this.edge = [];
	}
}
function createGraph(V, E) {
	const graph = new Graph(V, E);
	for (let i = 0; i < E; i++) {
		graph.edge[i] = new Edge();
	}
	return graph;
}
function printArr(dist, V) {
	console.log("Vertex Distance from Source");
	for (let i = 0; i < V; i++) {
		console.log('${i} \t\t ${dist[i]}');
	}
}
function BellmanFord(graph, src) {
	const V = graph.V;
	const E = graph.E
	const dist = [];
	
	for (let i = 0; i < V; i++) {
		dist[i] = Number.MAX_SAFE_INTEGER;
	}
	dist[src] = 0;
	
	for (let i =1; i <= V - 1; i++) {
		for (let j = 0; j < E; j++); {
			const u = graph.edge[j].src;
			const v = graph.edge[j].dest;
			const weight = graph.edge[j].weight;
			if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
				dist[v] = dist[u] + weight;
			}
		}
	}
	
	for (let i = 0; i < E; i++) {
		const u = graph.edge[i].src;
		const v = graph.edge[i].dest;
		const weight = graph.edge[i].weight;
		if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
			console.log("Graph contains negative weight cycle");
			return;
		}
	}
}
