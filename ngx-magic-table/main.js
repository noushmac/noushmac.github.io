(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-magic-table/fesm5/ngx-magic-table.js":
/*!*******************************************************!*\
  !*** ./dist/ngx-magic-table/fesm5/ngx-magic-table.js ***!
  \*******************************************************/
/*! exports provided: NgxMagicTableComponent, NgxColumnTemplateComponent, NgxMagicTableModule, CellsInfo, ɵh, ɵe, ɵf, ɵg, ɵk, ɵl, ɵi, ɵj, ɵa, ɵc, ɵd, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMagicTableComponent", function() { return NgxMagicTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxColumnTemplateComponent", function() { return NgxColumnTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMagicTableModule", function() { return NgxMagicTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellsInfo", function() { return CellsInfo; });
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
        this.dropdownList = [];
        this.dropdownselectedItems = [];
        this.dropdownSettings = {};
        this._loadTable = Array();
        this._rows = Array();
        this._rowsFilter = Array();
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
        this.buttonListColumnStyle = 'btn btn-outline-info';
        this.buttonSaveTableStyle = 'btn btn-outline-info';
        this.autoSize = true;
        this.rowClassRenderer = function (row) { return ''; };
        this.MinWidth = 80;
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
        get: /**
         * @return {?}
         */
        function () {
            return this._loadTable;
        },
        set: /**
         * @param {?} loadTable
         * @return {?}
         */
        function (loadTable) {
            if (!loadTable) {
                this._loadTable = [];
            }
            else {
                this._loadTable = loadTable;
                this.onLoadTable();
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
        this.onLoadTable();
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
        var _loop_1 = function (index) {
            var /** @type {?} */ element_1 = this_1.templatesArray[index];
            var /** @type {?} */ childs = this_1.templatesArray
                .filter(function (t) { return t.parent === element_1.name; });
            if (childs.length < 1) {
                rowCount++;
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ index = 0; index < this.templatesArray.length; index++) {
            _loop_1(index);
        }
        var /** @type {?} */ cellWidth = clientWidth / rowCount;
        if (cellWidth < this.MinWidth) {
            cellWidth = this.MinWidth;
        }
        var _loop_2 = function (index) {
            var /** @type {?} */ element_2 = this_2.templatesArray[index];
            var /** @type {?} */ childs = this_2.templatesArray
                .filter(function (t) { return t.parent === element_2.name; });
            if (childs.length < 1) {
                element_2.cellWidth = cellWidth;
                this_2.templatesArray[index] = element_2;
            }
        };
        var this_2 = this;
        for (var /** @type {?} */ index = 0; index < this.templatesArray.length; index++) {
            _loop_2(index);
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
        console.log(this.lowerCells);
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
        if (index == this.lowerCells.length - 1) {
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
        var _loop_3 = function (i) {
            var /** @type {?} */ item = items[i];
            var /** @type {?} */ template = this_3.templatesArray
                .find(function (t) { return t.index === item.item_id; });
            var /** @type {?} */ index = this_3.templatesArray.indexOf(item);
            template.visible = true;
            this_3.templatesArray[index] = template;
        };
        var this_3 = this;
        for (var /** @type {?} */ i = 0; i < items.length; i++) {
            _loop_3(i);
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
        var _loop_4 = function (j) {
            var /** @type {?} */ item = items.filter(function (t) { return t.item_id === _this.templatesArray[j].index; });
            if (item.length <= 0) {
                this_4.templatesArray[j].visible = false;
                this_4.templatesArray[j] = this_4.templatesArray[j];
            }
        };
        var this_4 = this;
        for (var /** @type {?} */ j = 0; j < this.templatesArray.length; j++) {
            _loop_4(j);
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
            var /** @type {?} */ element_3 = this.templatesArray[i];
            this.listcellsInfo.push({
                index: element_3.index, name: element_3.name, cellWidth: element_3.cellWidth,
                parent: element_3.parent, sortable: element_3.sortable, draggble: element_3.draggable, visible: element_3.visible
            });
        }
        this.saveTable.emit(this.listcellsInfo);
    };
    /**
     * @return {?}
     */
    NgxMagicTableComponent.prototype.onLoadTable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        NgxColumnTemplateComponent.normalizeIndexes(this.templatesArray);
        this.templatesArray.forEach(function (i) {
            return i.changed.subscribe(function () { return _this.generateCells(); });
        });
        var _loop_5 = function (i) {
            var /** @type {?} */ element_4 = this_5.loadTable[i];
            var /** @type {?} */ template = this_5.templatesArray.filter(function (x) { return x.index === element_4.index; });
            var /** @type {?} */ index = this_5.templatesArray.indexOf(template[0]);
            template[0].cellWidth = element_4.cellWidth;
            template[0].sortable = element_4.sortable;
            template[0].draggable = element_4.draggble;
            template[0].visible = element_4.visible;
            this_5.templatesArray[index] = template[0];
        };
        var this_5 = this;
        // if (this.loadTable.length > 0) {
        for (var /** @type {?} */ i = 0; i < this.loadTable.length; i++) {
            _loop_5(i);
        }
        // this.generateCells();
        // }
        if (this.autoSize) {
            this.autoSizeCells(this.mainSize());
        }
        this.dropdownselectedItems = [];
        this.dropdownList = [];
        for (var /** @type {?} */ index = 0; index < this.templatesArray.length; index++) {
            var /** @type {?} */ element_5 = this.templatesArray[index];
            this.dropdownList.push({ item_id: element_5.index, item_text: element_5.title, parent: element_5.parent });
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
        this.generateCells();
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
            if (lastCell.cellWidth >= _this.MinWidth) {
                cell.cellWidth = _this.widthBefore + (WidthAdd);
                lastCell.cellWidth = widthLastCell + (WidthAdd);
                _this.tableWidth = tableWidthTemp + (WidthAdd);
            }
        });
        this.unsubscribeMouseUp = this.renderer.listen('document', 'mouseup', function (event) {
            event.preventDefault();
            if (lastCell.cellWidth < _this.MinWidth) {
                lastCell.cellWidth = _this.MinWidth;
            }
            lastCell.template.cellWidth = lastCell.cellWidth;
            if (cell.cellWidth < _this.MinWidth) {
                cell.cellWidth = _this.MinWidth;
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
                    template: "<div (domChange)=\"onMainDomChange($event)\" [ngClass]=\"[isRTL ? 'rtl' : 'ltr']\">\n  <div id=\"MainMagicTableId\" class=\"mainMagicTable\">\n    <div class=\"paddingDiv\" [style.width.px]=\"tableWidth\">\n      <table [ngClass]=\"tableClass\" class=\"rz-table\">\n        <thead class=\"ngxThead\" [ngClass]=\"theadClass\">\n          <tr *ngFor=\"let cellRow of cells\">\n            <th *ngFor=\"let cell of inverseArray(cellRow)\" [style.max-width.px]=\"cell.cellWidth\"  [style.min-width.px]=\"cell.cellWidth\" [style.width.px]=\"cell.cellWidth\"\n              [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [attr.visible]=\"cell.visible\" [name]=\"cell.name\"\n              [id]=\"uid+'-'+cell.name+'-head'\" [draggable]=\"cell.template.draggable\" (drop)=\"drop(cell)\" (dragover)=\"allowDrop($event)\"\n              (dragstart)=\"drag(cell)\" [attr.colspan]=\"cell.colSpan\" [attr.rowspan]=\"cell.rowSpan\"  data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"cell.title\">\n              <div [id]=\"cell.name+'resizable'\" (mousedown)=\"resizeHandle(cell,$event,'tbody1')\" class=\"rz-handle\">\n              </div>\n              <div class=\"th-title\" (click)=\"sortToggle(cell)\">\n                <ng-template [ngTemplateOutlet]=\"cell.template.header\" [ngTemplateOutletContext]=\"{cell: cell, direction: (cell.name === sort) ? sortDirection : undefined}\">\n                </ng-template>\n              </div>\n              <ng-container *ngIf=\"cell.template.filter\">\n                <div ngbDropdown (click)=\"$event.stopPropagation()\" class=\"dropdown float-right\">\n                  <button ngbDropdownToggle type=\"button\" [ngClass]=\"[cell.template.filters.length == 0 ? 'btn-default' : 'btn-warning']\"\n                    class=\"btn \" [id]=\"cell.name + '-' + uid  + '-filter'\">\n                    <i class=\"fa fa-filter\"></i>\n                  </button>\n                  <div ngbDropdownMenu [aria-labelledby]=\"cell.name + '-' + uid  + '-filter'\" class=\"dropdown-menu\"\n                    (click)=\"$event.stopPropagation()\">\n                    <div class=\"container\">\n                      <ng-template [ngTemplateOutlet]=\"cell.template.filter\" [ngTemplateOutletContext]=\"{cell: cell, rows: rows}\"></ng-template>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </th>\n          </tr>\n        </thead>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort} | paginate: {\n        itemsPerPage: pageSize,\n        currentPage: currentPage,\n        totalItems: customPaginate ? totalCount : rows.length,\n        id: uid }\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row == selectedRow ? selectedClass : rowClassRenderer(row)]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.min-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"  [style.max-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\" data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"row[cell.name]\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"!paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort}\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row == selectedRow ? selectedClass : rowClassRenderer(row)]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.min-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\" [style.max-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\" data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"row[cell.name]\" >\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"btn-group paging\" *ngIf=\"paginated && !pagination\">\n    <lib-ngx-multiselect-dropdown class=\"pagingInline\" [buttonListColumnStyle]=\"buttonSaveTableStyle\" (change)=\"onItemSelect($event)\"\n      [placeholder]=\"'Select Columns'\" [data]=\"dropdownList\" [(ngModel)]=\"dropdownselectedItems\" [settings]=\"dropdownSettings\"\n      (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n    </lib-ngx-multiselect-dropdown>\n    <div class=\"pagingInline\" style=\"margin-left: 2px; margin-right: 2px\">\n      <button (click)=\"onsaveTable()\" [ngClass]=\"buttonSaveTableStyle\" title=\"Save Table\">\n        <i class=\"fa fa-floppy-o\"></i>\n      </button>\n    </div>\n    <pagination-controls class=\"pagingInline\" (pageChange)=\"selectPage($event)\" previousLabel=\"\" nextLabel=\"\" [id]=\"uid\"></pagination-controls>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <div *ngIf=\"pageSizes.length\" class=\"dropdown pagingInline\">\n      <select class=\"btn btn-secondary btn-sm dropdown-toggle\" [value]='pageSize' (change)=\"changePerPage($event.target.value)\">\n        <option *ngFor=\"let p of pageSizes\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"paginated && pagination\">\n    <ng-container [ngTemplateOutlet]=\"pagination\">\n    </ng-container>\n  </div>\n\n</div>\n",
                    styles: ["table thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[draggable=true]{-khtml-user-drag:element;-webkit-user-drag:element}select.btn-sm{padding:.1rem;display:inline-flex}table{table-layout:fixed}table.rz-table{display:block;width:auto;table-layout:fixed;border-collapse:collapse}table.rz-table th{position:relative;min-width:25px}table.rz-table th .rz-handle{width:2px;height:100%;position:absolute;top:0;right:-2px;cursor:ew-resize!important;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px);z-index:99999999}table.rz-table th .rz-handle:hover{background:repeating-linear-gradient(45deg,#6c757d00,#6c757d 2px,#6c757d 2px,#6c757d00 4px)}.rtl table.rz-table th .rz-handle{right:auto;left:-2px}.rtl{direction:rtl!important}.ltr{direction:ltr!important}.mainMagicTable{overflow:auto}.paging{width:100%;padding-left:10px;padding-right:10px;padding-bottom:10px}.paddingDiv{padding:10px}.ngxThead{display:block;width:100%}.ngxTbody{max-height:-webkit-fill-available;display:block;overflow-y:auto;overflow-x:hidden}.ltr .ngxTbody{direction:rtl}.rtl .ngxTbody{direction:ltr}.ltr .ngxThead{direction:rtl}.rtl .ngxThead{direction:ltr}.table.rz-table td{overflow:hidden;text-overflow:ellipsis;white-space:nowrap!important;border:1px solid #dee2e6}.table.rz-table th{padding:.2rem;text-align:center}.table.rz-table td:last-child,.table.rz-table th:last-child{min-width:auto!important}.table.rz-table>tbody>tr:nth-of-type(odd){background-color:#e5ecf1}.table.rz-table>tbody>tr:nth-of-type(even){background-color:#f2f9fe}.savetable{position:absolute;top:5px}.ltr .savetable{right:10px}.rtl .savetable{left:10px}ul.ngx-pagination{margin:0}.rtl .paging{direction:rtl!important}.ltr .paging{direction:ltr!important}.pagingInline{display:inline-block}.th-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rtl .table.rz-table td,.rtl .th-title{direction:rtl!important}.ltr .table.rz-table td,.ltr .th-title{direction:ltr!important}"]
                },] },
    ];
    /** @nocollapse */
    NgxMagicTableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgxMagicTableComponent.propDecorators = {
        templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxColumnTemplateComponent,] }],
        pagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['pagination',] }],
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
        isRTL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowClassRenderer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tableClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        theadClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tbodyClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
            this.renderer.removeClass(this.el.nativeElement, 'ion-arrow-down-b');
            this.renderer.removeClass(this.el.nativeElement, 'ion-arrow-up-b');
            if (this._direction != null) {
                if (this._direction === OrderDirection.Descending) {
                    this.renderer.addClass(this.el.nativeElement, 'ion-arrow-up-b');
                }
                if (this._direction === OrderDirection.Ascending) {
                    this.renderer.addClass(this.el.nativeElement, 'ion-arrow-down-b');
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
var CellsInfo = /** @class */ (function () {
    function CellsInfo() {
    }
    return CellsInfo;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9QYWdpbmctaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL3NvcnQtaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2hlYWRlci1pdGVtLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL3NvcnQvc29ydC5waXBlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9udW1lcmljLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbnVtZXJpYy1maWx0ZXIvbmd4LW51bWVyaWMtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvc3RyaW5nLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2VudW0tZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9ib29sZWFuLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtYm9vbGVhbi1maWx0ZXIvbmd4LWJvb2xlYW4tZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS5tb2R1bGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2NlbGxzLWluZm8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luZ0lucHV0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5wdXQgaW1wbGVtZW50cyBJUGFnaW5nSW5wdXQge1xyXG4gICBwYWdlOiBudW1iZXI7XHJcbiAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvcnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0SW5wdXQgaW1wbGVtZW50cyBJU29ydElucHV0IHtcclxuICAgIHNvcnQ6IHN0cmluZztcclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVySXRlbSB7XHJcbiAgICBwdWJsaWMgV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBUaXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hpbGRzOiBIZWFkZXJJdGVtW107XHJcbiAgICBwdWJsaWMgU29ydGFibGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgVGVtcGxhdGU6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEhlYWRlckl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgICAgICB0aGlzLlRpdGxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5JbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5Tb3J0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5XaWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLlZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQ2hpbGRzID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuL2hlYWRlci1pdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDZWxsIHtcclxuICBwdWJsaWMgY2VsbFdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgY29sU3BhbjogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3dTcGFuOiBudW1iZXI7XHJcbiAgcHVibGljIHNvcnRhYmxlOiBhbnk7XHJcbiAgcHVibGljIHRlbXBsYXRlOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudDtcclxuICBwdWJsaWMgSGVhZGVySXRlbTogSGVhZGVySXRlbTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SGVhZGVyQ2VsbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY29sU3BhbiA9IDE7XHJcbiAgICB0aGlzLnJvd1NwYW4gPSAxO1xyXG4gICAgdGhpcy5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgSW5qZWN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblxyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmFtZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlICB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBAQXR0cmlidXRlKCduYW1lJykgcHVibGljIG5hbWUsXHJcbiAgICAgIEBJbmplY3QoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxyXG4gICkge1xyXG4gIH1cclxufSIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbixcclxuICBUZW1wbGF0ZVJlZiwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vLi4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY29sdW1uLXRlbXBsYXRlJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhcmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBzb3J0YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29sbGVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2VsbFdpZHRoOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW107XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOYW1lZFRlbXBsYXRlRGlyZWN0aXZlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOYW1lZFRlbXBsYXRlRGlyZWN0aXZlPjtcclxuXHJcbiAgcHVibGljIGhlYWRlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwdWJsaWMgYm9keTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwdWJsaWMgZmlsdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgIHRoaXMucGFyZW50ID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY2VsbFdpZHRoID0gMDtcclxuICAgIHRoaXMuc29ydGFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29sbGVjdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5vcm1hbGl6ZUluZGV4ZXModGVtcGxhdGVzOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudFtdKSB7XHJcbiAgICB0ZW1wbGF0ZXMuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4ge1xyXG4gICAgICBpZiAoZmlyc3QucGFyZW50IDwgc2Vjb25kLnBhcmVudCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LnBhcmVudCA+IHNlY29uZC5wYXJlbnQpIHsgcmV0dXJuIDE7IH1cclxuXHJcbiAgICAgIGlmIChmaXJzdC5pbmRleCA8IHNlY29uZC5pbmRleCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LmluZGV4ID4gc2Vjb25kLmluZGV4KSB7IHJldHVybiAxOyB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSkuZm9yRWFjaCgodCwgaW5kZXgpID0+IHtcclxuICAgICAgdC5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBjb25zdCBoID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2hlYWRlcicpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBoID8gaC50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGIgPSB0aGlzLnRlbXBsYXRlcy5maW5kKHQgPT4gdC5uYW1lID09PSAnYm9keScpO1xyXG4gICAgdGhpcy5ib2R5ID0gYiA/IGIudGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBmID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2ZpbHRlcicpO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmID8gZi50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5pbXBvcnQgeyBQYWdpbmdJbnB1dCB9IGZyb20gJy4uL21vZGVscy9QYWdpbmctaW5wdXQnO1xyXG5pbXBvcnQgeyBTb3J0SW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvc29ydC1pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL25neC1uYW1lZC10ZW1wbGF0ZS9uZ3gtbmFtZWQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3JkZXJEaXJlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvZW51bSc7XHJcblxyXG5pbXBvcnQgZ3VpZCBmcm9tICdhbmd1bGFyLXVpZCc7XHJcbmltcG9ydCB7IElQYWdpbmdJbnB1dCwgSVNvcnRJbnB1dCB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDZWxsc0luZm8gfSBmcm9tICcuLi9tb2RlbHMvY2VsbHMtaW5mbyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWFnaWMtdGFibGUnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAoZG9tQ2hhbmdlKT1cIm9uTWFpbkRvbUNoYW5nZSgkZXZlbnQpXCIgW25nQ2xhc3NdPVwiW2lzUlRMID8gJ3J0bCcgOiAnbHRyJ11cIj5cclxuICA8ZGl2IGlkPVwiTWFpbk1hZ2ljVGFibGVJZFwiIGNsYXNzPVwibWFpbk1hZ2ljVGFibGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nRGl2XCIgW3N0eWxlLndpZHRoLnB4XT1cInRhYmxlV2lkdGhcIj5cclxuICAgICAgPHRhYmxlIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIiBjbGFzcz1cInJ6LXRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzPVwibmd4VGhlYWRcIiBbbmdDbGFzc109XCJ0aGVhZENsYXNzXCI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNlbGxSb3cgb2YgY2VsbHNcIj5cclxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShjZWxsUm93KVwiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiAgW3N0eWxlLm1pbi13aWR0aC5weF09XCJjZWxsLmNlbGxXaWR0aFwiIFtzdHlsZS53aWR0aC5weF09XCJjZWxsLmNlbGxXaWR0aFwiXHJcbiAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydkaXNwbGF5JzogY2VsbC52aXNpYmxlID09PSAnZmFsc2UnID8gJ25vbmUnIDogJyd9XCIgW2F0dHIudmlzaWJsZV09XCJjZWxsLnZpc2libGVcIiBbbmFtZV09XCJjZWxsLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtpZF09XCJ1aWQrJy0nK2NlbGwubmFtZSsnLWhlYWQnXCIgW2RyYWdnYWJsZV09XCJjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZVwiIChkcm9wKT1cImRyb3AoY2VsbClcIiAoZHJhZ292ZXIpPVwiYWxsb3dEcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChkcmFnc3RhcnQpPVwiZHJhZyhjZWxsKVwiIFthdHRyLmNvbHNwYW5dPVwiY2VsbC5jb2xTcGFuXCIgW2F0dHIucm93c3Bhbl09XCJjZWxsLnJvd1NwYW5cIiAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiBbYXR0ci50aXRsZV09XCJjZWxsLnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiY2VsbC5uYW1lKydyZXNpemFibGUnXCIgKG1vdXNlZG93bik9XCJyZXNpemVIYW5kbGUoY2VsbCwkZXZlbnQsJ3Rib2R5MScpXCIgY2xhc3M9XCJyei1oYW5kbGVcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGgtdGl0bGVcIiAoY2xpY2spPVwic29ydFRvZ2dsZShjZWxsKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuaGVhZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjZWxsOiBjZWxsLCBkaXJlY3Rpb246IChjZWxsLm5hbWUgPT09IHNvcnQpID8gc29ydERpcmVjdGlvbiA6IHVuZGVmaW5lZH1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNlbGwudGVtcGxhdGUuZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cImRyb3Bkb3duIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbmdiRHJvcGRvd25Ub2dnbGUgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIltjZWxsLnRlbXBsYXRlLmZpbHRlcnMubGVuZ3RoID09IDAgPyAnYnRuLWRlZmF1bHQnIDogJ2J0bi13YXJuaW5nJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIFwiIFtpZF09XCJjZWxsLm5hbWUgKyAnLScgKyB1aWQgICsgJy1maWx0ZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWx0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBbYXJpYS1sYWJlbGxlZGJ5XT1cImNlbGwubmFtZSArICctJyArIHVpZCAgKyAnLWZpbHRlcidcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5maWx0ZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NlbGw6IGNlbGwsIHJvd3M6IHJvd3N9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwicGFnaW5hdGVkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93cyB8IHNvcnQ6e2ZpZWxkOiBzb3J0LCBkaXJlY3Rpb246IHNvcnREaXJlY3Rpb24sIGFjdGl2ZTogIWN1c3RvbVNvcnR9IHwgcGFnaW5hdGU6IHtcclxuICAgICAgICBpdGVtc1BlclBhZ2U6IHBhZ2VTaXplLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICB0b3RhbEl0ZW1zOiBjdXN0b21QYWdpbmF0ZSA/IHRvdGFsQ291bnQgOiByb3dzLmxlbmd0aCxcclxuICAgICAgICBpZDogdWlkIH1cIj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpIG9mIEFycihnZXRMY20ocm93KSkuZmlsbCgxKTsgbGV0IGluID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIiBbbmdDbGFzc109XCJbcm93ID09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHJvd0NsYXNzUmVuZGVyZXIocm93KV1cIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShsb3dlckNlbGxzKTsgbGV0IGxvd2VySW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiIFtzdHlsZS5taW4td2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiICBbc3R5bGUubWF4LXdpZHRoLnB4XT1cInJlc2l6ZUNlbGwoY2VsbC5jZWxsV2lkdGgsbG93ZXJJbmRleClcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiICpuZ0lmPVwiKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAlIGdldExjbShyb3cpID09PSAwXCJcclxuICAgICAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJnZXRMY20ocm93KSAvIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gIT09ICcnID8gTWF0aC5tYXgocm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoLCAxKSA6IDEpXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiBbYXR0ci50aXRsZV09XCJyb3dbY2VsbC5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5ib2R5XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IHJvdywgY2VsbDogY2VsbCwgaW5kZXg6ICgoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgLyBnZXRMY20ocm93KX1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPHRib2R5IGlkPVwidGJvZHkxXCIgKGRvbUNoYW5nZSk9XCJvbkRvbUNoYW5nZSgkZXZlbnQpXCIgY2xhc3M9XCJuZ3hUYm9keVwiIFtuZ0NsYXNzXT1cInRib2R5Q2xhc3NcIiAqbmdJZj1cIiFwYWdpbmF0ZWRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzIHwgc29ydDp7ZmllbGQ6IHNvcnQsIGRpcmVjdGlvbjogc29ydERpcmVjdGlvbiwgYWN0aXZlOiAhY3VzdG9tU29ydH1cIj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpIG9mIEFycihnZXRMY20ocm93KSkuZmlsbCgxKTsgbGV0IGluID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIiBbbmdDbGFzc109XCJbcm93ID09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHJvd0NsYXNzUmVuZGVyZXIocm93KV1cIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShsb3dlckNlbGxzKTsgbGV0IGxvd2VySW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiIFtzdHlsZS5taW4td2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCIgKm5nSWY9XCIoKGluKSAqIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnID8gMSA6IHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCkpICUgZ2V0TGNtKHJvdykgPT09IDBcIlxyXG4gICAgICAgICAgICAgICAgICBbYXR0ci5yb3dzcGFuXT1cImdldExjbShyb3cpIC8gKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiAhPT0gJycgPyBNYXRoLm1heChyb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgsIDEpIDogMSlcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIFthdHRyLnRpdGxlXT1cInJvd1tjZWxsLm5hbWVdXCIgPlxyXG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5ib2R5XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IHJvdywgY2VsbDogY2VsbCwgaW5kZXg6ICgoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgLyBnZXRMY20ocm93KX1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHBhZ2luZ1wiICpuZ0lmPVwicGFnaW5hdGVkICYmICFwYWdpbmF0aW9uXCI+XHJcbiAgICA8bGliLW5neC1tdWx0aXNlbGVjdC1kcm9wZG93biBjbGFzcz1cInBhZ2luZ0lubGluZVwiIFtidXR0b25MaXN0Q29sdW1uU3R5bGVdPVwiYnV0dG9uU2F2ZVRhYmxlU3R5bGVcIiAoY2hhbmdlKT1cIm9uSXRlbVNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cIidTZWxlY3QgQ29sdW1ucydcIiBbZGF0YV09XCJkcm9wZG93bkxpc3RcIiBbKG5nTW9kZWwpXT1cImRyb3Bkb3duc2VsZWN0ZWRJdGVtc1wiIFtzZXR0aW5nc109XCJkcm9wZG93blNldHRpbmdzXCJcclxuICAgICAgKG9uU2VsZWN0KT1cIm9uSXRlbVNlbGVjdCgkZXZlbnQpXCIgKG9uRGVTZWxlY3QpPVwib25JdGVtRGVTZWxlY3QoJGV2ZW50KVwiIChvblNlbGVjdEFsbCk9XCJvblNlbGVjdEFsbCgkZXZlbnQpXCI+XHJcbiAgICA8L2xpYi1uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5nSW5saW5lXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMnB4OyBtYXJnaW4tcmlnaHQ6IDJweFwiPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJvbnNhdmVUYWJsZSgpXCIgW25nQ2xhc3NdPVwiYnV0dG9uU2F2ZVRhYmxlU3R5bGVcIiB0aXRsZT1cIlNhdmUgVGFibGVcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZsb3BweS1vXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHBhZ2luYXRpb24tY29udHJvbHMgY2xhc3M9XCJwYWdpbmdJbmxpbmVcIiAocGFnZUNoYW5nZSk9XCJzZWxlY3RQYWdlKCRldmVudClcIiBwcmV2aW91c0xhYmVsPVwiXCIgbmV4dExhYmVsPVwiXCIgW2lkXT1cInVpZFwiPjwvcGFnaW5hdGlvbi1jb250cm9scz5cclxuICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgPGRpdiAqbmdJZj1cInBhZ2VTaXplcy5sZW5ndGhcIiBjbGFzcz1cImRyb3Bkb3duIHBhZ2luZ0lubGluZVwiPlxyXG4gICAgICA8c2VsZWN0IGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFt2YWx1ZV09J3BhZ2VTaXplJyAoY2hhbmdlKT1cImNoYW5nZVBlclBhZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VTaXplc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cInBhZ2luYXRlZCAmJiBwYWdpbmF0aW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhZ2luYXRpb25cIj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYHRhYmxlIHRoZWFkIHRoey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1bZHJhZ2dhYmxlPXRydWVdey1raHRtbC11c2VyLWRyYWc6ZWxlbWVudDstd2Via2l0LXVzZXItZHJhZzplbGVtZW50fXNlbGVjdC5idG4tc217cGFkZGluZzouMXJlbTtkaXNwbGF5OmlubGluZS1mbGV4fXRhYmxle3RhYmxlLWxheW91dDpmaXhlZH10YWJsZS5yei10YWJsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOmF1dG87dGFibGUtbGF5b3V0OmZpeGVkO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX10YWJsZS5yei10YWJsZSB0aHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MjVweH10YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxle3dpZHRoOjJweDtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDotMnB4O2N1cnNvcjpldy1yZXNpemUhaW1wb3J0YW50O2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCAycHgscmdiYSgwLDAsMCwuMTUpIDJweCxyZ2JhKDAsMCwwLC4xNSkgNHB4KTt6LWluZGV4Ojk5OTk5OTk5fXRhYmxlLnJ6LXRhYmxlIHRoIC5yei1oYW5kbGU6aG92ZXJ7YmFja2dyb3VuZDpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM2Yzc1N2QwMCwjNmM3NTdkIDJweCwjNmM3NTdkIDJweCwjNmM3NTdkMDAgNHB4KX0ucnRsIHRhYmxlLnJ6LXRhYmxlIHRoIC5yei1oYW5kbGV7cmlnaHQ6YXV0bztsZWZ0Oi0ycHh9LnJ0bHtkaXJlY3Rpb246cnRsIWltcG9ydGFudH0ubHRye2RpcmVjdGlvbjpsdHIhaW1wb3J0YW50fS5tYWluTWFnaWNUYWJsZXtvdmVyZmxvdzphdXRvfS5wYWdpbmd7d2lkdGg6MTAwJTtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1ib3R0b206MTBweH0ucGFkZGluZ0RpdntwYWRkaW5nOjEwcHh9Lm5neFRoZWFke2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0ubmd4VGJvZHl7bWF4LWhlaWdodDotd2Via2l0LWZpbGwtYXZhaWxhYmxlO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVufS5sdHIgLm5neFRib2R5e2RpcmVjdGlvbjpydGx9LnJ0bCAubmd4VGJvZHl7ZGlyZWN0aW9uOmx0cn0ubHRyIC5uZ3hUaGVhZHtkaXJlY3Rpb246cnRsfS5ydGwgLm5neFRoZWFke2RpcmVjdGlvbjpsdHJ9LnRhYmxlLnJ6LXRhYmxlIHRke292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnQ7Ym9yZGVyOjFweCBzb2xpZCAjZGVlMmU2fS50YWJsZS5yei10YWJsZSB0aHtwYWRkaW5nOi4ycmVtO3RleHQtYWxpZ246Y2VudGVyfS50YWJsZS5yei10YWJsZSB0ZDpsYXN0LWNoaWxkLC50YWJsZS5yei10YWJsZSB0aDpsYXN0LWNoaWxke21pbi13aWR0aDphdXRvIWltcG9ydGFudH0udGFibGUucnotdGFibGU+dGJvZHk+dHI6bnRoLW9mLXR5cGUob2RkKXtiYWNrZ3JvdW5kLWNvbG9yOiNlNWVjZjF9LnRhYmxlLnJ6LXRhYmxlPnRib2R5PnRyOm50aC1vZi10eXBlKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YyZjlmZX0uc2F2ZXRhYmxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHh9Lmx0ciAuc2F2ZXRhYmxle3JpZ2h0OjEwcHh9LnJ0bCAuc2F2ZXRhYmxle2xlZnQ6MTBweH11bC5uZ3gtcGFnaW5hdGlvbnttYXJnaW46MH0ucnRsIC5wYWdpbmd7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9Lmx0ciAucGFnaW5ne2RpcmVjdGlvbjpsdHIhaW1wb3J0YW50fS5wYWdpbmdJbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRoLXRpdGxle3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30ucnRsIC50YWJsZS5yei10YWJsZSB0ZCwucnRsIC50aC10aXRsZXtkaXJlY3Rpb246cnRsIWltcG9ydGFudH0ubHRyIC50YWJsZS5yei10YWJsZSB0ZCwubHRyIC50aC10aXRsZXtkaXJlY3Rpb246bHRyIWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNUYWJsZUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQpXHJcbiAgc2V0IHRlbXBsYXRlcyh2YWx1ZTogUXVlcnlMaXN0PE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50Pikge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXNBcnJheSA9IHZhbHVlLnRvQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ3BhZ2luYXRpb24nKVxyXG4gIHBhZ2luYXRpb246IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUgPSBudWxsO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZU1vdXNlVXAgPSBudWxsO1xyXG4gICAgdGhpcy50YWJsZVdpZHRoID0gMjAwO1xyXG4gICAgdGhpcy5tYWluV2lkdGggPSAyMDA7XHJcbiAgICB0aGlzLmlzUlRMID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjcm9sbFdpZHRoID0gMDtcclxuICAgIHRoaXMubGlzdGNlbGxzSW5mbyA9IG5ldyBBcnJheTxDZWxsc0luZm8+KCk7XHJcbiAgICB0aGlzLmJ1dHRvbkxpc3RDb2x1bW5TdHlsZSA9ICdidG4gYnRuLW91dGxpbmUtaW5mbyc7XHJcbiAgICB0aGlzLmJ1dHRvblNhdmVUYWJsZVN0eWxlID0gJ2J0biBidG4tb3V0bGluZS1pbmZvJztcclxuICAgIHRoaXMuYXV0b1NpemUgPSB0cnVlO1xyXG4gICAgdGhpcy5yb3dDbGFzc1JlbmRlcmVyID0gKHJvdykgPT4gJyc7XHJcbiAgICB0aGlzLk1pbldpZHRoID0gODA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByb3dzKHJvd3M6IEFycmF5PFQ+KSB7XHJcbiAgICBpZiAoIXJvd3MpIHtcclxuICAgICAgdGhpcy5fcm93cyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcm93cyA9IHJvd3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCByb3dzKCk6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yb3dzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBhdXRvU2l6ZTogQm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgYnV0dG9uU2F2ZVRhYmxlU3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25MaXN0Q29sdW1uU3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZ2luYXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3VzdG9tU29ydDogQm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBjdXN0b21QYWdpbmF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdG90YWxDb3VudDogTnVtYmVyID0gMDtcclxuICBASW5wdXQoKVxyXG4gIHBhZ2VTaXplOiBOdW1iZXIgPSAxMDtcclxuICBASW5wdXQoKVxyXG4gIGN1cnJlbnRQYWdlOiBOdW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFnZVNpemVzOiBudW1iZXJbXSA9IFsxMCwgMjAsIDUwLCAxMDBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNvcnQ6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpXHJcbiAgc29ydERpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGlkZGVuOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZENsYXNzOiBTdHJpbmcgPSAndGFibGUtc2Vjb25kYXJ5JztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2luZ0lucHV0PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElTb3J0SW5wdXQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElQYWdpbmdJbnB1dD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgY29sdW1uc0FycmFuZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSBzYXZlVGFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PENlbGxzSW5mbz4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxvYWRUYWJsZShsb2FkVGFibGU6IEFycmF5PENlbGxzSW5mbz4pIHtcclxuICAgIGlmICghbG9hZFRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRUYWJsZSA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9hZFRhYmxlID0gbG9hZFRhYmxlO1xyXG4gICAgICB0aGlzLm9uTG9hZFRhYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbG9hZFRhYmxlKCk6IEFycmF5PENlbGxzSW5mbz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRUYWJsZTtcclxuICB9XHJcblxyXG5cclxuICBASW5wdXQoKVxyXG4gIGlzUlRMOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcm93Q2xhc3NSZW5kZXJlcjogKGRhdGE6IFQpID0+IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRhYmxlQ2xhc3M6IFN0cmluZyA9ICd0YWJsZSc7XHJcbiAgQElucHV0KClcclxuICB0aGVhZENsYXNzOiBTdHJpbmcgPSAndGhlYWQtbGlnaHQnO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGJvZHlDbGFzczogU3RyaW5nID0gJyc7XHJcblxyXG4gIGRyb3Bkb3duTGlzdCA9IFtdO1xyXG4gIGRyb3Bkb3duc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gIGRyb3Bkb3duU2V0dGluZ3MgPSB7fTtcclxuICBwdWJsaWMgbGlzdGNlbGxzSW5mbzogQXJyYXk8Q2VsbHNJbmZvPjtcclxuICBwdWJsaWMgc2Nyb2xsV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgdGFibGVXaWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyBtYWluV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIF9sb2FkVGFibGUgPSBBcnJheTxDZWxsc0luZm8+KCk7XHJcbiAgcHVibGljIF9yb3dzID0gQXJyYXk8VD4oKTtcclxuICBwdWJsaWMgX3Jvd3NGaWx0ZXIgPSBBcnJheTxUPigpO1xyXG4gIHB1YmxpYyBNYXRoID0gTWF0aDtcclxuICBwdWJsaWMgQXJyID0gQXJyYXk7XHJcbiAgcHVibGljIHRlbXBsYXRlc0FycmF5OiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudFtdO1xyXG4gIHB1YmxpYyBjZWxsczogQXJyYXk8QXJyYXk8SGVhZGVyQ2VsbD4+ID0gbmV3IEFycmF5PEFycmF5PEhlYWRlckNlbGw+PigpO1xyXG4gIHB1YmxpYyBoZWFkOiBBcnJheTxIZWFkZXJJdGVtPiA9IG5ldyBBcnJheTxIZWFkZXJJdGVtPigpO1xyXG4gIHB1YmxpYyBsb3dlckNlbGxzOiBBcnJheTxIZWFkZXJDZWxsPiA9IG5ldyBBcnJheTxIZWFkZXJDZWxsPigpO1xyXG4gIHB1YmxpYyBkZXB0aCA9IDA7XHJcbiAgcHVibGljIHVpZCA9IGd1aWQoKTtcclxuICBwdWJsaWMgc2VsZWN0ZWRSb3c6IFQ7XHJcbiAgcHVibGljIGRyYWdnaW5nQ2VsbDogSGVhZGVyQ2VsbDtcclxuICBwdWJsaWMgc29ydElucHV0OiBTb3J0SW5wdXQgPSBuZXcgU29ydElucHV0KCk7XHJcbiAgcHVibGljIHBhZ2luZ0lucHV0OiBQYWdpbmdJbnB1dCA9IG5ldyBQYWdpbmdJbnB1dCgpO1xyXG5cclxuICBwaXhjZWxYQmVmb3JlOiBudW1iZXI7XHJcbiAgd2lkdGhCZWZvcmU6IG51bWJlcjtcclxuICB3aWR0aEFmdGVyOiBudW1iZXI7XHJcbiAgcmVzaXplRWxlbWVudDogRWxlbWVudDtcclxuICB1bnN1YnNjcmliZU1vdXNlTW92ZTogKCkgPT4gdm9pZDtcclxuICB1bnN1YnNjcmliZU1vdXNlVXA6ICgpID0+IHZvaWQ7XHJcbiAgcGl4Y2VsWEFmdGVyOiBudW1iZXI7XHJcbiAgTWluV2lkdGg6IG51bWJlcjtcclxuXHJcblxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLm9uTG9hZFRhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGNtKHJvdzogYW55KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGxjbSA9IHRoaXMubGNtT2ZMaXN0KFxyXG4gICAgICB0aGlzLmxvd2VyQ2VsbHMubWFwKGkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnXHJcbiAgICAgICAgICA/IDFcclxuICAgICAgICAgIDogTWF0aC5tYXgocm93W2kudGVtcGxhdGUuY29sbGVjdGlvbi50b1N0cmluZygpXS5sZW5ndGgsIDEpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIHJldHVybiBsY207XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2NkKGEsIGIpOiBudW1iZXIge1xyXG4gICAgaWYgKGIgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGE7IC8vIHNvIHRoYXQgdGhlIHJlY3Vyc2lvbiBkb2VzIG5vdCBnbyBvbiBmb3JldmVyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nY2QoYiwgYSAlIGIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGxjbU9mTGlzdChhcnIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZCA9IHRoaXM7XHJcbiAgICBjb25zdCB0ID0gYXJyLnJlZHVjZSgoYSwgYikgPT4gZC5sY20oYSwgYikpO1xyXG4gICAgcmV0dXJuIHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGNtKGEsIGIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhICogYikgLyB0aGlzLmdjZChhLCBiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhbGxvd0Ryb3AoeDogYW55KSB7XHJcbiAgICB4LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJvcCh4OiBIZWFkZXJDZWxsKSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZ0NlbGwgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZ0NlbGwudGVtcGxhdGUucGFyZW50ICE9PSB4LnRlbXBsYXRlLnBhcmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG1wID0geC50ZW1wbGF0ZS5pbmRleDtcclxuICAgIHgudGVtcGxhdGUuaW5kZXggPSB0aGlzLmRyYWdnaW5nQ2VsbC50ZW1wbGF0ZS5pbmRleDtcclxuICAgIHRoaXMuZHJhZ2dpbmdDZWxsLnRlbXBsYXRlLmluZGV4ID0gdG1wO1xyXG4gICAgdGhpcy5kcmFnZ2luZ0NlbGwgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgdGhpcy5jb2x1bW5zQXJyYW5nZUNoYW5nZS5lbWl0KFxyXG4gICAgICB0aGlzLnRlbXBsYXRlc0FycmF5Lm1hcCh0ID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogdC5uYW1lLFxyXG4gICAgICAgICAgcGFyZW50OiB0LnBhcmVudCxcclxuICAgICAgICAgIGluZGV4OiB0LmluZGV4XHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhZyh4OiBIZWFkZXJDZWxsKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nQ2VsbCA9IHg7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUNlbGxzKCkge1xyXG5cclxuICAgIHRoaXMuaGVhZCA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XHJcbiAgICB0aGlzLnRhYmxlV2lkdGggPSB0aGlzLmhlYWQubWFwKGkgPT4gK2kuV2lkdGgpXHJcbiAgICAgIC5yZWR1Y2U8bnVtYmVyPigoc3VtLCBjdXJyZW50KSA9PiBzdW0gKyBjdXJyZW50LCAwKTtcclxuICAgIHRoaXMuZGVwdGggPSBNYXRoLm1heChcclxuICAgICAgLi4udGhpcy5oZWFkLm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZXB0aChpdGVtKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jZWxscyA9IFtdO1xyXG4gICAgdGhpcy5sb3dlckNlbGxzID0gW107XHJcbiAgICB0aGlzLmNyZWF0ZUhlYWRlckNlbGxzKHRoaXMuaGVhZCwgMCwgdGhpcy5kZXB0aCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbWFpblNpemUoKTogbnVtYmVyIHtcclxuICAgIGxldCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNYWluTWFnaWNUYWJsZUlkJyk7XHJcbiAgICByZXR1cm4gaHRtbEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYXV0b1NpemVDZWxscyhjbGllbnRXaWR0aDogbnVtYmVyKSB7XHJcbiAgICBsZXQgcm93Q291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XTtcclxuICAgICAgbGV0IGNoaWxkcyA9IHRoaXMudGVtcGxhdGVzQXJyYXlcclxuICAgICAgICAuZmlsdGVyKHQgPT4gdC5wYXJlbnQgPT09IGVsZW1lbnQubmFtZSk7XHJcbiAgICAgIGlmIChjaGlsZHMubGVuZ3RoIDwgMSkge1xyXG5cclxuICAgICAgICByb3dDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNlbGxXaWR0aCA9IGNsaWVudFdpZHRoIC8gcm93Q291bnQ7XHJcbiAgICBpZiAoY2VsbFdpZHRoIDwgdGhpcy5NaW5XaWR0aCkge1xyXG4gICAgICBjZWxsV2lkdGggPSB0aGlzLk1pbldpZHRoO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XTtcclxuICAgICAgbGV0IGNoaWxkcyA9IHRoaXMudGVtcGxhdGVzQXJyYXlcclxuICAgICAgICAuZmlsdGVyKHQgPT4gdC5wYXJlbnQgPT09IGVsZW1lbnQubmFtZSk7XHJcbiAgICAgIGlmIChjaGlsZHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2VsbFdpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gZWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUhlYWRlcnMoaGVhZGVyTmFtZTogU3RyaW5nID0gJycpOiBBcnJheTxIZWFkZXJJdGVtPiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8SGVhZGVySXRlbT4oKTtcclxuICAgIHRoaXMudGVtcGxhdGVzQXJyYXlcclxuICAgICAgLmZpbHRlcih0ID0+IHQucGFyZW50ID09PSBoZWFkZXJOYW1lKVxyXG4gICAgICAuZmlsdGVyKHQgPT4gdC52aXNpYmxlID09PSB0cnVlKVxyXG4gICAgICAuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4ge1xyXG4gICAgICAgIGlmIChmaXJzdC5pbmRleCA+IHNlY29uZC5pbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlyc3QuaW5kZXggPCBzZWNvbmQuaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSlcclxuICAgICAgLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgbGV0IGl0ZW06IEhlYWRlckl0ZW07XHJcbiAgICAgICAgaXRlbSA9IG5ldyBIZWFkZXJJdGVtKCk7XHJcbiAgICAgICAgaXRlbS5UaXRsZSA9IHQudGl0bGU7XHJcbiAgICAgICAgaXRlbS5JbmRleCA9ICt0LmluZGV4O1xyXG4gICAgICAgIGl0ZW0uU29ydGFibGUgPSB0LnNvcnRhYmxlO1xyXG4gICAgICAgIGl0ZW0uVGVtcGxhdGUgPSB0O1xyXG4gICAgICAgIGl0ZW0uVmlzaWJsZSA9IHQudmlzaWJsZTtcclxuICAgICAgICBpdGVtLkNoaWxkcyA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKHQubmFtZSk7XHJcbiAgICAgICAgaXRlbS5XaWR0aCA9IGl0ZW0uQ2hpbGRzLmxlbmd0aCA9PT0gMCAmJiBpdGVtLlZpc2libGUgPT09IHRydWUgPyArdC5jZWxsV2lkdGggOiBpdGVtLkNoaWxkcy5tYXAoaSA9PiAraS5XaWR0aClcclxuICAgICAgICAgIC5yZWR1Y2U8bnVtYmVyPigoc3VtLCBjdXJyZW50KSA9PiBzdW0gKyBjdXJyZW50LCAwKTtcclxuICAgICAgICBpdGVtLk5hbWUgPSB0Lm5hbWU7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93bnNlbGVjdGVkSXRlbXMucHVzaCh7IGl0ZW1faWQ6IGl0ZW0uSW5kZXgsIGl0ZW1fdGV4dDogaXRlbS5OYW1lLCBwYXJlbnQ6IGhlYWRlck5hbWUgfSk7XHJcblxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlSGVhZGVyQ2VsbHMoXHJcbiAgICBpdGVtczogSGVhZGVySXRlbVtdLFxyXG4gICAgbGV2ZWw6IG51bWJlcixcclxuICAgIGRlcHRoOiBudW1iZXJcclxuICApIHtcclxuICAgIGlmICh0aGlzLmNlbGxzLmxlbmd0aCA8PSBsZXZlbCkge1xyXG4gICAgICB0aGlzLmNlbGxzLnB1c2gobmV3IEFycmF5PEhlYWRlckNlbGw+KCkpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm93ID0gdGhpcy5jZWxsc1tsZXZlbF07XHJcbiAgICBpdGVtcy5zb3J0KChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdC5JbmRleC52YWx1ZU9mKCkgLSBzZWNvbmQuSW5kZXgudmFsdWVPZigpKVxyXG4gICAgICAubWFwKGggPT4ge1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgSGVhZGVyQ2VsbCgpO1xyXG4gICAgICAgIGMubmFtZSA9IGguTmFtZTtcclxuICAgICAgICBjLmluZGV4ID0gaC5JbmRleDtcclxuICAgICAgICBjLnRpdGxlID0gaC5UaXRsZTtcclxuICAgICAgICBjLnZpc2libGUgPSBoLlZpc2libGU7XHJcbiAgICAgICAgYy5jZWxsV2lkdGggPSBoLldpZHRoO1xyXG4gICAgICAgIGMuc29ydGFibGUgPSBoLlNvcnRhYmxlO1xyXG4gICAgICAgIGMudGVtcGxhdGUgPSBoLlRlbXBsYXRlO1xyXG4gICAgICAgIGMuSGVhZGVySXRlbSA9IGg7XHJcbiAgICAgICAgYy5jb2xTcGFuID0gdGhpcy5jb3VudEhlYWRlcnMoaCk7XHJcbiAgICAgICAgYy5yb3dTcGFuID0gaC5DaGlsZHMubGVuZ3RoID4gMCA/IDEgOiBkZXB0aCAtIGxldmVsO1xyXG4gICAgICAgIHJvdy5wdXNoKGMpO1xyXG4gICAgICAgIGlmIChoLkNoaWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlckNlbGxzKGguQ2hpbGRzLCBsZXZlbCArIDEsIGRlcHRoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGguVmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvd2VyQ2VsbHMucHVzaChjKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNvdW50SGVhZGVycyhpdGVtOiBIZWFkZXJJdGVtKTogbnVtYmVyIHtcclxuICAgIGlmIChpdGVtLkNoaWxkcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaGVhZGVyQ291bnQgPSBpdGVtLkNoaWxkcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50SGVhZGVycyhjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaGVhZGVyQ291bnQucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBEZXB0aChpdGVtOiBIZWFkZXJJdGVtKTogbnVtYmVyIHtcclxuICAgIGlmIChpdGVtLkNoaWxkcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZGVwdGggPSBNYXRoLm1heChcclxuICAgICAgICAuLi5pdGVtLkNoaWxkcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRGVwdGgoY2hpbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBkZXB0aCArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RSb3cocm93OiBUKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3cpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5sb3dlckNlbGxzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VQZXJQYWdlKHBhZ2VTaXplOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnBhZ2VTaXplID09PSBwYWdlU2l6ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tUGFnaW5hdGUpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luZ0lucHV0LnBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlIGFzIG51bWJlcjtcclxuICAgIHRoaXMucGFnaW5nSW5wdXQucGFnZVNpemUgPSBwYWdlU2l6ZTtcclxuICAgIHRoaXMucGFnZVNpemVDaGFuZ2UuZW1pdChcclxuICAgICAgdGhpcy5wYWdpbmdJbnB1dFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHBhZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmN1c3RvbVBhZ2luYXRlKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luZ0lucHV0LnBhZ2UgPSBwYWdlO1xyXG4gICAgdGhpcy5wYWdpbmdJbnB1dC5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemUgYXMgbnVtYmVyO1xyXG5cclxuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KFxyXG4gICAgICB0aGlzLnBhZ2luZ0lucHV0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNvcnRUb2dnbGUoY2VsbDogSGVhZGVyQ2VsbCkge1xyXG4gICAgaWYgKGNlbGwuc29ydGFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3RGlyZWN0aW9uOiBPcmRlckRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiAodGhpcy5zb3J0ID09PSBjZWxsLm5hbWUpIHtcclxuICAgICAgbmV3RGlyZWN0aW9uID1cclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZ1xyXG4gICAgICAgICAgPyBPcmRlckRpcmVjdGlvbi5EZXNjZW5kaW5nXHJcbiAgICAgICAgICA6IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0RpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tU29ydCkge1xyXG4gICAgICB0aGlzLnNvcnQgPSBjZWxsLm5hbWU7XHJcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuc29ydElucHV0LnNvcnQgPSBjZWxsLm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgdGhpcy5zb3J0SW5wdXQuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoXHJcbiAgICAgIHRoaXMuc29ydElucHV0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25Eb21DaGFuZ2UoZWxlbWVudDogRWxlbWVudFJlZik6IHZvaWQge1xyXG4gICAgbGV0IHdpZHRoID0gZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsV2lkdGggPSB3aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnNlQXJyYXkoYXJyYXk6IEFycmF5PEhlYWRlckNlbGw+KTogQXJyYXk8SGVhZGVyQ2VsbD4ge1xyXG4gICAgbGV0IGludmVyc2UgPSBuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKTtcclxuICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpbnZlcnNlLnB1c2goYXJyYXlbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludmVyc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHJlc2l6ZUNlbGwod2lkdGg6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoaW5kZXggPT0gdGhpcy5sb3dlckNlbGxzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5zY3JvbGxXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB3aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbVNlbGVjdChpdGVtczogYW55KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNBcnJheVxyXG4gICAgICAgIC5maW5kKHQgPT4gdC5pbmRleCA9PT0gaXRlbS5pdGVtX2lkKTtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICB0ZW1wbGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gIH1cclxuICBvbkl0ZW1EZVNlbGVjdChpdGVtczogYW55KSB7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGxldCBpdGVtID0gaXRlbXMuZmlsdGVyKHQgPT4gdC5pdGVtX2lkID09PSB0aGlzLnRlbXBsYXRlc0FycmF5W2pdLmluZGV4KTtcclxuICAgICAgaWYgKGl0ZW0ubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlc0FycmF5W2pdLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlc0FycmF5W2pdID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtqXTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICB9XHJcbiAgb25TZWxlY3RBbGwoaXRlbXM6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpXTtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5pbmRleE9mKHRlbXBsYXRlKTtcclxuICAgICAgdGVtcGxhdGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICB9XHJcblxyXG4gIG9uTWFpbkRvbUNoYW5nZShlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvU2l6ZSkge1xyXG4gICAgICBsZXQgd2lkdGggPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIHRoaXMuYXV0b1NpemVDZWxscyh3aWR0aCk7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25zYXZlVGFibGUoKSB7XHJcbiAgICB0aGlzLmxpc3RjZWxsc0luZm8gPSBudWxsO1xyXG4gICAgdGhpcy5saXN0Y2VsbHNJbmZvID0gbmV3IEFycmF5PENlbGxzSW5mbz4oKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpXTtcclxuICAgICAgdGhpcy5saXN0Y2VsbHNJbmZvLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBlbGVtZW50LmluZGV4LCBuYW1lOiBlbGVtZW50Lm5hbWUsIGNlbGxXaWR0aDogZWxlbWVudC5jZWxsV2lkdGgsXHJcbiAgICAgICAgcGFyZW50OiBlbGVtZW50LnBhcmVudCwgc29ydGFibGU6IGVsZW1lbnQuc29ydGFibGUsIGRyYWdnYmxlOiBlbGVtZW50LmRyYWdnYWJsZSwgdmlzaWJsZTogZWxlbWVudC52aXNpYmxlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zYXZlVGFibGUuZW1pdChcclxuICAgICAgdGhpcy5saXN0Y2VsbHNJbmZvXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkVGFibGUoKSB7XHJcbiAgICBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudC5ub3JtYWxpemVJbmRleGVzKHRoaXMudGVtcGxhdGVzQXJyYXkpO1xyXG4gICAgdGhpcy50ZW1wbGF0ZXNBcnJheS5mb3JFYWNoKGkgPT5cclxuICAgICAgaS5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbmVyYXRlQ2VsbHMoKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gaWYgKHRoaXMubG9hZFRhYmxlLmxlbmd0aCA+IDApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2FkVGFibGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubG9hZFRhYmxlW2ldO1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0FycmF5LmZpbHRlcih4ID0+IHguaW5kZXggPT09IGVsZW1lbnQuaW5kZXgpO1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnRlbXBsYXRlc0FycmF5LmluZGV4T2YodGVtcGxhdGVbMF0pO1xyXG5cclxuICAgICAgdGVtcGxhdGVbMF0uY2VsbFdpZHRoID0gZWxlbWVudC5jZWxsV2lkdGg7XHJcbiAgICAgIHRlbXBsYXRlWzBdLnNvcnRhYmxlID0gZWxlbWVudC5zb3J0YWJsZTtcclxuICAgICAgdGVtcGxhdGVbMF0uZHJhZ2dhYmxlID0gZWxlbWVudC5kcmFnZ2JsZTtcclxuICAgICAgdGVtcGxhdGVbMF0udmlzaWJsZSA9IGVsZW1lbnQudmlzaWJsZTtcclxuICAgICAgdGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSB0ZW1wbGF0ZVswXTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvU2l6ZSkge1xyXG4gICAgICB0aGlzLmF1dG9TaXplQ2VsbHModGhpcy5tYWluU2l6ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyb3Bkb3duc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5kcm9wZG93bkxpc3QgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duTGlzdC5wdXNoKHsgaXRlbV9pZDogZWxlbWVudC5pbmRleCwgaXRlbV90ZXh0OiBlbGVtZW50LnRpdGxlLCBwYXJlbnQ6IGVsZW1lbnQucGFyZW50IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgICAgc2luZ2xlU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgaWRGaWVsZDogJ2l0ZW1faWQnLFxyXG4gICAgICB0ZXh0RmllbGQ6ICdpdGVtX3RleHQnLFxyXG4gICAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXHJcbiAgICAgIGl0ZW1zU2hvd0xpbWl0OiAyLFxyXG4gICAgICBhbGxvd1NlYXJjaEZpbHRlcjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNpemVIYW5kbGUoY2VsbDogSGVhZGVyQ2VsbCwgbUV2ZW50OiBNb3VzZUV2ZW50LCBpZFRib2R5OiBzdHJpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGJvZHlJZCA9IGlkVGJvZHk7XHJcbiAgICBjb25zdCB0YWJsZVdpZHRoVGVtcCA9IHRoaXMudGFibGVXaWR0aDtcclxuICAgIHRoaXMucGl4Y2VsWEJlZm9yZSA9IG1FdmVudC54O1xyXG4gICAgdGhpcy53aWR0aEJlZm9yZSA9ICtjZWxsLmNlbGxXaWR0aDtcclxuICAgIGNvbnN0IGRyYWdnYWJsZSA9IGNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlO1xyXG4gICAgY29uc3Qgc29ydGFibGUgPSBjZWxsLnRlbXBsYXRlLnNvcnRhYmxlO1xyXG4gICAgbGV0IGxhc3RIZWFkZXJJdGVtID0gY2VsbC5IZWFkZXJJdGVtO1xyXG4gICAgd2hpbGUgKGxhc3RIZWFkZXJJdGVtLkNoaWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxhc3RIZWFkZXJJdGVtID0gbGFzdEhlYWRlckl0ZW0uQ2hpbGRzW2xhc3RIZWFkZXJJdGVtLkNoaWxkcy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbENlbGxzID0gdGhpcy5jZWxscy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGIpOyB9KTtcclxuICAgIGNvbnN0IGxhc3RDZWxsID0gYWxsQ2VsbHMuZmlsdGVyKHQgPT4gdC52aXNpYmxlID09PSB0cnVlKS5maW5kKGkgPT4gaS5uYW1lID09PSBsYXN0SGVhZGVySXRlbS5OYW1lKTtcclxuXHJcblxyXG4gICAgY29uc3Qgd2lkdGhMYXN0Q2VsbCA9ICtsYXN0Q2VsbC5jZWxsV2lkdGg7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXHJcbiAgICAgICdkb2N1bWVudCcsXHJcbiAgICAgICdtb3VzZW1vdmUnLFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNMYXN0Q29sdW1uTW91c2UpIHtcclxuICAgICAgICAvLyBcdHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNlbGwudGVtcGxhdGUuc29ydGFibGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgV2lkdGhBZGQgPSBldmVudC54IC0gdGhpcy5waXhjZWxYQmVmb3JlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUlRMKSB7XHJcbiAgICAgICAgICBXaWR0aEFkZCA9IHRoaXMucGl4Y2VsWEJlZm9yZSAtIGV2ZW50Lng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENlbGwuY2VsbFdpZHRoID49IHRoaXMuTWluV2lkdGgpIHtcclxuICAgICAgICAgIGNlbGwuY2VsbFdpZHRoID0gdGhpcy53aWR0aEJlZm9yZSArIChXaWR0aEFkZCk7XHJcbiAgICAgICAgICBsYXN0Q2VsbC5jZWxsV2lkdGggPSB3aWR0aExhc3RDZWxsICsgKFdpZHRoQWRkKTtcclxuICAgICAgICAgIHRoaXMudGFibGVXaWR0aCA9IHRhYmxlV2lkdGhUZW1wICsgKFdpZHRoQWRkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy51bnN1YnNjcmliZU1vdXNlVXAgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGxhc3RDZWxsLmNlbGxXaWR0aCA8IHRoaXMuTWluV2lkdGgpIHtcclxuICAgICAgICBsYXN0Q2VsbC5jZWxsV2lkdGggPSB0aGlzLk1pbldpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3RDZWxsLnRlbXBsYXRlLmNlbGxXaWR0aCA9IGxhc3RDZWxsLmNlbGxXaWR0aDtcclxuXHJcbiAgICAgIGlmIChjZWxsLmNlbGxXaWR0aCA8IHRoaXMuTWluV2lkdGgpIHtcclxuICAgICAgICBjZWxsLmNlbGxXaWR0aCA9IHRoaXMuTWluV2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC50ZW1wbGF0ZS5jZWxsV2lkdGggPSBjZWxsLmNlbGxXaWR0aDtcclxuXHJcbiAgICAgIGNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlID0gZHJhZ2dhYmxlO1xyXG4gICAgICBjZWxsLnRlbXBsYXRlLnNvcnRhYmxlID0gc29ydGFibGU7XHJcblxyXG4gICAgICBsZXQgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0Ym9keUlkKTtcclxuICAgICAgdGhpcy5zY3JvbGxXaWR0aCA9IGh0bWxFbGVtZW50Lm9mZnNldFdpZHRoIC0gaHRtbEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy51bnN1YnNjcmliZU1vdXNlVXApIHtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09yZGVyRGlyZWN0aW9ufSBmcm9tICcuLy4uL21vZGVscy9lbnVtJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3NldERpcmVjdGlvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25EaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuICAgIF9kaXJlY3Rpb246IG51bWJlcjtcclxuICAgIEBJbnB1dCgnc2V0RGlyZWN0aW9uJylcclxuICAgIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpb24tYXJyb3ctZG93bi1iJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpb24tYXJyb3ctdXAtYicpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5EZXNjZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2lvbi1hcnJvdy11cC1iJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQXNjZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2lvbi1hcnJvdy1kb3duLWInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2RvbUNoYW5nZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb21DaGFuZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY2hhbmdlczogTXV0YXRpb25PYnNlcnZlcjtcclxuXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBkb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgLy8gbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5kb21DaGFuZ2UuZW1pdChtdXRhdGlvbikpO1xyXG4gICAgICB0aGlzLmRvbUNoYW5nZS5lbWl0KHRoaXMuZWxlbWVudFJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZXMub2JzZXJ2ZShlbGVtZW50LCB7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuXHJcbiAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlcy5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09yZGVyRGlyZWN0aW9ufSAgZnJvbSAnLi4vbW9kZWxzL2VudW0nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzb3J0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ydFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHJvd3M6IGFueVtdLCBhcmdzOiBhbnkpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGFyZ3MuZmllbGQ7XHJcbiAgICBjb25zdCBhY3RpdmUgPSBhcmdzLmFjdGl2ZSB8fCB0cnVlO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYXJncy5kaXJlY3Rpb247XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZykge1xyXG4gICAgICAgIHJvd3Muc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoYVtmaWVsZF0gPiBiW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvd3Muc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChhW2ZpZWxkXSA+IGJbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoYVtmaWVsZF0gPCBiW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcm93cztcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBuYW1lc3BhY2UgTnVtZXJpY0ZpbHRlciB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gZmlsdGVycyB7XHJcbiAgICAgICAgZXF1YWxzID0gJ2VxdWFscycsXHJcbiAgICAgICAgbm90RXF1YWxzID0gJ25vdCBlcXVhbHMnLFxyXG4gICAgICAgIGdyZWF0ZXJUaGFuID0gJ2dyZWF0ZXIgdGhhbicsXHJcbiAgICAgICAgbm90R3JlYXRlclRoYW4gPSAnbm90IGdyZWF0ZXIgdGhhbicsXHJcbiAgICAgICAgc21hbGxlclRoYW4gPSAnc21hbGxlciB0aGFuJyxcclxuICAgICAgICBub3RTbWFsbGVyVGhhbiA9ICdub3Qgc21hbGxlciB0aGFuJ1xyXG5cclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IE51bWVyaWNGaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvbnVtZXJpYy1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1udW1lcmljLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVHlwZVwiPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIE51bWVyaWNGaWx0ZXIudmFsdWVzKClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiPnt7cH19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVmFsdWVcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIE51bWVyaWNGaWx0ZXIgPSBOdW1lcmljRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBOdW1lcmljRmlsdGVyLmZpbHRlcnMuZXF1YWxzLCBmaWx0ZXJWYWx1ZTogJyd9KTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9PSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFN0cmluZ0ZpbHRlciB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gZmlsdGVycyB7XHJcbiAgICAgICAgZXF1YWxzID0gJ2VxdWFscycsXHJcbiAgICAgICAgbm90RXF1YWxzID0gJ25vdCBlcXVhbHMnLFxyXG4gICAgICAgIHN0YXJ0c1dpdGggPSAnc3RhcnRzIHdpdGgnLFxyXG4gICAgICAgIG5vdFN0YXJ0c1dpdGggPSAnbm90IHN0YXJ0cyB3aXRoJyxcclxuICAgICAgICBlbmRzV2l0aCA9ICdlbmRzIHdpdGgnLFxyXG4gICAgICAgIG5vdEVuZHNXaXRoID0gJ25vdCBlbmRzIHdpdGgnLFxyXG4gICAgICAgIGNvbnRhaW5zID0gJ2NvbnRhaW5zJyxcclxuICAgICAgICBub3RDb250YWlucyA9ICdub3QgY29udGFpbnMnXHJcbiAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMoKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBTdHJpbmdGaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvc3RyaW5nLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXN0cmluZy1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclR5cGVcIj5cclxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBTdHJpbmdGaWx0ZXIudmFsdWVzKClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiPnt7cH19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVmFsdWVcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4U3RyaW5nRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBTdHJpbmdGaWx0ZXIgPSBTdHJpbmdGaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IFN0cmluZ0ZpbHRlci5maWx0ZXJzLmNvbnRhaW5zLCBmaWx0ZXJWYWx1ZTogJyd9KVxyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEVudW1GaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMoKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBFbnVtRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL2VudW0tZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW51bS1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclR5cGVcIj5cclxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBFbnVtRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJWYWx1ZVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgaXRlbXNcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiPnt7cH19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgRW51bUZpbHRlciA9IEVudW1GaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IEVudW1GaWx0ZXIuZmlsdGVycy5lcXVhbHMsIGZpbHRlclZhbHVlOiAnJ30pXHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQm9vbGVhbkZpbHRlciB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gZmlsdGVycyB7XHJcbiAgICAgICAgZXF1YWxzID0gJ2VxdWFscycsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgQm9vbGVhbkZpbHRlciB9IGZyb20gJy4uL21vZGVscy9ib29sZWFuLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWJvb2xlYW4tZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBbKG5nTW9kZWwpXT1cImZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEJvb2xlYW5GaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueVtdO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBCb29sZWFuRmlsdGVyID0gQm9vbGVhbkZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogQm9vbGVhbkZpbHRlci5maWx0ZXJzLmVxdWFscywgZmlsdGVyVmFsdWU6ICcnfSlcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMaXN0SXRlbURyb3Bkb3duIHtcclxuICAgIGlkOiBTdHJpbmc7XHJcbiAgICB0ZXh0OiBTdHJpbmc7XHJcbiAgICBwYXJlbnQ6IFN0cmluZztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihzb3VyY2U6IGFueSkge1xyXG4gICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy50ZXh0ID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMucGFyZW50PScnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBzb3VyY2UuaWQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc291cmNlLnRleHQ7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQ9c291cmNlLnBhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJRHJvcGRvd25TZXR0aW5ncyB7XHJcbiAgICBzaW5nbGVTZWxlY3Rpb24/OiBib29sZWFuO1xyXG4gICAgaWRGaWVsZD86IHN0cmluZztcclxuICAgIHRleHRGaWVsZD86IHN0cmluZztcclxuICAgIHBhcmVudEZpZWxkPzogc3RyaW5nO1xyXG4gICAgZW5hYmxlQ2hlY2tBbGw/OiBib29sZWFuO1xyXG4gICAgc2VsZWN0QWxsVGV4dD86IHN0cmluZztcclxuICAgIHVuU2VsZWN0QWxsVGV4dD86IHN0cmluZztcclxuICAgIGFsbG93U2VhcmNoRmlsdGVyPzogYm9vbGVhbjtcclxuICAgIGNsZWFyU2VhcmNoRmlsdGVyPzogYm9vbGVhbjtcclxuICAgIG1heEhlaWdodD86IG51bWJlcjtcclxuICAgIGl0ZW1zU2hvd0xpbWl0PzogbnVtYmVyO1xyXG4gICAgbGltaXRTZWxlY3Rpb24/OiBudW1iZXI7XHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XHJcbiAgICBub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XHJcbiAgICBjbG9zZURyb3BEb3duT25TZWxlY3Rpb24/OiBib29sZWFuO1xyXG4gICAgc2hvd1NlbGVjdGVkSXRlbXNBdFRvcD86IGJvb2xlYW47XHJcbiAgfSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0SXRlbURyb3Bkb3duLCBJRHJvcGRvd25TZXR0aW5ncyB9IGZyb20gJy4uL21vZGVscy9tdWx0aXNlbGVjdC5tb2RlbCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBEUk9QRE9XTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IHRhYmluZGV4PVwiPTBcIiAoYmx1cik9XCJvblRvdWNoZWQoKVwiIGNsYXNzPVwibXVsdGlzZWxlY3QtZHJvcGRvd25cIiAoY2xpY2tPdXRzaWRlKT1cImNsb3NlRHJvcGRvd24oKVwiPlxuICA8ZGl2IFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgIDxidXR0b24gdGFiaW5kZXg9XCItMVwiIFtuZ0NsYXNzXT1cImJ1dHRvbkxpc3RDb2x1bW5TdHlsZVwiIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIDxzcGFuIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImRyb3Bkb3duLWJ0blwiIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpXCI+IC0tPlxuICAgIDwhLS0gPHNwYW4+e3tfcGxhY2Vob2xkZXJ9fTwvc3Bhbj4gLS0+XG4gICAgPCEtLSA8aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9pPiAtLT5cbiAgICA8IS0tICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGggPT0gMFwiIC0tPlxuXG4gICAgPCEtLSA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWxlY3RlZEl0ZW1zO3RyYWNrQnk6IHRyYWNrQnlGbjtsZXQgayA9IGluZGV4XCIgW2hpZGRlbl09XCJrID4gX3NldHRpbmdzLml0ZW1zU2hvd0xpbWl0LTFcIj5cbiAgICAgICAgICB7e2l0ZW0udGV4dH19XG4gICAgICAgICAgPGEgc3R5bGU9XCJwYWRkaW5nLXRvcDoycHg7cGFkZGluZy1sZWZ0OjJweDtjb2xvcjp3aGl0ZVwiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSlcIj54PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OjRweFwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNnB4O1wiICpuZ0lmPVwiaXRlbVNob3dSZW1haW5pbmcoKT4wXCI+K3t7aXRlbVNob3dSZW1haW5pbmcoKX19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cImlzRHJvcGRvd25PcGVuID8gJ2Ryb3Bkb3duLXVwJyA6ICdkcm9wZG93bi1kb3duJ1wiPjwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPiAtLT5cbiAgICA8IS0tIDwvc3Bhbj4gLS0+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIFtoaWRkZW5dPVwiIWlzRHJvcGRvd25PcGVuXCI+XG4gICAgPHVsIGNsYXNzPVwiaXRlbTFcIj5cbiAgICAgIDxsaSAoY2xpY2spPVwidG9nZ2xlU2VsZWN0QWxsKClcIiAqbmdJZj1cIl9kYXRhLmxlbmd0aCA+IDAgJiYgIV9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24gJiYgX3NldHRpbmdzLmVuYWJsZUNoZWNrQWxsICYmIF9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbj09PS0xXCJcbiAgICAgICAgY2xhc3M9XCJtdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94XCIgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztwYWRkaW5nOjEwcHhcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzQWxsSXRlbXNTZWxlY3RlZCgpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKClcIiAvPlxuICAgICAgICA8ZGl2Pnt7IF9zZXR0aW5ncy5zZWxlY3RBbGxUZXh0fX08L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItdGV4dGJveFwiICpuZ0lmPVwiX2RhdGEubGVuZ3RoPjAgJiYgX3NldHRpbmdzLmFsbG93U2VhcmNoRmlsdGVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZWFkT25seV09XCJkaXNhYmxlZFwiIFtwbGFjZWhvbGRlcl09XCJfc2V0dGluZ3Muc2VhcmNoUGxhY2Vob2xkZXJUZXh0XCIgWyhuZ01vZGVsKV09XCJmaWx0ZXIudGV4dFwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3M9XCJpdGVtMlwiIFtzdHlsZS5tYXhIZWlnaHRdPVwiX3NldHRpbmdzLm1heEhlaWdodCsncHgnXCI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2RhdGEgfCBuZzJMaXN0RmlsdGVyOmZpbHRlcjsgbGV0IGkgPSBpbmRleDtcIiAoY2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LGl0ZW0pXCIgY2xhc3M9XCJtdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJpc1NlbGVjdGVkKGl0ZW0pXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IChpc0xpbWl0U2VsZWN0aW9uUmVhY2hlZCgpICYmICFpc1NlbGVjdGVkKGl0ZW0pKVwiIC8+XG4gICAgICAgIDxkaXY+e3tpdGVtLnRleHR9fTwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz0nbm8tZGF0YScgKm5nSWY9XCJfZGF0YS5sZW5ndGggPT0gMFwiPlxuICAgICAgICA8aDU+e3tfc2V0dGluZ3Mubm9EYXRhQXZhaWxhYmxlUGxhY2Vob2xkZXJUZXh0fX08L2g1PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AubXVsdGlzZWxlY3QtZHJvcGRvd257cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0bntkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6MXB4IHNvbGlkICNhZGFkYWQ7d2lkdGg6MTAwJTtwYWRkaW5nOjZweCAxMnB4O21hcmdpbi1ib3R0b206MDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS41Mjg1NzE0Mzt0ZXh0LWFsaWduOmxlZnQ7dmVydGljYWwtYWxpZ246bWlkZGxlO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXItcmFkaXVzOjRweH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbXtib3JkZXI6MXB4IHNvbGlkICMzMzdhYjc7bWFyZ2luLXJpZ2h0OjRweDtiYWNrZ3JvdW5kOiMzMzdhYjc7cGFkZGluZzowIDVweDtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MnB4O2Zsb2F0OmxlZnR9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW0gYXt0ZXh0LWRlY29yYXRpb246bm9uZX0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbTpob3Zlcntib3gtc2hhZG93OjFweCAxcHggIzk1OTU5NX0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bntkaXNwbGF5OmlubGluZS1ibG9jazt0b3A6MTBweDt3aWR0aDowO2hlaWdodDowO2JvcmRlci10b3A6MTBweCBzb2xpZCAjYWRhZGFkO2JvcmRlci1sZWZ0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjEwcHggc29saWQgdHJhbnNwYXJlbnR9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNhZGFkYWQ7Ym9yZGVyLWxlZnQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRpc2FibGVkPnNwYW57YmFja2dyb3VuZC1jb2xvcjojZWNlZWVmfS5kcm9wZG93bi1saXN0e3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmctdG9wOjZweDt3aWR0aDotd2Via2l0LW1heC1jb250ZW50O3dpZHRoOi1tb3otbWF4LWNvbnRlbnQ7d2lkdGg6bWF4LWNvbnRlbnQ7Ym90dG9tOjMwcHg7cGFkZGluZy1ib3R0b206NXB4O21hcmdpbi1ib3R0b206MTBweDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6M3B4O2JhY2tncm91bmQ6I2ZmZjttYXJnaW4tdG9wOjEwcHg7Ym94LXNoYWRvdzowIDFweCA1cHggIzk1OTU5NX0uZHJvcGRvd24tbGlzdCB1bHtwYWRkaW5nOjA7bGlzdC1zdHlsZTpub25lO292ZXJmbG93OmF1dG87bWFyZ2luOjB9LmRyb3Bkb3duLWxpc3QgbGl7cGFkZGluZzo2cHggMTBweDtjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmxlZnR9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94e2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxMHB4fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveCBpbnB1dHtib3JkZXI6MDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDAgMjZweH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3ggaW5wdXQ6Zm9jdXN7b3V0bGluZTowfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hde2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4fS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3VzK2RpdjpiZWZvcmUsLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06aG92ZXIrZGl2OmJlZm9yZXtib3JkZXItY29sb3I6IzMzN2FiNztiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06YWN0aXZlK2RpdjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjowc30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXZ7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjJlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2N1cnNvcjpwb2ludGVyO21hcmdpbjowO2NvbG9yOiMwMDB9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0rZGl2OmJlZm9yZXtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRlbnQ6Jyc7Y29sb3I6IzMzN2FiNztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MDt3aWR0aDoxNHB4O2hlaWdodDoxNHB4O21hcmdpbi10b3A6LTlweDtib3JkZXI6MnB4IHNvbGlkICMzMzdhYjc7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2V9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0rZGl2OmFmdGVye2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3RvcDo1MCU7bGVmdDo0cHg7d2lkdGg6OHB4O2hlaWdodDozcHg7bWFyZ2luLXRvcDotNHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6I2ZmZjtib3JkZXItd2lkdGg6MCAwIDNweCAzcHg7LW8tYm9yZGVyLWltYWdlOm5vbmU7Ym9yZGVyLWltYWdlOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkK2RpdjpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNjY2N9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6Zm9jdXMrZGl2OmJlZm9yZSAubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZDpob3ZlcitkaXY6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6aW5oZXJpdH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZDpjaGVja2VkK2RpdjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojY2NjfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQrZGl2OmFmdGVye2NvbnRlbnQ6Jyc7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMSk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQrZGl2OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjouMnMgZWFzZS1pbiBib3JkZXJzY2FsZTthbmltYXRpb246LjJzIGVhc2UtaW4gYm9yZGVyc2NhbGU7YmFja2dyb3VuZDojMzM3YWI3fUAtd2Via2l0LWtleWZyYW1lcyBib3JkZXJzY2FsZXs1MCV7Ym94LXNoYWRvdzowIDAgMCAycHggIzMzN2FiN319QGtleWZyYW1lcyBib3JkZXJzY2FsZXs1MCV7Ym94LXNoYWRvdzowIDAgMCAycHggIzMzN2FiN319YF0sXG4gIHByb3ZpZGVyczogW0RST1BET1dOX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIF9kYXRhOiBBcnJheTxMaXN0SXRlbURyb3Bkb3duPiA9IFtdO1xuICBzZWxlY3RlZEl0ZW1zOiBBcnJheTxMaXN0SXRlbURyb3Bkb3duPiA9IFtdO1xuICBpc0Ryb3Bkb3duT3BlbiA9IGZhbHNlO1xuICBfc2V0dGluZ3M6IElEcm9wZG93blNldHRpbmdzO1xuICBfcGxhY2Vob2xkZXIgPSAnU2VsZWN0JztcbiAgZmlsdGVyOiBMaXN0SXRlbURyb3Bkb3duID0gbmV3IExpc3RJdGVtRHJvcGRvd24odGhpcy5kYXRhKTtcblxuICBkZWZhdWx0U2V0dGluZ3M6IElEcm9wZG93blNldHRpbmdzID0ge1xuICAgIHNpbmdsZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgaWRGaWVsZDogJ2lkJyxcbiAgICB0ZXh0RmllbGQ6ICd0ZXh0JyxcbiAgICBwYXJlbnRGaWVsZDogJ3BhcmVudCcsXG4gICAgZW5hYmxlQ2hlY2tBbGw6IHRydWUsXG4gICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxuICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXG4gICAgYWxsb3dTZWFyY2hGaWx0ZXI6IGZhbHNlLFxuICAgIGxpbWl0U2VsZWN0aW9uOiAtMSxcbiAgICBjbGVhclNlYXJjaEZpbHRlcjogdHJ1ZSxcbiAgICBtYXhIZWlnaHQ6IDE5NyxcbiAgICBpdGVtc1Nob3dMaW1pdDogOTk5OTk5OTk5OTk5LFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyVGV4dDogJ1NlYXJjaCcsXG4gICAgbm9EYXRhQXZhaWxhYmxlUGxhY2Vob2xkZXJUZXh0OiAnTm8gZGF0YSBhdmFpbGFibGUnLFxuICAgIGNsb3NlRHJvcERvd25PblNlbGVjdGlvbjogZmFsc2UsXG4gICAgc2hvd1NlbGVjdGVkSXRlbXNBdFRvcDogZmFsc2VcbiAgfTtcblxuICBAT3V0cHV0KCdvbkZpbHRlckNoYW5nZScpIG9uRmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGlzdEl0ZW1Ecm9wZG93bj4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnb25TZWxlY3QnKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcbiAgQE91dHB1dCgnb25EZVNlbGVjdCcpIG9uRGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbURyb3Bkb3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG4gIEBPdXRwdXQoJ29uU2VsZWN0QWxsJykgb25TZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbURyb3Bkb3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG4gIEBPdXRwdXQoJ29uRGVTZWxlY3RBbGwnKSBvbkRlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gIEBJbnB1dCgpIGJ1dHRvbkxpc3RDb2x1bW5TdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gJ1NlbGVjdCc7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2V0dGluZ3ModmFsdWU6IElEcm9wZG93blNldHRpbmdzKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0U2V0dGluZ3MsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdFNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnN0IF9pdGVtcyA9IHZhbHVlLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAvLyAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIGl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0gJiYgaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdKSkge1xuICAgICAgLy8gICAgIHJldHVybiBpdGVtO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KTtcbiAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZS5tYXAoXG4gICAgICAgIChpdGVtOiBhbnkpID0+XG4gICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG5ldyBMaXN0SXRlbURyb3Bkb3duKGl0ZW0pXG4gICAgICAgICAgICA6IG5ldyBMaXN0SXRlbURyb3Bkb3duKHtcbiAgICAgICAgICAgICAgaWQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0sXG4gICAgICAgICAgICAgIHRleHQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSxcbiAgICAgICAgICAgICAgcGFyZW50OiBpdGVtW3RoaXMuX3NldHRpbmdzLnBhcmVudEZpZWxkXVxuICAgICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cblxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIG9iai5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9iai5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gb2JqWzBdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW1xuICAgICAgICAgICAgICB0eXBlb2YgZmlyc3RJdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gbmV3IExpc3RJdGVtRHJvcGRvd24oZmlyc3RJdGVtKVxuICAgICAgICAgICAgICAgIDogbmV3IExpc3RJdGVtRHJvcGRvd24oe1xuICAgICAgICAgICAgICAgICAgaWQ6IGZpcnN0SXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IGZpcnN0SXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdLFxuICAgICAgICAgICAgICAgICAgcGFyZW50OiBmaXJzdEl0ZW1bdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5lcnJvcihlLmJvZHkubXNnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgX2RhdGEgPSBvYmoubWFwKFxuICAgICAgICAgIChpdGVtOiBhbnkpID0+XG4gICAgICAgICAgICB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBuZXcgTGlzdEl0ZW1Ecm9wZG93bihpdGVtKVxuICAgICAgICAgICAgICA6IG5ldyBMaXN0SXRlbURyb3Bkb3duKHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0sXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpdGVtW3RoaXMuX3NldHRpbmdzLnBhcmVudEZpZWxkXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gX2RhdGEuc3BsaWNlKDAsIHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBfZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKG9iaik7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICAvLyBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIC8vIH1cblxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmJ1dHRvbkxpc3RDb2x1bW5TdHlsZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIjtcbiAgfVxuXG4gIHNob3dCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA+IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5fc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgPSB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA9PT0gLTEgPyB0cnVlIDogZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gIXRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbiAmJiB0aGlzLl9zZXR0aW5ncy5lbmFibGVDaGVja0FsbCAmJiB0aGlzLl9kYXRhLmxlbmd0aCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNob3VsZCBiZSBkaXNhYmxlZCBpbiBzaW5nbGUgc2VsZWN0aW9uIG1vZGVcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpdGVtU2hvd1JlbWFpbmluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gdGhpcy5fc2V0dGluZ3MuaXRlbXNTaG93TGltaXQ7XG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBwdWJsaWMgb25Ub3VjaGVkKCkge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5pc0Ryb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIC8vIGNsZWFyIHNlYXJjaCB0ZXh0XG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLmNsZWFyU2VhcmNoRmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlci50ZXh0ID0gJyc7XG4gICAgfVxuICB9XG4gIHRvZ2dsZURyb3Bkb3duKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gIXRoaXMuaXNEcm9wZG93bk9wZW47XG4gIH1cblxuICB0b2dnbGVTZWxlY3RBbGwoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzQWxsSXRlbXNTZWxlY3RlZCgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLl9kYXRhLnNsaWNlKCk7XG4gICAgICB0aGlzLm9uU2VsZWN0QWxsLmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgLy8gdGhpcy5vbkRlU2VsZWN0QWxsLmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgfVxuXG4gIGlzQWxsSXRlbXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gIH1cblxuXG4gIGVtaXR0ZWRWYWx1ZSh2YWw6IGFueSk6IGFueSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YWwubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaXRlbS50ZXh0KSB7XG4gICAgICAgICAgc2VsZWN0ZWQucHVzaChpdGVtLnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkLnB1c2godGhpcy5vYmplY3RpZnkoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBpZiAodmFsLmlkID09PSB2YWwudGV4dCkge1xuICAgICAgICAgIHJldHVybiB2YWwudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RpZnkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBvYmplY3RpZnkodmFsOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgb2JqW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdID0gdmFsLmlkO1xuICAgIG9ialt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdID0gdmFsLnRleHQ7XG4gICAgb2JqW3RoaXMuX3NldHRpbmdzLnBhcmVudEZpZWxkXSA9IHZhbC5wYXJlbnQ7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgfVxuICBvbkZpbHRlclRleHRDaGFuZ2UoJGV2ZW50KSB7XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZS5lbWl0KCRldmVudCk7XG4gIH1cblxuICBvbkl0ZW1DbGljaygkZXZlbnQ6IGFueSwgaXRlbTogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5pc1NlbGVjdGVkKGl0ZW0pO1xuICAgIGNvbnN0IGFsbG93QWRkID0gdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPT09IC0xIHx8ICh0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA+IDAgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA8IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBpZiAoYWxsb3dBZGQpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxlY3RlZChpdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChpdGVtKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbiAmJiB0aGlzLl9zZXR0aW5ncy5jbG9zZURyb3BEb3duT25TZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNlbGVjdGVkKGl0ZW06IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFyZW50SXRlbSA9IHRoaXMuX2RhdGEuZmlsdGVyKHggPT4geC50ZXh0ID09PSBpdGVtLnBhcmVudCk7XG4gICAgICB2YXIgcGFyZW50SXRlbXNlbGV0ZWQgPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC50ZXh0ID09PSBpdGVtLnBhcmVudCk7XG4gICAgICBpZiAocGFyZW50SXRlbS5sZW5ndGggPiAwICYmIHBhcmVudEl0ZW1zZWxldGVkLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHBhcmVudEl0ZW1bMF0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRJdGVtID0gdGhpcy5fZGF0YS5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS50ZXh0KTtcbiAgICAgIHZhciBjaGlsZEl0ZW1zZWxldGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcih4ID0+IHgucGFyZW50ID09PSBpdGVtLnRleHQpO1xuICAgICAgaWYgKGNoaWxkSXRlbS5sZW5ndGggPiAwICYmIGNoaWxkSXRlbXNlbGV0ZWQubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goY2hpbGRJdGVtWzBdKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZChpdGVtU2VsOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW1TZWwuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcih4ID0+IHgucGFyZW50ID09PSBpdGVtLnBhcmVudCkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRzID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcih4ID0+IHgucGFyZW50ID09PSBpdGVtLnRleHQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoaWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkc1tpbmRleF07XG4gICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihlbGVtZW50KSAhPT0gLTEgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsZXQgZGVTZWxlY3RlZEl0ZW1zID0gQXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4oKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgaWYodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YodGhpcy5fZGF0YVtpXSkgPT09IC0xKVxuICAgIC8vICB7XG4gICAgLy8gICBkZVNlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9kYXRhW2ldKTtcbiAgICAvLyAgfVxuXG4gICAgLy8gfVxuXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIHRoaXMub25EZVNlbGVjdC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICB9XG5cbiAgaXNTZWxlY3RlZChjbGlja2VkSXRlbTogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGNsaWNrZWRJdGVtLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1Ecm9wZG93biB9IGZyb20gJy4uL21vZGVscy9tdWx0aXNlbGVjdC5tb2RlbCc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ25nMkxpc3RGaWx0ZXInLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oaXRlbXM6IExpc3RJdGVtRHJvcGRvd25bXSwgZmlsdGVyOiBMaXN0SXRlbURyb3Bkb3duKTogTGlzdEl0ZW1Ecm9wZG93bltdIHtcclxuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFmaWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiBMaXN0SXRlbURyb3Bkb3duKSA9PiB0aGlzLmFwcGx5RmlsdGVyKGl0ZW0sIGZpbHRlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RmlsdGVyKGl0ZW06IExpc3RJdGVtRHJvcGRvd24sIGZpbHRlcjogTGlzdEl0ZW1Ecm9wZG93bik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhKGZpbHRlci50ZXh0ICYmIGl0ZW0udGV4dCAmJiBpdGVtLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlci50ZXh0LnRvTG93ZXJDYXNlKCkpID09PSAtMSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2NsaWNrT3V0c2lkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIGNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50JywgJyRldmVudC50YXJnZXQnXSlcclxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgRGlyZWN0aXZlLCBDb21wb25lbnQsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4TWFnaWNUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi9uZ3gtbWFnaWMtdGFibGUvbmd4LW1hZ2ljLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtbWFnaWMtdGFibGUvbmd4LWRpcmVjdGlvbi1jb2x1bW4uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRG9tQ2hhbmdlRGlyZWN0aXZlfSBmcm9tICcuL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUtY2hhbmdlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL25neC1uYW1lZC10ZW1wbGF0ZS9uZ3gtbmFtZWQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuL3NvcnQvc29ydC5waXBlJztcclxuaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL25neC1jb2x1bW4tdGVtcGxhdGUvbmd4LWNvbHVtbi10ZW1wbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hOdW1lcmljRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbnVtZXJpYy1maWx0ZXIvbmd4LW51bWVyaWMtZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXN0cmluZy1maWx0ZXIvbmd4LXN0cmluZy1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4RW51bUZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWVudW0tZmlsdGVyL25neC1lbnVtLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtYm9vbGVhbi1maWx0ZXIvbmd4LWJvb2xlYW4tZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RGaWx0ZXJQaXBlIH0gZnJvbSAnLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vbGlzdC1maWx0ZXIucGlwZSc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuLy8gaW1wb3J0IHsgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTmdiTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ3hNYWdpY1RhYmxlQ29tcG9uZW50LFxyXG4gICAgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgICBOZ3hOdW1lcmljRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4U3RyaW5nRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4RW51bUZpbHRlckNvbXBvbmVudCxcclxuICAgIERpcmVjdGlvbkRpcmVjdGl2ZSxcclxuICAgIERvbUNoYW5nZURpcmVjdGl2ZSxcclxuICAgIE5neEJvb2xlYW5GaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxyXG4gICAgTGlzdEZpbHRlclBpcGVdLFxyXG5cclxuICBleHBvcnRzOiBbTmd4TWFnaWNUYWJsZUNvbXBvbmVudCxcclxuICAgIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50LFxyXG4gICAgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCxcclxuICAgIERpcmVjdGlvbkRpcmVjdGl2ZSxcclxuICAgIERvbUNoYW5nZURpcmVjdGl2ZSxcclxuICAgIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCxcclxuICAgIE5neEVudW1GaWx0ZXJDb21wb25lbnRdLFxyXG5cclxuICBzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUEgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNUYWJsZU1vZHVsZSB7IH1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IHtcclxuLy8gICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIG5nTW9kdWxlOiBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50XHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iLCJleHBvcnQgY2xhc3MgQ2VsbHNJbmZvICB7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY2VsbFdpZHRoOiBudW1iZXI7XHJcbiAgICBkcmFnZ2JsZTogYm9vbGVhbjtcclxuICAgIHNvcnRhYmxlOiBib29sZWFuO1xyXG4gICAgcGFyZW50OiBzdHJpbmc7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLElBQUE7OztzQkFEQTtJQUlDLENBQUE7Ozs7OztBQ0RELElBQUE7OztvQkFIQTtJQU9DLENBQUE7Ozs7OztBQ0xELElBQUE7d0JBU3VCLElBQTBCO1FBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDOztxQkFsQjlDO0lBcUJDLENBQUE7Ozs7OztBQ2xCRCxJQUFBO3dCQVdxQixJQUEwQjtRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztxQkFyQnhCO0lBdUJDLENBQUE7Ozs7OztBQ3ZCRDtJQVFFLGdDQUM4QixJQUFJLEVBQ0YsUUFBMEI7UUFENUIsU0FBSSxH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

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

module.exports = ".rowClass1 {\r\n  /* background-color: green; */\r\n}\r\n\r\n.rowClass2 {\r\n  background-color: bisque;\r\n}\r\n\r\n.rowClass2 td {\r\n  border:1px solid gray !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" width:100%; height: 400px;\">\r\n\r\n  <ngx-magic-table [isRTL]=\"true\" [rows]=\"data\" buttonListColumnStyle=\"btn btn-outline-info\" buttonSaveTableStyle=\"btn btn-outline-info\"\r\n    [customSort]=\"false\" sort=\"Phone\" [sortDirection]=\"0\" [paginated]=\"true\" [pageSize]=\"3\" [customPaginate]=\"false\"\r\n    [currentPage]=\"2\" [pageSizes]=\"[3, 5, 20, 50, 100]\" (pageSizesChange)=\"pageSizesChange($event)\" (pageChange)=\"pageChange($event)\"\r\n    (selectedChange)=\"selectChanged($event)\" selectedClass=\"table-secondary\"\r\n    [autoSize]=\"true\" (saveTable)=\"saveTable($event)\" [loadTable]=\"\" [rowClassRenderer]=\"getRowClass\" (columnsArrangeChange)=\"columnsArrangeChange($event)\">\r\n\r\n    <ngx-column-template [visible]=\"true\" name=\"Numbers\" index=\"1\" [sortable]=\"false\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}} </ng-template> -->\r\n\r\n      <!-- <ng-template let-rows=\"rows\" let-cell=\"cell\" name=\"filter\">\r\n                <ngx-string-filter [rows]=\"rows\" [cell]=\"cell\" (filterChange)=\"logAll($event)\"></ngx-string-filter>\r\n            </ng-template> -->\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Phone\" parent=\"Numbers\" title=\"تلفن\" index=\"2\" [visible]=\"true\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">تلفن همراه\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\" >{{row.Phone}}</ng-template>\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Id\" parent=\"Numbers\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">\r\n        {{row.Id}}\r\n      </ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Type\" parent=\"Numbers\" collection=\"Type\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Type[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Size\" parent=\"Numbers\" collection=\"Size\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Size[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\" >{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n\r\n\r\n  </ngx-magic-table>\r\n\r\n</div>\r\n"

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

// import { CellsInfo } from 'ngx-magic-table/lib/models/cells-info';
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
    AppComponent.prototype.getRowClass = function (data) {
        if (data.Id < 5) {
            return 'rowClass1';
        }
        else {
            return 'rowClass2';
        }
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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            exports: []
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