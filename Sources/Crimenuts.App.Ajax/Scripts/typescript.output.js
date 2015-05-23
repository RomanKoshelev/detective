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
    var ServerAdapter = (function () {
        function ServerAdapter() {
            // --------------------------------------------------------[]
            // Server
            this.server = $.connection.gameHub.server;
            // --------------------------------------------------------[]
            // Client
            this.onSightPositionHinted = new Phaser.Signal();
            this.onCellMoved = new Phaser.Signal();
            this.onSightMoved = new Phaser.Signal();
            this.onStarted = new Phaser.Signal();
            this.onFoodAdded = new Phaser.Signal();
            this.onFoodRemoved = new Phaser.Signal();
            this.onFoodsUpdated = new Phaser.Signal();
            this.onHomesUpdated = new Phaser.Signal();
            this.onSessionUpdated = new Phaser.Signal();
            this.onTickCountUpdated = new Phaser.Signal();
            this.client = $.connection.gameHub.client;
            this.init();
        }
        ServerAdapter.prototype.hintSightPosition = function (id, position) {
            return this.server.hintSightPosition(id, position);
        };
        ServerAdapter.prototype.moveCell = function (id, position) {
            return this.server.moveCell(id, position);
        };
        ServerAdapter.prototype.moveSight = function (id, position) {
            return this.server.moveSight(id, position);
        };
        ServerAdapter.prototype.getPlayerId = function () {
            return this.server.getPlayerId();
        };
        ServerAdapter.prototype.getWorldBounds = function () {
            return this.server.getWorldBounds();
        };
        ServerAdapter.prototype.getSession = function () {
            return this.server.getSession();
        };
        ServerAdapter.prototype.update = function () {
            return this.server.update();
        };
        ServerAdapter.prototype.resetSession = function () {
            return this.server.resetSession();
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
            this.client.sightPositionHinted = function (id, position) {
                _this.sightPositionHinted(id, position);
            };
            this.client.cellMoved = function (id, position) {
                _this.cellMoved(id, position);
            };
            this.client.sightMoved = function (id, position) {
                _this.sightMoved(id, position);
            };
            this.client.foodAdded = function (food) {
                _this.foodAdded(food);
            };
            this.client.foodRemoved = function (id) {
                _this.foodRemoved(id);
            };
            this.client.foodsUpdated = function (models) {
                _this.foodsUpdated(models);
            };
            this.client.homesUpdated = function (models) {
                _this.homesUpdated(models);
            };
            this.client.tickCountUpdated = function (count) {
                _this.tickCountUpdated(count);
            };
            this.client.sessionUpdated = function (model) {
                _this.sessionUpdated(model);
            };
        };
        ServerAdapter.prototype.sightPositionHinted = function (id, position) {
            this.onSightPositionHinted.dispatch(id, position);
        };
        ServerAdapter.prototype.cellMoved = function (id, position) {
            this.onCellMoved.dispatch(id, position);
        };
        ServerAdapter.prototype.sightMoved = function (id, position) {
            this.onSightMoved.dispatch(id, position);
        };
        ServerAdapter.prototype.foodAdded = function (foodModel) {
            this.onFoodAdded.dispatch(foodModel);
        };
        ServerAdapter.prototype.tickCountUpdated = function (count) {
            this.onTickCountUpdated.dispatch(count);
        };
        ServerAdapter.prototype.foodRemoved = function (id) {
            this.onFoodRemoved.dispatch(id);
        };
        ServerAdapter.prototype.foodsUpdated = function (models) {
            this.onFoodsUpdated.dispatch(models);
        };
        ServerAdapter.prototype.homesUpdated = function (models) {
            this.onHomesUpdated.dispatch(models);
        };
        ServerAdapter.prototype.sessionUpdated = function (model) {
            this.onSessionUpdated.dispatch(model);
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
    var Size = (function () {
        function Size() {
        }
        return Size;
    })();
    Crimenuts.Size = Size;
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
            server.getSession().done(function (model) {
                _this.fromModel(model);
            });
            server.onSessionUpdated.add(this.onSessionUpdated, this);
        }
        ProcessView.prototype.fromModel = function (model) {
            this.id = model.Id;
            this.serverUpdateInterval = model.UpdateInterval;
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
            this.items.add(new Crimenuts.BottomBar(game));
        }
        return UserInterfaceView;
    })();
    Crimenuts.UserInterfaceView = UserInterfaceView;
})(Crimenuts || (Crimenuts = {}));
//# sourceMappingURL=typescript.output.js.map