webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__taskboard_tasks_list_tasks_list_component__ = __webpack_require__("../../../../../src/app/taskboard/tasks-list/tasks-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__welcome_board_welcome_board_welcome_board_component__ = __webpack_require__("../../../../../src/app/welcome-board/welcome-board/welcome-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_task_details_service__ = __webpack_require__("../../../../../src/app/services/task-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_edit_task_directive__ = __webpack_require__("../../../../../src/app/directives/edit-task.directive.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__common_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__taskboard_tasks_list_tasks_list_component__["a" /* TasksListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__welcome_board_welcome_board_welcome_board_component__["a" /* WelcomeBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__directives_edit_task_directive__["a" /* EditTaskDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_task_details_service__["a" /* TaskDetailsService */], __WEBPACK_IMPORTED_MODULE_13__services_board_service__["a" /* BoardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<div class=\"title\">\r\n\t\t\t\t<a routerLink='/'><h3>Boards</h3></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<h2>Task Manager</h2>\r\n\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t<li><a href='#'>Vipin</a></li>\r\n\t\t</ul>\r\n\t</nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  color: rgba(255, 255, 255, 0.8);\n  min-height: 0px;\n  padding: 5px 5px 5px 5px; }\n  .navbar.navbar-inverse {\n    background: #11674d;\n    border-bottom: none; }\n  .navbar .navbar-header .title {\n    position: relative;\n    z-index: 99;\n    background: rgba(28, 201, 149, 0.4);\n    padding: 8px 13px;\n    border-radius: 3px; }\n    .navbar .navbar-header .title a {\n      color: rgba(255, 255, 255, 0.8);\n      text-decoration: none; }\n    .navbar .navbar-header .title h3 {\n      font-size: 17px;\n      margin: 0px;\n      font-weight: 600; }\n  .navbar .navbar-nav li a {\n    color: rgba(255, 255, 255, 0.8);\n    padding: 5px 20px;\n    font-weight: 600; }\n  .navbar h2 {\n    margin: 0px;\n    position: absolute;\n    width: 100%;\n    margin-top: 5px;\n    text-align: center;\n    font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/common/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/edit-task.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTaskDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditTaskDirective = (function () {
    function EditTaskDirective(el, render) {
        this.el = el;
        this.render = render;
    }
    /*@HostListener('click') endableEdit(){
        this.el.nativeElement.children[0];
    }*/
    EditTaskDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var parentNode = this.render.parentNode(this.el.nativeElement);
        var siblings = this.render.nextSibling(parentNode);
        console.log(siblings.children);
        this.render.listen(this.el.nativeElement, 'click', function (event) {
            _this.render.addClass(_this.el.nativeElement, "form-control");
            //   this.render.removeClass(siblings.children,"form-control");
            _this.render.removeAttribute(_this.el.nativeElement, "readonly");
            event.stopPropagation();
        });
        this.render.listen('body', 'click', function (event) {
            _this.render.removeClass(_this.el.nativeElement, "form-control");
            _this.render.setAttribute(_this.el.nativeElement, "readonly", "", "");
        });
        /*this.render.listen(this.el.nativeElement.children[2].children[1], 'click', (event) => {
            this.render.setStyle(this.el.nativeElement.children[2], "display", "none", null);
            this.render.setStyle(this.el.nativeElement.children[1], "display", "block", null);
            this.render.setStyle(this.el.nativeElement.children[0], "visibility", "visible", null);
        });
        this.render.listen(this.el.nativeElement.children[2].children[2], 'click', (event) => {
            this.render.setStyle(this.el.nativeElement.children[2], "display", "none", null);
            this.render.setStyle(this.el.nativeElement.children[1], "display", "block", null);
            this.render.setStyle(this.el.nativeElement.children[0], "visibility", "visible", null);
        });*/
    };
    return EditTaskDirective;
}());
EditTaskDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({
        selector: '[appEditTask]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Renderer2 */]) === "function" && _b || Object])
], EditTaskDirective);

var _a, _b;
//# sourceMappingURL=edit-task.directive.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskboard_tasks_list_tasks_list_component__ = __webpack_require__("../../../../../src/app/taskboard/tasks-list/tasks-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_board_welcome_board_welcome_board_component__ = __webpack_require__("../../../../../src/app/welcome-board/welcome-board/welcome-board.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__welcome_board_welcome_board_welcome_board_component__["a" /* WelcomeBoardComponent */],
    },
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_0__taskboard_tasks_list_tasks_list_component__["a" /* TasksListComponent */],
    }];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = (function () {
    function BoardService(http) {
        this.http = http;
    }
    BoardService.prototype.getBoards = function () {
        return this.http.get('/boards/getBoards');
    };
    BoardService.prototype.getCurrentBoard = function (board_id) {
        return this.http.get('/boards/getBoard/' + board_id);
    };
    BoardService.prototype.createBoard = function (board_name) {
        var board = {
            board_name: board_name
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpHeaders */]().set('Content-type', 'application/json');
        return this.http.post('boards/createBoard', board, { headers: headers });
    };
    BoardService.prototype.deleteBoard = function (board_id) {
        return this.http.delete('boards/deleteBoard/' + board_id);
    };
    return BoardService;
}());
BoardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], BoardService);

