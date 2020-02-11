function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a routerLink=\"/contacts\">Contact</a>\r\n<br/>\r\n<a routerLink=\"/detail\">Detail</a>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>book works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\r\n  <div class = \"header\">\r\n    <ng-content select = \".card-header\"></ng-content>\r\n  </div>\r\n  <div class = \"body\">\r\n    <ng-content select = \".card-body\"></ng-content>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-detail/contact-detail.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-detail/contact-detail.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactDetailContactDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Ten: {{ name }}</p>\n<p>SDT: {{ phoneNumber }}</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactsContactsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let contact of contacts\">\n  <a routerLink=\"/detail\n    /{{ contact.id }}\n    /{{ contact.name }}\n    /{{ contact.phoneNumber }}\">{{ contact.name }}\n  </a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/formbuilder/formbuilder.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formbuilder/formbuilder.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormbuilderFormbuilderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit();\" [formGroup] = \"FormSignUp\">\n  <input placeholder=\"Email\" formControlName = \"email\">\n  <p *ngIf=\"FormSignUp.get('email').invalid && FormSignUp.get('email').touched\">Email is required</p>\n  <br/>\n  <input type = \"password\" placeholder=\"Password\" formControlName = \"password\">\n  <br>\n  <div formGroupName = \"subjects\">\n    <label><input type=\"checkbox\" name=\"Angular\" formControlName =\"angular\">Angular</label>\n    <label><input type=\"checkbox\" name=\"nodejs\" formControlName =\"nodejs\">Nodejs</label>\n    <label><input type=\"checkbox\" name=\"iOS\" formControlName =\"iOS\">iOS</label>\n  </div>\n  <br>\n  <button [disabled] = \"FormSignUp.invalid\">Submit</button>\n</form>\n<code>{{ FormSignUp.controls.email.errors | json }}</code>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/formtemplate/formtemplate.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formtemplate/formtemplate.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormtemplateFormtemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <form (ngSubmit)=\"onSubmit(formSignIn)\"  #formSignIn = \"ngForm\">\r\n  <input placeholder=\"Username\" [(ngModel)] = \"username\" name=\"username\" required>\r\n  <p *ngIf = \"formSignIn.controls.username?.errors?.required\">Username is required</p>\r\n  <br/>\r\n  <input type = \"password\" placeholder=\"Password\" [(ngModel)] = \"password\" name=\"password\">\r\n  <br>\r\n  <button [disabled] = \"formSignIn.invalid\">Submit</button>\r\n</form> -->\r\n\r\n<!-- <form (ngSubmit)=\"onSubmit(formSignIn)\"  #formSignIn = \"ngForm\">\r\n  <input placeholder=\"Username\" ngModel name=\"username\" required>\r\n  <p *ngIf = \"formSignIn.controls.username?.errors?.required\">Username is required</p>\r\n  <br/>\r\n  <input type = \"password\" placeholder=\"Password\" ngModel name=\"password\">\r\n  <br>\r\n  <button [disabled] = \"formSignIn.invalid\">Submit</button>\r\n</form> -->\r\n\r\n<form (ngSubmit)=\"onSubmit(formSignIn)\"  #formSignIn = \"ngForm\">\r\n  <input placeholder=\"Username\" ngModel #txtUserName=\"ngModel\" name=\"username\" required email>\r\n  <p *ngIf = \"txtUserName.touched && txtUserName.errors?.required\">Username is required</p>\r\n  <p *ngIf = \"txtUserName.touched && txtUserName.errors?.email\">Email is invalid</p>\r\n  <br/>\r\n  <input type = \"password\" placeholder=\"Password\" ngModel #txtPassword=\"ngModel\" name=\"password\" minlength=\"6\" pattern=\"[a-z]*\">\r\n  <br>\r\n  <div ngModelGroup=\"listoflearn\">\r\n    <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Angular\">Angular</label>\r\n    <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Nodejs\">Nodejs</label>\r\n    <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"iOS\">iOS</label>\r\n  </div>\r\n  <br>\r\n  <button [disabled] = \"formSignIn.invalid\">Submit</button>\r\n</form>\r\n<p>{{txtPassword.errors | json}}</p>\r\n<p>{{formSignIn.value | json}}</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/learn-pipe/learn-pipe.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/learn-pipe/learn-pipe.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLearnPipeLearnPipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  {{ birthday | date }}<br/>\r\n  {{ address | async }}<br>\r\n  {{ 1.9 | roundNum: true: 10 }}<br/>\r\n  {{ 3.5 | roundNum: false: 1}}\r\n</p>\r\n<!-- More pipe in https://Angular.io/api -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-person/list-person.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-person/list-person.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListPersonListPersonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor = \"let person of arrPeople\">\r\n    <app-person\r\n    [name] = \"person.name\"\r\n    [age] = \"person.age\"\r\n    (removePerson) = \"removePersonByName($event)\"\r\n    >\r\n  </app-person>\r\n\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nestedformgroup/nestedformgroup.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nestedformgroup/nestedformgroup.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNestedformgroupNestedformgroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit();\" [formGroup] = \"FormSignUp\">\n  <input placeholder=\"Email\" formControlName = \"email\">\n  <br/>\n  <input type = \"password\" placeholder=\"Password\" formControlName = \"password\">\n  <br>\n  <div formGroupName = \"subjects\">\n    <label><input type=\"checkbox\" name=\"Angular\" formControlName =\"angular\">Angular</label>\n    <label><input type=\"checkbox\" name=\"nodejs\" formControlName =\"nodejs\">Nodejs</label>\n    <label><input type=\"checkbox\" name=\"iOS\" formControlName =\"iOS\">iOS</label>\n  </div>\n  <br>\n  <button>Submit</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagenotfoundPagenotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pagenotfound works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonPersonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Ten: {{ name }}</h3>\r\n<p>Tuoi: {{ age }}</p>\r\n<button (click) = \"removeByClick()\"> Delete</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reactiveform/reactiveform.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reactiveform/reactiveform.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReactiveformReactiveformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit();\" [formGroup] = \"FormSignUp\">\n  <input placeholder=\"Email\" formControlName = \"email\">\n  <br/>\n  <input type = \"password\" placeholder=\"Password\" formControlName = \"password\">\n  <br>\n  <button>Submit</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stylebinding/stylebinding.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stylebinding/stylebinding.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStylebindingStylebindingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Style binding -->\r\n<input placeholder=\"Enter username\" [(ngModel)] = \"name\">\r\n<p></p>\r\n<h3 [style.color] =\"isHiglight ? 'red' : 'black'\">\r\n  Your name is: {{ name }}\r\n</h3>\r\n\r\n<hr>\r\n<!-- Class binding -->\r\n<div [class]=\"isHiglight ? 'circle' : 'square'\"></div>\r\n<div [class.circle]=\"!isHiglight\" [class.square]=\"isHiglight\"></div>\r\n\r\n<hr>\r\n<!-- ngStyle -->\r\n<input placeholder=\"Enter username\" [(ngModel)] = \"name\">\r\n<p></p>\r\n<h3 [ngStyle] =\"name.length % 2 === 0 ? evenStyle : oddStyle\">\r\n  Your name is: {{ name }}\r\n</h3>\r\n\r\n<hr>\r\n<!-- ngClass -->\r\n<div [ngClass]=\"currentClass\"></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFormUserFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input placeholder=\"Enter username\" [(ngModel)] = \"name\" #txtUsername>\r\n<h3>Your name is: {{ name }}</h3>\r\n<code>{{ txtUsername.value | json}}</code>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/word/word.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/word/word.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWordWordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<H3 [hidden]=\"forgot\">This is Word Component</H3>\r\nEN: {{en}}<br>\r\nVN: {{vn}}<br>\r\n<img [src] = \"imageUrl\">\r\n\r\n<hr>\r\n<app-book></app-book>\r\n<hr>\r\n<button (click)=\"toogleForgot()\">Toggle Forgot</button>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/words/words.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/words/words.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWordsWordsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf = \"isShowForm\">\r\n  <input placeholder=\"English\" [(ngModel)]=\"newEn\"/>\r\n  <br>\r\n  <input placeholder=\"Vietnamese\" [(ngModel)]=\"newVn\">\r\n  <p></p>\r\n  <button (click)=\"addWord()\" *ngIf = \"isShowForm\">Thêm từ mới</button>\r\n</div>\r\n<button (click)=\"isShowForm = true\" *ngIf = \"!isShowForm\">Thêm từ mới</button>\r\n<p></p>\r\n\r\n<select [(ngModel)] = \"filterStatus\">\r\n  <option value=\"XEM_TAT_CA\">Tất cả</option>\r\n  <option value=\"XEM_TU_DA_NHO\">Từ đã nhớ</option>\r\n  <option value=\"XEM_TU_CHUA_NHO\">Từ chưa nhớ</option>\r\n</select>\r\n<br/>\r\n<div *ngFor=\"let word of arrWords\">\r\n  <div  class = \"word\" *ngIf = \"getShowStatus(word.memorized)\">\r\n    <h4 [ngStyle]=\"{color: word.memorized ? 'green' : 'red'}\">{{ word.en }}</h4>\r\n    <p>{{ word.vn }}</p>\r\n    <button (click) = \"deleteWord(word.id)\">Xoá</button>\r\n    <button (click) = \"word.memorized = !word.memorized\">\r\n      {{ word.memorized ? 'Đã thuộc' : 'Chưa thuộc'}}\r\n    </button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts/contacts.module */
    "./src/app/contacts/contacts.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-detail/contact-detail.component */
    "./src/app/contact-detail/contact-detail.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts"); // const routes: Routes = [];


    var routesConfig = [{
      path: 'detail/:id/:name/:phoneNumber',
      component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"]
    }, {
      path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"]],
      imports: [_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_2__["ContactsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routesConfig), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Angular8';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _word_word_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./word/word.component */
    "./src/app/word/word.component.ts");
    /* harmony import */


    var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book/book.component */
    "./src/app/book/book.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");
    /* harmony import */


    var _stylebinding_stylebinding_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./stylebinding/stylebinding.component */
    "./src/app/stylebinding/stylebinding.component.ts");
    /* harmony import */


    var _words_words_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./words/words.component */
    "./src/app/words/words.component.ts");
    /* harmony import */


    var _person_person_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./person/person.component */
    "./src/app/person/person.component.ts");
    /* harmony import */


    var _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./list-person/list-person.component */
    "./src/app/list-person/list-person.component.ts");
    /* harmony import */


    var _parent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./parent.component */
    "./src/app/parent.component.ts");
    /* harmony import */


    var _child_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./child.component */
    "./src/app/child.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./learn-pipe/learn-pipe.component */
    "./src/app/learn-pipe/learn-pipe.component.ts");
    /* harmony import */


    var _round_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./round.pipe */
    "./src/app/round.pipe.ts");
    /* harmony import */


    var _formtemplate_formtemplate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./formtemplate/formtemplate.component */
    "./src/app/formtemplate/formtemplate.component.ts");
    /* harmony import */


    var _reactiveform_reactiveform_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./reactiveform/reactiveform.component */
    "./src/app/reactiveform/reactiveform.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nestedformgroup_nestedformgroup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./nestedformgroup/nestedformgroup.component */
    "./src/app/nestedformgroup/nestedformgroup.component.ts");
    /* harmony import */


    var _formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./formbuilder/formbuilder.component */
    "./src/app/formbuilder/formbuilder.component.ts"); // import module for two ways binding


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_round_pipe__WEBPACK_IMPORTED_MODULE_16__["RoundPipe"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _word_word_component__WEBPACK_IMPORTED_MODULE_5__["WordComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"], _stylebinding_stylebinding_component__WEBPACK_IMPORTED_MODULE_8__["StylebindingComponent"], _words_words_component__WEBPACK_IMPORTED_MODULE_9__["WordsComponent"], _person_person_component__WEBPACK_IMPORTED_MODULE_10__["PersonComponent"], _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_11__["ListPersonComponent"], _parent_component__WEBPACK_IMPORTED_MODULE_12__["ParentComponent"], _child_component__WEBPACK_IMPORTED_MODULE_13__["ChildComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_15__["LearnPipeComponent"], _formtemplate_formtemplate_component__WEBPACK_IMPORTED_MODULE_17__["FormtemplateComponent"], _reactiveform_reactiveform_component__WEBPACK_IMPORTED_MODULE_18__["ReactiveformComponent"], _nestedformgroup_nestedformgroup_component__WEBPACK_IMPORTED_MODULE_20__["NestedformgroupComponent"], _formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_21__["FormbuilderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/book/book.component.css":
  /*!*****************************************!*\
    !*** ./src/app/book/book.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookBookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/book/book.component.ts":
  /*!****************************************!*\
    !*** ./src/app/book/book.component.ts ***!
    \****************************************/

  /*! exports provided: BookComponent */

  /***/
  function srcAppBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
      return BookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookComponent =
    /*#__PURE__*/
    function () {
      function BookComponent() {
        _classCallCheck(this, BookComponent);
      }

      _createClass(BookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookComponent;
    }();

    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book.component.css */
      "./src/app/book/book.component.css")).default]
    })], BookComponent);
    /***/
  },

  /***/
  "./src/app/card/card.component.css":
  /*!*****************************************!*\
    !*** ./src/app/card/card.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\r\n  padding: 5px;\r\n  margin: 5px;\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n  width: 300px;\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixvRUFBb0U7QUFDdEUiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.css */
      "./src/app/card/card.component.css")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/child.component.ts":
  /*!************************************!*\
    !*** ./src/app/child.component.ts ***!
    \************************************/

  /*! exports provided: ChildComponent */

  /***/
  function srcAppChildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildComponent", function () {
      return ChildComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChildComponent = function ChildComponent() {
      _classCallCheck(this, ChildComponent);

      this.value = 0;
    };

    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-child',
      template: "<h3>{{ value }}</h3>"
    })], ChildComponent);
    /***/
  },

  /***/
  "./src/app/contact-detail/contact-detail.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/contact-detail/contact-detail.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactDetailContactDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGV0YWlsL2NvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contact-detail/contact-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/contact-detail/contact-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: ContactDetailComponent */

  /***/
  function srcAppContactDetailContactDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function () {
      return ContactDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactDetailComponent =
    /*#__PURE__*/
    function () {
      function ContactDetailComponent(route) {
        _classCallCheck(this, ContactDetailComponent);

        this.route = route;
        this.name = '';
        this.phoneNumber = '';
      }

      _createClass(ContactDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.name = params.get('name');
            _this.phoneNumber = params.get('phoneNumber');
          });
        }
      }]);

      return ContactDetailComponent;
    }();

    ContactDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-detail/contact-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-detail.component.css */
      "./src/app/contact-detail/contact-detail.component.css")).default]
    })], ContactDetailComponent);
    /***/
  },

  /***/
  "./src/app/contacts/contacts.component.css":
  /*!*************************************************!*\
    !*** ./src/app/contacts/contacts.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactsContactsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactsComponent =
    /*#__PURE__*/
    function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        this.contacts = [{
          id: 1,
          name: 'Teo',
          phoneNumber: '0123'
        }, {
          id: 2,
          name: 'Ti',
          phoneNumber: '0456'
        }, {
          id: 3,
          name: 'Tun',
          phoneNumber: '0789'
        }];
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts.component.css */
      "./src/app/contacts/contacts.component.css")).default]
    })], ContactsComponent);
    /***/
  },

  /***/
  "./src/app/contacts/contacts.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/contacts/contacts.module.ts ***!
    \*********************************************/

  /*! exports provided: ContactsModule */

  /***/
  function srcAppContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsModule", function () {
      return ContactsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // const routes: Routes = [];


    var routesConfig = [{
      path: 'contacts',
      component: _contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"]
    }];

    var ContactsModule = function ContactsModule() {
      _classCallCheck(this, ContactsModule);
    };

    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routesConfig), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ContactsModule);
    /***/
  },

  /***/
  "./src/app/formbuilder/formbuilder.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/formbuilder/formbuilder.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormbuilderFormbuilderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1idWlsZGVyL2Zvcm1idWlsZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/formbuilder/formbuilder.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/formbuilder/formbuilder.component.ts ***!
    \******************************************************/

  /*! exports provided: FormbuilderComponent */

  /***/
  function srcAppFormbuilderFormbuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormbuilderComponent", function () {
      return FormbuilderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FormbuilderComponent =
    /*#__PURE__*/
    function () {
      function FormbuilderComponent(fb) {
        _classCallCheck(this, FormbuilderComponent);

        this.fb = fb;
      }

      _createClass(FormbuilderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FormSignUp = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, gmailValidator]],
            password: '',
            subjects: this.fb.group({
              angular: false,
              nodejs: true,
              iOS: false
            })
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.FormSignUp.value);
        }
      }]);

      return FormbuilderComponent;
    }();

    FormbuilderComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    FormbuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formbuilder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formbuilder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/formbuilder/formbuilder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formbuilder.component.css */
      "./src/app/formbuilder/formbuilder.component.css")).default]
    })], FormbuilderComponent);

    function gmailValidator(anyName) {
      if (anyName.value.includes('@gmail.com')) {
        return null;
      }

      return {
        gmail: true
      };
    }
    /***/

  },

  /***/
  "./src/app/formtemplate/formtemplate.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/formtemplate/formtemplate.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormtemplateFormtemplateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm10ZW1wbGF0ZS9mb3JtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/formtemplate/formtemplate.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/formtemplate/formtemplate.component.ts ***!
    \********************************************************/

  /*! exports provided: FormtemplateComponent */

  /***/
  function srcAppFormtemplateFormtemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormtemplateComponent", function () {
      return FormtemplateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormtemplateComponent =
    /*#__PURE__*/
    function () {
      function FormtemplateComponent() {
        _classCallCheck(this, FormtemplateComponent);
      }

      _createClass(FormtemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(nameOfForm) {
          console.log(nameOfForm);
        }
      }]);

      return FormtemplateComponent;
    }();

    FormtemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formtemplate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formtemplate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/formtemplate/formtemplate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formtemplate.component.css */
      "./src/app/formtemplate/formtemplate.component.css")).default]
    })], FormtemplateComponent);
    /***/
  },

  /***/
  "./src/app/learn-pipe/learn-pipe.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/learn-pipe/learn-pipe.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLearnPipeLearnPipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuLXBpcGUvbGVhcm4tcGlwZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/learn-pipe/learn-pipe.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/learn-pipe/learn-pipe.component.ts ***!
    \****************************************************/

  /*! exports provided: LearnPipeComponent */

  /***/
  function srcAppLearnPipeLearnPipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearnPipeComponent", function () {
      return LearnPipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LearnPipeComponent =
    /*#__PURE__*/
    function () {
      function LearnPipeComponent() {
        _classCallCheck(this, LearnPipeComponent);

        this.birthday = new Date(2015, 7, 25);
        this.address = Promise.resolve('92 Le thi rieng');
      }

      _createClass(LearnPipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LearnPipeComponent;
    }();

    LearnPipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-learn-pipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./learn-pipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/learn-pipe/learn-pipe.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./learn-pipe.component.css */
      "./src/app/learn-pipe/learn-pipe.component.css")).default]
    })], LearnPipeComponent);
    /***/
  },

  /***/
  "./src/app/list-person/list-person.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/list-person/list-person.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListPersonListPersonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcGVyc29uL2xpc3QtcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/list-person/list-person.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/list-person/list-person.component.ts ***!
    \******************************************************/

  /*! exports provided: ListPersonComponent */

  /***/
  function srcAppListPersonListPersonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPersonComponent", function () {
      return ListPersonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ListPersonComponent =
    /*#__PURE__*/
    function () {
      function ListPersonComponent() {
        _classCallCheck(this, ListPersonComponent);

        this.arrPeople = [{
          name: 'Ti',
          age: 10
        }, {
          name: 'Teo',
          age: 15
        }, {
          name: 'Tun',
          age: 7
        }];
      }

      _createClass(ListPersonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removePersonByName",
        value: function removePersonByName(name) {
          var index = this.arrPeople.findIndex(function (e) {
            return e.name = name;
          });
          this.arrPeople.splice(index, 1);
        }
      }]);

      return ListPersonComponent;
    }();

    ListPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-person',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-person.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-person/list-person.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-person.component.css */
      "./src/app/list-person/list-person.component.css")).default]
    })], ListPersonComponent);
    /***/
  },

  /***/
  "./src/app/nestedformgroup/nestedformgroup.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/nestedformgroup/nestedformgroup.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNestedformgroupNestedformgroupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25lc3RlZGZvcm1ncm91cC9uZXN0ZWRmb3JtZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/nestedformgroup/nestedformgroup.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/nestedformgroup/nestedformgroup.component.ts ***!
    \**************************************************************/

  /*! exports provided: NestedformgroupComponent */

  /***/
  function srcAppNestedformgroupNestedformgroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedformgroupComponent", function () {
      return NestedformgroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NestedformgroupComponent =
    /*#__PURE__*/
    function () {
      function NestedformgroupComponent() {
        _classCallCheck(this, NestedformgroupComponent);

        this.FormSignUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          subjects: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            angular: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            nodejs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            iOS: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          })
        });
      }

      _createClass(NestedformgroupComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.FormSignUp.value);
        }
      }]);

      return NestedformgroupComponent;
    }();

    NestedformgroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nestedformgroup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nestedformgroup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nestedformgroup/nestedformgroup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nestedformgroup.component.css */
      "./src/app/nestedformgroup/nestedformgroup.component.css")).default]
    })], NestedformgroupComponent);
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagenotfoundComponent =
    /*#__PURE__*/
    function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagenotfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfound.component.css */
      "./src/app/pagenotfound/pagenotfound.component.css")).default]
    })], PagenotfoundComponent);
    /***/
  },

  /***/
  "./src/app/parent.component.ts":
  /*!*************************************!*\
    !*** ./src/app/parent.component.ts ***!
    \*************************************/

  /*! exports provided: ParentComponent */

  /***/
  function srcAppParentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParentComponent", function () {
      return ParentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParentComponent =
    /*#__PURE__*/
    function () {
      function ParentComponent() {
        _classCallCheck(this, ParentComponent);
      }

      _createClass(ParentComponent, [{
        key: "onAddForChild",
        value: function onAddForChild() {
          this.myChild.value++;
        }
      }]);

      return ParentComponent;
    }();

    ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-parent",
      template: "\n    <button (click) = \"onAddForChild()\">Add for child</button>\n    <app-child></app-child>"
    })], ParentComponent);
    /***/
  },

  /***/
  "./src/app/person/person.component.css":
  /*!*********************************************!*\
    !*** ./src/app/person/person.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonPersonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/person/person.component.ts":
  /*!********************************************!*\
    !*** ./src/app/person/person.component.ts ***!
    \********************************************/

  /*! exports provided: PersonComponent */

  /***/
  function srcAppPersonPersonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonComponent", function () {
      return PersonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonComponent =
    /*#__PURE__*/
    function () {
      function PersonComponent() {
        _classCallCheck(this, PersonComponent);

        this.removePerson = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PersonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeByClick",
        value: function removeByClick() {
          this.removePerson.emit(this.name);
        }
      }]);

      return PersonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PersonComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PersonComponent.prototype, "age", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PersonComponent.prototype, "removePerson", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-person',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./person.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./person.component.css */
      "./src/app/person/person.component.css")).default]
    })], PersonComponent);
    /***/
  },

  /***/
  "./src/app/reactiveform/reactiveform.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/reactiveform/reactiveform.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReactiveformReactiveformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aXZlZm9ybS9yZWFjdGl2ZWZvcm0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reactiveform/reactiveform.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/reactiveform/reactiveform.component.ts ***!
    \********************************************************/

  /*! exports provided: ReactiveformComponent */

  /***/
  function srcAppReactiveformReactiveformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveformComponent", function () {
      return ReactiveformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ReactiveformComponent =
    /*#__PURE__*/
    function () {
      function ReactiveformComponent() {
        _classCallCheck(this, ReactiveformComponent);

        this.FormSignUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
      }

      _createClass(ReactiveformComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.FormSignUp.value);
        }
      }]);

      return ReactiveformComponent;
    }();

    ReactiveformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reactiveform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reactiveform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reactiveform/reactiveform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reactiveform.component.css */
      "./src/app/reactiveform/reactiveform.component.css")).default]
    })], ReactiveformComponent);
    /***/
  },

  /***/
  "./src/app/round.pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/round.pipe.ts ***!
    \*******************************/

  /*! exports provided: RoundPipe */

  /***/
  function srcAppRoundPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
      return RoundPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RoundPipe =
    /*#__PURE__*/
    function () {
      function RoundPipe() {
        _classCallCheck(this, RoundPipe);
      }

      _createClass(RoundPipe, [{
        key: "transform",
        value: function transform(value, isUpper, addTo) {
          if (isUpper) {
            return Math.ceil(value + addTo);
          }

          return Math.floor(value + addTo);
        }
      }]);

      return RoundPipe;
    }();

    RoundPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'roundNum'
    })], RoundPipe);
    /***/
  },

  /***/
  "./src/app/stylebinding/stylebinding.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/stylebinding/stylebinding.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStylebindingStylebindingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".circle {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background-color: blue;\r\n}\r\n\r\n.square {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 2px;\r\n  background-color: blue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGViaW5kaW5nL3N0eWxlYmluZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc3R5bGViaW5kaW5nL3N0eWxlYmluZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/stylebinding/stylebinding.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/stylebinding/stylebinding.component.ts ***!
    \********************************************************/

  /*! exports provided: StylebindingComponent */

  /***/
  function srcAppStylebindingStylebindingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylebindingComponent", function () {
      return StylebindingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StylebindingComponent =
    /*#__PURE__*/
    function () {
      function StylebindingComponent() {
        _classCallCheck(this, StylebindingComponent);

        this.name = '';
        this.isHiglight = true;
        this.evenStyle = {
          color: 'red',
          fontSize: '40px'
        };
        this.oddStyle = {
          color: 'black',
          fontSize: '20px'
        };
        this.currentClass = {
          circle: !this.isHiglight,
          square: this.isHiglight
        };
      }

      _createClass(StylebindingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StylebindingComponent;
    }();

    StylebindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stylebinding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stylebinding.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stylebinding/stylebinding.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stylebinding.component.css */
      "./src/app/stylebinding/stylebinding.component.css")).default]
    })], StylebindingComponent);
    /***/
  },

  /***/
  "./src/app/user-form/user-form.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-form/user-form.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFormUserFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-form/user-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-form/user-form.component.ts ***!
    \**************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserFormComponent =
    /*#__PURE__*/
    function () {
      function UserFormComponent() {
        _classCallCheck(this, UserFormComponent);

        this.name = '';
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserFormComponent;
    }();

    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-form.component.css */
      "./src/app/user-form/user-form.component.css")).default]
    })], UserFormComponent);
    /***/
  },

  /***/
  "./src/app/word/word.component.css":
  /*!*****************************************!*\
    !*** ./src/app/word/word.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppWordWordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC93b3JkL3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/word/word.component.ts":
  /*!****************************************!*\
    !*** ./src/app/word/word.component.ts ***!
    \****************************************/

  /*! exports provided: WordComponent */

  /***/
  function srcAppWordWordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordComponent", function () {
      return WordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WordComponent =
    /*#__PURE__*/
    function () {
      function WordComponent() {
        _classCallCheck(this, WordComponent);

        this.en = 'English';
        this.vn = 'Viet Nam';
        this.imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
        this.forgot = true;
      }

      _createClass(WordComponent, [{
        key: "toogleForgot",
        value: function toogleForgot() {
          this.forgot = !this.forgot;
        }
      }]);

      return WordComponent;
    }();

    WordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-word',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./word.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/word/word.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./word.component.css */
      "./src/app/word/word.component.css")).default]
    })], WordComponent);
    /***/
  },

  /***/
  "./src/app/words/words.component.css":
  /*!*******************************************!*\
    !*** ./src/app/words/words.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppWordsWordsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".word {\r\n  background-color: #EDEDF5;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZHMvd29yZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3dvcmRzL3dvcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURGNTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/words/words.component.ts":
  /*!******************************************!*\
    !*** ./src/app/words/words.component.ts ***!
    \******************************************/

  /*! exports provided: WordsComponent */

  /***/
  function srcAppWordsWordsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordsComponent", function () {
      return WordsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WordsComponent =
    /*#__PURE__*/
    function () {
      function WordsComponent() {
        _classCallCheck(this, WordsComponent);

        this.newEn = '';
        this.newVn = '';
        this.isShowForm = false;
        this.filterStatus = 'XEM_TAT_CA';
        this.arrWords = [{
          id: 1,
          en: 'action',
          vn: 'hành động',
          memorized: true
        }, {
          id: 2,
          en: 'actor',
          vn: 'diễn viên',
          memorized: false
        }, {
          id: 3,
          en: 'activity',
          vn: 'hoạt động',
          memorized: true
        }, {
          id: 4,
          en: 'active',
          vn: 'chủ động',
          memorized: true
        }, {
          id: 5,
          en: 'bath',
          vn: 'tắm',
          memorized: false
        }, {
          id: 6,
          en: 'bedroom',
          vn: 'phòng ngủ',
          memorized: true
        }];
      }

      _createClass(WordsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addWord",
        value: function addWord() {
          this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
          });
          this.newEn = '';
          this.newVn = '';
          this.isShowForm = false;
        }
      }, {
        key: "deleteWord",
        value: function deleteWord(id) {
          var index = this.arrWords.findIndex(function (word) {
            return word.id === id;
          });
          this.arrWords.splice(index, 1);
        }
      }, {
        key: "getShowStatus",
        value: function getShowStatus(memorized) {
          var dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
          var dkXemTuDaNho = this.filterStatus === 'XEM_TU_DA_NHO' && memorized;
          var dkXemTuChuaNho = this.filterStatus === 'XEM_TU_CHUA_NHO' && !memorized;
          return dkXemTatCa || dkXemTuDaNho || dkXemTuChuaNho;
        }
      }]);

      return WordsComponent;
    }();

    WordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-words',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./words.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/words/words.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./words.component.css */
      "./src/app/words/words.component.css")).default]
    })], WordsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\STUDYING\LearnAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map