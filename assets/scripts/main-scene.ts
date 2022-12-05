import * as cc from "cc";
const { _decorator, Component, director } = cc;
const { ccclass, property } = _decorator;
import _ from "lodash";
import mobx from "mobx";

import { componentStore } from "../mobx-tests/store";

import { MobxComponent } from "db://game-client-base/utils/mobxCocos";
//import { MobxMainComponent } from "./mobx-cocos-main";
const { autorun, configure } = mobx;

configure({ enforceActions: "observed", useProxies: "ifavailable" });

@ccclass
export class MainScene extends MobxComponent {
  @property(cc.Label)
  counterText: cc.Label = null;

  start() {
    this.schedule(this.increaseCounter, 1);
    const test = _.defaults({ a: 1 }, { a: 3, b: 2 });
    //console.log(test);

    autorun(() => {
      // console.log("Tasks left with delay: " + componentStore.counter);
      // this.counterText.string = `Main Computed: ${componentStore.doubleCounter.toString()}`;
    });
  }

  onLoad() {
    this.componentName = MainScene.name;
    console.log(this);
    (this.__autorun || (this.__autorun = [])).push("renderCounter");
    super.onLoad();
  }

  public renderCounter() {
    this.counterText.string = `Main Computed: ${componentStore.doubleCounter.toString()}`;
    console.log("Tasks left with delay: " + componentStore.counter);
    // console.log("Tasks left with delay: " + componentStore.counter);
  }

  protected increaseCounter() {
    componentStore.increaseCounter();

    if (componentStore.counter == 10) {
      this.unschedule(this.increaseCounter);
    }
  }

  changeState() {
    componentStore.val1 = Math.random();
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
