import * as cc from "cc";
import { Foo } from "db://game-client-component/foo";
const { ccclass, property } = cc._decorator;

@ccclass
export default class BigRoadScoreboardSample extends cc.Component {
  @property([cc.Prefab])
  layerPrefabs: cc.Prefab[] = [];

  @property(cc.SpriteFrame)
  backgroundFrame: cc.SpriteFrame = null;

  private input: any[] = [];
  private bigRoads = [];

  protected onLoad(): void {
    this.schedule(() => this.pushDataToBigRoad(), 1);
  }

  onInitializeBigRoad(node: cc.Node) {
    const bigRoad = node.getComponent("big-road") as BigRoad;

    console.log(bigRoad);

    if (bigRoad) {
      bigRoad.initialize(this.getBigRoadOptions());

      this.bigRoads.push(bigRoad);
    }
  }

  private pushDataToBigRoad() {
    const input = this.getInput();

    if (this.input.length < 100) {
      this.input.push(input);

      this.bigRoads.forEach((bigRoad) =>
        bigRoad.render(this.input.map((x) => x))
      );
    } else {
      this.bigRoads.forEach((bigRoad) => bigRoad.fifo(input));
    }
  }

  private getBigRoadOptions(): BigRoadOptions {
    return {
      layers: this.layerPrefabs,
      padding: 5,
      item: { padding: 3 },
      background: this.backgroundFrame,
    };
  }

  private getInput() {
    const random = this.getRandomInt(3);

    const data = {
      0: {
        value: false,
        metadata: {
          tie: false,
        },
      },
      1: {
        value: true,
        metadata: {
          tie: false,
        },
      },
      2: {
        value: undefined,
        metadata: {
          tie: true,
        },
      },
    };

    return data[random];
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
