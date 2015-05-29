var Crimenuts;
(function (Crimenuts) {
    var App = (function () {
        function App() {
            this.server = new Crimenuts.ServerAdapter();
            this.server.onStarted.addOnce(this.init, this);
            this.server.onTickCountUpdated.add(this.onTickCountUpdated, this);
        }
        App.prototype.onGameCreate = function () {
            this.game.state.add("Process", Crimenuts.ProcessController, true);
        };
        App.prototype.init = function () {
            var size = this.getGameScreenSize();
            this.createGame(size.width, size.height);
        };
        App.prototype.createGame = function (width, height) {
            this.game = new Phaser.Game(width, height, Phaser.AUTO, "crimenuts-playground", { create: this.onGameCreate });
        };
        App.prototype.onTickCountUpdated = function (count) {
            this.tickCount = count;
        };
        App.prototype.getGameScreenSize = function () {
            return {
                width: 720,
                height: 820
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
            Sprites.getPersonKey = function (world, person, size) {
                return "sprite-person-" + world + "-" + person + "-" + size;
            };
            Sprites.getPersonUrl = function (world, person, size) {
                return "/Image/Person?world=" + world + "&name=" + person + "&width=" + size + "&height=" + size;
            };
            Sprites.loadPerson = function (world, person, size) {
                Crimenuts.app.game.load.image(Sprites.getPersonKey(world, person, size), Sprites.getPersonUrl(world, person, size));
            };
            Sprites.path = "/Game/Client/Assets/Sprites";
            return Sprites;
        })();
        Assets.Sprites = Sprites;
    })(Assets = Crimenuts.Assets || (Crimenuts.Assets = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Settings;
    (function (Settings) {
        var Default;
        (function (Default) {
            var Font;
            (function (Font) {
                Font.face = "Arial";
                Font.size = 12;
                Font.color = "#AAAAAA";
                Font.bgColor = 0x000000;
            })(Font = Default.Font || (Default.Font = {}));
            var Button;
            (function (Button) {
                Button.width = 100;
                Button.height = 30;
                Button.key = null;
            })(Button = Default.Button || (Default.Button = {}));
        })(Default = Settings.Default || (Settings.Default = {}));
        var BgColor;
        (function (BgColor) {
            BgColor.black = 0x000000;
            BgColor.wite = 0xFFFFFF;
            BgColor.transparent = -1;
        })(BgColor = Settings.BgColor || (Settings.BgColor = {}));
        var Process;
        (function (Process) {
            Process.bgColor = "#000000";
            var Members;
            (function (Members) {
                Members.position = new Phaser.Point(25, 90);
                Members.numInRow = 6;
                var Member;
                (function (Member) {
                    Member.width = 95;
                    Member.height = 120;
                    var Name;
                    (function (Name) {
                        Name.height = 16;
                        Name.fontSize = 10;
                        Name.color = "#AAAAAA";
                        Name.bgColor = 0x222222;
                    })(Name = Member.Name || (Member.Name = {}));
                })(Member = Members.Member || (Members.Member = {}));
            })(Members = Process.Members || (Process.Members = {}));
            var Answers;
            (function (Answers) {
                Answers.position = new Phaser.Point(10, 405);
                Answers.width = 700;
                Answers.height = 200;
                Answers.bgColor = 0x111111;
                var Answer;
                (function (Answer) {
                    Answer.fontSize = 16;
                    var Color;
                    (function (Color) {
                        Color.regular = "#777777";
                    })(Color = Answer.Color || (Answer.Color = {}));
                })(Answer = Answers.Answer || (Answers.Answer = {}));
            })(Answers = Process.Answers || (Process.Answers = {}));
            var Bars;
            (function (Bars) {
                Bars.textColor = "#000000";
                Bars.bgColor = 0x777777;
                var InfoBar;
                (function (InfoBar) {
                    InfoBar.position = new Phaser.Point(10, 50);
                    InfoBar.width = 700;
                    InfoBar.height = 25;
                    InfoBar.fontSize = 16;
                    InfoBar.textColor = Bars.textColor;
                    InfoBar.bgColor = Bars.bgColor;
                })(InfoBar = Bars.InfoBar || (Bars.InfoBar = {}));
                var StateBar;
                (function (StateBar) {
                    StateBar.position = new Phaser.Point(10, 375);
                    StateBar.width = 700;
                    StateBar.height = 25;
                    StateBar.fontSize = 16;
                    StateBar.textColor = Bars.textColor;
                    StateBar.bgColor = Bars.bgColor;
                })(StateBar = Bars.StateBar || (Bars.StateBar = {}));
            })(Bars = Process.Bars || (Process.Bars = {}));
        })(Process = Settings.Process || (Settings.Process = {}));
    })(Settings = Crimenuts.Settings || (Crimenuts.Settings = {}));
})(Crimenuts || (Crimenuts = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var ProcessView = (function (_super) {
                __extends(ProcessView, _super);
                function ProcessView(game, model) {
                    _super.call(this, game);
                    this.parts = new Array();
                    this.game.stage.backgroundColor = Crimenuts.Settings.Process.bgColor;
                    this.createParts(model);
                    this.updateParts(model);
                }
                ProcessView.prototype.updateModel = function (model) {
                    this.updateParts(model);
                };
                ProcessView.prototype.updateTickCount = function (count) {
                    this.ticks.updateTicks(count);
                };
                ProcessView.prototype.createParts = function (model) {
                    var _this = this;
                    this.addPart(this.ticks = new Process.Display(this.game));
                    this.addPart(new Process.StateBar(this.game, Crimenuts.Settings.Process.Bars.StateBar.position));
                    this.addPart(new Process.InfoBar(this.game, Crimenuts.Settings.Process.Bars.InfoBar.position));
                    this.addPart(new Process.Members(this.game, Crimenuts.Settings.Process.Members.position, model));
                    this.addPart(new Process.Answers(this.game, Crimenuts.Settings.Process.Answers.position, model));
                    this.add(new Crimenuts.TextDecor(new Crimenuts.Button(this.game, function () { return _this.clickedIt(); }, this), "Text button"));
                };
                ProcessView.prototype.addPart = function (part) {
                    this.parts.push(part);
                    this.add(part);
                };
                ProcessView.prototype.clickedIt = function () {
                    this.scale.set(0.5, 0.5);
                };
                ProcessView.prototype.updateParts = function (model) {
                    this.parts.forEach(function (p) { return p.updateModel(model); });
                };
                return ProcessView;
            })(Phaser.Group);
            Process.ProcessView = ProcessView;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
/// <reference path="../Views/Process/ProcessView.ts"/>
var Crimenuts;
(function (Crimenuts) {
    var ProcessView = Crimenuts.View.Process.ProcessView;
    var ProcessController = (function (_super) {
        __extends(ProcessController, _super);
        function ProcessController() {
            _super.apply(this, arguments);
        }
        ProcessController.prototype.create = function () {
            var _this = this;
            Crimenuts.app.server.getProcess().done(function (model) {
                _this.model = model;
                _this.view = new ProcessView(_this.game, model);
                _this.subscribeEvents(Crimenuts.app.server);
            });
        };
        ProcessController.prototype.subscribeEvents = function (server) {
            server.onProcessUpdated.add(this.onProcessUpdated, this);
            server.onTickCountUpdated.add(this.onTickCountUpdated, this);
        };
        ProcessController.prototype.onProcessUpdated = function (model) {
            this.view.updateModel(this.model = model);
        };
        ProcessController.prototype.onTickCountUpdated = function (count) {
            this.view.updateTickCount(count);
        };
        return ProcessController;
    })(Phaser.State);
    Crimenuts.ProcessController = ProcessController;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ServerAdapter = (function () {
        function ServerAdapter() {
            // --------------------------------------------------------[]
            // Server
            this.server = $.connection.gameHub.server;
            // --------------------------------------------------------[]
            // Client
            this.onStarted = new Phaser.Signal();
            this.onProcessUpdated = new Phaser.Signal();
            this.onTickCountUpdated = new Phaser.Signal();
            this.client = $.connection.gameHub.client;
            this.init();
        }
        ServerAdapter.prototype.getPlayerId = function () {
            return this.server.getPlayerId();
        };
        ServerAdapter.prototype.getProcess = function () {
            return this.server.getProcess("11");
        };
        ServerAdapter.prototype.update = function () {
            return this.server.update();
        };
        ServerAdapter.prototype.init = function () {
            this.setupClientCallbacks();
            this.startHub();
        };
        ServerAdapter.prototype.startHub = function () {
            var _this = this;
            $.connection.hub.start().done(function () {
                _this.onStarted.dispatch();
            });
        };
        ServerAdapter.prototype.setupClientCallbacks = function () {
            var _this = this;
            this.client.tickCountUpdated = function (count) {
                _this.tickCountUpdated(count);
            };
            this.client.processUpdated = function (model) {
                _this.processUpdated(model);
            };
        };
        ServerAdapter.prototype.tickCountUpdated = function (count) {
            this.onTickCountUpdated.dispatch(count);
        };
        ServerAdapter.prototype.processUpdated = function (model) {
            this.onProcessUpdated.dispatch(model);
        };
        return ServerAdapter;
    })();
    Crimenuts.ServerAdapter = ServerAdapter;
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
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(game, callback, callbackContext, x, y, width, height) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = Crimenuts.Settings.Default.Button.width; }
            if (height === void 0) { height = Crimenuts.Settings.Default.Button.height; }
            _super.call(this, game, x, y, Crimenuts.Settings.Default.Button.key, callback, callbackContext);
            this.resize(width, height);
        }
        Button.prototype.getGame = function () {
            return this.game;
        };
        Button.prototype.resize = function (width, height) {
            this.scale.set(width / this.texture.width, height / this.texture.height);
        };
        Button.prototype.getSize = function () {
            return new Crimenuts.Size(this.width, this.height);
        };
        return Button;
    })(Phaser.Button);
    Crimenuts.Button = Button;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TextDecor = (function (_super) {
        __extends(TextDecor, _super);
        function TextDecor(subj, text, fontFace, fontSize, color) {
            if (fontFace === void 0) { fontFace = Crimenuts.Settings.Default.Font.face; }
            if (fontSize === void 0) { fontSize = Crimenuts.Settings.Default.Font.size; }
            if (color === void 0) { color = Crimenuts.Settings.Default.Font.color; }
            var game = subj.getGame();
            var size = subj.getSize();
            _super.call(this, game);
            this.textLabel = new Crimenuts.TextLabel(game, size.width, size.height, fontFace, fontSize, color, Crimenuts.Settings.BgColor.transparent);
            this.textLabel.setText(text);
            this.textLabel.alignCenter();
            this.add(this.textLabel);
        }
        return TextDecor;
    })(Phaser.Group);
    Crimenuts.TextDecor = TextDecor;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TextLabel = (function (_super) {
        __extends(TextLabel, _super);
        function TextLabel(game, width, height, fontFace, fontSize, color, bgcolor) {
            if (fontFace === void 0) { fontFace = Crimenuts.Settings.Default.Font.face; }
            if (fontSize === void 0) { fontSize = Crimenuts.Settings.Default.Font.size; }
            if (color === void 0) { color = Crimenuts.Settings.Default.Font.color; }
            if (bgcolor === void 0) { bgcolor = Crimenuts.Settings.Default.Font.bgColor; }
            _super.call(this, game, 0, 0);
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
            this.label.y = Math.ceil(this.height / 2 + this.label.height / 10);
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
            if (bgcolor === Crimenuts.Settings.BgColor.transparent) {
                return;
            }
            this.beginFill(bgcolor);
            this.drawRect(0, 0, width, height);
            this.endFill();
        };
        return TextLabel;
    })(Phaser.Graphics);
    Crimenuts.TextLabel = TextLabel;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var PersonPicture = (function (_super) {
        __extends(PersonPicture, _super);
        function PersonPicture(game, world, name, x, y, width) {
            _super.call(this, game, x, y, "", 0);
            var loader = this.getLoader(world, name, width);
            this.imageKey = Crimenuts.Assets.Sprites.getPersonKey(world, name, width);
            loader.onLoadComplete.addOnce(this.onLoadComplete, this);
            loader.start();
        }
        PersonPicture.prototype.getLoader = function (world, name, width) {
            var loader = new Phaser.Loader(this.game);
            loader.image(Crimenuts.Assets.Sprites.getPersonKey(world, name, width), Crimenuts.Assets.Sprites.getPersonUrl(world, name, width));
            return loader;
        };
        PersonPicture.prototype.onLoadComplete = function () {
            this.loadTexture(this.imageKey, 0);
        };
        return PersonPicture;
    })(Phaser.Image);
    Crimenuts.PersonPicture = PersonPicture;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Answers = (function (_super) {
                __extends(Answers, _super);
                function Answers(game, position, model) {
                    _super.call(this, game);
                    this.position = position;
                    this.createAnswers();
                    this.updateAnswers(model.Answers);
                }
                Answers.prototype.updateModel = function (model) {
                    this.updateAnswers(model.Answers);
                };
                Answers.prototype.createAnswers = function () {
                    this.answerSheet = new Crimenuts.TextLabel(this.game, Crimenuts.Settings.Process.Answers.width, Crimenuts.Settings.Process.Answers.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Answers.Answer.fontSize, Crimenuts.Settings.Process.Answers.Answer.Color.regular, Crimenuts.Settings.Process.Answers.bgColor);
                    this.answerSheet.alignMiddle();
                    this.add(this.answerSheet);
                };
                Answers.prototype.updateAnswers = function (answers) {
                    var text = "";
                    var i = 1;
                    var n = answers.length;
                    answers.forEach(function (a) {
                        text += "" + i++ + ".     " + a.Agent + " — ";
                        text += a.IsValid ? "" + a.Subject + " is " : "";
                        text += a.Message;
                        text += i <= n ? "\n" : "";
                    });
                    this.answerSheet.setText(text);
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
                function Display(game) {
                    _super.call(this, game);
                    this.add(this.topBar = new Crimenuts.TopBar(game));
                    this.add(this.bottomBar = new Crimenuts.BottomBar(game));
                }
                Display.prototype.updateModel = function (model) {
                    this.setCaseId(model.CaseId);
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
                function InfoBar(game, position) {
                    _super.call(this, game);
                    this.position = position;
                    this.createTextLabel(game);
                }
                InfoBar.prototype.updateModel = function (model) {
                    this.setInfo(model.Today.Day, model.Today.Victim, model.Today.Prisoner, model.Today.ActiveMurdererNum);
                };
                InfoBar.prototype.createTextLabel = function (game) {
                    this.add(this.textLabel = new Crimenuts.TextLabel(game, Crimenuts.Settings.Process.Bars.InfoBar.width, Crimenuts.Settings.Process.Bars.InfoBar.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Bars.InfoBar.fontSize, Crimenuts.Settings.Process.Bars.InfoBar.textColor, Crimenuts.Settings.Process.Bars.InfoBar.bgColor));
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
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Member = (function (_super) {
                __extends(Member, _super);
                function Member(game, world, member, x, y, w, h) {
                    _super.call(this, game);
                    this.position.set(x, y);
                    var name = member;
                    this.createPicture(game, world, name, w, h);
                    this.createNameBox(game, name, w, h);
                }
                Member.prototype.createPicture = function (game, world, name, w, h) {
                    this.add(this.picture = new Crimenuts.PersonPicture(game, world, name, 0, 0, w));
                    this.picture.anchor.set(0, 1);
                    this.picture.position.y = h - Member.nameHeight;
                };
                Member.prototype.createNameBox = function (game, name, width, height) {
                    this.add(this.nameLabel = new Crimenuts.TextLabel(game, width, Member.nameHeight, Crimenuts.Settings.Default.Font.face, Member.nameFontSize, Member.nameColor, Member.nameBgColor));
                    this.nameLabel.setText(name);
                    this.nameLabel.alignCenter();
                    this.nameLabel.position.set(0, height - Member.nameHeight);
                };
                Member.nameHeight = Crimenuts.Settings.Process.Members.Member.Name.height;
                Member.nameFontSize = Crimenuts.Settings.Process.Members.Member.Name.fontSize;
                Member.nameColor = Crimenuts.Settings.Process.Members.Member.Name.color;
                Member.nameBgColor = Crimenuts.Settings.Process.Members.Member.Name.bgColor;
                return Member;
            })(Phaser.Group);
            Process.Member = Member;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Members = (function (_super) {
                __extends(Members, _super);
                function Members(game, position, model) {
                    _super.call(this, game);
                    this.position = position;
                    this.createMembers(model.World, model.Members);
                }
                Members.prototype.updateModel = function (model) {
                };
                Members.prototype.createMembers = function (world, members) {
                    var w = Members.memberWidth;
                    var h = Members.memberHeight;
                    for (var i in members) {
                        var p = this.calcPersonCardPosition(i, w, h);
                        var name = members[i];
                        this.add(new Process.Member(this.game, world, name, p.x, p.y, w, h));
                    }
                };
                Members.prototype.calcPersonCardPosition = function (i, w, h) {
                    var n = Members.memberNumInRow;
                    var x = (i % n) * w * 1.2;
                    var y = Math.floor(i / n) * h * 1.2;
                    return new Phaser.Point(x, y);
                };
                Members.memberWidth = Crimenuts.Settings.Process.Members.Member.width;
                Members.memberHeight = Crimenuts.Settings.Process.Members.Member.height;
                Members.memberNumInRow = Crimenuts.Settings.Process.Members.numInRow;
                return Members;
            })(Phaser.Group);
            Process.Members = Members;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var StateBar = (function (_super) {
                __extends(StateBar, _super);
                function StateBar(game, position) {
                    _super.call(this, game);
                    this.position = position;
                    this.createTextLabel(game);
                }
                StateBar.prototype.updateModel = function (model) {
                    this.setState(model.State);
                };
                StateBar.prototype.createTextLabel = function (game) {
                    this.add(this.textLabel = new Crimenuts.TextLabel(game, Crimenuts.Settings.Process.Bars.StateBar.width, Crimenuts.Settings.Process.Bars.StateBar.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Bars.StateBar.fontSize, Crimenuts.Settings.Process.Bars.StateBar.textColor, Crimenuts.Settings.Process.Bars.StateBar.bgColor));
                };
                StateBar.prototype.setState = function (state) {
                    this.textLabel.setText(state);
                };
                return StateBar;
            })(Phaser.Group);
            Process.StateBar = StateBar;
        })(Process = View.Process || (View.Process = {}));
    })(View = Crimenuts.View || (Crimenuts.View = {}));
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var BottomBar = (function (_super) {
        __extends(BottomBar, _super);
        function BottomBar(game) {
            var h1 = 3;
            var h2 = 30;
            var c1 = 0x770000;
            var c2 = 0x005500;
            var wg = game.width;
            var hg = game.height;
            var hb = h1 + h2;
            var x = 0;
            var y = hg - hb;
            _super.call(this, game, x, y);
            this.beginFill(c1);
            this.drawRect(0, 0, wg, h1);
            this.beginFill(c2);
            this.drawRect(0, h1, wg, h2);
            this.addChild(this.text = new Phaser.Text(game, 7, 7, "", {
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
        function TopBar(game) {
            var h1 = 30;
            var h2 = 3;
            var c1 = 0x005500;
            var c2 = 0x770000;
            var wg = game.width;
            var x = 0;
            var y = 0;
            _super.call(this, game, x, y);
            this.beginFill(c1);
            this.drawRect(0, 0, wg, h1);
            this.endFill();
            this.beginFill(c2);
            this.drawRect(0, h1, wg, h2);
            this.endFill();
            this.addChild(this.text = new Phaser.Text(game, 7, 7, "", {
                font: "18px Arial",
                fill: "#44dd44",
                align: "left"
            }));
        }
        return TopBar;
    })(Phaser.Graphics);
    Crimenuts.TopBar = TopBar;
})(Crimenuts || (Crimenuts = {}));
//# sourceMappingURL=typescript.output.js.map