var _a;
//# sourceMappingURL=board.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/task-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskDetailsService = (function () {
    function TaskDetailsService(http) {
        this.http = http;
    }
    TaskDetailsService.prototype.setListUrl = function (id) {
        this.listId = id;
        this.listUrl = 'lists/getList/' + id;
    };
    TaskDetailsService.prototype.getListDetails = function (list_details_url) {
        return this.http.get(list_details_url);
    };
    TaskDetailsService.prototype.createList = function (list_name, board_id) {
        var newlist = {
            list_name: list_name
        };
        return this.http.put('lists/create/' + board_id, newlist);
    };
    TaskDetailsService.prototype.deleteList = function (board_id, list_id) {
        return this.http.put('lists/delete/' + board_id + '/' + list_id, '');
    };
    TaskDetailsService.prototype.updateListName = function (list_id, list_name) {
        var list = {
            list_name: list_name
        };
        return this.http.put('/lists/updateList/' + list_id, list);
    };
    return TaskDetailsService;
}());
TaskDetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], TaskDetailsService);

var _a;
//# sourceMappingURL=task-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/taskboard/tasks-list/tasks-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-wrapper task-list-container\"><div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\" dnd-sortable-container [sortableData]=\"tasksList\">\r\n            <h3 class=\"board-name\">{{boardName}}</h3>\r\n\t\t\t<div class=\"list-card\" *ngFor='let task of tasksList;let i = index' dnd-sortable [sortableIndex]=\"i\">\r\n\t\t\t\t<input type=\"text\" [(ngModel)]='task.list_name' readonly class='dem' (change)='updateListName(task._id,task.list_name)' appEditTask [ngClass]='{\"form-control\":false}' >\r\n                \r\n <div class=\"btn-group actions list-actions\" dropdown>\r\n  <button dropdownToggle type=\"button\" class=\"dropdown-toggle\">\r\n   ...\r\n  </button>\r\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Add card</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"javascript:;\" (click)='deleteList(tasks.board_id,task._id)'>Delete List</a></li>\r\n   \r\n  </ul>\r\n</div>\r\n                <div class=\"clear\"></div>\r\n\t\t\t\t<!--<div class=\"task-item\" *ngFor='let taskitem of task.taskCategory.tasks' appEditTask>\r\n\t\t\t\t\t<span class=\"edit\" endableEdit (click)=\"editTask(taskitem.name)\"><img src='assets/pencil-edit-button.svg'></span>\r\n\t\t\t\t\t<h4>{{taskitem.name}}</h4>\r\n\t\t\t\t\t<div class=\"edit-task\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"taskitem.name\" class='form-control'>\r\n\t\t\t\t\t\t<button class=\"btn btn-default green\" >Save</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"taskitem.name=taskitemOldname\">Cancel</button>\r\n\t\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>-->\r\n\t\t\t\t<div class=\"task-item new-card\" *ngIf='showCreateTasks'>\r\n\t\t\t\t\t<div class=\"edit-task\">\r\n\t\t\t\t\t\t<textarea class='form-control'></textarea>\r\n\t\t\t\t\t\t<button class=\"btn btn-default green\">Save</button>\r\n\t\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<a href='#' (click)='createList()'>Add a card</a>\r\n\t\t\t</div>\r\n            <div class=\"list-card create-list-card\" [ngClass]=\"{'create-open':showCreateLists}\">\r\n                 <div (click)='showCreateLists=true' ><a href='javascript:;' >Create a new list..</a></div>\r\n                <div class='create-list' *ngIf='showCreateLists'>\r\n                    <form (submit)='createList(listName,tasks.board_id)'>\r\n                    <input type=\"text\" [(ngModel)]='listName' name=\"listname\" class=\"form-control\">\r\n                    <button type=\"submit\" class=\"btn btn-default green\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)='hideCreateList()'>Cancel</button>\r\n                    <div class=\"clear\"></div>\r\n                    </form>    \r\n                </div>\r\n               \r\n            </div> \r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n  \r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/taskboard/tasks-list/tasks-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-list-container {\n  background: rgba(17, 103, 77, 0.9);\n  min-height: 100vh; }\n  .task-list-container .board-name {\n    color: #fff;\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 0px; }\n\n.list-card {\n  cursor: move;\n  margin-top: 20px;\n  background: #e2e4e6;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 20px;\n  width: 280px;\n  padding: 10px;\n  border-radius: 3px; }\n  .list-card > input[type=text] {\n    float: left;\n    font-size: 16px;\n    margin-top: 0px;\n    font-weight: 600;\n    border: none;\n    background: none;\n    margin-bottom: 15px;\n    cursor: pointer;\n    color: #333 !important; }\n    .list-card > input[type=text].form-control {\n      background: #fff;\n      border-color: #ccc;\n      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1) !important; }\n  .list-card .list-actions {\n    float: right; }\n  .list-card .task-item {\n    background: #fff;\n    padding: 2px 15px 15px 10px;\n    border-radius: 3px;\n    margin-bottom: 8px;\n    position: relative; }\n    .list-card .task-item input[type='text'], .list-card .task-item h4 {\n      font-size: 14px;\n      border: none;\n      margin-top: 5px; }\n    .list-card .task-item .form-control {\n      border: 1px solid #eee !important;\n      box-shadow: none; }\n    .list-card .task-item:hover .edit {\n      display: block; }\n    .list-card .task-item .edit {\n      cursor: pointer;\n      display: none;\n      position: absolute;\n      right: 10px;\n      top: 0px; }\n      .list-card .task-item .edit img {\n        width: 10px; }\n    .list-card .task-item .edit-task {\n      display: none; }\n    .list-card .task-item.new-card {\n      padding: 10px; }\n      .list-card .task-item.new-card .edit-task {\n        display: block; }\n        .list-card .task-item.new-card .edit-task textarea {\n          height: 70px;\n          resize: none; }\n  .list-card a {\n    color: #666;\n    font-size: 14px;\n    text-decoration: none; }\n  .list-card.create-list-card {\n    background: rgba(255, 255, 255, 0.12); }\n    .list-card.create-list-card a {\n      color: rgba(255, 255, 255, 0.48); }\n    .list-card.create-list-card .form-control:focus {\n      border: none;\n      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1) !important; }\n    .list-card.create-list-card.create-open {\n      background: #e2e4e6; }\n      .list-card.create-list-card.create-open a {\n        color: #666; }\n\n.dnd-sortable-drag {\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  opacity: 0.7;\n  border: 1px dashed #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/taskboard/tasks-list/tasks-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_details_service__ = __webpack_require__("../../../../../src/app/services/task-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksListComponent = (function () {
    function TasksListComponent(taskDetails, boardService, router) {
        this.taskDetails = taskDetails;
        this.boardService = boardService;
        this.router = router;
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.canEdit = false;
    }
    TasksListComponent.prototype.showLists = function () {
        var _this = this;
        this.boardService.getCurrentBoard(this.taskDetails.listId).subscribe(function (data) {
            if (data) {
                _this.boardName = data['board_name'];
                _this.taskDetails.getListDetails(_this.taskDetails.listUrl).subscribe(function (data) {
                    console.log(data);
                    _this.tasks = data;
                    _this.tasksList = _this.tasks['lists'];
                });
            }
        });
    };
    TasksListComponent.prototype.ngOnInit = function () {
        if (this.taskDetails.listId) {
            this.showLists();
        }
        else {
            this.router.navigate(['/']);
        }
    };
    TasksListComponent.prototype.editTask = function (taskitem) {
        this.taskitemOldname = taskitem;
    };
    TasksListComponent.prototype.createList = function (listname, board_id) {
        var _this = this;
        this.taskDetails.createList(listname, board_id).subscribe(function (data) {
            if (data['success']) {
                _this.showLists();
                _this.listName = '';
                _this.showCreateLists = false;
            }
        });
    };
    TasksListComponent.prototype.updateListName = function (list_id, list_name) {
        this.taskDetails.updateListName(list_id, list_name).subscribe(function (data) {
            console.log(data);
        });
    };
    TasksListComponent.prototype.deleteList = function (board_id, list_id) {
        var _this = this;
        console.log(board_id, list_id);
        this.taskDetails.deleteList(board_id, list_id).subscribe(function (data) {
            if (data['success']) {
                _this.showLists();
            }
        });
    };
    ;
    TasksListComponent.prototype.cancelEdit = function (value) {
        value = '';
        return value;
    };
    TasksListComponent.prototype.hideCreateList = function () {
        this.listName = '';
        this.showCreateLists = false;
    };
    return TasksListComponent;
}());
TasksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-tasks-list',
        template: __webpack_require__("../../../../../src/app/taskboard/tasks-list/tasks-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/taskboard/tasks-list/tasks-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_details_service__["a" /* TaskDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_task_details_service__["a" /* TaskDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_board_service__["a" /* BoardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TasksListComponent);

var _a, _b, _c;
//# sourceMappingURL=tasks-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome-board/welcome-board/welcome-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='board-container page-wrapper'><div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h2>Task Boards</h2>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div *ngFor='let board of boards' class=\"board\" (click)='getListDetails(board._id)'>\r\n\t\t\t\t<h3>{{board.board_name}}</h3>\r\n\t\t\t\t<span class=\"close-board\" (click)=\"deleteBoard(board)\"><img src='assets/cancel-music.svg'/></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"board create-board\" >\r\n                <div class='create-board-padding' (click)='showCreateBoard=true'>\r\n\t\t\t\t<h3>Create new board</h3>\r\n\t\t\t\t</div>\r\n                <div class=\"create-board-form\" *ngIf='showCreateBoard'>\r\n\t\t\t\t\t<form (submit)=\"addBoard(boardname)\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Board name\" [(ngModel)]=\"boardname\" name='taskname' class=\"form-control\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button class=\"submit\" class='btn btn-default green\t'>Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class='btn btn-default' (click)='hideCreateBoard()'>Cancel</button>\r\n\t\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/welcome-board/welcome-board/welcome-board.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  font-size: 20px;\n  font-weight: 600; }\n\n.board {\n  position: relative;\n  padding: 10px 15px;\n  background: #11674d;\n  color: #fff;\n  cursor: pointer;\n  width: 250px;\n  height: 100px;\n  display: inline-block;\n  margin: 0px 10px 10px 0px;\n  border-radius: 3px;\n  vertical-align: middle; }\n  .board h3 {\n    margin-top: 0px;\n    font-size: 18px; }\n  .board .close-board {\n    position: absolute;\n    right: 10px;\n    cursor: pointer;\n    display: none;\n    top: 5px; }\n    .board .close-board img {\n      width: 10px; }\n  .board:hover {\n    background: rgba(17, 103, 77, 0.95); }\n    .board:hover .close-board {\n      display: block; }\n  .board.create-board {\n    padding: 0px;\n    background: #eee;\n    color: #333;\n    cursor: pointer; }\n    .board.create-board .create-board-padding {\n      padding: 10px 0px; }\n    .board.create-board h3 {\n      text-align: center;\n      margin: 25px 0px; }\n    .board.create-board .create-board-form {\n      position: absolute;\n      background: #fff;\n      width: 100%;\n      border: 1px solid #eee;\n      padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome-board/welcome-board/welcome-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_details_service__ = __webpack_require__("../../../../../src/app/services/task-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeBoardComponent = (function () {
    function WelcomeBoardComponent(router, taskDetails, boardService) {
        this.router = router;
        this.taskDetails = taskDetails;
        this.boardService = boardService;
    }
    WelcomeBoardComponent.prototype.getBoards = function () {
        var _this = this;
        this.boardService.getBoards().subscribe(function (data) {
            _this.boards = data;
        });
    };
    WelcomeBoardComponent.prototype.ngOnInit = function () {
        this.getBoards();
    };
    WelcomeBoardComponent.prototype.addBoard = function () {
        var _this = this;
        this.showCreateBoard = false;
        if (this.boardname) {
            this.boardService.createBoard(this.boardname).subscribe(function (data) {
                if (data['success']) {
                    _this.getBoards();
                }
            });
        }
        this.boardname = '';
    };
    WelcomeBoardComponent.prototype.deleteBoard = function (board) {
        var boardid = board['_id'];
        var index = this.boards.indexOf(board);
        this.boards.splice(index, index);
        this.boardService.deleteBoard(boardid).subscribe(function (data) {
            if (data['success']) {
            }
        });
    };
    WelcomeBoardComponent.prototype.getListDetails = function (id) {
        this.taskDetails.setListUrl(id);
        this.router.navigate(['/tasks']);
    };
    WelcomeBoardComponent.prototype.hideCreateBoard = function () {
        this.boardname = '';
        this.showCreateBoard = false;
    };
    return WelcomeBoardComponent;
}());
WelcomeBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-welcome-board',
        template: __webpack_require__("../../../../../src/app/welcome-board/welcome-board/welcome-board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome-board/welcome-board/welcome-board.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_details_service__["a" /* TaskDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_task_details_service__["a" /* TaskDetailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_board_service__["a" /* BoardService */]) === "function" && _c || Object])
], WelcomeBoardComponent);

var _a, _b, _c;
//# sourceMappingURL=welcome-board.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map