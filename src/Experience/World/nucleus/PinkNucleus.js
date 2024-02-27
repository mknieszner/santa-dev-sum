import DefaultNucleus from "./DefaultNucleus.js";
import * as THREE from "three";
import DomainText from "../Texts/DomainText.js";
import PlanetShield from "./PlanetShield.js";
import Guard from "../Guard.js";

export default class PinkNucleus extends DefaultNucleus {
    configName = 'pink';

    constructor() {
        super();
        this.setGeometry();
        this.setTextures(['texturePinkNucleus']);
        this.setMaterial();
        this.setMesh();

        this.group = new THREE.Group();

        this.profitablilityText = new DomainText('PROFITABLITY', 'Orange')
        this.profitablilityText.mesh.position.z = 1.4
        this.group.add(this.profitablilityText.mesh)

        this.checklistText = new DomainText('CHECKLIST', 'Orange')
        this.checklistText.mesh.position.z = 1.4
        this.checklistText.mesh.position.y = -0.4
        this.group.add(this.checklistText.mesh)

        this.policyText = new DomainText('POLICY', 'Orange')
        this.policyText.mesh.position.z = 1.4
        this.policyText.mesh.position.y = 0.4
        this.group.add(this.policyText.mesh)

        this.shield = new PlanetShield('white')
        this.group.add(this.shield.mesh)

        this.guard = new Guard()
        this.group.add(this.guard.mesh)

        this.group.add(this.nucleus);

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
        this.profitablilityText?.update()
        this.policyText?.update()
        this.checklistText?.update()
        super.updateTextPosition([this.profitablilityText.mesh, this.policyText.mesh, this.checklistText.mesh]);
    }
}
