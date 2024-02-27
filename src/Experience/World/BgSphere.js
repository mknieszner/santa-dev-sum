import Experience from "../Experiance.js";
import * as THREE from "three";

export default class BgSphere {
    constructor() {
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.setTextures();
        this.setMesh();
    }


    setTextures() {
        this.textures = {}
        this.textures.color = this.resources.items.background;
        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.anisotropy = 16
    }

    setMesh() {
        this.geometry = new THREE.SphereGeometry(12, 40, 40);
        this.material = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            map: this.textures.color
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    update() {
        this.mesh.rotation.x += 0.001;
        this.mesh.rotation.y += 0.001;
        this.mesh.rotation.z += 0.001;
    }
}