var Crimenuts;
(function (Crimenuts) {
    var App = (function () {
        function App() {
            this.server = new Crimenuts.ServerAdapter();
            this.server.onServerStarted.addOnce(this.init, this);
            this.server.onTickCountUpdated.add(this.onTickCountUpdated, this);
            this.uiFactory = new Crimenuts.DefaultUIFactory();
        }
        App.prototype.onGameCreate = function () {
            this.game.state.add("Process", Crimenuts.ProcessState, true);
        };
        App.prototype.init = function () {
            var size = this.getGameScreenSize();
            this.createGame(size.width, size.height);
            this.handleResetLink();
        };
        App.prototype.createGame = function (width, height) {
            this.game = new Phaser.Game(width, height, Phaser.AUTO, "crimenuts-playground", { create: this.onGameCreate });
        };
        App.prototype.onTickCountUpdated = function (count) {
            this.tickCount = count;
        };
        App.prototype.getGameScreenSize = function () {
            return {
                width: Crimenuts.Settings.Game.width,
                height: Crimenuts.Settings.Game.height
            };
        };
        App.prototype.handleResetLink = function () {
            var _this = this;
            document.getElementById("crimenuts-reset-processes").onclick = function () {
                _this.server.resetProcesses();
            };
        };
        return App;
    })();
    Crimenuts.App = App;
    Crimenuts.app;
    function initApp() {
        Crimenuts.app = new App();
    }
    Crimenuts.initApp = initApp;
})(Crimenuts || (Crimenuts = {}));
window.onload = function () {
    Crimenuts.initApp();
};
var Crimenuts;
(function (Crimenuts) {
    var Assets;
    (function (Assets) {
        var Sprites = (function () {
            function Sprites() {
            }
            // Scalable Picture
            Sprites.getPictureKey = function (name, size) {
                size = Math.ceil(size);
                return "sprite-picture-" + name + "-" + size;
            };
            Sprites.getPictureUrl = function (name, size) {
                size = Math.ceil(size);
                return "/Image/Picture?name=" + name + "&width=" + size + "&height=" + size;
            };
            Sprites.loadPicture = function (name, size) {
                Crimenuts.app.game.load.image(Sprites.getPictureKey(name, size), Sprites.getPictureUrl(name, size));
            };
            // Scalable Person
            Sprites.getPersonKey = function (world, person, size) {
                if (size === void 0) { size = Crimenuts.Settings.Default.Assets.personSize; }
                size = Math.ceil(size);
                return "sprite-person-" + world + "-" + person + "-" + size;
            };
            Sprites.getPersonUrl = function (world, person, size) {
                size = Math.ceil(size);
                return "/Image/Person?world=" + world + "&name=" + person + "&width=" + size + "&height=" + size;
            };
            Sprites.loadPerson = function (world, person, size) {
                if (size === void 0) { size = Crimenuts.Settings.Default.Assets.personSize; }
                Crimenuts.app.game.load.image(Sprites.getPersonKey(world, person, size), Sprites.getPersonUrl(world, person, size));
            };
            // Fixed size
            Sprites.load = function (key) {
                Crimenuts.app.game.load.image(key, Sprites.getUrl(key));
            };
            Sprites.getUrl = function (key) {
                return "" + Sprites.path + "/" + key + ".png";
            };
            Sprites.path = "/Game/Client/Assets/Sprites";
            return Sprites;
        })();
        Assets.Sprites = Sprites;
    })(Assets = Crimenuts.Assets || (Crimenuts.Assets = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ColorSet = (function () {
        function ColorSet(fill, border, text) {
            this.fill = fill;
            this.border = border;
            this.text = text;
        }
        return ColorSet;
    })();
    Crimenuts.ColorSet = ColorSet;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    (function (AnswerCode) {
        AnswerCode[AnswerCode["Error"] = 0] = "Error";
        AnswerCode[AnswerCode["Unknown"] = 1] = "Unknown";
        AnswerCode[AnswerCode["Innocent"] = 2] = "Innocent";
        AnswerCode[AnswerCode["Murderer"] = 3] = "Murderer";
        AnswerCode[AnswerCode["Suspicious"] = 4] = "Suspicious";
        AnswerCode[AnswerCode["NotSuspicious"] = 5] = "NotSuspicious";
    })(Crimenuts.AnswerCode || (Crimenuts.AnswerCode = {}));
    var AnswerCode = Crimenuts.AnswerCode;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    (function (RelationCode) {
        RelationCode[RelationCode["Love"] = 0] = "Love";
        RelationCode[RelationCode["Hate"] = 1] = "Hate";
        RelationCode[RelationCode["Ignore"] = 2] = "Ignore";
    })(Crimenuts.RelationCode || (Crimenuts.RelationCode = {}));
    var RelationCode = Crimenuts.RelationCode;
})(Crimenuts || (Crimenuts = {}));
/// <reference path="../UserInterface/Types/ColorSet.ts" />
/// <reference path="../Types/AnswerCode.ts" />
/// <reference path="../Types/RelationCode.ts" />
var Crimenuts;
(function (Crimenuts) {
    var Settings;
    (function (Settings) {
        var Game;
        (function (Game) {
            Game.width = 768;
            Game.height = 910;
        })(Game = Settings.Game || (Settings.Game = {}));
        var k = Game.width / 720.0;
        var Default;
        (function (Default) {
            var Font;
            (function (Font) {
                Font.face = "Arial";
                Font.size = 16;
                Font.color = "#AAAAAA";
                Font.bgColor = 0x000000;
            })(Font = Default.Font || (Default.Font = {}));
            var RoundedRectangle;
            (function (RoundedRectangle) {
                RoundedRectangle.radiusRate = 1 / 5;
            })(RoundedRectangle = Default.RoundedRectangle || (Default.RoundedRectangle = {}));
            var Shape;
            (function (Shape) {
                Shape.lineWidth = 2;
                Shape.fillColor = 0x222222;
                Shape.lineColor = 0xAAAAAA;
            })(Shape = Default.Shape || (Default.Shape = {}));
            var Process;
            (function (Process) {
                Process.testId = "30";
            })(Process = Default.Process || (Default.Process = {}));
            var Assets;
            (function (Assets) {
                Assets.personSize = 100;
                Assets.pictureSize = 100;
            })(Assets = Default.Assets || (Default.Assets = {}));
        })(Default = Settings.Default || (Settings.Default = {}));
        var Assets;
        (function (Assets) {
            var Sprites;
            (function (Sprites) {
                Sprites.transparent = "transparent";
            })(Sprites = Assets.Sprites || (Assets.Sprites = {}));
        })(Assets = Settings.Assets || (Settings.Assets = {}));
        var BgColor;
        (function (BgColor) {
            BgColor.black = 0x000000;
            BgColor.white = 0xFFFFFF;
            BgColor.transparent = -1;
        })(BgColor = Settings.BgColor || (Settings.BgColor = {}));
        var UserInterface;
        (function (UserInterface) {
            var Button;
            (function (Button) {
                Button.width = 100 * k;
                Button.height = Button.width * 0.35;
                Button.sprite = Assets.Sprites.transparent;
                Button.fontSize = 16 * k;
                Button.fillColor = 0x222222;
                Button.lineColor = 0x888888;
                Button.textColor = "#AAAAAA";
                Button.lineWidth = Button.width * 0.015;
                var White;
                (function (White) {
                    var Regular;
                    (function (Regular) {
                        Regular.colors = new Crimenuts.ColorSet(0xAAAAAA, 0xAAAAAA, "#000000");
                    })(Regular = White.Regular || (White.Regular = {}));
                    var Highlight;
                    (function (Highlight) {
                        Highlight.colors = new Crimenuts.ColorSet(0xFFFFFF, 0xFFFFFF, "#000000");
                    })(Highlight = White.Highlight || (White.Highlight = {}));
                })(White = Button.White || (Button.White = {}));
            })(Button = UserInterface.Button || (UserInterface.Button = {}));
            var TextLabel;
            (function (TextLabel) {
                TextLabel.fontSizeToHeightRate = 16 / 25;
            })(TextLabel = UserInterface.TextLabel || (UserInterface.TextLabel = {}));
        })(UserInterface = Settings.UserInterface || (Settings.UserInterface = {}));
        var Process;
        (function (Process) {
            Process.bgColor = "#000000";
            var Members;
            (function (Members) {
                Members.left = 10 * k;
                Members.top = 575 * k;
                Members.position = new Phaser.Point(Members.left, Members.top);
                Members.numInRow = 6;
                Members.unknownMember = -1;
                Members.spanHorRate = 1.3;
                Members.spanVerRate = 1.1;
                var Card;
                (function (Card) {
                    Card.width = 90 * k;
                    Card.height = 115 * k;
                    Card.inaciveShade = 0.8;
                    var Spot;
                    (function (Spot) {
                        Spot.heightRate = 0.10;
                        Spot.footShiftRate = 0.70;
                        Spot.color = {};
                        Spot.color[Crimenuts.AnswerCode[0 /* Error */]] = 0xFFFFFF;
                        Spot.color[Crimenuts.AnswerCode[1 /* Unknown */]] = 0x666666;
                        Spot.color[Crimenuts.AnswerCode[2 /* Innocent */]] = 0x00FF00;
                        Spot.color[Crimenuts.AnswerCode[3 /* Murderer */]] = 0xFF0000;
                        Spot.color[Crimenuts.AnswerCode[5 /* NotSuspicious */]] = 0x006600;
                        Spot.color[Crimenuts.AnswerCode[4 /* Suspicious */]] = 0x660000;
                    })(Spot = Card.Spot || (Card.Spot = {}));
                    var Name;
                    (function (Name) {
                        Name.height = 22 * k;
                        Name.fontSize = 11 * k;
                        Name.color = "#666666";
                        Name.bgColor = BgColor.transparent;
                    })(Name = Card.Name || (Card.Name = {}));
                    var Answer;
                    (function (Answer) {
                        Answer.sizeRate = 0.5;
                        Answer.xRate = 0.6;
                        Answer.yRate = 0.0;
                        Answer.tintColor = 0xDDDDDD;
                    })(Answer = Card.Answer || (Card.Answer = {}));
                    var Sign;
                    (function (Sign) {
                        Sign.picture = {};
                        Sign.picture[Crimenuts.RelationCode[0 /* Love */]] = "heart";
                        Sign.picture[Crimenuts.RelationCode[1 /* Hate */]] = "light";
                        Sign.picture[Crimenuts.RelationCode[2 /* Ignore */]] = "transparent";
                        Sign.sizeRate = 0.5;
                        Sign.xRate = 0.15;
                        Sign.yRate = 0.15;
                    })(Sign = Card.Sign || (Card.Sign = {}));
                })(Card = Members.Card || (Members.Card = {}));
                var Dialog;
                (function (Dialog) {
                    Dialog.left = 5 * k;
                    Dialog.top = 330 * k;
                    Dialog.position = new Phaser.Point(Dialog.left, Dialog.top);
                    Dialog.width = Game.width - Dialog.left * 2;
                    Dialog.height = 220 * k;
                    Dialog.bgColor = 0x000000;
                    Dialog.bracketColor = 0x888888;
                    Dialog.bracketWidth = 2;
                    var Card;
                    (function (Card) {
                        Card.position = new Phaser.Point(8 * k, 30 * k);
                        Card.width = 210 * k;
                        Card.height = Card.width;
                    })(Card = Dialog.Card || (Dialog.Card = {}));
                    var Title;
                    (function (Title) {
                        Title.position = new Phaser.Point(250 * k, 25 * k);
                        Title.width = 250 * k;
                        Title.height = 36 * k;
                        Title.color = "#AAAAAA";
                        Title.bgColor = BgColor.transparent;
                    })(Title = Dialog.Title || (Dialog.Title = {}));
                    var Text;
                    (function (Text) {
                        Text.position = new Phaser.Point(252 * k, 85 * k);
                        Text.width = 250 * k;
                        Text.height = 22 * k;
                        Text.color = "#AAAAAA";
                        Text.bgColor = BgColor.transparent;
                    })(Text = Dialog.Text || (Dialog.Text = {}));
                    var Buttons;
                    (function (Buttons) {
                        Buttons.left = 595 * k;
                        Buttons.markPosition = new Phaser.Point(Buttons.left, 120 * k);
                        Buttons.arrestPosition = new Phaser.Point(Buttons.left, 170 * k);
                    })(Buttons = Dialog.Buttons || (Dialog.Buttons = {}));
                })(Dialog = Members.Dialog || (Members.Dialog = {}));
            })(Members = Process.Members || (Process.Members = {}));
            var Answers;
            (function (Answers) {
                Answers.position = new Phaser.Point(15 * k, 70 * k);
                Answers.width = Game.width - Answers.position.x * 2;
                Answers.height = 250 * k;
                Answers.bgColor = 0x000000;
                var Buttons;
                (function (Buttons) {
                    var Auto;
                    (function (Auto) {
                        Auto.position = new Phaser.Point(590 * k, 10 * k);
                    })(Auto = Buttons.Auto || (Buttons.Auto = {}));
                })(Buttons = Answers.Buttons || (Answers.Buttons = {}));
                var Answer;
                (function (Answer) {
                    Answer.fontSize = 15 * k;
                    var Color;
                    (function (Color) {
                        Color.regular = "#777777";
                    })(Color = Answer.Color || (Answer.Color = {}));
                })(Answer = Answers.Answer || (Answers.Answer = {}));
            })(Answers = Process.Answers || (Process.Answers = {}));
            var Bars;
            (function (Bars) {
                Bars.textColor = "#000000";
                Bars.bgColor = 0x444444;
                Bars.left = 5 * k;
                Bars.width = Game.width - Bars.left * 2;
                Bars.height = 25 * k;
                var InfoBar;
                (function (InfoBar) {
                    InfoBar.position = new Phaser.Point(Bars.left, 37 * k);
                })(InfoBar = Bars.InfoBar || (Bars.InfoBar = {}));
            })(Bars = Process.Bars || (Process.Bars = {}));
        })(Process = Settings.Process || (Settings.Process = {}));
    })(Settings = Crimenuts.Settings || (Crimenuts.Settings = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Command = (function () {
        function Command(name, callback, context) {
            if (callback === void 0) { callback = null; }
            if (context === void 0) { context = null; }
            this.name = name;
            this.callback = callback;
            this.context = context;
        }
        Command.nothing = new Command("");
        return Command;
    })();
    Crimenuts.Command = Command;
})(Crimenuts || (Crimenuts = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
var Crimenuts;
(function (Crimenuts) {
    var AutoAnswerCommand = (function (_super) {
        __extends(AutoAnswerCommand, _super);
        function AutoAnswerCommand(controller, processId) {
            _super.call(this, "Auto answer", function () { return controller.autoAnswer(processId); });
        }
        return AutoAnswerCommand;
    })(Crimenuts.Command);
    Crimenuts.AutoAnswerCommand = AutoAnswerCommand;
})(Crimenuts || (Crimenuts = {}));
/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
var Crimenuts;
(function (Crimenuts) {
    var MemberArrestrCommand = (function (_super) {
        __extends(MemberArrestrCommand, _super);
        function MemberArrestrCommand(controller, processId) {
            _super.call(this, "Arrest", function () { return controller.autoAnswer(processId); });
        }
        return MemberArrestrCommand;
    })(Crimenuts.Command);
    Crimenuts.MemberArrestrCommand = MemberArrestrCommand;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var MemberDialog = (function (_super) {
                __extends(MemberDialog, _super);
                function MemberDialog(director, cmdMark, cmdArrest) {
                    _super.call(this, Crimenuts.app.game);
                    this.memberId = 0;
                    this.position = Crimenuts.Settings.Process.Members.Dialog.position.clone();
                    this.director = director;
                    this.createFrameDecoration();
                    this.createMemberCard();
                    this.createTitle();
                    this.createText();
                    this.createButtons(cmdMark, cmdArrest);
                    MemberDialog.instance = this;
                }
                MemberDialog.prototype.setMember = function (memberId) {
                    this.memberId = memberId;
                    this.updateMemberCard();
                    this.updateTitle();
                    this.updateText();
                    this.updateAnswerCardCommand();
                };
                MemberDialog.prototype.onProcessUpdated = function (director) {
                    this.setMember(this.memberId);
                };
                MemberDialog.prototype.createFrameDecoration = function () {
                    this.add(new Crimenuts.RectangleDecor(new Crimenuts.BracketDecor(new Crimenuts.Decorable(Crimenuts.Settings.Process.Members.Dialog.width, Crimenuts.Settings.Process.Members.Dialog.height), Crimenuts.Settings.Process.Members.Dialog.bracketColor, Crimenuts.Settings.Process.Members.Dialog.bracketWidth), Crimenuts.Settings.Process.Members.Dialog.bgColor, Crimenuts.Settings.BgColor.transparent, 0));
                };
                MemberDialog.prototype.createTitle = function () {
                    this.title = Crimenuts.app.uiFactory.makeTextLabel(Crimenuts.Settings.Process.Members.Dialog.Title.width, Crimenuts.Settings.Process.Members.Dialog.Title.height, Crimenuts.Settings.Process.Members.Dialog.Title.color, Crimenuts.Settings.Process.Members.Dialog.Title.bgColor);
                    this.title.position = Crimenuts.Settings.Process.Members.Dialog.Title.position.clone();
                    this.add(this.title);
                };
                MemberDialog.prototype.createText = function () {
                    this.text = Crimenuts.app.uiFactory.makeTextLabel(Crimenuts.Settings.Process.Members.Dialog.Text.width, Crimenuts.Settings.Process.Members.Dialog.Text.height, Crimenuts.Settings.Process.Members.Dialog.Text.color, Crimenuts.Settings.Process.Members.Dialog.Text.bgColor);
                    this.text.position = Crimenuts.Settings.Process.Members.Dialog.Text.position.clone();
                    this.text.alignTop();
                    this.add(this.text);
                };
                MemberDialog.prototype.createButtons = function (cmdMark, cmdArrest) {
                    this.markButton = Crimenuts.app.uiFactory.makeDefaultButton(cmdMark, Crimenuts.Settings.Process.Members.Dialog.Buttons.markPosition);
                    this.arrestButton = Crimenuts.app.uiFactory.makeDefaultButton(cmdArrest, Crimenuts.Settings.Process.Members.Dialog.Buttons.arrestPosition);
                    this.add(this.markButton);
                    this.add(this.arrestButton);
                };
                MemberDialog.prototype.createMemberCard = function () {
                    this.memberCard = new Process.MemberCard(this.director, this.memberId, Crimenuts.Settings.Process.Members.Dialog.Card.position.x, Crimenuts.Settings.Process.Members.Dialog.Card.position.y, Crimenuts.Settings.Process.Members.Dialog.Card.width, Crimenuts.Settings.Process.Members.Dialog.Card.height, Crimenuts.Command.nothing, false);
                    this.updateAnswerCardCommand();
                    this.add(this.memberCard);
                };
                // Update
                MemberDialog.prototype.updateAnswerCardCommand = function () {
                    this.memberCard.getAnswerCard().setCommand(new Crimenuts.MemberDialogCommand(this.memberCard.getAnswerCard().getMemberId()));
                };
                MemberDialog.prototype.updateTitle = function () {
                    var member = this.getMemberModel();
                    this.title.setText("" + member.Name + ":\n\"" + member.TodayAnswer.AnswerDiaogText + "\"");
                };
                MemberDialog.prototype.updateText = function () {
                    var member = this.getMemberModel();
                    var answer = member.TodayAnswer;
                    this.text.setText(answer.IsValid ? "" + member.Name + " " + answer.SubjectRelation + "s " + answer.SubjectName : "");
                };
                MemberDialog.prototype.updateMemberCard = function () {
                    this.memberCard.setMember(this.memberId);
                };
                // Model
                MemberDialog.prototype.getMemberModel = function () {
                    return this.director.getProcessModel().Members[this.memberId];
                };
                return MemberDialog;
            })(Phaser.Group);
            Process.MemberDialog = MemberDialog;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
/// <reference path="./Command.ts" />
/// <reference path="../Views/Process/Parts/MemberDialog.ts" />
var Crimenuts;
(function (Crimenuts) {
    var MemberDialog = Crimenuts.View.Process.MemberDialog;
    var MemberDialogCommand = (function (_super) {
        __extends(MemberDialogCommand, _super);
        function MemberDialogCommand(memberId) {
            _super.call(this, "Open Member Dialog", function () { return MemberDialog.instance.setMember(memberId); });
        }
        return MemberDialogCommand;
    })(Crimenuts.Command);
    Crimenuts.MemberDialogCommand = MemberDialogCommand;
})(Crimenuts || (Crimenuts = {}));
/// <reference path="./Command.ts" />
/// <reference path="../Managers/IProcessController.ts" />
var Crimenuts;
(function (Crimenuts) {
    var MemberMarkCommand = (function (_super) {
        __extends(MemberMarkCommand, _super);
        function MemberMarkCommand(controller, processId) {
            _super.call(this, "Mark", function () { return controller.autoAnswer(processId); });
        }
        return MemberMarkCommand;
    })(Crimenuts.Command);
    Crimenuts.MemberMarkCommand = MemberMarkCommand;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ProcessManager = (function () {
        function ProcessManager(server, observer) {
            this.server = server;
            this.onProcessUpdated = observer.onProcessUpdated;
            this.onTickCountUpdated = observer.onTickCountUpdated;
            this.onProcessesReset = observer.onProcessesReset;
        }
        // IProcessController
        ProcessManager.prototype.getProcess = function (processId) {
            return this.server.getProcess(processId);
        };
        ProcessManager.prototype.autoAnswer = function (processId) {
            return this.server.autoAnswer(processId);
        };
        return ProcessManager;
    })();
    Crimenuts.ProcessManager = ProcessManager;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ServerAdapter = (function () {
        function ServerAdapter() {
            // --------------------------------------------------------[]
            // IServerObserver
            this.onServerStarted = new Phaser.Signal();
            this.onProcessUpdated = new Phaser.Signal();
            this.onTickCountUpdated = new Phaser.Signal();
            this.onProcessesReset = new Phaser.Signal();
            // --------------------------------------------------------[]
            // Fields
            this.server = $.connection.gameHub.server;
            this.client = $.connection.gameHub.client;
            this.setupClientCallbacks();
            this.startHub();
        }
        // --------------------------------------------------------[]
        // IGameHubServer
        ServerAdapter.prototype.getPlayerId = function () {
            return this.server.getPlayerId();
        };
        ServerAdapter.prototype.getProcess = function (processId) {
            return this.server.getProcess(processId);
        };
        ServerAdapter.prototype.autoAnswer = function (processId) {
            return this.server.autoAnswer(processId);
        };
        ServerAdapter.prototype.resetProcesses = function () {
            return this.server.resetProcesses();
        };
        // --------------------------------------------------------[]
        // IGameHubClient
        ServerAdapter.prototype.tickCountUpdated = function (count) {
            this.onTickCountUpdated.dispatch(count);
        };
        ServerAdapter.prototype.processUpdated = function (model) {
            this.onProcessUpdated.dispatch(model);
        };
        ServerAdapter.prototype.processesReset = function () {
            this.onProcessesReset.dispatch();
        };
        // --------------------------------------------------------[]
        // Utils
        ServerAdapter.prototype.setupClientCallbacks = function () {
            var _this = this;
            this.client.tickCountUpdated = function (count) {
                _this.tickCountUpdated(count);
            };
            this.client.processUpdated = function (model) {
                _this.processUpdated(model);
            };
            this.client.processesReset = function () {
                _this.processesReset();
            };
        };
        ServerAdapter.prototype.startHub = function () {
            var _this = this;
            $.connection.hub.start().done(function () {
                _this.onServerStarted.dispatch();
            });
        };
        return ServerAdapter;
    })();
    Crimenuts.ServerAdapter = ServerAdapter;
})(Crimenuts || (Crimenuts = {}));
/// <reference path="../../Commands/AutoAnswerCommand.ts" />
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var ProcessView = (function (_super) {
                __extends(ProcessView, _super);
                function ProcessView(director, controller, observer, model) {
                    _super.call(this, Crimenuts.app.game);
                    // Fields
                    this.parts = new Array();
                    this.game.stage.backgroundColor = Crimenuts.Settings.Process.bgColor;
                    this.createParts(director, controller, observer, model);
                    this.subscribeEvents(observer);
                }
                ProcessView.prototype.onProcessUpdated = function (director) {
                    this.updateParts(director);
                };
                // Parts Utils
                ProcessView.prototype.createParts = function (director, controller, observer, process) {
                    var cmdMark = new Crimenuts.MemberMarkCommand(controller, process.Id);
                    var cmdArrest = new Crimenuts.MemberArrestrCommand(controller, process.Id);
                    var cmdAutoAnswer = new Crimenuts.AutoAnswerCommand(controller, process.Id);
                    this.addPart(this.ticks = new Process.Display());
                    this.addPart(new Process.InfoBar());
                    this.addPart(new Process.Answers(process.Answers, cmdAutoAnswer));
                    this.addPart(new Process.MemberDialog(director, cmdMark, cmdArrest));
                    this.addPart(new Process.Members(director));
                    this.updateParts(director);
                };
                ProcessView.prototype.addPart = function (part) {
                    this.parts.push(part);
                    this.add(part);
                };
                ProcessView.prototype.updateParts = function (director) {
                    this.parts.forEach(function (p) { return p.onProcessUpdated(director); });
                };
                // Events
                ProcessView.prototype.subscribeEvents = function (observer) {
                    observer.onTickCountUpdated.add(this.onTickCountUpdated, this);
                };
                ProcessView.prototype.onTickCountUpdated = function (count) {
                    this.ticks.updateTicks(count);
                };
                return ProcessView;
            })(Phaser.Group);
            Process.ProcessView = ProcessView;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
/// <reference path="../Views/Process/ProcessView.ts" />
/// <reference path="../Managers/ProcessManager.ts" />
var Crimenuts;
(function (Crimenuts) {
    var ProcessView = Crimenuts.View.Process.ProcessView;
    var ProcessState = (function (_super) {
        __extends(ProcessState, _super);
        // Ctor
        function ProcessState() {
            _super.call(this);
            // Fields
            this.processId = Crimenuts.Settings.Default.Process.testId;
            this.createManager();
            this.subscribeEvents();
        }
        // IProcessDirector
        ProcessState.prototype.getProcessModel = function () {
            return this.model;
        };
        // Phaser.State
        ProcessState.prototype.preload = function () {
            Crimenuts.Assets.Sprites.load(Crimenuts.Settings.Assets.Sprites.transparent);
        };
        ProcessState.prototype.create = function () {
            var _this = this;
            this.loadModelThen(function () {
                _this.createView();
            });
        };
        // Parts
        ProcessState.prototype.createManager = function () {
            var manager = new Crimenuts.ProcessManager(Crimenuts.app.server, Crimenuts.app.server);
            this.controller = manager;
            this.observer = manager;
        };
        ProcessState.prototype.loadModelThen = function (callback) {
            var _this = this;
            this.controller.getProcess(this.processId).done(function (model) {
                _this.model = model;
                callback();
            });
        };
        ProcessState.prototype.createView = function () {
            this.view = new ProcessView(this, this.controller, this.observer, this.model);
        };
        ProcessState.prototype.destroyView = function () {
            this.view.destroy(true);
        };
        // Events
        ProcessState.prototype.subscribeEvents = function () {
            this.observer.onProcessesReset.add(this.onProcessesReset, this);
            this.observer.onProcessUpdated.add(this.onProcessUpdated, this);
        };
        ProcessState.prototype.onProcessesReset = function () {
            var _this = this;
            this.loadModelThen(function () {
                _this.destroyView();
                _this.createView();
            });
        };
        ProcessState.prototype.onProcessUpdated = function (model) {
            if (model.Id === this.processId) {
                this.model = model;
                this.view.onProcessUpdated(this);
            }
        };
        return ProcessState;
    })(Phaser.State);
    Crimenuts.ProcessState = ProcessState;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Size = (function () {
        function Size(width, height) {
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            this.width = width;
            this.height = height;
        }
        return Size;
    })();
    Crimenuts.Size = Size;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ButtonEssence = (function (_super) {
        __extends(ButtonEssence, _super);
        function ButtonEssence(command, width, height) {
            _super.call(this, Crimenuts.app.game);
            this.createButton(command, width, height);
        }
        ButtonEssence.prototype.setCommand = function (command) {
            var width = this.width;
            var height = this.height;
            this.removeAll(true);
            this.createButton(command, width, height);
        };
        // IDecorable
        ButtonEssence.prototype.getSize = function () {
            return new Crimenuts.Size(this.width, this.height);
        };
        ButtonEssence.prototype.getDysplayObject = function () {
            return this;
        };
        ButtonEssence.prototype.getSignals = function () {
            var states = {};
            states[ButtonEssence.signalOver] = this.button.onInputOver;
            states[ButtonEssence.signalOut] = this.button.onInputOut;
            states[ButtonEssence.signalDown] = this.button.onInputDown;
            states[ButtonEssence.signalUp] = this.button.onInputUp;
            return states;
        };
        // Utils
        ButtonEssence.prototype.resize = function (width, height) {
            this.scale.set(width / this.button.texture.width, height / this.button.texture.height);
        };
        ButtonEssence.prototype.createButton = function (command, width, height) {
            this.button = new Phaser.Button(Crimenuts.app.game, 0, 0, Crimenuts.Settings.UserInterface.Button.sprite, command.callback, command.context);
            this.add(this.button);
            this.resize(width, height);
        };
        // ISignalSource
        ButtonEssence.signalOver = "signal.hover";
        ButtonEssence.signalOut = "signal.out";
        ButtonEssence.signalDown = "signal.down";
        ButtonEssence.signalUp = "signal.up";
        return ButtonEssence;
    })(Phaser.Group);
    Crimenuts.ButtonEssence = ButtonEssence;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TextButton = (function (_super) {
        __extends(TextButton, _super);
        function TextButton(command, regularColors, highlightColors, position) {
            _super.call(this, Crimenuts.app.game);
            this.decors = new Array();
            this.createButton(command, regularColors, highlightColors);
            this.position.set(position.x, position.y);
        }
        TextButton.prototype.createButton = function (command, regularColors, highlightColors) {
            var buttonEssence = this.createButtonEssence(command);
            var regularDecor = this.createDecor(buttonEssence, command.name, regularColors);
            var higlightDecor = this.createDecor(buttonEssence, command.name, highlightColors);
            this.initSignalHandlers(buttonEssence, regularDecor, higlightDecor);
            this.showDecor(regularDecor);
        };
        TextButton.prototype.createButtonEssence = function (command) {
            var essence = new Crimenuts.ButtonEssence(command, Crimenuts.Settings.UserInterface.Button.width, Crimenuts.Settings.UserInterface.Button.height);
            this.add(essence);
            return essence;
        };
        TextButton.prototype.createDecor = function (essence, text, colors) {
            var decor = new Crimenuts.RoundedRectangleDecor(new Crimenuts.TextDecor(new Crimenuts.DecorableProxy(essence), text, colors.text, Crimenuts.Settings.UserInterface.Button.fontSize), colors.fill, colors.border, Crimenuts.Settings.UserInterface.Button.lineWidth);
            decor.visible = false;
            this.add(decor);
            this.decors.push(decor);
            return decor;
        };
        TextButton.prototype.initSignalHandlers = function (source, regularDecor, higlightDecor) {
            this.setDecorMapping(source, Crimenuts.ButtonEssence.signalOut, regularDecor);
            this.setDecorMapping(source, Crimenuts.ButtonEssence.signalOver, higlightDecor);
            this.setDecorMapping(source, Crimenuts.ButtonEssence.signalUp, regularDecor);
            this.setDecorMapping(source, Crimenuts.ButtonEssence.signalDown, higlightDecor);
        };
        TextButton.prototype.showDecor = function (decor) {
            this.decors.forEach(function (d) { return d.getDysplayObject().visible = false; });
            decor.getDysplayObject().visible = true;
        };
        TextButton.prototype.setDecorMapping = function (source, signal, decor) {
            var _this = this;
            source.getSignals()[signal].add(function () {
                _this.showDecor(decor);
            });
        };
        return TextButton;
    })(Phaser.Group);
    Crimenuts.TextButton = TextButton;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var WhiteButton = (function (_super) {
        __extends(WhiteButton, _super);
        function WhiteButton(command, position) {
            if (position === void 0) { position = new Phaser.Point(); }
            _super.call(this, command, Crimenuts.Settings.UserInterface.Button.White.Regular.colors, Crimenuts.Settings.UserInterface.Button.White.Highlight.colors, position);
        }
        return WhiteButton;
    })(Crimenuts.TextButton);
    Crimenuts.WhiteButton = WhiteButton;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var BracketDecor = (function (_super) {
        __extends(BracketDecor, _super);
        function BracketDecor(component, lineColor, lineWidth) {
            if (lineColor === void 0) { lineColor = Crimenuts.Settings.Default.Shape.lineColor; }
            if (lineWidth === void 0) { lineWidth = Crimenuts.Settings.Default.Shape.lineWidth; }
            var size = component.getSize();
            _super.call(this, Crimenuts.app.game, 0, 0);
            this.addChild(component.getDysplayObject());
            this.createBrackets(size, lineColor, lineWidth);
            this.component = component;
        }
        BracketDecor.prototype.getSize = function () {
            return this.component.getSize();
        };
        BracketDecor.prototype.getDysplayObject = function () {
            return this;
        };
        BracketDecor.prototype.createBrackets = function (size, lineColor, lineWidth) {
            this.lineStyle(lineWidth, lineColor);
            var lw = lineWidth / 2;
            var l = lw;
            var t = lw;
            var r = size.width;
            var b = size.height;
            var d = Math.min(size.width, size.height);
            this.moveTo(l, 0);
            this.lineTo(l, d);
            this.moveTo(0, t);
            this.lineTo(d, t);
            this.moveTo(r - l, b);
            this.lineTo(r - l, b - d);
            this.moveTo(r, b - l);
            this.lineTo(r - d, b - l);
        };
        return BracketDecor;
    })(Phaser.Graphics);
    Crimenuts.BracketDecor = BracketDecor;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Decorable = (function (_super) {
        __extends(Decorable, _super);
        function Decorable(width, height) {
            _super.call(this, Crimenuts.app.game, 0, 0, Crimenuts.Settings.Assets.Sprites.transparent);
            this.resize(width, height);
        }
        // IDecorable
        Decorable.prototype.getSize = function () {
            return new Crimenuts.Size(this.width, this.height);
        };
        Decorable.prototype.getDysplayObject = function () {
            return this;
        };
        // Utils
        Decorable.prototype.resize = function (width, height) {
            this.scale.set(width / this.texture.width, height / this.texture.height);
        };
        return Decorable;
    })(Phaser.Sprite);
    Crimenuts.Decorable = Decorable;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var DecorableProxy = (function (_super) {
        __extends(DecorableProxy, _super);
        function DecorableProxy(essence) {
            _super.call(this, Crimenuts.app.game);
            this.essence = essence;
        }
        DecorableProxy.prototype.getSize = function () {
            return this.essence.getSize();
        };
        DecorableProxy.prototype.getDysplayObject = function () {
            return this.essence.getDysplayObject();
        };
        return DecorableProxy;
    })(Phaser.Group);
    Crimenuts.DecorableProxy = DecorableProxy;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var RectangleDecor = (function (_super) {
        __extends(RectangleDecor, _super);
        function RectangleDecor(component, fillColor, lineColor, lineWidth) {
            if (fillColor === void 0) { fillColor = Crimenuts.Settings.Default.Shape.fillColor; }
            if (lineColor === void 0) { lineColor = Crimenuts.Settings.Default.Shape.lineColor; }
            if (lineWidth === void 0) { lineWidth = Crimenuts.Settings.Default.Shape.lineWidth; }
            var size = component.getSize();
            _super.call(this, Crimenuts.app.game, 0, 0);
            this.createRectangle(size, fillColor, lineColor, lineWidth);
            this.addChild(component.getDysplayObject());
            this.component = component;
        }
        RectangleDecor.prototype.getSize = function () {
            return this.component.getSize();
        };
        RectangleDecor.prototype.getDysplayObject = function () {
            return this;
        };
        RectangleDecor.prototype.createRectangle = function (size, fillColor, lineColor, lineWidth) {
            this.lineStyle(lineWidth, lineColor);
            this.beginFill(fillColor);
            this.drawRect(0, 0, size.width, size.height);
            this.endFill();
        };
        return RectangleDecor;
    })(Phaser.Graphics);
    Crimenuts.RectangleDecor = RectangleDecor;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var RoundedRectangleDecor = (function (_super) {
        __extends(RoundedRectangleDecor, _super);
        function RoundedRectangleDecor(component, fillColor, lineColor, lineWidth) {
            if (fillColor === void 0) { fillColor = Crimenuts.Settings.Default.Shape.fillColor; }
            if (lineColor === void 0) { lineColor = Crimenuts.Settings.Default.Shape.lineColor; }
            if (lineWidth === void 0) { lineWidth = Crimenuts.Settings.Default.Shape.lineWidth; }
            var size = component.getSize();
            _super.call(this, Crimenuts.app.game, 0, 0);
            this.createRoundedRectangle(size, fillColor, lineColor, lineWidth);
            this.addChild(component.getDysplayObject());
            this.component = component;
        }
        RoundedRectangleDecor.prototype.getSize = function () {
            return this.component.getSize();
        };
        RoundedRectangleDecor.prototype.getDysplayObject = function () {
            return this;
        };
        RoundedRectangleDecor.prototype.createRoundedRectangle = function (size, fillColor, lineColor, lineWidth) {
            var radius = Math.min(size.width, size.height) * Crimenuts.Settings.Default.RoundedRectangle.radiusRate;
            this.lineStyle(lineWidth, lineColor);
            this.beginFill(fillColor);
            this.drawRoundedRect(0, 0, size.width, size.height, radius);
            this.endFill();
        };
        return RoundedRectangleDecor;
    })(Phaser.Graphics);
    Crimenuts.RoundedRectangleDecor = RoundedRectangleDecor;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TextDecor = (function (_super) {
        __extends(TextDecor, _super);
        function TextDecor(component, text, color, fontSize, fontFace) {
            if (color === void 0) { color = Crimenuts.Settings.Default.Font.color; }
            if (fontSize === void 0) { fontSize = Crimenuts.Settings.Default.Font.size; }
            if (fontFace === void 0) { fontFace = Crimenuts.Settings.Default.Font.face; }
            var size = component.getSize();
            _super.call(this, Crimenuts.app.game);
            this.textLabel = new Crimenuts.TextLabel(size.width, size.height, fontFace, fontSize, color, Crimenuts.Settings.BgColor.transparent);
            this.textLabel.setText(text);
            this.textLabel.alignCenter();
            this.add(this.component = component);
            this.add(this.textLabel);
        }
        TextDecor.prototype.getSize = function () {
            return this.component.getSize();
        };
        TextDecor.prototype.getDysplayObject = function () {
            return this;
        };
        return TextDecor;
    })(Phaser.Group);
    Crimenuts.TextDecor = TextDecor;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var DefaultUIFactory = (function () {
        function DefaultUIFactory() {
        }
        DefaultUIFactory.prototype.makeDefaultButton = function (command, position) {
            return new Crimenuts.WhiteButton(command, position);
        };
        DefaultUIFactory.prototype.makeTextLabel = function (width, height, color, bgColor) {
            return new Crimenuts.TextLabel(width, height, Crimenuts.Settings.Default.Font.face, height * Crimenuts.Settings.UserInterface.TextLabel.fontSizeToHeightRate, color, bgColor);
        };
        return DefaultUIFactory;
    })();
    Crimenuts.DefaultUIFactory = DefaultUIFactory;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var PersonPicture = (function (_super) {
        __extends(PersonPicture, _super);
        function PersonPicture(x, y, width, world, name) {
            if (world === void 0) { world = ""; }
            if (name === void 0) { name = ""; }
            this.imageWidth = width;
            _super.call(this, Crimenuts.app.game, x, y, "", 0);
            if (world !== "" && name !== "") {
                this.setPerson(world, name);
            }
        }
        PersonPicture.prototype.setPerson = function (world, name) {
            this.imageKey = Crimenuts.Assets.Sprites.getPersonKey(world, name, this.imageWidth);
            if (this.game.cache.checkImageKey(this.imageKey)) {
                this.onLoadComplete();
            }
            else {
                this.loadAsync(world, name);
                this.setDefaultImage(world, name);
            }
        };
        PersonPicture.prototype.loadAsync = function (world, name) {
            Crimenuts.Assets.Sprites.loadPerson(world, name, this.imageWidth);
            this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.game.load.start();
        };
        PersonPicture.prototype.onLoadComplete = function () {
            this.loadTexture(this.imageKey);
            this.updateScale();
        };
        PersonPicture.prototype.updateScale = function () {
            this.scale.set(this.imageWidth / this.texture.width);
        };
        PersonPicture.prototype.setDefaultImage = function (world, name) {
            var defkey = Crimenuts.Assets.Sprites.getPersonKey(world, name);
            if (this.game.cache.checkImageKey(defkey)) {
                this.loadTexture(defkey);
                this.updateScale();
            }
            else {
                Crimenuts.Assets.Sprites.loadPerson(world, name);
            }
        };
        return PersonPicture;
    })(Phaser.Sprite);
    Crimenuts.PersonPicture = PersonPicture;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Picture = (function (_super) {
        __extends(Picture, _super);
        function Picture(width, name) {
            if (width === void 0) { width = Crimenuts.Settings.Default.Assets.pictureSize; }
            if (name === void 0) { name = Crimenuts.Settings.Assets.Sprites.transparent; }
            _super.call(this, Crimenuts.app.game, 0, 0);
            this.imageWidth = width;
            this.setPicture(name);
        }
        Picture.prototype.setPicture = function (name) {
            this.imageKey = Crimenuts.Assets.Sprites.getPictureKey(name, this.imageWidth);
            if (this.game.cache.checkImageKey(this.imageKey)) {
                this.onLoadComplete();
            }
            else {
                this.setDefaultImage();
                this.loadAsync(name);
            }
        };
        Picture.prototype.loadAsync = function (name) {
            Crimenuts.Assets.Sprites.loadPicture(name, this.imageWidth);
            this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.game.load.start();
        };
        Picture.prototype.onLoadComplete = function () {
            this.loadTexture(this.imageKey);
            this.updateScale();
        };
        Picture.prototype.updateScale = function () {
            this.scale.set(this.imageWidth / this.texture.width);
        };
        Picture.prototype.setDefaultImage = function () {
            this.loadTexture(Crimenuts.Settings.Assets.Sprites.transparent);
            this.updateScale();
        };
        return Picture;
    })(Phaser.Sprite);
    Crimenuts.Picture = Picture;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TextLabel = (function (_super) {
        __extends(TextLabel, _super);
        function TextLabel(width, height, fontFace, fontSize, color, bgcolor) {
            if (fontFace === void 0) { fontFace = Crimenuts.Settings.Default.Font.face; }
            if (fontSize === void 0) { fontSize = Crimenuts.Settings.Default.Font.size; }
            if (color === void 0) { color = Crimenuts.Settings.Default.Font.color; }
            if (bgcolor === void 0) { bgcolor = Crimenuts.Settings.Default.Font.bgColor; }
            _super.call(this, Crimenuts.app.game, 0, 0);
            this.createBackground(width, height, bgcolor);
            this.createLabel(fontFace, fontSize, color);
            this.alignLeft();
            this.alignMiddle();
        }
        TextLabel.prototype.setText = function (text) {
            this.label.text = text;
        };
        TextLabel.prototype.alignLeft = function () {
            this.label.x = (this.fontSize) / 3;
            this.label.anchor.x = 0;
            this.label.align = "left";
        };
        TextLabel.prototype.alignCenter = function () {
            this.label.x = this.width / 2;
            this.label.anchor.x = 0.5;
            this.label.align = "center";
        };
        TextLabel.prototype.alignTop = function () {
            this.label.y = 0;
            this.label.anchor.y = 0;
        };
        TextLabel.prototype.alignMiddle = function () {
            this.label.y = this.height / 2 + 1;
            this.label.anchor.y = 0.5;
        };
        TextLabel.prototype.setFontBold = function () {
            this.label.fontWeight = "bold";
        };
        // utils
        TextLabel.prototype.createLabel = function (fontFace, fontSize, color) {
            this.fontSize = fontSize;
            var magicScale = 2.1;
            fontSize *= magicScale;
            this.addChild(this.label = new Phaser.Text(this.game, 0, 0, "", {
                font: "" + fontSize + "px " + fontFace,
                fill: color,
                align: "left"
            }));
            this.label.scale.set(1 / magicScale, 1 / magicScale);
        };
        TextLabel.prototype.createBackground = function (width, height, bgcolor) {
            var a = bgcolor === Crimenuts.Settings.BgColor.transparent ? 0 : 1;
            this.beginFill(bgcolor, a);
            this.drawRect(0, 0, width, height);
            this.endFill();
        };
        return TextLabel;
    })(Phaser.Graphics);
    Crimenuts.TextLabel = TextLabel;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var BottomBar = (function (_super) {
        __extends(BottomBar, _super);
        function BottomBar() {
            var h1 = 3;
            var h2 = 30;
            var c1 = 0x770000;
            var c2 = 0x005500;
            var wg = Crimenuts.app.game.width;
            var hg = Crimenuts.app.game.height;
            var hb = h1 + h2;
            var x = 0;
            var y = hg - hb;
            _super.call(this, Crimenuts.app.game, x, y);
            this.beginFill(c1);
            this.drawRect(0, 0, wg, h1);
            this.beginFill(c2);
            this.drawRect(0, h1, wg, h2);
            this.addChild(this.text = new Phaser.Text(Crimenuts.app.game, 7, 7, "", {
                font: "18px Arial",
                fill: "#44dd44",
                align: "left"
            }));
        }
        return BottomBar;
    })(Phaser.Graphics);
    Crimenuts.BottomBar = BottomBar;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TopBar = (function (_super) {
        __extends(TopBar, _super);
        function TopBar() {
            var h1 = 30;
            var h2 = 3;
            var c1 = 0x005500;
            var c2 = 0x770000;
            var wg = Crimenuts.app.game.width;
            var x = 0;
            var y = 0;
            _super.call(this, Crimenuts.app.game, x, y);
            this.beginFill(c1);
            this.drawRect(0, 0, wg, h1);
            this.endFill();
            this.beginFill(c2);
            this.drawRect(0, h1, wg, h2);
            this.endFill();
            this.addChild(this.text = new Phaser.Text(Crimenuts.app.game, 7, 7, "", {
                font: "18px Arial",
                fill: "#44dd44",
                align: "left"
            }));
        }
        return TopBar;
    })(Phaser.Graphics);
    Crimenuts.TopBar = TopBar;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Answers = (function (_super) {
                __extends(Answers, _super);
                function Answers(answers, cmdAutoAnswer) {
                    _super.call(this, Crimenuts.app.game);
                    this.position = Crimenuts.Settings.Process.Answers.position.clone();
                    this.createAnswers();
                    this.createButtons(cmdAutoAnswer);
                    this.updateAnswers(answers);
                }
                Answers.prototype.onProcessUpdated = function (director) {
                    var answers = director.getProcessModel().Answers;
                    this.updateAnswers(answers);
                };
                Answers.prototype.createAnswers = function () {
                    this.answerSheet = new Crimenuts.TextLabel(Crimenuts.Settings.Process.Answers.width, Crimenuts.Settings.Process.Answers.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Answers.Answer.fontSize, Crimenuts.Settings.Process.Answers.Answer.Color.regular, Crimenuts.Settings.Process.Answers.bgColor);
                    this.answerSheet.alignMiddle();
                    this.add(this.answerSheet);
                };
                Answers.prototype.updateAnswers = function (answers) {
                    var text = "";
                    var i = 1;
                    var n = answers.length;
                    answers.forEach(function (a) {
                        text += "" + i++ + ".     " + a.AgentName + " — ";
                        text += a.IsValid ? "" + a.SubjectName + " is " : "";
                        text += a.AnswerText;
                        text += i <= n ? "\n" : "";
                    });
                    this.answerSheet.setText(text);
                };
                Answers.prototype.createButtons = function (cmdAutoAnswer) {
                    this.createButton(cmdAutoAnswer, Crimenuts.Settings.Process.Answers.Buttons.Auto.position);
                };
                Answers.prototype.createButton = function (command, position) {
                    this.add(Crimenuts.app.uiFactory.makeDefaultButton(command, position));
                };
                return Answers;
            })(Phaser.Group);
            Process.Answers = Answers;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Display = (function (_super) {
                __extends(Display, _super);
                function Display() {
                    _super.call(this, Crimenuts.app.game);
                    this.add(this.topBar = new Crimenuts.TopBar());
                    this.add(this.bottomBar = new Crimenuts.BottomBar());
                }
                Display.prototype.onProcessUpdated = function (director) {
                    this.setCaseId(director.getProcessModel().CaseId);
                };
                Display.prototype.updateTicks = function (count) {
                    this.setBottomText("[" + count + "]");
                };
                Display.prototype.setBottomText = function (text) {
                    this.bottomBar.text.setText(text);
                };
                Display.prototype.setCaseId = function (caseId) {
                    this.topBar.text.setText("Crime Nuts, Case #" + caseId);
                };
                return Display;
            })(Phaser.Group);
            Process.Display = Display;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var InfoBar = (function (_super) {
                __extends(InfoBar, _super);
                function InfoBar() {
                    _super.call(this, Crimenuts.app.game);
                    this.position = Crimenuts.Settings.Process.Bars.InfoBar.position.clone();
                    this.createTextLabel();
                }
                InfoBar.prototype.onProcessUpdated = function (director) {
                    var process = director.getProcessModel();
                    this.setInfo(process.Today.Day, process.Today.Victim, process.Today.Prisoner, process.Today.ActiveMurdererNum);
                };
                InfoBar.prototype.createTextLabel = function () {
                    this.add(this.textLabel = Crimenuts.app.uiFactory.makeTextLabel(Crimenuts.Settings.Process.Bars.width, Crimenuts.Settings.Process.Bars.height, Crimenuts.Settings.Process.Bars.textColor, Crimenuts.Settings.Process.Bars.bgColor));
                };
                InfoBar.prototype.setInfo = function (day, victim, arrested, murdererNum) {
                    this.textLabel.setText("Day " + day + ": " + victim + " was killed, " + arrested + " arrested, " + murdererNum + " active murderers");
                };
                return InfoBar;
            })(Phaser.Group);
            Process.InfoBar = InfoBar;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
/// <reference path="../../../UserInterface/Buttons/ButtonEssence.ts" />
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var MemberCard = (function (_super) {
                __extends(MemberCard, _super);
                // Ctor
                function MemberCard(director, memberId, x, y, w, h, command, hasNameLabel, answerLevel, hasSign) {
                    if (command === void 0) { command = Crimenuts.Command.nothing; }
                    if (hasNameLabel === void 0) { hasNameLabel = true; }
                    if (answerLevel === void 0) { answerLevel = 1; }
                    if (hasSign === void 0) { hasSign = false; }
                    _super.call(this, Crimenuts.app.game);
                    this.answer = null;
                    this.spotEllipse = new PIXI.Rectangle();
                    this.shadeRect = new PIXI.Rectangle();
                    this.answerCode = 1 /* Unknown */;
                    this.director = director;
                    this.position.set(x, y);
                    var member = this.getMemberModel(memberId);
                    this.createNameLabel(member.Name, w, h, hasNameLabel);
                    this.createSpot(w, h);
                    this.createAnswer(answerLevel, w, h, command);
                    this.createPicture(member.World, member.Name, w, h);
                    this.createSign(w, h, hasSign);
                    this.createShade();
                    this.createButton(command, w, h);
                    this.createFrame();
                    this.setMember(memberId);
                }
                // IMemberCard
                MemberCard.prototype.setMember = function (memberId) {
                    this.memberId = memberId;
                    var member = this.getMemberModel(memberId);
                    this.updatePicture(member.World, member.Name);
                    this.updateName(member.Name);
                    this.updateAnswer(memberId);
                    this.updateShade(memberId);
                    this.updateSpot(memberId);
                    this.updateSign(memberId);
                };
                MemberCard.prototype.setCommand = function (command) {
                    this.button.visible = true;
                    this.button.setCommand(command);
                };
                MemberCard.prototype.getAnswerCard = function () {
                    return this.answer;
                };
                MemberCard.prototype.getMemberId = function () {
                    return this.memberId;
                };
                // Overrides
                MemberCard.prototype.update = function () {
                    _super.prototype.update.call(this);
                    //this.updateFrame();
                };
                // Create
                MemberCard.prototype.createSign = function (width, height, hasSign) {
                    if (!hasSign) {
                        return;
                    }
                    var ks = Crimenuts.Settings.Process.Members.Card.Sign.sizeRate;
                    var kx = Crimenuts.Settings.Process.Members.Card.Sign.xRate;
                    var ky = Crimenuts.Settings.Process.Members.Card.Sign.yRate;
                    var s = width * ks;
                    this.sign = new Crimenuts.Picture(s);
                    this.sign.anchor.set(0.5, 0.5);
                    this.sign.x = width * kx;
                    this.sign.y = height * ky;
                    this.add(this.sign);
                };
                MemberCard.prototype.createSpot = function (width, height) {
                    this.spot = new Phaser.Graphics(Crimenuts.app.game, 0, 0);
                    this.spotEllipse.width = width / 2;
                    this.spotEllipse.height = this.spotEllipse.width * Crimenuts.Settings.Process.Members.Card.Spot.heightRate;
                    this.spotEllipse.x = width / 2;
                    this.spotEllipse.y = height - this.spotEllipse.height - Crimenuts.Settings.Process.Members.Card.Name.height;
                    this.setSpotColor(0);
                    this.add(this.spot);
                };
                MemberCard.prototype.createAnswer = function (level, w, h, command) {
                    if (level < 1)
                        return;
                    var k = Crimenuts.Settings.Process.Members.Card.Answer.sizeRate;
                    var wk = Crimenuts.Settings.Process.Members.Card.Answer.xRate;
                    var hk = Crimenuts.Settings.Process.Members.Card.Answer.yRate;
                    var kk = Math.pow(k, level);
                    var mx = w * wk;
                    var my = h * hk;
                    var mw = w * kk;
                    var mh = h * kk;
                    this.answer = new MemberCard(this.director, 0, mx, my, mw, mh, command, false, level - 1, true);
                    this.answer.visible = true;
                    this.answer.picture.tint = Crimenuts.Settings.Process.Members.Card.Answer.tintColor;
                    this.add(this.answer);
                };
                MemberCard.prototype.createPicture = function (world, name, w, h) {
                    var nh = Crimenuts.Settings.Process.Members.Card.Name.height;
                    var dx = this.spot.height / 2 * (1 - Crimenuts.Settings.Process.Members.Card.Spot.footShiftRate);
                    var pw = w - dx;
                    var ph = h - nh - dx;
                    var sz = Math.min(pw, ph);
                    this.picture = new Crimenuts.PersonPicture(0, 0, sz, world, name);
                    this.picture.anchor.set(0.5, 1);
                    this.picture.position.x = w / 2;
                    this.picture.position.y = ph;
                    this.add(this.picture);
                };
                MemberCard.prototype.createNameLabel = function (name, width, height, hasNameLabel) {
                    if (!hasNameLabel) {
                        return;
                    }
                    this.nameLabel = new Crimenuts.TextLabel(width, Crimenuts.Settings.Process.Members.Card.Name.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Members.Card.Name.fontSize, Crimenuts.Settings.Process.Members.Card.Name.color, Crimenuts.Settings.Process.Members.Card.Name.bgColor);
                    this.nameLabel.setText(name);
                    this.nameLabel.alignCenter();
                    this.nameLabel.position.set(0, height - this.nameLabel.height);
                    this.add(this.nameLabel);
                };
                MemberCard.prototype.createButton = function (command, w, h) {
                    h -= this.nameLabel == null ? Crimenuts.Settings.Process.Members.Card.Name.height : 0;
                    this.button = new Crimenuts.ButtonEssence(command, w, h);
                    if (command === Crimenuts.Command.nothing) {
                        this.button.visible = false;
                    }
                    this.add(this.button);
                };
                MemberCard.prototype.createFrame = function () {
                    this.frame = new Phaser.Graphics(Crimenuts.app.game, 0, 0);
                    this.add(this.frame);
                };
                MemberCard.prototype.createShade = function () {
                    this.shade = new Phaser.Graphics(Crimenuts.app.game, 0, 0);
                    this.add(this.shade);
                };
                // Set
                MemberCard.prototype.setSign = function (rel) {
                    var pict = Crimenuts.Settings.Process.Members.Card.Sign.picture[Crimenuts.RelationCode[rel]];
                    this.sign.setPicture(pict);
                };
                MemberCard.prototype.setShade = function (shade) {
                    this.shadeRect = this.getLocalBounds();
                    var color = 0x000000;
                    this.shade.clear();
                    this.shade.lineStyle(0);
                    this.shade.beginFill(color, shade);
                    this.shade.drawRect(this.shadeRect.x, this.shadeRect.y, this.shadeRect.width, this.shadeRect.height);
                    this.shade.endFill();
                };
                MemberCard.prototype.setSpotColor = function (color) {
                    this.spot.clear();
                    this.spot.beginFill(color);
                    this.spot.drawEllipse(this.spotEllipse.x, this.spotEllipse.y, this.spotEllipse.width, this.spotEllipse.height);
                    this.spot.endFill();
                };
                //Update
                MemberCard.prototype.updateSign = function (memberId) {
                    if (this.answer == null)
                        return;
                    if (this.answer.sign == null)
                        return;
                    var model = this.getMemberModel(memberId);
                    if (model.TodayAnswer.IsValid) {
                        this.answer.sign.visible = true;
                        this.answer.setSign(Crimenuts.RelationCode[model.TodayAnswer.SubjectRelation]);
                    }
                    else {
                        this.answer.sign.visible = false;
                    }
                };
                MemberCard.prototype.updatePicture = function (world, name) {
                    this.picture.setPerson(world, name);
                };
                MemberCard.prototype.updateSpot = function (memberId) {
                    var color = Crimenuts.Settings.Process.Members.Card.Spot.color[Crimenuts.AnswerCode[this.answerCode]];
                    this.setSpotColor(color);
                };
                MemberCard.prototype.updateAnswer = function (memberId) {
                    if (this.answer == null)
                        return;
                    var model = this.getMemberModel(memberId);
                    if (model.TodayAnswer.IsValid) {
                        this.answer.answerCode = Crimenuts.AnswerCode[model.TodayAnswer.AnswerCode];
                        this.answer.setMember(model.TodayAnswer.SubjectId);
                        this.answer.visible = true;
                    }
                    else {
                        this.answer.visible = false;
                        this.answer.answerCode = 1 /* Unknown */;
                    }
                };
                MemberCard.prototype.updateShade = function (memberId) {
                    var model = this.getMemberModel(memberId);
                    if (model.IsActive) {
                        this.setShade(0);
                    }
                    else {
                        this.setShade(Crimenuts.Settings.Process.Members.Card.inaciveShade);
                    }
                };
                MemberCard.prototype.updateFrame = function () {
                    this.frame.clear();
                    var bounds = this.getLocalBounds();
                    this.frame.lineStyle(1, 0x444444);
                    this.frame.drawRect(bounds.x, bounds.y, bounds.width, bounds.height);
                };
                MemberCard.prototype.updateName = function (name) {
                    if (this.nameLabel != null) {
                        this.nameLabel.setText(name);
                    }
                };
                // Model
                MemberCard.prototype.getMemberModel = function (memberId) {
                    return this.director.getProcessModel().Members[memberId];
                };
                return MemberCard;
            })(Phaser.Group);
            Process.MemberCard = MemberCard;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
/// <reference path="../../../Commands/MemberDialogCommand.ts" />
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Members = (function (_super) {
                __extends(Members, _super);
                function Members(director) {
                    _super.call(this, Crimenuts.app.game);
                    this.cards = new Array();
                    this.position = Crimenuts.Settings.Process.Members.position.clone();
                    this.createMembers(director);
                }
                Members.prototype.onProcessUpdated = function (director) {
                    var process = this.director.getProcessModel();
                    for (var i in process.Members) {
                        this.cards[i].setMember(i);
                    }
                };
                Members.prototype.createMembers = function (director) {
                    this.director = director;
                    var w = Crimenuts.Settings.Process.Members.Card.width;
                    var h = Crimenuts.Settings.Process.Members.Card.height;
                    var process = director.getProcessModel();
                    for (var i in process.Members) {
                        var p = this.calcPersonCardPosition(i, w, h);
                        var card = new Process.MemberCard(director, i, p.x, p.y, w, h, new Crimenuts.MemberDialogCommand(i));
                        this.add(card);
                        this.cards.push(card);
                    }
                };
                Members.prototype.calcPersonCardPosition = function (i, w, h) {
                    var n = Crimenuts.Settings.Process.Members.numInRow;
                    var x = (i % n) * w * Crimenuts.Settings.Process.Members.spanHorRate;
                    var y = Math.floor(i / n) * h * Crimenuts.Settings.Process.Members.spanVerRate;
                    return new Phaser.Point(x, y);
                };
                return Members;
            })(Phaser.Group);
            Process.Members = Members;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
//# sourceMappingURL=typescript.output.js.map