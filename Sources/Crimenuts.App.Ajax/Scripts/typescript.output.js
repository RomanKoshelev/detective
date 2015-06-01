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
/// <reference path="../UserInterface/Types/ColorSet.ts" />
var Crimenuts;
(function (Crimenuts) {
    var Settings;
    (function (Settings) {
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
                Process.testId = "11";
            })(Process = Default.Process || (Default.Process = {}));
        })(Default = Settings.Default || (Settings.Default = {}));
        var Game;
        (function (Game) {
            Game.width = 720;
            Game.height = 820;
        })(Game = Settings.Game || (Settings.Game = {}));
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
                Button.width = 100;
                Button.height = 35;
                Button.sprite = Assets.Sprites.transparent;
                Button.fontSize = 16;
                Button.fillColor = 0x222222;
                Button.lineColor = 0x888888;
                Button.textColor = "#AAAAAA";
                Button.lineWidth = 1.5;
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
        })(UserInterface = Settings.UserInterface || (Settings.UserInterface = {}));
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
                var Buttons;
                (function (Buttons) {
                    var Auto;
                    (function (Auto) {
                        Auto.position = new Phaser.Point(580, 20);
                    })(Auto = Buttons.Auto || (Buttons.Auto = {}));
                })(Buttons = Answers.Buttons || (Answers.Buttons = {}));
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
var Crimenuts;
(function (Crimenuts) {
    var ProcessManager = (function () {
        function ProcessManager(server, observer) {
            this.server = server;
            this.onProcessUpdated = observer.onProcessUpdated;
            this.onTickCountUpdated = observer.onTickCountUpdated;
            this.onProcessAnswersUpdated = observer.onProcessAnswersUpdated;
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
    var DefaultUIFactory = (function () {
        function DefaultUIFactory() {
        }
        DefaultUIFactory.prototype.makeDefaultButton = function (command, position) {
            return new Crimenuts.WhiteButton(command, position);
        };
        return DefaultUIFactory;
    })();
    Crimenuts.DefaultUIFactory = DefaultUIFactory;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Command = (function () {
        function Command(name, callback, context) {
            if (context === void 0) { context = null; }
            this.name = name;
            this.callback = callback;
            this.context = context;
        }
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
            _super.call(this, command, Crimenuts.Settings.UserInterface.Button.White.Regular.colors, Crimenuts.Settings.UserInterface.Button.White.Highlight.colors, position);
        }
        return WhiteButton;
    })(Crimenuts.TextButton);
    Crimenuts.WhiteButton = WhiteButton;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ButtonEssence = (function (_super) {
        __extends(ButtonEssence, _super);
        function ButtonEssence(command, width, height) {
            if (width === void 0) { width = Crimenuts.Settings.UserInterface.Button.width; }
            if (height === void 0) { height = Crimenuts.Settings.UserInterface.Button.height; }
            _super.call(this, Crimenuts.app.game, 0, 0, Crimenuts.Settings.UserInterface.Button.sprite, command.callback, command.context);
            this.resize(width, height);
        }
        // IDecorable
        ButtonEssence.prototype.getGame = function () {
            return this.game;
        };
        ButtonEssence.prototype.resize = function (width, height) {
            this.scale.set(width / this.texture.width, height / this.texture.height);
        };
        ButtonEssence.prototype.getSize = function () {
            return new Crimenuts.Size(this.width, this.height);
        };
        ButtonEssence.prototype.getDysplayObject = function () {
            return this;
        };
        ButtonEssence.prototype.getSignals = function () {
            var states = {};
            states[ButtonEssence.signalOver] = this.onInputOver;
            states[ButtonEssence.signalOut] = this.onInputOut;
            states[ButtonEssence.signalDown] = this.onInputDown;
            states[ButtonEssence.signalUp] = this.onInputUp;
            return states;
        };
        // ISignalSource
        ButtonEssence.signalOver = "signal.hover";
        ButtonEssence.signalOut = "signal.out";
        ButtonEssence.signalDown = "signal.down";
        ButtonEssence.signalUp = "signal.up";
        return ButtonEssence;
    })(Phaser.Button);
    Crimenuts.ButtonEssence = ButtonEssence;
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
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Answers = (function (_super) {
                __extends(Answers, _super);
                function Answers(position, controller, observer, model, factory) {
                    _super.call(this, Crimenuts.app.game);
                    this.position = position;
                    this.controller = controller;
                    this.createAnswers();
                    this.createButtons(factory);
                    this.updateModel(model);
                    this.subscribe(observer);
                }
                Answers.prototype.updateModel = function (model) {
                    this.processId = model.Id;
                    this.updateAnswers(model.Answers);
                };
                Answers.prototype.createAnswers = function () {
                    this.answerSheet = new Crimenuts.TextLabel(Crimenuts.Settings.Process.Answers.width, Crimenuts.Settings.Process.Answers.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Answers.Answer.fontSize, Crimenuts.Settings.Process.Answers.Answer.Color.regular, Crimenuts.Settings.Process.Answers.bgColor);
                    this.answerSheet.alignMiddle();
                    this.add(this.answerSheet);
                };
                Answers.prototype.cmdAutoAnswer = function () {
                    this.controller.autoAnswer(this.processId);
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
                Answers.prototype.onProcessAnswersUpdated = function (processId, answerModels) {
                    if (processId === this.processId) {
                        this.updateAnswers(answerModels);
                    }
                };
                Answers.prototype.subscribe = function (observer) {
                    observer.onProcessAnswersUpdated.add(this.onProcessAnswersUpdated, this);
                };
                Answers.prototype.createButtons = function (factory) {
                    this.createButton(factory, new Crimenuts.Command("Auto", this.cmdAutoAnswer, this), Crimenuts.Settings.Process.Answers.Buttons.Auto.position);
                };
                Answers.prototype.createButton = function (factory, command, position) {
                    this.add(factory.makeDefaultButton(command, position));
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
            var ProcessView = (function (_super) {
                __extends(ProcessView, _super);
                function ProcessView(game, controller, observer, model, factory) {
                    _super.call(this, game);
                    // Fields
                    this.parts = new Array();
                    this.game.stage.backgroundColor = Crimenuts.Settings.Process.bgColor;
                    this.createParts(controller, observer, model, factory);
                    this.subscribeEvents(observer);
                }
                // Parts Utils
                ProcessView.prototype.createParts = function (controller, observer, model, factory) {
                    this.addPart(this.ticks = new Process.Display());
                    this.addPart(new Process.StateBar(Crimenuts.Settings.Process.Bars.StateBar.position));
                    this.addPart(new Process.InfoBar(Crimenuts.Settings.Process.Bars.InfoBar.position));
                    this.addPart(new Process.Members(Crimenuts.Settings.Process.Members.position, model));
                    this.addPart(new Process.Answers(Crimenuts.Settings.Process.Answers.position, controller, observer, model, factory));
                    this.updateParts(model);
                };
                ProcessView.prototype.addPart = function (part) {
                    this.parts.push(part);
                    this.add(part);
                };
                ProcessView.prototype.updateParts = function (model) {
                    this.parts.forEach(function (p) { return p.updateModel(model); });
                };
                // Events
                ProcessView.prototype.subscribeEvents = function (observer) {
                    observer.onProcessUpdated.add(this.onProcessUpdated, this);
                    observer.onTickCountUpdated.add(this.onTickCountUpdated, this);
                };
                ProcessView.prototype.onProcessUpdated = function (model) {
                    this.updateParts(model);
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
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var InfoBar = (function (_super) {
                __extends(InfoBar, _super);
                function InfoBar(position) {
                    _super.call(this, Crimenuts.app.game);
                    this.position = position;
                    this.createTextLabel();
                }
                InfoBar.prototype.updateModel = function (model) {
                    this.setInfo(model.Today.Day, model.Today.Victim, model.Today.Prisoner, model.Today.ActiveMurdererNum);
                };
                InfoBar.prototype.createTextLabel = function () {
                    this.add(this.textLabel = new Crimenuts.TextLabel(Crimenuts.Settings.Process.Bars.InfoBar.width, Crimenuts.Settings.Process.Bars.InfoBar.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Bars.InfoBar.fontSize, Crimenuts.Settings.Process.Bars.InfoBar.textColor, Crimenuts.Settings.Process.Bars.InfoBar.bgColor));
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
            var StateBar = (function (_super) {
                __extends(StateBar, _super);
                function StateBar(position) {
                    _super.call(this, Crimenuts.app.game);
                    this.position = position;
                    this.createTextLabel();
                }
                StateBar.prototype.updateModel = function (model) {
                    this.setState(model.State);
                };
                StateBar.prototype.createTextLabel = function () {
                    this.add(this.textLabel = new Crimenuts.TextLabel(Crimenuts.Settings.Process.Bars.StateBar.width, Crimenuts.Settings.Process.Bars.StateBar.height, Crimenuts.Settings.Default.Font.face, Crimenuts.Settings.Process.Bars.StateBar.fontSize, Crimenuts.Settings.Process.Bars.StateBar.textColor, Crimenuts.Settings.Process.Bars.StateBar.bgColor));
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
    var PersonPicture = (function (_super) {
        __extends(PersonPicture, _super);
        function PersonPicture(world, name, x, y, width) {
            _super.call(this, Crimenuts.app.game, x, y, "", 0);
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
            var Member = (function (_super) {
                __extends(Member, _super);
                function Member(world, member, x, y, w, h) {
                    _super.call(this, Crimenuts.app.game);
                    this.position.set(x, y);
                    var name = member;
                    this.createPicture(world, name, w, h);
                    this.createNameBox(name, w, h);
                }
                Member.prototype.createPicture = function (world, name, w, h) {
                    this.add(this.picture = new Crimenuts.PersonPicture(world, name, 0, 0, w));
                    this.picture.anchor.set(0, 1);
                    this.picture.position.y = h - Member.nameHeight;
                };
                Member.prototype.createNameBox = function (name, width, height) {
                    this.add(this.nameLabel = new Crimenuts.TextLabel(width, Member.nameHeight, Crimenuts.Settings.Default.Font.face, Member.nameFontSize, Member.nameColor, Member.nameBgColor));
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
    var View;
    (function (View) {
        var Process;
        (function (Process) {
            var Members = (function (_super) {
                __extends(Members, _super);
                function Members(position, model) {
                    _super.call(this, Crimenuts.app.game);
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
                        this.add(new Process.Member(world, name, p.x, p.y, w, h));
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
/// <reference path="../Views/Process/ProcessView.ts" />
/// <reference path="../Managers/ProcessManager.ts" />
var Crimenuts;
(function (Crimenuts) {
    var ProcessView = Crimenuts.View.Process.ProcessView;
    var ProcessState = (function (_super) {
        __extends(ProcessState, _super);
        function ProcessState() {
            _super.apply(this, arguments);
            this.processId = Crimenuts.Settings.Default.Process.testId;
        }
        ProcessState.prototype.preload = function () {
            Crimenuts.Assets.Sprites.load(Crimenuts.Settings.Assets.Sprites.transparent);
        };
        ProcessState.prototype.create = function () {
            this.createManager();
            this.loadModelCreateView();
            this.subscribeEvents();
        };
        ProcessState.prototype.createManager = function () {
            var manager = new Crimenuts.ProcessManager(Crimenuts.app.server, Crimenuts.app.server);
            this.controller = manager;
            this.observer = manager;
        };
        ProcessState.prototype.loadModelCreateView = function (callback) {
            var _this = this;
            if (callback === void 0) { callback = null; }
            this.controller.getProcess(this.processId).done(function (model) {
                _this.model = model;
                if (callback != null)
                    callback();
                _this.createView(model);
            });
        };
        ProcessState.prototype.createView = function (model) {
            this.view = new ProcessView(this.game, this.controller, this.observer, model, Crimenuts.app.uiFactory);
        };
        ProcessState.prototype.subscribeEvents = function () {
            this.observer.onProcessesReset.add(this.onProcessesReset, this);
        };
        ProcessState.prototype.onProcessesReset = function () {
            var _this = this;
            this.loadModelCreateView(function () { return _this.destroyView(); });
        };
        ProcessState.prototype.destroyView = function () {
            this.view.destroy(true);
        };
        return ProcessState;
    })(Phaser.State);
    Crimenuts.ProcessState = ProcessState;
})(Crimenuts || (Crimenuts = {}));
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
    var ServerAdapter = (function () {
        function ServerAdapter() {
            // --------------------------------------------------------[]
            // IServerObserver
            this.onServerStarted = new Phaser.Signal();
            this.onProcessUpdated = new Phaser.Signal();
            this.onTickCountUpdated = new Phaser.Signal();
            this.onProcessAnswersUpdated = new Phaser.Signal();
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
        ServerAdapter.prototype.processAnswersUpdated = function (processId, answerModels) {
            this.onProcessAnswersUpdated.dispatch(processId, answerModels);
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
            this.client.processAnswersUpdated = function (id, answers) {
                _this.processAnswersUpdated(id, answers);
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
//# sourceMappingURL=typescript.output.js.map