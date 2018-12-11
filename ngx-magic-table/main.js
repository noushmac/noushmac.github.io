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
        if (this.pageSize == null) {
            this.pageSize = 10;
        }
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
                    template: "<div (domChange)=\"onMainDomChange($event)\" [ngClass]=\"[isRTL ? 'rtl' : 'ltr']\">\n  <div id=\"MainMagicTableId\" class=\"mainMagicTable\">\n    <div class=\"paddingDiv\" [style.width.px]=\"tableWidth\">\n      <table [ngClass]=\"tableClass\" class=\"rz-table\">\n        <thead class=\"ngxThead\" [ngClass]=\"theadClass\">\n          <tr *ngFor=\"let cellRow of cells\">\n            <th *ngFor=\"let cell of inverseArray(cellRow)\" [style.max-width.px]=\"cell.cellWidth\" [style.min-width.px]=\"cell.cellWidth\"\n              [style.width.px]=\"cell.cellWidth\" [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\"\n              [attr.visible]=\"cell.visible\" [name]=\"cell.name\" [id]=\"uid+'-'+cell.name+'-head'\" [draggable]=\"cell.template.draggable\"\n              (drop)=\"drop(cell)\" (dragover)=\"allowDrop($event)\" (dragstart)=\"drag(cell)\" [attr.colspan]=\"cell.colSpan\"\n              [attr.rowspan]=\"cell.rowSpan\" data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"cell.title\">\n              <div [id]=\"cell.name+'resizable'\" (mousedown)=\"resizeHandle(cell,$event,'tbody1')\" class=\"rz-handle\">\n              </div>\n              <div class=\"th-title\" (click)=\"sortToggle(cell)\">\n                <ng-template [ngTemplateOutlet]=\"cell.template.header\" [ngTemplateOutletContext]=\"{cell: cell, direction: (cell.name === sort) ? sortDirection : undefined}\">\n                </ng-template>\n              </div>\n              <ng-container *ngIf=\"cell.template.filter\">\n                <div ngbDropdown (click)=\"$event.stopPropagation()\" class=\"dropdown float-right\">\n                  <button ngbDropdownToggle type=\"button\" [ngClass]=\"[cell.template.filters.length == 0 ? 'btn-default' : 'btn-warning']\"\n                    class=\"btn \" [id]=\"cell.name + '-' + uid  + '-filter'\">\n                    <i class=\"fa fa-filter\"></i>\n                  </button>\n                  <div ngbDropdownMenu [aria-labelledby]=\"cell.name + '-' + uid  + '-filter'\" class=\"dropdown-menu\"\n                    (click)=\"$event.stopPropagation()\">\n                    <div class=\"container\">\n                      <ng-template [ngTemplateOutlet]=\"cell.template.filter\" [ngTemplateOutletContext]=\"{cell: cell, rows: rows}\"></ng-template>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </th>\n          </tr>\n        </thead>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort} | paginate: {\n        itemsPerPage: pageSize,\n        currentPage: currentPage,\n        totalItems: customPaginate ? totalCount : rows.length,\n        id: uid }\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row == selectedRow ? selectedClass : rowClassRenderer(row)]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.min-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [style.max-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"row[cell.name]\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"!paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort}\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row == selectedRow ? selectedClass : rowClassRenderer(row)]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.min-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [style.max-width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"row[cell.name]\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"btn-group paging\" *ngIf=\"paginated\">\n    <lib-ngx-multiselect-dropdown class=\"pagingInline\" [buttonListColumnStyle]=\"buttonSaveTableStyle\" (change)=\"onItemSelect($event)\"\n      [placeholder]=\"'Select Columns'\" [data]=\"dropdownList\" [(ngModel)]=\"dropdownselectedItems\" [settings]=\"dropdownSettings\"\n      (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n    </lib-ngx-multiselect-dropdown>\n    <div class=\"pagingInline\" style=\"margin-left: 2px; margin-right: 2px\">\n      <button (click)=\"onsaveTable()\" [ngClass]=\"buttonSaveTableStyle\" title=\"Save Table\">\n        <i class=\"fa fa-floppy-o\"></i>\n      </button>\n    </div>\n    <div style=\"display: contents;\" *ngIf=\"paginated && pagination\">\n      <ng-container [ngTemplateOutlet]=\"pagination\">\n      </ng-container>\n    </div>\n    <div class=\"pagingInline\" *ngIf=\"paginated && !pagination\">\n      <pagination-controls class=\"pagingInline\" (pageChange)=\"selectPage($event)\" previousLabel=\"\" nextLabel=\"\" [id]=\"uid\"></pagination-controls>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div *ngIf=\"pageSizes.length\" class=\"dropdown pagingInline\">\n        <select class=\"btn btn-secondary btn-sm dropdown-toggle\" [value]='pageSize' (change)=\"changePerPage($event.target.value)\">\n          <option *ngFor=\"let p of pageSizes\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                    styles: ["table thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[draggable=true]{-khtml-user-drag:element;-webkit-user-drag:element}select.btn-sm{padding:.1rem;display:inline-flex}table{table-layout:fixed}table.rz-table{display:block;width:auto;table-layout:fixed;border-collapse:collapse}table.rz-table th{position:relative;min-width:25px}table.rz-table th .rz-handle{width:2px;height:100%;position:absolute;top:0;right:-2px;cursor:ew-resize!important;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px);z-index:99999999}table.rz-table th .rz-handle:hover{background:repeating-linear-gradient(45deg,#6c757d00,#6c757d 2px,#6c757d 2px,#6c757d00 4px)}.rtl table.rz-table th .rz-handle{right:auto;left:-2px}.rtl{direction:rtl!important}.ltr{direction:ltr!important}.mainMagicTable{overflow:auto;min-height:300px}.paging{width:100%;padding:10px}.paddingDiv{padding:10px}.ngxThead{display:block;width:100%}.ngxTbody{max-height:-webkit-fill-available;display:block;overflow-y:auto;overflow-x:hidden}.ltr .ngxTbody{direction:rtl}.rtl .ngxTbody{direction:ltr}.ltr .ngxThead{direction:rtl}.rtl .ngxThead{direction:ltr}.table.rz-table td{overflow:hidden;text-overflow:ellipsis;white-space:nowrap!important;border:1px solid #dee2e6}.table.rz-table th{padding:.2rem;text-align:center}.table.rz-table td:last-child,.table.rz-table th:last-child{min-width:auto!important}.table.rz-table>tbody>tr:nth-of-type(odd){background-color:#e5ecf1}.table.rz-table>tbody>tr:nth-of-type(even){background-color:#f2f9fe}.savetable{position:absolute;top:5px}.ltr .savetable{right:10px}.rtl .savetable{left:10px}ul.ngx-pagination{margin:0}.rtl .paging{direction:rtl!important}.ltr .paging{direction:ltr!important}.pagingInline{display:inline-block}.th-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rtl .table.rz-table td,.rtl .th-title{direction:rtl!important}.ltr .table.rz-table td,.ltr .th-title{direction:ltr!important}"]
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9QYWdpbmctaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL3NvcnQtaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2hlYWRlci1pdGVtLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL3NvcnQvc29ydC5waXBlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9udW1lcmljLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbnVtZXJpYy1maWx0ZXIvbmd4LW51bWVyaWMtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvc3RyaW5nLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2VudW0tZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9ib29sZWFuLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtYm9vbGVhbi1maWx0ZXIvbmd4LWJvb2xlYW4tZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS5tb2R1bGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2NlbGxzLWluZm8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luZ0lucHV0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5wdXQgaW1wbGVtZW50cyBJUGFnaW5nSW5wdXQge1xyXG4gICBwYWdlOiBudW1iZXI7XHJcbiAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvcnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0SW5wdXQgaW1wbGVtZW50cyBJU29ydElucHV0IHtcclxuICAgIHNvcnQ6IHN0cmluZztcclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVySXRlbSB7XHJcbiAgICBwdWJsaWMgV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBUaXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hpbGRzOiBIZWFkZXJJdGVtW107XHJcbiAgICBwdWJsaWMgU29ydGFibGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgVGVtcGxhdGU6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEhlYWRlckl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgICAgICB0aGlzLlRpdGxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5JbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5Tb3J0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5XaWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLlZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQ2hpbGRzID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuL2hlYWRlci1pdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDZWxsIHtcclxuICBwdWJsaWMgY2VsbFdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgY29sU3BhbjogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3dTcGFuOiBudW1iZXI7XHJcbiAgcHVibGljIHNvcnRhYmxlOiBhbnk7XHJcbiAgcHVibGljIHRlbXBsYXRlOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudDtcclxuICBwdWJsaWMgSGVhZGVySXRlbTogSGVhZGVySXRlbTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SGVhZGVyQ2VsbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY29sU3BhbiA9IDE7XHJcbiAgICB0aGlzLnJvd1NwYW4gPSAxO1xyXG4gICAgdGhpcy5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgSW5qZWN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblxyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmFtZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlICB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBAQXR0cmlidXRlKCduYW1lJykgcHVibGljIG5hbWUsXHJcbiAgICAgIEBJbmplY3QoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxyXG4gICkge1xyXG4gIH1cclxufSIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbixcclxuICBUZW1wbGF0ZVJlZiwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vLi4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY29sdW1uLXRlbXBsYXRlJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhcmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBzb3J0YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29sbGVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2VsbFdpZHRoOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW107XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOYW1lZFRlbXBsYXRlRGlyZWN0aXZlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOYW1lZFRlbXBsYXRlRGlyZWN0aXZlPjtcclxuXHJcbiAgcHVibGljIGhlYWRlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwdWJsaWMgYm9keTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwdWJsaWMgZmlsdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgIHRoaXMucGFyZW50ID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY2VsbFdpZHRoID0gMDtcclxuICAgIHRoaXMuc29ydGFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29sbGVjdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5vcm1hbGl6ZUluZGV4ZXModGVtcGxhdGVzOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudFtdKSB7XHJcbiAgICB0ZW1wbGF0ZXMuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4ge1xyXG4gICAgICBpZiAoZmlyc3QucGFyZW50IDwgc2Vjb25kLnBhcmVudCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LnBhcmVudCA+IHNlY29uZC5wYXJlbnQpIHsgcmV0dXJuIDE7IH1cclxuXHJcbiAgICAgIGlmIChmaXJzdC5pbmRleCA8IHNlY29uZC5pbmRleCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LmluZGV4ID4gc2Vjb25kLmluZGV4KSB7IHJldHVybiAxOyB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSkuZm9yRWFjaCgodCwgaW5kZXgpID0+IHtcclxuICAgICAgdC5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBjb25zdCBoID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2hlYWRlcicpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBoID8gaC50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGIgPSB0aGlzLnRlbXBsYXRlcy5maW5kKHQgPT4gdC5uYW1lID09PSAnYm9keScpO1xyXG4gICAgdGhpcy5ib2R5ID0gYiA/IGIudGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBmID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2ZpbHRlcicpO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmID8gZi50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5pbXBvcnQgeyBQYWdpbmdJbnB1dCB9IGZyb20gJy4uL21vZGVscy9QYWdpbmctaW5wdXQnO1xyXG5pbXBvcnQgeyBTb3J0SW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvc29ydC1pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL25neC1uYW1lZC10ZW1wbGF0ZS9uZ3gtbmFtZWQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3JkZXJEaXJlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvZW51bSc7XHJcblxyXG5pbXBvcnQgZ3VpZCBmcm9tICdhbmd1bGFyLXVpZCc7XHJcbmltcG9ydCB7IElQYWdpbmdJbnB1dCwgSVNvcnRJbnB1dCB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDZWxsc0luZm8gfSBmcm9tICcuLi9tb2RlbHMvY2VsbHMtaW5mbyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWFnaWMtdGFibGUnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAoZG9tQ2hhbmdlKT1cIm9uTWFpbkRvbUNoYW5nZSgkZXZlbnQpXCIgW25nQ2xhc3NdPVwiW2lzUlRMID8gJ3J0bCcgOiAnbHRyJ11cIj5cclxuICA8ZGl2IGlkPVwiTWFpbk1hZ2ljVGFibGVJZFwiIGNsYXNzPVwibWFpbk1hZ2ljVGFibGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nRGl2XCIgW3N0eWxlLndpZHRoLnB4XT1cInRhYmxlV2lkdGhcIj5cclxuICAgICAgPHRhYmxlIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIiBjbGFzcz1cInJ6LXRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzPVwibmd4VGhlYWRcIiBbbmdDbGFzc109XCJ0aGVhZENsYXNzXCI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNlbGxSb3cgb2YgY2VsbHNcIj5cclxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShjZWxsUm93KVwiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNlbGwuY2VsbFdpZHRoXCJcclxuICAgICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBjZWxsLnZpc2libGUgPT09ICdmYWxzZScgPyAnbm9uZScgOiAnJ31cIlxyXG4gICAgICAgICAgICAgIFthdHRyLnZpc2libGVdPVwiY2VsbC52aXNpYmxlXCIgW25hbWVdPVwiY2VsbC5uYW1lXCIgW2lkXT1cInVpZCsnLScrY2VsbC5uYW1lKyctaGVhZCdcIiBbZHJhZ2dhYmxlXT1cImNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAoZHJvcCk9XCJkcm9wKGNlbGwpXCIgKGRyYWdvdmVyKT1cImFsbG93RHJvcCgkZXZlbnQpXCIgKGRyYWdzdGFydCk9XCJkcmFnKGNlbGwpXCIgW2F0dHIuY29sc3Bhbl09XCJjZWxsLmNvbFNwYW5cIlxyXG4gICAgICAgICAgICAgIFthdHRyLnJvd3NwYW5dPVwiY2VsbC5yb3dTcGFuXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiBbYXR0ci50aXRsZV09XCJjZWxsLnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiY2VsbC5uYW1lKydyZXNpemFibGUnXCIgKG1vdXNlZG93bik9XCJyZXNpemVIYW5kbGUoY2VsbCwkZXZlbnQsJ3Rib2R5MScpXCIgY2xhc3M9XCJyei1oYW5kbGVcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGgtdGl0bGVcIiAoY2xpY2spPVwic29ydFRvZ2dsZShjZWxsKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuaGVhZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjZWxsOiBjZWxsLCBkaXJlY3Rpb246IChjZWxsLm5hbWUgPT09IHNvcnQpID8gc29ydERpcmVjdGlvbiA6IHVuZGVmaW5lZH1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNlbGwudGVtcGxhdGUuZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cImRyb3Bkb3duIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbmdiRHJvcGRvd25Ub2dnbGUgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIltjZWxsLnRlbXBsYXRlLmZpbHRlcnMubGVuZ3RoID09IDAgPyAnYnRuLWRlZmF1bHQnIDogJ2J0bi13YXJuaW5nJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIFwiIFtpZF09XCJjZWxsLm5hbWUgKyAnLScgKyB1aWQgICsgJy1maWx0ZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWx0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBbYXJpYS1sYWJlbGxlZGJ5XT1cImNlbGwubmFtZSArICctJyArIHVpZCAgKyAnLWZpbHRlcidcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5maWx0ZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NlbGw6IGNlbGwsIHJvd3M6IHJvd3N9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwicGFnaW5hdGVkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93cyB8IHNvcnQ6e2ZpZWxkOiBzb3J0LCBkaXJlY3Rpb246IHNvcnREaXJlY3Rpb24sIGFjdGl2ZTogIWN1c3RvbVNvcnR9IHwgcGFnaW5hdGU6IHtcclxuICAgICAgICBpdGVtc1BlclBhZ2U6IHBhZ2VTaXplLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICB0b3RhbEl0ZW1zOiBjdXN0b21QYWdpbmF0ZSA/IHRvdGFsQ291bnQgOiByb3dzLmxlbmd0aCxcclxuICAgICAgICBpZDogdWlkIH1cIj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpIG9mIEFycihnZXRMY20ocm93KSkuZmlsbCgxKTsgbGV0IGluID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0Um93KHJvdylcIiBbbmdDbGFzc109XCJbcm93ID09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHJvd0NsYXNzUmVuZGVyZXIocm93KV1cIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShsb3dlckNlbGxzKTsgbGV0IGxvd2VySW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiIFtzdHlsZS5taW4td2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiIFtzdHlsZS53aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoKGluKSAqIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnID8gMSA6IHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCkpICUgZ2V0TGNtKHJvdykgPT09IDBcIlxyXG4gICAgICAgICAgICAgICAgICBbYXR0ci5yb3dzcGFuXT1cImdldExjbShyb3cpIC8gKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiAhPT0gJycgPyBNYXRoLm1heChyb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgsIDEpIDogMSlcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIFthdHRyLnRpdGxlXT1cInJvd1tjZWxsLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmJvZHlcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jvdzogcm93LCBjZWxsOiBjZWxsLCBpbmRleDogKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAvIGdldExjbShyb3cpfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwiIXBhZ2luYXRlZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3MgfCBzb3J0OntmaWVsZDogc29ydCwgZGlyZWN0aW9uOiBzb3J0RGlyZWN0aW9uLCBhY3RpdmU6ICFjdXN0b21Tb3J0fVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT0gc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZENsYXNzIDogcm93Q2xhc3NSZW5kZXJlcihyb3cpXVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNlbGwgb2YgaW52ZXJzZUFycmF5KGxvd2VyQ2VsbHMpOyBsZXQgbG93ZXJJbmRleCA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgW25nU3R5bGVdPVwieydkaXNwbGF5JzogY2VsbC52aXNpYmxlID09PSAnZmFsc2UnID8gJ25vbmUnIDogJyd9XCIgW3N0eWxlLm1pbi13aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1heC13aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCIgW3N0eWxlLndpZHRoLnB4XT1cInJlc2l6ZUNlbGwoY2VsbC5jZWxsV2lkdGgsbG93ZXJJbmRleClcIlxyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIigoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgJSBnZXRMY20ocm93KSA9PT0gMFwiXHJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnJvd3NwYW5dPVwiZ2V0TGNtKHJvdykgLyAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uICE9PSAnJyA/IE1hdGgubWF4KHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCwgMSkgOiAxKVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgW2F0dHIudGl0bGVdPVwicm93W2NlbGwubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuYm9keVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiByb3csIGNlbGw6IGNlbGwsIGluZGV4OiAoKGluKSAqIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnID8gMSA6IHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCkpIC8gZ2V0TGNtKHJvdyl9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBwYWdpbmdcIiAqbmdJZj1cInBhZ2luYXRlZFwiPlxyXG4gICAgPGxpYi1uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24gY2xhc3M9XCJwYWdpbmdJbmxpbmVcIiBbYnV0dG9uTGlzdENvbHVtblN0eWxlXT1cImJ1dHRvblNhdmVUYWJsZVN0eWxlXCIgKGNoYW5nZSk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IENvbHVtbnMnXCIgW2RhdGFdPVwiZHJvcGRvd25MaXN0XCIgWyhuZ01vZGVsKV09XCJkcm9wZG93bnNlbGVjdGVkSXRlbXNcIiBbc2V0dGluZ3NdPVwiZHJvcGRvd25TZXR0aW5nc1wiXHJcbiAgICAgIChvblNlbGVjdCk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiIChvbkRlU2VsZWN0KT1cIm9uSXRlbURlU2VsZWN0KCRldmVudClcIiAob25TZWxlY3RBbGwpPVwib25TZWxlY3RBbGwoJGV2ZW50KVwiPlxyXG4gICAgPC9saWItbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2luZ0lubGluZVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDJweDsgbWFyZ2luLXJpZ2h0OiAycHhcIj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25zYXZlVGFibGUoKVwiIFtuZ0NsYXNzXT1cImJ1dHRvblNhdmVUYWJsZVN0eWxlXCIgdGl0bGU9XCJTYXZlIFRhYmxlXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mbG9wcHktb1wiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBjb250ZW50cztcIiAqbmdJZj1cInBhZ2luYXRlZCAmJiBwYWdpbmF0aW9uXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2luZ0lubGluZVwiICpuZ0lmPVwicGFnaW5hdGVkICYmICFwYWdpbmF0aW9uXCI+XHJcbiAgICAgIDxwYWdpbmF0aW9uLWNvbnRyb2xzIGNsYXNzPVwicGFnaW5nSW5saW5lXCIgKHBhZ2VDaGFuZ2UpPVwic2VsZWN0UGFnZSgkZXZlbnQpXCIgcHJldmlvdXNMYWJlbD1cIlwiIG5leHRMYWJlbD1cIlwiIFtpZF09XCJ1aWRcIj48L3BhZ2luYXRpb24tY29udHJvbHM+XHJcbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFnZVNpemVzLmxlbmd0aFwiIGNsYXNzPVwiZHJvcGRvd24gcGFnaW5nSW5saW5lXCI+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbdmFsdWVdPSdwYWdlU2l6ZScgKGNoYW5nZSk9XCJjaGFuZ2VQZXJQYWdlKCRldmVudC50YXJnZXQudmFsdWUpXCI+XHJcbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VTaXplc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2B0YWJsZSB0aGVhZCB0aHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9W2RyYWdnYWJsZT10cnVlXXsta2h0bWwtdXNlci1kcmFnOmVsZW1lbnQ7LXdlYmtpdC11c2VyLWRyYWc6ZWxlbWVudH1zZWxlY3QuYnRuLXNte3BhZGRpbmc6LjFyZW07ZGlzcGxheTppbmxpbmUtZmxleH10YWJsZXt0YWJsZS1sYXlvdXQ6Zml4ZWR9dGFibGUucnotdGFibGV7ZGlzcGxheTpibG9jazt3aWR0aDphdXRvO3RhYmxlLWxheW91dDpmaXhlZDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9dGFibGUucnotdGFibGUgdGh7cG9zaXRpb246cmVsYXRpdmU7bWluLXdpZHRoOjI1cHh9dGFibGUucnotdGFibGUgdGggLnJ6LWhhbmRsZXt3aWR0aDoycHg7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6LTJweDtjdXJzb3I6ZXctcmVzaXplIWltcG9ydGFudDtiYWNrZ3JvdW5kOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgMnB4LHJnYmEoMCwwLDAsLjE1KSAycHgscmdiYSgwLDAsMCwuMTUpIDRweCk7ei1pbmRleDo5OTk5OTk5OX10YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxlOmhvdmVye2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywjNmM3NTdkMDAsIzZjNzU3ZCAycHgsIzZjNzU3ZCAycHgsIzZjNzU3ZDAwIDRweCl9LnJ0bCB0YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxle3JpZ2h0OmF1dG87bGVmdDotMnB4fS5ydGx7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9Lmx0cntkaXJlY3Rpb246bHRyIWltcG9ydGFudH0ubWFpbk1hZ2ljVGFibGV7b3ZlcmZsb3c6YXV0bzttaW4taGVpZ2h0OjMwMHB4fS5wYWdpbmd7d2lkdGg6MTAwJTtwYWRkaW5nOjEwcHh9LnBhZGRpbmdEaXZ7cGFkZGluZzoxMHB4fS5uZ3hUaGVhZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9Lm5neFRib2R5e21heC1oZWlnaHQ6LXdlYmtpdC1maWxsLWF2YWlsYWJsZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbn0ubHRyIC5uZ3hUYm9keXtkaXJlY3Rpb246cnRsfS5ydGwgLm5neFRib2R5e2RpcmVjdGlvbjpsdHJ9Lmx0ciAubmd4VGhlYWR7ZGlyZWN0aW9uOnJ0bH0ucnRsIC5uZ3hUaGVhZHtkaXJlY3Rpb246bHRyfS50YWJsZS5yei10YWJsZSB0ZHtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgI2RlZTJlNn0udGFibGUucnotdGFibGUgdGh7cGFkZGluZzouMnJlbTt0ZXh0LWFsaWduOmNlbnRlcn0udGFibGUucnotdGFibGUgdGQ6bGFzdC1jaGlsZCwudGFibGUucnotdGFibGUgdGg6bGFzdC1jaGlsZHttaW4td2lkdGg6YXV0byFpbXBvcnRhbnR9LnRhYmxlLnJ6LXRhYmxlPnRib2R5PnRyOm50aC1vZi10eXBlKG9kZCl7YmFja2dyb3VuZC1jb2xvcjojZTVlY2YxfS50YWJsZS5yei10YWJsZT50Ym9keT50cjpudGgtb2YtdHlwZShldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmMmY5ZmV9LnNhdmV0YWJsZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4fS5sdHIgLnNhdmV0YWJsZXtyaWdodDoxMHB4fS5ydGwgLnNhdmV0YWJsZXtsZWZ0OjEwcHh9dWwubmd4LXBhZ2luYXRpb257bWFyZ2luOjB9LnJ0bCAucGFnaW5ne2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fS5sdHIgLnBhZ2luZ3tkaXJlY3Rpb246bHRyIWltcG9ydGFudH0ucGFnaW5nSW5saW5le2Rpc3BsYXk6aW5saW5lLWJsb2NrfS50aC10aXRsZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LnJ0bCAudGFibGUucnotdGFibGUgdGQsLnJ0bCAudGgtdGl0bGV7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9Lmx0ciAudGFibGUucnotdGFibGUgdGQsLmx0ciAudGgtdGl0bGV7ZGlyZWN0aW9uOmx0ciFpbXBvcnRhbnR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljVGFibGVDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50KVxyXG4gIHNldCB0ZW1wbGF0ZXModmFsdWU6IFF1ZXJ5TGlzdDxOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudD4pIHtcclxuICAgIHRoaXMudGVtcGxhdGVzQXJyYXkgPSB2YWx1ZS50b0FycmF5KCk7XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKCdwYWdpbmF0aW9uJylcclxuICBwYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gbnVsbDtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gbnVsbDtcclxuICAgIHRoaXMudGFibGVXaWR0aCA9IDIwMDtcclxuICAgIHRoaXMubWFpbldpZHRoID0gMjAwO1xyXG4gICAgdGhpcy5pc1JUTCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zY3JvbGxXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmxpc3RjZWxsc0luZm8gPSBuZXcgQXJyYXk8Q2VsbHNJbmZvPigpO1xyXG4gICAgdGhpcy5idXR0b25MaXN0Q29sdW1uU3R5bGUgPSAnYnRuIGJ0bi1vdXRsaW5lLWluZm8nO1xyXG4gICAgdGhpcy5idXR0b25TYXZlVGFibGVTdHlsZSA9ICdidG4gYnRuLW91dGxpbmUtaW5mbyc7XHJcbiAgICB0aGlzLmF1dG9TaXplID0gdHJ1ZTtcclxuICAgIHRoaXMucm93Q2xhc3NSZW5kZXJlciA9IChyb3cpID0+ICcnO1xyXG4gICAgdGhpcy5NaW5XaWR0aCA9IDgwO1xyXG4gICAgaWYgKHRoaXMucGFnZVNpemUgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnBhZ2VTaXplID0gMTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByb3dzKHJvd3M6IEFycmF5PFQ+KSB7XHJcbiAgICBpZiAoIXJvd3MpIHtcclxuICAgICAgdGhpcy5fcm93cyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcm93cyA9IHJvd3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCByb3dzKCk6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yb3dzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBhdXRvU2l6ZTogQm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgYnV0dG9uU2F2ZVRhYmxlU3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25MaXN0Q29sdW1uU3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZ2luYXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3VzdG9tU29ydDogQm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBjdXN0b21QYWdpbmF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdG90YWxDb3VudDogTnVtYmVyID0gMDtcclxuICBASW5wdXQoKVxyXG4gIHBhZ2VTaXplPzogTnVtYmVyID0gMTA7XHJcbiAgQElucHV0KClcclxuICBjdXJyZW50UGFnZTogTnVtYmVyID0gMTtcclxuICBASW5wdXQoKVxyXG4gIHBhZ2VTaXplczogbnVtYmVyW10gPSBbMTAsIDIwLCA1MCwgMTAwXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzb3J0OiBTdHJpbmcgPSAnJztcclxuICBASW5wdXQoKVxyXG4gIHNvcnREaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uQXNjZW5kaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhpZGRlbjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0ZWRDbGFzczogU3RyaW5nID0gJ3RhYmxlLXNlY29uZGFyeSc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElQYWdpbmdJbnB1dD4oKTtcclxuICBAT3V0cHV0KClcclxuICBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJU29ydElucHV0PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnaW5nSW5wdXQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNvbHVtbnNBcnJhbmdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgc2F2ZVRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxDZWxsc0luZm8+PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsb2FkVGFibGUobG9hZFRhYmxlOiBBcnJheTxDZWxsc0luZm8+KSB7XHJcbiAgICBpZiAoIWxvYWRUYWJsZSkge1xyXG4gICAgICB0aGlzLl9sb2FkVGFibGUgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRUYWJsZSA9IGxvYWRUYWJsZTtcclxuICAgICAgdGhpcy5vbkxvYWRUYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGxvYWRUYWJsZSgpOiBBcnJheTxDZWxsc0luZm8+IHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkVGFibGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KClcclxuICBpc1JUTDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvd0NsYXNzUmVuZGVyZXI6IChkYXRhOiBUKSA9PiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0YWJsZUNsYXNzOiBTdHJpbmcgPSAndGFibGUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGhlYWRDbGFzczogU3RyaW5nID0gJ3RoZWFkLWxpZ2h0JztcclxuICBASW5wdXQoKVxyXG4gIHRib2R5Q2xhc3M6IFN0cmluZyA9ICcnO1xyXG5cclxuICBkcm9wZG93bkxpc3QgPSBbXTtcclxuICBkcm9wZG93bnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICBkcm9wZG93blNldHRpbmdzID0ge307XHJcbiAgcHVibGljIGxpc3RjZWxsc0luZm86IEFycmF5PENlbGxzSW5mbz47XHJcbiAgcHVibGljIHNjcm9sbFdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHRhYmxlV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgbWFpbldpZHRoOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBfbG9hZFRhYmxlID0gQXJyYXk8Q2VsbHNJbmZvPigpO1xyXG4gIHB1YmxpYyBfcm93cyA9IEFycmF5PFQ+KCk7XHJcbiAgcHVibGljIF9yb3dzRmlsdGVyID0gQXJyYXk8VD4oKTtcclxuICBwdWJsaWMgTWF0aCA9IE1hdGg7XHJcbiAgcHVibGljIEFyciA9IEFycmF5O1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZXNBcnJheTogTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnRbXTtcclxuICBwdWJsaWMgY2VsbHM6IEFycmF5PEFycmF5PEhlYWRlckNlbGw+PiA9IG5ldyBBcnJheTxBcnJheTxIZWFkZXJDZWxsPj4oKTtcclxuICBwdWJsaWMgaGVhZDogQXJyYXk8SGVhZGVySXRlbT4gPSBuZXcgQXJyYXk8SGVhZGVySXRlbT4oKTtcclxuICBwdWJsaWMgbG93ZXJDZWxsczogQXJyYXk8SGVhZGVyQ2VsbD4gPSBuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKTtcclxuICBwdWJsaWMgZGVwdGggPSAwO1xyXG4gIHB1YmxpYyB1aWQgPSBndWlkKCk7XHJcbiAgcHVibGljIHNlbGVjdGVkUm93OiBUO1xyXG4gIHB1YmxpYyBkcmFnZ2luZ0NlbGw6IEhlYWRlckNlbGw7XHJcbiAgcHVibGljIHNvcnRJbnB1dDogU29ydElucHV0ID0gbmV3IFNvcnRJbnB1dCgpO1xyXG4gIHB1YmxpYyBwYWdpbmdJbnB1dDogUGFnaW5nSW5wdXQgPSBuZXcgUGFnaW5nSW5wdXQoKTtcclxuXHJcbiAgcGl4Y2VsWEJlZm9yZTogbnVtYmVyO1xyXG4gIHdpZHRoQmVmb3JlOiBudW1iZXI7XHJcbiAgd2lkdGhBZnRlcjogbnVtYmVyO1xyXG4gIHJlc2l6ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgdW5zdWJzY3JpYmVNb3VzZU1vdmU6ICgpID0+IHZvaWQ7XHJcbiAgdW5zdWJzY3JpYmVNb3VzZVVwOiAoKSA9PiB2b2lkO1xyXG4gIHBpeGNlbFhBZnRlcjogbnVtYmVyO1xyXG4gIE1pbldpZHRoOiBudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5vbkxvYWRUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExjbShyb3c6IGFueSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBsY20gPSB0aGlzLmxjbU9mTGlzdChcclxuICAgICAgdGhpcy5sb3dlckNlbGxzLm1hcChpID0+IHtcclxuICAgICAgICByZXR1cm4gaS50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJ1xyXG4gICAgICAgICAgPyAxXHJcbiAgICAgICAgICA6IE1hdGgubWF4KHJvd1tpLnRlbXBsYXRlLmNvbGxlY3Rpb24udG9TdHJpbmcoKV0ubGVuZ3RoLCAxKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gbGNtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdjZChhLCBiKTogbnVtYmVyIHtcclxuICAgIGlmIChiID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhOyAvLyBzbyB0aGF0IHRoZSByZWN1cnNpb24gZG9lcyBub3QgZ28gb24gZm9yZXZlclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2NkKGIsIGEgJSBiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsY21PZkxpc3QoYXJyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGQgPSB0aGlzO1xyXG4gICAgY29uc3QgdCA9IGFyci5yZWR1Y2UoKGEsIGIpID0+IGQubGNtKGEsIGIpKTtcclxuICAgIHJldHVybiB0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxjbShhLCBiKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYSAqIGIpIC8gdGhpcy5nY2QoYSwgYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWxsb3dEcm9wKHg6IGFueSkge1xyXG4gICAgeC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyb3AoeDogSGVhZGVyQ2VsbCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmdDZWxsID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZHJhZ2dpbmdDZWxsLnRlbXBsYXRlLnBhcmVudCAhPT0geC50ZW1wbGF0ZS5wYXJlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRtcCA9IHgudGVtcGxhdGUuaW5kZXg7XHJcbiAgICB4LnRlbXBsYXRlLmluZGV4ID0gdGhpcy5kcmFnZ2luZ0NlbGwudGVtcGxhdGUuaW5kZXg7XHJcbiAgICB0aGlzLmRyYWdnaW5nQ2VsbC50ZW1wbGF0ZS5pbmRleCA9IHRtcDtcclxuICAgIHRoaXMuZHJhZ2dpbmdDZWxsID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICAgIHRoaXMuY29sdW1uc0FycmFuZ2VDaGFuZ2UuZW1pdChcclxuICAgICAgdGhpcy50ZW1wbGF0ZXNBcnJheS5tYXAodCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IHQubmFtZSxcclxuICAgICAgICAgIHBhcmVudDogdC5wYXJlbnQsXHJcbiAgICAgICAgICBpbmRleDogdC5pbmRleFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYWcoeDogSGVhZGVyQ2VsbCkge1xyXG4gICAgdGhpcy5kcmFnZ2luZ0NlbGwgPSB4O1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVDZWxscygpIHtcclxuXHJcbiAgICB0aGlzLmhlYWQgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xyXG4gICAgdGhpcy50YWJsZVdpZHRoID0gdGhpcy5oZWFkLm1hcChpID0+ICtpLldpZHRoKVxyXG4gICAgICAucmVkdWNlPG51bWJlcj4oKHN1bSwgY3VycmVudCkgPT4gc3VtICsgY3VycmVudCwgMCk7XHJcbiAgICB0aGlzLmRlcHRoID0gTWF0aC5tYXgoXHJcbiAgICAgIC4uLnRoaXMuaGVhZC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVwdGgoaXRlbSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY2VsbHMgPSBbXTtcclxuICAgIHRoaXMubG93ZXJDZWxscyA9IFtdO1xyXG4gICAgdGhpcy5jcmVhdGVIZWFkZXJDZWxscyh0aGlzLmhlYWQsIDAsIHRoaXMuZGVwdGgpO1xyXG5cclxuICB9XHJcblxyXG4gIG1haW5TaXplKCk6IG51bWJlciB7XHJcbiAgICBsZXQgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWFpbk1hZ2ljVGFibGVJZCcpO1xyXG4gICAgcmV0dXJuIGh0bWxFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGF1dG9TaXplQ2VsbHMoY2xpZW50V2lkdGg6IG51bWJlcikge1xyXG4gICAgbGV0IHJvd0NvdW50ID0gMDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF07XHJcbiAgICAgIGxldCBjaGlsZHMgPSB0aGlzLnRlbXBsYXRlc0FycmF5XHJcbiAgICAgICAgLmZpbHRlcih0ID0+IHQucGFyZW50ID09PSBlbGVtZW50Lm5hbWUpO1xyXG4gICAgICBpZiAoY2hpbGRzLmxlbmd0aCA8IDEpIHtcclxuXHJcbiAgICAgICAgcm93Q291bnQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjZWxsV2lkdGggPSBjbGllbnRXaWR0aCAvIHJvd0NvdW50O1xyXG4gICAgaWYgKGNlbGxXaWR0aCA8IHRoaXMuTWluV2lkdGgpIHtcclxuICAgICAgY2VsbFdpZHRoID0gdGhpcy5NaW5XaWR0aDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF07XHJcbiAgICAgIGxldCBjaGlsZHMgPSB0aGlzLnRlbXBsYXRlc0FycmF5XHJcbiAgICAgICAgLmZpbHRlcih0ID0+IHQucGFyZW50ID09PSBlbGVtZW50Lm5hbWUpO1xyXG4gICAgICBpZiAoY2hpbGRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICBlbGVtZW50LmNlbGxXaWR0aCA9IGNlbGxXaWR0aDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XSA9IGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVIZWFkZXJzKGhlYWRlck5hbWU6IFN0cmluZyA9ICcnKTogQXJyYXk8SGVhZGVySXRlbT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcbiAgICB0aGlzLnRlbXBsYXRlc0FycmF5XHJcbiAgICAgIC5maWx0ZXIodCA9PiB0LnBhcmVudCA9PT0gaGVhZGVyTmFtZSlcclxuICAgICAgLmZpbHRlcih0ID0+IHQudmlzaWJsZSA9PT0gdHJ1ZSlcclxuICAgICAgLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IHtcclxuICAgICAgICBpZiAoZmlyc3QuaW5kZXggPiBzZWNvbmQuaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpcnN0LmluZGV4IDwgc2Vjb25kLmluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIGxldCBpdGVtOiBIZWFkZXJJdGVtO1xyXG4gICAgICAgIGl0ZW0gPSBuZXcgSGVhZGVySXRlbSgpO1xyXG4gICAgICAgIGl0ZW0uVGl0bGUgPSB0LnRpdGxlO1xyXG4gICAgICAgIGl0ZW0uSW5kZXggPSArdC5pbmRleDtcclxuICAgICAgICBpdGVtLlNvcnRhYmxlID0gdC5zb3J0YWJsZTtcclxuICAgICAgICBpdGVtLlRlbXBsYXRlID0gdDtcclxuICAgICAgICBpdGVtLlZpc2libGUgPSB0LnZpc2libGU7XHJcbiAgICAgICAgaXRlbS5DaGlsZHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycyh0Lm5hbWUpO1xyXG4gICAgICAgIGl0ZW0uV2lkdGggPSBpdGVtLkNoaWxkcy5sZW5ndGggPT09IDAgJiYgaXRlbS5WaXNpYmxlID09PSB0cnVlID8gK3QuY2VsbFdpZHRoIDogaXRlbS5DaGlsZHMubWFwKGkgPT4gK2kuV2lkdGgpXHJcbiAgICAgICAgICAucmVkdWNlPG51bWJlcj4oKHN1bSwgY3VycmVudCkgPT4gc3VtICsgY3VycmVudCwgMCk7XHJcbiAgICAgICAgaXRlbS5OYW1lID0gdC5uYW1lO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25zZWxlY3RlZEl0ZW1zLnB1c2goeyBpdGVtX2lkOiBpdGVtLkluZGV4LCBpdGVtX3RleHQ6IGl0ZW0uTmFtZSwgcGFyZW50OiBoZWFkZXJOYW1lIH0pO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUhlYWRlckNlbGxzKFxyXG4gICAgaXRlbXM6IEhlYWRlckl0ZW1bXSxcclxuICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICBkZXB0aDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5jZWxscy5sZW5ndGggPD0gbGV2ZWwpIHtcclxuICAgICAgdGhpcy5jZWxscy5wdXNoKG5ldyBBcnJheTxIZWFkZXJDZWxsPigpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuY2VsbHNbbGV2ZWxdO1xyXG4gICAgaXRlbXMuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QuSW5kZXgudmFsdWVPZigpIC0gc2Vjb25kLkluZGV4LnZhbHVlT2YoKSlcclxuICAgICAgLm1hcChoID0+IHtcclxuICAgICAgICBjb25zdCBjID0gbmV3IEhlYWRlckNlbGwoKTtcclxuICAgICAgICBjLm5hbWUgPSBoLk5hbWU7XHJcbiAgICAgICAgYy5pbmRleCA9IGguSW5kZXg7XHJcbiAgICAgICAgYy50aXRsZSA9IGguVGl0bGU7XHJcbiAgICAgICAgYy52aXNpYmxlID0gaC5WaXNpYmxlO1xyXG4gICAgICAgIGMuY2VsbFdpZHRoID0gaC5XaWR0aDtcclxuICAgICAgICBjLnNvcnRhYmxlID0gaC5Tb3J0YWJsZTtcclxuICAgICAgICBjLnRlbXBsYXRlID0gaC5UZW1wbGF0ZTtcclxuICAgICAgICBjLkhlYWRlckl0ZW0gPSBoO1xyXG4gICAgICAgIGMuY29sU3BhbiA9IHRoaXMuY291bnRIZWFkZXJzKGgpO1xyXG4gICAgICAgIGMucm93U3BhbiA9IGguQ2hpbGRzLmxlbmd0aCA+IDAgPyAxIDogZGVwdGggLSBsZXZlbDtcclxuICAgICAgICByb3cucHVzaChjKTtcclxuICAgICAgICBpZiAoaC5DaGlsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJDZWxscyhoLkNoaWxkcywgbGV2ZWwgKyAxLCBkZXB0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChoLlZpc2libGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb3dlckNlbGxzLnB1c2goYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjb3VudEhlYWRlcnMoaXRlbTogSGVhZGVySXRlbSk6IG51bWJlciB7XHJcbiAgICBpZiAoaXRlbS5DaGlsZHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlckNvdW50ID0gaXRlbS5DaGlsZHMubWFwKGNoaWxkID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudEhlYWRlcnMoY2hpbGQpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGhlYWRlckNvdW50LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgRGVwdGgoaXRlbTogSGVhZGVySXRlbSk6IG51bWJlciB7XHJcbiAgICBpZiAoaXRlbS5DaGlsZHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGRlcHRoID0gTWF0aC5tYXgoXHJcbiAgICAgICAgLi4uaXRlbS5DaGlsZHMubWFwKGNoaWxkID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLkRlcHRoKGNoaWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZGVwdGggKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0Um93KHJvdzogVCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUm93KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubG93ZXJDZWxscyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlUGVyUGFnZShwYWdlU2l6ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlU2l6ZSA9PT0gcGFnZVNpemUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmN1c3RvbVBhZ2luYXRlKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmdJbnB1dC5wYWdlID0gdGhpcy5jdXJyZW50UGFnZSBhcyBudW1iZXI7XHJcbiAgICB0aGlzLnBhZ2luZ0lucHV0LnBhZ2VTaXplID0gcGFnZVNpemU7XHJcbiAgICB0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoXHJcbiAgICAgIHRoaXMucGFnaW5nSW5wdXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSBwYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXN0b21QYWdpbmF0ZSkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmdJbnB1dC5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMucGFnaW5nSW5wdXQucGFnZVNpemUgPSB0aGlzLnBhZ2VTaXplIGFzIG51bWJlcjtcclxuXHJcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChcclxuICAgICAgdGhpcy5wYWdpbmdJbnB1dFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzb3J0VG9nZ2xlKGNlbGw6IEhlYWRlckNlbGwpIHtcclxuICAgIGlmIChjZWxsLnNvcnRhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld0RpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKHRoaXMuc29ydCA9PT0gY2VsbC5uYW1lKSB7XHJcbiAgICAgIG5ld0RpcmVjdGlvbiA9XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmdcclxuICAgICAgICAgID8gT3JkZXJEaXJlY3Rpb24uRGVzY2VuZGluZ1xyXG4gICAgICAgICAgOiBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmN1c3RvbVNvcnQpIHtcclxuICAgICAgdGhpcy5zb3J0ID0gY2VsbC5uYW1lO1xyXG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRJbnB1dC5zb3J0ID0gY2VsbC5uYW1lIGFzIHN0cmluZztcclxuICAgIHRoaXMuc29ydElucHV0LmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KFxyXG4gICAgICB0aGlzLnNvcnRJbnB1dFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uRG9tQ2hhbmdlKGVsZW1lbnQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcclxuICAgIGxldCB3aWR0aCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICB0aGlzLnNjcm9sbFdpZHRoID0gd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW52ZXJzZUFycmF5KGFycmF5OiBBcnJheTxIZWFkZXJDZWxsPik6IEFycmF5PEhlYWRlckNlbGw+IHtcclxuICAgIGxldCBpbnZlcnNlID0gbmV3IEFycmF5PEhlYWRlckNlbGw+KCk7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgaW52ZXJzZS5wdXNoKGFycmF5W2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnZlcnNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZXNpemVDZWxsKHdpZHRoOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGluZGV4ID09IHRoaXMubG93ZXJDZWxscy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCAtIHRoaXMuc2Nyb2xsV2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1TZWxlY3QoaXRlbXM6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQXJyYXlcclxuICAgICAgICAuZmluZCh0ID0+IHQuaW5kZXggPT09IGl0ZW0uaXRlbV9pZCk7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMudGVtcGxhdGVzQXJyYXkuaW5kZXhPZihpdGVtKTtcclxuICAgICAgdGVtcGxhdGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICB9XHJcbiAgb25JdGVtRGVTZWxlY3QoaXRlbXM6IGFueSkge1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICBsZXQgaXRlbSA9IGl0ZW1zLmZpbHRlcih0ID0+IHQuaXRlbV9pZCA9PT0gdGhpcy50ZW1wbGF0ZXNBcnJheVtqXS5pbmRleCk7XHJcbiAgICAgIGlmIChpdGVtLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXNBcnJheVtqXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXNBcnJheVtqXSA9IHRoaXMudGVtcGxhdGVzQXJyYXlbal07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcbiAgfVxyXG4gIG9uU2VsZWN0QWxsKGl0ZW1zOiBhbnkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaV07XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMudGVtcGxhdGVzQXJyYXkuaW5kZXhPZih0ZW1wbGF0ZSk7XHJcbiAgICAgIHRlbXBsYXRlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcbiAgfVxyXG5cclxuICBvbk1haW5Eb21DaGFuZ2UoZWxlbWVudDogRWxlbWVudFJlZik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b1NpemUpIHtcclxuICAgICAgbGV0IHdpZHRoID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICB0aGlzLmF1dG9TaXplQ2VsbHMod2lkdGgpO1xyXG4gICAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uc2F2ZVRhYmxlKCkge1xyXG4gICAgdGhpcy5saXN0Y2VsbHNJbmZvID0gbnVsbDtcclxuICAgIHRoaXMubGlzdGNlbGxzSW5mbyA9IG5ldyBBcnJheTxDZWxsc0luZm8+KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaV07XHJcbiAgICAgIHRoaXMubGlzdGNlbGxzSW5mby5wdXNoKHtcclxuICAgICAgICBpbmRleDogZWxlbWVudC5pbmRleCwgbmFtZTogZWxlbWVudC5uYW1lLCBjZWxsV2lkdGg6IGVsZW1lbnQuY2VsbFdpZHRoLFxyXG4gICAgICAgIHBhcmVudDogZWxlbWVudC5wYXJlbnQsIHNvcnRhYmxlOiBlbGVtZW50LnNvcnRhYmxlLCBkcmFnZ2JsZTogZWxlbWVudC5kcmFnZ2FibGUsIHZpc2libGU6IGVsZW1lbnQudmlzaWJsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2F2ZVRhYmxlLmVtaXQoXHJcbiAgICAgIHRoaXMubGlzdGNlbGxzSW5mb1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZFRhYmxlKCkge1xyXG4gICAgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQubm9ybWFsaXplSW5kZXhlcyh0aGlzLnRlbXBsYXRlc0FycmF5KTtcclxuICAgIHRoaXMudGVtcGxhdGVzQXJyYXkuZm9yRWFjaChpID0+XHJcbiAgICAgIGkuY2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5lcmF0ZUNlbGxzKCkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGlmICh0aGlzLmxvYWRUYWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9hZFRhYmxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxvYWRUYWJsZVtpXTtcclxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5maWx0ZXIoeCA9PiB4LmluZGV4ID09PSBlbGVtZW50LmluZGV4KTtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5pbmRleE9mKHRlbXBsYXRlWzBdKTtcclxuXHJcbiAgICAgIHRlbXBsYXRlWzBdLmNlbGxXaWR0aCA9IGVsZW1lbnQuY2VsbFdpZHRoO1xyXG4gICAgICB0ZW1wbGF0ZVswXS5zb3J0YWJsZSA9IGVsZW1lbnQuc29ydGFibGU7XHJcbiAgICAgIHRlbXBsYXRlWzBdLmRyYWdnYWJsZSA9IGVsZW1lbnQuZHJhZ2dibGU7XHJcbiAgICAgIHRlbXBsYXRlWzBdLnZpc2libGUgPSBlbGVtZW50LnZpc2libGU7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gdGVtcGxhdGVbMF07XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b1NpemUpIHtcclxuICAgICAgdGhpcy5hdXRvU2l6ZUNlbGxzKHRoaXMubWFpblNpemUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kcm9wZG93bnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgIHRoaXMuZHJvcGRvd25MaXN0ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XTtcclxuICAgICAgdGhpcy5kcm9wZG93bkxpc3QucHVzaCh7IGl0ZW1faWQ6IGVsZW1lbnQuaW5kZXgsIGl0ZW1fdGV4dDogZWxlbWVudC50aXRsZSwgcGFyZW50OiBlbGVtZW50LnBhcmVudCB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyb3Bkb3duU2V0dGluZ3MgPSB7XHJcbiAgICAgIHNpbmdsZVNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGlkRmllbGQ6ICdpdGVtX2lkJyxcclxuICAgICAgdGV4dEZpZWxkOiAnaXRlbV90ZXh0JyxcclxuICAgICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxyXG4gICAgICBpdGVtc1Nob3dMaW1pdDogMixcclxuICAgICAgYWxsb3dTZWFyY2hGaWx0ZXI6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzaXplSGFuZGxlKGNlbGw6IEhlYWRlckNlbGwsIG1FdmVudDogTW91c2VFdmVudCwgaWRUYm9keTogc3RyaW5nKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRib2R5SWQgPSBpZFRib2R5O1xyXG4gICAgY29uc3QgdGFibGVXaWR0aFRlbXAgPSB0aGlzLnRhYmxlV2lkdGg7XHJcbiAgICB0aGlzLnBpeGNlbFhCZWZvcmUgPSBtRXZlbnQueDtcclxuICAgIHRoaXMud2lkdGhCZWZvcmUgPSArY2VsbC5jZWxsV2lkdGg7XHJcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZTtcclxuICAgIGNvbnN0IHNvcnRhYmxlID0gY2VsbC50ZW1wbGF0ZS5zb3J0YWJsZTtcclxuICAgIGxldCBsYXN0SGVhZGVySXRlbSA9IGNlbGwuSGVhZGVySXRlbTtcclxuICAgIHdoaWxlIChsYXN0SGVhZGVySXRlbS5DaGlsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsYXN0SGVhZGVySXRlbSA9IGxhc3RIZWFkZXJJdGVtLkNoaWxkc1tsYXN0SGVhZGVySXRlbS5DaGlsZHMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbGxDZWxscyA9IHRoaXMuY2VsbHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNvbmNhdChiKTsgfSk7XHJcbiAgICBjb25zdCBsYXN0Q2VsbCA9IGFsbENlbGxzLmZpbHRlcih0ID0+IHQudmlzaWJsZSA9PT0gdHJ1ZSkuZmluZChpID0+IGkubmFtZSA9PT0gbGFzdEhlYWRlckl0ZW0uTmFtZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHdpZHRoTGFzdENlbGwgPSArbGFzdENlbGwuY2VsbFdpZHRoO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxyXG4gICAgICAnZG9jdW1lbnQnLFxyXG4gICAgICAnbW91c2Vtb3ZlJyxcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzTGFzdENvbHVtbk1vdXNlKSB7XHJcbiAgICAgICAgLy8gXHRyZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2VsbC50ZW1wbGF0ZS5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgICAgICBjZWxsLnRlbXBsYXRlLnNvcnRhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IFdpZHRoQWRkID0gZXZlbnQueCAtIHRoaXMucGl4Y2VsWEJlZm9yZTtcclxuICAgICAgICBpZiAodGhpcy5pc1JUTCkge1xyXG4gICAgICAgICAgV2lkdGhBZGQgPSB0aGlzLnBpeGNlbFhCZWZvcmUgLSBldmVudC54O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDZWxsLmNlbGxXaWR0aCA+PSB0aGlzLk1pbldpZHRoKSB7XHJcbiAgICAgICAgICBjZWxsLmNlbGxXaWR0aCA9IHRoaXMud2lkdGhCZWZvcmUgKyAoV2lkdGhBZGQpO1xyXG4gICAgICAgICAgbGFzdENlbGwuY2VsbFdpZHRoID0gd2lkdGhMYXN0Q2VsbCArIChXaWR0aEFkZCk7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlV2lkdGggPSB0YWJsZVdpZHRoVGVtcCArIChXaWR0aEFkZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChsYXN0Q2VsbC5jZWxsV2lkdGggPCB0aGlzLk1pbldpZHRoKSB7XHJcbiAgICAgICAgbGFzdENlbGwuY2VsbFdpZHRoID0gdGhpcy5NaW5XaWR0aDtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Q2VsbC50ZW1wbGF0ZS5jZWxsV2lkdGggPSBsYXN0Q2VsbC5jZWxsV2lkdGg7XHJcblxyXG4gICAgICBpZiAoY2VsbC5jZWxsV2lkdGggPCB0aGlzLk1pbldpZHRoKSB7XHJcbiAgICAgICAgY2VsbC5jZWxsV2lkdGggPSB0aGlzLk1pbldpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwudGVtcGxhdGUuY2VsbFdpZHRoID0gY2VsbC5jZWxsV2lkdGg7XHJcblxyXG4gICAgICBjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGRyYWdnYWJsZTtcclxuICAgICAgY2VsbC50ZW1wbGF0ZS5zb3J0YWJsZSA9IHNvcnRhYmxlO1xyXG5cclxuICAgICAgbGV0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGJvZHlJZCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsV2lkdGggPSBodG1sRWxlbWVudC5vZmZzZXRXaWR0aCAtIGh0bWxFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAodGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSkge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUoKTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZU1vdXNlVXAoKTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi8uLi9tb2RlbHMvZW51bSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzZXREaXJlY3Rpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcbiAgICBfZGlyZWN0aW9uOiBudW1iZXI7XHJcbiAgICBASW5wdXQoJ3NldERpcmVjdGlvbicpXHJcbiAgICBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaW9uLWFycm93LWRvd24tYicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaW9uLWFycm93LXVwLWInKTtcclxuICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uRGVzY2VuZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpb24tYXJyb3ctdXAtYicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFzY2VuZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpb24tYXJyb3ctZG93bi1iJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkb21DaGFuZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRG9tQ2hhbmdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNoYW5nZXM6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcblxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZG9tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmNoYW5nZXMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XHJcbiAgICAgIC8vIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuZG9tQ2hhbmdlLmVtaXQobXV0YXRpb24pKTtcclxuICAgICAgdGhpcy5kb21DaGFuZ2UuZW1pdCh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VzLm9ic2VydmUoZWxlbWVudCwge1xyXG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcblxyXG4gICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZXMuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gIGZyb20gJy4uL21vZGVscy9lbnVtJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc29ydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShyb3dzOiBhbnlbXSwgYXJnczogYW55KTogYW55W10ge1xyXG4gICAgY29uc3QgZmllbGQgPSBhcmdzLmZpZWxkO1xyXG4gICAgY29uc3QgYWN0aXZlID0gYXJncy5hY3RpdmUgfHwgdHJ1ZTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcclxuICAgICAgICByb3dzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYVtmaWVsZF0gPCBiW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3dzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYVtmaWVsZF0gPiBiW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbZmllbGRdIDwgYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgbmFtZXNwYWNlIE51bWVyaWNGaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgICAgICBncmVhdGVyVGhhbiA9ICdncmVhdGVyIHRoYW4nLFxyXG4gICAgICAgIG5vdEdyZWF0ZXJUaGFuID0gJ25vdCBncmVhdGVyIHRoYW4nLFxyXG4gICAgICAgIHNtYWxsZXJUaGFuID0gJ3NtYWxsZXIgdGhhbicsXHJcbiAgICAgICAgbm90U21hbGxlclRoYW4gPSAnbm90IHNtYWxsZXIgdGhhbidcclxuXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBOdW1lcmljRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL251bWVyaWMtZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbnVtZXJpYy1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclR5cGVcIj5cclxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBOdW1lcmljRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBOdW1lcmljRmlsdGVyID0gTnVtZXJpY0ZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogTnVtZXJpY0ZpbHRlci5maWx0ZXJzLmVxdWFscywgZmlsdGVyVmFsdWU6ICcnfSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT09ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBTdHJpbmdGaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgICAgICBzdGFydHNXaXRoID0gJ3N0YXJ0cyB3aXRoJyxcclxuICAgICAgICBub3RTdGFydHNXaXRoID0gJ25vdCBzdGFydHMgd2l0aCcsXHJcbiAgICAgICAgZW5kc1dpdGggPSAnZW5kcyB3aXRoJyxcclxuICAgICAgICBub3RFbmRzV2l0aCA9ICdub3QgZW5kcyB3aXRoJyxcclxuICAgICAgICBjb250YWlucyA9ICdjb250YWlucycsXHJcbiAgICAgICAgbm90Q29udGFpbnMgPSAnbm90IGNvbnRhaW5zJ1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgU3RyaW5nRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL3N0cmluZy1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1zdHJpbmctZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgU3RyaW5nRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgU3RyaW5nRmlsdGVyID0gU3RyaW5nRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBTdHJpbmdGaWx0ZXIuZmlsdGVycy5jb250YWlucywgZmlsdGVyVmFsdWU6ICcnfSlcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFbnVtRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgRW51bUZpbHRlciB9IGZyb20gJy4uL21vZGVscy9lbnVtLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVudW0tZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgRW51bUZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVmFsdWVcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIGl0ZW1zXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW51bUZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuICBASW5wdXQoKSBpdGVtczogYW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIEVudW1GaWx0ZXIgPSBFbnVtRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBFbnVtRmlsdGVyLmZpbHRlcnMuZXF1YWxzLCBmaWx0ZXJWYWx1ZTogJyd9KVxyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEJvb2xlYW5GaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IEJvb2xlYW5GaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvYm9vbGVhbi1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1ib29sZWFuLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgQm9vbGVhbkZpbHRlciA9IEJvb2xlYW5GaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IEJvb2xlYW5GaWx0ZXIuZmlsdGVycy5lcXVhbHMsIGZpbHRlclZhbHVlOiAnJ30pXHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTGlzdEl0ZW1Ecm9wZG93biB7XHJcbiAgICBpZDogU3RyaW5nO1xyXG4gICAgdGV4dDogU3RyaW5nO1xyXG4gICAgcGFyZW50OiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc291cmNlOiBhbnkpIHtcclxuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dCA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnBhcmVudD0nJztcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLmlkID0gc291cmNlLmlkO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHNvdXJjZS50ZXh0O1xyXG4gICAgICAgIHRoaXMucGFyZW50PXNvdXJjZS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSURyb3Bkb3duU2V0dGluZ3Mge1xyXG4gICAgc2luZ2xlU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICAgIGlkRmllbGQ/OiBzdHJpbmc7XHJcbiAgICB0ZXh0RmllbGQ/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRGaWVsZD86IHN0cmluZztcclxuICAgIGVuYWJsZUNoZWNrQWxsPzogYm9vbGVhbjtcclxuICAgIHNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgICB1blNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgICBhbGxvd1NlYXJjaEZpbHRlcj86IGJvb2xlYW47XHJcbiAgICBjbGVhclNlYXJjaEZpbHRlcj86IGJvb2xlYW47XHJcbiAgICBtYXhIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBpdGVtc1Nob3dMaW1pdD86IG51bWJlcjtcclxuICAgIGxpbWl0U2VsZWN0aW9uPzogbnVtYmVyO1xyXG4gICAgc2VhcmNoUGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xyXG4gICAgbm9EYXRhQXZhaWxhYmxlUGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xyXG4gICAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICAgIHNob3dTZWxlY3RlZEl0ZW1zQXRUb3A/OiBib29sZWFuO1xyXG4gIH0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Ecm9wZG93biwgSURyb3Bkb3duU2V0dGluZ3MgfSBmcm9tICcuLi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgRFJPUERPV05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1tdWx0aXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgPGRpdiB0YWJpbmRleD1cIj0wXCIgKGJsdXIpPVwib25Ub3VjaGVkKClcIiBjbGFzcz1cIm11bHRpc2VsZWN0LWRyb3Bkb3duXCIgKGNsaWNrT3V0c2lkZSk9XCJjbG9zZURyb3Bkb3duKClcIj5cbiAgPGRpdiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiLTFcIiBbbmdDbGFzc109XCJidXR0b25MaXN0Q29sdW1uU3R5bGVcIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSA8c3BhbiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJkcm9wZG93bi1idG5cIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KVwiPiAtLT5cbiAgICA8IS0tIDxzcGFuPnt7X3BsYWNlaG9sZGVyfX08L3NwYW4+IC0tPlxuICAgIDwhLS0gPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiPjwvaT4gLS0+XG4gICAgPCEtLSAqbmdJZj1cInNlbGVjdGVkSXRlbXMubGVuZ3RoID09IDBcIiAtLT5cblxuICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VsZWN0ZWRJdGVtczt0cmFja0J5OiB0cmFja0J5Rm47bGV0IGsgPSBpbmRleFwiIFtoaWRkZW5dPVwiayA+IF9zZXR0aW5ncy5pdGVtc1Nob3dMaW1pdC0xXCI+XG4gICAgICAgICAge3tpdGVtLnRleHR9fVxuICAgICAgICAgIDxhIHN0eWxlPVwicGFkZGluZy10b3A6MnB4O3BhZGRpbmctbGVmdDoycHg7Y29sb3I6d2hpdGVcIiAoY2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LGl0ZW0pXCI+eDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0ICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDo0cHhcIj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDZweDtcIiAqbmdJZj1cIml0ZW1TaG93UmVtYWluaW5nKCk+MFwiPit7e2l0ZW1TaG93UmVtYWluaW5nKCl9fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJpc0Ryb3Bkb3duT3BlbiA/ICdkcm9wZG93bi11cCcgOiAnZHJvcGRvd24tZG93bidcIj48L3NwYW4+XG4gICAgICAgIDwvc3Bhbj4gLS0+XG4gICAgPCEtLSA8L3NwYW4+IC0tPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBbaGlkZGVuXT1cIiFpc0Ryb3Bkb3duT3BlblwiPlxuICAgIDx1bCBjbGFzcz1cIml0ZW0xXCI+XG4gICAgICA8bGkgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdEFsbCgpXCIgKm5nSWY9XCJfZGF0YS5sZW5ndGggPiAwICYmICFfc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIF9zZXR0aW5ncy5lbmFibGVDaGVja0FsbCAmJiBfc2V0dGluZ3MubGltaXRTZWxlY3Rpb249PT0tMVwiXG4gICAgICAgIGNsYXNzPVwibXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveFwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7cGFkZGluZzoxMHB4XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJpc0FsbEl0ZW1zU2VsZWN0ZWQoKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBpc0xpbWl0U2VsZWN0aW9uUmVhY2hlZCgpXCIgLz5cbiAgICAgICAgPGRpdj57eyBfc2V0dGluZ3Muc2VsZWN0QWxsVGV4dH19PC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiZmlsdGVyLXRleHRib3hcIiAqbmdJZj1cIl9kYXRhLmxlbmd0aD4wICYmIF9zZXR0aW5ncy5hbGxvd1NlYXJjaEZpbHRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVhZE9ubHldPVwiZGlzYWJsZWRcIiBbcGxhY2Vob2xkZXJdPVwiX3NldHRpbmdzLnNlYXJjaFBsYWNlaG9sZGVyVGV4dFwiIFsobmdNb2RlbCldPVwiZmlsdGVyLnRleHRcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGV4dENoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzPVwiaXRlbTJcIiBbc3R5bGUubWF4SGVpZ2h0XT1cIl9zZXR0aW5ncy5tYXhIZWlnaHQrJ3B4J1wiPlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9kYXRhIHwgbmcyTGlzdEZpbHRlcjpmaWx0ZXI7IGxldCBpID0gaW5kZXg7XCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxpdGVtKVwiIGNsYXNzPVwibXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZChpdGVtKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCAoaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKSAmJiAhaXNTZWxlY3RlZChpdGVtKSlcIiAvPlxuICAgICAgICA8ZGl2Pnt7aXRlbS50ZXh0fX08L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9J25vLWRhdGEnICpuZ0lmPVwiX2RhdGEubGVuZ3RoID09IDBcIj5cbiAgICAgICAgPGg1Pnt7X3NldHRpbmdzLm5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dH19PC9oNT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm11bHRpc2VsZWN0LWRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG57ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjYWRhZGFkO3dpZHRoOjEwMCU7cGFkZGluZzo2cHggMTJweDttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNTI4NTcxNDM7dGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyLXJhZGl1czo0cHh9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjMzM3YWI3O21hcmdpbi1yaWdodDo0cHg7YmFja2dyb3VuZDojMzM3YWI3O3BhZGRpbmc6MCA1cHg7Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtmbG9hdDpsZWZ0fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW06aG92ZXJ7Ym94LXNoYWRvdzoxcHggMXB4ICM5NTk1OTV9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd257ZGlzcGxheTppbmxpbmUtYmxvY2s7dG9wOjEwcHg7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjEwcHggc29saWQgI2FkYWRhZDtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDowO2hlaWdodDowO2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjYWRhZGFkO2JvcmRlci1sZWZ0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjEwcHggc29saWQgdHJhbnNwYXJlbnR9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kaXNhYmxlZD5zcGFue2JhY2tncm91bmQtY29sb3I6I2VjZWVlZn0uZHJvcGRvd24tbGlzdHtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nLXRvcDo2cHg7d2lkdGg6LXdlYmtpdC1tYXgtY29udGVudDt3aWR0aDotbW96LW1heC1jb250ZW50O3dpZHRoOm1heC1jb250ZW50O2JvdHRvbTozMHB4O3BhZGRpbmctYm90dG9tOjVweDttYXJnaW4tYm90dG9tOjEwcHg7ei1pbmRleDo5OTk5O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6MCAxcHggNXB4ICM5NTk1OTV9LmRyb3Bkb3duLWxpc3QgdWx7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZTtvdmVyZmxvdzphdXRvO21hcmdpbjowfS5kcm9wZG93bi1saXN0IGxpe3BhZGRpbmc6NnB4IDEwcHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpsZWZ0fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTBweH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3ggaW5wdXR7Ym9yZGVyOjA7d2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAwIDI2cHh9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94IGlucHV0OmZvY3Vze291dGxpbmU6MH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XXtib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cytkaXY6YmVmb3JlLC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmhvdmVyK2RpdjpiZWZvcmV7Ym9yZGVyLWNvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmFjdGl2ZStkaXY6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246MHN9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0rZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctbGVmdDoyZW07dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjdXJzb3I6cG9pbnRlcjttYXJnaW46MDtjb2xvcjojMDAwfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdjpiZWZvcmV7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OicnO2NvbG9yOiMzMzdhYjc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjA7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDttYXJnaW4tdG9wOi05cHg7Ym9yZGVyOjJweCBzb2xpZCAjMzM3YWI3O3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246YWxsIC40cyBlYXNlfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdjphZnRlcntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0b3A6NTAlO2xlZnQ6NHB4O3dpZHRoOjhweDtoZWlnaHQ6M3B4O21hcmdpbi10b3A6LTRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOiNmZmY7Ym9yZGVyLXdpZHRoOjAgMCAzcHggM3B4Oy1vLWJvcmRlci1pbWFnZTpub25lO2JvcmRlci1pbWFnZTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZCtkaXY6YmVmb3Jle2JvcmRlci1jb2xvcjojY2NjfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmZvY3VzK2RpdjpiZWZvcmUgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6aG92ZXIrZGl2OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6Y2hlY2tlZCtkaXY6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2NjY30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdjphZnRlcntjb250ZW50OicnO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb246LjJzIGVhc2UtaW4gYm9yZGVyc2NhbGU7YW5pbWF0aW9uOi4ycyBlYXNlLWluIGJvcmRlcnNjYWxlO2JhY2tncm91bmQ6IzMzN2FiN31ALXdlYmtpdC1rZXlmcmFtZXMgYm9yZGVyc2NhbGV7NTAle2JveC1zaGFkb3c6MCAwIDAgMnB4ICMzMzdhYjd9fUBrZXlmcmFtZXMgYm9yZGVyc2NhbGV7NTAle2JveC1zaGFkb3c6MCAwIDAgMnB4ICMzMzdhYjd9fWBdLFxuICBwcm92aWRlcnM6IFtEUk9QRE9XTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBfZGF0YTogQXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4gPSBbXTtcbiAgc2VsZWN0ZWRJdGVtczogQXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4gPSBbXTtcbiAgaXNEcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgX3NldHRpbmdzOiBJRHJvcGRvd25TZXR0aW5ncztcbiAgX3BsYWNlaG9sZGVyID0gJ1NlbGVjdCc7XG4gIGZpbHRlcjogTGlzdEl0ZW1Ecm9wZG93biA9IG5ldyBMaXN0SXRlbURyb3Bkb3duKHRoaXMuZGF0YSk7XG5cbiAgZGVmYXVsdFNldHRpbmdzOiBJRHJvcGRvd25TZXR0aW5ncyA9IHtcbiAgICBzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxuICAgIGlkRmllbGQ6ICdpZCcsXG4gICAgdGV4dEZpZWxkOiAndGV4dCcsXG4gICAgcGFyZW50RmllbGQ6ICdwYXJlbnQnLFxuICAgIGVuYWJsZUNoZWNrQWxsOiB0cnVlLFxuICAgIHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcbiAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxuICAgIGFsbG93U2VhcmNoRmlsdGVyOiBmYWxzZSxcbiAgICBsaW1pdFNlbGVjdGlvbjogLTEsXG4gICAgY2xlYXJTZWFyY2hGaWx0ZXI6IHRydWUsXG4gICAgbWF4SGVpZ2h0OiAxOTcsXG4gICAgaXRlbXNTaG93TGltaXQ6IDk5OTk5OTk5OTk5OSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxuICAgIG5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dDogJ05vIGRhdGEgYXZhaWxhYmxlJyxcbiAgICBjbG9zZURyb3BEb3duT25TZWxlY3Rpb246IGZhbHNlLFxuICAgIHNob3dTZWxlY3RlZEl0ZW1zQXRUb3A6IGZhbHNlXG4gIH07XG5cbiAgQE91dHB1dCgnb25GaWx0ZXJDaGFuZ2UnKSBvbkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPExpc3RJdGVtRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ29uU2VsZWN0Jykgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbURyb3Bkb3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG4gIEBPdXRwdXQoJ29uRGVTZWxlY3QnKSBvbkRlU2VsZWN0OiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBAT3V0cHV0KCdvblNlbGVjdEFsbCcpIG9uU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBAT3V0cHV0KCdvbkRlU2VsZWN0QWxsJykgb25EZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICBASW5wdXQoKSBidXR0b25MaXN0Q29sdW1uU3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlciA9ICdTZWxlY3QnO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNldHRpbmdzKHZhbHVlOiBJRHJvcGRvd25TZXR0aW5ncykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdFNldHRpbmdzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRTZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkYXRhKHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zdCBfaXRlbXMgPSB2YWx1ZS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgLy8gICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAmJiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdICYmIGl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSkpIHtcbiAgICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG4gICAgICB0aGlzLl9kYXRhID0gdmFsdWUubWFwKFxuICAgICAgICAoaXRlbTogYW55KSA9PlxuICAgICAgICAgIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBuZXcgTGlzdEl0ZW1Ecm9wZG93bihpdGVtKVxuICAgICAgICAgICAgOiBuZXcgTGlzdEl0ZW1Ecm9wZG93bih7XG4gICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxuICAgICAgICAgICAgICB0ZXh0OiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0sXG4gICAgICAgICAgICAgIHBhcmVudDogaXRlbVt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF1cbiAgICAgICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG5cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBvYmoubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvYmoubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IG9ialswXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtcbiAgICAgICAgICAgICAgdHlwZW9mIGZpcnN0SXRlbSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IG5ldyBMaXN0SXRlbURyb3Bkb3duKGZpcnN0SXRlbSlcbiAgICAgICAgICAgICAgICA6IG5ldyBMaXN0SXRlbURyb3Bkb3duKHtcbiAgICAgICAgICAgICAgICAgIGlkOiBmaXJzdEl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBmaXJzdEl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSxcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLnBhcmVudEZpZWxkXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZS5ib2R5Lm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gb2JqLm1hcChcbiAgICAgICAgICAoaXRlbTogYW55KSA9PlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gbmV3IExpc3RJdGVtRHJvcGRvd24oaXRlbSlcbiAgICAgICAgICAgICAgOiBuZXcgTGlzdEl0ZW1Ecm9wZG93bih7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0sXG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaXRlbVt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IF9kYXRhLnNwbGljZSgwLCB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gX2RhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayhvYmopO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgLy8gc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAvLyB9XG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5idXR0b25MaXN0Q29sdW1uU3R5bGUgPSBcImJ0biBidG4tb3V0bGluZS1pbmZvXCI7XG4gIH1cblxuICBzaG93QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuX3NldHRpbmdzLmVuYWJsZUNoZWNrQWxsID0gdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPT09IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7IC8vICF0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24gJiYgdGhpcy5fc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgdGhpcy5fZGF0YS5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaG91bGQgYmUgZGlzYWJsZWQgaW4gc2luZ2xlIHNlbGVjdGlvbiBtb2RlXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXRlbVNob3dSZW1haW5pbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIHRoaXMuX3NldHRpbmdzLml0ZW1zU2hvd0xpbWl0O1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgcHVibGljIG9uVG91Y2hlZCgpIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKCkge1xuICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAvLyBjbGVhciBzZWFyY2ggdGV4dFxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5jbGVhclNlYXJjaEZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXIudGV4dCA9ICcnO1xuICAgIH1cbiAgfVxuICB0b2dnbGVEcm9wZG93bihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc0Ryb3Bkb3duT3BlbiA9ICF0aGlzLmlzRHJvcGRvd25PcGVuO1xuICB9XG5cbiAgdG9nZ2xlU2VsZWN0QWxsKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0FsbEl0ZW1zU2VsZWN0ZWQoKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5fZGF0YS5zbGljZSgpO1xuICAgICAgdGhpcy5vblNlbGVjdEFsbC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgIC8vIHRoaXMub25EZVNlbGVjdEFsbC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gIH1cblxuICBpc0FsbEl0ZW1zU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICB9XG5cblxuICBlbWl0dGVkVmFsdWUodmFsOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLm1hcChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW0udGV4dCkge1xuICAgICAgICAgIHNlbGVjdGVkLnB1c2goaXRlbS50ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKHRoaXMub2JqZWN0aWZ5KGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgaWYgKHZhbC5pZCA9PT0gdmFsLnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gdmFsLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0aWZ5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgb2JqZWN0aWZ5KHZhbDogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIG9ialt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSA9IHZhbC5pZDtcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSA9IHZhbC50ZXh0O1xuICAgIG9ialt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF0gPSB2YWwucGFyZW50O1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpc0xpbWl0U2VsZWN0aW9uUmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gIH1cbiAgb25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudCkge1xuICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UuZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgb25JdGVtQ2xpY2soJGV2ZW50OiBhbnksIGl0ZW06IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuaXNTZWxlY3RlZChpdGVtKTtcbiAgICBjb25zdCBhbGxvd0FkZCA9IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSB8fCAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPCB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaWYgKGFsbG93QWRkKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZWN0ZWQoaXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoaXRlbSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24gJiYgdGhpcy5fc2V0dGluZ3MuY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBhZGRTZWxlY3RlZChpdGVtOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcmVudEl0ZW0gPSB0aGlzLl9kYXRhLmZpbHRlcih4ID0+IHgudGV4dCA9PT0gaXRlbS5wYXJlbnQpO1xuICAgICAgdmFyIHBhcmVudEl0ZW1zZWxldGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcih4ID0+IHgudGV4dCA9PT0gaXRlbS5wYXJlbnQpO1xuICAgICAgaWYgKHBhcmVudEl0ZW0ubGVuZ3RoID4gMCAmJiBwYXJlbnRJdGVtc2VsZXRlZC5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChwYXJlbnRJdGVtWzBdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkSXRlbSA9IHRoaXMuX2RhdGEuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0udGV4dCk7XG4gICAgICB2YXIgY2hpbGRJdGVtc2VsZXRlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS50ZXh0KTtcbiAgICAgIGlmIChjaGlsZEl0ZW0ubGVuZ3RoID4gMCAmJiBjaGlsZEl0ZW1zZWxldGVkLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGNoaWxkSXRlbVswXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0ZWQoaXRlbVNlbDogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtU2VsLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS5wYXJlbnQpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCA9PT0gaXRlbS50ZXh0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZHNbaW5kZXhdO1xuICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoZWxlbWVudCkgIT09IC0xICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbGV0IGRlU2VsZWN0ZWRJdGVtcyA9IEFycmF5PExpc3RJdGVtRHJvcGRvd24+KCk7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gIGlmKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHRoaXMuX2RhdGFbaV0pID09PSAtMSlcbiAgICAvLyAge1xuICAgIC8vICAgZGVTZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5fZGF0YVtpXSk7XG4gICAgLy8gIH1cblxuICAgIC8vIH1cblxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB0aGlzLm9uRGVTZWxlY3QuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoY2xpY2tlZEl0ZW06IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChjbGlja2VkSXRlbS5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExpc3RJdGVtRHJvcGRvd24gfSBmcm9tICcuLi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICduZzJMaXN0RmlsdGVyJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBMaXN0SXRlbURyb3Bkb3duW10sIGZpbHRlcjogTGlzdEl0ZW1Ecm9wZG93bik6IExpc3RJdGVtRHJvcGRvd25bXSB7XHJcbiAgICAgICAgaWYgKCFpdGVtcyB8fCAhZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogTGlzdEl0ZW1Ecm9wZG93bikgPT4gdGhpcy5hcHBseUZpbHRlcihpdGVtLCBmaWx0ZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcihpdGVtOiBMaXN0SXRlbURyb3Bkb3duLCBmaWx0ZXI6IExpc3RJdGVtRHJvcGRvd24pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIShmaWx0ZXIudGV4dCAmJiBpdGVtLnRleHQgJiYgaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudGV4dC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIERpcmVjdGl2ZSwgQ29tcG9uZW50LCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neE1hZ2ljVGFibGVDb21wb25lbnR9IGZyb20gJy4vbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25EaXJlY3RpdmV9IGZyb20gJy4vbmd4LW1hZ2ljLXRhYmxlL25neC1kaXJlY3Rpb24tY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERvbUNoYW5nZURpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtbWFnaWMtdGFibGUvbmd4LW1hZ2ljLXRhYmxlLWNoYW5nZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNvcnRQaXBlIH0gZnJvbSAnLi9zb3J0L3NvcnQucGlwZSc7XHJcbmltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW51bWVyaWMtZmlsdGVyL25neC1udW1lcmljLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1zdHJpbmctZmlsdGVyL25neC1zdHJpbmctZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEVudW1GaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWJvb2xlYW4tZmlsdGVyL25neC1ib29sZWFuLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge05nYk1vZHVsZX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0RmlsdGVyUGlwZSB9IGZyb20gJy4vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbi8vIGltcG9ydCB7IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5nYk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4TWFnaWNUYWJsZUNvbXBvbmVudCxcclxuICAgIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBTb3J0UGlwZSxcclxuICAgIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50LFxyXG4gICAgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neEVudW1GaWx0ZXJDb21wb25lbnQsXHJcbiAgICBEaXJlY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBEb21DaGFuZ2VEaXJlY3RpdmUsXHJcbiAgICBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCxcclxuICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuICAgIExpc3RGaWx0ZXJQaXBlXSxcclxuXHJcbiAgZXhwb3J0czogW05neE1hZ2ljVGFibGVDb21wb25lbnQsXHJcbiAgICBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCxcclxuICAgIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBEaXJlY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBEb21DaGFuZ2VEaXJlY3RpdmUsXHJcbiAgICBOZ3hOdW1lcmljRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50XSxcclxuXHJcbiAgc2NoZW1hczogWyBOT19FUlJPUlNfU0NIRU1BIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljVGFibGVNb2R1bGUgeyB9XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB7XHJcbi8vICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBuZ01vZHVsZTogTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudFxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vIH1cclxuIiwiZXhwb3J0IGNsYXNzIENlbGxzSW5mbyAge1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNlbGxXaWR0aDogbnVtYmVyO1xyXG4gICAgZHJhZ2dibGU6IGJvb2xlYW47XHJcbiAgICBzb3J0YWJsZTogYm9vbGVhbjtcclxuICAgIHBhcmVudDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFBOzs7c0JBREE7SUFJQyxDQUFBOzs7Ozs7QUNERCxJQUFBOzs7b0JBSEE7SUFPQyxDQUFBOzs7Ozs7QUNMRCxJQUFBO3dCQVN1QixJQUEwQjtRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQzs7cUJBbEI5QztJQXFCQyxDQUFBOzs7Ozs7QUNsQkQsSUFBQTt3QkFXcUIsSUFBMEI7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FB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

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

module.exports = "<div class=\"container\" style=\" width:100%; height: 400px;\">\r\n\r\n  <ngx-magic-table [isRTL]=\"true\" [rows]=\"data\" buttonListColumnStyle=\"btn btn-outline-info\" buttonSaveTableStyle=\"btn btn-outline-info\"\r\n    [customSort]=\"false\" sort=\"Phone\" [sortDirection]=\"0\" [paginated]=\"true\" [pageSize]=\"3\" [customPaginate]=\"false\"\r\n    [currentPage]=\"2\" [pageSizes]=\"[3, 5, 20, 50, 100]\" (pageSizesChange)=\"pageSizesChange($event)\" (pageChange)=\"pageChange($event)\"\r\n    (selectedChange)=\"selectChanged($event)\" selectedClass=\"table-secondary\"\r\n    [autoSize]=\"true\" (saveTable)=\"saveTable($event)\" [loadTable]=\"\" [rowClassRenderer]=\"getRowClass\" (columnsArrangeChange)=\"columnsArrangeChange($event)\">\r\n\r\n    <ngx-column-template [visible]=\"true\" name=\"Numbers\" index=\"1\" [sortable]=\"false\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}} </ng-template> -->\r\n\r\n      <!-- <ng-template let-rows=\"rows\" let-cell=\"cell\" name=\"filter\">\r\n                <ngx-string-filter [rows]=\"rows\" [cell]=\"cell\" (filterChange)=\"logAll($event)\"></ngx-string-filter>\r\n            </ng-template> -->\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Phone\" parent=\"Numbers\" title=\"Phone\" index=\"2\" [visible]=\"true\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">تلفن همراه\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\" >{{row.Phone}}</ng-template>\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Id\" parent=\"Numbers\" index=\"1\"  title=\"Id\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">\r\n        {{row.Id}}\r\n      </ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Type\" parent=\"Numbers\" title=\"Type\"  collection=\"Type\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Type[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Size\" parent=\"Numbers\" title=\"Size\" collection=\"Size\" index=\"1\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Size[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" title=\"Name\" [draggable]=\"false\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n  </ngx-magic-table>\r\n\r\n</div>\r\n"

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