import EventEmitter from "../Utils/EventEmmiter.js";
import {SCORES_STEPS} from "./ScoresScenario.js";
import {HISTORY_STEPS} from "./HistoryScenario.js";

const STEPS = SCORES_STEPS.concat(HISTORY_STEPS)

export default class Scenario extends EventEmitter {
    static CHAPTER_CHANGE = 'step_change'
    step = 0;
    stage = STEPS[this.step]

    constructor() {
        super();
        this.trigger(Scenario.CHAPTER_CHANGE);
    }

    next() {
        if (STEPS[this.step + 1]) {
            this.step++
            this.stage = STEPS[this.step]
            this.trigger(Scenario.CHAPTER_CHANGE)
        }
    }

    prev() {
        if (STEPS[this.step - 1]) {
            this.step--
            this.stage = STEPS[this.step]
            this.trigger(Scenario.CHAPTER_CHANGE)
        }
    }
}