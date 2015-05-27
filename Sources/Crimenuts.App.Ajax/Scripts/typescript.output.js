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
            })(Font = Default.Font || (Default.Font = {}));
        })(Default = Settings.Default || (Settings.Default = {}));
        var Process;
        (function (Process) {
            Process.bgColor = "#000000";
            var Members;
            (function (Members) {
                Members.position = new Phaser.Point(25, 90);
                Members.numInRow = 6;
                var Card;
                (function (Card) {
                    Card.width = 95;
                    Card.height = 120;
                    var Name;
                    (function (Name) {
                        Name.height = 16;
                        Name.fontSize = 10;
                        Name.color = "#CCCCCC";
                        Name.bgColor = 0x222222;
                    })(Name = Card.Name || (Card.Name = {}));
                })(Card = Members.Card || (Members.Card = {}));
            })(Members = Process.Members || (Process.Members = {}));
            var StateBar;
            (function (StateBar) {
                StateBar.position = new Phaser.Point(10, 375);
                StateBar.width = 700;
                StateBar.height = 25;
                StateBar.fontSize = 16;
                StateBar.color = "#000000";
                StateBar.bgColor = 0x666666;
            })(StateBar = Process.StateBar || (Process.StateBar = {}));
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
    var ProcessStateBar = (function (_super) {
        __extends(ProcessStateBar, _super);
        function ProcessStateBar(game) {
            _super.call(this, game);
            this.createTextLabel(game);
        }
        ProcessStateBar.prototype.createTextLabel = function (game) {
            this.add(this.textLabel = new Crimenuts.TextLabel(game, Crimenuts.Settings.Process.StateBar.width, Crimenuts.Settings.Process.StateBar.height, Crimenuts.Settings.Process.StateBar.fontSize, Crimenuts.Settings.Process.StateBar.color, Crimenuts.Settings.Process.StateBar.bgColor));
            this.textLabel.setFontBold();
        };
        ProcessStateBar.prototype.setText = function (text) {
            this.textLabel.setText(text);
        };
        return ProcessStateBar;
    })(Phaser.Group);
    Crimenuts.ProcessStateBar = ProcessStateBar;
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
var Crimenuts;
(function (Crimenuts) {
    var MemberCard = (function (_super) {
        __extends(MemberCard, _super);
        function MemberCard(game, world, member, x, y, w, h) {
            _super.call(this, game);
            this.position.set(x, y);
            var name = member;
            this.createPicture(game, world, name, w, h);
            this.createNameBox(game, name, w, h);
        }
        MemberCard.prototype.createPicture = function (game, world, name, w, h) {
            this.add(this.picture = new Crimenuts.PersonPicture(game, world, name, 0, 0, w));
            this.picture.anchor.set(0, 1);
            this.picture.position.y = h - MemberCard.nameHeight;
        };
        MemberCard.prototype.createNameBox = function (game, name, width, height) {
            var w = width;
            var h = MemberCard.nameHeight;
            var fs = MemberCard.nameFontSize;
            this.add(this.nameLabel = new Crimenuts.TextLabel(game, w, h, fs, MemberCard.nameColor, MemberCard.nameBgColor));
            this.nameLabel.setText(name);
            this.nameLabel.alignCenter();
            this.nameLabel.position.set(0, height - h);
        };
        MemberCard.nameHeight = Crimenuts.Settings.Process.Members.Card.Name.height;
        MemberCard.nameFontSize = Crimenuts.Settings.Process.Members.Card.Name.fontSize;
        MemberCard.nameColor = Crimenuts.Settings.Process.Members.Card.Name.color;
        MemberCard.nameBgColor = Crimenuts.Settings.Process.Members.Card.Name.bgColor;
        return MemberCard;
    })(Phaser.Group);
    Crimenuts.MemberCard = MemberCard;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var TextLabel = (function (_super) {
        __extends(TextLabel, _super);
        function TextLabel(game, width, height, fontSize, color, bgcolor, fontFace) {
            if (fontFace === void 0) { fontFace = Crimenuts.Settings.Default.Font.face; }
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
            this.label.y = this.height / 2;
            this.label.y += (this.fontSize) / 5;
            this.label.anchor.y = 0.5;
        };
        TextLabel.prototype.setFontBold = function () {
            this.label.fontWeight = "bold";
        };
        // utils
        TextLabel.prototype.createLabel = function (fontFace, fontSize, color) {
            this.addChild(this.label = new Phaser.Text(this.game, 0, 0, "", {
                font: "" + fontSize + "px " + fontFace,
                fill: color,
                align: "left"
            }));
            this.fontSize = fontSize;
        };
        TextLabel.prototype.createBackground = function (width, height, bgcolor) {
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
    var UserInterface = (function (_super) {
        __extends(UserInterface, _super);
        function UserInterface(game) {
            _super.call(this, game);
            this.add(this.topBar = new Crimenuts.TopBar(game));
            this.add(this.bottomBar = new Crimenuts.BottomBar(game));
        }
        UserInterface.prototype.setBottomText = function (text) {
            this.bottomBar.text.setText(text);
        };
        UserInterface.prototype.setCaseId = function (caseId) {
            this.topBar.text.setText("Crime Nuts Case #" + caseId);
        };
        return UserInterface;
    })(Phaser.Group);
    Crimenuts.UserInterface = UserInterface;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Size = (function () {
        function Size() {
        }
        return Size;
    })();
    Crimenuts.Size = Size;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var Members = (function (_super) {
        __extends(Members, _super);
        function Members(game, world, members) {
            _super.call(this, game);
            this.model = members;
            this.world = world;
            this.createMembers();
        }
        Members.prototype.createMembers = function () {
            var w = Members.memberWidth;
            var h = Members.memberHeight;
            for (var i in this.model) {
                var p = this.calcPersonCardPosition(i, w, h);
                var name = this.model[i];
                this.add(new Crimenuts.MemberCard(this.game, this.world, name, p.x, p.y, w, h));
            }
        };
        Members.prototype.calcPersonCardPosition = function (i, w, h) {
            var n = Members.memberNumInRow;
            var x = (i % n) * w * 1.2;
            var y = Math.floor(i / n) * h * 1.2;
            return new Phaser.Point(x, y);
        };
        Members.memberWidth = Crimenuts.Settings.Process.Members.Card.width;
        Members.memberHeight = Crimenuts.Settings.Process.Members.Card.height;
        Members.memberNumInRow = Crimenuts.Settings.Process.Members.numInRow;
        return Members;
    })(Phaser.Group);
    Crimenuts.Members = Members;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var ProcessState = (function (_super) {
        __extends(ProcessState, _super);
        function ProcessState() {
            _super.call(this);
        }
        ProcessState.prototype.init = function () {
            this.game.stage.backgroundColor = Crimenuts.Settings.Process.bgColor;
        };
        ProcessState.prototype.preload = function () {
        };
        ProcessState.prototype.create = function () {
            var _this = this;
            Crimenuts.app.server.getProcess().done(function (model) {
                _this.model = model;
                _this.createMembers();
                _this.createUi();
                _this.createStateBar();
                _this.subscribeEvents(Crimenuts.app.server);
                _this.updateUi();
            });
        };
        ProcessState.prototype.createStateBar = function () {
            this.stateBar = new Crimenuts.ProcessStateBar(this.game);
            this.stateBar.position = Crimenuts.Settings.Process.StateBar.position;
        };
        ProcessState.prototype.createMembers = function () {
            this.members = new Crimenuts.Members(this.game, this.model.World, this.model.Members);
            this.members.position = Crimenuts.Settings.Process.Members.position;
        };
        ProcessState.prototype.createUi = function () {
            this.ui = new Crimenuts.UserInterface(this.game);
        };
        ProcessState.prototype.updateUi = function () {
            this.ui.setCaseId(this.model.CaseId);
            this.ui.setBottomText("" + this.model.Id + " [" + Crimenuts.app.tickCount + "]");
            this.stateBar.setText(this.model.State);
        };
        // Events
        ProcessState.prototype.subscribeEvents = function (server) {
            server.onProcessUpdated.add(this.onProcessUpdated, this);
            server.onTickCountUpdated.add(this.onTickCountUpdated, this);
        };
        ProcessState.prototype.onTickCountUpdated = function (count) {
            this.tickCount = count;
            this.updateUi();
        };
        ProcessState.prototype.onProcessUpdated = function (model) {
            this.model = model;
            this.updateUi();
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
            this.server.onStarted.addOnce(this.init, this);
            this.server.onTickCountUpdated.add(this.onTickCountUpdated, this);
        }
        App.prototype.onGameCreate = function () {
            this.game.state.add("Process", Crimenuts.ProcessState, true);
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
//# sourceMappingURL=typescript.output.js.map