import ScoreTitle from "./ScoreTitle.js";
import ScoreDescription from "./ScoreDescription.js";
import Experience from "../../Experiance.js";
import Scenario from "../../Scenario/Scenario.js";
import ScoresPlane from "./ScoresPlane.js";

export default class Scores {
    items = []

    constructor(material) {
        this.experiance = Experience.INSTANCE;
        this.scene = this.experiance.scene;
        this.resources = this.experiance.resources;
        this.material = material
        this.watchConfig();
    }

    watchConfig() {
        this.setConfig()
        this.experiance.config.on(Scenario.CHAPTER_CHANGE, () => this.setConfig())
    }

    setConfig() {
        this.config = this.experiance.config.stage.texts?.scores;
        this.setMeshes(this.config);
    }

    setMeshes(config) {
        this.items.forEach(item => item.dispose?.());

        const scorePlane1 = new ScoresPlane({x: 0, y: 0, z: 19}, {x: 0, z: 21});
        const scoreTitle1 = new ScoreTitle(this.material.clone(), {x: 0, y: 11, z: 20}, {x: 0, z: 21});
        const scoreDescription1 = new ScoreDescription(this.material.clone(), {x: 0, z: 20}, {x: 0, z: 21});

        const scorePlane2 = new ScoresPlane({x: 20.78, y: 0, z: -10.39}, {x: 41.56, z: -20.78});
        const scoreTitle2 = new ScoreTitle(this.material.clone(), {x:  20.78, y: 11, z: -10.39}, {x: 41.56, z: -20.78});
        const scoreDescription2 = new ScoreDescription(this.material.clone(), {x: 20.78, z: -10.39}, {x: 41.56, z: -20.78});

        const scorePlane3 = new ScoresPlane({x: -20.78, y: 0, z: -10.39}, {x: -41.56, z: -20.78});
        const scoreTitle3 = new ScoreTitle(this.material.clone(), {x: -20.78, y: 11, z: -10.39}, {x: -41.56, z: -20.78});
        const scoreDescription3 = new ScoreDescription(this.material.clone(), {x: -20.78, z: -10.39}, {x: -41.56, z: -20.78});

        this.items = [
            scorePlane1,
            scorePlane2,
            scorePlane3,
            scoreTitle1,
            scoreTitle2,
            scoreTitle3,
            scoreDescription1,
            scoreDescription2,
            scoreDescription3
        ]

        scorePlane1.resetMesh(config);
        scorePlane2.resetMesh(config);
        scorePlane3.resetMesh(config);

        scoreTitle1.resetMesh(config?.data1);
        scoreTitle2.resetMesh(config?.data2);
        scoreTitle3.resetMesh(config?.data3);

        scoreDescription1.resetMesh(config?.data1, true);
        scoreDescription2.resetMesh(config?.data2, false);
        scoreDescription3.resetMesh(config?.data3, false);
    }

    update() {

    }
}