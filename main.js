import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ArcballControls } from "three/addons/controls/ArcballControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bg") });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let model, model2;

const light = new THREE.PointLight(0xffffff, 10, 100);
light.position.set(2, 3, 1);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = false;
controls.enableRotate = false;
controls.enablePan = false;

camera.position.set(0, 0, 5);
controls.update();

// const size = 10;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper(size, divisions);
// scene.add(gridHelper);

const loader = new GLTFLoader();

loader.load(
  "/venom/scene.gltf",
  function (gltf) {
    model = gltf.scene;
    scene.add(gltf.scene);
    model.position.y = 0.5;
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(model.rotation, {
      scrollTrigger: {
        trigger: ".upper",
        start: "top top",
        scrub: 1,
      },
      y: -3.25,
      z: -0.3,
    });

    gsap.to(model.position, {
      scrollTrigger: {
        trigger: ".text-7",
        start: "top center",
        scrub: 1,
      },
      z: 10,
    });

    gsap.to(model.rotation, {
      scrollTrigger: {
        trigger: ".text-7",
        start: "top center",
        scrub: 1,
      },
      x: -2,
    });
  },

  undefined,
  function (error) {
    console.error(error);
  }
);

scene.add(light);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
// scene.add(pointLightHelper);

// console.log(model);
// document.body.offsetTop = "1px";

gsap.to(light.position, {
  scrollTrigger: {
    trigger: ".upper",
    start: "top top",
    scrub: 1,
  },
  z: 3,
});

gsap.to(light.position, {
  scrollTrigger: {
    trigger: ".text-7",
    start: "top top",
    scrub: 1,
  },
  z: 10,
});

gsap.to(".text-1", {
  scrollTrigger: {
    trigger: ".text-1",
    start: "top 75%",
    end: "top top",
    scrub: 2,
  },
  scale: 2,
  opacity: 0,
});

gsap.to(".text-2", {
  scrollTrigger: {
    trigger: ".text-2",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  x: 200,
  scale: 2,
  opacity: 0,
});

gsap.to(".text-3", {
  scrollTrigger: {
    trigger: ".text-3",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  x: -400,
  scale: 2,
  opacity: 0,
});

gsap.to(".text-4", {
  scrollTrigger: {
    trigger: ".text-4",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  x: 400,
  scale: 2,
  opacity: 0,
});

gsap.to(".text-5", {
  scrollTrigger: {
    trigger: ".text-5",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  x: -400,
  scale: 2,
  opacity: 0,
});

gsap.to(".text-6", {
  scrollTrigger: {
    trigger: ".text-6",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  scale: 2,
  opacity: 0,
});

gsap.to(".text-8", {
  scrollTrigger: {
    trigger: ".text-8",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  x: 700,
  scale: 6,
  opacity: 0,
});

gsap.to(".text-7", {
  scrollTrigger: {
    trigger: ".text-7",
    start: "top bottom",
    end: "bottom top",
    scrub: 3,
    // pin: true,
  },
  x: 700,
  scale: 6,
  opacity: 0,
});

const texture = new THREE.TextureLoader().load("src/images/dark-smoky-bg.jpg");

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
