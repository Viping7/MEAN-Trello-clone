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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__taskboard_tasks_list_tasks_list_component__ = __webpack_require__("../../../../../src/app/taskboard/tasks-list/tasks-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_board_welcome_board_welcome_board_component__ = __webpack_require__("../../../../../src/app/welcome-board/welcome-board/welcome-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_task_details_service__ = __webpack_require__("../../../../../src/app/services/task-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_edit_task_directive__ = __webpack_require__("../../../../../src/app/directives/edit-task.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__taskboard_task_item_task_item_component__ = __webpack_require__("../../../../../src/app/taskboard/task-item/task-item.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__common_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__taskboard_tasks_list_tasks_list_component__["a" /* TasksListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__welcome_board_welcome_board_welcome_board_component__["a" /* WelcomeBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__directives_edit_task_directive__["a" /* EditTaskDirective */],
            __WEBPACK_IMPORTED_MODULE_16__taskboard_task_item_task_item_component__["a" /* TaskItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* routes */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dnd__["a" /* DndModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* SortableModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_task_details_service__["a" /* TaskDetailsService */], __WEBPACK_IMPORTED_MODULE_14__services_board_service__["a" /* BoardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
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
        $(document).ready(function () {
            $('.edit-list-name').click(function (event) {
                $('.edit-list-name').removeClass('form-control').attr('readonly');
                $(this).addClass('form-control').removeAttr('readonly');
                event.stopPropagation();
            });
            $('body').click(function (event) {
                $('.edit-list-name').removeClass('form-control').attr('readonly');
            });
            $('.add-card').click(function () {
                $('.new-card').hide();
                $(this).prev().show();
            });
        });
        /*  let parentNode=this.render.parentNode(this.el.nativeElement);
          let siblings=this.render.nextSibling(parentNode);
          console.log(siblings.children);
          this.render.listen(this.el.nativeElement, 'click', (event) => {
                  this.render.addClass(this.el.nativeElement,"form-control");
               //   this.render.removeClass(siblings.children,"form-control");
                  this.render.removeAttribute(this.el.nativeElement,"readonly");
                  event.stopPropagation();
                  });
                  this.render.listen('body', 'click', (event) => {
                  this.render.removeClass(this.el.nativeElement,"form-control");
                  this.render.setAttribute(this.el.nativeElement,"readonly","","");
      
                  });*/
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Renderer2 */]) === "function" && _b || Object])
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
    TaskDetailsService.prototype.getTasks = function (listname) {
        return this.http.get('/tasks/getTasks/' + listname);
    };
    TaskDetailsService.prototype.addTask = function (taskname, listname) {
        var task = {
            task_name: taskname
        };
        return this.http.post('/tasks/create/' + listname, task);
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

/***/ "../../../../../src/app/taskboard/task-item/task-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  task-item works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/taskboard/task-item/task-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/taskboard/task-item/task-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskItemComponent = (function () {
    function TaskItemComponent() {
    }
    TaskItemComponent.prototype.ngOnInit = function () {
    };
    return TaskItemComponent;
}());
TaskItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-task-item',
        template: __webpack_require__("../../../../../src/app/taskboard/task-item/task-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/taskboard/task-item/task-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TaskItemComponent);

//# sourceMappingURL=task-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/taskboard/tasks-list/tasks-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-wrapper task-list-container\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h3 class=\"board-name\">{{boardName}}</h3>\r\n\r\n                <div class=\"list-card\" *ngFor='let task of newTasksList;let i = index'>\r\n                    <input type=\"text\" [(ngModel)]='task.list_name' readonly class='edit-list-name' (change)='updateListName(task._id,task.list_name)' appEditTask [ngClass]='{\"form-control\":false}'>\r\n                    <span *ngIf='updateError'>{{updateErrorMsg}}</span>\r\n                    <div class=\"btn-group actions list-actions\" dropdown>\r\n                        <button dropdownToggle type=\"button\" class=\"dropdown-toggle\">\r\n   ...\r\n  </button>\r\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)='showCreateTasks=true' href='javascript:;'>Add card</a></li>\r\n                            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"javascript:;\" (click)='deleteList(tasks.board_id,task._id)'>Delete List</a></li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <template #itemTemplate let-item=\"item\" let-index=\"index\">\r\n                    \t\t\t\t\t<h4>{{item.value.task_name}}</h4>\r\n                </template>\r\n                    <bs-sortable [(ngModel)]=\"task.tasks\" [itemTemplate]=\"itemTemplate\" itemClass=\"task-item sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\" placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\" (onChange)=\"updateTaskOrder(task.tasks)\"></bs-sortable>\r\n                    <!--\t<div class=\"task-item\" *ngFor='let taskitem of task.tasks;let index=index;trackBy:trackByIndex' >\r\n\t\t\t\t\t<h4>{{taskitem.task_name}}</h4>\r\n\t\t\t\t\t<div class=\"edit-task\">\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"taskitem.name\" class='form-control'>\r\n\t\t\t\t\t\t<button class=\"btn btn-default green\" >Save</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"taskitem.name=taskitemOldname\">Cancel</button>\r\n\t\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>-->\r\n                    <div class=\"task-item new-card\" >\r\n                        <div class=\"edit-task\">\r\n                            <textarea class='form-control' [(ngModel)]='taskName'></textarea>\r\n                            <button class=\"btn btn-default green\" (click)='addCard(taskName,task._id)'>Save</button>\r\n                            <div class=\"clear\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <a href='javascript:;' class=\"add-card\" appEditTask>Add a card</a>\r\n                </div>\r\n                <div class=\"list-card create-list-card\" [ngClass]=\"{'create-open':showCreateLists}\">\r\n                    <div (click)='showCreateLists=true'><a href='javascript:;'>Create a new list..</a></div>\r\n                    <div class='create-list' *ngIf='showCreateLists'>\r\n                        <form (submit)='createList(listName,tasks.board_id)'>\r\n                            <input type=\"text\" [(ngModel)]='listName' name=\"listname\" class=\"form-control\">\r\n                            <span *ngIf='updateError'>{{updateErrorMsg}}</span>\r\n                            <button type=\"submit\" class=\"btn btn-default green\">Save</button>\r\n                            <button type=\"button\" class=\"btn btn-default\" (click)='hideCreateList()'>Cancel</button>\r\n                            <div class=\"clear\"></div>\r\n                        </form>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/taskboard/tasks-list/tasks-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-list-container {\n  background: rgba(17, 103, 77, 0.9);\n  min-height: 100vh; }\n  .task-list-container .board-name {\n    color: #fff;\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 0px; }\n\n.list-card {\n  margin-top: 20px;\n  background: #e2e4e6;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 20px;\n  width: 280px;\n  padding: 10px;\n  border-radius: 3px; }\n  .list-card > input[type=text] {\n    float: left;\n    font-size: 16px;\n    margin-top: 0px;\n    font-weight: 600;\n    border: none;\n    background: none;\n    margin-bottom: 15px;\n    cursor: pointer;\n    text-transform: capitalize;\n    color: #333 !important; }\n    .list-card > input[type=text].form-control {\n      background: #fff;\n      border-color: #ccc;\n      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1) !important;\n      width: 92%; }\n  .list-card .list-actions {\n    float: right; }\n  .list-card .task-item {\n    background: #fff;\n    padding: 2px 15px 15px 10px;\n    border-radius: 3px;\n    margin-bottom: 8px;\n    position: relative; }\n    .list-card .task-item input[type='text'], .list-card .task-item h4 {\n      font-size: 14px;\n      border: none;\n      margin-top: 5px; }\n    .list-card .task-item .form-control {\n      border: 1px solid #eee !important;\n      box-shadow: none; }\n    .list-card .task-item:hover .edit {\n      display: block; }\n    .list-card .task-item .edit {\n      cursor: pointer;\n      display: none;\n      position: absolute;\n      right: 10px;\n      top: 0px; }\n      .list-card .task-item .edit img {\n        width: 10px; }\n    .list-card .task-item .edit-task {\n      display: none; }\n    .list-card .task-item.new-card {\n      padding: 10px;\n      display: none;\n      background: rgba(255, 255, 255, 0.64);\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }\n      .list-card .task-item.new-card .edit-task {\n        display: block; }\n        .list-card .task-item.new-card .edit-task textarea {\n          height: 70px;\n          resize: none;\n          border: 1px solid rgba(51, 51, 51, 0.16) !important; }\n  .list-card a {\n    color: #666;\n    font-size: 14px;\n    text-decoration: none; }\n  .list-card.create-list-card {\n    background: rgba(255, 255, 255, 0.12); }\n    .list-card.create-list-card a {\n      color: rgba(255, 255, 255, 0.48); }\n    .list-card.create-list-card .form-control:focus {\n      border: none;\n      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1) !important; }\n    .list-card.create-list-card.create-open {\n      background: #e2e4e6; }\n      .list-card.create-list-card.create-open a {\n        color: #666; }\n\n.dnd-sortable-drag {\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  opacity: 0.7;\n  border: 1px dashed #000; }\n", ""]);

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
        this.newTasksList = [];
        this.taskCard = [];
        this.itemStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
    }
    TasksListComponent.prototype.showLists = function () {
        var _this = this;
        this.boardService.getCurrentBoard(this.taskDetails.listId).subscribe(function (data) {
            if (data) {
                _this.boardName = data['board_name'];
                _this.taskDetails.getListDetails(_this.taskDetails.listUrl).subscribe(function (data) {
                    _this.tasks = data;
                    _this.tasksList = _this.tasks['lists'];
                    _this.newTasksList = [];
                    _this.tasksList.forEach(function (val) {
                        _this.taskDetails.getTasks(val._id).subscribe(function (data) {
                            // console.log(data['task'])
                            if (data['task']) {
                                val.tasks = data['task']['tasks'];
                            }
                            _this.newTasksList.push(val);
                            console.log(_this.newTasksList);
                        });
                    });
                    /* */
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
    TasksListComponent.prototype.updateTaskOrder = function (newt) {
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
                _this.updateError = false;
            }
            else {
                _this.updateError = true;
                _this.updateErrorMsg = "List with the same name already exists";
                console.log(data);
            }
        });
    };
    TasksListComponent.prototype.updateListName = function (list_id, list_name) {
        var _this = this;
        this.taskDetails.updateListName(list_id, list_name).subscribe(function (data) {
            if (!data['success']) {
                _this.updateError = true;
                _this.updateErrorMsg = "List with the same name already exists";
                console.log(data);
            }
            else {
                _this.updateError = false;
            }
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
    TasksListComponent.prototype.addCard = function (taskname, listname) {
        var _this = this;
        this.taskDetails.addTask(taskname, listname).subscribe(function (data) {
            if (data['success']) {
                _this.showCreateTasks = false;
                _this.taskName = '';
                _this.showLists();
            }
        });
    };
    return TasksListComponent;
}());
TasksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map