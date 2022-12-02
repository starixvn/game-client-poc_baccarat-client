import * as cc from "cc";
// import { roundState } from "../states/round-state";
// import { dispatchToAllStates } from "../states/state";

const { ccclass, property } = cc._decorator;
import * as mobxCocos from "mobx-cocos";
const { observer, render } = mobxCocos;

@ccclass
@observer
export class DragonTiger extends cc.Component {
  private _gameName!: string;

  @property(cc.Label)
  protected roundIdLabel!: cc.Label;

  constructor() {
    super();
  }

  public get gameName() {
    return this._gameName;
  }

  public initialize(game: string) {
    const inGameEvent = "inGame";

    this._gameName = game;
    this.sendToService(inGameEvent);
  }

  public onReceiveData(data: unknown) {
    // dispatchToAllStates(data);
  }

  public sendToService(event: string, data: unknown = undefined) {
    // const connection = getConnection(this.gameName);
    // connection && connection.emit(event, data);
  }

  // @render renderRoundId() {
  //   if (this.roundIdLabel) {
  //     this.roundIdLabel.string = `#${roundState.currentRoundId}`;
  //   }
  // }
}
