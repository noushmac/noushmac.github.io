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
        this.cellWidth = 100;
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
        var _loop_2 = function (i) {
            var /** @type {?} */ item = items[i];
            var /** @type {?} */ template = this_2.templatesArray
                .find(function (t) { return t.index === item.item_id; });
            var /** @type {?} */ index = this_2.templatesArray.indexOf(item);
            template.visible = true;
            this_2.templatesArray[index] = template;
        };
        var this_2 = this;
        for (var /** @type {?} */ i = 0; i < items.length; i++) {
            _loop_2(i);
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
        var _loop_3 = function (j) {
            var /** @type {?} */ item = items.filter(function (t) { return t.item_id === _this.templatesArray[j].index; });
            if (item.length <= 0) {
                this_3.templatesArray[j].visible = false;
                this_3.templatesArray[j] = this_3.templatesArray[j];
            }
        };
        var this_3 = this;
        for (var /** @type {?} */ j = 0; j < this.templatesArray.length; j++) {
            _loop_3(j);
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
            var /** @type {?} */ element_3 = this.templatesArray[i];
            this.listcellsInfo.push({ index: element_3.index, name: element_3.name, cellWidth: element_3.cellWidth, parent: element_3.parent, sortable: element_3.sortable, draggble: element_3.draggable, visible: element_3.visible });
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
                    template: "<div [ngClass]=\"[isRTL ? 'rtl' : 'ltr']\">\n  <div class=\"main\">\n    <div class=\"paddingDiv\" [style.width.px]=\"tableWidth\">\n      <table [ngClass]=\"tableClass\" class=\"rz-table\">\n        <thead class=\"ngxThead\" [ngClass]=\"theadClass\">\n          <tr *ngFor=\"let cellRow of cells\">\n            <th *ngFor=\"let cell of cellRow\" [style.width.px]=\"cell.cellWidth\" [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\"\n              [attr.visible]=\"cell.visible\" [name]=\"cell.name\" [id]=\"uid+'-'+cell.name+'-head'\" [draggable]=\"cell.template.draggable\"\n              (drop)=\"drop(cell)\" (dragover)=\"allowDrop($event)\" (dragstart)=\"drag(cell)\" [attr.colspan]=\"cell.colSpan\"\n              [attr.rowspan]=\"cell.rowSpan\">\n              <div [id]=\"cell.name+'resizable'\" (mousedown)=\"resizeHandle(cell,$event,'tbody1')\" class=\"rz-handle\">\n              </div>\n              <div (click)=\"sortToggle(cell)\">\n                <ng-template [ngTemplateOutlet]=\"cell.template.header\" [ngTemplateOutletContext]=\"{cell: cell, direction: (cell.name === sort) ? sortDirection : undefined}\">\n                </ng-template>\n              </div>\n              <ng-container *ngIf=\"cell.template.filter\">\n                <div ngbDropdown (click)=\"$event.stopPropagation()\" class=\"dropdown float-right\">\n                  <button ngbDropdownToggle type=\"button\" [ngClass]=\"[cell.template.filters.length == 0 ? 'btn-default' : 'btn-warning']\"\n                    class=\"btn \" [id]=\"cell.name + '-' + uid  + '-filter'\">\n                    <i class=\"fa fa-filter\"></i>\n                  </button>\n                  <div ngbDropdownMenu [aria-labelledby]=\"cell.name + '-' + uid  + '-filter'\" class=\"dropdown-menu\"\n                    (click)=\"$event.stopPropagation()\">\n                    <div class=\"container\">\n                      <ng-template [ngTemplateOutlet]=\"cell.template.filter\" [ngTemplateOutletContext]=\"{cell: cell, rows: rows}\"></ng-template>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </th>\n          </tr>\n        </thead>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort} | paginate: {\n        itemsPerPage: pageSize,\n        currentPage: currentPage,\n        totalItems: customPaginate ? totalCount : rows.length,\n        id: uid }\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row === selectedRow ? selectedClass : trowClass]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [ngClass]=\"tcellClass\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tbody id=\"tbody1\" (domChange)=\"onDomChange($event)\" class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"!paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort}\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row === selectedRow ? selectedClass : trowClass ]\">\n              <ng-container *ngFor=\"let cell of inverseArray(lowerCells); let lowerIndex = index\">\n                <td [ngStyle]=\"{'display': cell.visible === 'false' ? 'none' : ''}\" [style.width.px]=\"resizeCell(cell.cellWidth,lowerIndex)\"\n                  [ngClass]=\"tcellClass\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"btn-group paging\" *ngIf=\"paginated\">\n    <lib-ngx-multiselect-dropdown [buttonListColumnStyle]=\"buttonSaveTableStyle\" (change)=\"onItemSelect($event)\"\n      [placeholder]=\"'Select Columns'\" [data]=\"dropdownList\" [(ngModel)]=\"dropdownselectedItems\" [settings]=\"dropdownSettings\"\n      (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"onItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n    </lib-ngx-multiselect-dropdown>\n    <div style=\"margin-left: 2px; margin-right: 2px\">\n      <button (click)=\"SaveTable()\" [ngClass]=\"buttonSaveTableStyle\" title=\"Save Table\">\n        <i class=\"fa fa-floppy-o\"></i>\n      </button>\n    </div>\n    <pagination-controls (pageChange)=\"selectPage($event)\" previousLabel=\"\" nextLabel=\"\" [id]=\"uid\"></pagination-controls>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <div *ngIf=\"pageSizes.length\" class=\"dropdown\">\n      <select class=\"btn btn-secondary btn-sm dropdown-toggle\" [value]='pageSize' (change)=\"changePerPage($event.target.value)\">\n        <option *ngFor=\"let p of pageSizes\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n      </select>\n    </div>\n  </div>\n\n</div>",
                    styles: ["table thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[draggable=true]{-khtml-user-drag:element;-webkit-user-drag:element}select.btn-sm{padding:.1rem;display:inline-flex}table{table-layout:fixed}table.rz-table{display:block;width:auto;table-layout:fixed;border-collapse:collapse}table.rz-table th{position:relative;min-width:25px}table.rz-table th .rz-handle{width:2px;height:100%;position:absolute;top:0;right:-2px;cursor:ew-resize!important;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px)}table.rz-table th .rz-handle:hover{background:repeating-linear-gradient(45deg,#6c757d00,#6c757d 2px,#6c757d 2px,#6c757d00 4px)}.rtl table.rz-table th .rz-handle{right:auto;left:-2px}.rtl{direction:rtl!important}.ltr{direction:ltr!important}.main{overflow:auto}.paging{width:100%;padding-left:10px;padding-right:10px;padding-bottom:10px}.paddingDiv{padding:10px}.ngxThead{display:block;width:100%;border-collapse:separate;border-spacing:2px 0;background-color:#e9ecef}.ngxTbody{height:-webkit-fill-available;display:block;overflow-y:auto;overflow-x:hidden}.ltr .ngxTbody{direction:rtl}.rtl .ngxTbody{direction:ltr}.table td,.table th{word-break:break-all}.table td{border:1px solid #797b7e}.savetable{position:absolute;top:5px}.ltr .savetable{right:10px}.rtl .savetable{left:10px}ul.ngx-pagination{margin:0}.rtl .table td{padding-left:0}.ltr .table td{padding-right:0}"]
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9QYWdpbmctaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL3NvcnQtaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2hlYWRlci1pdGVtLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL3NvcnQvc29ydC5waXBlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9udW1lcmljLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbnVtZXJpYy1maWx0ZXIvbmd4LW51bWVyaWMtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvc3RyaW5nLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2VudW0tZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1lbnVtLWZpbHRlci9uZ3gtZW51bS1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9ib29sZWFuLWZpbHRlci50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtYm9vbGVhbi1maWx0ZXIvbmd4LWJvb2xlYW4tZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvbXVsdGlzZWxlY3QubW9kZWwudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2xpc3QtZmlsdGVyLnBpcGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luZ0lucHV0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5wdXQgaW1wbGVtZW50cyBJUGFnaW5nSW5wdXQge1xyXG4gICBwYWdlOiBudW1iZXI7XHJcbiAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvcnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0SW5wdXQgaW1wbGVtZW50cyBJU29ydElucHV0IHtcclxuICAgIHNvcnQ6IHN0cmluZztcclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJJdGVtIHtcclxuICAgIHB1YmxpYyBXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBDaGlsZHM6IEhlYWRlckl0ZW1bXTtcclxuICAgIHB1YmxpYyBTb3J0YWJsZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBUZW1wbGF0ZTogTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SGVhZGVySXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgICAgIHRoaXMuVGl0bGUgPSAnJztcclxuICAgICAgICB0aGlzLkluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLlNvcnRhYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLldpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5DaGlsZHMgPSBuZXcgQXJyYXk8SGVhZGVySXRlbT4oKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVySXRlbSB9IGZyb20gJy4vaGVhZGVyLWl0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNlbGwge1xyXG4gIHB1YmxpYyBjZWxsV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBjb2xTcGFuOiBudW1iZXI7XHJcbiAgcHVibGljIHJvd1NwYW46IG51bWJlcjtcclxuICBwdWJsaWMgc29ydGFibGU6IGFueTtcclxuICBwdWJsaWMgdGVtcGxhdGU6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBIZWFkZXJJdGVtOiBIZWFkZXJJdGVtO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxIZWFkZXJDZWxsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy5jb2xTcGFuID0gMTtcclxuICAgIHRoaXMucm93U3BhbiA9IDE7XHJcbiAgICB0aGlzLnNvcnRhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgQXR0cmlidXRlLCBJbmplY3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHJcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuYW1lXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUgIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIEBBdHRyaWJ1dGUoJ25hbWUnKSBwdWJsaWMgbmFtZSxcclxuICAgICAgQEluamVjdChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XHJcbiAgKSB7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLFxyXG4gIFRlbXBsYXRlUmVmLCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi8uLi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1jb2x1bW4tdGVtcGxhdGUnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFyZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb2xsZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjZWxsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXTtcclxuICBAQ29udGVudENoaWxkcmVuKE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUpIHRlbXBsYXRlczogUXVlcnlMaXN0PE5hbWVkVGVtcGxhdGVEaXJlY3RpdmU+O1xyXG5cclxuICBwdWJsaWMgaGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHB1YmxpYyBib2R5OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHB1YmxpYyBmaWx0ZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgdGhpcy5wYXJlbnQgPSAnJztcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy5jZWxsV2lkdGggPSAxMDA7XHJcbiAgICB0aGlzLnNvcnRhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSAnJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBub3JtYWxpemVJbmRleGVzKHRlbXBsYXRlczogTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnRbXSkge1xyXG4gICAgdGVtcGxhdGVzLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IHtcclxuICAgICAgaWYgKGZpcnN0LnBhcmVudCA8IHNlY29uZC5wYXJlbnQpIHsgcmV0dXJuIC0xOyB9XHJcbiAgICAgIGlmIChmaXJzdC5wYXJlbnQgPiBzZWNvbmQucGFyZW50KSB7IHJldHVybiAxOyB9XHJcblxyXG4gICAgICBpZiAoZmlyc3QuaW5kZXggPCBzZWNvbmQuaW5kZXgpIHsgcmV0dXJuIC0xOyB9XHJcbiAgICAgIGlmIChmaXJzdC5pbmRleCA+IHNlY29uZC5pbmRleCkgeyByZXR1cm4gMTsgfVxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pLmZvckVhY2goKHQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHQuaW5kZXggPSBpbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgY29uc3QgaCA9IHRoaXMudGVtcGxhdGVzLmZpbmQodCA9PiB0Lm5hbWUgPT09ICdoZWFkZXInKTtcclxuICAgIHRoaXMuaGVhZGVyID0gaCA/IGgudGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBiID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2JvZHknKTtcclxuICAgIHRoaXMuYm9keSA9IGIgPyBiLnRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgZiA9IHRoaXMudGVtcGxhdGVzLmZpbmQodCA9PiB0Lm5hbWUgPT09ICdmaWx0ZXInKTtcclxuICAgIHRoaXMuZmlsdGVyID0gZiA/IGYudGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IGVsZW1lbnQgfSBmcm9tICdwcm90cmFjdG9yJztcclxuaW1wb3J0IHsgUGFnaW5nSW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvUGFnaW5nLWlucHV0JztcclxuaW1wb3J0IHsgU29ydElucHV0IH0gZnJvbSAnLi4vbW9kZWxzL3NvcnQtaW5wdXQnO1xyXG5pbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0Q29udGVudENoaWxkcmVuLFxyXG5cdFRlbXBsYXRlUmVmLFxyXG5cdFF1ZXJ5TGlzdCxcclxuXHRBZnRlckNvbnRlbnRJbml0LFxyXG5cdENvbnRlbnRDaGlsZCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRBZnRlclZpZXdDaGVja2VkLFxyXG5cdEFmdGVyQ29udGVudENoZWNrZWQsXHJcblx0QWZ0ZXJWaWV3SW5pdCxcclxuXHREaXJlY3RpdmUsXHJcblx0RWxlbWVudFJlZixcclxuXHRSZW5kZXJlcixcclxuXHRIb3N0TGlzdGVuZXIsXHJcblx0UmVuZGVyZXIyLFxyXG5cdFZpZXdDaGlsZHJlblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1pdGVtJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudCdcclxuaW1wb3J0IHtPcmRlckRpcmVjdGlvbn0gZnJvbSAnLi4vbW9kZWxzL2VudW0nO1xyXG5pbXBvcnQgZ3VpZCBmcm9tICdhbmd1bGFyLXVpZCc7XHJcbmltcG9ydCB7IElQYWdpbmdJbnB1dCwgSVNvcnRJbnB1dCB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDZWxsc0luZm8gfSBmcm9tICcuLi9tb2RlbHMvY2VsbHMtaW5mbydcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ25neC1tYWdpYy10YWJsZScsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cIltpc1JUTCA/ICdydGwnIDogJ2x0ciddXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nRGl2XCIgW3N0eWxlLndpZHRoLnB4XT1cInRhYmxlV2lkdGhcIj5cclxuICAgICAgPHRhYmxlIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIiBjbGFzcz1cInJ6LXRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzPVwibmd4VGhlYWRcIiBbbmdDbGFzc109XCJ0aGVhZENsYXNzXCI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNlbGxSb3cgb2YgY2VsbHNcIj5cclxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjZWxsIG9mIGNlbGxSb3dcIiBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBjZWxsLnZpc2libGUgPT09ICdmYWxzZScgPyAnbm9uZScgOiAnJ31cIlxyXG4gICAgICAgICAgICAgIFthdHRyLnZpc2libGVdPVwiY2VsbC52aXNpYmxlXCIgW25hbWVdPVwiY2VsbC5uYW1lXCIgW2lkXT1cInVpZCsnLScrY2VsbC5uYW1lKyctaGVhZCdcIiBbZHJhZ2dhYmxlXT1cImNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICAoZHJvcCk9XCJkcm9wKGNlbGwpXCIgKGRyYWdvdmVyKT1cImFsbG93RHJvcCgkZXZlbnQpXCIgKGRyYWdzdGFydCk9XCJkcmFnKGNlbGwpXCIgW2F0dHIuY29sc3Bhbl09XCJjZWxsLmNvbFNwYW5cIlxyXG4gICAgICAgICAgICAgIFthdHRyLnJvd3NwYW5dPVwiY2VsbC5yb3dTcGFuXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbaWRdPVwiY2VsbC5uYW1lKydyZXNpemFibGUnXCIgKG1vdXNlZG93bik9XCJyZXNpemVIYW5kbGUoY2VsbCwkZXZlbnQsJ3Rib2R5MScpXCIgY2xhc3M9XCJyei1oYW5kbGVcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJzb3J0VG9nZ2xlKGNlbGwpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5oZWFkZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NlbGw6IGNlbGwsIGRpcmVjdGlvbjogKGNlbGwubmFtZSA9PT0gc29ydCkgPyBzb3J0RGlyZWN0aW9uIDogdW5kZWZpbmVkfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC50ZW1wbGF0ZS5maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgbmdiRHJvcGRvd24gKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiIGNsYXNzPVwiZHJvcGRvd24gZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuZ2JEcm9wZG93blRvZ2dsZSB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwiW2NlbGwudGVtcGxhdGUuZmlsdGVycy5sZW5ndGggPT0gMCA/ICdidG4tZGVmYXVsdCcgOiAnYnRuLXdhcm5pbmcnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gXCIgW2lkXT1cImNlbGwubmFtZSArICctJyArIHVpZCAgKyAnLWZpbHRlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZpbHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgbmdiRHJvcGRvd25NZW51IFthcmlhLWxhYmVsbGVkYnldPVwiY2VsbC5uYW1lICsgJy0nICsgdWlkICArICctZmlsdGVyJ1wiIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmZpbHRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y2VsbDogY2VsbCwgcm93czogcm93c31cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBpZD1cInRib2R5MVwiIChkb21DaGFuZ2UpPVwib25Eb21DaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwibmd4VGJvZHlcIiBbbmdDbGFzc109XCJ0Ym9keUNsYXNzXCIgKm5nSWY9XCJwYWdpbmF0ZWRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzIHwgc29ydDp7ZmllbGQ6IHNvcnQsIGRpcmVjdGlvbjogc29ydERpcmVjdGlvbiwgYWN0aXZlOiAhY3VzdG9tU29ydH0gfCBwYWdpbmF0ZToge1xyXG4gICAgICAgIGl0ZW1zUGVyUGFnZTogcGFnZVNpemUsXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgIHRvdGFsSXRlbXM6IGN1c3RvbVBhZ2luYXRlID8gdG90YWxDb3VudCA6IHJvd3MubGVuZ3RoLFxyXG4gICAgICAgIGlkOiB1aWQgfVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHRyb3dDbGFzc11cIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGludmVyc2VBcnJheShsb3dlckNlbGxzKTsgbGV0IGxvd2VySW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGNlbGwudmlzaWJsZSA9PT0gJ2ZhbHNlJyA/ICdub25lJyA6ICcnfVwiIFtzdHlsZS53aWR0aC5weF09XCJyZXNpemVDZWxsKGNlbGwuY2VsbFdpZHRoLGxvd2VySW5kZXgpXCJcclxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidGNlbGxDbGFzc1wiICpuZ0lmPVwiKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAlIGdldExjbShyb3cpID09PSAwXCJcclxuICAgICAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJnZXRMY20ocm93KSAvIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gIT09ICcnID8gTWF0aC5tYXgocm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoLCAxKSA6IDEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmJvZHlcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jvdzogcm93LCBjZWxsOiBjZWxsLCBpbmRleDogKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAvIGdldExjbShyb3cpfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJ0Ym9keTFcIiAoZG9tQ2hhbmdlKT1cIm9uRG9tQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cIm5neFRib2R5XCIgW25nQ2xhc3NdPVwidGJvZHlDbGFzc1wiICpuZ0lmPVwiIXBhZ2luYXRlZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3MgfCBzb3J0OntmaWVsZDogc29ydCwgZGlyZWN0aW9uOiBzb3J0RGlyZWN0aW9uLCBhY3RpdmU6ICFjdXN0b21Tb3J0fVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHRyb3dDbGFzcyBdXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2VsbCBvZiBpbnZlcnNlQXJyYXkobG93ZXJDZWxscyk7IGxldCBsb3dlckluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBjZWxsLnZpc2libGUgPT09ICdmYWxzZScgPyAnbm9uZScgOiAnJ31cIiBbc3R5bGUud2lkdGgucHhdPVwicmVzaXplQ2VsbChjZWxsLmNlbGxXaWR0aCxsb3dlckluZGV4KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRjZWxsQ2xhc3NcIiAqbmdJZj1cIigoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgJSBnZXRMY20ocm93KSA9PT0gMFwiXHJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnJvd3NwYW5dPVwiZ2V0TGNtKHJvdykgLyAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uICE9PSAnJyA/IE1hdGgubWF4KHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCwgMSkgOiAxKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2VsbC50ZW1wbGF0ZS5ib2R5XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntyb3c6IHJvdywgY2VsbDogY2VsbCwgaW5kZXg6ICgoaW4pICogKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiA9PT0gJycgPyAxIDogcm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoKSkgLyBnZXRMY20ocm93KX1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHBhZ2luZ1wiICpuZ0lmPVwicGFnaW5hdGVkXCI+XHJcbiAgICA8bGliLW5neC1tdWx0aXNlbGVjdC1kcm9wZG93biBbYnV0dG9uTGlzdENvbHVtblN0eWxlXT1cImJ1dHRvblNhdmVUYWJsZVN0eWxlXCIgKGNoYW5nZSk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IENvbHVtbnMnXCIgW2RhdGFdPVwiZHJvcGRvd25MaXN0XCIgWyhuZ01vZGVsKV09XCJkcm9wZG93bnNlbGVjdGVkSXRlbXNcIiBbc2V0dGluZ3NdPVwiZHJvcGRvd25TZXR0aW5nc1wiXHJcbiAgICAgIChvblNlbGVjdCk9XCJvbkl0ZW1TZWxlY3QoJGV2ZW50KVwiIChvbkRlU2VsZWN0KT1cIm9uSXRlbURlU2VsZWN0KCRldmVudClcIiAob25TZWxlY3RBbGwpPVwib25TZWxlY3RBbGwoJGV2ZW50KVwiPlxyXG4gICAgPC9saWItbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duPlxyXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAycHg7IG1hcmdpbi1yaWdodDogMnB4XCI+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNhdmVUYWJsZSgpXCIgW25nQ2xhc3NdPVwiYnV0dG9uU2F2ZVRhYmxlU3R5bGVcIiB0aXRsZT1cIlNhdmUgVGFibGVcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZsb3BweS1vXCI+PC9pPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHBhZ2luYXRpb24tY29udHJvbHMgKHBhZ2VDaGFuZ2UpPVwic2VsZWN0UGFnZSgkZXZlbnQpXCIgcHJldmlvdXNMYWJlbD1cIlwiIG5leHRMYWJlbD1cIlwiIFtpZF09XCJ1aWRcIj48L3BhZ2luYXRpb24tY29udHJvbHM+XHJcbiAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgIDxkaXYgKm5nSWY9XCJwYWdlU2l6ZXMubGVuZ3RoXCIgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICA8c2VsZWN0IGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFt2YWx1ZV09J3BhZ2VTaXplJyAoY2hhbmdlKT1cImNoYW5nZVBlclBhZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VTaXplc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYHRhYmxlIHRoZWFkIHRoey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1bZHJhZ2dhYmxlPXRydWVdey1raHRtbC11c2VyLWRyYWc6ZWxlbWVudDstd2Via2l0LXVzZXItZHJhZzplbGVtZW50fXNlbGVjdC5idG4tc217cGFkZGluZzouMXJlbTtkaXNwbGF5OmlubGluZS1mbGV4fXRhYmxle3RhYmxlLWxheW91dDpmaXhlZH10YWJsZS5yei10YWJsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOmF1dG87dGFibGUtbGF5b3V0OmZpeGVkO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX10YWJsZS5yei10YWJsZSB0aHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MjVweH10YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxle3dpZHRoOjJweDtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDotMnB4O2N1cnNvcjpldy1yZXNpemUhaW1wb3J0YW50O2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCAycHgscmdiYSgwLDAsMCwuMTUpIDJweCxyZ2JhKDAsMCwwLC4xNSkgNHB4KX10YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxlOmhvdmVye2JhY2tncm91bmQ6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywjNmM3NTdkMDAsIzZjNzU3ZCAycHgsIzZjNzU3ZCAycHgsIzZjNzU3ZDAwIDRweCl9LnJ0bCB0YWJsZS5yei10YWJsZSB0aCAucnotaGFuZGxle3JpZ2h0OmF1dG87bGVmdDotMnB4fS5ydGx7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9Lmx0cntkaXJlY3Rpb246bHRyIWltcG9ydGFudH0ubWFpbntvdmVyZmxvdzphdXRvfS5wYWdpbmd7d2lkdGg6MTAwJTtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1ib3R0b206MTBweH0ucGFkZGluZ0RpdntwYWRkaW5nOjEwcHh9Lm5neFRoZWFke2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7Ym9yZGVyLXNwYWNpbmc6MnB4IDA7YmFja2dyb3VuZC1jb2xvcjojZTllY2VmfS5uZ3hUYm9keXtoZWlnaHQ6LXdlYmtpdC1maWxsLWF2YWlsYWJsZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbn0ubHRyIC5uZ3hUYm9keXtkaXJlY3Rpb246cnRsfS5ydGwgLm5neFRib2R5e2RpcmVjdGlvbjpsdHJ9LnRhYmxlIHRkLC50YWJsZSB0aHt3b3JkLWJyZWFrOmJyZWFrLWFsbH0udGFibGUgdGR7Ym9yZGVyOjFweCBzb2xpZCAjNzk3YjdlfS5zYXZldGFibGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjVweH0ubHRyIC5zYXZldGFibGV7cmlnaHQ6MTBweH0ucnRsIC5zYXZldGFibGV7bGVmdDoxMHB4fXVsLm5neC1wYWdpbmF0aW9ue21hcmdpbjowfS5ydGwgLnRhYmxlIHRke3BhZGRpbmctbGVmdDowfS5sdHIgLnRhYmxlIHRke3BhZGRpbmctcmlnaHQ6MH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNUYWJsZUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cdEBDb250ZW50Q2hpbGRyZW4oTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQpXHJcblx0c2V0IHRlbXBsYXRlcyh2YWx1ZTogUXVlcnlMaXN0PE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50Pikge1xyXG5cdFx0dGhpcy50ZW1wbGF0ZXNBcnJheSA9IHZhbHVlLnRvQXJyYXkoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSA9IG51bGw7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCA9IG51bGw7XHJcblx0XHR0aGlzLnRhYmxlV2lkdGggPSAyMDA7XHJcblx0XHR0aGlzLmlzUlRMID0gZmFsc2U7XHJcblx0XHR0aGlzLnNjcm9sbFdpZHRoID0gMDtcclxuXHRcdHRoaXMubGlzdGNlbGxzSW5mbyA9IG5ldyBBcnJheTxDZWxsc0luZm8+KCk7XHJcblx0XHR0aGlzLmJ1dHRvbkxpc3RDb2x1bW5TdHlsZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIjtcclxuXHRcdHRoaXMuYnV0dG9uU2F2ZVRhYmxlU3R5bGUgPSBcImJ0biBidG4tb3V0bGluZS1pbmZvXCI7XHJcblx0fVxyXG5cclxuXHRASW5wdXQoKVxyXG5cdHNldCByb3dzKHJvd3M6IEFycmF5PFQ+KSB7XHJcblx0XHRpZiAoIXJvd3MpIHtcclxuXHRcdFx0dGhpcy5fcm93cyA9IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcm93cyA9IHJvd3M7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldCByb3dzKCk6IEFycmF5PFQ+IHtcclxuXHRcdHJldHVybiB0aGlzLl9yb3dzO1xyXG5cdH1cclxuXHJcblx0QElucHV0KCkgYnV0dG9uU2F2ZVRhYmxlU3R5bGU6IHN0cmluZztcclxuXHRASW5wdXQoKSBidXR0b25MaXN0Q29sdW1uU3R5bGU6IHN0cmluZztcclxuXHRASW5wdXQoKVxyXG5cdHBhZ2luYXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpXHJcblx0Y3VzdG9tU29ydDogQm9vbGVhbiA9IHRydWU7XHJcblx0QElucHV0KClcclxuXHRjdXN0b21QYWdpbmF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpXHJcblx0dG90YWxDb3VudDogTnVtYmVyID0gMDtcclxuXHRASW5wdXQoKVxyXG5cdHBhZ2VTaXplOiBOdW1iZXIgPSAxMDtcclxuXHRASW5wdXQoKVxyXG5cdGN1cnJlbnRQYWdlOiBOdW1iZXIgPSAxO1xyXG5cdEBJbnB1dCgpXHJcblx0cGFnZVNpemVzOiBudW1iZXJbXSA9IFsxMCwgMjAsIDUwLCAxMDBdO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdHNvcnQ6IFN0cmluZyA9ICcnO1xyXG5cdEBJbnB1dCgpXHJcblx0c29ydERpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0aGlkZGVuOiBCb29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KClcclxuXHRzZWxlY3RlZENsYXNzOiBTdHJpbmcgPSAndGFibGUtc2Vjb25kYXJ5JztcclxuXHJcblx0QE91dHB1dCgpXHJcblx0cGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2luZ0lucHV0PigpO1xyXG5cdEBPdXRwdXQoKVxyXG5cdHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElTb3J0SW5wdXQ+KCk7XHJcblx0QE91dHB1dCgpXHJcblx0cGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElQYWdpbmdJbnB1dD4oKTtcclxuXHJcblx0QE91dHB1dCgpXHJcblx0c2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblx0QE91dHB1dCgpXHJcblx0Y29sdW1uc0FycmFuZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBPdXRwdXQoKSBzYXZlVGFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PENlbGxzSW5mbz4+KCk7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0cHVibGljIHNldCBsb2FkVGFibGUoYXJyYXk6IEFycmF5PENlbGxzSW5mbz4pIHtcclxuXHRcdGlmIChhcnJheSkge1xyXG5cclxuXHRcdFx0dGhpcy50YWJsZUluZm8gPSBhcnJheTtcclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdHRhYmxlQ2xhc3M6IFN0cmluZyA9ICd0YWJsZSc7IC8vIHRhYmxlLWJvcmRlcmVkXHJcblx0QElucHV0KClcclxuXHR0aGVhZENsYXNzOiBTdHJpbmcgPSAndGhlYWQtbGlnaHQnO1xyXG5cdEBJbnB1dCgpXHJcblx0dGJvZHlDbGFzczogU3RyaW5nID0gJyc7XHJcblx0QElucHV0KClcclxuXHR0cm93Q2xhc3M6IFN0cmluZyA9ICcnO1xyXG5cdEBJbnB1dCgpXHJcblx0dGNlbGxDbGFzczogU3RyaW5nID0gJyc7XHJcblx0QElucHV0KCkgaXNSVEw6IGJvb2xlYW47XHJcblxyXG5cdGRyb3Bkb3duTGlzdCA9IFtdO1xyXG5cdGRyb3Bkb3duc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG5cdGRyb3Bkb3duU2V0dGluZ3MgPSB7fTtcclxuXHRwdWJsaWMgdGFibGVJbmZvOiBBcnJheTxDZWxsc0luZm8+O1xyXG5cdHB1YmxpYyBsaXN0Y2VsbHNJbmZvOiBBcnJheTxDZWxsc0luZm8+O1xyXG5cdHB1YmxpYyBzY3JvbGxXaWR0aDogbnVtYmVyO1xyXG5cdHB1YmxpYyB0YWJsZVdpZHRoOiBudW1iZXI7XHJcblx0cHVibGljIF9yb3dzID0gQXJyYXk8VD4oKTtcclxuXHRwdWJsaWMgTWF0aCA9IE1hdGg7XHJcblx0cHVibGljIEFyciA9IEFycmF5O1xyXG5cdHB1YmxpYyB0ZW1wbGF0ZXNBcnJheTogTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnRbXTtcclxuXHRwdWJsaWMgY2VsbHM6IEFycmF5PEFycmF5PEhlYWRlckNlbGw+PiA9IG5ldyBBcnJheTxBcnJheTxIZWFkZXJDZWxsPj4oKTtcclxuXHRwdWJsaWMgaGVhZDogQXJyYXk8SGVhZGVySXRlbT4gPSBuZXcgQXJyYXk8SGVhZGVySXRlbT4oKTtcclxuXHRwdWJsaWMgbG93ZXJDZWxsczogQXJyYXk8SGVhZGVyQ2VsbD4gPSBuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKTtcclxuXHRwdWJsaWMgZGVwdGggPSAwO1xyXG5cdHB1YmxpYyB1aWQgPSBndWlkKCk7XHJcblx0cHVibGljIHNlbGVjdGVkUm93OiBUO1xyXG5cdHB1YmxpYyBkcmFnZ2luZ0NlbGw6IEhlYWRlckNlbGw7XHJcblx0cHVibGljIHNvcnRJbnB1dDogU29ydElucHV0ID0gbmV3IFNvcnRJbnB1dCgpO1xyXG5cdHB1YmxpYyBwYWdpbmdJbnB1dDogUGFnaW5nSW5wdXQgPSBuZXcgUGFnaW5nSW5wdXQoKTtcclxuXHQvLyBpc0xhc3RDb2x1bW5Nb3VzZSA9IHRydWU7XHJcblxyXG5cclxuXHRwaXhjZWxYQmVmb3JlOiBudW1iZXI7XHJcblx0d2lkdGhCZWZvcmU6IG51bWJlcjtcclxuXHR3aWR0aEFmdGVyOiBudW1iZXI7XHJcblx0cmVzaXplRWxlbWVudDogRWxlbWVudDtcclxuXHR1bnN1YnNjcmliZU1vdXNlTW92ZTogKCkgPT4gdm9pZDtcclxuXHR1bnN1YnNjcmliZU1vdXNlVXA6ICgpID0+IHZvaWQ7XHJcblx0cGl4Y2VsWEFmdGVyOiBudW1iZXI7XHJcblxyXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuXHJcblx0XHROZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudC5ub3JtYWxpemVJbmRleGVzKHRoaXMudGVtcGxhdGVzQXJyYXkpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZXNBcnJheS5mb3JFYWNoKGkgPT5cclxuXHRcdFx0aS5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbmVyYXRlQ2VsbHMoKSlcclxuXHRcdCk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFibGVJbmZvLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRhYmxlSW5mb1tpXTtcclxuXHRcdFx0bGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5maWx0ZXIoeCA9PiB4LmluZGV4ID09PSBlbGVtZW50LmluZGV4KTtcclxuXHRcdFx0bGV0IGluZGV4ID0gdGhpcy50ZW1wbGF0ZXNBcnJheS5pbmRleE9mKHRlbXBsYXRlWzBdKTtcclxuXHJcblx0XHRcdHRlbXBsYXRlWzBdLmNlbGxXaWR0aCA9IGVsZW1lbnQuY2VsbFdpZHRoO1xyXG5cdFx0XHR0ZW1wbGF0ZVswXS5zb3J0YWJsZSA9IGVsZW1lbnQuc29ydGFibGU7XHJcblx0XHRcdHRlbXBsYXRlWzBdLmRyYWdnYWJsZSA9IGVsZW1lbnQuZHJhZ2dibGU7XHJcblx0XHRcdHRlbXBsYXRlWzBdLnZpc2libGUgPSBlbGVtZW50LnZpc2libGU7XHJcblx0XHRcdHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdID0gdGVtcGxhdGVbMF07XHJcblx0XHR9XHJcblx0XHR0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuXHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50ZW1wbGF0ZXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaW5kZXhdO1xyXG5cdFx0XHR0aGlzLmRyb3Bkb3duTGlzdC5wdXNoKHsgaXRlbV9pZDogZWxlbWVudC5pbmRleCwgaXRlbV90ZXh0OiBlbGVtZW50Lm5hbWUsIHBhcmVudDogZWxlbWVudC5wYXJlbnQgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcm9wZG93blNldHRpbmdzID0ge1xyXG5cdFx0XHRzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG5cdFx0XHRpZEZpZWxkOiAnaXRlbV9pZCcsXHJcblx0XHRcdHRleHRGaWVsZDogJ2l0ZW1fdGV4dCcsXHJcblx0XHRcdHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcclxuXHRcdFx0dW5TZWxlY3RBbGxUZXh0OiAnVW5TZWxlY3QgQWxsJyxcclxuXHRcdFx0aXRlbXNTaG93TGltaXQ6IDIsXHJcblx0XHRcdGFsbG93U2VhcmNoRmlsdGVyOiB0cnVlLFxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TGNtKHJvdzogYW55KTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IGxjbSA9IHRoaXMubGNtT2ZMaXN0KFxyXG5cdFx0XHR0aGlzLmxvd2VyQ2VsbHMubWFwKGkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnXHJcblx0XHRcdFx0XHQ/IDFcclxuXHRcdFx0XHRcdDogTWF0aC5tYXgocm93W2kudGVtcGxhdGUuY29sbGVjdGlvbi50b1N0cmluZygpXS5sZW5ndGgsIDEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHJldHVybiBsY207XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2NkKGEsIGIpOiBudW1iZXIge1xyXG5cdFx0aWYgKGIgPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIGE7IC8vIHNvIHRoYXQgdGhlIHJlY3Vyc2lvbiBkb2VzIG5vdCBnbyBvbiBmb3JldmVyXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nY2QoYiwgYSAlIGIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGxjbU9mTGlzdChhcnIpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgZCA9IHRoaXM7XHJcblx0XHRjb25zdCB0ID0gYXJyLnJlZHVjZSgoYSwgYikgPT4gZC5sY20oYSwgYikpO1xyXG5cdFx0cmV0dXJuIHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGNtKGEsIGIpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIChhICogYikgLyB0aGlzLmdjZChhLCBiKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhbGxvd0Ryb3AoeDogYW55KSB7XHJcblx0XHR4LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJvcCh4OiBIZWFkZXJDZWxsKSB7XHJcblx0XHRpZiAodGhpcy5kcmFnZ2luZ0NlbGwgPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5kcmFnZ2luZ0NlbGwudGVtcGxhdGUucGFyZW50ICE9PSB4LnRlbXBsYXRlLnBhcmVudCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdG1wID0geC50ZW1wbGF0ZS5pbmRleDtcclxuXHRcdHgudGVtcGxhdGUuaW5kZXggPSB0aGlzLmRyYWdnaW5nQ2VsbC50ZW1wbGF0ZS5pbmRleDtcclxuXHRcdHRoaXMuZHJhZ2dpbmdDZWxsLnRlbXBsYXRlLmluZGV4ID0gdG1wO1xyXG5cdFx0dGhpcy5kcmFnZ2luZ0NlbGwgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG5cdFx0dGhpcy5jb2x1bW5zQXJyYW5nZUNoYW5nZS5lbWl0KFxyXG5cdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5Lm1hcCh0ID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0bmFtZTogdC5uYW1lLFxyXG5cdFx0XHRcdFx0cGFyZW50OiB0LnBhcmVudCxcclxuXHRcdFx0XHRcdGluZGV4OiB0LmluZGV4XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhZyh4OiBIZWFkZXJDZWxsKSB7XHJcblx0XHR0aGlzLmRyYWdnaW5nQ2VsbCA9IHg7XHJcblx0fVxyXG5cdHByb3RlY3RlZCBnZW5lcmF0ZUNlbGxzKCkge1xyXG5cclxuXHRcdHRoaXMuaGVhZCA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XHJcblx0XHR0aGlzLnRhYmxlV2lkdGggPSB0aGlzLmhlYWQubWFwKGkgPT4gK2kuV2lkdGgpXHJcblx0XHRcdC5yZWR1Y2U8bnVtYmVyPigoc3VtLCBjdXJyZW50KSA9PiBzdW0gKyBjdXJyZW50LCAwKTtcclxuXHRcdHRoaXMuZGVwdGggPSBNYXRoLm1heChcclxuXHRcdFx0Li4udGhpcy5oZWFkLm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5EZXB0aChpdGVtKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jZWxscyA9IFtdO1xyXG5cdFx0dGhpcy5sb3dlckNlbGxzID0gW107XHJcblx0XHR0aGlzLmNyZWF0ZUhlYWRlckNlbGxzKHRoaXMuaGVhZCwgMCwgdGhpcy5kZXB0aCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJvdGVjdGVkIGdlbmVyYXRlSGVhZGVycyhoZWFkZXJOYW1lOiBTdHJpbmcgPSAnJyk6IEFycmF5PEhlYWRlckl0ZW0+IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxIZWFkZXJJdGVtPigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVxyXG5cdFx0XHQuZmlsdGVyKHQgPT4gdC5wYXJlbnQgPT09IGhlYWRlck5hbWUpXHJcblx0XHRcdC5maWx0ZXIodCA9PiB0LnZpc2libGUgPT09IHRydWUpXHJcblx0XHRcdC5zb3J0KChmaXJzdCwgc2Vjb25kKSA9PiB7XHJcblx0XHRcdFx0aWYgKGZpcnN0LmluZGV4ID4gc2Vjb25kLmluZGV4KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChmaXJzdC5pbmRleCA8IHNlY29uZC5pbmRleCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZm9yRWFjaCh0ID0+IHtcclxuXHRcdFx0XHRsZXQgaXRlbTogSGVhZGVySXRlbTtcclxuXHRcdFx0XHRpdGVtID0gbmV3IEhlYWRlckl0ZW0oKTtcclxuXHRcdFx0XHRpdGVtLlRpdGxlID0gdC50aXRsZTtcclxuXHRcdFx0XHRpdGVtLkluZGV4ID0gK3QuaW5kZXg7XHJcblx0XHRcdFx0aXRlbS5Tb3J0YWJsZSA9IHQuc29ydGFibGU7XHJcblx0XHRcdFx0aXRlbS5UZW1wbGF0ZSA9IHQ7XHJcblx0XHRcdFx0aXRlbS5WaXNpYmxlID0gdC52aXNpYmxlO1xyXG5cdFx0XHRcdGl0ZW0uQ2hpbGRzID0gdGhpcy5nZW5lcmF0ZUhlYWRlcnModC5uYW1lKTtcclxuXHRcdFx0XHRpdGVtLldpZHRoID0gaXRlbS5DaGlsZHMubGVuZ3RoID09PSAwICYmIGl0ZW0uVmlzaWJsZSA9PT0gdHJ1ZSA/ICt0LmNlbGxXaWR0aCA6IGl0ZW0uQ2hpbGRzLm1hcChpID0+ICtpLldpZHRoKVxyXG5cdFx0XHRcdFx0LnJlZHVjZTxudW1iZXI+KChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQsIDApO1xyXG5cdFx0XHRcdGl0ZW0uTmFtZSA9IHQubmFtZTtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtKTtcclxuXHRcdFx0XHR0aGlzLmRyb3Bkb3duc2VsZWN0ZWRJdGVtcy5wdXNoKHsgaXRlbV9pZDogaXRlbS5JbmRleCwgaXRlbV90ZXh0OiBpdGVtLk5hbWUsIHBhcmVudDogaGVhZGVyTmFtZSB9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjcmVhdGVIZWFkZXJDZWxscyhcclxuXHRcdGl0ZW1zOiBIZWFkZXJJdGVtW10sXHJcblx0XHRsZXZlbDogbnVtYmVyLFxyXG5cdFx0ZGVwdGg6IG51bWJlclxyXG5cdCkge1xyXG5cdFx0aWYgKHRoaXMuY2VsbHMubGVuZ3RoIDw9IGxldmVsKSB7XHJcblx0XHRcdHRoaXMuY2VsbHMucHVzaChuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByb3cgPSB0aGlzLmNlbGxzW2xldmVsXTtcclxuXHRcdGl0ZW1zLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0LkluZGV4LnZhbHVlT2YoKSAtIHNlY29uZC5JbmRleC52YWx1ZU9mKCkpXHJcblx0XHRcdC5tYXAoaCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IG5ldyBIZWFkZXJDZWxsKCk7XHJcblx0XHRcdFx0Yy5uYW1lID0gaC5OYW1lO1xyXG5cdFx0XHRcdGMuaW5kZXggPSBoLkluZGV4O1xyXG5cdFx0XHRcdGMudGl0bGUgPSBoLlRpdGxlO1xyXG5cdFx0XHRcdGMudmlzaWJsZSA9IGguVmlzaWJsZTtcclxuXHRcdFx0XHRjLmNlbGxXaWR0aCA9IGguV2lkdGg7XHJcblx0XHRcdFx0Yy5zb3J0YWJsZSA9IGguU29ydGFibGU7XHJcblx0XHRcdFx0Yy50ZW1wbGF0ZSA9IGguVGVtcGxhdGU7XHJcblx0XHRcdFx0Yy5IZWFkZXJJdGVtID0gaDtcclxuXHRcdFx0XHRjLmNvbFNwYW4gPSB0aGlzLmNvdW50SGVhZGVycyhoKTtcclxuXHRcdFx0XHRjLnJvd1NwYW4gPSBoLkNoaWxkcy5sZW5ndGggPiAwID8gMSA6IGRlcHRoIC0gbGV2ZWw7XHJcblx0XHRcdFx0cm93LnB1c2goYyk7XHJcblx0XHRcdFx0aWYgKGguQ2hpbGRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlSGVhZGVyQ2VsbHMoaC5DaGlsZHMsIGxldmVsICsgMSwgZGVwdGgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoaC5WaXNpYmxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubG93ZXJDZWxscy5wdXNoKGMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgY291bnRIZWFkZXJzKGl0ZW06IEhlYWRlckl0ZW0pOiBudW1iZXIge1xyXG5cdFx0aWYgKGl0ZW0uQ2hpbGRzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBoZWFkZXJDb3VudCA9IGl0ZW0uQ2hpbGRzLm1hcChjaGlsZCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY291bnRIZWFkZXJzKGNoaWxkKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBoZWFkZXJDb3VudC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIERlcHRoKGl0ZW06IEhlYWRlckl0ZW0pOiBudW1iZXIge1xyXG5cdFx0aWYgKGl0ZW0uQ2hpbGRzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBkZXB0aCA9IE1hdGgubWF4KFxyXG5cdFx0XHRcdC4uLml0ZW0uQ2hpbGRzLm1hcChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5EZXB0aChjaGlsZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIGRlcHRoICsgMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdFJvdyhyb3c6IFQpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XHJcblx0XHR0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZFJvdyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlUGVyUGFnZShwYWdlU2l6ZTogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5wYWdlU2l6ZSA9PT0gcGFnZVNpemUpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbVBhZ2luYXRlKSB7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYWdpbmdJbnB1dC5wYWdlID0gdGhpcy5jdXJyZW50UGFnZSBhcyBudW1iZXI7XHJcblx0XHR0aGlzLnBhZ2luZ0lucHV0LnBhZ2VTaXplID0gcGFnZVNpemU7XHJcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoXHJcblx0XHRcdHRoaXMucGFnaW5nSW5wdXRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSBwYWdlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jdXN0b21QYWdpbmF0ZSkge1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYWdpbmdJbnB1dC5wYWdlID0gcGFnZTtcclxuXHRcdHRoaXMucGFnaW5nSW5wdXQucGFnZVNpemUgPSB0aGlzLnBhZ2VTaXplIGFzIG51bWJlcjtcclxuXHJcblx0XHR0aGlzLnBhZ2VDaGFuZ2UuZW1pdChcclxuXHRcdFx0dGhpcy5wYWdpbmdJbnB1dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzb3J0VG9nZ2xlKGNlbGw6IEhlYWRlckNlbGwpIHtcclxuXHRcdGlmIChjZWxsLnNvcnRhYmxlID09PSBmYWxzZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG5ld0RpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG5cdFx0aWYgKHRoaXMuc29ydCA9PT0gY2VsbC5uYW1lKSB7XHJcblx0XHRcdG5ld0RpcmVjdGlvbiA9XHJcblx0XHRcdFx0dGhpcy5zb3J0RGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmdcclxuXHRcdFx0XHRcdD8gT3JkZXJEaXJlY3Rpb24uRGVzY2VuZGluZ1xyXG5cdFx0XHRcdFx0OiBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuZXdEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmN1c3RvbVNvcnQpIHtcclxuXHRcdFx0dGhpcy5zb3J0ID0gY2VsbC5uYW1lO1xyXG5cdFx0XHR0aGlzLnNvcnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcblx0XHR9XHJcblx0XHR0aGlzLnNvcnRJbnB1dC5zb3J0ID0gY2VsbC5uYW1lIGFzIHN0cmluZztcclxuXHRcdHRoaXMuc29ydElucHV0LmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuXHRcdHRoaXMuc29ydENoYW5nZS5lbWl0KFxyXG5cdFx0XHR0aGlzLnNvcnRJbnB1dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdG9uRG9tQ2hhbmdlKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2Nyb2xsV2lkdGggPSB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbnZlcnNlQXJyYXkoYXJyYXk6IEFycmF5PEhlYWRlckNlbGw+KTogQXJyYXk8SGVhZGVyQ2VsbD4ge1xyXG5cdFx0bGV0IGludmVyc2UgPSBuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKTtcclxuXHRcdGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpbnZlcnNlLnB1c2goYXJyYXlbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGludmVyc2U7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlc2l6ZUNlbGwod2lkdGg6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHQvLyB0aGlzLmlzTGFzdENvbHVtbk1vdXNlID0gZmFsc2U7XHJcblx0XHRpZiAoaW5kZXggPT0gdGhpcy5sb3dlckNlbGxzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0Ly8gdGhpcy5pc0xhc3RDb2x1bW5Nb3VzZSA9IGZhbHNlO1xyXG5cdFx0XHRyZXR1cm4gd2lkdGggLSB0aGlzLnNjcm9sbFdpZHRoO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHdpZHRoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25JdGVtU2VsZWN0KGl0ZW1zOiBhbnkpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG5cdFx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0FycmF5XHJcblx0XHRcdFx0LmZpbmQodCA9PiB0LmluZGV4ID09PSBpdGVtLml0ZW1faWQpO1xyXG5cdFx0XHRsZXQgaW5kZXggPSB0aGlzLnRlbXBsYXRlc0FycmF5LmluZGV4T2YoaXRlbSk7XHJcblx0XHRcdHRlbXBsYXRlLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnRlbXBsYXRlc0FycmF5W2luZGV4XSA9IHRlbXBsYXRlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcblx0fVxyXG5cdG9uSXRlbURlU2VsZWN0KGl0ZW1zOiBhbnkpIHtcclxuXHJcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0bGV0IGl0ZW0gPSBpdGVtcy5maWx0ZXIodCA9PiB0Lml0ZW1faWQgPT09IHRoaXMudGVtcGxhdGVzQXJyYXlbal0uaW5kZXgpO1xyXG5cdFx0XHRpZiAoaXRlbS5sZW5ndGggPD0gMCkge1xyXG5cdFx0XHRcdHRoaXMudGVtcGxhdGVzQXJyYXlbal0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMudGVtcGxhdGVzQXJyYXlbal0gPSB0aGlzLnRlbXBsYXRlc0FycmF5W2pdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG5cdH1cclxuXHRvblNlbGVjdEFsbChpdGVtczogYW55KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0FycmF5W2ldO1xyXG5cdFx0XHRsZXQgaW5kZXggPSB0aGlzLnRlbXBsYXRlc0FycmF5LmluZGV4T2YodGVtcGxhdGUpO1xyXG5cdFx0XHR0ZW1wbGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy50ZW1wbGF0ZXNBcnJheVtpbmRleF0gPSB0ZW1wbGF0ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG5cdH1cclxuXHJcblx0U2F2ZVRhYmxlKCkge1xyXG5cdFx0dGhpcy5saXN0Y2VsbHNJbmZvID0gbnVsbDtcclxuXHRcdHRoaXMubGlzdGNlbGxzSW5mbyA9IG5ldyBBcnJheTxDZWxsc0luZm8+KCk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcGxhdGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMudGVtcGxhdGVzQXJyYXlbaV07XHJcblx0XHRcdHRoaXMubGlzdGNlbGxzSW5mby5wdXNoKHsgaW5kZXg6IGVsZW1lbnQuaW5kZXgsIG5hbWU6IGVsZW1lbnQubmFtZSwgY2VsbFdpZHRoOiBlbGVtZW50LmNlbGxXaWR0aCwgcGFyZW50OiBlbGVtZW50LnBhcmVudCwgc29ydGFibGU6IGVsZW1lbnQuc29ydGFibGUsIGRyYWdnYmxlOiBlbGVtZW50LmRyYWdnYWJsZSwgdmlzaWJsZTogZWxlbWVudC52aXNpYmxlIH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zYXZlVGFibGUuZW1pdChcclxuXHRcdFx0dGhpcy5saXN0Y2VsbHNJbmZvXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2l6ZUhhbmRsZShjZWxsOiBIZWFkZXJDZWxsLCBtRXZlbnQ6IE1vdXNlRXZlbnQsIGlkVGJvZHk6IHN0cmluZykge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgdGJvZHlJZCA9IGlkVGJvZHk7XHJcblx0XHRjb25zdCB0YWJsZVdpZHRoVGVtcCA9IHRoaXMudGFibGVXaWR0aDtcclxuXHRcdHRoaXMucGl4Y2VsWEJlZm9yZSA9IG1FdmVudC54O1xyXG5cdFx0dGhpcy53aWR0aEJlZm9yZSA9ICtjZWxsLmNlbGxXaWR0aDtcclxuXHRcdGNvbnN0IGRyYWdnYWJsZSA9IGNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlO1xyXG5cdFx0Y29uc3Qgc29ydGFibGUgPSBjZWxsLnRlbXBsYXRlLnNvcnRhYmxlO1xyXG5cdFx0bGV0IGxhc3RIZWFkZXJJdGVtID0gY2VsbC5IZWFkZXJJdGVtO1xyXG5cdFx0d2hpbGUgKGxhc3RIZWFkZXJJdGVtLkNoaWxkcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGxhc3RIZWFkZXJJdGVtID0gbGFzdEhlYWRlckl0ZW0uQ2hpbGRzW2xhc3RIZWFkZXJJdGVtLkNoaWxkcy5sZW5ndGggLSAxXTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGFsbENlbGxzID0gdGhpcy5jZWxscy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGIpOyB9KTtcclxuXHRcdGNvbnN0IGxhc3RDZWxsID0gYWxsQ2VsbHMuZmlsdGVyKHQgPT4gdC52aXNpYmxlID09PSB0cnVlKS5maW5kKGkgPT4gaS5uYW1lID09PSBsYXN0SGVhZGVySXRlbS5OYW1lKTtcclxuXHJcblxyXG5cdFx0Y29uc3Qgd2lkdGhMYXN0Q2VsbCA9ICtsYXN0Q2VsbC5jZWxsV2lkdGg7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXHJcblx0XHRcdCdkb2N1bWVudCcsXHJcblx0XHRcdCdtb3VzZW1vdmUnLFxyXG5cdFx0XHRldmVudCA9PiB7XHJcblx0XHRcdFx0Ly8gaWYgKHRoaXMuaXNMYXN0Q29sdW1uTW91c2UpIHtcclxuXHRcdFx0XHQvLyBcdHJldHVybjtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGNlbGwudGVtcGxhdGUuc29ydGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRsZXQgV2lkdGhBZGQgPSBldmVudC54IC0gdGhpcy5waXhjZWxYQmVmb3JlO1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzUlRMKSB7XHJcblx0XHRcdFx0XHRXaWR0aEFkZCA9IHRoaXMucGl4Y2VsWEJlZm9yZSAtIGV2ZW50Lng7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobGFzdENlbGwuY2VsbFdpZHRoID49IDUwKSB7XHJcblx0XHRcdFx0XHRjZWxsLmNlbGxXaWR0aCA9IHRoaXMud2lkdGhCZWZvcmUgKyAoV2lkdGhBZGQpO1xyXG5cdFx0XHRcdFx0bGFzdENlbGwuY2VsbFdpZHRoID0gd2lkdGhMYXN0Q2VsbCArIChXaWR0aEFkZCk7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlV2lkdGggPSB0YWJsZVdpZHRoVGVtcCArIChXaWR0aEFkZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGlmIChsYXN0Q2VsbC5jZWxsV2lkdGggPCA1MCkge1xyXG5cdFx0XHRcdGxhc3RDZWxsLmNlbGxXaWR0aCA9IDUwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxhc3RDZWxsLnRlbXBsYXRlLmNlbGxXaWR0aCA9IGxhc3RDZWxsLmNlbGxXaWR0aDtcclxuXHJcblx0XHRcdGlmIChjZWxsLmNlbGxXaWR0aCA8IDUwKSB7XHJcblx0XHRcdFx0Y2VsbC5jZWxsV2lkdGggPSA1MDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjZWxsLnRlbXBsYXRlLmNlbGxXaWR0aCA9IGNlbGwuY2VsbFdpZHRoO1xyXG5cclxuXHRcdFx0Y2VsbC50ZW1wbGF0ZS5kcmFnZ2FibGUgPSBkcmFnZ2FibGU7XHJcblx0XHRcdGNlbGwudGVtcGxhdGUuc29ydGFibGUgPSBzb3J0YWJsZTtcclxuXHJcblx0XHRcdGxldCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRib2R5SWQpO1xyXG5cdFx0XHR0aGlzLnNjcm9sbFdpZHRoID0gaHRtbEVsZW1lbnQub2Zmc2V0V2lkdGggLSBodG1sRWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHRcdFx0aWYgKHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUpIHtcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlKCk7XHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCkge1xyXG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwKCk7XHJcblx0XHRcdFx0dGhpcy51bnN1YnNjcmliZU1vdXNlVXAgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T3JkZXJEaXJlY3Rpb259IGZyb20gJy4vLi4vbW9kZWxzL2VudW0nO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbc2V0RGlyZWN0aW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERpcmVjdGlvbkRpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG4gICAgX2RpcmVjdGlvbjogbnVtYmVyO1xyXG4gICAgQElucHV0KCdzZXREaXJlY3Rpb24nKVxyXG4gICAgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZhLWFycm93LWRvd24nKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZhLWFycm93LXVwJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkRlc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctdXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZG9tQ2hhbmdlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERvbUNoYW5nZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZG9tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmNoYW5nZXMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XHJcbiAgICAgIC8vIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuZG9tQ2hhbmdlLmVtaXQobXV0YXRpb24pKTtcclxuICAgICAgdGhpcy5kb21DaGFuZ2UuZW1pdCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VzLm9ic2VydmUoZWxlbWVudCwge1xyXG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T3JkZXJEaXJlY3Rpb259ICBmcm9tICcuLi9tb2RlbHMvZW51bSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3NvcnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0ocm93czogYW55W10sIGFyZ3M6IGFueSk6IGFueVtdIHtcclxuICAgIGNvbnN0IGZpZWxkID0gYXJncy5maWVsZDtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGFyZ3MuYWN0aXZlIHx8IHRydWU7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQXNjZW5kaW5nKSB7XHJcbiAgICAgICAgcm93cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFbZmllbGRdIDwgYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhW2ZpZWxkXSA+IGJbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm93cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IG5hbWVzcGFjZSBOdW1lcmljRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICAgICAgZ3JlYXRlclRoYW4gPSAnZ3JlYXRlciB0aGFuJyxcclxuICAgICAgICBub3RHcmVhdGVyVGhhbiA9ICdub3QgZ3JlYXRlciB0aGFuJyxcclxuICAgICAgICBzbWFsbGVyVGhhbiA9ICdzbWFsbGVyIHRoYW4nLFxyXG4gICAgICAgIG5vdFNtYWxsZXJUaGFuID0gJ25vdCBzbWFsbGVyIHRoYW4nXHJcblxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgTnVtZXJpY0ZpbHRlciB9IGZyb20gJy4uL21vZGVscy9udW1lcmljLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW51bWVyaWMtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgTnVtZXJpY0ZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hOdW1lcmljRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgTnVtZXJpY0ZpbHRlciA9IE51bWVyaWNGaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IE51bWVyaWNGaWx0ZXIuZmlsdGVycy5lcXVhbHMsIGZpbHRlclZhbHVlOiAnJ30pO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT09IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9PSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgU3RyaW5nRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICAgICAgc3RhcnRzV2l0aCA9ICdzdGFydHMgd2l0aCcsXHJcbiAgICAgICAgbm90U3RhcnRzV2l0aCA9ICdub3Qgc3RhcnRzIHdpdGgnLFxyXG4gICAgICAgIGVuZHNXaXRoID0gJ2VuZHMgd2l0aCcsXHJcbiAgICAgICAgbm90RW5kc1dpdGggPSAnbm90IGVuZHMgd2l0aCcsXHJcbiAgICAgICAgY29udGFpbnMgPSAnY29udGFpbnMnLFxyXG4gICAgICAgIG5vdENvbnRhaW5zID0gJ25vdCBjb250YWlucydcclxuICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IFN0cmluZ0ZpbHRlciB9IGZyb20gJy4uL21vZGVscy9zdHJpbmctZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtc3RyaW5nLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVHlwZVwiPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIFN0cmluZ0ZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIFN0cmluZ0ZpbHRlciA9IFN0cmluZ0ZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogU3RyaW5nRmlsdGVyLmZpbHRlcnMuY29udGFpbnMsIGZpbHRlclZhbHVlOiAnJ30pXHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRW51bUZpbHRlciB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gZmlsdGVycyB7XHJcbiAgICAgICAgZXF1YWxzID0gJ2VxdWFscycsXHJcbiAgICAgICAgbm90RXF1YWxzID0gJ25vdCBlcXVhbHMnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IEVudW1GaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvZW51bS1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbnVtLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVHlwZVwiPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIEVudW1GaWx0ZXIudmFsdWVzKClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiPnt7cH19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBpdGVtc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVudW1GaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueVtdO1xyXG5cclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBFbnVtRmlsdGVyID0gRW51bUZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogRW51bUZpbHRlci5maWx0ZXJzLmVxdWFscywgZmlsdGVyVmFsdWU6ICcnfSlcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBCb29sZWFuRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMoKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBCb29sZWFuRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL2Jvb2xlYW4tZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYm9vbGVhbi1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIFsobmdNb2RlbCldPVwiZmlsdGVyVmFsdWVcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuICBASW5wdXQoKSBpdGVtczogYW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIEJvb2xlYW5GaWx0ZXIgPSBCb29sZWFuRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBCb29sZWFuRmlsdGVyLmZpbHRlcnMuZXF1YWxzLCBmaWx0ZXJWYWx1ZTogJyd9KVxyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIExpc3RJdGVtRHJvcGRvd24ge1xyXG4gICAgaWQ6IFN0cmluZztcclxuICAgIHRleHQ6IFN0cmluZztcclxuICAgIHBhcmVudDogU3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNvdXJjZTogYW55KSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnRleHQgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQ9Jyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS5pZDtcclxuICAgICAgICB0aGlzLnRleHQgPSBzb3VyY2UudGV4dDtcclxuICAgICAgICB0aGlzLnBhcmVudD1zb3VyY2UucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElEcm9wZG93blNldHRpbmdzIHtcclxuICAgIHNpbmdsZVNlbGVjdGlvbj86IGJvb2xlYW47XHJcbiAgICBpZEZpZWxkPzogc3RyaW5nO1xyXG4gICAgdGV4dEZpZWxkPzogc3RyaW5nO1xyXG4gICAgcGFyZW50RmllbGQ/OiBzdHJpbmc7XHJcbiAgICBlbmFibGVDaGVja0FsbD86IGJvb2xlYW47XHJcbiAgICBzZWxlY3RBbGxUZXh0Pzogc3RyaW5nO1xyXG4gICAgdW5TZWxlY3RBbGxUZXh0Pzogc3RyaW5nO1xyXG4gICAgYWxsb3dTZWFyY2hGaWx0ZXI/OiBib29sZWFuO1xyXG4gICAgY2xlYXJTZWFyY2hGaWx0ZXI/OiBib29sZWFuO1xyXG4gICAgbWF4SGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgaXRlbXNTaG93TGltaXQ/OiBudW1iZXI7XHJcbiAgICBsaW1pdFNlbGVjdGlvbj86IG51bWJlcjtcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICAgIG5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICAgIGNsb3NlRHJvcERvd25PblNlbGVjdGlvbj86IGJvb2xlYW47XHJcbiAgICBzaG93U2VsZWN0ZWRJdGVtc0F0VG9wPzogYm9vbGVhbjtcclxuICB9IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtRHJvcGRvd24sIElEcm9wZG93blNldHRpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL211bHRpc2VsZWN0Lm1vZGVsJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IERST1BET1dOX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgdGFiaW5kZXg9XCI9MFwiIChibHVyKT1cIm9uVG91Y2hlZCgpXCIgY2xhc3M9XCJtdWx0aXNlbGVjdC1kcm9wZG93blwiIChjbGlja091dHNpZGUpPVwiY2xvc2VEcm9wZG93bigpXCI+XG4gIDxkaXYgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgPGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgW25nQ2xhc3NdPVwiYnV0dG9uTGlzdENvbHVtblN0eWxlXCIgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKCRldmVudClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS0gPHNwYW4gdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiZHJvcGRvd24tYnRuXCIgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKCRldmVudClcIj4gLS0+XG4gICAgPCEtLSA8c3Bhbj57e19wbGFjZWhvbGRlcn19PC9zcGFuPiAtLT5cbiAgICA8IS0tIDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L2k+IC0tPlxuICAgIDwhLS0gKm5nSWY9XCJzZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PSAwXCIgLS0+XG5cbiAgICA8IS0tIDxzcGFuIGNsYXNzPVwic2VsZWN0ZWQtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlbGVjdGVkSXRlbXM7dHJhY2tCeTogdHJhY2tCeUZuO2xldCBrID0gaW5kZXhcIiBbaGlkZGVuXT1cImsgPiBfc2V0dGluZ3MuaXRlbXNTaG93TGltaXQtMVwiPlxuICAgICAgICAgIHt7aXRlbS50ZXh0fX1cbiAgICAgICAgICA8YSBzdHlsZT1cInBhZGRpbmctdG9wOjJweDtwYWRkaW5nLWxlZnQ6MnB4O2NvbG9yOndoaXRlXCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxpdGVtKVwiPng8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodCAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6NHB4XCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA2cHg7XCIgKm5nSWY9XCJpdGVtU2hvd1JlbWFpbmluZygpPjBcIj4re3tpdGVtU2hvd1JlbWFpbmluZygpfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiaXNEcm9wZG93bk9wZW4gPyAnZHJvcGRvd24tdXAnIDogJ2Ryb3Bkb3duLWRvd24nXCI+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+IC0tPlxuICAgIDwhLS0gPC9zcGFuPiAtLT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0XCIgW2hpZGRlbl09XCIhaXNEcm9wZG93bk9wZW5cIj5cbiAgICA8dWwgY2xhc3M9XCJpdGVtMVwiPlxuICAgICAgPGxpIChjbGljayk9XCJ0b2dnbGVTZWxlY3RBbGwoKVwiICpuZ0lmPVwiX2RhdGEubGVuZ3RoID4gMCAmJiAhX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbiAmJiBfc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uPT09LTFcIlxuICAgICAgICBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcIiBzdHlsZT1cImJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO3BhZGRpbmc6MTBweFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiaXNBbGxJdGVtc1NlbGVjdGVkKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKVwiIC8+XG4gICAgICAgIDxkaXY+e3sgX3NldHRpbmdzLnNlbGVjdEFsbFRleHR9fTwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImZpbHRlci10ZXh0Ym94XCIgKm5nSWY9XCJfZGF0YS5sZW5ndGg+MCAmJiBfc2V0dGluZ3MuYWxsb3dTZWFyY2hGaWx0ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlYWRPbmx5XT1cImRpc2FibGVkXCIgW3BsYWNlaG9sZGVyXT1cIl9zZXR0aW5ncy5zZWFyY2hQbGFjZWhvbGRlclRleHRcIiBbKG5nTW9kZWwpXT1cImZpbHRlci50ZXh0XCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlclRleHRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bCBjbGFzcz1cIml0ZW0yXCIgW3N0eWxlLm1heEhlaWdodF09XCJfc2V0dGluZ3MubWF4SGVpZ2h0KydweCdcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZGF0YSB8IG5nMkxpc3RGaWx0ZXI6ZmlsdGVyOyBsZXQgaSA9IGluZGV4O1wiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSlcIiBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQoaXRlbSlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgKGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKCkgJiYgIWlzU2VsZWN0ZWQoaXRlbSkpXCIgLz5cbiAgICAgICAgPGRpdj57e2l0ZW0udGV4dH19PC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPSduby1kYXRhJyAqbmdJZj1cIl9kYXRhLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgIDxoNT57e19zZXR0aW5ncy5ub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHR9fTwvaDU+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5tdWx0aXNlbGVjdC1kcm9wZG93bntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2FkYWRhZDt3aWR0aDoxMDAlO3BhZGRpbmc6NnB4IDEycHg7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjUyODU3MTQzO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlci1yYWRpdXM6NHB4fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVte2JvcmRlcjoxcHggc29saWQgIzMzN2FiNzttYXJnaW4tcmlnaHQ6NHB4O2JhY2tncm91bmQ6IzMzN2FiNztwYWRkaW5nOjAgNXB4O2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7ZmxvYXQ6bGVmdH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtOmhvdmVye2JveC1zaGFkb3c6MXB4IDFweCAjOTU5NTk1fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3due2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RvcDoxMHB4O3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICNhZGFkYWQ7Ym9yZGVyLWxlZnQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXB7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2FkYWRhZDtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZGlzYWJsZWQ+c3BhbntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWZ9LmRyb3Bkb3duLWxpc3R7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZy10b3A6NnB4O3dpZHRoOi13ZWJraXQtbWF4LWNvbnRlbnQ7d2lkdGg6LW1vei1tYXgtY29udGVudDt3aWR0aDptYXgtY29udGVudDtib3R0b206MzBweDtwYWRkaW5nLWJvdHRvbTo1cHg7bWFyZ2luLWJvdHRvbToxMHB4O3otaW5kZXg6OTk5OTtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czozcHg7YmFja2dyb3VuZDojZmZmO21hcmdpbi10b3A6MTBweDtib3gtc2hhZG93OjAgMXB4IDVweCAjOTU5NTk1fS5kcm9wZG93bi1saXN0IHVse3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmU7b3ZlcmZsb3c6YXV0bzttYXJnaW46MH0uZHJvcGRvd24tbGlzdCBsaXtwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3h7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjEwcHh9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94IGlucHV0e2JvcmRlcjowO3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAyNnB4fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveCBpbnB1dDpmb2N1c3tvdXRsaW5lOjB9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHh9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMrZGl2OmJlZm9yZSwubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpob3ZlcitkaXY6YmVmb3Jle2JvcmRlci1jb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTphY3RpdmUrZGl2OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2Rpdntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjA7Y29sb3I6IzAwMH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXY6YmVmb3Jle2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGVudDonJztjb2xvcjojMzM3YWI3O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXRvcDotOXB4O2JvcmRlcjoycHggc29saWQgIzMzN2FiNzt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOmFsbCAuNHMgZWFzZX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXY6YWZ0ZXJ7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dG9wOjUwJTtsZWZ0OjRweDt3aWR0aDo4cHg7aGVpZ2h0OjNweDttYXJnaW4tdG9wOi00cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjojZmZmO2JvcmRlci13aWR0aDowIDAgM3B4IDNweDstby1ib3JkZXItaW1hZ2U6bm9uZTtib3JkZXItaW1hZ2U6bm9uZTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMCl9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQrZGl2OmJlZm9yZXtib3JkZXItY29sb3I6I2NjY30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZDpmb2N1cytkaXY6YmVmb3JlIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmhvdmVyK2RpdjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmNoZWNrZWQrZGl2OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNjY2N9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXY6YWZ0ZXJ7Y29udGVudDonJzt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMSl9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXY6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOi4ycyBlYXNlLWluIGJvcmRlcnNjYWxlO2FuaW1hdGlvbjouMnMgZWFzZS1pbiBib3JkZXJzY2FsZTtiYWNrZ3JvdW5kOiMzMzdhYjd9QC13ZWJraXQta2V5ZnJhbWVzIGJvcmRlcnNjYWxlezUwJXtib3gtc2hhZG93OjAgMCAwIDJweCAjMzM3YWI3fX1Aa2V5ZnJhbWVzIGJvcmRlcnNjYWxlezUwJXtib3gtc2hhZG93OjAgMCAwIDJweCAjMzM3YWI3fX1gXSxcbiAgcHJvdmlkZXJzOiBbRFJPUERPV05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgX2RhdGE6IEFycmF5PExpc3RJdGVtRHJvcGRvd24+ID0gW107XG4gIHNlbGVjdGVkSXRlbXM6IEFycmF5PExpc3RJdGVtRHJvcGRvd24+ID0gW107XG4gIGlzRHJvcGRvd25PcGVuID0gZmFsc2U7XG4gIF9zZXR0aW5nczogSURyb3Bkb3duU2V0dGluZ3M7XG4gIF9wbGFjZWhvbGRlciA9ICdTZWxlY3QnO1xuICBmaWx0ZXI6IExpc3RJdGVtRHJvcGRvd24gPSBuZXcgTGlzdEl0ZW1Ecm9wZG93bih0aGlzLmRhdGEpO1xuXG4gIGRlZmF1bHRTZXR0aW5nczogSURyb3Bkb3duU2V0dGluZ3MgPSB7XG4gICAgc2luZ2xlU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBpZEZpZWxkOiAnaWQnLFxuICAgIHRleHRGaWVsZDogJ3RleHQnLFxuICAgIHBhcmVudEZpZWxkOiAncGFyZW50JyxcbiAgICBlbmFibGVDaGVja0FsbDogdHJ1ZSxcbiAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXG4gICAgdW5TZWxlY3RBbGxUZXh0OiAnVW5TZWxlY3QgQWxsJyxcbiAgICBhbGxvd1NlYXJjaEZpbHRlcjogZmFsc2UsXG4gICAgbGltaXRTZWxlY3Rpb246IC0xLFxuICAgIGNsZWFyU2VhcmNoRmlsdGVyOiB0cnVlLFxuICAgIG1heEhlaWdodDogMTk3LFxuICAgIGl0ZW1zU2hvd0xpbWl0OiA5OTk5OTk5OTk5OTksXG4gICAgc2VhcmNoUGxhY2Vob2xkZXJUZXh0OiAnU2VhcmNoJyxcbiAgICBub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHQ6ICdObyBkYXRhIGF2YWlsYWJsZScsXG4gICAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBzaG93U2VsZWN0ZWRJdGVtc0F0VG9wOiBmYWxzZVxuICB9O1xuXG4gIEBPdXRwdXQoJ29uRmlsdGVyQ2hhbmdlJykgb25GaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMaXN0SXRlbURyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdvblNlbGVjdCcpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW1Ecm9wZG93bj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xuICBAT3V0cHV0KCdvbkRlU2VsZWN0Jykgb25EZVNlbGVjdDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcbiAgQE91dHB1dCgnb25TZWxlY3RBbGwnKSBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtRHJvcGRvd24+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcbiAgQE91dHB1dCgnb25EZVNlbGVjdEFsbCcpIG9uRGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbURyb3Bkb3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgQElucHV0KCkgYnV0dG9uTGlzdENvbHVtblN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSAnU2VsZWN0JztcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzZXR0aW5ncyh2YWx1ZTogSURyb3Bkb3duU2V0dGluZ3MpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRTZXR0aW5ncywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0U2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc3QgX2l0ZW1zID0gdmFsdWUuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIC8vICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgaXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSAmJiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0pKSB7XG4gICAgICAvLyAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlLm1hcChcbiAgICAgICAgKGl0ZW06IGFueSkgPT5cbiAgICAgICAgICB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gbmV3IExpc3RJdGVtRHJvcGRvd24oaXRlbSlcbiAgICAgICAgICAgIDogbmV3IExpc3RJdGVtRHJvcGRvd24oe1xuICAgICAgICAgICAgICBpZDogaXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSxcbiAgICAgICAgICAgICAgdGV4dDogaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdLFxuICAgICAgICAgICAgICBwYXJlbnQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdXG4gICAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgb2JqLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAob2JqLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBvYmpbMF07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXG4gICAgICAgICAgICAgIHR5cGVvZiBmaXJzdEl0ZW0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBuZXcgTGlzdEl0ZW1Ecm9wZG93bihmaXJzdEl0ZW0pXG4gICAgICAgICAgICAgICAgOiBuZXcgTGlzdEl0ZW1Ecm9wZG93bih7XG4gICAgICAgICAgICAgICAgICBpZDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxuICAgICAgICAgICAgICAgICAgdGV4dDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0sXG4gICAgICAgICAgICAgICAgICBwYXJlbnQ6IGZpcnN0SXRlbVt0aGlzLl9zZXR0aW5ncy5wYXJlbnRGaWVsZF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKGUuYm9keS5tc2cpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBfZGF0YSA9IG9iai5tYXAoXG4gICAgICAgICAgKGl0ZW06IGFueSkgPT5cbiAgICAgICAgICAgIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IG5ldyBMaXN0SXRlbURyb3Bkb3duKGl0ZW0pXG4gICAgICAgICAgICAgIDogbmV3IExpc3RJdGVtRHJvcGRvd24oe1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxuICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA+IDApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBfZGF0YS5zcGxpY2UoMCwgdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IF9kYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sob2JqKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIC8vIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgLy8gfVxuXG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuYnV0dG9uTGlzdENvbHVtblN0eWxlID0gXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiO1xuICB9XG5cbiAgc2hvd0J1dHRvbigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLl9zZXR0aW5ncy5lbmFibGVDaGVja0FsbCA9IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlOyAvLyAhdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZUNoZWNrQWxsICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2hvdWxkIGJlIGRpc2FibGVkIGluIHNpbmdsZSBzZWxlY3Rpb24gbW9kZVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1TaG93UmVtYWluaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSB0aGlzLl9zZXR0aW5ncy5pdGVtc1Nob3dMaW1pdDtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIHB1YmxpYyBvblRvdWNoZWQoKSB7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bigpIHtcbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgLy8gY2xlYXIgc2VhcmNoIHRleHRcbiAgICBpZiAodGhpcy5fc2V0dGluZ3MuY2xlYXJTZWFyY2hGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyLnRleHQgPSAnJztcbiAgICB9XG4gIH1cbiAgdG9nZ2xlRHJvcGRvd24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSAhdGhpcy5pc0Ryb3Bkb3duT3BlbjtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNBbGxJdGVtc1NlbGVjdGVkKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX2RhdGEuc2xpY2UoKTtcbiAgICAgIHRoaXMub25TZWxlY3RBbGwuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAvLyB0aGlzLm9uRGVTZWxlY3RBbGwuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICB9XG5cbiAgaXNBbGxJdGVtc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgfVxuXG5cbiAgZW1pdHRlZFZhbHVlKHZhbDogYW55KTogYW55IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhbC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkID09PSBpdGVtLnRleHQpIHtcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKGl0ZW0udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWQucHVzaCh0aGlzLm9iamVjdGlmeShpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGlmICh2YWwuaWQgPT09IHZhbC50ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbC50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdGlmeSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIG9iamVjdGlmeSh2YWw6IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0gPSB2YWwuaWQ7XG4gICAgb2JqW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0gPSB2YWwudGV4dDtcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MucGFyZW50RmllbGRdID0gdmFsLnBhcmVudDtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICB9XG4gIG9uRmlsdGVyVGV4dENoYW5nZSgkZXZlbnQpIHtcbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKCRldmVudDogYW55LCBpdGVtOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZm91bmQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSk7XG4gICAgY29uc3QgYWxsb3dBZGQgPSB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA9PT0gLTEgfHwgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIDwgdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24pO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChhbGxvd0FkZCkge1xuICAgICAgICB0aGlzLmFkZFNlbGVjdGVkKGl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIHRoaXMuX3NldHRpbmdzLmNsb3NlRHJvcERvd25PblNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2VsZWN0ZWQoaXRlbTogTGlzdEl0ZW1Ecm9wZG93bikge1xuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJlbnRJdGVtID0gdGhpcy5fZGF0YS5maWx0ZXIoeCA9PiB4LnRleHQgPT09IGl0ZW0ucGFyZW50KTtcbiAgICAgIHZhciBwYXJlbnRJdGVtc2VsZXRlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnRleHQgPT09IGl0ZW0ucGFyZW50KTtcbiAgICAgIGlmIChwYXJlbnRJdGVtLmxlbmd0aCA+IDAgJiYgcGFyZW50SXRlbXNlbGV0ZWQubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2gocGFyZW50SXRlbVswXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZEl0ZW0gPSB0aGlzLl9kYXRhLmZpbHRlcih4ID0+IHgucGFyZW50ID09PSBpdGVtLnRleHQpO1xuICAgICAgdmFyIGNoaWxkSXRlbXNlbGV0ZWQgPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0udGV4dCk7XG4gICAgICBpZiAoY2hpbGRJdGVtLmxlbmd0aCA+IDAgJiYgY2hpbGRJdGVtc2VsZXRlZC5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChjaGlsZEl0ZW1bMF0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkKGl0ZW1TZWw6IExpc3RJdGVtRHJvcGRvd24pIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbVNlbC5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0ucGFyZW50KS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHMgPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgPT09IGl0ZW0udGV4dCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGVsZW1lbnQpICE9PSAtMSAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UodGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxldCBkZVNlbGVjdGVkSXRlbXMgPSBBcnJheTxMaXN0SXRlbURyb3Bkb3duPigpO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIC8vICBpZih0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZih0aGlzLl9kYXRhW2ldKSA9PT0gLTEpXG4gICAgLy8gIHtcbiAgICAvLyAgIGRlU2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2RhdGFbaV0pO1xuICAgIC8vICB9XG5cbiAgICAvLyB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gICAgdGhpcy5vbkRlU2VsZWN0LmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XG4gIH1cblxuICBpc1NlbGVjdGVkKGNsaWNrZWRJdGVtOiBMaXN0SXRlbURyb3Bkb3duKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoY2xpY2tlZEl0ZW0uaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbURyb3Bkb3duIH0gZnJvbSAnLi4vbW9kZWxzL211bHRpc2VsZWN0Lm1vZGVsJztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnbmcyTGlzdEZpbHRlcicsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpdGVtczogTGlzdEl0ZW1Ecm9wZG93bltdLCBmaWx0ZXI6IExpc3RJdGVtRHJvcGRvd24pOiBMaXN0SXRlbURyb3Bkb3duW10ge1xyXG4gICAgICAgIGlmICghaXRlbXMgfHwgIWZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW06IExpc3RJdGVtRHJvcGRvd24pID0+IHRoaXMuYXBwbHlGaWx0ZXIoaXRlbSwgZmlsdGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXIoaXRlbTogTGlzdEl0ZW1Ecm9wZG93biwgZmlsdGVyOiBMaXN0SXRlbURyb3Bkb3duKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEoZmlsdGVyLnRleHQgJiYgaXRlbS50ZXh0ICYmIGl0ZW0udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnRleHQudG9Mb3dlckNhc2UoKSkgPT09IC0xKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgY2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnLCAnJGV2ZW50LnRhcmdldCddKVxyXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBEaXJlY3RpdmUsIENvbXBvbmVudCwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hNYWdpY1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uRGlyZWN0aXZlfSBmcm9tICcuL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEb21DaGFuZ2VEaXJlY3RpdmV9IGZyb20gJy4vbmd4LW1hZ2ljLXRhYmxlL25neC1tYWdpYy10YWJsZS1jaGFuZ2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vc29ydC9zb3J0LnBpcGUnO1xyXG5pbXBvcnQgeyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1udW1lcmljLWZpbHRlci9uZ3gtbnVtZXJpYy1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4U3RyaW5nRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZW51bS1maWx0ZXIvbmd4LWVudW0tZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEJvb2xlYW5GaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1ib29sZWFuLWZpbHRlci9uZ3gtYm9vbGVhbi1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdEZpbHRlclBpcGUgfSBmcm9tICcuL25neC1tdWx0aXNlbGVjdC1kcm9wZG93bi9saXN0LWZpbHRlci5waXBlJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG4vLyBpbXBvcnQgeyBOZ3hNdWx0aXNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbXVsdGlzZWxlY3QtZHJvcGRvd24vbmd4LW11bHRpc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW05neE1hZ2ljVGFibGVDb21wb25lbnQsXHJcbiAgICBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCxcclxuICAgIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgRGlyZWN0aW9uRGlyZWN0aXZlLFxyXG4gICAgRG9tQ2hhbmdlRGlyZWN0aXZlLFxyXG4gICAgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcbiAgICBMaXN0RmlsdGVyUGlwZV0sXHJcbiAgZXhwb3J0czogW05neE1hZ2ljVGFibGVDb21wb25lbnQsXHJcbiAgICBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCxcclxuICAgIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ3hTdHJpbmdGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBEaXJlY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBEb21DaGFuZ2VEaXJlY3RpdmUsXHJcbiAgICBOZ3hOdW1lcmljRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4Qm9vbGVhbkZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neE11bHRpc2VsZWN0RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50XSxcclxuICAgXHJcbiAgc2NoZW1hczogWyBOT19FUlJPUlNfU0NIRU1BIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljVGFibGVNb2R1bGUgeyB9XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudCB7XHJcbi8vICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBuZ01vZHVsZTogTmd4TXVsdGlzZWxlY3REcm9wZG93bkNvbXBvbmVudFxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLElBQUE7OztzQkFEQTtJQUlDLENBQUE7Ozs7OztBQ0RELElBQUE7OztvQkFIQTtJQU1DLENBQUE7Ozs7OztB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

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

