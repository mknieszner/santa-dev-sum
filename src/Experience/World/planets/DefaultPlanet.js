import * as THREE from "three";
import Experience from "../../Experiance.js";
import Scenario from "../../Scenario/Scenario.js";
import PlanetBase from "./Models/Planet.js";

export default class DefaultPlanet extends PlanetBase {
    constructor(textureName, radius, orbitRadius, speed, text) {
        super();
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.text = text;
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.time = this.experiance.time;
        this.speed = speed;
        this.setGeometry();
        this.setTextures(textureName);
        this.setMaterial();
        this.setMesh();

        this.watchConfig();
    }

    setGeometry() {
        this.geometry = new THREE.SphereGeometry(this.radius, 30, 30)
    }

    setTextures(textureName) {
        this.textures = {}
        this.textures.color = this.resources.items[textureName];
        this.textures.color.colorSpace = THREE.SRGBColorSpace
    }

    setMaterial() {
        this.lambertMaterial = new THREE.MeshStandardMaterial({
            map: this.textures.color
        });
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.lambertMaterial);


        this.group = new THREE.Group();
        this.group.add(this.mesh);
        this.group.add(this.text.mesh);

        this.scene.add(this.group)
    }

    watchConfig() {
        this.setConfig()
        this.experiance.config.on(Scenario.CHAPTER_CHANGE, () => this.setConfig())
    }

    setConfig() {
        this.targetScale = this.experiance.config.stage?.defaultPlanet.scale;
    }

    update() {
        this.text?.update();

        if (!this.orbitRadius) {
            return
        }
        this.mesh.rotation.y += 0.006;

        this.group.position.x = (-Math.cos(this.time.elapsed * 0.00001 * this.speed) * this.orbitRadius) + 1;
        this.group.position.z = -Math.sin(this.time.elapsed * 0.00001 * this.speed) * this.orbitRadius;
        this.updateScale();

    }
}