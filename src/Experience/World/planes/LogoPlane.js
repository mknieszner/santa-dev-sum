import Experience from "../../Experiance.js";
import * as THREE from 'three';

export default class LogoPlane {
    constructor(y) {
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.setGeometry();
        this.setTextures();
        this.setMaterial();
        this.setMesh(y);
    }

    setGeometry() {
        this.geometry = new THREE.PlaneGeometry(13,1.1,10)
    }

    setTextures() {

    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            color: 'black',
            side: THREE.DoubleSide
        })
    }

    setMesh(y) {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.y = y
        this.scene.add(this.mesh)
    }
}