import { _decorator, Component, Node, director, Scene } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MainScene")
export class MainScene extends Component {
  start() {}

  update(deltaTime: number) {}

  loadPrefabLoaderSamples() {
    director.loadScene(
      "prefab-loader-tests",
      (error: null | Error, scene?: Scene) => {
        error && console.log(error);
      }
    );
  }

  loadBigroadScoreboardSamples() {
    director.loadScene(
      "test-scoreboard",
      (error: null | Error, scene?: Scene) => {
        error && console.log(error);
      }
    );
  }
}
