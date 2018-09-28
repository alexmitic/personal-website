webpackJsonp([2,4],{

/***/ 287:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 287;


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(301);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(387),
        styles: [__webpack_require__(356)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__center_part_center_part_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quicksort_quicksort_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__learning_learning_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__center_part_center_part_component__["a" /* CenterPartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__quicksort_quicksort_component__["a" /* QuicksortComponent */],
            __WEBPACK_IMPORTED_MODULE_8__learning_learning_component__["a" /* LearningComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* AlertModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterPartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CenterPartComponent = (function () {
    function CenterPartComponent() {
    }
    CenterPartComponent.prototype.ngOnInit = function () {
    };
    return CenterPartComponent;
}());
CenterPartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-center-part',
        template: __webpack_require__(388),
        styles: [__webpack_require__(357)]
    }),
    __metadata("design:paramtypes", [])
], CenterPartComponent);

//# sourceMappingURL=center-part.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearningComponent = (function () {
    // Controls: Up = 0, Down = 1, Left: 2, Right = 3
    function LearningComponent() {
        // Directions
        this.UP = 0;
        this.DOWN = 1;
        this.LEFT = 2;
        this.RIGHT = 3;
        this.printed = false;
        // Initiate game values
        this.currGrid = 0;
        this.success = 0;
        this.toRandom = 1;
        this.LEARNING_RATE = 0.8;
        this.DISCOUNT_FACTOR = 0.5;
        // Initiate colors
        this.GOAL_COLOR = 'green';
        this.PLAYER_COLOR = 'red';
        this.WALL_COLOR = 'black';
        this.DEFAULT_BOX_COLOR = 'white';
        // Initiate dimensions
        this.WIDTH = 25;
        this.HEIGHT = 25;
        // Initiate states
        this.GOAL_GRID = 22;
        // Set rewards
        this.REWARDS = [];
        this.setRewards();
        this.qValues = [];
        for (var i = 0; i < 48; i++) {
            this.qValues[i] = [];
        }
        for (var i = 0; i < 48; i++) {
            for (var j = 0; j < 4; j++) {
                this.qValues[i][j] = 0;
            }
        }
        // Initiate valid directions
        this.VALID_DIRECTIONS = [];
        for (var i = 0; i < 48; i++) {
            if (i === 0) {
                this.VALID_DIRECTIONS[i] = [this.DOWN, this.RIGHT];
            }
            else if (i === 7) {
                this.VALID_DIRECTIONS[i] = [this.DOWN, this.LEFT];
            }
            else if (i === 40) {
                this.VALID_DIRECTIONS[i] = [this.UP, this.RIGHT];
            }
            else if (i === 47) {
                this.VALID_DIRECTIONS[i] = [this.UP, this.LEFT];
            }
            else if (i < 8) {
                this.VALID_DIRECTIONS[i] = [this.DOWN, this.LEFT, this.RIGHT];
            }
            else if (i > 39) {
                this.VALID_DIRECTIONS[i] = [this.UP, this.LEFT, this.RIGHT];
            }
            else if (i % 8 === 0) {
                this.VALID_DIRECTIONS[i] = [this.UP, this.DOWN, this.RIGHT];
            }
            else if ((i - 7) % 8 === 0) {
                this.VALID_DIRECTIONS[i] = [this.UP, this.DOWN, this.LEFT];
            }
            else {
                this.VALID_DIRECTIONS[i] = [this.UP, this.DOWN, this.LEFT, this.RIGHT];
            }
        }
    }
    LearningComponent.prototype.ngOnInit = function () {
    };
    LearningComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.maze.nativeElement;
        this.context = canvas.getContext('2d');
        var ctx = this.context;
        // Initiate goal field
        ctx.fillStyle = this.GOAL_COLOR;
        ctx.fillRect(this.getXGridCord(this.GOAL_GRID), this.getYGridCord(this.GOAL_GRID), this.WIDTH, this.HEIGHT);
        // this.randomizeWalls(2);
        console.log(this.VALID_DIRECTIONS);
        console.log(this.REWARDS);
        this.tick();
    };
    LearningComponent.prototype.tick = function () {
        var _this = this;
        var ctx = this.context;
        var nextGrid;
        var nextDirection = 0;
        var reverseColor;
        if (this.currGrid === this.GOAL_GRID) {
            nextGrid = 0;
            reverseColor = this.GOAL_COLOR;
            this.success++;
            if (this.toRandom > 0) {
                this.toRandom -= 0.02;
            }
        }
        else {
            reverseColor = this.DEFAULT_BOX_COLOR;
            nextDirection = this.getNextDirection();
            nextGrid = this.currGrid + this.stepCorrection(nextDirection);
        }
        if (this.success <= 50) {
            this.updateReward(nextDirection, nextGrid);
            console.log("Updating");
        }
        // Reverse color of current box
        this.fillRect(this.currGrid, reverseColor);
        // Set next gird to draw
        this.currGrid = nextGrid;
        // Draw player
        this.fillRect(this.currGrid, this.PLAYER_COLOR);
        requestAnimationFrame(function () {
            _this.tick();
        });
    };
    LearningComponent.prototype.updateReward = function (nextDirr, nextGrid) {
        var r = this.REWARDS[this.currGrid][nextDirr];
        var max = this.getMaxVal(nextGrid);
        // this.LEARNING_RATE = Math.pow(this.success, -0.1);
        var qTarget;
        if (nextGrid === this.GOAL_GRID) {
            qTarget = r;
        }
        else {
            qTarget = r + this.DISCOUNT_FACTOR * max;
        }
        this.qValues[this.currGrid][nextDirr] += this.LEARNING_RATE * (qTarget - this.qValues[this.currGrid][nextDirr]);
    };
    LearningComponent.prototype.getMaxVal = function (grid) {
        var validDirr = this.VALID_DIRECTIONS[this.currGrid];
        var values = this.qValues[grid];
        var max = values[validDirr[0]];
        for (var i = 1; i < validDirr.length; i++) {
            if (values[validDirr[i]] > max) {
                max = values[i];
            }
        }
        return max;
    };
    LearningComponent.prototype.addWall = function (grid) {
        this.fillRect(grid, this.WALL_COLOR);
        if (grid - 8 >= 0) {
            var index = this.VALID_DIRECTIONS[grid - 8].indexOf(this.DOWN);
            if (index > -1) {
                this.VALID_DIRECTIONS[grid - 8].splice(index, 1);
            }
        }
        if (grid + 8 < 48) {
            var index = this.VALID_DIRECTIONS[grid + 8].indexOf(this.UP);
            if (index > -1) {
                this.VALID_DIRECTIONS[grid + 8].splice(index, 1);
            }
        }
        if (grid - 1 >= 0) {
            var index = this.VALID_DIRECTIONS[grid - 1].indexOf(this.RIGHT);
            if (index > -1) {
                this.VALID_DIRECTIONS[grid - 1].splice(index, 1);
            }
        }
        if (grid + 1 < 48) {
            var index = this.VALID_DIRECTIONS[grid + 1].indexOf(this.LEFT);
            if (index > -1) {
                this.VALID_DIRECTIONS[grid + 1].splice(index, 1);
            }
        }
    };
    LearningComponent.prototype.setRewards = function () {
        for (var i = 0; i < 48; i++) {
            this.REWARDS[i] = [];
        }
        for (var i = 0; i < 48; i++) {
            for (var j = 0; j < 4; j++) {
                this.REWARDS[i][j] = 0;
            }
        }
        // Getting to goal
        if (this.GOAL_GRID - 8 >= 0) {
            this.REWARDS[this.GOAL_GRID - 8][this.DOWN] = 10;
        }
        if (this.GOAL_GRID + 8 < 48) {
            this.REWARDS[this.GOAL_GRID + 8][this.UP] = 10;
        }
        if (this.GOAL_GRID - 1 >= 0) {
            this.REWARDS[this.GOAL_GRID - 1][this.RIGHT] = 10;
        }
        if (this.GOAL_GRID + 1 < 48) {
            this.REWARDS[this.GOAL_GRID + 1][this.LEFT] = 10;
        }
        this.REWARDS[this.GOAL_GRID][this.UP] = 0;
        this.REWARDS[this.GOAL_GRID][this.DOWN] = 0;
        this.REWARDS[this.GOAL_GRID][this.LEFT] = 0;
        this.REWARDS[this.GOAL_GRID][this.RIGHT] = 0;
    };
    LearningComponent.prototype.randomizeWalls = function (numWalls) {
        var grid;
        for (var i = 0; i < numWalls; i++) {
            grid = this.randomNum(49);
            while (grid < 7 || grid % 8 === 0 || (grid - 7) % 8 === 0 || grid > 40 || grid === this.GOAL_GRID) {
                grid = this.randomNum(47);
            }
            this.addWall(grid);
        }
    };
    LearningComponent.prototype.fillRect = function (grid, color) {
        var ctx = this.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.getXGridCord(grid), this.getYGridCord(grid), this.WIDTH, this.HEIGHT);
    };
    LearningComponent.prototype.getXGridCord = function (grid) {
        return this.gridToXpos(grid) * 25;
    };
    LearningComponent.prototype.getYGridCord = function (grid) {
        return this.gridToYpos(grid) * 25;
    };
    LearningComponent.prototype.getNextDirection = function () {
        var validDirr = this.VALID_DIRECTIONS[this.currGrid];
        var values = this.qValues[this.currGrid];
        var index = this.randomNum(validDirr.length - 1);
        var direction = validDirr[index];
        if (Math.random() >= this.toRandom) {
            var max = values[direction];
            for (var i = 0; i < validDirr.length; i++) {
                if (values[validDirr[i]] > max) {
                    max = values[validDirr[i]];
                    direction = validDirr[i];
                }
            }
            console.log("Max");
            return direction;
        }
        else {
            console.log("Random");
            return direction;
        }
    };
    LearningComponent.prototype.gridToYpos = function (grid) {
        var yPos = 0;
        for (var i = 8; i < 49; i += 8) {
            if (grid < i) {
                return yPos;
            }
            yPos += 1;
        }
    };
    LearningComponent.prototype.gridToXpos = function (grid) {
        return grid % 8;
    };
    LearningComponent.prototype.stepCorrection = function (direction) {
        if (direction === this.UP) {
            return -8;
        }
        else if (direction === this.DOWN) {
            return 8;
        }
        else if (direction === this.LEFT) {
            return -1;
        }
        else {
            return 1;
        }
    };
    LearningComponent.prototype.randomNum = function (high) {
        return Math.floor(Math.random() * (high + 1));
    };
    return LearningComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('canvas'),
    __metadata("design:type", Object)
], LearningComponent.prototype, "maze", void 0);
LearningComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-learning',
        template: __webpack_require__(389),
        styles: [__webpack_require__(358)]
    }),
    __metadata("design:paramtypes", [])
], LearningComponent);

//# sourceMappingURL=learning.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuicksortComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuicksortComponent = (function () {
    function QuicksortComponent() {
        this.heights = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.restart = true;
    }
    QuicksortComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext('2d');
        this.tick();
    };
    QuicksortComponent.prototype.tick = function () {
        var _this = this;
        var ctx = this.context;
        ctx.clearRect(0, 0, 300, 225);
        var width = 3;
        ctx.fillStyle = '#000';
        if (this.restart) {
            this.randomHeights();
            for (var i = 0; i < 100; i++) {
                ctx.fillRect(width * i, 225 - this.heights[i], width, this.heights[i]);
            }
            requestAnimationFrame(function () {
                _this.tick();
            });
            this.restart = false;
        }
        else {
            if (this.sorted()) {
                // ctx.fillStyle = '#7FFF00';
                //
                // for (let i = 0; i < 100; i++) {
                //   ctx.fillRect(WIDTH * i, 225 - this.heights[i], WIDTH, this.heights[i]);
                // }
                this.restart = true;
                requestAnimationFrame(function () {
                    _this.tick();
                });
            }
            else {
                for (var i = 0; i <= this.heights.length; i++) {
                    var j = i;
                    while (j > 0 && this.heights[j - 1] > this.heights[j]) {
                        var temp = this.heights[j];
                        this.heights[j] = this.heights[j - 1];
                        this.heights[j - 1] = temp;
                        j = j - 1;
                        break;
                    }
                }
                for (var i = 0; i < 100; i++) {
                    ctx.fillRect(width * i, 225 - this.heights[i], width, this.heights[i]);
                }
                this.wait(55);
                requestAnimationFrame(function () {
                    _this.tick();
                });
            }
        }
    };
    QuicksortComponent.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    QuicksortComponent.prototype.randomHeights = function () {
        for (var i = 0; i < 100; i++) {
            this.heights[i] = this.randomNum();
        }
    };
    QuicksortComponent.prototype.randomNum = function () {
        return Math.floor(Math.random() * (225 - 15 + 1) + 15);
    };
    QuicksortComponent.prototype.sorted = function () {
        for (var i = 0; i < 99; i++) {
            if (!(this.heights[i] <= this.heights[i + 1])) {
                return false;
            }
        }
        return true;
    };
    QuicksortComponent.prototype.swap = function (firstIndex, secondIndex) {
        var temp = this.heights[firstIndex];
        this.heights[firstIndex] = this.heights[secondIndex];
        this.heights[secondIndex] = temp;
    };
    QuicksortComponent.prototype.ngOnInit = function () {
    };
    return QuicksortComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('maze'),
    __metadata("design:type", Object)
], QuicksortComponent.prototype, "myCanvas", void 0);
QuicksortComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-quicksort',
        template: __webpack_require__(390),
        styles: [__webpack_require__(359)]
    }),
    __metadata("design:paramtypes", [])
], QuicksortComponent);

//# sourceMappingURL=quicksort.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".full {\n  height: 100vh;\n  width: 100vw;\n}\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 8em;\n}\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "h5 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2em;\n  margin-top: 3vh;\n}\n\n.btn {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.7em;\n  font-weight: 500;\n\n  color: orangered;\n  background-color: white;\n  border-color: white;\n}\n\n#margin-button {\n  margin-top: 8vh;\n}\n\n#margin-button:hover {\n  transform: scale(1.1);\n}\n\n#links-margin{\n  margin-top: 8vh;\n}\n\n#scale-icon {\n  transform: scale(0.85);\n}\n\n.same-line {\n  display: inline;\n}\n\n#space-icons {\n  margin-right: 3vw;\n  margin-left: 3vw;\n}\n\n#margin-facts {\n  margin-top: 7vh;\n}\n\n#margin-links {\n  margin-top: 3vh;\n}\n\n.color-scale-git:hover {\n  transform: scale(1.15);\n  color: #6E5494;\n}\n\n.color-scale-linkedin:hover {\n  transform: scale(1.15);\n  color: #0077B5;\n}\n\n.color-scale-pdf:hover {\n  transform: scale(1) !important;\n  color: #FF0000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#margin-facts {\n  margin-top: 7vh;\n}\n\nh5 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2em;\n  margin-top: 3vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#box {\n  margin-top: 9vh;\n  margin-left: 5vh;\n  padding-left: 0px;\n  padding-right: 0px;\n  width: 24vw;\n  height: 30vh;\n}\n\n#margin-facts {\n  margin-top: 7vh;\n}\n\nh5 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2em;\n  margin-top: 3vh;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 101,
	"./af.js": 101,
	"./ar": 108,
	"./ar-dz": 102,
	"./ar-dz.js": 102,
	"./ar-kw": 103,
	"./ar-kw.js": 103,
	"./ar-ly": 104,
	"./ar-ly.js": 104,
	"./ar-ma": 105,
	"./ar-ma.js": 105,
	"./ar-sa": 106,
	"./ar-sa.js": 106,
	"./ar-tn": 107,
	"./ar-tn.js": 107,
	"./ar.js": 108,
	"./az": 109,
	"./az.js": 109,
	"./be": 110,
	"./be.js": 110,
	"./bg": 111,
	"./bg.js": 111,
	"./bn": 112,
	"./bn.js": 112,
	"./bo": 113,
	"./bo.js": 113,
	"./br": 114,
	"./br.js": 114,
	"./bs": 115,
	"./bs.js": 115,
	"./ca": 116,
	"./ca.js": 116,
	"./cs": 117,
	"./cs.js": 117,
	"./cv": 118,
	"./cv.js": 118,
	"./cy": 119,
	"./cy.js": 119,
	"./da": 120,
	"./da.js": 120,
	"./de": 123,
	"./de-at": 121,
	"./de-at.js": 121,
	"./de-ch": 122,
	"./de-ch.js": 122,
	"./de.js": 123,
	"./dv": 124,
	"./dv.js": 124,
	"./el": 125,
	"./el.js": 125,
	"./en-au": 126,
	"./en-au.js": 126,
	"./en-ca": 127,
	"./en-ca.js": 127,
	"./en-gb": 128,
	"./en-gb.js": 128,
	"./en-ie": 129,
	"./en-ie.js": 129,
	"./en-nz": 130,
	"./en-nz.js": 130,
	"./eo": 131,
	"./eo.js": 131,
	"./es": 133,
	"./es-do": 132,
	"./es-do.js": 132,
	"./es.js": 133,
	"./et": 134,
	"./et.js": 134,
	"./eu": 135,
	"./eu.js": 135,
	"./fa": 136,
	"./fa.js": 136,
	"./fi": 137,
	"./fi.js": 137,
	"./fo": 138,
	"./fo.js": 138,
	"./fr": 141,
	"./fr-ca": 139,
	"./fr-ca.js": 139,
	"./fr-ch": 140,
	"./fr-ch.js": 140,
	"./fr.js": 141,
	"./fy": 142,
	"./fy.js": 142,
	"./gd": 143,
	"./gd.js": 143,
	"./gl": 144,
	"./gl.js": 144,
	"./gom-latn": 145,
	"./gom-latn.js": 145,
	"./he": 146,
	"./he.js": 146,
	"./hi": 147,
	"./hi.js": 147,
	"./hr": 148,
	"./hr.js": 148,
	"./hu": 149,
	"./hu.js": 149,
	"./hy-am": 150,
	"./hy-am.js": 150,
	"./id": 151,
	"./id.js": 151,
	"./is": 152,
	"./is.js": 152,
	"./it": 153,
	"./it.js": 153,
	"./ja": 154,
	"./ja.js": 154,
	"./jv": 155,
	"./jv.js": 155,
	"./ka": 156,
	"./ka.js": 156,
	"./kk": 157,
	"./kk.js": 157,
	"./km": 158,
	"./km.js": 158,
	"./kn": 159,
	"./kn.js": 159,
	"./ko": 160,
	"./ko.js": 160,
	"./ky": 161,
	"./ky.js": 161,
	"./lb": 162,
	"./lb.js": 162,
	"./lo": 163,
	"./lo.js": 163,
	"./lt": 164,
	"./lt.js": 164,
	"./lv": 165,
	"./lv.js": 165,
	"./me": 166,
	"./me.js": 166,
	"./mi": 167,
	"./mi.js": 167,
	"./mk": 168,
	"./mk.js": 168,
	"./ml": 169,
	"./ml.js": 169,
	"./mr": 170,
	"./mr.js": 170,
	"./ms": 172,
	"./ms-my": 171,
	"./ms-my.js": 171,
	"./ms.js": 172,
	"./my": 173,
	"./my.js": 173,
	"./nb": 174,
	"./nb.js": 174,
	"./ne": 175,
	"./ne.js": 175,
	"./nl": 177,
	"./nl-be": 176,
	"./nl-be.js": 176,
	"./nl.js": 177,
	"./nn": 178,
	"./nn.js": 178,
	"./pa-in": 179,
	"./pa-in.js": 179,
	"./pl": 180,
	"./pl.js": 180,
	"./pt": 182,
	"./pt-br": 181,
	"./pt-br.js": 181,
	"./pt.js": 182,
	"./ro": 183,
	"./ro.js": 183,
	"./ru": 184,
	"./ru.js": 184,
	"./sd": 185,
	"./sd.js": 185,
	"./se": 186,
	"./se.js": 186,
	"./si": 187,
	"./si.js": 187,
	"./sk": 188,
	"./sk.js": 188,
	"./sl": 189,
	"./sl.js": 189,
	"./sq": 190,
	"./sq.js": 190,
	"./sr": 192,
	"./sr-cyrl": 191,
	"./sr-cyrl.js": 191,
	"./sr.js": 192,
	"./ss": 193,
	"./ss.js": 193,
	"./sv": 194,
	"./sv.js": 194,
	"./sw": 195,
	"./sw.js": 195,
	"./ta": 196,
	"./ta.js": 196,
	"./te": 197,
	"./te.js": 197,
	"./tet": 198,
	"./tet.js": 198,
	"./th": 199,
	"./th.js": 199,
	"./tl-ph": 200,
	"./tl-ph.js": 200,
	"./tlh": 201,
	"./tlh.js": 201,
	"./tr": 202,
	"./tr.js": 202,
	"./tzl": 203,
	"./tzl.js": 203,
	"./tzm": 205,
	"./tzm-latn": 204,
	"./tzm-latn.js": 204,
	"./tzm.js": 205,
	"./uk": 206,
	"./uk.js": 206,
	"./ur": 207,
	"./ur.js": 207,
	"./uz": 209,
	"./uz-latn": 208,
	"./uz-latn.js": 208,
	"./uz.js": 209,
	"./vi": 210,
	"./vi.js": 210,
	"./x-pseudo": 211,
	"./x-pseudo.js": 211,
	"./yo": 212,
	"./yo.js": 212,
	"./zh-cn": 213,
	"./zh-cn.js": 213,
	"./zh-hk": 214,
	"./zh-hk.js": 214,
	"./zh-tw": 215,
	"./zh-tw.js": 215
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 364;


/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid full\">\n  <h1 class=\"text-center\">Aleksandar Mitic</h1>\n  <div class=\"row\">\n    <!--<div class=\"col-md-4\">-->\n      <!--<app-quicksort></app-quicksort>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-4\" style=\"border-left: 1px solid grey; border-right: 1px solid grey\">\n      <app-center-part></app-center-part>\n    </div>-->\n    <div class=\"col-md-4\">\n      <app-learning></app-learning>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" id=\"margin-facts\">\n  <h5 class=\"text-center\">Studies CompSci in Sweden.</h5>\n  <h5 class=\"text-center\">Likes to program.</h5>\n  <h5 class=\"text-center\">Loves to talk about cool programingstuff.</h5>\n</div>\n\n<button class=\"btn btn-danger center-block\" id=\"margin-button\">\n  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n  Contact\n</button>\n\n<h5 class=\"text-center\" id=\"links-margin\">Other possibly intersting links.</h5>\n\n<div class=\"text-center\" id=\"margin-links\">\n  <div class=\"same-line\">\n    <i class=\"fa fa-github fa-3x color-scale-git\" aria-hidden=\"true\"> </i>\n  </div>\n  <div class=\"same-line\">\n    <i class=\"fa fa-linkedin-square fa-3x color-scale-linkedin\" id=\"space-icons\" aria-hidden=\"true\"> </i>\n  </div>\n  <div class=\"same-line\">\n    <i class=\"fa fa-file-pdf-o fa-3x color-scale-pdf\" id=\"scale-icon\" aria-hidden=\"true\"> </i>\n  </div>\n</div>\n"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" id=\"margin-facts\">\n  <h5>Machine learning is the thing rigth now.</h5>\n  <h5>So here's a box learning to navigate a maze </h5>\n</div>\n\n<div class=\"container-fluid\" id=\"maze\">\n  <canvas #canvas width=\"200\" height=\"150\" style=\"background:white; margin-top: 16.1vh; margin-left: 12vh; border: 1px solid black\"></canvas>\n</div>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" id=\"margin-facts\">\n  <h5 class=\"text-center\">Algorithms are cool.</h5>\n  <h5 class=\"text-center\">So here's a Quicksort I made.</h5>\n</div>\n\n<div class=\"container-fluid\" id=\"test\">\n  <canvas #myCanvas width=\"300\" height=\"225\" style=\"background:white; margin-top: 5.25vh; margin-left: 5vh\"></canvas>\n</div>\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);


/***/ })

},[444]);
//# sourceMappingURL=main.bundle.js.map