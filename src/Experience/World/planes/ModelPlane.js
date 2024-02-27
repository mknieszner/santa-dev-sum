import Experience from "../../Experiance.js";
import * as THREE from 'three';
import {RectangleRounded} from "../../Utils/RectangleRounded.js";

export default class ModelPlane {
    targetScale = 0;

    constructor() {
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.setGeometry();
        this.setTextures();
        this.setMaterial();
        this.setMesh();
    }

    setGeometry() {
        this.geometry = new RectangleRounded(33, 24, 2, 10);
    }

    setTextures() {
        this.textures = {}
        this.textures.color = this.resources.items.textureRustBackground;
        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.anisotropy = 16
    }

    setMaterial() {
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                color1: {
                    value: new THREE.Color("black")
                },
                color2: {
                    value: new THREE.Color("#0c1457")
                }
            },
            vertexShader: `
                varying vec2 vUv;

                void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                }
              `,
            fragmentShader: `
                uniform vec3 color1;
                uniform vec3 color2;

                varying vec2 vUv;

                void main() {

                  gl_FragColor = vec4(mix(color1, color2, vUv.y), 0.85);
                }
              `,
            transparent: true
        });
        this.material = new THREE.MeshStandardMaterial({
            color: 'black'
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

}
