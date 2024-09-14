import * as THREE from 'three'
import { OrbitControls } from 'jsm/controls/OrbitControls.js'

const w = innerWidth;
const h = innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// Set the background color of the renderer, instead of the body
renderer.setClearColor('#536c6c');

const fov = 105;
const aspect = w / h;
const near =0.1;
const far = 20;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 15;

const controls = new OrbitControls(camera, renderer.domElement);

const scene = new THREE.Scene();

const radius = 7;
const widthSegment = 12;
const heightSegment = 8;
const circle = new THREE.SphereGeometry(radius, widthSegment, heightSegment);
const material = new THREE.PointsMaterial({
    color: 'Cyan',
    size: 0.2
});

const mesh = new THREE.Points(circle, material);
scene.add(mesh);

function animate(t) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.0002;
    renderer.render(scene, camera);
    controls.update();
}

animate();
