import Experience from "../Experiance.js";
import * as THREE from 'three';

export default class Stars {
    stars = null

    constructor(texture, count, size, update) {
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.count = count;
        this.size = size;
        this.shouldUpdate = update;

        this.setGeometry(count);
        this.setTextures(texture);
        this.setMaterial();
        this.setMesh();
    }

    setGeometry(count) {
        this.geometry = new THREE.BufferGeometry();
        this.positions = this.generatePositions(count);
        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))
    }

    setTextures(texture) {
        this.textures = {}
        this.textures.color = this.resources.items[texture];
        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.anisotropy = 16
    }

    setMaterial() {
        this.material = new THREE.PointsMaterial({
            size: this.size,
            color: "#ffffff",
            transparent: true,
            opacity: 0.8,
            map: this.textures.color,
            blending: THREE.AdditiveBlending
        });

        this.material.depthWrite = false;
    }

    setMesh() {
        this.stars = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.stars);
    }

    update() {
        if (!this.shouldUpdate) {
            return
        }
        const minRadius = 3;
        const positions = this.geometry.attributes.position.array;
        const velocity = []
        for (let i = 0; i < positions?.length / 3; i++) {
            velocity[i] = THREE.MathUtils.randInt(50, 200);
            velocity[i + 1] = velocity[i];
            velocity[i + 2] = velocity[i];
        }
        const newPositions = this.generatePositions(this.count)

        for (let i = 0; i < positions?.length; i++) {
            positions[i] += (0 - positions[i]) / velocity[i]

            if (positions[i] <= minRadius
                && positions[i] >= -1 * minRadius
                && positions[i + 2] <= minRadius
                && positions[i + 2] >= -1 * minRadius) {
                positions[i] = newPositions[i]
                positions[i + 1] = newPositions[i + 1]
                positions[i + 2] = newPositions[i + 2]
            }
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }

    generatePositions(count) {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) {
            let particleStar = this.randomPointSphere(10);

            positions[i] = particleStar.x;
            positions[i + 1] = particleStar.y;
            positions[i + 2] = particleStar.z;
        }
        return positions;
    }

    randomPointSphere(radius) {
        let theta = 2 * Math.PI * Math.random();
        let phi = Math.acos(2 * Math.random() - 1);
        let dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
        let dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
        let dz = 0 + radius * Math.cos(phi);
        return new THREE.Vector3(dx, dy, dz);
    }
}