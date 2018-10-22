(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-magic-table/fesm5/ngx-magic-table.js":
/*!*******************************************************!*\
  !*** ./dist/ngx-magic-table/fesm5/ngx-magic-table.js ***!
  \*******************************************************/
/*! exports provided: NgxMagicTableComponent, NgxColumnTemplateComponent, NgxMagicTableModule, ɵh, ɵe, ɵf, ɵg, ɵk, ɵl, ɵi, ɵj, ɵa, ɵc, ɵd, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMagicTableComponent", function() { return NgxMagicTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxColumnTemplateComponent", function() { return NgxColumnTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMagicTableModule", function() { return NgxMagicTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgxBooleanFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgxEnumFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DirectionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return DomChangeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgxMultiselectDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NamedTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxNumericFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgxStringFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-uid */ "./node_modules/angular-uid/angular-uid.js");
/* harmony import */ var angular_uid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_uid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PagingInput = /** @class */ (function () {
    function PagingInput() {
    }
    return PagingInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortInput = /** @class */ (function () {
    function SortInput() {
    }
    return SortInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderItem = /** @class */ (function () {
    function HeaderItem(init) {
        Object.assign(this, init);
        this.Title = '';
        this.Index = 0;
        this.Sortable = true;
        this.Width = 100;
        this.Visible = true;
        this.Childs = new Array();
    }
    return HeaderItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderCell = /** @class */ (function () {
    function HeaderCell(init) {
        Object.assign(this, init);
        this.title = '';
        this.index = 0;
        this.colSpan = 1;
        this.rowSpan = 1;
        this.sortable = true;
        this.visible = true;
    }
    return HeaderCell;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NamedTemplateDirective = /** @class */ (function () {
    function NamedTemplateDirective(name, template) {
        this.name = name;
        this.template = template;
    }
    NamedTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[name]'
                },] },
    ];
    /** @nocollapse */
    NamedTemplateDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['name',] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }] }
    ]; };
    return NamedTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxColumnTemplateComponent = /** @class */ (function () {
    function NgxColumnTemplateComponent() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filters = [];
        this.name = '';
        this.parent = '';
        this.title = '';
        this.index = 0;
        this.cellWidth = 0;
        this.sortable = true;
        this.draggable = true;
        this.visible = true;
        this.collection = '';
    }
    /**
     * @param {?} templates
     * @return {?}
     */
    NgxColumnTemplateComponent.normalizeIndexes = /**
     * @param {?} templates
     * @return {?}
     */
    function (templates) {
        templates.sort(function (first, second) {
            if (first.parent < second.parent) {
                return -1;
            }
            if (first.parent > second.parent) {
                return 1;
            }
            if (first.index < second.index) {
                return -1;
            }
            if (first.index > second.index) {
                return 1;
            }
            return 0;
        }).forEach(function (t, index) {
            t.index = index;
        });
    };
    /**
     * @return {?}
     */
    NgxColumnTemplateComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ h = this.templates.find(function (t) { return t.name === 'header'; });
        this.header = h ? h.template : undefined;
        var /** @type {?} */ b = this.templates.find(function (t) { return t.name === 'body'; });
        this.body = b ? b.template : undefined;
        var /** @type {?} */ f = this.templates.find(function (t) { return t.name === 'filter'; });
        this.filter = f ? f.template : undefined;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxColumnTemplateComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.changed.emit(this);
    };
    NgxColumnTemplateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-column-template',
                    template: "",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NgxColumnTemplateComponent.ctorParameters = function () { return []; };
    NgxColumnTemplateComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        collection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cellWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NamedTemplateDirective,] }]
    };
    return NgxColumnTemplateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var OrderDirection = {
    Unspecified: -1,
    Ascending: 0,
    Descending: 1,
};
OrderDirection[OrderDirection.Unspecified] = "Unspecified";
OrderDirection[OrderDirection.Ascending] = "Ascending";
OrderDirection[OrderDirection.Descending] = "Descending";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var NgxMagicTableComponent = /** @class */ (function () {
    function NgxMagicTableComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.paginated = false;
        this.customSort = true;
        this.customPaginate = false;
        this.totalCount = 0;
        this.pageSize = 10;
        this.currentPage = 1;
        this.pageSizes = [10, 20, 50, 100];
        this.sort = '';
        this.sortDirection = OrderDirection.Ascending;
        this.hidden = false;
        this.selectedClass = 'table-secondary';
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnsArrangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveTable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tableClass = 'table';
        this.theadClass = 'thead-light';
        this.tbodyClass = '';
        this.trowClass = '';
        this.tcellClass = '';
        this.dropdownList = [];
        this.dropdownselectedItems = [];
        this.dropdownSettings = {};
        this._rows = Array();
        this.Math = Math;
        this.Arr = Array;
        this.cells = new Array();
        this.head = new Array();
        this.lowerCells = new Array();
        this.depth = 0;
        this.uid = angular_uid__WEBPACK_IMPORTED_MODULE_2___default()();
        this.sortInput = new SortInput();
        this.pagingInput = new PagingInput();
        this.unsubscribeMouseMove = null;
        this.unsubscribeMouseUp = null;
        this.tableWidth = 200;
        this.mainWidth = 200;
        this.isRTL = false;
        this.scrollWidth = 0;
        this.listcellsInfo = new Array();
        this.buttonListColumnStyle = "btn btn-outline-info";
        this.buttonSaveTableStyle = "btn btn-outline-info";
        this.tableInfo = new Array();
        this.autoSize = true;
    }
    Object.defineProperty(NgxMagicTableComponent.prototype, "templates", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.templatesArray = value.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMagicTableComponent.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} rows
         * @return {?}
         */
        function (rows) {
            if (!rows) {
                this._rows = [];
            }
            else {
                this._rows = rows;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMagicTableComponent.prototype, "loadTable", {
        set: /**
         * @param {?} array
         * @return {?}
         */
        function (array) {
            if (array) {
                this.tableInfo = array;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxMagicTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        NgxColumnTemplateComponent.normalizeIndexes(this.templatesArray);
        this.templatesArray.forEach(function (i) {
            return i.changed.subscribe(function () { return _this.generateCells(); });
        });
        if (this.autoSize) {
            this.autoSizeCells(this.mainSize());
        }
        var _loop_1 = function (i) {
            var /** @type {?} */ element_1 = this_1.tableInfo[i];
            var /** @type {?} */ template = this_1.templatesArray.filter(function (x) { return x.index === element_1.index; });
            var /** @type {?} */ index = this_1.templatesArray.indexOf(template[0]);
            template[0].cellWidth = element_1.cellWidth;
            template[0].sortable = element_1.sortable;
            template[0].draggable = element_1.draggble;
            template[0].visible = element_1.visible;
            this_1.templatesArray[index] = template[0];
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < this.tableInfo.length; i++) {
            _loop_1(i);
        }
        this.generateCells();
        for (var /** @type {?} */ index = 0; index < this.templatesArray.length; index++) {
            var /** @type {?} */ element_2 = this.templatesArray[index];
            this.dropdownList.push({ item_id: element_2.index, item_text: element_2.name, parent: element_2.parent });
        }
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true,
        };
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgxMagicTableComponent.prototype.getLcm = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var /** @type {?} */ lcm = this.lcmOfList(this.lowerCells.map(function (i) {
            return i.template.collection === ''
                ? 1
                : Math.max(row[i.template.collection.toString()].length, 1);
        }));
        return lcm;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    NgxMagicTableComponent.prototype.gcd = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (b === 0) {
            return a; // so that the recursion does not go on forever
        }
        else {
            return this.gcd(b, a % b);
        }
    };
    /**
     * @param {?} arr
     * @return {?}
     */
    NgxMagicTableComponent.prototype.lcmOfList = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        var /** @type {?} */ d = this;
        var /** @type {?} */ t = arr.reduce(function (a, b) { return d.lcm(a, b); });
        return t;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    NgxMagicTableComponent.prototype.lcm = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return (a * b) / this.gcd(a, b);
    };
    /**
     * @param {?} x
     * @return {?}
     */
    NgxMagicTableComponent.prototype.allowDrop = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        x.preventDefault();
    };
    /**
     * @param {?} x
     * @return {?}
     */
    NgxMagicTableComponent.prototype.drop = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        if (this.draggingCell == null) {
            return;
        }
        if (this.draggingCell.template.parent !== x.template.parent) {
            return;
        }
        var /** @type {?} */ tmp = x.template.index;
        x.template.index = this.draggingCell.template.index;
        this.draggingCell.template.index = tmp;
        this.draggingCell = null;
        this.generateCells();
        this.columnsArrangeChange.emit(this.templatesArray.map(function (t) {
            return {
                name: t.name,
                parent: t.parent,
                index: t.index
            };
        }));
    };
    /**
     * @param {?} x
     * @return {?}
     */
    NgxMagicTableComponent.prototype.drag = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        this.draggingCell = x;
    };
    /**
     * @return {?}
     */
    NgxMagicTableComponent.prototype.generateCells = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.head = this.generateHeaders();
        this.tableWidth = this.head.map(function (i) { return +i.Width; })
            .reduce(function (sum, current) { return sum + current; }, 0);
        this.depth = Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this.head.map(function (item) {
            return _this.Depth(item);
        })));
        this.cells = [];
        this.lowerCells = [];
        this.createHeaderCells(this.head, 0, this.depth);
    };
    /**
     * @return {?}
     */
    NgxMagicTableComponent.prototype.mainSize = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ htmlElement = document.getElementById('MainMagicTableId');
        return htmlElement.clientWidth;
    };
    /**
     * @param {?} clientWidth
     * @return {?}
     */
    NgxMagicTableComponent.prototype.autoSizeCells = /**
     * @param {?} clientWidth
     * @return {?}
     */
    function (clientWidth) {
        var /** @type {?} */ rowCount = 0;
        var _loop_2 = function (index) {
            var /** @type {?} */ element_3 = this_2.templatesArray[index];
            var /** @type {?} */ childs = this_2.templatesArray
                .filter(function (t) { return t.parent === element_3.name; });
            if (childs.length < 1) {
                rowCount++;
            }
        };
        var this_2 = this;
        for (var /** @type {?} */ index = 0; index < this.templatesArray.length; index++) {
            _loop_2(index);
        }
        var /** @type {?} */ cellWidth = clientWidth / rowCount;
        var _loop_3 = function (index) {
            var /** @type {?} */ element_4 = this_3.templatesArray[index];
            var /** @type {?} */ childs = this_3.templatesArray
                .filter(function (t) { return t.parent === element_4.name; });
            if (childs.length < 1) {
                element_4.cellWidth = cellWidth;
                this_3.templatesArray[index] = element_4;
            }
        };
        var this_3 = this;
        for (var /** @type {?} */ index = 0; index < this.templatesArray.length; index++) {
            _loop_3(index);
        }
    };
    /**
     * @param {?=} headerName
     * @return {?}
     */
    NgxMagicTableComponent.prototype.generateHeaders = /**
     * @param {?=} headerName
     * @return {?}
     */
    function (headerName) {
        var _this = this;
        if (headerName === void 0) { headerName = ''; }
        var /** @type {?} */ result = new Array();
        this.templatesArray
            .filter(function (t) { return t.parent === headerName; })
            .filter(function (t) { return t.visible === true; })
            .sort(function (first, second) {
            if (first.index > second.index) {
                return -1;
            }
            if (first.index < second.index) {
                return 1;
            }
            return 0;
        })
            .forEach(function (t) {
            var /** @type {?} */ item;
            item = new HeaderItem();
            item.Title = t.title;
            item.Index = +t.index;
            item.Sortable = t.sortable;
            item.Template = t;
            item.Visible = t.visible;
            item.Childs = _this.generateHeaders(t.name);
            item.Width = item.Childs.length === 0 && item.Visible === true ? +t.cellWidth : item.Childs.map(function (i) { return +i.Width; })
                .reduce(function (sum, current) { return sum + current; }, 0);
            item.Name = t.name;
            result.push(item);
            _this.dropdownselectedItems.push({ item_id: item.Index, item_text: item.Name, parent: headerName });
        });
        return result;
    };
    /**
     * @param {?} items
     * @param {?} level
     * @param {?} depth
     * @return {?}
     */
    NgxMagicTableComponent.prototype.createHeaderCells = /**
     * @param {?} items
     * @param {?} level
     * @param {?} depth
     * @return {?}
     */
    function (items, level, depth) {
        var _this = this;
        if (this.cells.length <= level) {
            this.cells.push(new Array());
        }
        var /** @type {?} */ row = this.cells[level];
        items.sort(function (first, second) { return first.Index.valueOf() - second.Index.valueOf(); })
            .map(function (h) {
            var /** @type {?} */ c = new HeaderCell();
            c.name = h.Name;
            c.index = h.Index;
            c.title = h.Title;
            c.visible = h.Visible;
            c.cellWidth = h.Width;
            c.sortable = h.Sortable;
            c.template = h.Template;
            c.HeaderItem = h;
            c.colSpan = _this.countHeaders(h);
            c.rowSpan = h.Childs.length > 0 ? 1 : depth - level;
            row.push(c);
            if (h.Childs.length > 0) {
                _this.createHeaderCells(h.Childs, level + 1, depth);
            }
            else {
                if (h.Visible === true) {
                    _this.lowerCells.push(c);
                }
            }
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxMagicTableComponent.prototype.countHeaders = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (item.Childs.length) {
            var /** @type {?} */ headerCount = item.Childs.map(function (child) {
                return _this.countHeaders(child);
            });
            return headerCount.reduce(function (a, b) { return a + b; }, 0);
        }
        else {
            return 1;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxMagicTableComponent.prototype.Depth = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (item.Childs.length) {
            var /** @type {?} */ depth = Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(item.Childs.map(function (child) {
                return _this.Depth(child);
            })));
            return depth + 1;
        }
        else {
            return 1;
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgxMagicTableComponent.prototype.selectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.selectedRow = row;
        this.selectedChange.emit(this.selectedRow);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    NgxMagicTableComponent.prototype.changePerPage = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        if (this.pageSize === pageSize) {
            return;
        }
        if (this.customPaginate) ;
        else {
            this.pageSize = pageSize;
        }
        this.pagingInput.page = /** @type {?} */ (this.currentPage);
        this.pagingInput.pageSize = pageSize;
        this.pageSizeChange.emit(this.pagingInput);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NgxMagicTableComponent.prototype.selectPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (this.currentPage === page) {
            return;
        }
        if (this.customPaginate) ;
        else {
            this.currentPage = page;
        }
        this.pagingInput.page = page;
        this.pagingInput.pageSize = /** @type {?} */ (this.pageSize);
        this.pageChange.emit(this.pagingInput);
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    NgxMagicTableComponent.prototype.sortToggle = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        if (cell.sortable === false) {
            return;
        }
        var /** @type {?} */ newDirection;
        if (this.sort === cell.name) {
            newDirection =
                this.sortDirection === OrderDirection.Ascending
                    ? OrderDirection.Descending
                    : OrderDirection.Ascending;
        }
        else {
            newDirection = OrderDirection.Ascending;
        }
        if (!this.customSort) {
            this.sort = cell.name;
            this.sortDirection = newDirection;
        }
        this.sortInput.sort = /** @type {?} */ (cell.name);
        this.sortInput.direction = newDirection;
        this.sortChange.emit(this.sortInput);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onDomChange = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ width = element.nativeElement.offsetWidth - element.nativeElement.clientWidth;
        this.scrollWidth = width;
    };
    /**
     * @param {?} array
     * @return {?}
     */
    NgxMagicTableComponent.prototype.inverseArray = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        var /** @type {?} */ inverse = new Array();
        for (var /** @type {?} */ i = array.length - 1; i >= 0; i--) {
            inverse.push(array[i]);
        }
        return inverse;
    };
    /**
     * @param {?} width
     * @param {?} index
     * @return {?}
     */
    NgxMagicTableComponent.prototype.resizeCell = /**
     * @param {?} width
     * @param {?} index
     * @return {?}
     */
    function (width, index) {
        // this.isLastColumnMouse = false;
        if (index == this.lowerCells.length - 1) {
            // this.isLastColumnMouse = false;
            return width - this.scrollWidth;
        }
        else {
            return width;
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onItemSelect = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _loop_4 = function (i) {
            var /** @type {?} */ item = items[i];
            var /** @type {?} */ template = this_4.templatesArray
                .find(function (t) { return t.index === item.item_id; });
            var /** @type {?} */ index = this_4.templatesArray.indexOf(item);
            template.visible = true;
            this_4.templatesArray[index] = template;
        };
        var this_4 = this;
        for (var /** @type {?} */ i = 0; i < items.length; i++) {
            _loop_4(i);
        }
        this.generateCells();
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onItemDeSelect = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        var _loop_5 = function (j) {
            var /** @type {?} */ item = items.filter(function (t) { return t.item_id === _this.templatesArray[j].index; });
            if (item.length <= 0) {
                this_5.templatesArray[j].visible = false;
                this_5.templatesArray[j] = this_5.templatesArray[j];
            }
        };
        var this_5 = this;
        for (var /** @type {?} */ j = 0; j < this.templatesArray.length; j++) {
            _loop_5(j);
        }
        this.generateCells();
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onSelectAll = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        for (var /** @type {?} */ i = 0; i < this.templatesArray.length; i++) {
            var /** @type {?} */ template = this.templatesArray[i];
            var /** @type {?} */ index = this.templatesArray.indexOf(template);
            template.visible = true;
            this.templatesArray[index] = template;
        }
        this.generateCells();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onMainDomChange = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.autoSize) {
            var /** @type {?} */ width = element.nativeElement.clientWidth;
            this.autoSizeCells(width);
            this.generateCells();
        }
    };
    /**
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onsaveTable = /**
     * @return {?}
     */
    function () {
        this.listcellsInfo = null;
        this.listcellsInfo = new Array();
        for (var /** @type {?} */ i = 0; i < this.templatesArray.length; i++) {
            var /** @type {?} */ element_5 = this.templatesArray[i];
            this.listcellsInfo.push({ index: element_5.index, name: element_5.name, cellWidth: element_5.cellWidth, parent: element_5.parent, sortable: element_5.sortable, draggble: element_5.draggable, visible: element_5.visible });
        }
        this.saveTable.emit(this.listcellsInfo);
    };
    /**
     * @param {?} cell
     * @param {?} mEvent
     * @param {?} idTbody
     * @return {?}
     */
    NgxMagicTableComponent.prototype.resizeHandle = /**
     * @param {?} cell
     * @param {?} mEvent
     * @param {?} idTbody
     * @return {?}
     */
    function (cell, mEvent, idTbody) {
        var _this = this;
        event.preventDefault();
        var /** @type {?} */ tbodyId = idTbody;
        var /** @type {?} */ tableWidthTemp = this.tableWidth;
        this.pixcelXBefore = mEvent.x;
        this.widthBefore = +cell.cellWidth;
        var /** @type {?} */ draggable = cell.template.draggable;
        var /** @type {?} */ sortable = cell.template.sortable;
        var /** @type {?} */ lastHeaderItem = cell.HeaderItem;
        while (lastHeaderItem.Childs.length > 0) {
            lastHeaderItem = lastHeaderItem.Childs[lastHeaderItem.Childs.length - 1];
        }
        var /** @type {?} */ allCells = this.cells.reduce(function (a, b) { return a.concat(b); });
        var /** @type {?} */ lastCell = allCells.filter(function (t) { return t.visible === true; }).find(function (i) { return i.name === lastHeaderItem.Name; });
        var /** @type {?} */ widthLastCell = +lastCell.cellWidth;
        this.unsubscribeMouseMove = this.renderer.listen('document', 'mousemove', function (event) {
            // if (this.isLastColumnMouse) {
            // 	return;
            // }
            event.preventDefault();
            cell.template.draggable = false;
            cell.template.sortable = false;
            var /** @type {?} */ WidthAdd = event.x - _this.pixcelXBefore;
            if (_this.isRTL) {
                WidthAdd = _this.pixcelXBefore - event.x;
            }
            if (lastCell.cellWidth >= 50) {
                cell.cellWidth = _this.widthBefore + (WidthAdd);
                lastCell.cellWidth = widthLastCell + (WidthAdd);
                _this.tableWidth = tableWidthTemp + (WidthAdd);
            }
        });
        this.unsubscribeMouseUp = this.renderer.listen('document', 'mouseup', function (event) {
            event.preventDefault();
            if (lastCell.cellWidth < 50) {
                lastCell.cellWidth = 50;
            }
            lastCell.template.cellWidth = lastCell.cellWidth;
            if (cell.cellWidth < 50) {
                cell.cellWidth = 50;
            }
            cell.template.cellWidth = cell.cellWidth;
            cell.template.draggable = draggable;
            cell.template.sortable = sortable;
            var /** @type {?} */ htmlElement = document.getElementById(tbodyId);
            _this.scrollWidth = htmlElement.offsetWidth - htmlElement.clientWidth;
            if (_this.unsubscribeMouseMove) {
                _this.unsubscribeMouseMove();
                _this.unsubscribeMouseMove = null;
                _this.generateCells();
            }
            if (_this.unsubscribeMouseUp) {
                _this.unsubscribeMouseUp();
                _this.unsubscribeMouseUp = null;
            }
        });
    };
    NgxMagicTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-magic-table',
                    template: "\n<div (domChange)=\"onMainDomChange($event)\" [ngClass]=\"[isRTL ? 'rtl' : 'ltr']\">\n  <div id=\"MainMagicTableId\" class=\"mainMagicTable\">\n    <div class=\"paddingDiv\" [style.width.px]=\"tableWidth\">\n      <table  [ngClass]=\"tableClass\" class=\"rz-table\">\n        <thead class=\"ngxThead\" [ngClass]=\"theadClass\">\n          <tr *ngFor=\"let cellRow of cells\">\n            <th *ngFor=\"let cell of inverseArray(cellRow)\" [style.width.px]=\"cell.cellWidth\" [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\"\n              [attr.visible]=\"cell.visible\" [name]=\"cell.name\" [id]=\"uid+'-'+cell.name+'-head'\" [draggable]=\"cell.template.draggable\"\n              (drop)=\"drop(cell)\" (dragover)=\"allowDrop($event)\" (dragstart)=\"drag(cell)\" [attr.colspan]=\"cell.colSpan\"\n              [attr.rowspan]=\"cell.rowSpan\">\n\n              <div [id]=\"cell.name+'resizable'\" (mousedown)=\"resizeHandle(cell,$event,'tbody1')\" class=\"rz-handle\">\n              </div>\n              <div (click)=\"sortToggle(cell)\">\n                <ng-template [ngTemplateOutlet]=\"cell.template.header\" [ngTemplateOutletContext]=\"{cell: cell, direction: (cell.name === sort) ? sortDirection : undefined}\">\n                </ng-template>\n              </div>\n              <ng-container *ngIf=\"cell.template.filter\">\n                <div ngbDropdown (click)=\"$event.stopPropagation()\" class=\"dropdown float-right\">\n                  <button ngbDropdownToggle type=\"button\" [ngClass]=\"[cell.template.filters.length == 0 ? 'btn-default' : 'btn-warning']\"\n                    class=\"btn \" [id]=\"cell.name + '-' + uid  + '-filter'\">\n                    <i class=\"fa fa-filter\"></i>\n                  </button>\n                  <div ngbDropdownMenu [aria-labelledby]=\"cell.name + '-' + uid  + '-filter'\" class=\"dropdown-menu\"\n                    (click)=\"$event.stopPropagation()\">\n                    <div class=\"container\">\n                      <ng-template [ngTemplateOutlet]=\"cell.template.filter\" [ngTemplateOutletContext]=\"{cell: cell, rows: rows}\"></ng-template>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </th>\n          </tr>\n        </thead>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort} | paginate: {\n        itemsPerPage: pageSize,\n        currentPage: currentPage,\n        totalItems: customPaginate ? totalCount : rows.length,\n        id: uid }\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row == selectedRow ? selectedClass : trowClass]\">\n\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                class=\"{{tcellClass}}\"  *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"!paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort}\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row == selectedRow ? selectedClass : trowClass ]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [ngClass]=\"tcellClass\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"btn-group paging\" *ngIf=\"paginated\">\n    <lib-ngx-multiselect-dropdown [buttonListColumnStyle]=\"buttonSaveTableStyle\" (change)=\"onItemSelect($event)\"\n      [placeholder]=\"'Select Columns'\" [data]=\"dropdownList\" [(ngModel)]=\"dropdownselectedItems\" [settings]=\"dropdownSettings\"\n      (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n    </lib-ngx-multiselect-dropdown>\n    <div style=\"margin-left: 2px; margin-right: 2px\">\n      <button (click)=\"onsaveTable()\" [ngClass]=\"buttonSaveTableStyle\" title=\"Save Table\">\n        <i class=\"fa fa-floppy-o\"></i>\n      </button>\n    </div>\n    <pagination-controls (pageChange)=\"selectPage($event)\" previousLabel=\"\" nextLabel=\"\" [id]=\"uid\"></pagination-controls>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <div *ngIf=\"pageSizes.length\" class=\"dropdown\">\n      <select class=\"btn btn-secondary btn-sm dropdown-toggle\" [value]='pageSize' (change)=\"changePerPage($event.target.value)\">\n        <option *ngFor=\"let p of pageSizes\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n      </select>\n    </div>\n  </div>\n\n</div>",
                    styles: ["table thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[draggable=true]{-khtml-user-drag:element;-webkit-user-drag:element}select.btn-sm{padding:.1rem;display:inline-flex}table{table-layout:fixed}table.rz-table{display:block;width:auto;table-layout:fixed;border-collapse:collapse}table.rz-table th{position:relative;min-width:25px}table.rz-table th .rz-handle{width:2px;height:100%;position:absolute;top:0;right:-2px;cursor:ew-resize!important;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px);z-index:99999999}table.rz-table th .rz-handle:hover{background:repeating-linear-gradient(45deg,#6c757d00,#6c757d 2px,#6c757d 2px,#6c757d00 4px)}.rtl table.rz-table th .rz-handle{right:auto;left:-2px}.rtl{direction:rtl!important}.ltr{direction:ltr!important}.mainMagicTable{overflow:auto}.paging{width:100%;padding-left:10px;padding-right:10px;padding-bottom:10px}.paddingDiv{padding:10px}.ngxThead{display:block;width:100%}.ngxTbody{height:-webkit-fill-available;display:block;overflow-y:auto;overflow-x:hidden}.ltr .ngxTbody{direction:rtl}.rtl .ngxTbody{direction:ltr}.ltr .ngxThead{direction:rtl}.rtl .ngxThead{direction:ltr}.table td,.table th{word-break:break-all}.table td{border:1px solid #dee2e6}.savetable{position:absolute;top:5px}.ltr .savetable{right:10px}.rtl .savetable{left:10px}ul.ngx-pagination{margin:0}.rtl .paging{direction:rtl!important}.ltr .paging{direction:ltr!important}"]
                },] },
    ];
    /** @nocollapse */
    NgxMagicTableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgxMagicTableComponent.propDecorators = {
        templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxColumnTemplateComponent,] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonSaveTableStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonListColumnStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paginated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customPaginate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        totalCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        currentPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnsArrangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        saveTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        loadTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tableClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theadClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tbodyClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        trowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tcellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isRTL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxMagicTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DirectionDirective = /** @class */ (function () {
    function DirectionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    Object.defineProperty(DirectionDirective.prototype, "direction", {
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            this._direction = direction;
            this.renderer.removeClass(this.el.nativeElement, 'fa-arrow-down');
            this.renderer.removeClass(this.el.nativeElement, 'fa-arrow-up');
            if (this._direction != null) {
                if (this._direction === OrderDirection.Descending) {
                    this.renderer.addClass(this.el.nativeElement, 'fa-arrow-up');
                }
                if (this._direction === OrderDirection.Ascending) {
                    this.renderer.addClass(this.el.nativeElement, 'fa-arrow-down');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DirectionDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[setDirection]'
                },] },
    ];
    /** @nocollapse */
    DirectionDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DirectionDirective.propDecorators = {
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['setDirection',] }]
    };
    return DirectionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DomChangeDirective = /** @class */ (function () {
    function DomChangeDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.domChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var /** @type {?} */ element = this.elementRef.nativeElement;
        this.changes = new MutationObserver(function (mutations) {
            // mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
            // mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
            _this.domChange.emit(_this.elementRef);
        });
        this.changes.observe(element, {
            attributes: true,
            childList: true,
            characterData: true,
            attributeOldValue: true
        });
    }
    /**
     * @return {?}
     */
    DomChangeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.changes.disconnect();
    };
    DomChangeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[domChange]'
                },] },
    ];
    /** @nocollapse */
    DomChangeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DomChangeDirective.propDecorators = {
        domChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DomChangeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * @param {?} rows
     * @param {?} args
     * @return {?}
     */
    SortPipe.prototype.transform = /**
     * @param {?} rows
     * @param {?} args
     * @return {?}
     */
    function (rows, args) {
        var /** @type {?} */ field = args.field;
        var /** @type {?} */ active = args.active || true;
        var /** @type {?} */ direction = args.direction;
        if (active) {
            if (direction === OrderDirection.Ascending) {
                rows.sort(function (a, b) {
                    if (a[field] < b[field]) {
                        return -1;
                    }
                    else if (a[field] > b[field]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
                rows.sort(function (a, b) {
                    if (a[field] > b[field]) {
                        return -1;
                    }
                    else if (a[field] < b[field]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }
        return rows;
    };
    SortPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'sort'
                },] },
    ];
    return SortPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericFilter;
(function (NumericFilter) {
    var filters;
    (function (filters) {
        filters["equals"] = "equals";
        filters["notEquals"] = "not equals";
        filters["greaterThan"] = "greater than";
        filters["notGreaterThan"] = "not greater than";
        filters["smallerThan"] = "smaller than";
        filters["notSmallerThan"] = "not smaller than";
    })(filters = NumericFilter.filters || (NumericFilter.filters = {}));
    /**
     * @return {?}
     */
    function values() {
        return Object.keys(filters).filter(function (type) { return isNaN(/** @type {?} */ (type)) && type !== 'values'; });
    }
    NumericFilter.values = values;
})(NumericFilter || (NumericFilter = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxNumericFilterComponent = /** @class */ (function () {
    function NgxNumericFilterComponent() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.NumericFilter = NumericFilter;
        this.filterValue = [];
    }
    /**
     * @return {?}
     */
    NgxNumericFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addRow();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxNumericFilterComponent.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.filterValue.splice(index, 1);
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxNumericFilterComponent.prototype.addRow = /**
     * @return {?}
     */
    function () {
        this.filterValue.push({ filterType: NumericFilter.filters.equals, filterValue: '' });
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxNumericFilterComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ f = this.filterValue.filter(function (i) { return i.filterType !== undefined && i.filterValue !== ''; });
        this.cell.template.filters = f;
        this.filterChange.emit({ name: this.cell.name, filters: f });
    };
    NgxNumericFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-numeric-filter',
                    template: "<ng-container *ngFor=\"let f of filterValue; let i = index\">\n  <div class=\"input-group mb-3\" style=\"\">\n    <select class=\"input-group-addon btn btn-secondary btn-sm dropdown-toggle\" [(ngModel)]=\"f.filterType\">\n      <option *ngFor=\"let p of NumericFilter.values()\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n    </select>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"f.filterValue\">\n    <button class=\"btn btn-link\" (click)=\"removeRow(i)\">\n      <i class=\"fa fa-minus\"></i>\n    </button>\n  </div>\n</ng-container>\n<button class=\"btn btn-link\" (click)=\"addRow()\">\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n<button class=\"btn btn-primary\" (click)=\"apply()\">Apply</button>",
                    styles: [".input-group{width:300px}.form-control,.input-group-addon{display:inline-flex}"]
                },] },
    ];
    /** @nocollapse */
    NgxNumericFilterComponent.ctorParameters = function () { return []; };
    NgxNumericFilterComponent.propDecorators = {
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxNumericFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StringFilter;
(function (StringFilter) {
    var filters;
    (function (filters) {
        filters["equals"] = "equals";
        filters["notEquals"] = "not equals";
        filters["startsWith"] = "starts with";
        filters["notStartsWith"] = "not starts with";
        filters["endsWith"] = "ends with";
        filters["notEndsWith"] = "not ends with";
        filters["contains"] = "contains";
        filters["notContains"] = "not contains";
    })(filters = StringFilter.filters || (StringFilter.filters = {}));
    /**
     * @return {?}
     */
    function values() {
        return Object.keys(filters).filter(function (type) { return isNaN(/** @type {?} */ (type)) && type !== 'values'; });
    }
    StringFilter.values = values;
})(StringFilter || (StringFilter = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxStringFilterComponent = /** @class */ (function () {
    function NgxStringFilterComponent() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.StringFilter = StringFilter;
        this.filterValue = [];
    }
    /**
     * @return {?}
     */
    NgxStringFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addRow();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxStringFilterComponent.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.filterValue.splice(index, 1);
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxStringFilterComponent.prototype.addRow = /**
     * @return {?}
     */
    function () {
        this.filterValue.push({ filterType: StringFilter.filters.contains, filterValue: '' });
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxStringFilterComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ f = this.filterValue.filter(function (i) { return i.filterType != undefined && i.filterValue != ''; });
        this.cell.template.filters = f;
        this.filterChange.emit({ name: this.cell.name, filters: f });
    };
    NgxStringFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-string-filter',
                    template: "<ng-container *ngFor=\"let f of filterValue; let i = index\">\n  <div class=\"input-group mb-3\" style=\"\">\n    <select class=\"input-group-addon btn btn-secondary btn-sm dropdown-toggle\" [(ngModel)]=\"f.filterType\">\n      <option *ngFor=\"let p of StringFilter.values()\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n    </select>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"f.filterValue\">\n    <button class=\"btn btn-link\" (click)=\"removeRow(i)\">\n      <i class=\"fa fa-minus\"></i>\n    </button>\n  </div>\n</ng-container>\n<button class=\"btn btn-link\" (click)=\"addRow()\">\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n<button class=\"btn btn-primary\" (click)=\"apply()\">Apply</button>",
                    styles: [".input-group{width:300px}.form-control,.input-group-addon{display:inline-flex}"]
                },] },
    ];
    /** @nocollapse */
    NgxStringFilterComponent.ctorParameters = function () { return []; };
    NgxStringFilterComponent.propDecorators = {
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxStringFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EnumFilter;
(function (EnumFilter) {
    var filters;
    (function (filters) {
        filters["equals"] = "equals";
        filters["notEquals"] = "not equals";
    })(filters = EnumFilter.filters || (EnumFilter.filters = {}));
    /**
     * @return {?}
     */
    function values() {
        return Object.keys(filters).filter(function (type) { return isNaN(/** @type {?} */ (type)) && type !== 'values'; });
    }
    EnumFilter.values = values;
})(EnumFilter || (EnumFilter = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxEnumFilterComponent = /** @class */ (function () {
    function NgxEnumFilterComponent() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.EnumFilter = EnumFilter;
        this.filterValue = [];
    }
    /**
     * @return {?}
     */
    NgxEnumFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addRow();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxEnumFilterComponent.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.filterValue.splice(index, 1);
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxEnumFilterComponent.prototype.addRow = /**
     * @return {?}
     */
    function () {
        this.filterValue.push({ filterType: EnumFilter.filters.equals, filterValue: '' });
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxEnumFilterComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ f = this.filterValue.filter(function (i) { return i.filterType != undefined && i.filterValue != ''; });
        this.cell.template.filters = f;
        this.filterChange.emit({ name: this.cell.name, filters: f });
    };
    NgxEnumFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-enum-filter',
                    template: "<ng-container *ngFor=\"let f of filterValue; let i = index\">\n  <div class=\"input-group mb-3\" style=\"\">\n    <select class=\"input-group-addon btn btn-secondary btn-sm dropdown-toggle\" [(ngModel)]=\"f.filterType\">\n      <option *ngFor=\"let p of EnumFilter.values()\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n    </select>\n    <select class=\"input-group-addon btn btn-secondary btn-sm dropdown-toggle\" [(ngModel)]=\"f.filterValue\">\n        <option *ngFor=\"let p of items\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n      </select>\n    <button class=\"btn btn-link\" (click)=\"removeRow(i)\">\n      <i class=\"fa fa-minus\"></i>\n    </button>\n  </div>\n</ng-container>\n<button class=\"btn btn-link\" (click)=\"addRow()\">\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n<button class=\"btn btn-primary\" (click)=\"apply()\">Apply</button>",
                    styles: [".input-group{width:300px}.form-control,.input-group-addon{display:inline-flex}"]
                },] },
    ];
    /** @nocollapse */
    NgxEnumFilterComponent.ctorParameters = function () { return []; };
    NgxEnumFilterComponent.propDecorators = {
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxEnumFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanFilter;
(function (BooleanFilter) {
    var filters;
    (function (filters) {
        filters["equals"] = "equals";
    })(filters = BooleanFilter.filters || (BooleanFilter.filters = {}));
    /**
     * @return {?}
     */
    function values() {
        return Object.keys(filters).filter(function (type) { return isNaN(/** @type {?} */ (type)) && type !== 'values'; });
    }
    BooleanFilter.values = values;
})(BooleanFilter || (BooleanFilter = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxBooleanFilterComponent = /** @class */ (function () {
    function NgxBooleanFilterComponent() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.BooleanFilter = BooleanFilter;
        this.filterValue = [];
    }
    /**
     * @return {?}
     */
    NgxBooleanFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addRow();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxBooleanFilterComponent.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.filterValue.splice(index, 1);
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxBooleanFilterComponent.prototype.addRow = /**
     * @return {?}
     */
    function () {
        this.filterValue.push({ filterType: BooleanFilter.filters.equals, filterValue: '' });
        this.apply();
    };
    /**
     * @return {?}
     */
    NgxBooleanFilterComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ f = this.filterValue.filter(function (i) { return i.filterType != undefined && i.filterValue != ''; });
        this.cell.template.filters = f;
        this.filterChange.emit({ name: this.cell.name, filters: f });
    };
    NgxBooleanFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-boolean-filter',
                    template: "<ng-container *ngFor=\"let f of filterValue; let i = index\">\n  <div class=\"input-group mb-3\" style=\"\">\n    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" [(ngModel)]=\"filterValue\">\n    <button class=\"btn btn-link\" (click)=\"removeRow(i)\">\n      <i class=\"fa fa-minus\"></i>\n    </button>\n  </div>\n</ng-container>\n<button class=\"btn btn-link\" (click)=\"addRow()\">\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n<button class=\"btn btn-primary\" (click)=\"apply()\">Apply</button>",
                    styles: [".input-group{width:300px}.form-control,.input-group-addon{display:inline-flex}"]
                },] },
    ];
    /** @nocollapse */
    NgxBooleanFilterComponent.ctorParameters = function () { return []; };
    NgxBooleanFilterComponent.propDecorators = {
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxBooleanFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ListItemDropdown = /** @class */ (function () {
    function ListItemDropdown(source) {
        if (typeof source === 'string') {
            this.id = this.text = source;
            this.parent = '';
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.parent = source.parent;
        }
    }
    return ListItemDropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgxMultiselectDropdownComponent; }),
    multi: true
};
var /** @type {?} */ noop = function () { };
var NgxMultiselectDropdownComponent = /** @class */ (function () {
    // setDisabledState?(isDisabled: boolean): void {
    //   throw new Error("Method not implemented.");
    // }
    function NgxMultiselectDropdownComponent(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = false;
        this._placeholder = 'Select';
        this.filter = new ListItemDropdown(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'text',
            parentField: 'parent',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: 'Search',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false
        };
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.disabled = false;
        this.buttonListColumnStyle = "btn btn-outline-info";
    }
    Object.defineProperty(NgxMultiselectDropdownComponent.prototype, "placeholder", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = 'Select';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMultiselectDropdownComponent.prototype, "settings", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMultiselectDropdownComponent.prototype, "data", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                // const _items = value.filter((item: any) => {
                //   if (typeof item === 'string' || (typeof item === 'object' && item && item[this._settings.idField] && item[this._settings.textField])) {
                //     return item;
                //   }
                // });
                this._data = value.map(function (item) {
                    return typeof item === 'string'
                        ? new ListItemDropdown(item)
                        : new ListItemDropdown({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            parent: item[_this._settings.parentField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} obj
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        if (obj !== undefined && obj !== null && obj.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (obj.length >= 1) {
                        var /** @type {?} */ firstItem = obj[0];
                        this.selectedItems = [
                            typeof firstItem === 'string'
                                ? new ListItemDropdown(firstItem)
                                : new ListItemDropdown({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    parent: firstItem[this._settings.parentField]
                                })
                        ];
                    }
                }
                catch (/** @type {?} */ e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var /** @type {?} */ _data = obj.map(function (item) {
                    return typeof item === 'string'
                        ? new ListItemDropdown(item)
                        : new ListItemDropdown({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            parent: item[_this._settings.parentField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(obj);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.showButton = /**
     * @return {?}
     */
    function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.itemShowRemaining = /**
     * @return {?}
     */
    function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.id;
    };
    // Set touched on blur
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        this.isDropdownOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = '';
        }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.toggleDropdown = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this.isDropdownOpen = !this.isDropdownOpen;
    };
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.toggleSelectAll = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            this.selectedItems = this._data.slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.isAllItemsSelected = /**
     * @return {?}
     */
    function () {
        return this._data.length === this.selectedItems.length;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.emittedValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        var /** @type {?} */ selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                if (item.id === item.text) {
                    selected.push(item.text);
                }
                else {
                    selected.push(_this.objectify(item));
                }
            });
        }
        else {
            if (val) {
                if (val.id === val.text) {
                    return val.text;
                }
                else {
                    return this.objectify(val);
                }
            }
        }
        return selected;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.objectify = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var /** @type {?} */ obj = {};
        obj[this._settings.idField] = val.id;
        obj[this._settings.textField] = val.text;
        obj[this._settings.parentField] = val.parent;
        return obj;
    };
    /**
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.isLimitSelectionReached = /**
     * @return {?}
     */
    function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.onFilterTextChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onFilterChange.emit($event);
    };
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.onItemClick = /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    function ($event, item) {
        if (this.disabled) {
            return false;
        }
        var /** @type {?} */ found = this.isSelected(item);
        var /** @type {?} */ allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.addSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            var /** @type {?} */ parentItem = this._data.filter(function (x) { return x.text === item.parent; });
            var /** @type {?} */ parentItemseleted = this.selectedItems.filter(function (x) { return x.text === item.parent; });
            if (parentItem.length > 0 && parentItemseleted.length <= 0) {
                this.selectedItems.push(parentItem[0]);
            }
            var /** @type {?} */ childItem = this._data.filter(function (x) { return x.parent === item.text; });
            var /** @type {?} */ childItemseleted = this.selectedItems.filter(function (x) { return x.parent === item.text; });
            if (childItem.length > 0 && childItemseleted.length <= 0) {
                this.selectedItems.push(childItem[0]);
            }
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(this.selectedItems));
    };
    /**
     * @param {?} itemSel
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.removeSelected = /**
     * @param {?} itemSel
     * @return {?}
     */
    function (itemSel) {
        var _this = this;
        if (this.selectedItems.length > 1) {
            this.selectedItems.forEach(function (item) {
                if (itemSel.id === item.id) {
                    if (_this.selectedItems.filter(function (x) { return x.parent === item.parent; }).length > 1) {
                        _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
                        var /** @type {?} */ childs = _this.selectedItems.filter(function (x) { return x.parent === item.text; });
                        for (var /** @type {?} */ index = 0; index < childs.length; index++) {
                            var /** @type {?} */ element = childs[index];
                            if (_this.selectedItems.indexOf(element) !== -1 && _this.selectedItems.length > 1) {
                                _this.selectedItems.splice(_this.selectedItems.indexOf(element), 1);
                            }
                        }
                    }
                }
            });
        }
        // let deSelectedItems = Array<ListItemDropdown>();
        // for (let i = 0; i < this._data.length; i++) {
        //  if(this.selectedItems.indexOf(this._data[i]) === -1)
        //  {
        //   deSelectedItems.push(this._data[i]);
        //  }
        // }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(this.selectedItems));
    };
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    NgxMultiselectDropdownComponent.prototype.isSelected = /**
     * @param {?} clickedItem
     * @return {?}
     */
    function (clickedItem) {
        var /** @type {?} */ found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    NgxMultiselectDropdownComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-ngx-multiselect-dropdown',
                    template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <button tabindex=\"-1\" [ngClass]=\"buttonListColumnStyle\" (click)=\"toggleDropdown($event)\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <!-- <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\"> -->\n    <!-- <span>{{_placeholder}}</span> -->\n    <!-- <i class=\"fa fa-arrow-up\"></i> -->\n    <!-- *ngIf=\"selectedItems.length == 0\" -->\n\n    <!-- <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n          {{item.text}}\n          <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n        </span>\n        <span style=\"float:right !important;padding-right:4px\">\n          <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n          <span [ngClass]=\"isDropdownOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\n        </span> -->\n    <!-- </span> -->\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!isDropdownOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"_data.length > 0 && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\"\n        class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{ _settings.selectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"_data.length>0 && _settings.allowSearchFilter\">\n        <input type=\"text\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\"\n          (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | ng2ListFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item))\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>",
                    styles: [".multiselect-dropdown{position:relative;width:100%}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:-webkit-max-content;width:-moz-max-content;width:max-content;bottom:30px;padding-bottom:5px;margin-bottom:10px;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:'';color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:'';transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    NgxMultiselectDropdownComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgxMultiselectDropdownComponent.propDecorators = {
        onFilterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterChange',] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelect',] }],
        onDeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelect',] }],
        onSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelectAll',] }],
        onDeSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelectAll',] }],
        buttonListColumnStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onTouched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }]
    };
    return NgxMultiselectDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    ListFilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    ListFilterPipe.prototype.applyFilter = /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    function (item, filter) {
        return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
    };
    ListFilterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'ng2ListFilter',
                    pure: false
                },] },
    ];
    return ListFilterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var /** @type {?} */ clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ClickOutsideDirective.propDecorators = {
        clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event', '$event.target'],] }]
    };
    return ClickOutsideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxMagicTableModule = /** @class */ (function () {
    function NgxMagicTableModule() {
    }
    NgxMagicTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ],
                    declarations: [NgxMagicTableComponent,
                        NamedTemplateDirective,
                        SortPipe,
                        NgxColumnTemplateComponent,
                        NgxNumericFilterComponent,
                        NgxStringFilterComponent,
                        NgxEnumFilterComponent,
                        DirectionDirective,
                        DomChangeDirective,
                        NgxBooleanFilterComponent,
                        NgxMultiselectDropdownComponent,
                        ClickOutsideDirective,
                        ListFilterPipe],
                    exports: [NgxMagicTableComponent,
                        NgxColumnTemplateComponent,
                        NamedTemplateDirective,
                        NgxStringFilterComponent,
                        DirectionDirective,
                        DomChangeDirective,
                        NgxNumericFilterComponent,
                        NgxBooleanFilterComponent,
                        NgxMultiselectDropdownComponent,
                        NgxEnumFilterComponent],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
                },] },
    ];
    return NgxMagicTableModule;
}());
// export class NgxMultiselectDropdownComponent {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: NgxMultiselectDropdownComponent
//     };
//   }
// }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9QYWdpbmctaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL3NvcnQtaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2hlYWRlci1pdGVtLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL3NvcnQvc29ydC5waXBlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9udW1lcmljLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbnVtZXJpYy1maWx0ZXIvbmd4LW51bWVyaWMtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvc3RyaW5nLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2VudW0tZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9ib29sZWFuLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtYm9vbGVhbi1maWx0ZXIvbmd4LWJvb2xlYW4tZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luZ0lucHV0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5wdXQgaW1wbGVtZW50cyBJUGFnaW5nSW5wdXQge1xyXG4gICBwYWdlOiBudW1iZXI7XHJcbiAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvcnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0SW5wdXQgaW1wbGVtZW50cyBJU29ydElucHV0IHtcclxuICAgIHNvcnQ6IHN0cmluZztcclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVySXRlbSB7XHJcbiAgICBwdWJsaWMgV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBUaXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hpbGRzOiBIZWFkZXJJdGVtW107XHJcbiAgICBwdWJsaWMgU29ydGFibGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgVGVtcGxhdGU6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEhlYWRlckl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgICAgICB0aGlzLlRpdGxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5JbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5Tb3J0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5XaWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLlZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQ2hpbGRzID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuL2hlYWRlci1pdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDZWxsIHtcclxuICBwdWJsaWMgY2VsbFdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgY29sU3BhbjogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3dTcGFuOiBudW1iZXI7XHJcbiAgcHVibGljIHNvcnRhYmxlOiBhbnk7XHJcbiAgcHVibGljIHRlbXBsYXRlOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudDtcclxuICBwdWJsaWMgSGVhZGVySXRlbTogSGVhZGVySXRlbTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SGVhZGVyQ2VsbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY29sU3BhbiA9IDE7XHJcbiAgICB0aGlzLnJvd1NwYW4gPSAxO1xyXG4gICAgdGhpcy5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgSW5qZWN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblxyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmFtZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlICB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBAQXR0cmlidXRlKCduYW1lJykgcHVibGljIG5hbWUsXHJcbiAgICAgIEBJbmplY3QoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxyXG4gICkge1xyXG4gIH1cclxufSIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbixcclxuICBUZW1wbGF0ZVJlZiwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vLi4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY29sdW1uLXRlbXBsYXRlJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhcmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBzb3J0YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29sbGVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2VsbFdpZHRoOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW107XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOYW1lZFRlbXBsYXRlRGlyZWN0aXZlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOYW1lZFRlbXBsYXRlRGlyZWN0aXZlPjtcclxuXHJcbiAgcHVibGljIGhlYWRlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwdWJsaWMgYm9keTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwdWJsaWMgZmlsdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgIHRoaXMucGFyZW50ID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY2VsbFdpZHRoID0gMDtcclxuICAgIHRoaXMuc29ydGFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29sbGVjdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5vcm1hbGl6ZUluZGV4ZXModGVtcGxhdGVzOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudFtdKSB7XHJcbiAgICB0ZW1wbGF0ZXMuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4ge1xyXG4gICAgICBpZiAoZmlyc3QucGFyZW50IDwgc2Vjb25kLnBhcmVudCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LnBhcmVudCA+IHNlY29uZC5wYXJlbnQpIHsgcmV0dXJuIDE7IH1cclxuXHJcbiAgICAgIGlmIChmaXJzdC5pbmRleCA8IHNlY29uZC5pbmRleCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LmluZGV4ID4gc2Vjb25kLmluZGV4KSB7IHJldHVybiAxOyB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSkuZm9yRWFjaCgodCwgaW5kZXgpID0+IHtcclxuICAgICAgdC5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBjb25zdCBoID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2hlYWRlcicpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBoID8gaC50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGIgPSB0aGlzLnRlbXBsYXRlcy5maW5kKHQgPT4gdC5uYW1lID09PSAnYm9keScpO1xyXG4gICAgdGhpcy5ib2R5ID0gYiA/IGIudGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBmID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2ZpbHRlcicpO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmID8gZi50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5pbXBvcnQgeyBQYWdpbmdJbnB1dCB9IGZyb20gJy4uL21vZGVscy9QYWdpbmctaW5wdXQnO1xyXG5pbXBvcnQgeyBTb3J0SW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvc29ydC1pbnB1dCc7XHJcbmltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRDb250ZW50Q2hpbGRyZW4sXHJcblx0VGVtcGxhdGVSZWYsXHJcblx0UXVlcnlMaXN0LFxyXG5cdEFmdGVyQ29udGVudEluaXQsXHJcblx0Q29udGVudENoaWxkLFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXIsXHJcblx0Vmlld0NoaWxkLFxyXG5cdEFmdGVyVmlld0NoZWNrZWQsXHJcblx0QWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdERpcmVjdGl2ZSxcclxuXHRFbGVtZW50UmVmLFxyXG5cdFJlbmRlcmVyLFxyXG5cdEhvc3RMaXN0ZW5lcixcclxuXHRSZW5kZXJlcjIsXHJcblx0Vmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL25neC1uYW1lZC10ZW1wbGF0ZS9uZ3gtbmFtZWQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50J1xyXG5pbXBvcnQgeyBPcmRlckRpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9lbnVtJztcclxuXHJcbmltcG9ydCBndWlkIGZyb20gJ2FuZ3VsYXItdWlkJztcclxuaW1wb3J0IHsgSVBhZ2luZ0lucHV0LCBJU29ydElucHV0IH0gZnJvbSAnLi4vbW9kZWxzL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IENlbGxzSW5mbyB9IGZyb20gJy4uL21vZGVscy9jZWxscy1pbmZvJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbmd4LW1hZ2ljLXRhYmxlJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG48ZGl2IChkb21DaGFuZ2UpPVwib25NYWluRG9tQ2hhbmdlKCRldmVudClcIiBbbmdDbGFzc109XCJbaXNSVEwgPyAncnRsJyA6ICdsdHInXVwiPlxyXG4gIDxkaXYgaWQ9XCJNYWluTWFnaWNUYWJsZUlkXCIgY2xhc3M9XCJtYWluTWFnaWNUYWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZGRpbmdEaXZcIiBbc3R5bGUud2lkdGgucHhdPVwidGFibGVXaWR0aFwiPlxyXG4gICAgICA8dGFibGUgIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIiBjbGFzcz1cInJ6LXRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzPVwibmd4VGhlYWRcIiBbbmdDbGFzc109XCJ0aGVhZENsYXNzXCI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNlbGxSb3cgb2YgY2VsbHNcIj5cclxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShjZWxsUm93KVwiIFtzdHlsZS53aWR0aC5weF09XCJjZWxsLmNlbGxXaWR0aFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiXHJcbiAgICAgICAgICAgICAgW2F0dHIudmlzaWJsZV09XCJjZWxsLnZpc2libGVcIiBbbmFtZV09XCJjZWxsLm5hbWVcIiBbaWRdPVwidWlkKyctJytjZWxsLm5hbWUrJy1oZWFkJ1wiIFtkcmFnZ2FibGVdPVwiY2VsbC50ZW1wbGF0ZS5kcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICAgIChkcm9wKT1cImRyb3AoY2VsbClcIiAoZHJhZ292ZXIpPVwiYWxsb3dEcm9wKCRldmVudClcIiAoZHJhZ3N0YXJ0KT1cImRyYWcoY2VsbClcIiBbYXR0ci5jb2xzcGFuXT1cImNlbGwuY29sU3BhblwiXHJcbiAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJjZWxsLnJvd1NwYW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiY2VsbC5uYW1lKydyZXNpemFibGUnXCIgKG1vdXNlZG93bik9XCJyZXNpemVIYW5kbGUoY2VsbCwkZXZlbnQsJ3Rib2R5MScpXCIgY2xhc3M9XCJyei1oYW5kbGVcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJzb3J0VG9nZ2xlKGNlbGwpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5oZWFkZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NlbGw6IGNlbGwsIGRpcmVjdGlvbjogKGNlbGwubmFtZSA9PT0gc29ydCkgPyBzb3J0RGlyZWN0aW9uIDogdW5kZWZpbmVkfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC50ZW1wbGF0ZS5maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgbmdiRHJvcGRvd24gKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiIGNsYXNzPVwiZHJvcGRvd24gZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuZ2JEcm9wZG93blRvZ2dsZSB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwiW2NlbGwudGVtcGxhdGUuZmlsdGVycy5sZW5ndGggPT0gMCA/ICdidG4tZGVmYXVsdCcgOiAnYnRuLXdhcm5pbmcnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gXCIgW2lkXT1cImNlbGwubmFtZSArICctJyArIHVpZCAgKyAnLWZpbHRlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZpbHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgbmdiRHJvcGRvd25NZW51IFthcmlhLWxhYmVsbGVkYnldPVwiY2VsbC5uYW1lICsgJy0nICsgdWlkICArICctZmlsdGVyJ1wiIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmZpbHRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y2VsbDogY2VsbCwgcm93czogcm93c31cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBpZD1cInRib2R5MVwiIChkb21DaGFuZ2UpPVwib25Eb21DaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwibmd4VGJvZHlcIiBbbmdDbGFzc109XCJ0Ym9keUNsYXNzXCIgKm5nSWY9XCJwYWdpbmF0ZWRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzIHwgc29ydDp7ZmllbGQ6IHNvcnQsIGRpcmVjdGlvbjogc29ydERpcmVjdGlvbiwgYWN0aXZlOiAhY3VzdG9tU29ydH0gfCBwYWdpbmF0ZToge1xyXG4gICAgICAgIGl0ZW1zUGVyUGFnZTogcGFnZVNpemUsXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgIHRvdGFsSXRlbXM6IGN1c3RvbVBhZ2luYXRlID8gdG90YWxDb3VudCA6IHJvd3MubGVuZ3RoLFxyXG4gICAgICAgIGlkOiB1aWQgfVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT0gc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZENsYXNzIDogdHJvd0NsYXNzXVwiPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShsb3dlckNlbGxzKTsgbGV0IGxvd2VySW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiIFtzdHlsZS53aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwie3t0Y2VsbENsYXNzfX1cIiAgKm5nSWY9XCIoKGluKSAqIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnID8gMSA6IHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCkpICUgZ2V0TGNtKHJvdykgPT09IDBcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJnZXRMY20ocm93KSAvIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gIT09ICcnID8gTWF0aC5tYXgocm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoLCAxKSA6IDEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmJvZHlcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jvdzogcm93LCBjZWxsOiBjZWxsLCBpbmRleDogKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAvIGdldExjbShyb3cpfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwiIXBhZ2luYXRlZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3MgfCBzb3J0OntmaWVsZDogc29ydCwgZGlyZWN0aW9uOiBzb3J0RGlyZWN0aW9uLCBhY3RpdmU6ICFjdXN0b21Tb3J0fVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT0gc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZENsYXNzIDogdHJvd0NsYXNzIF1cIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShsb3dlckNlbGxzKTsgbGV0IGxvd2VySW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiIFtzdHlsZS53aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCJcclxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidGNlbGxDbGFzc1wiICpuZ0lmPVwiKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAlIGdldExjbShyb3cpID09PSAwXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnJvd3NwYW5dPVwiZ2V0TGNtKHJvdykgLyAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uICE9PSAnJyA/IE1hdGgubWF4KHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCwgMSkgOiAxKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5ib2R5XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IHJvdywgY2VsbDogY2VsbCwgaW5kZXg6ICgoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgLyBnZXRMY20ocm93KX1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHBhZ2luZ1wiICpuZ0lmPVwicGFnaW5hdGVkXCI+XHJcbiAgICA8bGliLW5neC1tdWx0aXNlbGVjdC1kcm9wZG93biBbYnV0dG9uTGlzdENvbHVtblN0eWxlXT1cImJ1dHRvblNhdmVUYWJsZVN0eWxlXCIgKGNoYW5nZSk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IENvbHVtbnMnXCIgW2RhdGFdPVwiZHJvcGRvd25MaXN0XCIgWyhuZ01vZGVsKV09XCJkcm9wZG93bnNlbGVjdGVkSXRlbXNcIiBbc2V0dGluZ3NdPVwiZHJvcGRvd25TZXR0aW5nc1wiXHJcbiAgICAgIChvblNlbGVjdCk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiIChvbkRlU2VsZWN0KT1cIm9uSXRlbURlU2VsZWN0KCRldmVudClcIiAob25TZWxlY3RBbGwpPVwib25TZWxlY3RBbGwoJGV2ZW50KVwiPlxyXG4gICAgPC9saWItbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duPlxyXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAycHg7IG1hcmdpbi1yaWdodDogMnB4XCI+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uc2F2ZVRhYmxlKClcIiBbbmdDbGFzc109XCJidXR0b25TYXZlVGFibGVTdHlsZVwiIHRpdGxlPVwiU2F2ZSBUYWJsZVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmxvcHB5LW9cIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cGFnaW5hdGlvbi1jb250cm9scyAocGFnZUNoYW5nZSk9XCJzZWxlY3RQYWdlKCRldmVudClcIiBwcmV2aW91c0xhYmVsPVwiXCIgbmV4dExhYmVsPVwiXCIgW2lkXT1cInVpZFwiPjwvcGFnaW5hdGlvbi1jb250cm9scz5cclxuICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgPGRpdiAqbmdJZj1cInBhZ2VTaXplcy5sZW5ndGhcIiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgIDxzZWxlY3QgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgW3ZhbHVlXT0ncGFnZVNpemUnIChjaGFuZ2UpPVwiY2hhbmdlUGVyUGFnZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgcGFnZVNpemVzXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgdGFibGUgdGhlYWQgdGh7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfVtkcmFnZ2FibGU9dHJ1ZV17LWtodG1sLXVzZXItZHJhZzplbGVtZW50Oy13ZWJraXQtdXNlci1kcmFnOmVsZW1lbnR9c2VsZWN0LmJ0bi1zbXtwYWRkaW5nOi4xcmVtO2Rpc3BsYXk6aW5saW5lLWZsZXh9dGFibGV7dGFibGUtbGF5b3V0OmZpeGVkfXRhYmxlLnJ6LXRhYmxle2Rpc3BsYXk6YmxvY2s7d2lkdGg6YXV0bzt0YWJsZS1sYXlvdXQ6Zml4ZWQ7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfXRhYmxlLnJ6LXRhYmxlIHRoe3Bvc2l0aW9uOnJlbGF0aXZlO21pbi13aWR0aDoyNXB4fXRhYmxlLnJ6LXRhYmxlIHRoIC5yei1oYW5kbGV7d2lkdGg6MnB4O2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0Oi0ycHg7Y3Vyc29yOmV3LXJlc2l6ZSFpbXBvcnRhbnQ7YmFja2dyb3VuZDpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDJweCxyZ2JhKDAsMCwwLC4xNSkgMnB4LHJnYmEoMCwwLDAsLjE1KSA0cHgpO3otaW5kZXg6OTk5OTk5OTl9dGFibGUucnotdGFibGUgdGggLnJ6LWhhbmRsZTpob3ZlcntiYWNrZ3JvdW5kOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIzZjNzU3ZDAwLCM2Yzc1N2QgMnB4LCM2Yzc1N2QgMnB4LCM2Yzc1N2QwMCA0cHgpfS5ydGwgdGFibGUucnotdGFibGUgdGggLnJ6LWhhbmRsZXtyaWdodDphdXRvO2xlZnQ6LTJweH0ucnRse2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fS5sdHJ7ZGlyZWN0aW9uOmx0ciFpbXBvcnRhbnR9Lm1haW5NYWdpY1RhYmxle292ZXJmbG93OmF1dG99LnBhZ2luZ3t3aWR0aDoxMDAlO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4fS5wYWRkaW5nRGl2e3BhZGRpbmc6MTBweH0ubmd4VGhlYWR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5uZ3hUYm9keXtoZWlnaHQ6LXdlYmtpdC1maWxsLWF2YWlsYWJsZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbn0ubHRyIC5uZ3hUYm9keXtkaXJlY3Rpb246cnRsfS5ydGwgLm5neFRib2R5e2RpcmVjdGlvbjpsdHJ9Lmx0ciAubmd4VGhlYWR7ZGlyZWN0aW9uOnJ0bH0ucnRsIC5uZ3hUaGVhZHtkaXJlY3Rpb246bHRyfS50YWJsZSB0ZCwudGFibGUgdGh7d29yZC1icmVhazpicmVhay1hbGx9LnRhYmxlIHRke2JvcmRlcjoxcHggc29saWQgI2RlZTJlNn0uc2F2ZXRhYmxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHh9Lmx0ciAuc2F2ZXRhYmxle3JpZ2h0OjEwcHh9LnJ0bCAuc2F2ZXRhYmxle2xlZnQ6MTBweH11bC5uZ3gtcGFnaW5hdGlvbnttYXJnaW46MH0ucnRsIC5wYWdpbmd7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9Lmx0ciAucGFnaW5ne2RpcmVjdGlvbjpsdHIhaW1wb3J0YW50fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY1RhYmxlQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblx0QENvbnRlbnRDaGlsZHJlbihOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudClcclxuXHRzZXQgdGVtcGxhdGVzKHZhbHVlOiBRdWVyeUxpc3Q8Tmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQ+KSB7XHJcblx0XHR0aGlzLnRlbXBsYXRlc0FycmF5ID0gdmFsdWUudG9BcnJheSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gbnVsbDtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gbnVsbDtcclxuXHRcdHRoaXMudGFibGVXaWR0aCA9IDIwMDtcclxuXHRcdHRoaXMubWFpbldpZHRoID0gMjAwO1xyXG5cdFx0dGhpcy5pc1JUTCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zY3JvbGxXaWR0aCA9IDA7XHJcblx0XHR0aGlzLmxpc3RjZWxsc0luZm8gPSBuZXcgQXJyYXk8Q2VsbHNJbmZvPigpO1xyXG5cdFx0dGhpcy5idXR0b25MaXN0Q29sdW1uU3R5bGUgPSBcImJ0biBidG4tb3V0bGluZS1pbmZvXCI7XHJcblx0XHR0aGlzLmJ1dHRvblNhdmVUYWJsZVN0eWxlID0gXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiO1xyXG5cdFx0dGhpcy50YWJsZUluZm8gPSBuZXcgQXJyYXk8Q2VsbHNJbmZvPigpO1xyXG5cdFx0dGhpcy5hdXRvU2l6ZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRASW5wdXQoKVxyXG5cdHNldCByb3dzKHJvd3M6IEFycmF5PFQ+KSB7XHJcblx0XHRpZiAoIXJvd3MpIHtcclxuXHRcdFx0dGhpcy5fcm93cyA9IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcm93cyA9IHJvd3M7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldCByb3dzKCk6IEFycmF5PFQ+IHtcclxuXHRcdHJldHVybiB0aGlzLl9yb3dzO1xyXG5cdH1cclxuXHJcblx0QElucHV0KClcclxuXHRhdXRvU2l6ZTogQm9vbGVhbjtcclxuXHJcblx0QElucHV0KCkgYnV0dG9uU2F2ZVRhYmxlU3R5bGU6IHN0cmluZztcclxuXHRASW5wdXQoKSBidXR0b25MaXN0Q29sdW1uU3R5bGU6IHN0cmluZztcclxuXHRASW5wdXQoKVxyXG5cdHBhZ2luYXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpXHJcblx0Y3VzdG9tU29ydDogQm9vbGVhbiA9IHRydWU7XHJcblx0QElucHV0KClcclxuXHRjdXN0b21QYWdpbmF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpXHJcblx0dG90YWxDb3VudDogTnVtYmVyID0gMDtcclxuXHRASW5wdXQoKVxyXG5cdHBhZ2VTaXplOiBOdW1iZXIgPSAxMDtcclxuXHRASW5wdXQoKVxyXG5cdGN1cnJlbnRQYWdlOiBOdW1iZXIgPSAxO1xyXG5cdEBJbnB1dCgpXHJcblx0cGFnZVNpemVzOiBudW1iZXJbXSA9IFsxMCwgMjAsIDUwLCAxMDBdO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdHNvcnQ6IFN0cmluZyA9ICcnO1xyXG5cdEBJbnB1dCgpXHJcblx0c29ydERpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0aGlkZGVuOiBCb29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KClcclxuXHRzZWxlY3RlZENsYXNzOiBTdHJpbmcgPSAndGFibGUtc2Vjb25kYXJ5JztcclxuXHJcblx0QE91dHB1dCgpXHJcblx0cGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2luZ0lucHV0PigpO1xyXG5cdEBPdXRwdXQoKVxyXG5cdHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElTb3J0SW5wdXQ+KCk7XHJcblx0QE91dHB1dCgpXHJcblx0cGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElQYWdpbmdJbnB1dD4oKTtcclxuXHJcblx0QE91dHB1dCgpXHJcblx0c2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblx0QE91dHB1dCgpXHJcblx0Y29sdW1uc0FycmFuZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBPdXRwdXQoKSBzYXZlVGFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PENlbGxzSW5mbz4+KCk7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0cHVibGljIHNldCBsb2FkVGFibGUoYXJyYXk6IEFycmF5PENlbGxzSW5mbz4pIHtcclxuXHRcdGlmIChhcnJheSkge1xyXG5cclxuXHRcdFx0dGhpcy50YWJsZUluZm8gPSBhcnJheTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHR9XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0dGFibGVDbGFzczogU3RyaW5nID0gJ3RhYmxlJzsgLy8gdGFibGUtYm9yZGVyZWRcclxuXHRASW5wdXQoKVxyXG5cdHRoZWFkQ2xhc3M6IFN0cmluZyA9ICd0aGVhZC1saWdodCc7XHJcblx0QElucHV0KClcclxuXHR0Ym9keUNsYXNzOiBTdHJpbmcgPSAnJztcclxuXHRASW5wdXQoKVxyXG5cdHRyb3dDbGFzczogU3RyaW5nID0gJyc7XHJcblx0QElucHV0KClcclxuXHR0Y2VsbENsYXNzOiBTdHJpbmcgPSAnJztcclxuXHRASW5wdXQoKSBpc1JUTDogYm9vbGVhbjtcclxuXHJcblx0ZHJvcGRvd25MaXN0ID0gW107XHJcblx0ZHJvcGRvd25zZWxlY3RlZEl0ZW1zID0gW107XHJcblx0ZHJvcGRvd25TZXR0aW5ncyA9IHt9O1xyXG5cdHB1YmxpYyB0YWJsZUluZm86IEFycmF5PENlbGxzSW5mbz47XHJcblx0cHVibGljIGxpc3RjZWxsc0luZm86IEFycmF5PENlbGxzSW5mbz47XHJcblx0cHVibGljIHNjcm9sbFdpZHRoOiBudW1iZXI7XHJcblx0cHVibGljIHRhYmxlV2lkdGg6IG51bWJlcjtcclxuXHRwdWJsaWMgbWFpbldpZHRoOiBudW1iZXI7XHJcblxyXG5cdHB1YmxpYyBfcm93cyA9IEFycmF5PFQ+KCk7XHJcblx0cHVibGljIE1hdGggPSBNYXRoO1xyXG5cdHB1YmxpYyBBcnIgPSBBcnJheTtcclxuXHRwdWJsaWMgdGVtcGxhdGVzQXJyYXk6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50W107XHJcblx0cHVibGljIGNlbGxzOiBBcnJheTxBcnJheTxIZWFkZXJDZWxsPj4gPSBuZXcgQXJyYXk8QXJyYXk8SGVhZGVyQ2VsbD4+KCk7XHJcblx0cHVibGljIGhlYWQ6IEFycmF5PEhlYWRlckl0ZW0+ID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblx0cHVibGljIGxvd2VyQ2VsbHM6IEFycmF5PEhlYWRlckNlbGw+ID0gbmV3IEFycmF5PEhlYWRlckNlbGw+KCk7XHJcblx0cHVibGljIGRlcHRoID0gMDtcclxuXHRwdWJsaWMgdWlkID0gZ3VpZCgpO1xyXG5cdHB1YmxpYyBzZWxlY3RlZFJvdzogVDtcclxuXHRwdWJsaWMgZHJhZ2dpbmdDZWxsOiBIZWFkZXJDZWxsO1xyXG5cdHB1YmxpYyBzb3J0SW5wdXQ6IFNvcnRJbnB1dCA9IG5ldyBTb3J0SW5wdXQoKTtcclxuXHRwdWJsaWMgcGFnaW5nSW5wdXQ6IFBhZ2luZ0lucHV0ID0gbmV3IFBhZ2luZ0lucHV0KCk7XHJcbiAgXHJcblx0cGl4Y2VsWEJlZm9yZTogbnVtYmVyO1xyXG5cdHdpZHRoQmVmb3JlOiBudW1iZXI7XHJcblx0d2lkdGhBZnRlcjogbnVtYmVyO1xyXG5cdHJlc2l6ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcblx0dW5zdWJzY3JpYmVNb3VzZU1vdmU6ICgpID0+IHZvaWQ7XHJcblx0dW5zdWJzY3JpYmVNb3VzZVVwOiAoKSA9PiB2b2lkO1xyXG5cdHBpeGNlbFhBZnRlcjogbnVtYmVyO1xyXG5cclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblxyXG5cdFx0Tmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQubm9ybWFsaXplSW5kZXhlcyh0aGlzLnRlbXBsYXRlc0FycmF5KTtcclxuXHRcdHRoaXMudGVtcGxhdGVzQXJyYXkuZm9yRWFjaChpID0+XHJcblx0XHRcdGkuY2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5lcmF0ZUNlbGxzKCkpXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICh0aGlzLmF1dG9TaXplKSB7XHJcblx0XHRcdHRoaXMuYXV0b1NpemVDZWxscyh0aGlzLm1haW5TaXplKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZUluZm8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGFibGVJbmZvW2ldO1xyXG5cdFx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0FycmF5LmZpbHRlcih4ID0+IHguaW5kZXggPT09IGVsZW1lbnQuaW5kZXgpO1xyXG5cdFx0XHRsZXQgaW5kZXggPSB0aGlzLnRlbXBsYXRlc0FycmF5LmluZGV4T2YodGVtcGxhdGVbMF0pO1xyXG5cclxuXHRcdFx0dGVtcGxhdGVbMF0uY2VsbFdpZHRoID0gZWxlbWVudC5jZWxsV2lkdGg7XHJcblx0XHRcdHRlbXBsYXRlWzBdLnNvcnRhYmxlID0gZWxlbWVudC5zb3J0YWJsZTtcclxuXHRcdFx0dGVtcGxhdGVbMF0uZHJhZ2dhYmxlID0gZWxlbWVudC5kcmFnZ2JsZTtcclxuXHRcdFx0dGVtcGxhdGVbMF0udmlzaWJsZSA9IGVsZW1lbnQudmlzaWJsZTtcclxuXHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSB0ZW1wbGF0ZVswXTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdO1xyXG5cdFx0XHR0aGlzLmRyb3Bkb3duTGlzdC5wdXNoKHsgaXRlbV9pZDogZWxlbWVudC5pbmRleCwgaXRlbV90ZXh0OiBlbGVtZW50Lm5hbWUsIHBhcmVudDogZWxlbWVudC5wYXJlbnQgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcm9wZG93blNldHRpbmdzID0ge1xyXG5cdFx0XHRzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG5cdFx0XHRpZEZpZWxkOiAnaXRlbV9pZCcsXHJcblx0XHRcdHRleHRGaWVsZDogJ2l0ZW1fdGV4dCcsXHJcblx0XHRcdHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcclxuXHRcdFx0dW5TZWxlY3RBbGxUZXh0OiAnVW5TZWxlY3QgQWxsJyxcclxuXHRcdFx0aXRlbXNTaG93TGltaXQ6IDIsXHJcblx0XHRcdGFsbG93U2VhcmNoRmlsdGVyOiB0cnVlLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRMY20ocm93OiBhbnkpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgbGNtID0gdGhpcy5sY21PZkxpc3QoXHJcblx0XHRcdHRoaXMubG93ZXJDZWxscy5tYXAoaSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGkudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJydcclxuXHRcdFx0XHRcdD8gMVxyXG5cdFx0XHRcdFx0OiBNYXRoLm1heChyb3dbaS50ZW1wbGF0ZS5jb2xsZWN0aW9uLnRvU3RyaW5nKCldLmxlbmd0aCwgMSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIGxjbTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnY2QoYSwgYik6IG51bWJlciB7XHJcblx0XHRpZiAoYiA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gYTsgLy8gc28gdGhhdCB0aGUgcmVjdXJzaW9uIGRvZXMgbm90IGdvIG9uIGZvcmV2ZXJcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdjZChiLCBhICUgYik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGNtT2ZMaXN0KGFycik6IG51bWJlciB7XHJcblx0XHRjb25zdCBkID0gdGhpcztcclxuXHRcdGNvbnN0IHQgPSBhcnIucmVkdWNlKChhLCBiKSA9PiBkLmxjbShhLCBiKSk7XHJcblx0XHRyZXR1cm4gdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsY20oYSwgYik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gKGEgKiBiKSAvIHRoaXMuZ2NkKGEsIGIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFsbG93RHJvcCh4OiBhbnkpIHtcclxuXHRcdHgucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcm9wKHg6IEhlYWRlckNlbGwpIHtcclxuXHRcdGlmICh0aGlzLmRyYWdnaW5nQ2VsbCA9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmRyYWdnaW5nQ2VsbC50ZW1wbGF0ZS5wYXJlbnQgIT09IHgudGVtcGxhdGUucGFyZW50KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0bXAgPSB4LnRlbXBsYXRlLmluZGV4O1xyXG5cdFx0eC50ZW1wbGF0ZS5pbmRleCA9IHRoaXMuZHJhZ2dpbmdDZWxsLnRlbXBsYXRlLmluZGV4O1xyXG5cdFx0dGhpcy5kcmFnZ2luZ0NlbGwudGVtcGxhdGUuaW5kZXggPSB0bXA7XHJcblx0XHR0aGlzLmRyYWdnaW5nQ2VsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcblx0XHR0aGlzLmNvbHVtbnNBcnJhbmdlQ2hhbmdlLmVtaXQoXHJcblx0XHRcdHRoaXMudGVtcGxhdGVzQXJyYXkubWFwKHQgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRuYW1lOiB0Lm5hbWUsXHJcblx0XHRcdFx0XHRwYXJlbnQ6IHQucGFyZW50LFxyXG5cdFx0XHRcdFx0aW5kZXg6IHQuaW5kZXhcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmFnKHg6IEhlYWRlckNlbGwpIHtcclxuXHRcdHRoaXMuZHJhZ2dpbmdDZWxsID0geDtcclxuXHR9XHJcblx0cHJvdGVjdGVkIGdlbmVyYXRlQ2VsbHMoKSB7XHJcblxyXG5cdFx0dGhpcy5oZWFkID0gdGhpcy5nZW5lcmF0ZUhlYWRlcnMoKTtcclxuXHRcdHRoaXMudGFibGVXaWR0aCA9IHRoaXMuaGVhZC5tYXAoaSA9PiAraS5XaWR0aClcclxuXHRcdFx0LnJlZHVjZTxudW1iZXI+KChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQsIDApO1xyXG5cdFx0dGhpcy5kZXB0aCA9IE1hdGgubWF4KFxyXG5cdFx0XHQuLi50aGlzLmhlYWQubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLkRlcHRoKGl0ZW0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0XHR0aGlzLmxvd2VyQ2VsbHMgPSBbXTtcclxuXHRcdHRoaXMuY3JlYXRlSGVhZGVyQ2VsbHModGhpcy5oZWFkLCAwLCB0aGlzLmRlcHRoKTtcclxuXHR9XHJcbiAgXHJcblx0bWFpblNpemUoKTogbnVtYmVyIHtcclxuXHRcdGxldCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYWluTWFnaWNUYWJsZUlkJyk7XHJcblx0XHRyZXR1cm4gaHRtbEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblx0fVxyXG5cdHByb3RlY3RlZCBhdXRvU2l6ZUNlbGxzKGNsaWVudFdpZHRoOiBudW1iZXIpIHtcclxuXHJcblx0XHRsZXQgcm93Q291bnQgPSAwO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XTtcclxuXHRcdFx0bGV0IGNoaWxkcyA9IHRoaXMudGVtcGxhdGVzQXJyYXlcclxuXHRcdFx0XHQuZmlsdGVyKHQgPT4gdC5wYXJlbnQgPT09IGVsZW1lbnQubmFtZSk7XHJcblx0XHRcdGlmIChjaGlsZHMubGVuZ3RoIDwgMSkge1xyXG5cclxuXHRcdFx0XHRyb3dDb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNlbGxXaWR0aCA9IGNsaWVudFdpZHRoIC8gcm93Q291bnQ7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdO1xyXG5cdFx0XHRsZXQgY2hpbGRzID0gdGhpcy50ZW1wbGF0ZXNBcnJheVxyXG5cdFx0XHRcdC5maWx0ZXIodCA9PiB0LnBhcmVudCA9PT0gZWxlbWVudC5uYW1lKTtcclxuXHRcdFx0aWYgKGNoaWxkcy5sZW5ndGggPCAxKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5jZWxsV2lkdGggPSBjZWxsV2lkdGg7XHJcblx0XHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdlbmVyYXRlSGVhZGVycyhoZWFkZXJOYW1lOiBTdHJpbmcgPSAnJyk6IEFycmF5PEhlYWRlckl0ZW0+IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxIZWFkZXJJdGVtPigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVxyXG5cdFx0XHQuZmlsdGVyKHQgPT4gdC5wYXJlbnQgPT09IGhlYWRlck5hbWUpXHJcblx0XHRcdC5maWx0ZXIodCA9PiB0LnZpc2libGUgPT09IHRydWUpXHJcblx0XHRcdC5zb3J0KChmaXJzdCwgc2Vjb25kKSA9PiB7XHJcblx0XHRcdFx0aWYgKGZpcnN0LmluZGV4ID4gc2Vjb25kLmluZGV4KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChmaXJzdC5pbmRleCA8IHNlY29uZC5pbmRleCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZm9yRWFjaCh0ID0+IHtcclxuXHRcdFx0XHRsZXQgaXRlbTogSGVhZGVySXRlbTtcclxuXHRcdFx0XHRpdGVtID0gbmV3IEhlYWRlckl0ZW0oKTtcclxuXHRcdFx0XHRpdGVtLlRpdGxlID0gdC50aXRsZTtcclxuXHRcdFx0XHRpdGVtLkluZGV4ID0gK3QuaW5kZXg7XHJcblx0XHRcdFx0aXRlbS5Tb3J0YWJsZSA9IHQuc29ydGFibGU7XHJcblx0XHRcdFx0aXRlbS5UZW1wbGF0ZSA9IHQ7XHJcblx0XHRcdFx0aXRlbS5WaXNpYmxlID0gdC52aXNpYmxlO1xyXG5cdFx0XHRcdGl0ZW0uQ2hpbGRzID0gdGhpcy5nZW5lcmF0ZUhlYWRlcnModC5uYW1lKTtcclxuXHRcdFx0XHRpdGVtLldpZHRoID0gaXRlbS5DaGlsZHMubGVuZ3RoID09PSAwICYmIGl0ZW0uVmlzaWJsZSA9PT0gdHJ1ZSA/ICt0LmNlbGxXaWR0aCA6IGl0ZW0uQ2hpbGRzLm1hcChpID0+ICtpLldpZHRoKVxyXG5cdFx0XHRcdFx0LnJlZHVjZTxudW1iZXI+KChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQsIDApO1xyXG5cdFx0XHRcdGl0ZW0uTmFtZSA9IHQubmFtZTtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtKTtcclxuXHRcdFx0XHR0aGlzLmRyb3Bkb3duc2VsZWN0ZWRJdGVtcy5wdXNoKHsgaXRlbV9pZDogaXRlbS5JbmRleCwgaXRlbV90ZXh0OiBpdGVtLk5hbWUsIHBhcmVudDogaGVhZGVyTmFtZSB9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjcmVhdGVIZWFkZXJDZWxscyhcclxuXHRcdGl0ZW1zOiBIZWFkZXJJdGVtW10sXHJcblx0XHRsZXZlbDogbnVtYmVyLFxyXG5cdFx0ZGVwdGg6IG51bWJlclxyXG5cdCkge1xyXG5cdFx0aWYgKHRoaXMuY2VsbHMubGVuZ3RoIDw9IGxldmVsKSB7XHJcblx0XHRcdHRoaXMuY2VsbHMucHVzaChuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByb3cgPSB0aGlzLmNlbGxzW2xldmVsXTtcclxuXHRcdGl0ZW1zLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0LkluZGV4LnZhbHVlT2YoKSAtIHNlY29uZC5JbmRleC52YWx1ZU9mKCkpXHJcblx0XHRcdC5tYXAoaCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IG5ldyBIZWFkZXJDZWxsKCk7XHJcblx0XHRcdFx0Yy5uYW1lID0gaC5OYW1lO1xyXG5cdFx0XHRcdGMuaW5kZXggPSBoLkluZGV4O1xyXG5cdFx0XHRcdGMudGl0bGUgPSBoLlRpdGxlO1xyXG5cdFx0XHRcdGMudmlzaWJsZSA9IGguVmlzaWJsZTtcclxuXHRcdFx0XHRjLmNlbGxXaWR0aCA9IGguV2lkdGg7XHJcblx0XHRcdFx0Yy5zb3J0YWJsZSA9IGguU29ydGFibGU7XHJcblx0XHRcdFx0Yy50ZW1wbGF0ZSA9IGguVGVtcGxhdGU7XHJcblx0XHRcdFx0Yy5IZWFkZXJJdGVtID0gaDtcclxuXHRcdFx0XHRjLmNvbFNwYW4gPSB0aGlzLmNvdW50SGVhZGVycyhoKTtcclxuXHRcdFx0XHRjLnJvd1NwYW4gPSBoLkNoaWxkcy5sZW5ndGggPiAwID8gMSA6IGRlcHRoIC0gbGV2ZWw7XHJcblx0XHRcdFx0cm93LnB1c2goYyk7XHJcblx0XHRcdFx0aWYgKGguQ2hpbGRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlSGVhZGVyQ2VsbHMoaC5DaGlsZHMsIGxldmVsICsgMSwgZGVwdGgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoaC5WaXNpYmxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubG93ZXJDZWxscy5wdXNoKGMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgY291bnRIZWFkZXJzKGl0ZW06IEhlYWRlckl0ZW0pOiBudW1iZXIge1xyXG5cdFx0aWYgKGl0ZW0uQ2hpbGRzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBoZWFkZXJDb3VudCA9IGl0ZW0uQ2hpbGRzLm1hcChjaGlsZCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY291bnRIZWFkZXJzKGNoaWxkKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBoZWFkZXJDb3VudC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIERlcHRoKGl0ZW06IEhlYWRlckl0ZW0pOiBudW1iZXIge1xyXG5cdFx0aWYgKGl0ZW0uQ2hpbGRzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBkZXB0aCA9IE1hdGgubWF4KFxyXG5cdFx0XHRcdC4uLml0ZW0uQ2hpbGRzLm1hcChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5EZXB0aChjaGlsZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIGRlcHRoICsgMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdFJvdyhyb3c6IFQpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XHJcblx0XHR0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFJvdyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlUGVyUGFnZShwYWdlU2l6ZTogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5wYWdlU2l6ZSA9PT0gcGFnZVNpemUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbVBhZ2luYXRlKSB7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYWdpbmdJbnB1dC5wYWdlID0gdGhpcy5jdXJyZW50UGFnZSBhcyBudW1iZXI7XHJcblx0XHR0aGlzLnBhZ2luZ0lucHV0LnBhZ2VTaXplID0gcGFnZVNpemU7XHJcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoXHJcblx0XHRcdHRoaXMucGFnaW5nSW5wdXRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSBwYWdlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jdXN0b21QYWdpbmF0ZSkge1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYWdpbmdJbnB1dC5wYWdlID0gcGFnZTtcclxuXHRcdHRoaXMucGFnaW5nSW5wdXQucGFnZVNpemUgPSB0aGlzLnBhZ2VTaXplIGFzIG51bWJlcjtcclxuXHJcblx0XHR0aGlzLnBhZ2VDaGFuZ2UuZW1pdChcclxuXHRcdFx0dGhpcy5wYWdpbmdJbnB1dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzb3J0VG9nZ2xlKGNlbGw6IEhlYWRlckNlbGwpIHtcclxuXHRcdGlmIChjZWxsLnNvcnRhYmxlID09PSBmYWxzZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG5ld0RpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG5cdFx0aWYgKHRoaXMuc29ydCA9PT0gY2VsbC5uYW1lKSB7XHJcblx0XHRcdG5ld0RpcmVjdGlvbiA9XHJcblx0XHRcdFx0dGhpcy5zb3J0RGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmdcclxuXHRcdFx0XHRcdD8gT3JkZXJEaXJlY3Rpb24uRGVzY2VuZGluZ1xyXG5cdFx0XHRcdFx0OiBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuZXdEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmN1c3RvbVNvcnQpIHtcclxuXHRcdFx0dGhpcy5zb3J0ID0gY2VsbC5uYW1lO1xyXG5cdFx0XHR0aGlzLnNvcnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcblx0XHR9XHJcblx0XHR0aGlzLnNvcnRJbnB1dC5zb3J0ID0gY2VsbC5uYW1lIGFzIHN0cmluZztcclxuXHRcdHRoaXMuc29ydElucHV0LmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuXHRcdHRoaXMuc29ydENoYW5nZS5lbWl0KFxyXG5cdFx0XHR0aGlzLnNvcnRJbnB1dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdG9uRG9tQ2hhbmdlKGVsZW1lbnQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcclxuXHRcdGxldCB3aWR0aCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcblx0XHR0aGlzLnNjcm9sbFdpZHRoID0gd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW52ZXJzZUFycmF5KGFycmF5OiBBcnJheTxIZWFkZXJDZWxsPik6IEFycmF5PEhlYWRlckNlbGw+IHtcclxuXHRcdGxldCBpbnZlcnNlID0gbmV3IEFycmF5PEhlYWRlckNlbGw+KCk7XHJcblx0XHRmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aW52ZXJzZS5wdXNoKGFycmF5W2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpbnZlcnNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyByZXNpemVDZWxsKHdpZHRoOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0Ly8gdGhpcy5pc0xhc3RDb2x1bW5Nb3VzZSA9IGZhbHNlO1xyXG5cdFx0aWYgKGluZGV4ID09IHRoaXMubG93ZXJDZWxscy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdC8vIHRoaXMuaXNMYXN0Q29sdW1uTW91c2UgPSBmYWxzZTtcclxuXHRcdFx0cmV0dXJuIHdpZHRoIC0gdGhpcy5zY3JvbGxXaWR0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB3aWR0aDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uSXRlbVNlbGVjdChpdGVtczogYW55KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuXHRcdFx0bGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNBcnJheVxyXG5cdFx0XHRcdC5maW5kKHQgPT4gdC5pbmRleCA9PT0gaXRlbS5pdGVtX2lkKTtcclxuXHRcdFx0bGV0IGluZGV4ID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0XHR0ZW1wbGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSB0ZW1wbGF0ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG5cdH1cclxuXHRvbkl0ZW1EZVNlbGVjdChpdGVtczogYW55KSB7XHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGxldCBpdGVtID0gaXRlbXMuZmlsdGVyKHQgPT4gdC5pdGVtX2lkID09PSB0aGlzLnRlbXBsYXRlc0FycmF5W2pdLmluZGV4KTtcclxuXHRcdFx0aWYgKGl0ZW0ubGVuZ3RoIDw9IDApIHtcclxuXHRcdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5W2pdLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5W2pdID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtqXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHR9XHJcblx0b25TZWxlY3RBbGwoaXRlbXM6IGFueSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpXTtcclxuXHRcdFx0bGV0IGluZGV4ID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5pbmRleE9mKHRlbXBsYXRlKTtcclxuXHRcdFx0dGVtcGxhdGUudmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gdGVtcGxhdGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHR9XHJcblxyXG5cdG9uTWFpbkRvbUNoYW5nZShlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5hdXRvU2l6ZSkge1xyXG5cdFx0XHRsZXQgd2lkdGggPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblx0XHRcdHRoaXMuYXV0b1NpemVDZWxscyh3aWR0aCk7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25zYXZlVGFibGUoKSB7XHJcblxyXG5cdFx0dGhpcy5saXN0Y2VsbHNJbmZvID0gbnVsbDtcclxuXHRcdHRoaXMubGlzdGNlbGxzSW5mbyA9IG5ldyBBcnJheTxDZWxsc0luZm8+KCk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaV07XHJcblx0XHRcdHRoaXMubGlzdGNlbGxzSW5mby5wdXNoKHsgaW5kZXg6IGVsZW1lbnQuaW5kZXgsIG5hbWU6IGVsZW1lbnQubmFtZSwgY2VsbFdpZHRoOiBlbGVtZW50LmNlbGxXaWR0aCwgcGFyZW50OiBlbGVtZW50LnBhcmVudCwgc29ydGFibGU6IGVsZW1lbnQuc29ydGFibGUsIGRyYWdnYmxlOiBlbGVtZW50LmRyYWdnYWJsZSwgdmlzaWJsZTogZWxlbWVudC52aXNpYmxlIH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zYXZlVGFibGUuZW1pdChcclxuXHRcdFx0dGhpcy5saXN0Y2VsbHNJbmZvXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2l6ZUhhbmRsZShjZWxsOiBIZWFkZXJDZWxsLCBtRXZlbnQ6IE1vdXNlRXZlbnQsIGlkVGJvZHk6IHN0cmluZykge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgdGJvZHlJZCA9IGlkVGJvZHk7XHJcblx0XHRjb25zdCB0YWJsZVdpZHRoVGVtcCA9IHRoaXMudGFibGVXaWR0aDtcclxuXHRcdHRoaXMucGl4Y2VsWEJlZm9yZSA9IG1FdmVudC54O1xyXG5cdFx0dGhpcy53aWR0aEJlZm9yZSA9ICtjZWxsLmNlbGxXaWR0aDtcclxuXHRcdGNvbnN0IGRyYWdnYWJsZSA9IGNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlO1xyXG5cdFx0Y29uc3Qgc29ydGFibGUgPSBjZWxsLnRlbXBsYXRlLnNvcnRhYmxlO1xyXG5cdFx0bGV0IGxhc3RIZWFkZXJJdGVtID0gY2VsbC5IZWFkZXJJdGVtO1xyXG5cdFx0d2hpbGUgKGxhc3RIZWFkZXJJdGVtLkNoaWxkcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGxhc3RIZWFkZXJJdGVtID0gbGFzdEhlYWRlckl0ZW0uQ2hpbGRzW2xhc3RIZWFkZXJJdGVtLkNoaWxkcy5sZW5ndGggLSAxXTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGFsbENlbGxzID0gdGhpcy5jZWxscy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGIpOyB9KTtcclxuXHRcdGNvbnN0IGxhc3RDZWxsID0gYWxsQ2VsbHMuZmlsdGVyKHQgPT4gdC52aXNpYmxlID09PSB0cnVlKS5maW5kKGkgPT4gaS5uYW1lID09PSBsYXN0SGVhZGVySXRlbS5OYW1lKTtcclxuXHJcblxyXG5cdFx0Y29uc3Qgd2lkdGhMYXN0Q2VsbCA9ICtsYXN0Q2VsbC5jZWxsV2lkdGg7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXHJcblx0XHRcdCdkb2N1bWVudCcsXHJcblx0XHRcdCdtb3VzZW1vdmUnLFxyXG5cdFx0XHRldmVudCA9PiB7XHJcblx0XHRcdFx0Ly8gaWYgKHRoaXMuaXNMYXN0Q29sdW1uTW91c2UpIHtcclxuXHRcdFx0XHQvLyBcdHJldHVybjtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGNlbGwudGVtcGxhdGUuc29ydGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRsZXQgV2lkdGhBZGQgPSBldmVudC54IC0gdGhpcy5waXhjZWxYQmVmb3JlO1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzUlRMKSB7XHJcblx0XHRcdFx0XHRXaWR0aEFkZCA9IHRoaXMucGl4Y2VsWEJlZm9yZSAtIGV2ZW50Lng7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobGFzdENlbGwuY2VsbFdpZHRoID49IDUwKSB7XHJcblx0XHRcdFx0XHRjZWxsLmNlbGxXaWR0aCA9IHRoaXMud2lkdGhCZWZvcmUgKyAoV2lkdGhBZGQpO1xyXG5cdFx0XHRcdFx0bGFzdENlbGwuY2VsbFdpZHRoID0gd2lkdGhMYXN0Q2VsbCArIChXaWR0aEFkZCk7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlV2lkdGggPSB0YWJsZVdpZHRoVGVtcCArIChXaWR0aEFkZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGlmIChsYXN0Q2VsbC5jZWxsV2lkdGggPCA1MCkge1xyXG5cdFx0XHRcdGxhc3RDZWxsLmNlbGxXaWR0aCA9IDUwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxhc3RDZWxsLnRlbXBsYXRlLmNlbGxXaWR0aCA9IGxhc3RDZWxsLmNlbGxXaWR0aDtcclxuXHJcblx0XHRcdGlmIChjZWxsLmNlbGxXaWR0aCA8IDUwKSB7XHJcblx0XHRcdFx0Y2VsbC5jZWxsV2lkdGggPSA1MDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjZWxsLnRlbXBsYXRlLmNlbGxXaWR0aCA9IGNlbGwuY2VsbFdpZHRoO1xyXG5cclxuXHRcdFx0Y2VsbC50ZW1wbGF0ZS5kcmFnZ2FibGUgPSBkcmFnZ2FibGU7XHJcblx0XHRcdGNlbGwudGVtcGxhdGUuc29ydGFibGUgPSBzb3J0YWJsZTtcclxuXHJcblx0XHRcdGxldCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRib2R5SWQpO1xyXG5cdFx0XHR0aGlzLnNjcm9sbFdpZHRoID0gaHRtbEVsZW1lbnQub2Zmc2V0V2lkdGggLSBodG1sRWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHRcdFx0aWYgKHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUpIHtcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlKCk7XHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCkge1xyXG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwKCk7XHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlVXAgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T3JkZXJEaXJlY3Rpb259IGZyb20gJy4vLi4vbW9kZWxzL2VudW0nO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbc2V0RGlyZWN0aW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERpcmVjdGlvbkRpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG4gICAgX2RpcmVjdGlvbjogbnVtYmVyO1xyXG4gICAgQElucHV0KCdzZXREaXJlY3Rpb24nKVxyXG4gICAgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZhLWFycm93LWRvd24nKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZhLWFycm93LXVwJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkRlc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctdXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZG9tQ2hhbmdlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERvbUNoYW5nZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xyXG5cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGRvbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xyXG4gICAgICAvLyBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB0aGlzLmRvbUNoYW5nZS5lbWl0KG11dGF0aW9uKSk7XHJcbiAgICAgIHRoaXMuZG9tQ2hhbmdlLmVtaXQodGhpcy5lbGVtZW50UmVmKTtcclxuICAgIH1cclxuXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlcy5vYnNlcnZlKGVsZW1lbnQsIHtcclxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG5cclxuICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWVcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T3JkZXJEaXJlY3Rpb259ICBmcm9tICcuLi9tb2RlbHMvZW51bSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3NvcnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0ocm93czogYW55W10sIGFyZ3M6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IGZpZWxkID0gYXJncy5maWVsZDtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGFyZ3MuYWN0aXZlIHx8IHRydWU7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQXNjZW5kaW5nKSB7XHJcbiAgICAgICAgcm93cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFbZmllbGRdIDwgYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhW2ZpZWxkXSA+IGJbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm93cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IG5hbWVzcGFjZSBOdW1lcmljRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICAgICAgZ3JlYXRlclRoYW4gPSAnZ3JlYXRlciB0aGFuJyxcclxuICAgICAgICBub3RHcmVhdGVyVGhhbiA9ICdub3QgZ3JlYXRlciB0aGFuJyxcclxuICAgICAgICBzbWFsbGVyVGhhbiA9ICdzbWFsbGVyIHRoYW4nLFxyXG4gICAgICAgIG5vdFNtYWxsZXJUaGFuID0gJ25vdCBzbWFsbGVyIHRoYW4nXHJcblxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgTnVtZXJpY0ZpbHRlciB9IGZyb20gJy4uL21vZGVscy9udW1lcmljLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW51bWVyaWMtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgTnVtZXJpY0ZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hOdW1lcmljRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgTnVtZXJpY0ZpbHRlciA9IE51bWVyaWNGaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IE51bWVyaWNGaWx0ZXIuZmlsdGVycy5lcXVhbHMsIGZpbHRlclZhbHVlOiAnJ30pO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT09IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9PSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3RyaW5nRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICAgICAgc3RhcnRzV2l0aCA9ICdzdGFydHMgd2l0aCcsXHJcbiAgICAgICAgbm90U3RhcnRzV2l0aCA9ICdub3Qgc3RhcnRzIHdpdGgnLFxyXG4gICAgICAgIGVuZHNXaXRoID0gJ2VuZHMgd2l0aCcsXHJcbiAgICAgICAgbm90RW5kc1dpdGggPSAnbm90IGVuZHMgd2l0aCcsXHJcbiAgICAgICAgY29udGFpbnMgPSAnY29udGFpbnMnLFxyXG4gICAgICAgIG5vdENvbnRhaW5zID0gJ25vdCBjb250YWlucydcclxuICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IFN0cmluZ0ZpbHRlciB9IGZyb20gJy4uL21vZGVscy9zdHJpbmctZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtc3RyaW5nLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVHlwZVwiPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIFN0cmluZ0ZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIFN0cmluZ0ZpbHRlciA9IFN0cmluZ0ZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogU3RyaW5nRmlsdGVyLmZpbHRlcnMuY29udGFpbnMsIGZpbHRlclZhbHVlOiAnJ30pXHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRW51bUZpbHRlciB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gZmlsdGVycyB7XHJcbiAgICAgICAgZXF1YWxzID0gJ2VxdWFscycsXHJcbiAgICAgICAgbm90RXF1YWxzID0gJ25vdCBlcXVhbHMnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IEVudW1GaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvZW51bS1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbnVtLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVHlwZVwiPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIEVudW1GaWx0ZXIudmFsdWVzKClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiPnt7cH19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBpdGVtc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVudW1GaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueVtdO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBFbnVtRmlsdGVyID0gRW51bUZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogRW51bUZpbHRlci5maWx0ZXJzLmVxdWFscywgZmlsdGVyVmFsdWU6ICcnfSlcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBCb29sZWFuRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMoKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBCb29sZWFuRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL2Jvb2xlYW4tZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYm9vbGVhbi1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiZmlsdGVyVmFsdWVcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuICBASW5wdXQoKSBpdGVtczogYW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIEJvb2xlYW5GaWx0ZXIgPSBCb29sZWFuRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBCb29sZWFuRmlsdGVyLmZpbHRlcnMuZXF1YWxzLCBmaWx0ZXJWYWx1ZTogJyd9KVxyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIExpc3RJdGVtRHJvcGRvd24ge1xyXG4gICAgaWQ6IFN0cmluZztcclxuICAgIHRleHQ6IFN0cmluZztcclxuICAgIHBhcmVudDogU3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNvdXJjZTogYW55KSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnRleHQgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQ9Jyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS5pZDtcclxuICAgICAgICB0aGlzLnRleHQgPSBzb3VyY2UudGV4dDtcclxuICAgICAgICB0aGlzLnBhcmVudD1zb3VyY2UucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElEcm9wZG93blNldHRpbmdzIHtcclxuICAgIHNpbmdsZVNlbGVjdGlvbj86IGJvb2xlYW47XHJcbiAgICBpZEZpZWxkPzogc3RyaW5nO1xyXG4gICAgdGV4dEZpZWxkPzogc3RyaW5nO1xyXG4gICAgcGFyZW50RmllbGQ/OiBzdHJpbmc7XHJcbiAgICBlbmFibGVDaGVja0FsbD86IGJvb2xlYW47XHJcbiAgICBzZWxlY3RBbGxUZXh0Pzogc3RyaW5nO1xyXG4gICAgdW5TZWxlY3RBbGxUZXh0Pzogc3RyaW5nO1xyXG4gICAgYWxsb3dTZWFyY2hGaWx0ZXI/OiBib29sZWFuO1xyXG4gICAgY2xlYXJTZWFyY2hGaWx0ZXI/OiBib29sZWFuO1xyXG4gICAgbWF4SGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgaXRlbXNTaG93TGltaXQ/OiBudW1iZXI7XHJcbiAgICBsaW1pdFNlbGVjdGlvbj86IG51bWJlcjtcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICAgIG5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICAgIGNsb3NlRHJvcERvd25PblNlbGVjdGlvbj86IGJvb2xlYW47XHJcbiAgICBzaG93U2VsZWN0ZWRJdGVtc0F0VG9wPzogYm9vbGVhbjtcclxuICB9IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtRHJvcGRvd24sIElEcm9wZG93blNldHRpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL211bHRpc2VsZWN0Lm1vZGVsJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IERST1BET1dOX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgdGFiaW5kZXg9XCI9MFwiIChibHVyKT1cIm9uVG91Y2hlZCgpXCIgY2xhc3M9XCJtdWx0aXNlbGVjdC1kcm9wZG93blwiIChjbGlja091dHNpZGUpPVwiY2xvc2VEcm9wZG93bigpXCI+XG4gIDxkaXYgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgW25nQ2xhc3NdPVwiYnV0dG9uTGlzdENvbHVtblN0eWxlXCIgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKCRldmVudClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS0gPHNwYW4gdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiZHJvcGRvd24tYnRuXCIgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKCRldmVudClcIj4gLS0+XG4gICAgPCEtLSA8c3Bhbj57e19wbGFjZWhvbGRlcn19PC9zcGFuPiAtLT5cbiAgICA8IS0tIDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L2k+IC0tPlxuICAgIDwhLS0gKm5nSWY9XCJzZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PSAwXCIgLS0+XG5cbiAgICA8IS0tIDxzcGFuIGNsYXNzPVwic2VsZWN0ZWQtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlbGVjdGVkSXRlbXM7dHJhY2tCeTogdHJhY2tCeUZuO2xldCBrID0gaW5kZXhcIiBbaGlkZGVuXT1cImsgPiBfc2V0dGluZ3MuaXRlbXNTaG93TGltaXQtMVwiPlxuICAgICAgICAgIHt7aXRlbS50ZXh0fX1cbiAgICAgICAgICA8YSBzdHlsZT1cInBhZGRpbmctdG9wOjJweDtwYWRkaW5nLWxlZnQ6MnB4O2NvbG9yOndoaXRlXCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxpdGVtKVwiPng8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodCAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6NHB4XCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA2cHg7XCIgKm5nSWY9XCJpdGVtU2hvd1JlbWFpbmluZygpPjBcIj4re3tpdGVtU2hvd1JlbWFpbmluZygpfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiaXNEcm9wZG93bk9wZW4gPyAnZHJvcGRvd24tdXAnIDogJ2Ryb3Bkb3duLWRvd24nXCI+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+IC0tPlxuICAgIDwhLS0gPC9zcGFuPiAtLT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgW2hpZGRlbl09XCIhaXNEcm9wZG93bk9wZW5cIj5cbiAgICA8dWwgY2xhc3M9XCJpdGVtMVwiPlxuICAgICAgPGxpIChjbGljayk9XCJ0b2dnbGVTZWxlY3RBbGwoKVwiICpuZ0lmPVwiX2RhdGEubGVuZ3RoID4gMCAmJiAhX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbiAmJiBfc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uPT09LTFcIlxuICAgICAgICBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcIiBzdHlsZT1cImJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO3BhZGRpbmc6MTBweFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiaXNBbGxJdGVtc1NlbGVjdGVkKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKVwiIC8+XG4gICAgICAgIDxkaXY+e3sgX3NldHRpbmdzLnNlbGVjdEFsbFRleHR9fTwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImZpbHRlci10ZXh0Ym94XCIgKm5nSWY9XCJfZGF0YS5sZW5ndGg+MCAmJiBfc2V0dGluZ3MuYWxsb3dTZWFyY2hGaWx0ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlYWRPbmx5XT1cImRpc2FibGVkXCIgW3BsYWNlaG9sZGVyXT1cIl9zZXR0aW5ncy5zZWFyY2hQbGFjZWhvbGRlclRleHRcIiBbKG5nTW9kZWwpXT1cImZpbHRlci50ZXh0XCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRleHRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bCBjbGFzcz1cIml0ZW0yXCIgW3N0eWxlLm1heEhlaWdodF09XCJfc2V0dGluZ3MubWF4SGVpZ2h0KydweCdcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZGF0YSB8IG5nMkxpc3RGaWx0ZXI6ZmlsdGVyOyBsZXQgaSA9IGluZGV4O1wiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSlcIiBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQoaXRlbSlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgKGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKCkgJiYgIWlzU2VsZWN0ZWQoaXRlbSkpXCIgLz5cbiAgICAgICAgPGRpdj57e2l0ZW0udGV4dH19PC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPSduby1kYXRhJyAqbmdJZj1cIl9kYXRhLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgIDxoNT57e19zZXR0aW5ncy5ub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHR9fTwvaDU+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5tdWx0aXNlbGVjdC1kcm9wZG93bntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2FkYWRhZDt3aWR0aDoxMDAlO3BhZGRpbmc6NnB4IDEycHg7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjUyODU3MTQzO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlci1yYWRpdXM6NHB4fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVte2JvcmRlcjoxcHggc29saWQgIzMzN2FiNzttYXJnaW4tcmlnaHQ6NHB4O2JhY2tncm91bmQ6IzMzN2FiNztwYWRkaW5nOjAgNXB4O2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7ZmxvYXQ6bGVmdH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtOmhvdmVye2JveC1zaGFkb3c6MXB4IDFweCAjOTU5NTk1fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3due2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RvcDoxMHB4O3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICNhZGFkYWQ7Ym9yZGVyLWxlZnQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXB7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2FkYWRhZDtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZGlzYWJsZWQ+c3BhbntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWZ9LmRyb3Bkb3duLWxpc3R7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZy10b3A6NnB4O3dpZHRoOi13ZWJraXQtbWF4LWNvbnRlbnQ7d2lkdGg6LW1vei1tYXgtY29udGVudDt3aWR0aDptYXgtY29udGVudDtib3R0b206MzBweDtwYWRkaW5nLWJvdHRvbTo1cHg7bWFyZ2luLWJvdHRvbToxMHB4O3otaW5kZXg6OTk5OTtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czozcHg7YmFja2dyb3VuZDojZmZmO21hcmdpbi10b3A6MTBweDtib3gtc2hhZG93OjAgMXB4IDVweCAjOTU5NTk1fS5kcm9wZG93bi1saXN0IHVse3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmU7b3ZlcmZsb3c6YXV0bzttYXJnaW46MH0uZHJvcGRvd24tbGlzdCBsaXtwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3h7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjEwcHh9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94IGlucHV0e2JvcmRlcjowO3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAyNnB4fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveCBpbnB1dDpmb2N1c3tvdXRsaW5lOjB9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHh9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMrZGl2OmJlZm9yZSwubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpob3ZlcitkaXY6YmVmb3Jle2JvcmRlci1jb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTphY3RpdmUrZGl2OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2Rpdntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjA7Y29sb3I6IzAwMH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXY6YmVmb3Jle2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGVudDonJztjb2xvcjojMzM3YWI3O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXRvcDotOXB4O2JvcmRlcjoycHggc29saWQgIzMzN2FiNzt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOmFsbCAuNHMgZWFzZX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXY6YWZ0ZXJ7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dG9wOjUwJTtsZWZ0OjRweDt3aWR0aDo4cHg7aGVpZ2h0OjNweDttYXJnaW4tdG9wOi00cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjojZmZmO2JvcmRlci13aWR0aDowIDAgM3B4IDNweDstby1ib3JkZXItaW1hZ2U6bm9uZTtib3JkZXItaW1hZ2U6bm9uZTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMCl9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQrZGl2OmJlZm9yZXtib3JkZXItY29sb3I6I2NjY30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZDpmb2N1cytkaXY6YmVmb3JlIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmhvdmVyK2RpdjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmNoZWNrZWQrZGl2OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNjY2N9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXY6YWZ0ZXJ7Y29udGVudDonJzt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMSl9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXY6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOi4ycyBlYXNlLWluIGJvcmRlcnNjYWxlO2FuaW1hdGlvbjouMnMgZWFzZS1pbiBib3JkZXJzY2FsZTtiYWNrZ3JvdW5kOiMzMzdhYjd9QC13ZWJraXQta2V5ZnJhbWVzIGJvcmRlcnNjYWxlezUwJXtib3gtc2hhZG93OjAgMCAwIDJweCAjMzM3YWI3fX1Aa2V5ZnJhbWVzIGJvcmRlcnNjYWxlezUwJXtib3gtc2hhZG93OjAgMCAwIDJweCAjMzM3YWI3fX1gXSxcbiAgcHJvdmlkZXJzOiBbRFJPUERPV05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgX2RhdGE6IEFycmF5PExpc3RJdGVtRHJvcGRvd24+ID0gW107XG4gIHNlbGVjdGVkSXRlbXM6IEFycmF5PExpc3RJdGVtRHJvcGRvd24+ID0gW107XG4gIGlzRHJvcGRvd25PcGVuID0gZmFsc2U7XG4gIF9zZXR0aW5nczogSURyb3Bkb3duU2V0dGluZ3M7XG4gIF9wbGFjZWhvbGRlciA9ICdTZWxlY3QnO1xuICBmaWx0ZXI6IExpc3RJdGVtRHJvcGRvd24gPSBuZXcgTGlzdEl0ZW1Ecm9wZG93bih0aGlzLmRhdGEpO1xuXG4gIGRlZmF1bHRTZXR0aW5nczogSURyb3Bkb3duU2V0dGluZ3MgPSB7XG4gICAgc2luZ2xlU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBpZEZpZWxkOiAnaWQnLFxuICAgIHRleHRGaWVsZDogJ3RleHQnLFxuICAgIHBhcmVudEZpZWxkOiAncGFyZW50JyxcbiAgICBlbmFibGVDaGVja0FsbDogdHJ1ZSxcbiAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXG4gICAgdW5TZWxlY3RBbGxUZXh0OiAnVW5TZWxlY3QgQWxsJyxcbiAgICBhbGxvd1NlYXJjaEZpbHRlcjogZmFsc2UsXG4gICAgbGltaXRTZWxlY3Rpb246IC0xLFxuICAgIGNsZWFyU2VhcmNoRmlsdGVyOiB0cnVlLFxuICAgIG1heEhlaWdodDogMTk3LFxuICAgIGl0ZW1zU2hvd0xpbWl0OiA5OTk5OTk5OTk5OTksXG4gICAgc2VhcmNoUGxhY2Vob2xkZXJUZXh0OiAnU2VhcmNoJyxcbiAgICBub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHQ6ICdObyBkYXRhIGF2YWlsYWJsZScsXG4gICAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBzaG93U2VsZWN0ZWRJdGVtc0F0VG9wOiBmYWxzZVxuICB9O1xuXG4gIEBPdXRwdXQoJ29uRmlsdGVyQ2hhbmdlJykgb25GaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMaXN0SXRlbURyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdvblNlbGVjdCcpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBAT3V0cHV0KCdvbkRlU2VsZWN0Jykgb25EZVNlbGVjdDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcbiAgQE91dHB1dCgnb25TZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcbiAgQE91dHB1dCgnb25EZVNlbGVjdEFsbCcpIG9uRGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbURyb3Bkb3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgQElucHV0KCkgYnV0dG9uTGlzdENvbHVtblN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSAnU2VsZWN0JztcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZXR0aW5ncyh2YWx1ZTogSURyb3Bkb3duU2V0dGluZ3MpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRTZXR0aW5ncywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0U2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc3QgX2l0ZW1zID0gdmFsdWUuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIC8vICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgaXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSAmJiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0pKSB7XG4gICAgICAvLyAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlLm1hcChcbiAgICAgICAgKGl0ZW06IGFueSkgPT5cbiAgICAgICAgICB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gbmV3IExpc3RJdGVtRHJvcGRvd24oaXRlbSlcbiAgICAgICAgICAgIDogbmV3IExpc3RJdGVtRHJvcGRvd24oe1xuICAgICAgICAgICAgICBpZDogaXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSxcbiAgICAgICAgICAgICAgdGV4dDogaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdLFxuICAgICAgICAgICAgICBwYXJlbnQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdXG4gICAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgb2JqLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAob2JqLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBvYmpbMF07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXG4gICAgICAgICAgICAgIHR5cGVvZiBmaXJzdEl0ZW0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBuZXcgTGlzdEl0ZW1Ecm9wZG93bihmaXJzdEl0ZW0pXG4gICAgICAgICAgICAgICAgOiBuZXcgTGlzdEl0ZW1Ecm9wZG93bih7XG4gICAgICAgICAgICAgICAgICBpZDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxuICAgICAgICAgICAgICAgICAgdGV4dDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0sXG4gICAgICAgICAgICAgICAgICBwYXJlbnQ6IGZpcnN0SXRlbVt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKGUuYm9keS5tc2cpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBfZGF0YSA9IG9iai5tYXAoXG4gICAgICAgICAgKGl0ZW06IGFueSkgPT5cbiAgICAgICAgICAgIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IG5ldyBMaXN0SXRlbURyb3Bkb3duKGl0ZW0pXG4gICAgICAgICAgICAgIDogbmV3IExpc3RJdGVtRHJvcGRvd24oe1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxuICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA+IDApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBfZGF0YS5zcGxpY2UoMCwgdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IF9kYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sob2JqKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIC8vIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgLy8gfVxuXG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuYnV0dG9uTGlzdENvbHVtblN0eWxlID0gXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiO1xuICB9XG5cbiAgc2hvd0J1dHRvbigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLl9zZXR0aW5ncy5lbmFibGVDaGVja0FsbCA9IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlOyAvLyAhdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZUNoZWNrQWxsICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2hvdWxkIGJlIGRpc2FibGVkIGluIHNpbmdsZSBzZWxlY3Rpb24gbW9kZVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1TaG93UmVtYWluaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSB0aGlzLl9zZXR0aW5ncy5pdGVtc1Nob3dMaW1pdDtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIHB1YmxpYyBvblRvdWNoZWQoKSB7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bigpIHtcbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgLy8gY2xlYXIgc2VhcmNoIHRleHRcbiAgICBpZiAodGhpcy5fc2V0dGluZ3MuY2xlYXJTZWFyY2hGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyLnRleHQgPSAnJztcbiAgICB9XG4gIH1cbiAgdG9nZ2xlRHJvcGRvd24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSAhdGhpcy5pc0Ryb3Bkb3duT3BlbjtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNBbGxJdGVtc1NlbGVjdGVkKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX2RhdGEuc2xpY2UoKTtcbiAgICAgIHRoaXMub25TZWxlY3RBbGwuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAvLyB0aGlzLm9uRGVTZWxlY3RBbGwuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICB9XG5cbiAgaXNBbGxJdGVtc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgfVxuXG5cbiAgZW1pdHRlZFZhbHVlKHZhbDogYW55KTogYW55IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhbC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkID09PSBpdGVtLnRleHQpIHtcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKGl0ZW0udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWQucHVzaCh0aGlzLm9iamVjdGlmeShpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGlmICh2YWwuaWQgPT09IHZhbC50ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbC50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdGlmeSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIG9iamVjdGlmeSh2YWw6IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0gPSB2YWwuaWQ7XG4gICAgb2JqW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0gPSB2YWwudGV4dDtcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdID0gdmFsLnBhcmVudDtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICB9XG4gIG9uRmlsdGVyVGV4dENoYW5nZSgkZXZlbnQpIHtcbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKCRldmVudDogYW55LCBpdGVtOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZm91bmQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSk7XG4gICAgY29uc3QgYWxsb3dBZGQgPSB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA9PT0gLTEgfHwgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIDwgdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24pO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChhbGxvd0FkZCkge1xuICAgICAgICB0aGlzLmFkZFNlbGVjdGVkKGl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIHRoaXMuX3NldHRpbmdzLmNsb3NlRHJvcERvd25PblNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2VsZWN0ZWQoaXRlbTogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJlbnRJdGVtID0gdGhpcy5fZGF0YS5maWx0ZXIoeCA9PiB4LnRleHQgPT09IGl0ZW0ucGFyZW50KTtcbiAgICAgIHZhciBwYXJlbnRJdGVtc2VsZXRlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnRleHQgPT09IGl0ZW0ucGFyZW50KTtcbiAgICAgIGlmIChwYXJlbnRJdGVtLmxlbmd0aCA+IDAgJiYgcGFyZW50SXRlbXNlbGV0ZWQubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2gocGFyZW50SXRlbVswXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZEl0ZW0gPSB0aGlzLl9kYXRhLmZpbHRlcih4ID0+IHgucGFyZW50ID09PSBpdGVtLnRleHQpO1xuICAgICAgdmFyIGNoaWxkSXRlbXNlbGV0ZWQgPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0udGV4dCk7XG4gICAgICBpZiAoY2hpbGRJdGVtLmxlbmd0aCA+IDAgJiYgY2hpbGRJdGVtc2VsZXRlZC5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChjaGlsZEl0ZW1bMF0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkKGl0ZW1TZWw6IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbVNlbC5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0ucGFyZW50KS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHMgPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0udGV4dCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGVsZW1lbnQpICE9PSAtMSAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxldCBkZVNlbGVjdGVkSXRlbXMgPSBBcnJheTxMaXN0SXRlbURyb3Bkb3duPigpO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIC8vICBpZih0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZih0aGlzLl9kYXRhW2ldKSA9PT0gLTEpXG4gICAgLy8gIHtcbiAgICAvLyAgIGRlU2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2RhdGFbaV0pO1xuICAgIC8vICB9XG5cbiAgICAvLyB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgdGhpcy5vbkRlU2VsZWN0LmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gIH1cblxuICBpc1NlbGVjdGVkKGNsaWNrZWRJdGVtOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoY2xpY2tlZEl0ZW0uaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbURyb3Bkb3duIH0gZnJvbSAnLi4vbW9kZWxzL211bHRpc2VsZWN0Lm1vZGVsJztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnbmcyTGlzdEZpbHRlcicsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpdGVtczogTGlzdEl0ZW1Ecm9wZG93bltdLCBmaWx0ZXI6IExpc3RJdGVtRHJvcGRvd24pOiBMaXN0SXRlbURyb3Bkb3duW10ge1xyXG4gICAgICAgIGlmICghaXRlbXMgfHwgIWZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW06IExpc3RJdGVtRHJvcGRvd24pID0+IHRoaXMuYXBwbHlGaWx0ZXIoaXRlbSwgZmlsdGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXIoaXRlbTogTGlzdEl0ZW1Ecm9wZG93biwgZmlsdGVyOiBMaXN0SXRlbURyb3Bkb3duKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEoZmlsdGVyLnRleHQgJiYgaXRlbS50ZXh0ICYmIGl0ZW0udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnRleHQudG9Mb3dlckNhc2UoKSkgPT09IC0xKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgY2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnLCAnJGV2ZW50LnRhcmdldCddKVxyXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBEaXJlY3RpdmUsIENvbXBvbmVudCwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hNYWdpY1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uRGlyZWN0aXZlfSBmcm9tICcuL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEb21DaGFuZ2VEaXJlY3RpdmV9IGZyb20gJy4vbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vc29ydC9zb3J0LnBpcGUnO1xyXG5pbXBvcnQgeyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1udW1lcmljLWZpbHRlci9uZ3gtbnVtZXJpYy1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4U3RyaW5nRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZW51bS1maWx0ZXIvbmd4LWVudW0tZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEJvb2xlYW5GaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1ib29sZWFuLWZpbHRlci9uZ3gtYm9vbGVhbi1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdEZpbHRlclBpcGUgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9saXN0LWZpbHRlci5waXBlJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG4vLyBpbXBvcnQgeyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW05neE1hZ2ljVGFibGVDb21wb25lbnQsXHJcbiAgICBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCxcclxuICAgIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgRGlyZWN0aW9uRGlyZWN0aXZlLFxyXG4gICAgRG9tQ2hhbmdlRGlyZWN0aXZlLFxyXG4gICAgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcbiAgICBMaXN0RmlsdGVyUGlwZV0sXHJcblxyXG4gIGV4cG9ydHM6IFtOZ3hNYWdpY1RhYmxlQ29tcG9uZW50LFxyXG4gICAgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgICBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmd4U3RyaW5nRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgRGlyZWN0aW9uRGlyZWN0aXZlLFxyXG4gICAgRG9tQ2hhbmdlRGlyZWN0aXZlLFxyXG4gICAgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neEJvb2xlYW5GaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgTmd4RW51bUZpbHRlckNvbXBvbmVudF0sXHJcbiAgIFxyXG4gIHNjaGVtYXM6IFsgTk9fRVJST1JTX1NDSEVNQSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY1RhYmxlTW9kdWxlIHsgfVxyXG5cclxuLy8gZXhwb3J0IGNsYXNzIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQge1xyXG4vLyAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgbmdNb2R1bGU6IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnRcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFBOzs7c0JBREE7SUFJQyxDQUFBOzs7Ozs7QUNERCxJQUFBOzs7b0JBSEE7SUFPQyxDQUFBOzs7Ozs7QUNMRCxJQUFBO3dCQVN1QixJQUEwQjtRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUks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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" width:800px; height: 400px;\">\r\n\r\n  <ngx-magic-table [isRTL]=\"true\" [rows]=\"data\" buttonListColumnStyle=\"btn btn-outline-info\" buttonSaveTableStyle=\"btn btn-outline-info\"\r\n    [customSort]=\"false\" sort=\"Phone\" [sortDirection]=\"0\" [paginated]=\"true\" [pageSize]=\"3\"\r\n    [customPaginate]=\"false\" [currentPage]=\"2\" [pageSizes]=\"[3, 5, 20, 50, 100]\" (pageSizesChange)=\"pageSizesChange($event)\"\r\n    (pageChange)=\"pageChange($event)\" tcellClass=\"text-center\" trowClass=\"table-primary\" (selectedChange)=\"selectChanged($event)\"\r\n    selectedClass=\"table-secondary\" [autoSize] = \"true\" (saveTable)=\"saveTable($event)\" (columnsArrangeChange)=\"columnsArrangeChange($event)\">\r\n\r\n    <ngx-column-template [visible]=\"true\" name=\"Numbers\" index=\"1\"  [sortable]=\"false\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}} </ng-template> -->\r\n\r\n      <!-- <ng-template let-rows=\"rows\" let-cell=\"cell\" name=\"filter\">\r\n                <ngx-string-filter [rows]=\"rows\" [cell]=\"cell\" (filterChange)=\"logAll($event)\"></ngx-string-filter>\r\n            </ng-template> -->\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Phone\" parent=\"Numbers\" index=\"2\" [visible]=\"true\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Phone}}</ng-template>\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Id\" parent=\"Numbers\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">\r\n        {{row.Id}}\r\n      </ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Type\" parent=\"Numbers\" collection=\"Type\" index=\"1\" [draggable]=\"false\" \r\n      [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Type[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Size\" parent=\"Numbers\" collection=\"Size\" index=\"1\" [draggable]=\"false\" \r\n      [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Size[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\"  [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n  </ngx-magic-table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.table = [
            {
                cellWidth: 600,
                draggble: true,
                index: 0,
                name: "Numbers",
                parent: "",
                sortable: false,
                visible: true
            },
            {
                cellWidth: 266,
                draggble: false,
                index: 1,
                name: "Name",
                parent: "",
                sortable: true,
                visible: true
            },
            {
                cellWidth: 150,
                draggble: false,
                index: 2,
                name: "Id",
                parent: "Numbers",
                sortable: true,
                visible: true
            },
            {
                cellWidth: 192,
                draggble: false,
                index: 3,
                name: "Type",
                parent: "Numbers",
                sortable: true,
                visible: true
            },
            {
                cellWidth: 150,
                draggble: false,
                index: 4,
                name: "Size",
                parent: "Numbers",
                sortable: true,
                visible: false
            },
            {
                cellWidth: 210,
                draggble: true,
                index: 5,
                name: "Phone",
                parent: "Numbers",
                sortable: true,
                visible: true
            }
        ];
        this.count = 1;
        this.data = [
            {
                Id: '1',
                Name: 'Nabi',
                Phone: '+12 345 678',
                Size: [
                    'small', 'medium', 'large'
                ],
                Type: [
                    'Man', 'Woman'
                ]
            }, {
                Id: '2',
                Name: 'Noushmac',
                Phone: '+52 221 983',
                Size: [
                    'small', 'medium', 'large', 'x large'
                ],
                Type: [
                    'Man', 'Woman', 'Child'
                ]
            },
            {
                Id: '3',
                Name: 'Kazim',
                Phone: '+80 235 874',
                Size: [
                    'small'
                ],
                Type: [
                    'Man', 'NewBorn'
                ]
            },
            {
                Id: '4',
                Name: 'Davood',
                Phone: '+73 214 365',
                Size: [
                    'small', 'large'
                ],
                Type: [
                    'Man', 'Woman'
                ]
            },
            {
                Id: '5',
                Name: 'Mammad',
                Phone: '+21 332 236',
                Size: [
                    'small', 'large', 'x small'
                ],
                Type: [
                    'Man', 'Woman'
                ]
            },
            {
                Id: '6',
                Name: 'Sarah',
                Phone: '+21 324 236',
                Size: [
                    'small'
                ],
                Type: [
                    'Woman'
                ]
            },
            {
                Id: '7',
                Name: 'Davood',
                Phone: '+73 214 365',
                Size: [
                    'small', 'large'
                ],
                Type: [
                    'Man', 'Woman'
                ]
            },
            {
                Id: '8',
                Name: 'Davood',
                Phone: '+73 214 365',
                Size: [
                    'small', 'large'
                ],
                Type: [
                    'Man', 'Woman'
                ]
            }
        ];
    }
    AppComponent.prototype.pageChanged = function () {
    };
    AppComponent.prototype.sortChanged = function () {
    };
    AppComponent.prototype.saveTable = function (array) {
        console.log(array);
    };
    AppComponent.prototype.selectChanged = function (row) {
        alert(JSON.stringify(row));
    };
    AppComponent.prototype.pageSizesChange = function (data) {
        console.log('page:' + data.page + ' pageSize:' + data.pageSize);
    };
    AppComponent.prototype.sortChange = function (data) {
        console.log('sort:' + data.sort + ' direction:' + data.direction);
    };
    AppComponent.prototype.pageChange = function (data) {
        console.log('page:' + data.page + ' pageSize:' + data.pageSize);
    };
    AppComponent.prototype.columnsArrangeChange = function (data) {
        console.log(data);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_magic_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-magic-table */ "./dist/ngx-magic-table/fesm5/ngx-magic-table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_magic_table__WEBPACK_IMPORTED_MODULE_4__["NgxMagicTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\ngx-magic-table\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map