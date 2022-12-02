import * as cc from "cc";
const { _decorator, Component, director } = cc;
const { ccclass, property } = _decorator;
import _ from "lodash";
import mobx from "mobx";

import { componentStore } from "../mobx-tests/store";

import mobxCocos from "mobx-cocos";
const { render, observer } = mobxCocos;
const { autorun, configure } = mobx;

configure({ enforceActions: "observed" });

@observer
@ccclass
export class MainScene extends Component {
  @property(cc.Label)
  counterText: cc.Label = null;

  start() {
    this.schedule(this.increaseCounter, 1);
    const test = _.defaults({ a: 1 }, { a: 3, b: 2 });
    console.log(test);

    autorun(() => {
      //console.log("Tasks left with delay: " + componentStore.counter);
      this.counterText.string = `Main Computed: ${componentStore.doubleCounter.toString()}`;
    });
  }

  @render protected renderCounter() {
    // this.counterText.string = `Main Computed: ${componentStore.doubleCounter.toString()}`;
    // console.log("Tasks left with delay: " + componentStore.counter);
  }

  protected increaseCounter() {
    componentStore.increaseCounter();
  }

  loadPrefabLoaderSamples() {
    director.loadScene(
      "prefab-loader-tests",
      (error: null | Error, scene?: cc.Scene) => {
        error && console.log(error);
      }
    );
  }

  loadBigroadScoreboardSamples() {
    director.loadScene(
      "test-scoreboard",
      (error: null | Error, scene?: cc.Scene) => {
        error && console.log(error);
      }
    );
  }
}
