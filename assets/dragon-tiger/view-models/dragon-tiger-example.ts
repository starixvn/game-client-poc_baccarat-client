// import "../configs";
// import * as cc from "cc";
// const { ccclass } = cc._decorator;
// import { verifyToken } from "../actions/game-initialization";
// import * as mobx from "mobx";
// const { configure } = mobx;
// import { getConnection } from "../_shared/connections";
// import { getLanguage, getLanguages, setLanguage } from "../_shared/language";

// configure({ enforceActions: "observed" });

// @ccclass
// export default class DragonTigerSample extends cc.Component {
//   private gameNode: cc.Node;
//   private isSSO = false;
//   private isFirstLoad = true;

//   protected async start() {
//     await this.sso();
//     this.isSSO = true;

//     const language = getLanguage();

//     setLanguage(language);
//   }

//   protected lateUpdate(): void {
//     if (this.isSSO && this.gameNode && this.isFirstLoad) {
//       this.isFirstLoad = false;
//       this.initializeGame();
//     }
//   }

//   protected async sso() {
//     try {
//       await verifyToken();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   protected onInitializeGame(node: cc.Node) {
//     this.gameNode = node;
//   }

//   protected changeLanguage() {
//     const currentLanguage = getLanguage();
//     const languages = getLanguages();
//     const nextIndex =
//       languages.findIndex((language) => language.code === currentLanguage) + 1;
//     const nextLanguage =
//       nextIndex >= languages.length ? languages[0] : languages[nextIndex];

//     setLanguage(nextLanguage.code);
//   }

//   private initializeGame() {
//     const gameName = "RongHo";
//     const gameComponent = "dragon-tiger";
//     const game = this.gameNode.getComponent(gameComponent);
//     const connection = getConnection(gameName);

//     // game.initialize(gameName);
//     // connection && connection.on(game.gameName, game.onReceiveData);
//   }

//   private onProgress(finished: number, total: number) {
//     console.log(
//       `Total: ${total}, Finished: ${finished} ==> ${(
//         (finished / total) *
//         100
//       ).toFixed(0)}%`
//     );
//   }
// }
