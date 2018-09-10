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
        this.isRTL = false;
        this.scrollWidth = 0;
        this.listcellsInfo = new Array();
        this.buttonListColumnStyle = "btn btn-outline-info";
        this.buttonSaveTableStyle = "btn btn-outline-info";
        this.tableInfo = new Array();
        this.autoSize = false;
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
            this.autoSizeCells();
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
    NgxMagicTableComponent.prototype.autoSizeCells = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ htmlElement = document.getElementById('MainMagicTableId');
        var /** @type {?} */ clientWidth = htmlElement.clientWidth;
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
     * @param {?} width
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onDomChange = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
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
     * @return {?}
     */
    NgxMagicTableComponent.prototype.SaveTable = /**
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
                    template: "<div [ngClass]=\"[isRTL ? 'rtl' : 'ltr']\">\n  <div id=\"MainMagicTableId\" class=\"mainMagicTable\">\n    <div class=\"paddingDiv\" [style.width.px]=\"tableWidth\">\n      <table [ngClass]=\"tableClass\" class=\"rz-table\">\n        <thead class=\"ngxThead\" [ngClass]=\"theadClass\">\n          <tr *ngFor=\"let cellRow of cells\">\n            <th *ngFor=\"let cell of inverseArray(cellRow)\" [style.width.px]=\"cell.cellWidth\" [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\"\n              [attr.visible]=\"cell.visible\" [name]=\"cell.name\" [id]=\"uid+'-'+cell.name+'-head'\" [draggable]=\"cell.template.draggable\"\n              (drop)=\"drop(cell)\" (dragover)=\"allowDrop($event)\" (dragstart)=\"drag(cell)\" [attr.colspan]=\"cell.colSpan\"\n              [attr.rowspan]=\"cell.rowSpan\">\n              <div [id]=\"cell.name+'resizable'\" (mousedown)=\"resizeHandle(cell,$event,'tbody1')\" class=\"rz-handle\">\n              </div>\n              <div (click)=\"sortToggle(cell)\">\n                <ng-template [ngTemplateOutlet]=\"cell.template.header\" [ngTemplateOutletContext]=\"{cell: cell, direction: (cell.name === sort) ? sortDirection : undefined}\">\n                </ng-template>\n              </div>\n              <ng-container *ngIf=\"cell.template.filter\">\n                <div ngbDropdown (click)=\"$event.stopPropagation()\" class=\"dropdown float-right\">\n                  <button ngbDropdownToggle type=\"button\" [ngClass]=\"[cell.template.filters.length == 0 ? 'btn-default' : 'btn-warning']\"\n                    class=\"btn \" [id]=\"cell.name + '-' + uid  + '-filter'\">\n                    <i class=\"fa fa-filter\"></i>\n                  </button>\n                  <div ngbDropdownMenu [aria-labelledby]=\"cell.name + '-' + uid  + '-filter'\" class=\"dropdown-menu\"\n                    (click)=\"$event.stopPropagation()\">\n                    <div class=\"container\">\n                      <ng-template [ngTemplateOutlet]=\"cell.template.filter\" [ngTemplateOutletContext]=\"{cell: cell, rows: rows}\"></ng-template>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </th>\n          </tr>\n        </thead>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort} | paginate: {\n        itemsPerPage: pageSize,\n        currentPage: currentPage,\n        totalItems: customPaginate ? totalCount : rows.length,\n        id: uid }\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row === selectedRow ? selectedClass : trowClass]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                class=\"{{tcellClass}}\"  *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"!paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort}\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row === selectedRow ? selectedClass : trowClass ]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [ngClass]=\"tcellClass\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"btn-group paging\" *ngIf=\"paginated\">\n    <lib-ngx-multiselect-dropdown [buttonListColumnStyle]=\"buttonSaveTableStyle\" (change)=\"onItemSelect($event)\"\n      [placeholder]=\"'Select Columns'\" [data]=\"dropdownList\" [(ngModel)]=\"dropdownselectedItems\" [settings]=\"dropdownSettings\"\n      (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n    </lib-ngx-multiselect-dropdown>\n    <div style=\"margin-left: 2px; margin-right: 2px\">\n      <button (click)=\"SaveTable()\" [ngClass]=\"buttonSaveTableStyle\" title=\"Save Table\">\n        <i class=\"fa fa-floppy-o\"></i>\n      </button>\n    </div>\n    <pagination-controls (pageChange)=\"selectPage($event)\" previousLabel=\"\" nextLabel=\"\" [id]=\"uid\"></pagination-controls>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <div *ngIf=\"pageSizes.length\" class=\"dropdown\">\n      <select class=\"btn btn-secondary btn-sm dropdown-toggle\" [value]='pageSize' (change)=\"changePerPage($event.target.value)\">\n        <option *ngFor=\"let p of pageSizes\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n      </select>\n    </div>\n  </div>\n\n</div>",
                    styles: ["table thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[draggable=true]{-khtml-user-drag:element;-webkit-user-drag:element}select.btn-sm{padding:.1rem;display:inline-flex}table{table-layout:fixed}table.rz-table{display:block;width:auto;table-layout:fixed;border-collapse:collapse}table.rz-table th{position:relative;min-width:25px}table.rz-table th .rz-handle{width:2px;height:100%;position:absolute;top:0;right:-2px;cursor:ew-resize!important;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px)}table.rz-table th .rz-handle:hover{background:repeating-linear-gradient(45deg,#6c757d00,#6c757d 2px,#6c757d 2px,#6c757d00 4px)}.rtl table.rz-table th .rz-handle{right:auto;left:-2px}.rtl{float:right!important}.ltr{float:left!important}.mainMagicTable{overflow:auto;float:inherit}.paging{width:100%;padding-left:10px;padding-right:10px;padding-bottom:10px}.paddingDiv{padding:10px}.ngxThead{display:block;width:100%}.ngxTbody{height:-webkit-fill-available;display:block;overflow-y:auto;overflow-x:hidden}.ltr .ngxTbody{direction:rtl}.rtl .ngxTbody{direction:ltr}.table td,.table th{word-break:break-all}.savetable{position:absolute;top:5px}.ltr .savetable{right:10px}.rtl .savetable{left:10px}ul.ngx-pagination{margin:0}.rtl .paging{direction:rtl!important}.ltr .paging{direction:ltr!important}"]
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
            _this.domChange.emit(_this.elementRef.nativeElement.offsetWidth - _this.elementRef.nativeElement.clientWidth);
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9QYWdpbmctaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL3NvcnQtaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2hlYWRlci1pdGVtLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL3NvcnQvc29ydC5waXBlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9udW1lcmljLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbnVtZXJpYy1maWx0ZXIvbmd4LW51bWVyaWMtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvc3RyaW5nLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2VudW0tZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9ib29sZWFuLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtYm9vbGVhbi1maWx0ZXIvbmd4LWJvb2xlYW4tZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luZ0lucHV0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5wdXQgaW1wbGVtZW50cyBJUGFnaW5nSW5wdXQge1xyXG4gICBwYWdlOiBudW1iZXI7XHJcbiAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvcnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0SW5wdXQgaW1wbGVtZW50cyBJU29ydElucHV0IHtcclxuICAgIHNvcnQ6IHN0cmluZztcclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJJdGVtIHtcclxuICAgIHB1YmxpYyBXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGlsZHM6IEhlYWRlckl0ZW1bXTtcclxuICAgIHB1YmxpYyBTb3J0YWJsZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBUZW1wbGF0ZTogTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SGVhZGVySXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgICAgIHRoaXMuVGl0bGUgPSAnJztcclxuICAgICAgICB0aGlzLkluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLlNvcnRhYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLldpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5DaGlsZHMgPSBuZXcgQXJyYXk8SGVhZGVySXRlbT4oKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVySXRlbSB9IGZyb20gJy4vaGVhZGVyLWl0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNlbGwge1xyXG4gIHB1YmxpYyBjZWxsV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBjb2xTcGFuOiBudW1iZXI7XHJcbiAgcHVibGljIHJvd1NwYW46IG51bWJlcjtcclxuICBwdWJsaWMgc29ydGFibGU6IGFueTtcclxuICBwdWJsaWMgdGVtcGxhdGU6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBIZWFkZXJJdGVtOiBIZWFkZXJJdGVtO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxIZWFkZXJDZWxsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy5jb2xTcGFuID0gMTtcclxuICAgIHRoaXMucm93U3BhbiA9IDE7XHJcbiAgICB0aGlzLnNvcnRhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgQXR0cmlidXRlLCBJbmplY3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHJcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuYW1lXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUgIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIEBBdHRyaWJ1dGUoJ25hbWUnKSBwdWJsaWMgbmFtZSxcclxuICAgICAgQEluamVjdChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XHJcbiAgKSB7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLFxyXG4gIFRlbXBsYXRlUmVmLCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi8uLi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1jb2x1bW4tdGVtcGxhdGUnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFyZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb2xsZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjZWxsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXTtcclxuICBAQ29udGVudENoaWxkcmVuKE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUpIHRlbXBsYXRlczogUXVlcnlMaXN0PE5hbWVkVGVtcGxhdGVEaXJlY3RpdmU+O1xyXG5cclxuICBwdWJsaWMgaGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHB1YmxpYyBib2R5OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHB1YmxpYyBmaWx0ZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgdGhpcy5wYXJlbnQgPSAnJztcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy5jZWxsV2lkdGggPSAwO1xyXG4gICAgdGhpcy5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gJyc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbm9ybWFsaXplSW5kZXhlcyh0ZW1wbGF0ZXM6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50W10pIHtcclxuICAgIHRlbXBsYXRlcy5zb3J0KChmaXJzdCwgc2Vjb25kKSA9PiB7XHJcbiAgICAgIGlmIChmaXJzdC5wYXJlbnQgPCBzZWNvbmQucGFyZW50KSB7IHJldHVybiAtMTsgfVxyXG4gICAgICBpZiAoZmlyc3QucGFyZW50ID4gc2Vjb25kLnBhcmVudCkgeyByZXR1cm4gMTsgfVxyXG5cclxuICAgICAgaWYgKGZpcnN0LmluZGV4IDwgc2Vjb25kLmluZGV4KSB7IHJldHVybiAtMTsgfVxyXG4gICAgICBpZiAoZmlyc3QuaW5kZXggPiBzZWNvbmQuaW5kZXgpIHsgcmV0dXJuIDE7IH1cclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KS5mb3JFYWNoKCh0LCBpbmRleCkgPT4ge1xyXG4gICAgICB0LmluZGV4ID0gaW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGNvbnN0IGggPSB0aGlzLnRlbXBsYXRlcy5maW5kKHQgPT4gdC5uYW1lID09PSAnaGVhZGVyJyk7XHJcbiAgICB0aGlzLmhlYWRlciA9IGggPyBoLnRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgYiA9IHRoaXMudGVtcGxhdGVzLmZpbmQodCA9PiB0Lm5hbWUgPT09ICdib2R5Jyk7XHJcbiAgICB0aGlzLmJvZHkgPSBiID8gYi50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGYgPSB0aGlzLnRlbXBsYXRlcy5maW5kKHQgPT4gdC5uYW1lID09PSAnZmlsdGVyJyk7XHJcbiAgICB0aGlzLmZpbHRlciA9IGYgPyBmLnRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XHJcbmltcG9ydCB7IFBhZ2luZ0lucHV0IH0gZnJvbSAnLi4vbW9kZWxzL1BhZ2luZy1pbnB1dCc7XHJcbmltcG9ydCB7IFNvcnRJbnB1dCB9IGZyb20gJy4uL21vZGVscy9zb3J0LWlucHV0JztcclxuaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdENvbnRlbnRDaGlsZHJlbixcclxuXHRUZW1wbGF0ZVJlZixcclxuXHRRdWVyeUxpc3QsXHJcblx0QWZ0ZXJDb250ZW50SW5pdCxcclxuXHRDb250ZW50Q2hpbGQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0QWZ0ZXJWaWV3Q2hlY2tlZCxcclxuXHRBZnRlckNvbnRlbnRDaGVja2VkLFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0RGlyZWN0aXZlLFxyXG5cdEVsZW1lbnRSZWYsXHJcblx0UmVuZGVyZXIsXHJcblx0SG9zdExpc3RlbmVyLFxyXG5cdFJlbmRlcmVyMixcclxuXHRWaWV3Q2hpbGRyZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVySXRlbSB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItaXRlbSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL25neC1jb2x1bW4tdGVtcGxhdGUvbmd4LWNvbHVtbi10ZW1wbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnXHJcbmltcG9ydCB7T3JkZXJEaXJlY3Rpb259IGZyb20gJy4uL21vZGVscy9lbnVtJztcclxuaW1wb3J0IGd1aWQgZnJvbSAnYW5ndWxhci11aWQnO1xyXG5pbXBvcnQgeyBJUGFnaW5nSW5wdXQsIElTb3J0SW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ2VsbHNJbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2NlbGxzLWluZm8nXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICduZ3gtbWFnaWMtdGFibGUnLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJbaXNSVEwgPyAncnRsJyA6ICdsdHInXVwiPlxyXG4gIDxkaXYgaWQ9XCJNYWluTWFnaWNUYWJsZUlkXCIgY2xhc3M9XCJtYWluTWFnaWNUYWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZGRpbmdEaXZcIiBbc3R5bGUud2lkdGgucHhdPVwidGFibGVXaWR0aFwiPlxyXG4gICAgICA8dGFibGUgW25nQ2xhc3NdPVwidGFibGVDbGFzc1wiIGNsYXNzPVwicnotdGFibGVcIj5cclxuICAgICAgICA8dGhlYWQgY2xhc3M9XCJuZ3hUaGVhZFwiIFtuZ0NsYXNzXT1cInRoZWFkQ2xhc3NcIj5cclxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgY2VsbFJvdyBvZiBjZWxsc1wiPlxyXG4gICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNlbGwgb2YgaW52ZXJzZUFycmF5KGNlbGxSb3cpXCIgW3N0eWxlLndpZHRoLnB4XT1cImNlbGwuY2VsbFdpZHRoXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogY2VsbC52aXNpYmxlID09PSAnZmFsc2UnID8gJ25vbmUnIDogJyd9XCJcclxuICAgICAgICAgICAgICBbYXR0ci52aXNpYmxlXT1cImNlbGwudmlzaWJsZVwiIFtuYW1lXT1cImNlbGwubmFtZVwiIFtpZF09XCJ1aWQrJy0nK2NlbGwubmFtZSsnLWhlYWQnXCIgW2RyYWdnYWJsZV09XCJjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgKGRyb3ApPVwiZHJvcChjZWxsKVwiIChkcmFnb3Zlcik9XCJhbGxvd0Ryb3AoJGV2ZW50KVwiIChkcmFnc3RhcnQpPVwiZHJhZyhjZWxsKVwiIFthdHRyLmNvbHNwYW5dPVwiY2VsbC5jb2xTcGFuXCJcclxuICAgICAgICAgICAgICBbYXR0ci5yb3dzcGFuXT1cImNlbGwucm93U3BhblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2lkXT1cImNlbGwubmFtZSsncmVzaXphYmxlJ1wiIChtb3VzZWRvd24pPVwicmVzaXplSGFuZGxlKGNlbGwsJGV2ZW50LCd0Ym9keTEnKVwiIGNsYXNzPVwicnotaGFuZGxlXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwic29ydFRvZ2dsZShjZWxsKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuaGVhZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjZWxsOiBjZWxsLCBkaXJlY3Rpb246IChjZWxsLm5hbWUgPT09IHNvcnQpID8gc29ydERpcmVjdGlvbiA6IHVuZGVmaW5lZH1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNlbGwudGVtcGxhdGUuZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cImRyb3Bkb3duIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbmdiRHJvcGRvd25Ub2dnbGUgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIltjZWxsLnRlbXBsYXRlLmZpbHRlcnMubGVuZ3RoID09IDAgPyAnYnRuLWRlZmF1bHQnIDogJ2J0bi13YXJuaW5nJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIFwiIFtpZF09XCJjZWxsLm5hbWUgKyAnLScgKyB1aWQgICsgJy1maWx0ZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWx0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBbYXJpYS1sYWJlbGxlZGJ5XT1cImNlbGwubmFtZSArICctJyArIHVpZCAgKyAnLWZpbHRlcidcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5maWx0ZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NlbGw6IGNlbGwsIHJvd3M6IHJvd3N9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwicGFnaW5hdGVkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93cyB8IHNvcnQ6e2ZpZWxkOiBzb3J0LCBkaXJlY3Rpb246IHNvcnREaXJlY3Rpb24sIGFjdGl2ZTogIWN1c3RvbVNvcnR9IHwgcGFnaW5hdGU6IHtcclxuICAgICAgICBpdGVtc1BlclBhZ2U6IHBhZ2VTaXplLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICB0b3RhbEl0ZW1zOiBjdXN0b21QYWdpbmF0ZSA/IHRvdGFsQ291bnQgOiByb3dzLmxlbmd0aCxcclxuICAgICAgICBpZDogdWlkIH1cIj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpIG9mIEFycihnZXRMY20ocm93KSkuZmlsbCgxKTsgbGV0IGluID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIiBbbmdDbGFzc109XCJbcm93ID09PSBzZWxlY3RlZFJvdyA/IHNlbGVjdGVkQ2xhc3MgOiB0cm93Q2xhc3NdXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2VsbCBvZiBpbnZlcnNlQXJyYXkobG93ZXJDZWxscyk7IGxldCBsb3dlckluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBjZWxsLnZpc2libGUgPT09ICdmYWxzZScgPyAnbm9uZScgOiAnJ31cIiBbc3R5bGUud2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInt7dGNlbGxDbGFzc319XCIgICpuZ0lmPVwiKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAlIGdldExjbShyb3cpID09PSAwXCJcclxuICAgICAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJnZXRMY20ocm93KSAvIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gIT09ICcnID8gTWF0aC5tYXgocm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoLCAxKSA6IDEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmJvZHlcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jvdzogcm93LCBjZWxsOiBjZWxsLCBpbmRleDogKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAvIGdldExjbShyb3cpfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwiIXBhZ2luYXRlZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3MgfCBzb3J0OntmaWVsZDogc29ydCwgZGlyZWN0aW9uOiBzb3J0RGlyZWN0aW9uLCBhY3RpdmU6ICFjdXN0b21Tb3J0fVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHRyb3dDbGFzcyBdXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2VsbCBvZiBpbnZlcnNlQXJyYXkobG93ZXJDZWxscyk7IGxldCBsb3dlckluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBjZWxsLnZpc2libGUgPT09ICdmYWxzZScgPyAnbm9uZScgOiAnJ31cIiBbc3R5bGUud2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRjZWxsQ2xhc3NcIiAqbmdJZj1cIigoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgJSBnZXRMY20ocm93KSA9PT0gMFwiXHJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnJvd3NwYW5dPVwiZ2V0TGNtKHJvdykgLyAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uICE9PSAnJyA/IE1hdGgubWF4KHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCwgMSkgOiAxKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5ib2R5XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IHJvdywgY2VsbDogY2VsbCwgaW5kZXg6ICgoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgLyBnZXRMY20ocm93KX1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHBhZ2luZ1wiICpuZ0lmPVwicGFnaW5hdGVkXCI+XHJcbiAgICA8bGliLW5neC1tdWx0aXNlbGVjdC1kcm9wZG93biBbYnV0dG9uTGlzdENvbHVtblN0eWxlXT1cImJ1dHRvblNhdmVUYWJsZVN0eWxlXCIgKGNoYW5nZSk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IENvbHVtbnMnXCIgW2RhdGFdPVwiZHJvcGRvd25MaXN0XCIgWyhuZ01vZGVsKV09XCJkcm9wZG93bnNlbGVjdGVkSXRlbXNcIiBbc2V0dGluZ3NdPVwiZHJvcGRvd25TZXR0aW5nc1wiXHJcbiAgICAgIChvblNlbGVjdCk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiIChvbkRlU2VsZWN0KT1cIm9uSXRlbURlU2VsZWN0KCRldmVudClcIiAob25TZWxlY3RBbGwpPVwib25TZWxlY3RBbGwoJGV2ZW50KVwiPlxyXG4gICAgPC9saWItbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duPlxyXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAycHg7IG1hcmdpbi1yaWdodDogMnB4XCI+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNhdmVUYWJsZSgpXCIgW25nQ2xhc3NdPVwiYnV0dG9uU2F2ZVRhYmxlU3R5bGVcIiB0aXRsZT1cIlNhdmUgVGFibGVcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZsb3BweS1vXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHBhZ2luYXRpb24tY29udHJvbHMgKHBhZ2VDaGFuZ2UpPVwic2VsZWN0UGFnZSgkZXZlbnQpXCIgcHJldmlvdXNMYWJlbD1cIlwiIG5leHRMYWJlbD1cIlwiIFtpZF09XCJ1aWRcIj48L3BhZ2luYXRpb24tY29udHJvbHM+XHJcbiAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgIDxkaXYgKm5nSWY9XCJwYWdlU2l6ZXMubGVuZ3RoXCIgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICA8c2VsZWN0IGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFt2YWx1ZV09J3BhZ2VTaXplJyAoY2hhbmdlKT1cImNoYW5nZVBlclBhZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VTaXplc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYHRhYmxlIHRoZWFkIHRoey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1bZHJhZ2dhYmxlPXRydWVdey1raHRtbC11c2VyLWRyYWc6ZWxlbWVudDstd2Via2l0LXVzZXItZHJhZzplbGVtZW50fXNlbGVjdC5idG4tc217cGFkZGluZzouMXJlbTtkaXNwbGF5OmlubGluZS1mbGV4fXRhYmxle3RhYmxlLWxheW91dDpmaXhlZH10YWJsZS5yei10YWJsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOmF1dG87dGFibGUtbGF5b3V0OmZpeGVkO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX10YWJsZS5yei10YWJsZSB0aHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MjVweH10YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxle3dpZHRoOjJweDtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDotMnB4O2N1cnNvcjpldy1yZXNpemUhaW1wb3J0YW50O2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCAycHgscmdiYSgwLDAsMCwuMTUpIDJweCxyZ2JhKDAsMCwwLC4xNSkgNHB4KX10YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxlOmhvdmVye2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywjNmM3NTdkMDAsIzZjNzU3ZCAycHgsIzZjNzU3ZCAycHgsIzZjNzU3ZDAwIDRweCl9LnJ0bCB0YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxle3JpZ2h0OmF1dG87bGVmdDotMnB4fS5ydGx7ZmxvYXQ6cmlnaHQhaW1wb3J0YW50fS5sdHJ7ZmxvYXQ6bGVmdCFpbXBvcnRhbnR9Lm1haW5NYWdpY1RhYmxle292ZXJmbG93OmF1dG87ZmxvYXQ6aW5oZXJpdH0ucGFnaW5ne3dpZHRoOjEwMCU7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHh9LnBhZGRpbmdEaXZ7cGFkZGluZzoxMHB4fS5uZ3hUaGVhZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9Lm5neFRib2R5e2hlaWdodDotd2Via2l0LWZpbGwtYXZhaWxhYmxlO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVufS5sdHIgLm5neFRib2R5e2RpcmVjdGlvbjpydGx9LnJ0bCAubmd4VGJvZHl7ZGlyZWN0aW9uOmx0cn0udGFibGUgdGQsLnRhYmxlIHRoe3dvcmQtYnJlYWs6YnJlYWstYWxsfS5zYXZldGFibGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjVweH0ubHRyIC5zYXZldGFibGV7cmlnaHQ6MTBweH0ucnRsIC5zYXZldGFibGV7bGVmdDoxMHB4fXVsLm5neC1wYWdpbmF0aW9ue21hcmdpbjowfS5ydGwgLnBhZ2luZ3tkaXJlY3Rpb246cnRsIWltcG9ydGFudH0ubHRyIC5wYWdpbmd7ZGlyZWN0aW9uOmx0ciFpbXBvcnRhbnR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljVGFibGVDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHRAQ29udGVudENoaWxkcmVuKE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50KVxyXG5cdHNldCB0ZW1wbGF0ZXModmFsdWU6IFF1ZXJ5TGlzdDxOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudD4pIHtcclxuXHRcdHRoaXMudGVtcGxhdGVzQXJyYXkgPSB2YWx1ZS50b0FycmF5KCk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUgPSBudWxsO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlVXAgPSBudWxsO1xyXG5cdFx0dGhpcy50YWJsZVdpZHRoID0gMjAwO1xyXG5cdFx0dGhpcy5pc1JUTCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zY3JvbGxXaWR0aCA9IDA7XHJcblx0XHR0aGlzLmxpc3RjZWxsc0luZm8gPSBuZXcgQXJyYXk8Q2VsbHNJbmZvPigpO1xyXG5cdFx0dGhpcy5idXR0b25MaXN0Q29sdW1uU3R5bGUgPSBcImJ0biBidG4tb3V0bGluZS1pbmZvXCI7XHJcblx0XHR0aGlzLmJ1dHRvblNhdmVUYWJsZVN0eWxlID0gXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiO1xyXG5cdFx0dGhpcy50YWJsZUluZm8gPSBuZXcgQXJyYXk8Q2VsbHNJbmZvPigpO1xyXG5cdFx0dGhpcy5hdXRvU2l6ZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0QElucHV0KClcclxuXHRzZXQgcm93cyhyb3dzOiBBcnJheTxUPikge1xyXG5cdFx0aWYgKCFyb3dzKSB7XHJcblx0XHRcdHRoaXMuX3Jvd3MgPSBbXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3Jvd3MgPSByb3dzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRnZXQgcm93cygpOiBBcnJheTxUPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcm93cztcclxuXHR9XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0YXV0b1NpemU6IEJvb2xlYW4gO1xyXG5cdEBJbnB1dCgpIGJ1dHRvblNhdmVUYWJsZVN0eWxlOiBzdHJpbmc7XHJcblx0QElucHV0KCkgYnV0dG9uTGlzdENvbHVtblN0eWxlOiBzdHJpbmc7XHJcblx0QElucHV0KClcclxuXHRwYWdpbmF0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKVxyXG5cdGN1c3RvbVNvcnQ6IEJvb2xlYW4gPSB0cnVlO1xyXG5cdEBJbnB1dCgpXHJcblx0Y3VzdG9tUGFnaW5hdGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKVxyXG5cdHRvdGFsQ291bnQ6IE51bWJlciA9IDA7XHJcblx0QElucHV0KClcclxuXHRwYWdlU2l6ZTogTnVtYmVyID0gMTA7XHJcblx0QElucHV0KClcclxuXHRjdXJyZW50UGFnZTogTnVtYmVyID0gMTtcclxuXHRASW5wdXQoKVxyXG5cdHBhZ2VTaXplczogbnVtYmVyW10gPSBbMTAsIDIwLCA1MCwgMTAwXTtcclxuXHJcblx0QElucHV0KClcclxuXHRzb3J0OiBTdHJpbmcgPSAnJztcclxuXHRASW5wdXQoKVxyXG5cdHNvcnREaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uQXNjZW5kaW5nO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdGhpZGRlbjogQm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpXHJcblx0c2VsZWN0ZWRDbGFzczogU3RyaW5nID0gJ3RhYmxlLXNlY29uZGFyeSc7XHJcblxyXG5cdEBPdXRwdXQoKVxyXG5cdHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElQYWdpbmdJbnB1dD4oKTtcclxuXHRAT3V0cHV0KClcclxuXHRzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJU29ydElucHV0PigpO1xyXG5cdEBPdXRwdXQoKVxyXG5cdHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnaW5nSW5wdXQ+KCk7XHJcblxyXG5cdEBPdXRwdXQoKVxyXG5cdHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cdEBPdXRwdXQoKVxyXG5cdGNvbHVtbnNBcnJhbmdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRAT3V0cHV0KCkgc2F2ZVRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxDZWxsc0luZm8+PigpO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdHB1YmxpYyBzZXQgbG9hZFRhYmxlKGFycmF5OiBBcnJheTxDZWxsc0luZm8+KSB7XHJcblx0XHRpZiAoYXJyYXkpIHtcclxuXHJcblx0XHRcdHRoaXMudGFibGVJbmZvID0gYXJyYXk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0QElucHV0KClcclxuXHR0YWJsZUNsYXNzOiBTdHJpbmcgPSAndGFibGUnOyAvLyB0YWJsZS1ib3JkZXJlZFxyXG5cdEBJbnB1dCgpXHJcblx0dGhlYWRDbGFzczogU3RyaW5nID0gJ3RoZWFkLWxpZ2h0JztcclxuXHRASW5wdXQoKVxyXG5cdHRib2R5Q2xhc3M6IFN0cmluZyA9ICcnO1xyXG5cdEBJbnB1dCgpXHJcblx0dHJvd0NsYXNzOiBTdHJpbmcgPSAnJztcclxuXHRASW5wdXQoKVxyXG5cdHRjZWxsQ2xhc3M6IFN0cmluZyA9ICcnO1xyXG5cdEBJbnB1dCgpIGlzUlRMOiBib29sZWFuO1xyXG5cclxuXHRkcm9wZG93bkxpc3QgPSBbXTtcclxuXHRkcm9wZG93bnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuXHRkcm9wZG93blNldHRpbmdzID0ge307XHJcblx0cHVibGljIHRhYmxlSW5mbzogQXJyYXk8Q2VsbHNJbmZvPjtcclxuXHRwdWJsaWMgbGlzdGNlbGxzSW5mbzogQXJyYXk8Q2VsbHNJbmZvPjtcclxuXHRwdWJsaWMgc2Nyb2xsV2lkdGg6IG51bWJlcjtcclxuXHRwdWJsaWMgdGFibGVXaWR0aDogbnVtYmVyO1xyXG5cdHB1YmxpYyBfcm93cyA9IEFycmF5PFQ+KCk7XHJcblx0cHVibGljIE1hdGggPSBNYXRoO1xyXG5cdHB1YmxpYyBBcnIgPSBBcnJheTtcclxuXHRwdWJsaWMgdGVtcGxhdGVzQXJyYXk6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50W107XHJcblx0cHVibGljIGNlbGxzOiBBcnJheTxBcnJheTxIZWFkZXJDZWxsPj4gPSBuZXcgQXJyYXk8QXJyYXk8SGVhZGVyQ2VsbD4+KCk7XHJcblx0cHVibGljIGhlYWQ6IEFycmF5PEhlYWRlckl0ZW0+ID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblx0cHVibGljIGxvd2VyQ2VsbHM6IEFycmF5PEhlYWRlckNlbGw+ID0gbmV3IEFycmF5PEhlYWRlckNlbGw+KCk7XHJcblx0cHVibGljIGRlcHRoID0gMDtcclxuXHRwdWJsaWMgdWlkID0gZ3VpZCgpO1xyXG5cdHB1YmxpYyBzZWxlY3RlZFJvdzogVDtcclxuXHRwdWJsaWMgZHJhZ2dpbmdDZWxsOiBIZWFkZXJDZWxsO1xyXG5cdHB1YmxpYyBzb3J0SW5wdXQ6IFNvcnRJbnB1dCA9IG5ldyBTb3J0SW5wdXQoKTtcclxuXHRwdWJsaWMgcGFnaW5nSW5wdXQ6IFBhZ2luZ0lucHV0ID0gbmV3IFBhZ2luZ0lucHV0KCk7XHJcblx0Ly8gaXNMYXN0Q29sdW1uTW91c2UgPSB0cnVlO1xyXG5cclxuXHJcblx0cGl4Y2VsWEJlZm9yZTogbnVtYmVyO1xyXG5cdHdpZHRoQmVmb3JlOiBudW1iZXI7XHJcblx0d2lkdGhBZnRlcjogbnVtYmVyO1xyXG5cdHJlc2l6ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcblx0dW5zdWJzY3JpYmVNb3VzZU1vdmU6ICgpID0+IHZvaWQ7XHJcblx0dW5zdWJzY3JpYmVNb3VzZVVwOiAoKSA9PiB2b2lkO1xyXG5cdHBpeGNlbFhBZnRlcjogbnVtYmVyO1xyXG5cclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblxyXG5cdFx0Tmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQubm9ybWFsaXplSW5kZXhlcyh0aGlzLnRlbXBsYXRlc0FycmF5KTtcclxuXHRcdHRoaXMudGVtcGxhdGVzQXJyYXkuZm9yRWFjaChpID0+XHJcblx0XHRcdGkuY2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5lcmF0ZUNlbGxzKCkpXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmKHRoaXMuYXV0b1NpemUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYXV0b1NpemVDZWxscygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZUluZm8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGFibGVJbmZvW2ldO1xyXG5cdFx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0FycmF5LmZpbHRlcih4ID0+IHguaW5kZXggPT09IGVsZW1lbnQuaW5kZXgpO1xyXG5cdFx0XHRsZXQgaW5kZXggPSB0aGlzLnRlbXBsYXRlc0FycmF5LmluZGV4T2YodGVtcGxhdGVbMF0pO1xyXG5cclxuXHRcdFx0dGVtcGxhdGVbMF0uY2VsbFdpZHRoID0gZWxlbWVudC5jZWxsV2lkdGg7XHJcblx0XHRcdHRlbXBsYXRlWzBdLnNvcnRhYmxlID0gZWxlbWVudC5zb3J0YWJsZTtcclxuXHRcdFx0dGVtcGxhdGVbMF0uZHJhZ2dhYmxlID0gZWxlbWVudC5kcmFnZ2JsZTtcclxuXHRcdFx0dGVtcGxhdGVbMF0udmlzaWJsZSA9IGVsZW1lbnQudmlzaWJsZTtcclxuXHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSB0ZW1wbGF0ZVswXTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdO1xyXG5cdFx0XHR0aGlzLmRyb3Bkb3duTGlzdC5wdXNoKHsgaXRlbV9pZDogZWxlbWVudC5pbmRleCwgaXRlbV90ZXh0OiBlbGVtZW50Lm5hbWUsIHBhcmVudDogZWxlbWVudC5wYXJlbnQgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcm9wZG93blNldHRpbmdzID0ge1xyXG5cdFx0XHRzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG5cdFx0XHRpZEZpZWxkOiAnaXRlbV9pZCcsXHJcblx0XHRcdHRleHRGaWVsZDogJ2l0ZW1fdGV4dCcsXHJcblx0XHRcdHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcclxuXHRcdFx0dW5TZWxlY3RBbGxUZXh0OiAnVW5TZWxlY3QgQWxsJyxcclxuXHRcdFx0aXRlbXNTaG93TGltaXQ6IDIsXHJcblx0XHRcdGFsbG93U2VhcmNoRmlsdGVyOiB0cnVlLFxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TGNtKHJvdzogYW55KTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IGxjbSA9IHRoaXMubGNtT2ZMaXN0KFxyXG5cdFx0XHR0aGlzLmxvd2VyQ2VsbHMubWFwKGkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnXHJcblx0XHRcdFx0XHQ/IDFcclxuXHRcdFx0XHRcdDogTWF0aC5tYXgocm93W2kudGVtcGxhdGUuY29sbGVjdGlvbi50b1N0cmluZygpXS5sZW5ndGgsIDEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHJldHVybiBsY207XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2NkKGEsIGIpOiBudW1iZXIge1xyXG5cdFx0aWYgKGIgPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIGE7IC8vIHNvIHRoYXQgdGhlIHJlY3Vyc2lvbiBkb2VzIG5vdCBnbyBvbiBmb3JldmVyXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nY2QoYiwgYSAlIGIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGxjbU9mTGlzdChhcnIpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgZCA9IHRoaXM7XHJcblx0XHRjb25zdCB0ID0gYXJyLnJlZHVjZSgoYSwgYikgPT4gZC5sY20oYSwgYikpO1xyXG5cdFx0cmV0dXJuIHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGNtKGEsIGIpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIChhICogYikgLyB0aGlzLmdjZChhLCBiKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhbGxvd0Ryb3AoeDogYW55KSB7XHJcblx0XHR4LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJvcCh4OiBIZWFkZXJDZWxsKSB7XHJcblx0XHRpZiAodGhpcy5kcmFnZ2luZ0NlbGwgPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5kcmFnZ2luZ0NlbGwudGVtcGxhdGUucGFyZW50ICE9PSB4LnRlbXBsYXRlLnBhcmVudCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdG1wID0geC50ZW1wbGF0ZS5pbmRleDtcclxuXHRcdHgudGVtcGxhdGUuaW5kZXggPSB0aGlzLmRyYWdnaW5nQ2VsbC50ZW1wbGF0ZS5pbmRleDtcclxuXHRcdHRoaXMuZHJhZ2dpbmdDZWxsLnRlbXBsYXRlLmluZGV4ID0gdG1wO1xyXG5cdFx0dGhpcy5kcmFnZ2luZ0NlbGwgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG5cdFx0dGhpcy5jb2x1bW5zQXJyYW5nZUNoYW5nZS5lbWl0KFxyXG5cdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5Lm1hcCh0ID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0bmFtZTogdC5uYW1lLFxyXG5cdFx0XHRcdFx0cGFyZW50OiB0LnBhcmVudCxcclxuXHRcdFx0XHRcdGluZGV4OiB0LmluZGV4XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhZyh4OiBIZWFkZXJDZWxsKSB7XHJcblx0XHR0aGlzLmRyYWdnaW5nQ2VsbCA9IHg7XHJcblx0fVxyXG5cdHByb3RlY3RlZCBnZW5lcmF0ZUNlbGxzKCkge1xyXG5cclxuXHRcdHRoaXMuaGVhZCA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XHJcblx0XHR0aGlzLnRhYmxlV2lkdGggPSB0aGlzLmhlYWQubWFwKGkgPT4gK2kuV2lkdGgpXHJcblx0XHRcdC5yZWR1Y2U8bnVtYmVyPigoc3VtLCBjdXJyZW50KSA9PiBzdW0gKyBjdXJyZW50LCAwKTtcclxuXHRcdHRoaXMuZGVwdGggPSBNYXRoLm1heChcclxuXHRcdFx0Li4udGhpcy5oZWFkLm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5EZXB0aChpdGVtKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jZWxscyA9IFtdO1xyXG5cdFx0dGhpcy5sb3dlckNlbGxzID0gW107XHJcblx0XHR0aGlzLmNyZWF0ZUhlYWRlckNlbGxzKHRoaXMuaGVhZCwgMCwgdGhpcy5kZXB0aCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYXV0b1NpemVDZWxscygpXHJcblx0e1xyXG5cdFx0bGV0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01haW5NYWdpY1RhYmxlSWQnKTtcclxuXHRcdFx0bGV0IGNsaWVudFdpZHRoID0gIGh0bWxFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0bGV0IHJvd0NvdW50PTA7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdO1xyXG5cdFx0XHRsZXQgY2hpbGRzPXRoaXMudGVtcGxhdGVzQXJyYXlcclxuXHRcdFx0LmZpbHRlcih0ID0+IHQucGFyZW50ID09PSBlbGVtZW50Lm5hbWUpO1xyXG5cdFx0XHRpZihjaGlsZHMubGVuZ3RoPDEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyb3dDb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNlbGxXaWR0aD1jbGllbnRXaWR0aC9yb3dDb3VudDtcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF07XHJcblx0XHRcdGxldCBjaGlsZHM9dGhpcy50ZW1wbGF0ZXNBcnJheVxyXG5cdFx0XHQuZmlsdGVyKHQgPT4gdC5wYXJlbnQgPT09IGVsZW1lbnQubmFtZSk7XHJcblx0XHRcdGlmKGNoaWxkcy5sZW5ndGg8MSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsZW1lbnQuY2VsbFdpZHRoPWNlbGxXaWR0aDtcclxuXHRcdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XSA9IGVsZW1lbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2VuZXJhdGVIZWFkZXJzKGhlYWRlck5hbWU6IFN0cmluZyA9ICcnKTogQXJyYXk8SGVhZGVySXRlbT4ge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblx0XHR0aGlzLnRlbXBsYXRlc0FycmF5XHJcblx0XHRcdC5maWx0ZXIodCA9PiB0LnBhcmVudCA9PT0gaGVhZGVyTmFtZSlcclxuXHRcdFx0LmZpbHRlcih0ID0+IHQudmlzaWJsZSA9PT0gdHJ1ZSlcclxuXHRcdFx0LnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IHtcclxuXHRcdFx0XHRpZiAoZmlyc3QuaW5kZXggPiBzZWNvbmQuaW5kZXgpIHtcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGZpcnN0LmluZGV4IDwgc2Vjb25kLmluZGV4KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5mb3JFYWNoKHQgPT4ge1xyXG5cdFx0XHRcdGxldCBpdGVtOiBIZWFkZXJJdGVtO1xyXG5cdFx0XHRcdGl0ZW0gPSBuZXcgSGVhZGVySXRlbSgpO1xyXG5cdFx0XHRcdGl0ZW0uVGl0bGUgPSB0LnRpdGxlO1xyXG5cdFx0XHRcdGl0ZW0uSW5kZXggPSArdC5pbmRleDtcclxuXHRcdFx0XHRpdGVtLlNvcnRhYmxlID0gdC5zb3J0YWJsZTtcclxuXHRcdFx0XHRpdGVtLlRlbXBsYXRlID0gdDtcclxuXHRcdFx0XHRpdGVtLlZpc2libGUgPSB0LnZpc2libGU7XHJcblx0XHRcdFx0aXRlbS5DaGlsZHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycyh0Lm5hbWUpO1xyXG5cdFx0XHRcdGl0ZW0uV2lkdGggPSBpdGVtLkNoaWxkcy5sZW5ndGggPT09IDAgJiYgaXRlbS5WaXNpYmxlID09PSB0cnVlID8gK3QuY2VsbFdpZHRoIDogaXRlbS5DaGlsZHMubWFwKGkgPT4gK2kuV2lkdGgpXHJcblx0XHRcdFx0XHQucmVkdWNlPG51bWJlcj4oKHN1bSwgY3VycmVudCkgPT4gc3VtICsgY3VycmVudCwgMCk7XHJcblx0XHRcdFx0aXRlbS5OYW1lID0gdC5uYW1lO1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdHRoaXMuZHJvcGRvd25zZWxlY3RlZEl0ZW1zLnB1c2goeyBpdGVtX2lkOiBpdGVtLkluZGV4LCBpdGVtX3RleHQ6IGl0ZW0uTmFtZSwgcGFyZW50OiBoZWFkZXJOYW1lIH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNyZWF0ZUhlYWRlckNlbGxzKFxyXG5cdFx0aXRlbXM6IEhlYWRlckl0ZW1bXSxcclxuXHRcdGxldmVsOiBudW1iZXIsXHJcblx0XHRkZXB0aDogbnVtYmVyXHJcblx0KSB7XHJcblx0XHRpZiAodGhpcy5jZWxscy5sZW5ndGggPD0gbGV2ZWwpIHtcclxuXHRcdFx0dGhpcy5jZWxscy5wdXNoKG5ldyBBcnJheTxIZWFkZXJDZWxsPigpKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHJvdyA9IHRoaXMuY2VsbHNbbGV2ZWxdO1xyXG5cdFx0aXRlbXMuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QuSW5kZXgudmFsdWVPZigpIC0gc2Vjb25kLkluZGV4LnZhbHVlT2YoKSlcclxuXHRcdFx0Lm1hcChoID0+IHtcclxuXHRcdFx0XHRjb25zdCBjID0gbmV3IEhlYWRlckNlbGwoKTtcclxuXHRcdFx0XHRjLm5hbWUgPSBoLk5hbWU7XHJcblx0XHRcdFx0Yy5pbmRleCA9IGguSW5kZXg7XHJcblx0XHRcdFx0Yy50aXRsZSA9IGguVGl0bGU7XHJcblx0XHRcdFx0Yy52aXNpYmxlID0gaC5WaXNpYmxlO1xyXG5cdFx0XHRcdGMuY2VsbFdpZHRoID0gaC5XaWR0aDtcclxuXHRcdFx0XHRjLnNvcnRhYmxlID0gaC5Tb3J0YWJsZTtcclxuXHRcdFx0XHRjLnRlbXBsYXRlID0gaC5UZW1wbGF0ZTtcclxuXHRcdFx0XHRjLkhlYWRlckl0ZW0gPSBoO1xyXG5cdFx0XHRcdGMuY29sU3BhbiA9IHRoaXMuY291bnRIZWFkZXJzKGgpO1xyXG5cdFx0XHRcdGMucm93U3BhbiA9IGguQ2hpbGRzLmxlbmd0aCA+IDAgPyAxIDogZGVwdGggLSBsZXZlbDtcclxuXHRcdFx0XHRyb3cucHVzaChjKTtcclxuXHRcdFx0XHRpZiAoaC5DaGlsZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVIZWFkZXJDZWxscyhoLkNoaWxkcywgbGV2ZWwgKyAxLCBkZXB0aCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChoLlZpc2libGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sb3dlckNlbGxzLnB1c2goYyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjb3VudEhlYWRlcnMoaXRlbTogSGVhZGVySXRlbSk6IG51bWJlciB7XHJcblx0XHRpZiAoaXRlbS5DaGlsZHMubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGhlYWRlckNvdW50ID0gaXRlbS5DaGlsZHMubWFwKGNoaWxkID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb3VudEhlYWRlcnMoY2hpbGQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGhlYWRlckNvdW50LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgRGVwdGgoaXRlbTogSGVhZGVySXRlbSk6IG51bWJlciB7XHJcblx0XHRpZiAoaXRlbS5DaGlsZHMubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGRlcHRoID0gTWF0aC5tYXgoXHJcblx0XHRcdFx0Li4uaXRlbS5DaGlsZHMubWFwKGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLkRlcHRoKGNoaWxkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gZGVwdGggKyAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0Um93KHJvdzogVCkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcclxuXHRcdHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGFuZ2VQZXJQYWdlKHBhZ2VTaXplOiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLnBhZ2VTaXplID09PSBwYWdlU2l6ZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tUGFnaW5hdGUpIHtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhZ2luZ0lucHV0LnBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlIGFzIG51bWJlcjtcclxuXHRcdHRoaXMucGFnaW5nSW5wdXQucGFnZVNpemUgPSBwYWdlU2l6ZTtcclxuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2UuZW1pdChcclxuXHRcdFx0dGhpcy5wYWdpbmdJbnB1dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHBhZ2UpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbVBhZ2luYXRlKSB7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhZ2luZ0lucHV0LnBhZ2UgPSBwYWdlO1xyXG5cdFx0dGhpcy5wYWdpbmdJbnB1dC5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemUgYXMgbnVtYmVyO1xyXG5cclxuXHRcdHRoaXMucGFnZUNoYW5nZS5lbWl0KFxyXG5cdFx0XHR0aGlzLnBhZ2luZ0lucHV0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNvcnRUb2dnbGUoY2VsbDogSGVhZGVyQ2VsbCkge1xyXG5cdFx0aWYgKGNlbGwuc29ydGFibGUgPT09IGZhbHNlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbmV3RGlyZWN0aW9uOiBPcmRlckRpcmVjdGlvbjtcclxuXHJcblx0XHRpZiAodGhpcy5zb3J0ID09PSBjZWxsLm5hbWUpIHtcclxuXHRcdFx0bmV3RGlyZWN0aW9uID1cclxuXHRcdFx0XHR0aGlzLnNvcnREaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZ1xyXG5cdFx0XHRcdFx0PyBPcmRlckRpcmVjdGlvbi5EZXNjZW5kaW5nXHJcblx0XHRcdFx0XHQ6IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5ld0RpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuY3VzdG9tU29ydCkge1xyXG5cdFx0XHR0aGlzLnNvcnQgPSBjZWxsLm5hbWU7XHJcblx0XHRcdHRoaXMuc29ydERpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuXHRcdH1cclxuXHRcdHRoaXMuc29ydElucHV0LnNvcnQgPSBjZWxsLm5hbWUgYXMgc3RyaW5nO1xyXG5cdFx0dGhpcy5zb3J0SW5wdXQuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xyXG5cdFx0dGhpcy5zb3J0Q2hhbmdlLmVtaXQoXHJcblx0XHRcdHRoaXMuc29ydElucHV0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25Eb21DaGFuZ2Uod2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0dGhpcy5zY3JvbGxXaWR0aCA9IHdpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGludmVyc2VBcnJheShhcnJheTogQXJyYXk8SGVhZGVyQ2VsbD4pOiBBcnJheTxIZWFkZXJDZWxsPiB7XHJcblx0XHRsZXQgaW52ZXJzZSA9IG5ldyBBcnJheTxIZWFkZXJDZWxsPigpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGludmVyc2UucHVzaChhcnJheVtpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW52ZXJzZTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgcmVzaXplQ2VsbCh3aWR0aDogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdC8vIHRoaXMuaXNMYXN0Q29sdW1uTW91c2UgPSBmYWxzZTtcclxuXHRcdGlmIChpbmRleCA9PSB0aGlzLmxvd2VyQ2VsbHMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHQvLyB0aGlzLmlzTGFzdENvbHVtbk1vdXNlID0gZmFsc2U7XHJcblx0XHRcdHJldHVybiB3aWR0aCAtIHRoaXMuc2Nyb2xsV2lkdGg7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gd2lkdGg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkl0ZW1TZWxlY3QoaXRlbXM6IGFueSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcblx0XHRcdGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQXJyYXlcclxuXHRcdFx0XHQuZmluZCh0ID0+IHQuaW5kZXggPT09IGl0ZW0uaXRlbV9pZCk7XHJcblx0XHRcdGxldCBpbmRleCA9IHRoaXMudGVtcGxhdGVzQXJyYXkuaW5kZXhPZihpdGVtKTtcclxuXHRcdFx0dGVtcGxhdGUudmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gdGVtcGxhdGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHR9XHJcblx0b25JdGVtRGVTZWxlY3QoaXRlbXM6IGFueSkge1xyXG5cclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRsZXQgaXRlbSA9IGl0ZW1zLmZpbHRlcih0ID0+IHQuaXRlbV9pZCA9PT0gdGhpcy50ZW1wbGF0ZXNBcnJheVtqXS5pbmRleCk7XHJcblx0XHRcdGlmIChpdGVtLmxlbmd0aCA8PSAwKSB7XHJcblx0XHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtqXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtqXSA9IHRoaXMudGVtcGxhdGVzQXJyYXlbal07XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcblx0fVxyXG5cdG9uU2VsZWN0QWxsKGl0ZW1zOiBhbnkpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaV07XHJcblx0XHRcdGxldCBpbmRleCA9IHRoaXMudGVtcGxhdGVzQXJyYXkuaW5kZXhPZih0ZW1wbGF0ZSk7XHJcblx0XHRcdHRlbXBsYXRlLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XSA9IHRlbXBsYXRlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcblx0fVxyXG5cclxuXHRTYXZlVGFibGUoKSB7XHJcblx0XHR0aGlzLmxpc3RjZWxsc0luZm8gPSBudWxsO1xyXG5cdFx0dGhpcy5saXN0Y2VsbHNJbmZvID0gbmV3IEFycmF5PENlbGxzSW5mbz4oKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpXTtcclxuXHRcdFx0dGhpcy5saXN0Y2VsbHNJbmZvLnB1c2goeyBpbmRleDogZWxlbWVudC5pbmRleCwgbmFtZTogZWxlbWVudC5uYW1lLCBjZWxsV2lkdGg6IGVsZW1lbnQuY2VsbFdpZHRoLCBwYXJlbnQ6IGVsZW1lbnQucGFyZW50LCBzb3J0YWJsZTogZWxlbWVudC5zb3J0YWJsZSwgZHJhZ2dibGU6IGVsZW1lbnQuZHJhZ2dhYmxlLCB2aXNpYmxlOiBlbGVtZW50LnZpc2libGUgfSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNhdmVUYWJsZS5lbWl0KFxyXG5cdFx0XHR0aGlzLmxpc3RjZWxsc0luZm9cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzaXplSGFuZGxlKGNlbGw6IEhlYWRlckNlbGwsIG1FdmVudDogTW91c2VFdmVudCwgaWRUYm9keTogc3RyaW5nKSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGxldCB0Ym9keUlkID0gaWRUYm9keTtcclxuXHRcdGNvbnN0IHRhYmxlV2lkdGhUZW1wID0gdGhpcy50YWJsZVdpZHRoO1xyXG5cdFx0dGhpcy5waXhjZWxYQmVmb3JlID0gbUV2ZW50Lng7XHJcblx0XHR0aGlzLndpZHRoQmVmb3JlID0gK2NlbGwuY2VsbFdpZHRoO1xyXG5cdFx0Y29uc3QgZHJhZ2dhYmxlID0gY2VsbC50ZW1wbGF0ZS5kcmFnZ2FibGU7XHJcblx0XHRjb25zdCBzb3J0YWJsZSA9IGNlbGwudGVtcGxhdGUuc29ydGFibGU7XHJcblx0XHRsZXQgbGFzdEhlYWRlckl0ZW0gPSBjZWxsLkhlYWRlckl0ZW07XHJcblx0XHR3aGlsZSAobGFzdEhlYWRlckl0ZW0uQ2hpbGRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0bGFzdEhlYWRlckl0ZW0gPSBsYXN0SGVhZGVySXRlbS5DaGlsZHNbbGFzdEhlYWRlckl0ZW0uQ2hpbGRzLmxlbmd0aCAtIDFdO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgYWxsQ2VsbHMgPSB0aGlzLmNlbGxzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoYik7IH0pO1xyXG5cdFx0Y29uc3QgbGFzdENlbGwgPSBhbGxDZWxscy5maWx0ZXIodCA9PiB0LnZpc2libGUgPT09IHRydWUpLmZpbmQoaSA9PiBpLm5hbWUgPT09IGxhc3RIZWFkZXJJdGVtLk5hbWUpO1xyXG5cclxuXHJcblx0XHRjb25zdCB3aWR0aExhc3RDZWxsID0gK2xhc3RDZWxsLmNlbGxXaWR0aDtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcclxuXHRcdFx0J2RvY3VtZW50JyxcclxuXHRcdFx0J21vdXNlbW92ZScsXHJcblx0XHRcdGV2ZW50ID0+IHtcclxuXHRcdFx0XHQvLyBpZiAodGhpcy5pc0xhc3RDb2x1bW5Nb3VzZSkge1xyXG5cdFx0XHRcdC8vIFx0cmV0dXJuO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0Y2VsbC50ZW1wbGF0ZS5zb3J0YWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGxldCBXaWR0aEFkZCA9IGV2ZW50LnggLSB0aGlzLnBpeGNlbFhCZWZvcmU7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNSVEwpIHtcclxuXHRcdFx0XHRcdFdpZHRoQWRkID0gdGhpcy5waXhjZWxYQmVmb3JlIC0gZXZlbnQueDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChsYXN0Q2VsbC5jZWxsV2lkdGggPj0gNTApIHtcclxuXHRcdFx0XHRcdGNlbGwuY2VsbFdpZHRoID0gdGhpcy53aWR0aEJlZm9yZSArIChXaWR0aEFkZCk7XHJcblx0XHRcdFx0XHRsYXN0Q2VsbC5jZWxsV2lkdGggPSB3aWR0aExhc3RDZWxsICsgKFdpZHRoQWRkKTtcclxuXHRcdFx0XHRcdHRoaXMudGFibGVXaWR0aCA9IHRhYmxlV2lkdGhUZW1wICsgKFdpZHRoQWRkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlVXAgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYgKGxhc3RDZWxsLmNlbGxXaWR0aCA8IDUwKSB7XHJcblx0XHRcdFx0bGFzdENlbGwuY2VsbFdpZHRoID0gNTA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGFzdENlbGwudGVtcGxhdGUuY2VsbFdpZHRoID0gbGFzdENlbGwuY2VsbFdpZHRoO1xyXG5cclxuXHRcdFx0aWYgKGNlbGwuY2VsbFdpZHRoIDwgNTApIHtcclxuXHRcdFx0XHRjZWxsLmNlbGxXaWR0aCA9IDUwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNlbGwudGVtcGxhdGUuY2VsbFdpZHRoID0gY2VsbC5jZWxsV2lkdGg7XHJcblxyXG5cdFx0XHRjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGRyYWdnYWJsZTtcclxuXHRcdFx0Y2VsbC50ZW1wbGF0ZS5zb3J0YWJsZSA9IHNvcnRhYmxlO1xyXG5cclxuXHRcdFx0bGV0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGJvZHlJZCk7XHJcblx0XHRcdHRoaXMuc2Nyb2xsV2lkdGggPSBodG1sRWxlbWVudC5vZmZzZXRXaWR0aCAtIGh0bWxFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0XHRpZiAodGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSkge1xyXG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUoKTtcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwKSB7XHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlVXAoKTtcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi8uLi9tb2RlbHMvZW51bSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzZXREaXJlY3Rpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcbiAgICBfZGlyZWN0aW9uOiBudW1iZXI7XHJcbiAgICBASW5wdXQoJ3NldERpcmVjdGlvbicpXHJcbiAgICBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctdXAnKTtcclxuICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uRGVzY2VuZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmYS1hcnJvdy11cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmYS1hcnJvdy1kb3duJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkb21DaGFuZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRG9tQ2hhbmdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNoYW5nZXM6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBkb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgLy8gbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5kb21DaGFuZ2UuZW1pdChtdXRhdGlvbikpO1xyXG4gICAgICB0aGlzLmRvbUNoYW5nZS5lbWl0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZXMub2JzZXJ2ZShlbGVtZW50LCB7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWVcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZXMuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gIGZyb20gJy4uL21vZGVscy9lbnVtJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc29ydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShyb3dzOiBhbnlbXSwgYXJnczogYW55KTogYW55W10ge1xyXG4gICAgY29uc3QgZmllbGQgPSBhcmdzLmZpZWxkO1xyXG4gICAgY29uc3QgYWN0aXZlID0gYXJncy5hY3RpdmUgfHwgdHJ1ZTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcclxuICAgICAgICByb3dzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYVtmaWVsZF0gPCBiW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3dzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYVtmaWVsZF0gPiBiW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbZmllbGRdIDwgYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgbmFtZXNwYWNlIE51bWVyaWNGaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgICAgICBncmVhdGVyVGhhbiA9ICdncmVhdGVyIHRoYW4nLFxyXG4gICAgICAgIG5vdEdyZWF0ZXJUaGFuID0gJ25vdCBncmVhdGVyIHRoYW4nLFxyXG4gICAgICAgIHNtYWxsZXJUaGFuID0gJ3NtYWxsZXIgdGhhbicsXHJcbiAgICAgICAgbm90U21hbGxlclRoYW4gPSAnbm90IHNtYWxsZXIgdGhhbidcclxuXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBOdW1lcmljRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL251bWVyaWMtZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbnVtZXJpYy1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclR5cGVcIj5cclxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBOdW1lcmljRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBOdW1lcmljRmlsdGVyID0gTnVtZXJpY0ZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogTnVtZXJpY0ZpbHRlci5maWx0ZXJzLmVxdWFscywgZmlsdGVyVmFsdWU6ICcnfSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT09ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBTdHJpbmdGaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgICAgICBzdGFydHNXaXRoID0gJ3N0YXJ0cyB3aXRoJyxcclxuICAgICAgICBub3RTdGFydHNXaXRoID0gJ25vdCBzdGFydHMgd2l0aCcsXHJcbiAgICAgICAgZW5kc1dpdGggPSAnZW5kcyB3aXRoJyxcclxuICAgICAgICBub3RFbmRzV2l0aCA9ICdub3QgZW5kcyB3aXRoJyxcclxuICAgICAgICBjb250YWlucyA9ICdjb250YWlucycsXHJcbiAgICAgICAgbm90Q29udGFpbnMgPSAnbm90IGNvbnRhaW5zJ1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgU3RyaW5nRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL3N0cmluZy1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1zdHJpbmctZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgU3RyaW5nRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgU3RyaW5nRmlsdGVyID0gU3RyaW5nRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBTdHJpbmdGaWx0ZXIuZmlsdGVycy5jb250YWlucywgZmlsdGVyVmFsdWU6ICcnfSlcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFbnVtRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgRW51bUZpbHRlciB9IGZyb20gJy4uL21vZGVscy9lbnVtLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVudW0tZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgRW51bUZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVmFsdWVcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIGl0ZW1zXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW51bUZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuICBASW5wdXQoKSBpdGVtczogYW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIEVudW1GaWx0ZXIgPSBFbnVtRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBFbnVtRmlsdGVyLmZpbHRlcnMuZXF1YWxzLCBmaWx0ZXJWYWx1ZTogJyd9KVxyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEJvb2xlYW5GaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IEJvb2xlYW5GaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvYm9vbGVhbi1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1ib29sZWFuLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgQm9vbGVhbkZpbHRlciA9IEJvb2xlYW5GaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IEJvb2xlYW5GaWx0ZXIuZmlsdGVycy5lcXVhbHMsIGZpbHRlclZhbHVlOiAnJ30pXHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTGlzdEl0ZW1Ecm9wZG93biB7XHJcbiAgICBpZDogU3RyaW5nO1xyXG4gICAgdGV4dDogU3RyaW5nO1xyXG4gICAgcGFyZW50OiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc291cmNlOiBhbnkpIHtcclxuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dCA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnBhcmVudD0nJztcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLmlkID0gc291cmNlLmlkO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHNvdXJjZS50ZXh0O1xyXG4gICAgICAgIHRoaXMucGFyZW50PXNvdXJjZS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSURyb3Bkb3duU2V0dGluZ3Mge1xyXG4gICAgc2luZ2xlU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICAgIGlkRmllbGQ/OiBzdHJpbmc7XHJcbiAgICB0ZXh0RmllbGQ/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRGaWVsZD86IHN0cmluZztcclxuICAgIGVuYWJsZUNoZWNrQWxsPzogYm9vbGVhbjtcclxuICAgIHNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgICB1blNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgICBhbGxvd1NlYXJjaEZpbHRlcj86IGJvb2xlYW47XHJcbiAgICBjbGVhclNlYXJjaEZpbHRlcj86IGJvb2xlYW47XHJcbiAgICBtYXhIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBpdGVtc1Nob3dMaW1pdD86IG51bWJlcjtcclxuICAgIGxpbWl0U2VsZWN0aW9uPzogbnVtYmVyO1xyXG4gICAgc2VhcmNoUGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xyXG4gICAgbm9EYXRhQXZhaWxhYmxlUGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xyXG4gICAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICAgIHNob3dTZWxlY3RlZEl0ZW1zQXRUb3A/OiBib29sZWFuO1xyXG4gIH0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Ecm9wZG93biwgSURyb3Bkb3duU2V0dGluZ3MgfSBmcm9tICcuLi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgRFJPUERPV05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1tdWx0aXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgPGRpdiB0YWJpbmRleD1cIj0wXCIgKGJsdXIpPVwib25Ub3VjaGVkKClcIiBjbGFzcz1cIm11bHRpc2VsZWN0LWRyb3Bkb3duXCIgKGNsaWNrT3V0c2lkZSk9XCJjbG9zZURyb3Bkb3duKClcIj5cbiAgPGRpdiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiLTFcIiBbbmdDbGFzc109XCJidXR0b25MaXN0Q29sdW1uU3R5bGVcIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSA8c3BhbiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJkcm9wZG93bi1idG5cIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KVwiPiAtLT5cbiAgICA8IS0tIDxzcGFuPnt7X3BsYWNlaG9sZGVyfX08L3NwYW4+IC0tPlxuICAgIDwhLS0gPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiPjwvaT4gLS0+XG4gICAgPCEtLSAqbmdJZj1cInNlbGVjdGVkSXRlbXMubGVuZ3RoID09IDBcIiAtLT5cblxuICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VsZWN0ZWRJdGVtczt0cmFja0J5OiB0cmFja0J5Rm47bGV0IGsgPSBpbmRleFwiIFtoaWRkZW5dPVwiayA+IF9zZXR0aW5ncy5pdGVtc1Nob3dMaW1pdC0xXCI+XG4gICAgICAgICAge3tpdGVtLnRleHR9fVxuICAgICAgICAgIDxhIHN0eWxlPVwicGFkZGluZy10b3A6MnB4O3BhZGRpbmctbGVmdDoycHg7Y29sb3I6d2hpdGVcIiAoY2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LGl0ZW0pXCI+eDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0ICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDo0cHhcIj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDZweDtcIiAqbmdJZj1cIml0ZW1TaG93UmVtYWluaW5nKCk+MFwiPit7e2l0ZW1TaG93UmVtYWluaW5nKCl9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJpc0Ryb3Bkb3duT3BlbiA/ICdkcm9wZG93bi11cCcgOiAnZHJvcGRvd24tZG93bidcIj48L3NwYW4+XG4gICAgICAgIDwvc3Bhbj4gLS0+XG4gICAgPCEtLSA8L3NwYW4+IC0tPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBbaGlkZGVuXT1cIiFpc0Ryb3Bkb3duT3BlblwiPlxuICAgIDx1bCBjbGFzcz1cIml0ZW0xXCI+XG4gICAgICA8bGkgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdEFsbCgpXCIgKm5nSWY9XCJfZGF0YS5sZW5ndGggPiAwICYmICFfc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIF9zZXR0aW5ncy5lbmFibGVDaGVja0FsbCAmJiBfc2V0dGluZ3MubGltaXRTZWxlY3Rpb249PT0tMVwiXG4gICAgICAgIGNsYXNzPVwibXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveFwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7cGFkZGluZzoxMHB4XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJpc0FsbEl0ZW1zU2VsZWN0ZWQoKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBpc0xpbWl0U2VsZWN0aW9uUmVhY2hlZCgpXCIgLz5cbiAgICAgICAgPGRpdj57eyBfc2V0dGluZ3Muc2VsZWN0QWxsVGV4dH19PC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLXRleHRib3hcIiAqbmdJZj1cIl9kYXRhLmxlbmd0aD4wICYmIF9zZXR0aW5ncy5hbGxvd1NlYXJjaEZpbHRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVhZE9ubHldPVwiZGlzYWJsZWRcIiBbcGxhY2Vob2xkZXJdPVwiX3NldHRpbmdzLnNlYXJjaFBsYWNlaG9sZGVyVGV4dFwiIFsobmdNb2RlbCldPVwiZmlsdGVyLnRleHRcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGV4dENoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzPVwiaXRlbTJcIiBbc3R5bGUubWF4SGVpZ2h0XT1cIl9zZXR0aW5ncy5tYXhIZWlnaHQrJ3B4J1wiPlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9kYXRhIHwgbmcyTGlzdEZpbHRlcjpmaWx0ZXI7IGxldCBpID0gaW5kZXg7XCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxpdGVtKVwiIGNsYXNzPVwibXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZChpdGVtKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCAoaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKSAmJiAhaXNTZWxlY3RlZChpdGVtKSlcIiAvPlxuICAgICAgICA8ZGl2Pnt7aXRlbS50ZXh0fX08L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9J25vLWRhdGEnICpuZ0lmPVwiX2RhdGEubGVuZ3RoID09IDBcIj5cbiAgICAgICAgPGg1Pnt7X3NldHRpbmdzLm5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dH19PC9oNT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm11bHRpc2VsZWN0LWRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG57ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjYWRhZGFkO3dpZHRoOjEwMCU7cGFkZGluZzo2cHggMTJweDttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNTI4NTcxNDM7dGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyLXJhZGl1czo0cHh9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjMzM3YWI3O21hcmdpbi1yaWdodDo0cHg7YmFja2dyb3VuZDojMzM3YWI3O3BhZGRpbmc6MCA1cHg7Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtmbG9hdDpsZWZ0fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW06aG92ZXJ7Ym94LXNoYWRvdzoxcHggMXB4ICM5NTk1OTV9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd257ZGlzcGxheTppbmxpbmUtYmxvY2s7dG9wOjEwcHg7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjEwcHggc29saWQgI2FkYWRhZDtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDowO2hlaWdodDowO2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjYWRhZGFkO2JvcmRlci1sZWZ0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjEwcHggc29saWQgdHJhbnNwYXJlbnR9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kaXNhYmxlZD5zcGFue2JhY2tncm91bmQtY29sb3I6I2VjZWVlZn0uZHJvcGRvd24tbGlzdHtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nLXRvcDo2cHg7d2lkdGg6LXdlYmtpdC1tYXgtY29udGVudDt3aWR0aDotbW96LW1heC1jb250ZW50O3dpZHRoOm1heC1jb250ZW50O2JvdHRvbTozMHB4O3BhZGRpbmctYm90dG9tOjVweDttYXJnaW4tYm90dG9tOjEwcHg7ei1pbmRleDo5OTk5O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6MCAxcHggNXB4ICM5NTk1OTV9LmRyb3Bkb3duLWxpc3QgdWx7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZTtvdmVyZmxvdzphdXRvO21hcmdpbjowfS5kcm9wZG93bi1saXN0IGxpe3BhZGRpbmc6NnB4IDEwcHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpsZWZ0fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTBweH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3ggaW5wdXR7Ym9yZGVyOjA7d2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAwIDI2cHh9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94IGlucHV0OmZvY3Vze291dGxpbmU6MH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XXtib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cytkaXY6YmVmb3JlLC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmhvdmVyK2RpdjpiZWZvcmV7Ym9yZGVyLWNvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmFjdGl2ZStkaXY6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246MHN9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0rZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctbGVmdDoyZW07dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjdXJzb3I6cG9pbnRlcjttYXJnaW46MDtjb2xvcjojMDAwfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdjpiZWZvcmV7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OicnO2NvbG9yOiMzMzdhYjc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjA7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDttYXJnaW4tdG9wOi05cHg7Ym9yZGVyOjJweCBzb2xpZCAjMzM3YWI3O3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246YWxsIC40cyBlYXNlfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdjphZnRlcntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0b3A6NTAlO2xlZnQ6NHB4O3dpZHRoOjhweDtoZWlnaHQ6M3B4O21hcmdpbi10b3A6LTRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOiNmZmY7Ym9yZGVyLXdpZHRoOjAgMCAzcHggM3B4Oy1vLWJvcmRlci1pbWFnZTpub25lO2JvcmRlci1pbWFnZTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZCtkaXY6YmVmb3Jle2JvcmRlci1jb2xvcjojY2NjfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmZvY3VzK2RpdjpiZWZvcmUgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6aG92ZXIrZGl2OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6Y2hlY2tlZCtkaXY6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2NjY30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdjphZnRlcntjb250ZW50OicnO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb246LjJzIGVhc2UtaW4gYm9yZGVyc2NhbGU7YW5pbWF0aW9uOi4ycyBlYXNlLWluIGJvcmRlcnNjYWxlO2JhY2tncm91bmQ6IzMzN2FiN31ALXdlYmtpdC1rZXlmcmFtZXMgYm9yZGVyc2NhbGV7NTAle2JveC1zaGFkb3c6MCAwIDAgMnB4ICMzMzdhYjd9fUBrZXlmcmFtZXMgYm9yZGVyc2NhbGV7NTAle2JveC1zaGFkb3c6MCAwIDAgMnB4ICMzMzdhYjd9fWBdLFxuICBwcm92aWRlcnM6IFtEUk9QRE9XTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBfZGF0YTogQXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4gPSBbXTtcbiAgc2VsZWN0ZWRJdGVtczogQXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4gPSBbXTtcbiAgaXNEcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgX3NldHRpbmdzOiBJRHJvcGRvd25TZXR0aW5ncztcbiAgX3BsYWNlaG9sZGVyID0gJ1NlbGVjdCc7XG4gIGZpbHRlcjogTGlzdEl0ZW1Ecm9wZG93biA9IG5ldyBMaXN0SXRlbURyb3Bkb3duKHRoaXMuZGF0YSk7XG5cbiAgZGVmYXVsdFNldHRpbmdzOiBJRHJvcGRvd25TZXR0aW5ncyA9IHtcbiAgICBzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxuICAgIGlkRmllbGQ6ICdpZCcsXG4gICAgdGV4dEZpZWxkOiAndGV4dCcsXG4gICAgcGFyZW50RmllbGQ6ICdwYXJlbnQnLFxuICAgIGVuYWJsZUNoZWNrQWxsOiB0cnVlLFxuICAgIHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcbiAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxuICAgIGFsbG93U2VhcmNoRmlsdGVyOiBmYWxzZSxcbiAgICBsaW1pdFNlbGVjdGlvbjogLTEsXG4gICAgY2xlYXJTZWFyY2hGaWx0ZXI6IHRydWUsXG4gICAgbWF4SGVpZ2h0OiAxOTcsXG4gICAgaXRlbXNTaG93TGltaXQ6IDk5OTk5OTk5OTk5OSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxuICAgIG5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dDogJ05vIGRhdGEgYXZhaWxhYmxlJyxcbiAgICBjbG9zZURyb3BEb3duT25TZWxlY3Rpb246IGZhbHNlLFxuICAgIHNob3dTZWxlY3RlZEl0ZW1zQXRUb3A6IGZhbHNlXG4gIH07XG5cbiAgQE91dHB1dCgnb25GaWx0ZXJDaGFuZ2UnKSBvbkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPExpc3RJdGVtRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ29uU2VsZWN0Jykgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbURyb3Bkb3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG4gIEBPdXRwdXQoJ29uRGVTZWxlY3QnKSBvbkRlU2VsZWN0OiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBAT3V0cHV0KCdvblNlbGVjdEFsbCcpIG9uU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBAT3V0cHV0KCdvbkRlU2VsZWN0QWxsJykgb25EZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICBASW5wdXQoKSBidXR0b25MaXN0Q29sdW1uU3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlciA9ICdTZWxlY3QnO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNldHRpbmdzKHZhbHVlOiBJRHJvcGRvd25TZXR0aW5ncykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdFNldHRpbmdzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRTZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkYXRhKHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zdCBfaXRlbXMgPSB2YWx1ZS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgLy8gICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAmJiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdICYmIGl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSkpIHtcbiAgICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG4gICAgICB0aGlzLl9kYXRhID0gdmFsdWUubWFwKFxuICAgICAgICAoaXRlbTogYW55KSA9PlxuICAgICAgICAgIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBuZXcgTGlzdEl0ZW1Ecm9wZG93bihpdGVtKVxuICAgICAgICAgICAgOiBuZXcgTGlzdEl0ZW1Ecm9wZG93bih7XG4gICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxuICAgICAgICAgICAgICB0ZXh0OiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0sXG4gICAgICAgICAgICAgIHBhcmVudDogaXRlbVt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF1cbiAgICAgICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG5cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBvYmoubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvYmoubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IG9ialswXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtcbiAgICAgICAgICAgICAgdHlwZW9mIGZpcnN0SXRlbSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IG5ldyBMaXN0SXRlbURyb3Bkb3duKGZpcnN0SXRlbSlcbiAgICAgICAgICAgICAgICA6IG5ldyBMaXN0SXRlbURyb3Bkb3duKHtcbiAgICAgICAgICAgICAgICAgIGlkOiBmaXJzdEl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBmaXJzdEl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSxcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLnBhcmVudEZpZWxkXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZS5ib2R5Lm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gb2JqLm1hcChcbiAgICAgICAgICAoaXRlbTogYW55KSA9PlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gbmV3IExpc3RJdGVtRHJvcGRvd24oaXRlbSlcbiAgICAgICAgICAgICAgOiBuZXcgTGlzdEl0ZW1Ecm9wZG93bih7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0sXG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaXRlbVt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IF9kYXRhLnNwbGljZSgwLCB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gX2RhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayhvYmopO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgLy8gc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAvLyB9XG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5idXR0b25MaXN0Q29sdW1uU3R5bGUgPSBcImJ0biBidG4tb3V0bGluZS1pbmZvXCI7XG4gIH1cblxuICBzaG93QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuX3NldHRpbmdzLmVuYWJsZUNoZWNrQWxsID0gdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPT09IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7IC8vICF0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24gJiYgdGhpcy5fc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgdGhpcy5fZGF0YS5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaG91bGQgYmUgZGlzYWJsZWQgaW4gc2luZ2xlIHNlbGVjdGlvbiBtb2RlXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXRlbVNob3dSZW1haW5pbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIHRoaXMuX3NldHRpbmdzLml0ZW1zU2hvd0xpbWl0O1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgcHVibGljIG9uVG91Y2hlZCgpIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKCkge1xuICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAvLyBjbGVhciBzZWFyY2ggdGV4dFxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5jbGVhclNlYXJjaEZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXIudGV4dCA9ICcnO1xuICAgIH1cbiAgfVxuICB0b2dnbGVEcm9wZG93bihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc0Ryb3Bkb3duT3BlbiA9ICF0aGlzLmlzRHJvcGRvd25PcGVuO1xuICB9XG5cbiAgdG9nZ2xlU2VsZWN0QWxsKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0FsbEl0ZW1zU2VsZWN0ZWQoKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5fZGF0YS5zbGljZSgpO1xuICAgICAgdGhpcy5vblNlbGVjdEFsbC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgIC8vIHRoaXMub25EZVNlbGVjdEFsbC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gIH1cblxuICBpc0FsbEl0ZW1zU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICB9XG5cblxuICBlbWl0dGVkVmFsdWUodmFsOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLm1hcChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW0udGV4dCkge1xuICAgICAgICAgIHNlbGVjdGVkLnB1c2goaXRlbS50ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKHRoaXMub2JqZWN0aWZ5KGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgaWYgKHZhbC5pZCA9PT0gdmFsLnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gdmFsLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0aWZ5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgb2JqZWN0aWZ5KHZhbDogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIG9ialt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSA9IHZhbC5pZDtcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSA9IHZhbC50ZXh0O1xuICAgIG9ialt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF0gPSB2YWwucGFyZW50O1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpc0xpbWl0U2VsZWN0aW9uUmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gIH1cbiAgb25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudCkge1xuICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UuZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgb25JdGVtQ2xpY2soJGV2ZW50OiBhbnksIGl0ZW06IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuaXNTZWxlY3RlZChpdGVtKTtcbiAgICBjb25zdCBhbGxvd0FkZCA9IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSB8fCAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPCB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaWYgKGFsbG93QWRkKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZWN0ZWQoaXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoaXRlbSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24gJiYgdGhpcy5fc2V0dGluZ3MuY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBhZGRTZWxlY3RlZChpdGVtOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcmVudEl0ZW0gPSB0aGlzLl9kYXRhLmZpbHRlcih4ID0+IHgudGV4dCA9PT0gaXRlbS5wYXJlbnQpO1xuICAgICAgdmFyIHBhcmVudEl0ZW1zZWxldGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcih4ID0+IHgudGV4dCA9PT0gaXRlbS5wYXJlbnQpO1xuICAgICAgaWYgKHBhcmVudEl0ZW0ubGVuZ3RoID4gMCAmJiBwYXJlbnRJdGVtc2VsZXRlZC5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChwYXJlbnRJdGVtWzBdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkSXRlbSA9IHRoaXMuX2RhdGEuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0udGV4dCk7XG4gICAgICB2YXIgY2hpbGRJdGVtc2VsZXRlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS50ZXh0KTtcbiAgICAgIGlmIChjaGlsZEl0ZW0ubGVuZ3RoID4gMCAmJiBjaGlsZEl0ZW1zZWxldGVkLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGNoaWxkSXRlbVswXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0ZWQoaXRlbVNlbDogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtU2VsLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS5wYXJlbnQpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS50ZXh0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZHNbaW5kZXhdO1xuICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoZWxlbWVudCkgIT09IC0xICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbGV0IGRlU2VsZWN0ZWRJdGVtcyA9IEFycmF5PExpc3RJdGVtRHJvcGRvd24+KCk7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gIGlmKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHRoaXMuX2RhdGFbaV0pID09PSAtMSlcbiAgICAvLyAge1xuICAgIC8vICAgZGVTZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5fZGF0YVtpXSk7XG4gICAgLy8gIH1cblxuICAgIC8vIH1cblxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB0aGlzLm9uRGVTZWxlY3QuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoY2xpY2tlZEl0ZW06IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChjbGlja2VkSXRlbS5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExpc3RJdGVtRHJvcGRvd24gfSBmcm9tICcuLi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICduZzJMaXN0RmlsdGVyJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBMaXN0SXRlbURyb3Bkb3duW10sIGZpbHRlcjogTGlzdEl0ZW1Ecm9wZG93bik6IExpc3RJdGVtRHJvcGRvd25bXSB7XHJcbiAgICAgICAgaWYgKCFpdGVtcyB8fCAhZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogTGlzdEl0ZW1Ecm9wZG93bikgPT4gdGhpcy5hcHBseUZpbHRlcihpdGVtLCBmaWx0ZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcihpdGVtOiBMaXN0SXRlbURyb3Bkb3duLCBmaWx0ZXI6IExpc3RJdGVtRHJvcGRvd24pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIShmaWx0ZXIudGV4dCAmJiBpdGVtLnRleHQgJiYgaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudGV4dC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIERpcmVjdGl2ZSwgQ29tcG9uZW50LCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neE1hZ2ljVGFibGVDb21wb25lbnR9IGZyb20gJy4vbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25EaXJlY3RpdmV9IGZyb20gJy4vbmd4LW1hZ2ljLXRhYmxlL25neC1kaXJlY3Rpb24tY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERvbUNoYW5nZURpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtbWFnaWMtdGFibGUvbmd4LW1hZ2ljLXRhYmxlLWNoYW5nZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNvcnRQaXBlIH0gZnJvbSAnLi9zb3J0L3NvcnQucGlwZSc7XHJcbmltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW51bWVyaWMtZmlsdGVyL25neC1udW1lcmljLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1zdHJpbmctZmlsdGVyL25neC1zdHJpbmctZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEVudW1GaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWJvb2xlYW4tZmlsdGVyL25neC1ib29sZWFuLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge05nYk1vZHVsZX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0RmlsdGVyUGlwZSB9IGZyb20gJy4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbi8vIGltcG9ydCB7IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5nYk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4TWFnaWNUYWJsZUNvbXBvbmVudCxcclxuICAgIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBTb3J0UGlwZSxcclxuICAgIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50LFxyXG4gICAgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neEVudW1GaWx0ZXJDb21wb25lbnQsXHJcbiAgICBEaXJlY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBEb21DaGFuZ2VEaXJlY3RpdmUsXHJcbiAgICBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCxcclxuICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuICAgIExpc3RGaWx0ZXJQaXBlXSxcclxuICBleHBvcnRzOiBbTmd4TWFnaWNUYWJsZUNvbXBvbmVudCxcclxuICAgIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50LFxyXG4gICAgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCxcclxuICAgIERpcmVjdGlvbkRpcmVjdGl2ZSxcclxuICAgIERvbUNoYW5nZURpcmVjdGl2ZSxcclxuICAgIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCxcclxuICAgIE5neEVudW1GaWx0ZXJDb21wb25lbnRdLFxyXG4gICBcclxuICBzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUEgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNUYWJsZU1vZHVsZSB7IH1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IHtcclxuLy8gICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIG5nTW9kdWxlOiBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50XHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBQTs7O3NCQURBO0lBSUMsQ0FBQTs7Ozs7O0FDREQsSUFBQTs7O29CQUhBO0lBTUMsQ0FBQTs7Ozs7O0FDSkQsSUFBQTt3QkFTdUIsSUFBMEI7UUFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7O3FCQWxCOUM7SUFxQkMsQ0FBQTs7Ozs7O0FDbEJELElBQUE7d0JBV3FCLElBQTBCO1FBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O3FCQXJCeEI7SUF1QkMsQ0FBQTs7Ozs7O0FDdkJEO0lBUUUsZ0NBQzhCLElBQUksRUFDRixRQUEwQjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFBO1FBQ0YsYUFB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

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