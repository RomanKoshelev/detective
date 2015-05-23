var Crimenuts;
(function (Crimenuts) {
    var App = (function () {
        function App() {
            this.server = new Crimenuts.ServerAdapter();
            this.server.onStarted.addOnce(this.init, this);
            this.server.onTickCountUpdated.add(this.onTickCountUpdated, this);
        }
        App.prototype.create = function () {
            this.game.state.add("Process", Crimenuts.ProcessState, true);
        };
        App.prototype.init = function () {
            var size = this.getGameScreenSize();
            this.createGame(size.width, size.height);
        };
        App.prototype.createGame = function (width, height) {
            this.game = new Phaser.Game(width, height, Phaser.AUTO, "crimenuts-playground", { create: this.create });
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
        (function (Type) {
            Type[Type["Person"] = 0] = "Person";
            Type[Type["World"] = 1] = "World";
        })(Assets.Type || (Assets.Type = {}));
        var Type = Assets.Type;
        var Sprites = (function () {
            function Sprites() {
            }
            Sprites.getKey = function (assetType) {
                return "" + assetType;
            };
            Sprites.load = function (assetType) {
                var typeName = Type[assetType].toLowerCase();
                Crimenuts.app.game.load.image(Sprites.getKey(assetType), "" + Sprites.path + "/" + typeName + ".png");
            };
            Sprites.path = "/Game/Client/Assets/Sprites";
            return Sprites;
        })();
        Assets.Sprites = Sprites;
    })(Assets = Crimenuts.Assets || (Crimenuts.Assets = {}));
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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Crimenuts;
(function (Crimenuts) {
    var ProcessState = (function (_super) {
        __extends(ProcessState, _super);
        function ProcessState() {
            _super.call(this);
            this.server = Crimenuts.app.server;
        }
        ProcessState.prototype.init = function () {
            this.game.stage.backgroundColor = ProcessState.background;
        };
        ProcessState.prototype.preload = function () {
        };
        ProcessState.prototype.create = function () {
            this.processView = new Crimenuts.ProcessView(this.game, this.server);
            this.userInterfaceView = new Crimenuts.UserInterfaceView(this.game);
        };
        ProcessState.prototype.update = function () {
            //this.game.debug.text( `${this.session.id} [${app.tickCount}]`, 10, 100 );
        };
        ProcessState.background = "#000000";
        return ProcessState;
    })(Phaser.State);
    Crimenuts.ProcessState = ProcessState;
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
            this.addChild(this.text = new Phaser.Text(game, 7, 7, "Case #1969", {
                font: "18px Arial",
                fill: "#44dd44",
                align: "left"
            }));
        }
        BottomBar.prototype.preUpdate = function () {
            this.text.setText("[" + Crimenuts.app.tickCount + "]");
        };
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
            this.addChild(this.text = new Phaser.Text(game, 7, 7, "Crime Nuts Case #1969", {
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
    var ProcessView = (function () {
        function ProcessView(game, server) {
            var _this = this;
            this.game = game;
            server.getProcess().done(function (model) {
                _this.fromModel(model);
            });
            server.onProcessUpdated.add(this.onSessionUpdated, this);
        }
        ProcessView.prototype.fromModel = function (model) {
            this.id = model.Id;
        };
        ProcessView.prototype.onSessionUpdated = function (model) {
            this.fromModel(model);
        };
        return ProcessView;
    })();
    Crimenuts.ProcessView = ProcessView;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var UserInterfaceView = (function () {
        function UserInterfaceView(game) {
            this.items = game.add.group();
            this.items.add(new Crimenuts.TopBar(game));
            this.items.add(this.bottomBar = new Crimenuts.BottomBar(game));
        }
        UserInterfaceView.prototype.setBottomText = function (text) {
            this.bottomBar.text.setText(text);
        };
        return UserInterfaceView;
    })();
    Crimenuts.UserInterfaceView = UserInterfaceView;
})(Crimenuts || (Crimenuts = {}));
//# sourceMappingURL=typescript.output.js.map