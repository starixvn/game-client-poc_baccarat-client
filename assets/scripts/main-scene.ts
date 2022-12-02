import * as cc from "cc";
const { _decorator, Component, director } = cc;
const { ccclass, property } = _decorator;
import _ from "lodash";
import mobx from "mobx";

import { componentStore } from "../mobx-tests/store";

import mobxCocos from "mobx-cocos";
const { render } = mobxCocos;
const { autorun } = mobx;

@ccclass("MainScene")
@mobxCocos.observer
export class MainScene extends Component {
  @property(cc.Label)
  counterText: cc.Label = null;

  start() {
    this.schedule(this.increaseCounter, 1);
    const test = _.defaults({ a: 1 }, { a: 3, b: 2 });
    console.log(test);

    autorun(() => {
      console.log("Tasks left with delay: " + componentStore.counter);
    });
  }

  @render protected renderCounter() {
    this.counterText.string = `Main Computed: ${componentStore.doubleCounter.toString()}`;
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
