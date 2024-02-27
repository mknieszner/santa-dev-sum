import DefaultNucleus from "./DefaultNucleus.js";
import * as THREE from "three";
import DomainText from "../Texts/DomainText.js";
import Scenario from "../../Scenario/Scenario.js";
import PlanetShield from "./PlanetShield.js";
import Guard from "../Guard.js";

export default class PurpleNucleus extends DefaultNucleus {
    configName = 'purple';

    constructor(name) {
        super(name);
        this.setGeometry();
        this.setTextures(['texturePurpleNucleus']);
        this.setMaterial();
        this.setMesh();
        this.group = new THREE.Group();

        this.collateralText = new DomainText('COLLATERAL', 'Orange')
        this.collateralText.mesh.position.z = 1.4
        this.collateralText.mesh.position.y = -0.4
        this.group.add(this.collateralText.mesh)

        this.reportsText = new DomainText('REPORTS', 'Orange')
        this.reportsText.mesh.position.z = 1.4
        this.group.add(this.reportsText.mesh)

        this.limitText = new DomainText('LIMIT', 'Orange')
        this.limitText.mesh.position.z = 1.4
        this.limitText.mesh.position.y = 0.4
        this.group.add(this.limitText.mesh)

        this.group.add(this.nucleus)

        this.shield = new PlanetShield('white')
        this.group.add(this.shield.mesh)

        this.guard = new Guard()
        this.group.add(this.guard.mesh)

        this.scene.add(this.group);

        this.watchClicked();
        this.watchConfig('purple');
    }

    watchClicked() {
        this.scaleOnClicked();
    }

    update() {
        super.update();
        this.shield?.update();
        this.guard?.update();
        this.collateralText?.update();
        this.reportsText?.update();
        this.limitText?.update();
        super.updateTextPosition([this.collateralText.mesh, this.reportsText.mesh, this.limitText.mesh]);
    }
}
