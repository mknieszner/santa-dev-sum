import DefaultNucleus from "./DefaultNucleus.js";
import * as THREE from "three";
import DomainText from "../Texts/DomainText.js";
import PlanetShield from "./PlanetShield.js";
import Guard from "../Guard.js";

export default class YellowNucleus extends DefaultNucleus {
    configName = 'yellow'

    constructor(name) {
        super(name);
        this.setGeometry();
        this.setTextures(['textureYellowNucleus']);
        this.setMaterial();
        this.setMesh();

        this.group = new THREE.Group();

        this.customerText = new DomainText('CUSTOMER', 'Orange')
        this.customerText.mesh.position.z = 1.4
        this.customerText.mesh.position.y = -0.4
        this.group.add(this.customerText.mesh)

        this.scoringText = new DomainText('SCORING', 'Orange')
        this.scoringText.mesh.position.z = 1.4
        this.group.add(this.scoringText.mesh)

        this.documentsText = new DomainText('DOCUMENTS', 'Orange')
        this.documentsText.mesh.position.z = 1.4
        this.documentsText.mesh.position.y = 0.4
        this.group.add(this.documentsText.mesh)

        this.group.add(this.nucleus)

        this.shield = new PlanetShield('white')
        this.group.add(this.shield.mesh)

        this.guard = new Guard()
        this.group.add(this.guard.mesh)

        this.scene.add(this.group);

        this.watchClicked();
        this.watchConfig();
    }

    watchClicked() {
        this.scaleOnClicked();
    }

    update() {
        super.update();
        this.shield?.update();
        this.guard?.update();
        this.customerText?.update();
        this.scoringText?.update();
        this.documentsText?.update();
        super.updateTextPosition([this.customerText.mesh, this.scoringText.mesh, this.documentsText.mesh]);
    }
}

