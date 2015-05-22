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
            Type[Type["CellBody"] = 0] = "CellBody";
            Type[Type["CellEye"] = 1] = "CellEye";
            Type[Type["Sight"] = 2] = "Sight";
            Type[Type["Food"] = 3] = "Food";
            Type[Type["House"] = 4] = "House";
            Type[Type["Loot"] = 5] = "Loot";
        })(Assets.Type || (Assets.Type = {}));
        var Type = Assets.Type;
        var Sprites = (function () {
            function Sprites() {
            }
            Sprites.getKey = function (suit, assetType) {
                return "" + assetType + "-" + suit;
            };
            Sprites.load = function (suit, assetType) {
                var typeName = Type[assetType].toLowerCase();
                var suitName = Crimenuts.Suit[suit].toLowerCase();
                Crimenuts.app.game.load.image(Sprites.getKey(suit, assetType), "" + Sprites.path + "/" + suitName + "/" + typeName + ".png");
            };
            Sprites.path = "/Game/Client/Assets/Sprites";
            return Sprites;
        })();
        Assets.Sprites = Sprites;
    })(Assets = Crimenuts.Assets || (Crimenuts.Assets = {}));
})(Crimenuts || (Crimenuts = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Crimenuts;
(function (Crimenuts) {
    var Cell = (function (_super) {
        __extends(Cell, _super);
        function Cell(game, model) {
            _super.call(this, game);
            this.init(model);
            Crimenuts.app.server.onCellMoved.add(this.onCellMoved, this);
            Crimenuts.app.server.onSightPositionHinted.add(this.onSightPositionHinted, this);
        }
        Cell.prototype.update = function () {
            _super.prototype.update.call(this);
            this.lookAtSigtPoint();
        };
        Cell.prototype.init = function (model) {
            this.id = model.Base.Id;
            this.sightId = model.SightId;
            this.homeId = model.HomeId;
            this.suit = Crimenuts.Suit[model.Base.Suit];
            this.addChild(this.body = new Crimenuts.SuitSprite(this.game, this.suit, 0 /* CellBody */));
            this.addChild(this.eye = new Crimenuts.SuitSprite(this.game, this.suit, 1 /* CellEye */));
            this.scale.set(model.Base.Size / this.width);
            this.position = Crimenuts.modelToPoint(model.Base.Position);
            this.updateEyeSize();
        };
        Cell.prototype.onCellMoved = function (id, position) {
            if (this.id === id) {
                this.game.add.tween(this).to({ x: position.X, y: position.Y }, 500, Phaser.Easing.Circular.InOut, true);
            }
        };
        Cell.prototype.onSightPositionHinted = function (sightId, position) {
            if (this.sightId === sightId) {
                this.sightPoint = Crimenuts.modelToPoint(position);
            }
        };
        Cell.prototype.lookAtSigtPoint = function () {
            if (this.sightPoint == null)
                return;
            var p = this.sightPoint.clone();
            var l = Phaser.Point.distance(this.position, p);
            var c = this.width;
            var e = c * this.eyeRate;
            var r = c * 0.1;
            var d = (c - e) / 2;
            var m = d / this.scale.x;
            p = Phaser.Point.subtract(p, this.position);
            p = p.normalize();
            p = p.multiply(m, m);
            this.eye.position = l > r ? p : new Phaser.Point();
        };
        Cell.prototype.calcEyeRate = function () {
            return 0.75;
        };
        Cell.prototype.updateEyeSize = function () {
            this.eyeRate = this.calcEyeRate();
            this.eye.scale.set(this.eyeRate);
        };
        return Cell;
    })(Phaser.Group);
    Crimenuts.Cell = Cell;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var SuitSprite = (function (_super) {
        __extends(SuitSprite, _super);
        function SuitSprite(game, suit, assetType, size) {
            if (size === void 0) { size = 0; }
            _super.call(this, game, 0, 0, Crimenuts.Assets.Sprites.getKey(suit, assetType));
            this.suit = suit;
            this.anchor.set(0.5);
            if (size !== 0) {
                this.resize(size);
            }
        }
        SuitSprite.prototype.resize = function (size) {
            this.scale.set(size / this.texture.width);
        };
        return SuitSprite;
    })(Phaser.Sprite);
    Crimenuts.SuitSprite = SuitSprite;
})(Crimenuts || (Crimenuts = {}));
/// <reference path="SuitSprite.ts" />
var Crimenuts;
(function (Crimenuts) {
    var Food = (function (_super) {
        __extends(Food, _super);
        function Food(game, model) {
            _super.call(this, game, Crimenuts.Suit[model.Base.Suit], 3 /* Food */, model.Base.Size);
            this.id = model.Base.Id;
            this.position = Crimenuts.modelToPoint(model.Base.Position);
            this.size = 0;
            this.update();
        }
        Food.prototype.update = function () {
            _super.prototype.update.call(this);
            this.resize(this.size);
        };
        Food.prototype.setSize = function (size, foodUpdateInterval) {
            this.game.add.tween(this).to({ size: size }, foodUpdateInterval, Phaser.Easing.Linear.None, true);
        };
        return Food;
    })(Crimenuts.SuitSprite);
    Crimenuts.Food = Food;
})(Crimenuts || (Crimenuts = {}));
/// <reference path="SuitSprite.ts" />
var Crimenuts;
(function (Crimenuts) {
    var Home = (function (_super) {
        __extends(Home, _super);
        function Home(game, model) {
            _super.call(this, game);
            this.init(model);
        }
        Home.prototype.init = function (model) {
            this.id = model.Base.Id;
            this.suit = Crimenuts.Suit[model.Base.Suit];
            this.size = model.Base.Size;
            this.lootVolume = model.Value;
            this.lootMaxVolume = model.MaxValue;
            this.addChild(this.house = new Crimenuts.SuitSprite(this.game, this.suit, 4 /* House */));
            this.addChild(this.loot = new Crimenuts.SuitSprite(this.game, this.suit, 5 /* Loot */));
            this.scale.set(this.calcScale());
            this.position = Crimenuts.modelToPoint(model.Base.Position);
            this.updateLootPresentation();
        };
        Home.prototype.updateLootPresentation = function () {
            this.loot.scale.set(this.calcLootScale());
            this.loot.position = this.calcLootPosition();
        };
        Home.prototype.calcLootScale = function () {
            var square = this.calcLootRate();
            return Math.sqrt(square);
        };
        Home.prototype.calcLootRate = function () {
            return this.lootVolume / this.lootMaxVolume;
        };
        Home.prototype.calcScale = function () {
            return this.size / this.house.texture.width;
        };
        Home.prototype.calcLootPosition = function () {
            var pos = new Phaser.Point();
            var hh = this.house.height / 2;
            var hw = this.house.width / 2;
            var lh = this.loot.height / 2;
            var lw = this.loot.width / 2;
            switch (this.suit) {
                case 0 /* Blue */:
                    pos.x = -hh + lh;
                    pos.y = hw - lw;
                    break;
                case 1 /* Red */:
                    pos.x = hh - lh;
                    pos.y = -hw + lw;
                    break;
            }
            return pos;
        };
        Home.prototype.setLoot = function (volume) {
            this.lootVolume = volume;
            this.updateLootPresentation();
        };
        return Home;
    })(Phaser.Group);
    Crimenuts.Home = Home;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    (function (Suit) {
        Suit[Suit["Blue"] = 0] = "Blue";
        Suit[Suit["Red"] = 1] = "Red";
    })(Crimenuts.Suit || (Crimenuts.Suit = {}));
    var Suit = Crimenuts.Suit;
    function toSuit(str) {
        return Suit[str];
    }
    Crimenuts.toSuit = toSuit;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    var SessionManager = (function () {
        function SessionManager(game) {
            var _this = this;
            this.game = game;
            Crimenuts.app.server.getSession().done(function (model) {
                _this.fromModel(model);
            });
            Crimenuts.app.server.onSessionUpdated.add(this.onSessionUpdated, this);
        }
        SessionManager.prototype.fromModel = function (model) {
            this.id = model.Id;
            this.serverUpdateInterval = model.UpdateInterval;
        };
        SessionManager.prototype.onSessionUpdated = function (model) {
            this.fromModel(model);
        };
        return SessionManager;
    })();
    Crimenuts.SessionManager = SessionManager;
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
var Crimenuts;
(function (Crimenuts) {
    var ProcessState = (function (_super) {
        __extends(ProcessState, _super);
        function ProcessState() {
            _super.call(this);
        }
        ProcessState.prototype.init = function () {
            this.game.stage.backgroundColor = ProcessState.background;
        };
        ProcessState.prototype.preload = function () {
        };
        ProcessState.prototype.create = function () {
            this.session = new Crimenuts.SessionManager(this.game);
            this.ui = new Crimenuts.UserInterface(this.game);
        };
        ProcessState.prototype.update = function () {
            //this.game.debug.text( `${this.session.id} [${app.tickCount}]`, 10, 100 );
        };
        ProcessState.prototype.preloadSprites = function (suit) {
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
            this.addChild(this.text = new Phaser.Text(game, 7, 7, "Case #1969", {
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
    var UserInterface = (function () {
        function UserInterface(game) {
            this.items = game.add.group();
            this.items.add(new Crimenuts.TopBar(game));
            this.items.add(new Crimenuts.BottomBar(game));
        }
        return UserInterface;
    })();
    Crimenuts.UserInterface = UserInterface;
})(Crimenuts || (Crimenuts = {}));
var Crimenuts;
(function (Crimenuts) {
    function modelToPoint(model) {
        return new Phaser.Point(model.X, model.Y);
    }
    Crimenuts.modelToPoint = modelToPoint;
})(Crimenuts || (Crimenuts = {}));
//# sourceMappingURL=typescript.output.js.map