"use strict";

const chalk = require("chalk");

const art = `
███╗   ██╗███████╗██╗    ██╗    ██████╗  █████╗ ██╗██╗     ███████╗██╗   ██╗███████╗
████╗  ██║██╔════╝██║    ██║    ██╔══██╗██╔══██╗██║██║     ██╔════╝╚██╗ ██╔╝██╔════╝
██╔██╗ ██║█████╗  ██║ █╗ ██║    ██████╔╝███████║██║██║     █████╗   ╚████╔╝ ███████╗
██║╚██╗██║██╔══╝  ██║███╗██║    ██╔══██╗██╔══██║██║██║     ██╔══╝    ╚██╔╝  ╚════██║
██║ ╚████║███████╗╚███╔███╔╝    ██████╔╝██║  ██║██║███████╗███████╗   ██║   ███████║
╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝     ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝   ╚═╝   ╚══════╝`;

// TITLE (WHITE)
console.log(
  chalk.white.bold("        N E W   B A I L E Y S   C O R E")
);

async function code() {
  const w = [
    chalk.red,
    chalk.hex("#FF8000"),
    chalk.yellow,
    chalk.green,
    chalk.cyan,
    chalk.blue,
    chalk.magenta,
  ];

  const wify = (text) => {
    let out = "";
    let i = 0;
    for (const c of text) {
      out += c.trim() ? w[i++ % w.length](c) : c;
    }
    return out;
  };

  console.clear();
  art.split("\n").forEach((line) => console.log(wify(line)));

  console.log();
// SEPARATOR (GRAY)
console.log(
  chalk.gray("────────────────────────────────────────")
);

// INFO (MIXED)
console.log(
  chalk.white(" Engine   : ") + chalk.cyan("Baileys (Custom Modified)")
);
console.log(
  chalk.white(" Author   : ") + chalk.cyan("Farel")
);
console.log(
  chalk.white(" Latest Update  : ") + chalk.greenBright(`2026-02-18`)
);
console.log(
  chalk.white(" Telegram : ") + chalk.greenBright("@Fareldestroyer")
);

// SEPARATOR BAWAH (GRAY)
console.log(
  chalk.gray("────────────────────────────────────────\n")
);
  console.log();
}
code();

var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