module.exports = "<div class=\"container\" style=\" width:800px; height: 400px;\">\r\n\r\n  <ngx-magic-table [isRTL]=\"true\" [rows]=\"data\" buttonListColumnStyle=\"btn btn-outline-info\" buttonSaveTableStyle=\"btn btn-outline-info\"\r\n    [customSort]=\"false\" sort=\"Type\" [sortDirection]=\"0\" [paginated]=\"true\" [pageSize]=\"3\"\r\n    [customPaginate]=\"false\" [currentPage]=\"2\" [pageSizes]=\"[3, 5, 20, 50, 100]\" (pageSizesChange)=\"pageSizesChange($event)\"\r\n    (pageChange)=\"pageChange($event)\" tcellClass=\"text-center\" trowClass=\"table-primary\" (selectedChange)=\"selectChanged($event)\"\r\n    selectedClass=\"table-secondary\" [loadTable]=\"table\" (saveTable)=\"saveTable($event)\" (columnsArrangeChange)=\"columnsArrangeChange($event)\">\r\n\r\n    <ngx-column-template [visible]=\"true\" name=\"Numbers\" index=\"1\" cellWidth=\"600\" [sortable]=\"false\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}} </ng-template> -->\r\n\r\n      <!-- <ng-template let-rows=\"rows\" let-cell=\"cell\" name=\"filter\">\r\n                <ngx-string-filter [rows]=\"rows\" [cell]=\"cell\" (filterChange)=\"logAll($event)\"></ngx-string-filter>\r\n            </ng-template> -->\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Phone\" parent=\"Numbers\" index=\"2\" cellWidth=\"150\" [visible]=\"true\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Phone}}</ng-template>\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Id\" parent=\"Numbers\" index=\"1\" [draggable]=\"false\" cellWidth=\"150\" [visible]=\"false\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">\r\n        {{row.Id}}\r\n      </ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Type\" parent=\"Numbers\" collection=\"Type\" index=\"1\" [draggable]=\"false\" cellWidth=\"150\"\r\n      [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Type[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Size\" parent=\"Numbers\" collection=\"Size\" index=\"1\" [draggable]=\"false\" cellWidth=\"150\"\r\n      [visible]=\"false\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Size[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" cellWidth=\"200\" [visible]=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n  </ngx-magic-table>\r\n\r\n</div>"

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