import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 85, window.innerwidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry(1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
scene.add(cube);
const O = new 

camera.position.z =5;
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	renderer.render( scene, camera );
}
animate();
