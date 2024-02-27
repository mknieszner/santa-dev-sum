import Experience from "../Experiance.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";
import Scenario from "../Scenario/Scenario.js";

export default class Guard {
    targetScale = 0

    constructor(id) {
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.setMesh(id);
        this.watchConfig();
    }


    setMesh() {
        this.mesh = SkeletonUtils.clone(this.resources.items['guard1']);
        this.mesh.scale.set(this.targetScale, this.targetScale, this.targetScale)
        this.mesh.position.y = 1.3
        this.mesh.rotation.y = Math.PI / 4
    }


    update() {
        this.updateScale();
    }


    updateScale() {
        const deltaX = this.targetScale - this.mesh.scale.x;
        const deltaY = this.targetScale - this.mesh.scale.y;
        const deltaZ = this.targetScale - this.mesh.scale.z;

        if (this.targetScale > 0 && (Math.abs(deltaX) > 0.001 || Math.abs(deltaY) > 0.001 || Math.abs(deltaZ) > 0.001)) {
            this.mesh.scale.set(
                this.mesh.scale.x + deltaX / 20,
                this.mesh.scale.x + deltaY / 20,
                this.mesh.scale.x + deltaZ / 20
            )
        }

        this.mesh.visible = this.targetScale !== 0;

    }

    watchConfig() {
        this.setConfig()
        this.experiance.config.on(Scenario.CHAPTER_CHANGE, () => this.setConfig())
    }

    setConfig() {
        this.targetScale = this.experiance.config.stage.guard.scale * 0.02;
    }


}