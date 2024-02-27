import Experience from "../Experiance.js";
import Environment from "./Environment.js";
import Resources from "../Utils/Resources.js";
import MainNucleus from "./nucleus/MainNucleus.js";
import RedNucleus from "./nucleus/RedNucleus.js";
import GreenNucleus from "./nucleus/GreenNucleus.js";
import YellowNucleus from "./nucleus/YellowNucleus.js";
import PurpleNucleus from "./nucleus/PurpleNucleus.js";
import OrangeNucleus from "./nucleus/OrangeNucleus.js";
import PinkNucleus from "./nucleus/PinkNucleus.js";
import Satellite from "./satellite/Satellite.js";
import ClpText from "./Texts/ClpText.js";
import DracoText from "./texts/satelites/DracoText.js";
import TaurusText from "./texts/satelites/TaurusText.js";
import AquariusText from "./texts/satelites/AquariusText.js";
import GeminiText from "./texts/satelites/GeminiText.js";
import BgSphere from "./BgSphere.js";
import Stars from "./Stars.js";
import DefaultPlanet from "./planets/DefaultPlanet.js";
import DomainTeamText from "./texts/satelites/DomainTeamText.js";
import Astros from "./missels/Astros.js";
import PlanetTTA from "./planets/Models/PlanetTTA.js";
import PlanetTTL from "./planets/Models/PlanetTTL.js";
import PlanetDomain1 from "./planets/Models/PlanetDomain1.js";
import PlanetDomain2 from "./planets/Models/PlanetDomain2.js";
import PlanetDomain3 from "./planets/Models/PlanetDomain3.js";
import PlanetTTY from "./planets/Models/PlanetTTY.js";
import PlanetText from "./planets/text/PlanetText.js";
import Bridge from "./models/Bridge.js";
import VideoPlane from "./planes/VideoPlane.js";
import Scores from "./scores/Scores.js";
import ScoreModel from "./scores/ScoreModel.js";
import CongratulationsText from "./texts/CongratulationsText.js";

export default class World {
    texts = [];
    constelations = [];
    missiles = [];
    planets = [];

    constructor() {
        this.experiance = Experience.INSTANCE;
        this.resources = this.experiance.resources;
        this.time = this.experiance.time;

        this.resources.on(Resources.READY_EVENT, () => {
            this.mainNucleus = new MainNucleus();
            this.redNucleus = new RedNucleus();
            this.greenNucleus = new GreenNucleus();
            this.yellowNucleus = new YellowNucleus();
            this.purpleNucleus = new PurpleNucleus();
            this.orangeNucleus = new OrangeNucleus();
            this.pinkNucleus = new PinkNucleus();
            this.sphere = new BgSphere();

            this.mars = new DefaultPlanet('textureMars', 1.9, 18, 20, new PlanetText('C B Z', 0xD38F5C));
            this.jupiter = new DefaultPlanet('textureJupiter', 2.6, 21, 25, new PlanetText('M I S', 0xCBCCCC));
            this.neptune = new DefaultPlanet('textureIce', 2, 25, 35, new PlanetText('D E', 0x6EADD2));
            this.moon = new DefaultPlanet('textureDeath', 3.1, 30, 10, new PlanetText('S W o', 0xE2300F));
            this.sun = new DefaultPlanet('textureSun', 2, 35, 12, new PlanetText('S F', 0xE0CD2A));

            this.dracoTeam = new Satellite('draco', 'baseRocket3', new DracoText());
            this.taurusTeam = new Satellite('taurus', 'baseRocket2', new TaurusText())
            this.aquariusTeam = new Satellite('aquarius', 'baseRocket1', new AquariusText());
            this.geminiTeam = new Satellite('gemini', 'baseRocket4', new GeminiText());
            this.domainTeam = new Satellite('domain', 'baseRocket5', new DomainTeamText());

            this.planets = [
                new PlanetTTY(),
                new PlanetTTA(),
                new PlanetTTL(),
                new PlanetDomain1(),
                new PlanetDomain2(),
                new PlanetDomain3(),
            ]

            this.constelations = [
                new Stars('textureStar', 10, 0.5),
                new Stars('textureStar2', 50, 0.5, true),
                new Stars('textureStar2', 10, 0.5),
                new Stars('textureStar3', 10, 0.5)
            ];

            this.missiles = [
                new Astros('textureAstroRed', 1, this.dracoTeam, 'white', 3),
                new Astros('textureAstroGreen', 1, this.taurusTeam, 'white', 3),
                new Astros('textureAstroBlue', 1, this.geminiTeam, 'white', 3),
                new Astros('textureAstroGold', 1, this.aquariusTeam, 'white', 3),
                new Astros('textureStar1', 1, this.domainTeam, 'white', 3)
            ];
            this.bridge = new Bridge();

            this.video = new VideoPlane({borderMaterial: this.bridge.sprecialMaterial.clone()});

            this.texts = [
                new ClpText(0.05)
            ];

            this.scores = new Scores(this.bridge.sprecialMaterial.clone())
            this.scoreModel = new ScoreModel()
            this.congratulationsText = new CongratulationsText()

            this.environment = new Environment();
        })
    }

    update() {
        this.mainNucleus?.update();
        this.redNucleus?.update();
        this.greenNucleus?.update();
        this.yellowNucleus?.update();
        this.purpleNucleus?.update();
        this.orangeNucleus?.update();
        this.pinkNucleus?.update();
        this.sphere?.update();
        this.mars?.update();
        this.jupiter?.update();
        this.neptune?.update();
        this.moon?.update();
        this.sun?.update();

        this.dracoTeam?.update(0);
        this.taurusTeam?.update(1.5);
        this.aquariusTeam?.update(3);
        this.geminiTeam?.update(4.5);
        this.domainTeam?.update(0);

        this.constelations.forEach(el => el?.update());

        this.missiles.forEach((el) => el?.update());
        this.planets.forEach((el) => el?.update());
        this.bridge?.update();
        this.texts?.forEach((el) => el?.update());

        this.scores?.update();
        this.scoreModel?.update();
        this.congratulationsText?.update();

        this.resources.mixers.forEach(el => el.update(this.time.delta / 1000));
    }
}