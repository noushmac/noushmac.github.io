(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-magic-table/fesm5/ngx-magic-table.js":
/*!*******************************************************!*\
  !*** ./dist/ngx-magic-table/fesm5/ngx-magic-table.js ***!
  \*******************************************************/
/*! exports provided: NgxMagicTableComponent, NgxColumnTemplateComponent, NgxMagicTableModule, ɵg, ɵe, ɵf, ɵa, ɵc, ɵd, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMagicTableComponent", function() { return NgxMagicTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxColumnTemplateComponent", function() { return NgxColumnTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMagicTableModule", function() { return NgxMagicTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgxBooleanFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgxEnumFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DirectionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NamedTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxNumericFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgxStringFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-uid */ "./node_modules/angular-uid/angular-uid.js");
/* harmony import */ var angular_uid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_uid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








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
var SortDirection = {
    Unspecified: -1,
    Ascending: 0,
    Descending: 1,
};
SortDirection[SortDirection.Unspecified] = "Unspecified";
SortDirection[SortDirection.Ascending] = "Ascending";
SortDirection[SortDirection.Descending] = "Descending";

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
        this.sortDirection = SortDirection.Ascending;
        this.hidden = false;
        this.selectedClass = 'table-secondary';
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnsArrangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tableClass = 'table';
        this.theadClass = 'thead-light';
        this.tbodyClass = '';
        this.trowClass = '';
        this.tcellClass = '';
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
        this.generateCells();
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
            item.Width = item.Childs.length === 0 ? +t.cellWidth : item.Childs.map(function (i) { return +i.Width; })
                .reduce(function (sum, current) { return sum + current; }, 0);
            item.Name = t.name;
            result.push(item);
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
                _this.lowerCells.push(c);
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
                this.sortDirection === SortDirection.Ascending
                    ? SortDirection.Descending
                    : SortDirection.Ascending;
        }
        else {
            newDirection = SortDirection.Ascending;
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
     * @param {?} cell
     * @param {?} mEvent
     * @return {?}
     */
    NgxMagicTableComponent.prototype.resizeHandle = /**
     * @param {?} cell
     * @param {?} mEvent
     * @return {?}
     */
    function (cell, mEvent) {
        var _this = this;
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
        var /** @type {?} */ lastCell = allCells.find(function (i) { return i.name === lastHeaderItem.Name; });
        var /** @type {?} */ widthLastCell = +lastCell.cellWidth;
        this.unsubscribeMouseMove = this.renderer.listen('body', 'mousemove', function (event) {
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
        this.unsubscribeMouseUp = this.renderer.listen('body', 'mouseup', function (event) {
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
                    template: "<div [ngClass]=\"[isRTL ? 'rtl' : 'ltr']\">\n  <div class=\"main\">\n    <div class=\"paddingDiv\" [style.width.px]=\"tableWidth\">\n      <table [ngClass]=\"tableClass\" class=\"rz-table\">\n        <thead class=\"ngxThead\" [ngClass]=\"theadClass\">\n          <tr *ngFor=\"let cellRow of cells\">\n            <th *ngFor=\"let cell of cellRow\" [style.width.px]=\"cell.cellWidth\" [attr.visible]=\"cell.visible\" [name]=\"cell.name\" [id]=\"uid+'-'+cell.name+'-head'\"\n              [draggable]=\"cell.template.draggable\" (drop)=\"drop(cell)\" (dragover)=\"allowDrop($event)\" (dragstart)=\"drag(cell)\"\n              [attr.colspan]=\"cell.colSpan\" [attr.rowspan]=\"cell.rowSpan\">\n              <div [id]=\"cell.name+'resizable'\" (mousedown)=\"resizeHandle(cell,$event)\" class=\"rz-handle\">\n              </div>\n              <div (click)=\"sortToggle(cell)\">\n                <ng-template [ngTemplateOutlet]=\"cell.template.header\" [ngTemplateOutletContext]=\"{cell: cell, direction: (cell.name === sort) ? sortDirection : undefined}\">\n                </ng-template>\n              </div>\n              <ng-container *ngIf=\"cell.template.filter\">\n                <div ngbDropdown (click)=\"$event.stopPropagation()\" class=\"dropdown float-right\">\n                  <button ngbDropdownToggle type=\"button\" [ngClass]=\"[cell.template.filters.length == 0 ? 'btn-default' : 'btn-warning']\" class=\"btn \"\n                    [id]=\"cell.name + '-' + uid  + '-filter'\">\n                    <i class=\"fa fa-filter\"></i>\n                  </button>\n                  <div ngbDropdownMenu [aria-labelledby]=\"cell.name + '-' + uid  + '-filter'\" class=\"dropdown-menu\" (click)=\"$event.stopPropagation()\">\n                    <div class=\"container\">\n                      <ng-template [ngTemplateOutlet]=\"cell.template.filter\" [ngTemplateOutletContext]=\"{cell: cell, rows: rows}\"></ng-template>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </th>\n          </tr>\n        </thead>\n        <tbody class=\"ngxTbody\" [ngClass]=\"tbodyClass\" *ngIf=\"paginated\">\n          <ng-container *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort} | paginate: {\n        itemsPerPage: pageSize,\n        currentPage: currentPage,\n        totalItems: customPaginate ? totalCount : rows.length,\n        id: uid }\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\" (click)=\"selectRow(row)\" [ngClass]=\"[row === selectedRow ? selectedClass : trowClass]\">\n              <ng-container *ngFor=\"let cell of lowerCells\">\n                <td [style.width.px]=\"cell.cellWidth\" [ngClass]=\"tcellClass\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n        <tbody [ngClass]=\"tbodyClass\" *ngIf=\"!paginated\">\n          <ng-container (click)=\"selectRow(row)\" [ngClass]=\"[row === selectedRow ? selectedClass : trowClass ]\" *ngFor=\"let row of rows | sort:{field: sort, direction: sortDirection, active: !customSort}\">\n            <tr *ngFor=\"let i of Arr(getLcm(row)).fill(1); let in = index\">\n              <ng-container *ngFor=\"let cell of lowerCells\">\n                <td [style.width.px]=\"cell.cellWidth\"  [ngClass]=\"tcellClass\" *ngIf=\"((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) % getLcm(row) === 0\"\n                  [attr.rowspan]=\"getLcm(row) / (cell.template.collection !== '' ? Math.max(row[cell.template.collection].length, 1) : 1)\">\n                  <ng-template [ngTemplateOutlet]=\"cell.template.body\" [ngTemplateOutletContext]=\"{row: row, cell: cell, index: ((in) * (cell.template.collection === '' ? 1 : row[cell.template.collection].length)) / getLcm(row)}\"></ng-template>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"btn-group paging\" *ngIf=\"paginated\">\n    <pagination-controls (pageChange)=\"selectPage($event)\" previousLabel=\"\" nextLabel=\"\" [id]=\"uid\"></pagination-controls>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <div *ngIf=\"pageSizes.length\" class=\"dropdown\">\n      <select class=\"btn btn-secondary btn-sm dropdown-toggle\" [value]='pageSize' (change)=\"changePerPage($event.target.value)\">\n        <option *ngFor=\"let p of pageSizes\" class=\"btn btn-sm btn-secondary\">{{p}}</option>\n      </select>\n    </div>\n  </div>\n\n</div>",
                    styles: ["table thead th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[draggable=true]{-khtml-user-drag:element;-webkit-user-drag:element}select.btn-sm{padding:.1rem;display:inline-flex}table{table-layout:fixed}table.rz-table{display:block;width:auto;table-layout:fixed;border-collapse:collapse}table.rz-table th{position:relative;min-width:25px}table.rz-table th .rz-handle{width:2px;height:100%;position:absolute;top:0;right:0;cursor:ew-resize!important;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px)}table.rz-table th .rz-handle:hover{background:repeating-linear-gradient(45deg,#6c757d00,#6c757d 2px,#6c757d 2px,#6c757d00 4px)}.rtl table.rz-table th .rz-handle{right:auto;left:0}.rtl{direction:rtl!important}.ltr{direction:ltr!important}.main{overflow:auto}.paging{width:100%}.paddingDiv{padding:10px}.ngxThead{display:block;width:100%}.ngxTbody{height:-webkit-fill-available;display:block;overflow-y:auto;overflow-x:hidden}.table td,.table th{word-break:break-all}.table td{border:1px solid #797b7e}"]
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
                if (this._direction === 0) {
                    this.renderer.addClass(this.el.nativeElement, 'fa-arrow-up');
                }
                if (this._direction !== 0) {
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
            if (direction === SortDirection.Ascending) {
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
var NgxMagicTableModule = /** @class */ (function () {
    function NgxMagicTableModule() {
    }
    NgxMagicTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                    ],
                    declarations: [NgxMagicTableComponent,
                        NamedTemplateDirective,
                        SortPipe,
                        NgxColumnTemplateComponent,
                        NgxNumericFilterComponent,
                        NgxStringFilterComponent,
                        NgxEnumFilterComponent,
                        DirectionDirective,
                        NgxBooleanFilterComponent],
                    exports: [NgxMagicTableComponent,
                        NgxColumnTemplateComponent,
                        NamedTemplateDirective,
                        NgxStringFilterComponent,
                        DirectionDirective,
                        NgxNumericFilterComponent,
                        NgxBooleanFilterComponent,
                        NgxEnumFilterComponent],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
                },] },
    ];
    return NgxMagicTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9QYWdpbmctaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL3NvcnQtaW5wdXQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2hlYWRlci1pdGVtLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtbmFtZWQtdGVtcGxhdGUvbmd4LW5hbWVkLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtbWFnaWMtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS9uZ3gtZGlyZWN0aW9uLWNvbHVtbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvc29ydC9zb3J0LnBpcGUudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL251bWVyaWMtZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1udW1lcmljLWZpbHRlci9uZ3gtbnVtZXJpYy1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9zdHJpbmctZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1zdHJpbmctZmlsdGVyL25neC1zdHJpbmctZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXRhYmxlL2xpYi9tb2RlbHMvZW51bS1maWx0ZXIudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbmd4LWVudW0tZmlsdGVyL25neC1lbnVtLWZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy10YWJsZS9saWIvbW9kZWxzL2Jvb2xlYW4tZmlsdGVyLnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1ib29sZWFuLWZpbHRlci9uZ3gtYm9vbGVhbi1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtdGFibGUvbGliL25neC1tYWdpYy10YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luZ0lucHV0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5nSW5wdXQgaW1wbGVtZW50cyBJUGFnaW5nSW5wdXQge1xyXG4gICBwYWdlOiBudW1iZXI7XHJcbiAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvcnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IFNvcnREaXJlY3Rpb24gZnJvbSAnLi9zb3J0LWRpcmVjdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydElucHV0IGltcGxlbWVudHMgSVNvcnRJbnB1dCB7XHJcbiAgIHNvcnQ6IHN0cmluZztcclxuICAgZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICduZ3gtbWFnaWMtdGFibGUvbGliL21vZGVscy9oZWFkZXItY2VsbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVySXRlbSB7XHJcbiAgICBwdWJsaWMgV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBUaXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2hpbGRzOiBIZWFkZXJJdGVtW107XHJcbiAgICBwdWJsaWMgU29ydGFibGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgVGVtcGxhdGU6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEhlYWRlckl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgICAgICB0aGlzLlRpdGxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5JbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5Tb3J0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5XaWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLlZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQ2hpbGRzID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuL2hlYWRlci1pdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDZWxsIHtcclxuICBwdWJsaWMgY2VsbFdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgY29sU3BhbjogbnVtYmVyO1xyXG4gIHB1YmxpYyByb3dTcGFuOiBudW1iZXI7XHJcbiAgcHVibGljIHNvcnRhYmxlOiBhbnk7XHJcbiAgcHVibGljIHRlbXBsYXRlOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudDtcclxuICBwdWJsaWMgSGVhZGVySXRlbTogSGVhZGVySXRlbTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SGVhZGVyQ2VsbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuY29sU3BhbiA9IDE7XHJcbiAgICB0aGlzLnJvd1NwYW4gPSAxO1xyXG4gICAgdGhpcy5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgSW5qZWN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblxuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25hbWVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOYW1lZFRlbXBsYXRlRGlyZWN0aXZlICB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBAQXR0cmlidXRlKCduYW1lJykgcHVibGljIG5hbWUsXG4gICAgICBASW5qZWN0KFRlbXBsYXRlUmVmKSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7XG4gIH1cbn0iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sXHJcbiAgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLy4uL25neC1uYW1lZC10ZW1wbGF0ZS9uZ3gtbmFtZWQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWNvbHVtbi10ZW1wbGF0ZScsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXJlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc29ydGFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbGxlY3Rpb246IHN0cmluZztcclxuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNlbGxXaWR0aDogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJzOiBhbnlbXSA9IFtdO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8TmFtZWRUZW1wbGF0ZURpcmVjdGl2ZT47XHJcblxyXG4gIHB1YmxpYyBoZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHVibGljIGJvZHk6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHVibGljIGZpbHRlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICB0aGlzLnBhcmVudCA9ICcnO1xyXG4gICAgdGhpcy50aXRsZSA9ICcnO1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLmNlbGxXaWR0aCA9IDEwMDtcclxuICAgIHRoaXMuc29ydGFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29sbGVjdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5vcm1hbGl6ZUluZGV4ZXModGVtcGxhdGVzOiBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudFtdKSB7XHJcbiAgICB0ZW1wbGF0ZXMuc29ydCgoZmlyc3QsIHNlY29uZCkgPT4ge1xyXG4gICAgICBpZiAoZmlyc3QucGFyZW50IDwgc2Vjb25kLnBhcmVudCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LnBhcmVudCA+IHNlY29uZC5wYXJlbnQpIHsgcmV0dXJuIDE7IH1cclxuXHJcbiAgICAgIGlmIChmaXJzdC5pbmRleCA8IHNlY29uZC5pbmRleCkgeyByZXR1cm4gLTE7IH1cclxuICAgICAgaWYgKGZpcnN0LmluZGV4ID4gc2Vjb25kLmluZGV4KSB7IHJldHVybiAxOyB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSkuZm9yRWFjaCgodCwgaW5kZXgpID0+IHtcclxuICAgICAgdC5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBjb25zdCBoID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2hlYWRlcicpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBoID8gaC50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGIgPSB0aGlzLnRlbXBsYXRlcy5maW5kKHQgPT4gdC5uYW1lID09PSAnYm9keScpO1xyXG4gICAgdGhpcy5ib2R5ID0gYiA/IGIudGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBmID0gdGhpcy50ZW1wbGF0ZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gJ2ZpbHRlcicpO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmID8gZi50ZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5pbXBvcnQgeyBQYWdpbmdJbnB1dCB9IGZyb20gJy4uL21vZGVscy9QYWdpbmctaW5wdXQnO1xyXG5pbXBvcnQgeyBTb3J0SW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvc29ydC1pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtY29sdW1uLXRlbXBsYXRlL25neC1jb2x1bW4tdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL25neC1uYW1lZC10ZW1wbGF0ZS9uZ3gtbmFtZWQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IFNvcnREaXJlY3Rpb24gZnJvbSAnLi4vbW9kZWxzL3NvcnQtZGlyZWN0aW9uJztcclxuaW1wb3J0IGd1aWQgZnJvbSAnYW5ndWxhci11aWQnO1xyXG5pbXBvcnQgeyBJUGFnaW5nSW5wdXQsIElTb3J0SW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvaW50ZXJmYWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1tYWdpYy10YWJsZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cIltpc1JUTCA/ICdydGwnIDogJ2x0ciddXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nRGl2XCIgW3N0eWxlLndpZHRoLnB4XT1cInRhYmxlV2lkdGhcIj5cclxuICAgICAgPHRhYmxlIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIiBjbGFzcz1cInJ6LXRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzPVwibmd4VGhlYWRcIiBbbmdDbGFzc109XCJ0aGVhZENsYXNzXCI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNlbGxSb3cgb2YgY2VsbHNcIj5cclxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjZWxsIG9mIGNlbGxSb3dcIiBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiBbYXR0ci52aXNpYmxlXT1cImNlbGwudmlzaWJsZVwiIFtuYW1lXT1cImNlbGwubmFtZVwiIFtpZF09XCJ1aWQrJy0nK2NlbGwubmFtZSsnLWhlYWQnXCJcclxuICAgICAgICAgICAgICBbZHJhZ2dhYmxlXT1cImNlbGwudGVtcGxhdGUuZHJhZ2dhYmxlXCIgKGRyb3ApPVwiZHJvcChjZWxsKVwiIChkcmFnb3Zlcik9XCJhbGxvd0Ryb3AoJGV2ZW50KVwiIChkcmFnc3RhcnQpPVwiZHJhZyhjZWxsKVwiXHJcbiAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJjZWxsLmNvbFNwYW5cIiBbYXR0ci5yb3dzcGFuXT1cImNlbGwucm93U3BhblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2lkXT1cImNlbGwubmFtZSsncmVzaXphYmxlJ1wiIChtb3VzZWRvd24pPVwicmVzaXplSGFuZGxlKGNlbGwsJGV2ZW50KVwiIGNsYXNzPVwicnotaGFuZGxlXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwic29ydFRvZ2dsZShjZWxsKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuaGVhZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjZWxsOiBjZWxsLCBkaXJlY3Rpb246IChjZWxsLm5hbWUgPT09IHNvcnQpID8gc29ydERpcmVjdGlvbiA6IHVuZGVmaW5lZH1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNlbGwudGVtcGxhdGUuZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBjbGFzcz1cImRyb3Bkb3duIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbmdiRHJvcGRvd25Ub2dnbGUgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIltjZWxsLnRlbXBsYXRlLmZpbHRlcnMubGVuZ3RoID09IDAgPyAnYnRuLWRlZmF1bHQnIDogJ2J0bi13YXJuaW5nJ11cIiBjbGFzcz1cImJ0biBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtpZF09XCJjZWxsLm5hbWUgKyAnLScgKyB1aWQgICsgJy1maWx0ZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWx0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBbYXJpYS1sYWJlbGxlZGJ5XT1cImNlbGwubmFtZSArICctJyArIHVpZCAgKyAnLWZpbHRlcidcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuZmlsdGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntjZWxsOiBjZWxsLCByb3dzOiByb3dzfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzPVwibmd4VGJvZHlcIiBbbmdDbGFzc109XCJ0Ym9keUNsYXNzXCIgKm5nSWY9XCJwYWdpbmF0ZWRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzIHwgc29ydDp7ZmllbGQ6IHNvcnQsIGRpcmVjdGlvbjogc29ydERpcmVjdGlvbiwgYWN0aXZlOiAhY3VzdG9tU29ydH0gfCBwYWdpbmF0ZToge1xyXG4gICAgICAgIGl0ZW1zUGVyUGFnZTogcGFnZVNpemUsXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgIHRvdGFsSXRlbXM6IGN1c3RvbVBhZ2luYXRlID8gdG90YWxDb3VudCA6IHJvd3MubGVuZ3RoLFxyXG4gICAgICAgIGlkOiB1aWQgfVwiPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGkgb2YgQXJyKGdldExjbShyb3cpKS5maWxsKDEpOyBsZXQgaW4gPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHRyb3dDbGFzc11cIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGxvd2VyQ2VsbHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiBbbmdDbGFzc109XCJ0Y2VsbENsYXNzXCIgKm5nSWY9XCIoKGluKSAqIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnID8gMSA6IHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCkpICUgZ2V0TGNtKHJvdykgPT09IDBcIlxyXG4gICAgICAgICAgICAgICAgICBbYXR0ci5yb3dzcGFuXT1cImdldExjbShyb3cpIC8gKGNlbGwudGVtcGxhdGUuY29sbGVjdGlvbiAhPT0gJycgPyBNYXRoLm1heChyb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgsIDEpIDogMSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNlbGwudGVtcGxhdGUuYm9keVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cm93OiByb3csIGNlbGw6IGNlbGwsIGluZGV4OiAoKGluKSAqIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnID8gMSA6IHJvd1tjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb25dLmxlbmd0aCkpIC8gZ2V0TGNtKHJvdyl9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDx0Ym9keSBbbmdDbGFzc109XCJ0Ym9keUNsYXNzXCIgKm5nSWY9XCIhcGFnaW5hdGVkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIChjbGljayk9XCJzZWxlY3RSb3cocm93KVwiIFtuZ0NsYXNzXT1cIltyb3cgPT09IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRDbGFzcyA6IHRyb3dDbGFzcyBdXCIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzIHwgc29ydDp7ZmllbGQ6IHNvcnQsIGRpcmVjdGlvbjogc29ydERpcmVjdGlvbiwgYWN0aXZlOiAhY3VzdG9tU29ydH1cIj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpIG9mIEFycihnZXRMY20ocm93KSkuZmlsbCgxKTsgbGV0IGluID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGxvd2VyQ2VsbHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC5jZWxsV2lkdGhcIiAgW25nQ2xhc3NdPVwidGNlbGxDbGFzc1wiICpuZ0lmPVwiKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAlIGdldExjbShyb3cpID09PSAwXCJcclxuICAgICAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJnZXRMY20ocm93KSAvIChjZWxsLnRlbXBsYXRlLmNvbGxlY3Rpb24gIT09ICcnID8gTWF0aC5tYXgocm93W2NlbGwudGVtcGxhdGUuY29sbGVjdGlvbl0ubGVuZ3RoLCAxKSA6IDEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjZWxsLnRlbXBsYXRlLmJvZHlcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Jvdzogcm93LCBjZWxsOiBjZWxsLCBpbmRleDogKChpbikgKiAoY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uID09PSAnJyA/IDEgOiByb3dbY2VsbC50ZW1wbGF0ZS5jb2xsZWN0aW9uXS5sZW5ndGgpKSAvIGdldExjbShyb3cpfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgcGFnaW5nXCIgKm5nSWY9XCJwYWdpbmF0ZWRcIj5cclxuICAgIDxwYWdpbmF0aW9uLWNvbnRyb2xzIChwYWdlQ2hhbmdlKT1cInNlbGVjdFBhZ2UoJGV2ZW50KVwiIHByZXZpb3VzTGFiZWw9XCJcIiBuZXh0TGFiZWw9XCJcIiBbaWRdPVwidWlkXCI+PC9wYWdpbmF0aW9uLWNvbnRyb2xzPlxyXG4gICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICA8ZGl2ICpuZ0lmPVwicGFnZVNpemVzLmxlbmd0aFwiIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgPHNlbGVjdCBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbdmFsdWVdPSdwYWdlU2l6ZScgKGNoYW5nZSk9XCJjaGFuZ2VQZXJQYWdlKCRldmVudC50YXJnZXQudmFsdWUpXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlU2l6ZXNcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiPnt7cH19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2B0YWJsZSB0aGVhZCB0aHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9W2RyYWdnYWJsZT10cnVlXXsta2h0bWwtdXNlci1kcmFnOmVsZW1lbnQ7LXdlYmtpdC11c2VyLWRyYWc6ZWxlbWVudH1zZWxlY3QuYnRuLXNte3BhZGRpbmc6LjFyZW07ZGlzcGxheTppbmxpbmUtZmxleH10YWJsZXt0YWJsZS1sYXlvdXQ6Zml4ZWR9dGFibGUucnotdGFibGV7ZGlzcGxheTpibG9jazt3aWR0aDphdXRvO3RhYmxlLWxheW91dDpmaXhlZDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9dGFibGUucnotdGFibGUgdGh7cG9zaXRpb246cmVsYXRpdmU7bWluLXdpZHRoOjI1cHh9dGFibGUucnotdGFibGUgdGggLnJ6LWhhbmRsZXt3aWR0aDoycHg7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtjdXJzb3I6ZXctcmVzaXplIWltcG9ydGFudDtiYWNrZ3JvdW5kOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgMnB4LHJnYmEoMCwwLDAsLjE1KSAycHgscmdiYSgwLDAsMCwuMTUpIDRweCl9dGFibGUucnotdGFibGUgdGggLnJ6LWhhbmRsZTpob3ZlcntiYWNrZ3JvdW5kOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIzZjNzU3ZDAwLCM2Yzc1N2QgMnB4LCM2Yzc1N2QgMnB4LCM2Yzc1N2QwMCA0cHgpfS5ydGwgdGFibGUucnotdGFibGUgdGggLnJ6LWhhbmRsZXtyaWdodDphdXRvO2xlZnQ6MH0ucnRse2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fS5sdHJ7ZGlyZWN0aW9uOmx0ciFpbXBvcnRhbnR9Lm1haW57b3ZlcmZsb3c6YXV0b30ucGFnaW5ne3dpZHRoOjEwMCV9LnBhZGRpbmdEaXZ7cGFkZGluZzoxMHB4fS5uZ3hUaGVhZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9Lm5neFRib2R5e2hlaWdodDotd2Via2l0LWZpbGwtYXZhaWxhYmxlO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVufS50YWJsZSB0ZCwudGFibGUgdGh7d29yZC1icmVhazpicmVhay1hbGx9LnRhYmxlIHRke2JvcmRlcjoxcHggc29saWQgIzc5N2I3ZX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNUYWJsZUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQpXHJcbiAgc2V0IHRlbXBsYXRlcyh2YWx1ZTogUXVlcnlMaXN0PE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50Pikge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXNBcnJheSA9IHZhbHVlLnRvQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSA9IG51bGw7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCA9IG51bGw7XHJcbiAgICB0aGlzLnRhYmxlV2lkdGggPSAyMDA7XHJcbiAgICB0aGlzLmlzUlRMID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByb3dzKHJvd3M6IEFycmF5PFQ+KSB7XHJcbiAgICBpZiAoIXJvd3MpIHtcclxuICAgICAgdGhpcy5fcm93cyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcm93cyA9IHJvd3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCByb3dzKCk6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9yb3dzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwYWdpbmF0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGN1c3RvbVNvcnQ6IEJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3VzdG9tUGFnaW5hdGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHRvdGFsQ291bnQ6IE51bWJlciA9IDA7XHJcbiAgQElucHV0KClcclxuICBwYWdlU2l6ZTogTnVtYmVyID0gMTA7XHJcbiAgQElucHV0KClcclxuICBjdXJyZW50UGFnZTogTnVtYmVyID0gMTtcclxuICBASW5wdXQoKVxyXG4gIHBhZ2VTaXplczogbnVtYmVyW10gPSBbMTAsIDIwLCA1MCwgMTAwXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzb3J0OiBTdHJpbmcgPSAnJztcclxuICBASW5wdXQoKVxyXG4gIHNvcnREaXJlY3Rpb246IFNvcnREaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLkFzY2VuZGluZztcclxuXHJcbiAgQElucHV0KClcclxuICBoaWRkZW46IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGVkQ2xhc3M6IFN0cmluZyA9ICd0YWJsZS1zZWNvbmRhcnknO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnaW5nSW5wdXQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVNvcnRJbnB1dD4oKTtcclxuICBAT3V0cHV0KClcclxuICBwYWdlU2l6ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2luZ0lucHV0PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBAT3V0cHV0KClcclxuICBjb2x1bW5zQXJyYW5nZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICB0YWJsZUNsYXNzOiBTdHJpbmcgPSAndGFibGUnOyAvLyB0YWJsZS1ib3JkZXJlZFxyXG4gIEBJbnB1dCgpXHJcbiAgdGhlYWRDbGFzczogU3RyaW5nID0gJ3RoZWFkLWxpZ2h0JztcclxuICBASW5wdXQoKVxyXG4gIHRib2R5Q2xhc3M6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpXHJcbiAgdHJvd0NsYXNzOiBTdHJpbmcgPSAnJztcclxuICBASW5wdXQoKVxyXG4gIHRjZWxsQ2xhc3M6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzUlRMOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgdGFibGVXaWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyBfcm93cyA9IEFycmF5PFQ+KCk7XHJcbiAgcHVibGljIE1hdGggPSBNYXRoO1xyXG4gIHB1YmxpYyBBcnIgPSBBcnJheTtcclxuICBwdWJsaWMgdGVtcGxhdGVzQXJyYXk6IE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50W107XHJcbiAgcHVibGljIGNlbGxzOiBBcnJheTxBcnJheTxIZWFkZXJDZWxsPj4gPSBuZXcgQXJyYXk8QXJyYXk8SGVhZGVyQ2VsbD4+KCk7XHJcbiAgcHVibGljIGhlYWQ6IEFycmF5PEhlYWRlckl0ZW0+ID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcbiAgcHVibGljIGxvd2VyQ2VsbHM6IEFycmF5PEhlYWRlckNlbGw+ID0gbmV3IEFycmF5PEhlYWRlckNlbGw+KCk7XHJcbiAgcHVibGljIGRlcHRoID0gMDtcclxuICBwdWJsaWMgdWlkID0gZ3VpZCgpO1xyXG4gIHB1YmxpYyBzZWxlY3RlZFJvdzogVDtcclxuICBwdWJsaWMgZHJhZ2dpbmdDZWxsOiBIZWFkZXJDZWxsO1xyXG4gIHB1YmxpYyBzb3J0SW5wdXQ6IFNvcnRJbnB1dCA9IG5ldyBTb3J0SW5wdXQoKTtcclxuICBwdWJsaWMgcGFnaW5nSW5wdXQ6IFBhZ2luZ0lucHV0ID0gbmV3IFBhZ2luZ0lucHV0KCk7XHJcblxyXG4gIHBpeGNlbFhCZWZvcmU6IG51bWJlcjtcclxuICB3aWR0aEJlZm9yZTogbnVtYmVyO1xyXG4gIHdpZHRoQWZ0ZXI6IG51bWJlcjtcclxuICByZXNpemVFbGVtZW50OiBFbGVtZW50O1xyXG4gIHVuc3Vic2NyaWJlTW91c2VNb3ZlOiAoKSA9PiB2b2lkO1xyXG4gIHVuc3Vic2NyaWJlTW91c2VVcDogKCkgPT4gdm9pZDtcclxuICBwaXhjZWxYQWZ0ZXI6IG51bWJlcjtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgTmd4Q29sdW1uVGVtcGxhdGVDb21wb25lbnQubm9ybWFsaXplSW5kZXhlcyh0aGlzLnRlbXBsYXRlc0FycmF5KTtcclxuICAgIHRoaXMudGVtcGxhdGVzQXJyYXkuZm9yRWFjaChpID0+XHJcbiAgICAgIGkuY2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5lcmF0ZUNlbGxzKCkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGNtKHJvdzogYW55KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGxjbSA9IHRoaXMubGNtT2ZMaXN0KFxyXG4gICAgICB0aGlzLmxvd2VyQ2VsbHMubWFwKGkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpLnRlbXBsYXRlLmNvbGxlY3Rpb24gPT09ICcnXHJcbiAgICAgICAgICA/IDFcclxuICAgICAgICAgIDogTWF0aC5tYXgocm93W2kudGVtcGxhdGUuY29sbGVjdGlvbi50b1N0cmluZygpXS5sZW5ndGgsIDEpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIHJldHVybiBsY207XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2NkKGEsIGIpOiBudW1iZXIge1xyXG4gICAgaWYgKGIgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGE7IC8vIHNvIHRoYXQgdGhlIHJlY3Vyc2lvbiBkb2VzIG5vdCBnbyBvbiBmb3JldmVyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nY2QoYiwgYSAlIGIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGxjbU9mTGlzdChhcnIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZCA9IHRoaXM7XHJcbiAgICBjb25zdCB0ID0gYXJyLnJlZHVjZSgoYSwgYikgPT4gZC5sY20oYSwgYikpO1xyXG4gICAgcmV0dXJuIHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGNtKGEsIGIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChhICogYikgLyB0aGlzLmdjZChhLCBiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhbGxvd0Ryb3AoeDogYW55KSB7XHJcbiAgICB4LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJvcCh4OiBIZWFkZXJDZWxsKSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZ0NlbGwgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kcmFnZ2luZ0NlbGwudGVtcGxhdGUucGFyZW50ICE9PSB4LnRlbXBsYXRlLnBhcmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG1wID0geC50ZW1wbGF0ZS5pbmRleDtcclxuICAgIHgudGVtcGxhdGUuaW5kZXggPSB0aGlzLmRyYWdnaW5nQ2VsbC50ZW1wbGF0ZS5pbmRleDtcclxuICAgIHRoaXMuZHJhZ2dpbmdDZWxsLnRlbXBsYXRlLmluZGV4ID0gdG1wO1xyXG4gICAgdGhpcy5kcmFnZ2luZ0NlbGwgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgdGhpcy5jb2x1bW5zQXJyYW5nZUNoYW5nZS5lbWl0KFxyXG4gICAgICB0aGlzLnRlbXBsYXRlc0FycmF5Lm1hcCh0ID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogdC5uYW1lLFxyXG4gICAgICAgICAgcGFyZW50OiB0LnBhcmVudCxcclxuICAgICAgICAgIGluZGV4OiB0LmluZGV4XHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhZyh4OiBIZWFkZXJDZWxsKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nQ2VsbCA9IHg7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBnZW5lcmF0ZUNlbGxzKCkge1xyXG4gICAgdGhpcy5oZWFkID0gdGhpcy5nZW5lcmF0ZUhlYWRlcnMoKTtcclxuICAgIHRoaXMudGFibGVXaWR0aCA9IHRoaXMuaGVhZC5tYXAoaSA9PiAraS5XaWR0aClcclxuICAgICAgLnJlZHVjZTxudW1iZXI+KChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQsIDApO1xyXG4gICAgdGhpcy5kZXB0aCA9IE1hdGgubWF4KFxyXG4gICAgICAuLi50aGlzLmhlYWQubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRlcHRoKGl0ZW0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNlbGxzID0gW107XHJcbiAgICB0aGlzLmxvd2VyQ2VsbHMgPSBbXTtcclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyQ2VsbHModGhpcy5oZWFkLCAwLCB0aGlzLmRlcHRoKTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVIZWFkZXJzKGhlYWRlck5hbWU6IFN0cmluZyA9ICcnKTogQXJyYXk8SGVhZGVySXRlbT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PEhlYWRlckl0ZW0+KCk7XHJcbiAgICB0aGlzLnRlbXBsYXRlc0FycmF5XHJcbiAgICAgIC5maWx0ZXIodCA9PiB0LnBhcmVudCA9PT0gaGVhZGVyTmFtZSlcclxuICAgICAgLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IHtcclxuICAgICAgICBpZiAoZmlyc3QuaW5kZXggPiBzZWNvbmQuaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpcnN0LmluZGV4IDwgc2Vjb25kLmluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIGxldCBpdGVtOiBIZWFkZXJJdGVtO1xyXG4gICAgICAgIGl0ZW0gPSBuZXcgSGVhZGVySXRlbSgpO1xyXG4gICAgICAgIGl0ZW0uVGl0bGUgPSB0LnRpdGxlO1xyXG4gICAgICAgIGl0ZW0uSW5kZXggPSArdC5pbmRleDtcclxuICAgICAgICBpdGVtLlNvcnRhYmxlID0gdC5zb3J0YWJsZTtcclxuICAgICAgICBpdGVtLlRlbXBsYXRlID0gdDtcclxuICAgICAgICBpdGVtLlZpc2libGUgPSB0LnZpc2libGU7XHJcbiAgICAgICAgaXRlbS5DaGlsZHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycyh0Lm5hbWUpO1xyXG4gICAgICAgIGl0ZW0uV2lkdGggPSBpdGVtLkNoaWxkcy5sZW5ndGggPT09IDAgPyArdC5jZWxsV2lkdGggOiBpdGVtLkNoaWxkcy5tYXAoaSA9PiAraS5XaWR0aClcclxuICAgICAgICAgIC5yZWR1Y2U8bnVtYmVyPigoc3VtLCBjdXJyZW50KSA9PiBzdW0gKyBjdXJyZW50LCAwKTtcclxuICAgICAgICBpdGVtLk5hbWUgPSB0Lm5hbWU7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVIZWFkZXJDZWxscyhcclxuICAgIGl0ZW1zOiBIZWFkZXJJdGVtW10sXHJcbiAgICBsZXZlbDogbnVtYmVyLFxyXG4gICAgZGVwdGg6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuY2VsbHMubGVuZ3RoIDw9IGxldmVsKSB7XHJcbiAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQXJyYXk8SGVhZGVyQ2VsbD4oKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3cgPSB0aGlzLmNlbGxzW2xldmVsXTtcclxuICAgIGl0ZW1zLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0LkluZGV4LnZhbHVlT2YoKSAtIHNlY29uZC5JbmRleC52YWx1ZU9mKCkpXHJcbiAgICAgIC5tYXAoaCA9PiB7XHJcbiAgICAgICAgY29uc3QgYyA9IG5ldyBIZWFkZXJDZWxsKCk7XHJcbiAgICAgICAgYy5uYW1lID0gaC5OYW1lO1xyXG4gICAgICAgIGMuaW5kZXggPSBoLkluZGV4O1xyXG4gICAgICAgIGMudGl0bGUgPSBoLlRpdGxlO1xyXG4gICAgICAgIGMudmlzaWJsZSA9IGguVmlzaWJsZTtcclxuICAgICAgICBjLmNlbGxXaWR0aCA9IGguV2lkdGg7XHJcbiAgICAgICAgYy5zb3J0YWJsZSA9IGguU29ydGFibGU7XHJcbiAgICAgICAgYy50ZW1wbGF0ZSA9IGguVGVtcGxhdGU7XHJcbiAgICAgICAgYy5IZWFkZXJJdGVtID0gaDtcclxuICAgICAgICBjLmNvbFNwYW4gPSB0aGlzLmNvdW50SGVhZGVycyhoKTtcclxuICAgICAgICBjLnJvd1NwYW4gPSBoLkNoaWxkcy5sZW5ndGggPiAwID8gMSA6IGRlcHRoIC0gbGV2ZWw7XHJcbiAgICAgICAgcm93LnB1c2goYyk7XHJcbiAgICAgICAgaWYgKGguQ2hpbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlSGVhZGVyQ2VsbHMoaC5DaGlsZHMsIGxldmVsICsgMSwgZGVwdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvd2VyQ2VsbHMucHVzaChjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNvdW50SGVhZGVycyhpdGVtOiBIZWFkZXJJdGVtKTogbnVtYmVyIHtcclxuICAgIGlmIChpdGVtLkNoaWxkcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaGVhZGVyQ291bnQgPSBpdGVtLkNoaWxkcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50SGVhZGVycyhjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaGVhZGVyQ291bnQucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBEZXB0aChpdGVtOiBIZWFkZXJJdGVtKTogbnVtYmVyIHtcclxuICAgIGlmIChpdGVtLkNoaWxkcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZGVwdGggPSBNYXRoLm1heChcclxuICAgICAgICAuLi5pdGVtLkNoaWxkcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuRGVwdGgoY2hpbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBkZXB0aCArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RSb3cocm93OiBUKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRSb3cpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZVBlclBhZ2UocGFnZVNpemU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMucGFnZVNpemUgPT09IHBhZ2VTaXplKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXN0b21QYWdpbmF0ZSkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5nSW5wdXQucGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgYXMgbnVtYmVyO1xyXG4gICAgdGhpcy5wYWdpbmdJbnB1dC5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG4gICAgdGhpcy5wYWdlU2l6ZUNoYW5nZS5lbWl0KFxyXG4gICAgICB0aGlzLnBhZ2luZ0lucHV0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gcGFnZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tUGFnaW5hdGUpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5nSW5wdXQucGFnZSA9IHBhZ2U7XHJcbiAgICB0aGlzLnBhZ2luZ0lucHV0LnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZSBhcyBudW1iZXI7XHJcblxyXG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQoXHJcbiAgICAgIHRoaXMucGFnaW5nSW5wdXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29ydFRvZ2dsZShjZWxsOiBIZWFkZXJDZWxsKSB7XHJcbiAgICBpZiAoY2VsbC5zb3J0YWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdEaXJlY3Rpb246IFNvcnREaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKHRoaXMuc29ydCA9PT0gY2VsbC5uYW1lKSB7XHJcbiAgICAgIG5ld0RpcmVjdGlvbiA9XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID09PSBTb3J0RGlyZWN0aW9uLkFzY2VuZGluZ1xyXG4gICAgICAgICAgPyBTb3J0RGlyZWN0aW9uLkRlc2NlbmRpbmdcclxuICAgICAgICAgIDogU29ydERpcmVjdGlvbi5Bc2NlbmRpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdEaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLkFzY2VuZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tU29ydCkge1xyXG4gICAgICB0aGlzLnNvcnQgPSBjZWxsLm5hbWU7XHJcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuc29ydElucHV0LnNvcnQgPSBjZWxsLm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgdGhpcy5zb3J0SW5wdXQuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoXHJcbiAgICAgIHRoaXMuc29ydElucHV0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2l6ZUhhbmRsZShjZWxsOiBIZWFkZXJDZWxsLCBtRXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhYmxlV2lkdGhUZW1wID0gdGhpcy50YWJsZVdpZHRoO1xyXG4gICAgdGhpcy5waXhjZWxYQmVmb3JlID0gbUV2ZW50Lng7XHJcbiAgICB0aGlzLndpZHRoQmVmb3JlID0gK2NlbGwuY2VsbFdpZHRoO1xyXG4gICAgY29uc3QgZHJhZ2dhYmxlID0gY2VsbC50ZW1wbGF0ZS5kcmFnZ2FibGU7XHJcbiAgICBjb25zdCBzb3J0YWJsZSA9IGNlbGwudGVtcGxhdGUuc29ydGFibGU7XHJcbiAgICBsZXQgbGFzdEhlYWRlckl0ZW0gPSBjZWxsLkhlYWRlckl0ZW07XHJcbiAgICB3aGlsZSAobGFzdEhlYWRlckl0ZW0uQ2hpbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGFzdEhlYWRlckl0ZW0gPSBsYXN0SGVhZGVySXRlbS5DaGlsZHNbbGFzdEhlYWRlckl0ZW0uQ2hpbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWxsQ2VsbHMgPSB0aGlzLmNlbGxzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoYik7IH0pO1xyXG4gICAgY29uc3QgbGFzdENlbGwgPSBhbGxDZWxscy5maW5kKGkgPT4gaS5uYW1lID09PSBsYXN0SGVhZGVySXRlbS5OYW1lKTtcclxuXHJcblxyXG4gICAgY29uc3Qgd2lkdGhMYXN0Q2VsbCA9ICtsYXN0Q2VsbC5jZWxsV2lkdGg7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXHJcbiAgICAgICdib2R5JyxcclxuICAgICAgJ21vdXNlbW92ZScsXHJcbiAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICBjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNlbGwudGVtcGxhdGUuc29ydGFibGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgV2lkdGhBZGQgPSBldmVudC54IC0gdGhpcy5waXhjZWxYQmVmb3JlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUlRMKSB7XHJcbiAgICAgICAgICBXaWR0aEFkZCA9IHRoaXMucGl4Y2VsWEJlZm9yZSAtIGV2ZW50Lng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENlbGwuY2VsbFdpZHRoID49IDUwKSB7XHJcbiAgICAgICAgICBjZWxsLmNlbGxXaWR0aCA9IHRoaXMud2lkdGhCZWZvcmUgKyAoV2lkdGhBZGQpO1xyXG4gICAgICAgICAgbGFzdENlbGwuY2VsbFdpZHRoID0gd2lkdGhMYXN0Q2VsbCArIChXaWR0aEFkZCk7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlV2lkdGggPSB0YWJsZVdpZHRoVGVtcCArIChXaWR0aEFkZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2JvZHknLCAnbW91c2V1cCcsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGxhc3RDZWxsLmNlbGxXaWR0aCA8IDUwKSB7XHJcbiAgICAgICAgbGFzdENlbGwuY2VsbFdpZHRoID0gNTA7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdENlbGwudGVtcGxhdGUuY2VsbFdpZHRoID0gbGFzdENlbGwuY2VsbFdpZHRoO1xyXG5cclxuICAgICAgaWYgKGNlbGwuY2VsbFdpZHRoIDwgNTApIHtcclxuICAgICAgICBjZWxsLmNlbGxXaWR0aCA9IDUwO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwudGVtcGxhdGUuY2VsbFdpZHRoID0gY2VsbC5jZWxsV2lkdGg7XHJcblxyXG4gICAgICBjZWxsLnRlbXBsYXRlLmRyYWdnYWJsZSA9IGRyYWdnYWJsZTtcclxuICAgICAgY2VsbC50ZW1wbGF0ZS5zb3J0YWJsZSA9IHNvcnRhYmxlO1xyXG5cclxuXHJcbiAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlTW91c2VNb3ZlKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZU1vdXNlTW92ZSgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZU1vdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy51bnN1YnNjcmliZU1vdXNlVXApIHtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlTW91c2VVcCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVNb3VzZVVwID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzZXREaXJlY3Rpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcbiAgICBfZGlyZWN0aW9uOiBudW1iZXI7XHJcbiAgICBASW5wdXQoJ3NldERpcmVjdGlvbicpXHJcbiAgICBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctdXAnKTtcclxuICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmYS1hcnJvdy11cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBTb3J0RGlyZWN0aW9uICBmcm9tICcuLi9tb2RlbHMvc29ydC1kaXJlY3Rpb24nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzb3J0J1xufSlcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShyb3dzOiBhbnlbXSwgYXJnczogYW55KTogYW55W10ge1xuICAgIGNvbnN0IGZpZWxkID0gYXJncy5maWVsZDtcbiAgICBjb25zdCBhY3RpdmUgPSBhcmdzLmFjdGl2ZSB8fCB0cnVlO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFNvcnREaXJlY3Rpb24uQXNjZW5kaW5nKSB7XG4gICAgICAgIHJvd3Muc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoYVtmaWVsZF0gPCBiW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYVtmaWVsZF0gPiBiW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3dzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbZmllbGRdIDwgYltmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG59XG4iLCJleHBvcnQgbmFtZXNwYWNlIE51bWVyaWNGaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgICAgICBncmVhdGVyVGhhbiA9ICdncmVhdGVyIHRoYW4nLFxyXG4gICAgICAgIG5vdEdyZWF0ZXJUaGFuID0gJ25vdCBncmVhdGVyIHRoYW4nLFxyXG4gICAgICAgIHNtYWxsZXJUaGFuID0gJ3NtYWxsZXIgdGhhbicsXHJcbiAgICAgICAgbm90U21hbGxlclRoYW4gPSAnbm90IHNtYWxsZXIgdGhhbidcclxuXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoXHJcbiAgICAgICAgKHR5cGUpID0+IGlzTmFOKDxhbnk+dHlwZSkgJiYgdHlwZSAhPT0gJ3ZhbHVlcydcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tICcuLi9tb2RlbHMvaGVhZGVyLWNlbGwnO1xyXG5pbXBvcnQgeyBOdW1lcmljRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL251bWVyaWMtZmlsdGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbnVtZXJpYy1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJWYWx1ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCIgc3R5bGU9XCJcIj5cclxuICAgIDxzZWxlY3QgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclR5cGVcIj5cclxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBOdW1lcmljRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNlbGw6IEhlYWRlckNlbGw7XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBOdW1lcmljRmlsdGVyID0gTnVtZXJpY0ZpbHRlcjtcclxuICBwdWJsaWMgZmlsdGVyVmFsdWUgPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkUm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFkZFJvdygpIHtcclxuICAgIHRoaXMuZmlsdGVyVmFsdWUucHVzaCh7ZmlsdGVyVHlwZTogTnVtZXJpY0ZpbHRlci5maWx0ZXJzLmVxdWFscywgZmlsdGVyVmFsdWU6ICcnfSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT09ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBTdHJpbmdGaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgICAgIG5vdEVxdWFscyA9ICdub3QgZXF1YWxzJyxcclxuICAgICAgICBzdGFydHNXaXRoID0gJ3N0YXJ0cyB3aXRoJyxcclxuICAgICAgICBub3RTdGFydHNXaXRoID0gJ25vdCBzdGFydHMgd2l0aCcsXHJcbiAgICAgICAgZW5kc1dpdGggPSAnZW5kcyB3aXRoJyxcclxuICAgICAgICBub3RFbmRzV2l0aCA9ICdub3QgZW5kcyB3aXRoJyxcclxuICAgICAgICBjb250YWlucyA9ICdjb250YWlucycsXHJcbiAgICAgICAgbm90Q29udGFpbnMgPSAnbm90IGNvbnRhaW5zJ1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgU3RyaW5nRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL3N0cmluZy1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1zdHJpbmctZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgU3RyaW5nRmlsdGVyLnZhbHVlcygpXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJmLmZpbHRlclZhbHVlXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgKGNsaWNrKT1cImFkZFJvdygpXCI+XHJcbiAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiPkFwcGx5PC9idXR0b24+YCxcclxuICBzdHlsZXM6IFtgLmlucHV0LWdyb3Vwe3dpZHRoOjMwMHB4fS5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9ue2Rpc3BsYXk6aW5saW5lLWZsZXh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgU3RyaW5nRmlsdGVyID0gU3RyaW5nRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBTdHJpbmdGaWx0ZXIuZmlsdGVycy5jb250YWlucywgZmlsdGVyVmFsdWU6ICcnfSlcclxuICAgIHRoaXMuYXBwbHkoKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZmlsdGVyVmFsdWUuZmlsdGVyKGkgPT4gaS5maWx0ZXJUeXBlICE9IHVuZGVmaW5lZCAmJiBpLmZpbHRlclZhbHVlICE9ICcnKTtcclxuICAgIHRoaXMuY2VsbC50ZW1wbGF0ZS5maWx0ZXJzID0gZjtcclxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoe25hbWU6IHRoaXMuY2VsbC5uYW1lLCBmaWx0ZXJzOiBmfSk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFbnVtRmlsdGVyIHtcclxuXHJcbiAgICBleHBvcnQgZW51bSBmaWx0ZXJzIHtcclxuICAgICAgICBlcXVhbHMgPSAnZXF1YWxzJyxcclxuICAgICAgICBub3RFcXVhbHMgPSAnbm90IGVxdWFscycsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdmFsdWVzKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmlsdGVycykuZmlsdGVyKFxyXG4gICAgICAgICh0eXBlKSA9PiBpc05hTig8YW55PnR5cGUpICYmIHR5cGUgIT09ICd2YWx1ZXMnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDZWxsIH0gZnJvbSAnLi4vbW9kZWxzL2hlYWRlci1jZWxsJztcclxuaW1wb3J0IHsgRW51bUZpbHRlciB9IGZyb20gJy4uL21vZGVscy9lbnVtLWZpbHRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVudW0tZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyVmFsdWU7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPVwiXCI+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVwiIFsobmdNb2RlbCldPVwiZi5maWx0ZXJUeXBlXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgRW51bUZpbHRlci52YWx1ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2Vjb25kYXJ5XCI+e3twfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIiBbKG5nTW9kZWwpXT1cImYuZmlsdGVyVmFsdWVcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBwIG9mIGl0ZW1zXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIj57e3B9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlUm93KGkpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiYWRkUm93KClcIj5cclxuICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseSgpXCI+QXBwbHk8L2J1dHRvbj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZ3JvdXB7d2lkdGg6MzAwcHh9LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtYWRkb257ZGlzcGxheTppbmxpbmUtZmxleH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW51bUZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY2VsbDogSGVhZGVyQ2VsbDtcclxuICBASW5wdXQoKSBpdGVtczogYW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIEVudW1GaWx0ZXIgPSBFbnVtRmlsdGVyO1xyXG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRSb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWRkUm93KCkge1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZS5wdXNoKHtmaWx0ZXJUeXBlOiBFbnVtRmlsdGVyLmZpbHRlcnMuZXF1YWxzLCBmaWx0ZXJWYWx1ZTogJyd9KVxyXG4gICAgdGhpcy5hcHBseSgpO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICBjb25zdCBmID0gdGhpcy5maWx0ZXJWYWx1ZS5maWx0ZXIoaSA9PiBpLmZpbHRlclR5cGUgIT0gdW5kZWZpbmVkICYmIGkuZmlsdGVyVmFsdWUgIT0gJycpO1xyXG4gICAgdGhpcy5jZWxsLnRlbXBsYXRlLmZpbHRlcnMgPSBmO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5jZWxsLm5hbWUsIGZpbHRlcnM6IGZ9KTtcclxuICB9XHJcbn1cclxuIiwiXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEJvb2xlYW5GaWx0ZXIge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIGZpbHRlcnMge1xyXG4gICAgICAgIGVxdWFscyA9ICdlcXVhbHMnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcygpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihcclxuICAgICAgICAodHlwZSkgPT4gaXNOYU4oPGFueT50eXBlKSAmJiB0eXBlICE9PSAndmFsdWVzJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gJy4uL21vZGVscy9oZWFkZXItY2VsbCc7XHJcbmltcG9ydCB7IEJvb2xlYW5GaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvYm9vbGVhbi1maWx0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1ib29sZWFuLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlclZhbHVlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT1cIlwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJWYWx1ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJyZW1vdmVSb3coaSlcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIChjbGljayk9XCJhZGRSb3coKVwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5KClcIj5BcHBseTwvYnV0dG9uPmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1ncm91cHt3aWR0aDozMDBweH0uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1hZGRvbntkaXNwbGF5OmlubGluZS1mbGV4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjZWxsOiBIZWFkZXJDZWxsO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgQm9vbGVhbkZpbHRlciA9IEJvb2xlYW5GaWx0ZXI7XHJcbiAgcHVibGljIGZpbHRlclZhbHVlID0gW107XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhZGRSb3coKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goe2ZpbHRlclR5cGU6IEJvb2xlYW5GaWx0ZXIuZmlsdGVycy5lcXVhbHMsIGZpbHRlclZhbHVlOiAnJ30pXHJcbiAgICB0aGlzLmFwcGx5KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseSgpIHtcclxuICAgIGNvbnN0IGYgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcihpID0+IGkuZmlsdGVyVHlwZSAhPSB1bmRlZmluZWQgJiYgaS5maWx0ZXJWYWx1ZSAhPSAnJyk7XHJcbiAgICB0aGlzLmNlbGwudGVtcGxhdGUuZmlsdGVycyA9IGY7XHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHtuYW1lOiB0aGlzLmNlbGwubmFtZSwgZmlsdGVyczogZn0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgRGlyZWN0aXZlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4TWFnaWNUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi9uZ3gtbWFnaWMtdGFibGUvbmd4LW1hZ2ljLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtbWFnaWMtdGFibGUvbmd4LWRpcmVjdGlvbi1jb2x1bW4uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LW5hbWVkLXRlbXBsYXRlL25neC1uYW1lZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vc29ydC9zb3J0LnBpcGUnO1xyXG5pbXBvcnQgeyBOZ3hDb2x1bW5UZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNvbHVtbi10ZW1wbGF0ZS9uZ3gtY29sdW1uLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1udW1lcmljLWZpbHRlci9uZ3gtbnVtZXJpYy1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4U3RyaW5nRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtc3RyaW5nLWZpbHRlci9uZ3gtc3RyaW5nLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFbnVtRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZW51bS1maWx0ZXIvbmd4LWVudW0tZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEJvb2xlYW5GaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1ib29sZWFuLWZpbHRlci9uZ3gtYm9vbGVhbi1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4TWFnaWNUYWJsZUNvbXBvbmVudCxcclxuICAgIE5hbWVkVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBTb3J0UGlwZSxcclxuICAgIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50LFxyXG4gICAgTmd4TnVtZXJpY0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCxcclxuICAgIE5neEVudW1GaWx0ZXJDb21wb25lbnQsXHJcbiAgICBEaXJlY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTmd4TWFnaWNUYWJsZUNvbXBvbmVudCxcclxuICAgIE5neENvbHVtblRlbXBsYXRlQ29tcG9uZW50LFxyXG4gICAgTmFtZWRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5neFN0cmluZ0ZpbHRlckNvbXBvbmVudCxcclxuICAgIERpcmVjdGlvbkRpcmVjdGl2ZSxcclxuICAgIE5neE51bWVyaWNGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBOZ3hCb29sZWFuRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgTmd4RW51bUZpbHRlckNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogWyBOT19FUlJPUlNfU0NIRU1BIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljVGFibGVNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFBOzs7c0JBREE7SUFJQyxDQUFBOzs7Ozs7QUNERCxJQUFBOzs7b0JBSEE7SUFNQyxDQUFBOzs7Ozs7QUNIRCxJQUFBO3dCQVN1QixJQUEwQjtRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQzs7cUJBbkI5QztJQXNCQyxDQUFBOzs7Ozs7QUNuQkQsSUFBQTt3QkFXcUIsSUFBMEI7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7cUJBckJ4QjtJQXVCQyxDQUFBOzs7Ozs7QUN2QkQ7SUFRRSxnQ0FDOEIsSUFBSSxFQUNGLFFBQTBCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQUE7UUFDRixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUV6RDs7Z0JBVkYsU0FBUyxTQUFDO29CQUVULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzs7O2dEQUlNLFNBQVMsU0FBQyxNQUFNO2dCQVRnQixXQUFXLHVCQVUzQyxNQUFNLFNBQUMsV0FBVzs7aUNBVnpCOzs7Ozs7O0FDQUE7O3VCQXNCc0IsSUFBSSxZQUFZLEVBQUU7dUJBR2QsRUFBRTtRQVF4QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Ozs7OztJQUdoQiwyQ0FBZ0I7Ozs7SUFBdkIsVUFBd0IsU0FBdUM7UUFDN0QsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUssRUFBRSxNQUFNO1lBQzNCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBRTtZQUNoRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1lBRS9DLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBRTtZQUM5QyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFBRSxPQUFPLENBQUMsQ0FBQzthQUFFO1lBQzdDLE9BQU8sQ0FBQyxDQUFDO1NBQ1YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2pCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsdURBQWtCOzs7SUFBbEI7UUFDRSxxQkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsR0FBQSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDekMscUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEdBQUEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLHFCQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxHQUFBLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztLQUMxQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozt1QkFFRSxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFFTCxNQUFNOzRCQUlOLGVBQWUsU0FBQyxzQkFBc0I7O3FDQTFCekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNxSEUsZ0NBQW9CLFFBQW1CLEVBQVUsRUFBYztRQUEzQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTt5QkFvQjFDLEtBQUs7MEJBRUosSUFBSTs4QkFFQSxLQUFLOzBCQUVWLENBQUM7d0JBRUgsRUFBRTsyQkFFQyxDQUFDO3lCQUVELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO29CQUd4QixFQUFFOzZCQUVjLGFBQWEsQ0FBQyxTQUFTO3NCQUdwQyxLQUFLOzZCQUVDLGlCQUFpQjswQkFHNUIsSUFBSSxZQUFZLEVBQWdCOzBCQUVoQyxJQUFJLFlBQVksRUFBYzs4QkFFMUIsSUFBSSxZQUFZLEVBQWdCOzhCQUdoQyxJQUFJLFlBQVksRUFBSztvQ0FFZixJQUFJLFlBQVksRUFBRTswQkFHcEIsT0FBTzswQkFFUCxhQUFhOzBCQUViLEVBQUU7eUJBRUgsRUFBRTswQkFFRCxFQUFFO3FCQU9SLEtBQUssRUFBSztvQkFDWCxJQUFJO21CQUNMLEtBQUs7cUJBRXVCLElBQUksS0FBSyxFQUFxQjtvQkFDdEMsSUFBSSxLQUFLLEVBQWM7MEJBQ2pCLElBQUksS0FBSyxFQUFjO3FCQUMvQyxDQUFDO21CQUNILElBQUksRUFBRTt5QkFHVyxJQUFJLFNBQVMsRUFBRTsyQkFDWCxJQUFJLFdBQVcsRUFBRTtRQW5GakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCO0lBVkQsc0JBQ0ksNkNBQVM7Ozs7O1FBRGIsVUFDYyxLQUE0QztZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2Qzs7O09BQUE7SUFTRCxzQkFDSSx3Q0FBSTs7OztRQU9SO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVZELFVBQ1MsSUFBYztZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1NBQ0Y7OztPQUFBOzs7O0lBZ0ZELG1EQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQywwQkFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQzNCLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsR0FBQSxDQUFDO1NBQUEsQ0FDaEQsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFTSx1Q0FBTTs7OztjQUFDLEdBQVE7UUFDcEIscUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNuQixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLEVBQUU7a0JBQy9CLENBQUM7a0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUNILENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQzs7Ozs7OztJQUdOLG9DQUFHOzs7OztjQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7Ozs7OztJQUdJLDBDQUFTOzs7O2NBQUMsR0FBRztRQUNsQixxQkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2YscUJBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7O0lBR0osb0NBQUc7Ozs7O2NBQUMsQ0FBQyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRzNCLDBDQUFTOzs7O2NBQUMsQ0FBTTtRQUNyQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7OztJQUdkLHFDQUFJOzs7O2NBQUMsQ0FBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQzdCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNELE9BQU87U0FDUjtRQUVELHFCQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ3ZCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO2dCQUNaLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO2FBQ2YsQ0FBQztTQUNILENBQUMsQ0FDSCxDQUFDOzs7Ozs7SUFHRyxxQ0FBSTs7OztjQUFDLENBQWE7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Ozs7O0lBRWQsOENBQWE7OztJQUF2QjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQSxDQUFDO2FBQzNDLE1BQU0sQ0FBUyxVQUFDLEdBQUcsRUFBRSxPQUFPLElBQUssT0FBQSxHQUFHLEdBQUcsT0FBTyxHQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksV0FDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDbkIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCLENBQUMsRUFDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsRDs7Ozs7SUFHUyxnREFBZTs7OztJQUF6QixVQUEwQixVQUF1QjtRQUFqRCxpQkE0QkM7UUE1QnlCLDJCQUFBLEVBQUEsZUFBdUI7UUFDL0MscUJBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWM7YUFDaEIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxVQUFVLEdBQUEsQ0FBQzthQUNwQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNsQixJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNWLENBQUM7YUFDRCxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ1IscUJBQUksSUFBZ0IsQ0FBQztZQUNyQixJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQSxDQUFDO2lCQUNsRixNQUFNLENBQVMsVUFBQyxHQUFHLEVBQUUsT0FBTyxJQUFLLE9BQUEsR0FBRyxHQUFHLE9BQU8sR0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUNMLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7Ozs7Ozs7SUFFUyxrREFBaUI7Ozs7OztJQUEzQixVQUNFLEtBQW1CLEVBQ25CLEtBQWEsRUFDYixLQUFhO1FBSGYsaUJBNkJDO1FBeEJDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFjLENBQUMsQ0FBQztTQUMxQztRQUNELHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTSxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFBLENBQUM7YUFDMUUsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNKLHFCQUFNLENBQUMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN0QixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4QixDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0YsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRVMsNkNBQVk7Ozs7SUFBdEIsVUFBdUIsSUFBZ0I7UUFBdkMsaUJBU0M7UUFSQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQ3ZDLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQyxDQUFDLENBQUM7WUFDSCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7Ozs7O0lBRVMsc0NBQUs7Ozs7SUFBZixVQUFnQixJQUFnQjtRQUFoQyxpQkFXQztRQVZDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxXQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDdEIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCLENBQUMsRUFDSCxDQUFDO1lBQ0YsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7Ozs7O0lBRU0sMENBQVM7Ozs7Y0FBQyxHQUFNO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7O0lBR3RDLDhDQUFhOzs7O2NBQUMsUUFBZ0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLHFCQUFHLElBQUksQ0FBQyxXQUFxQixDQUFBLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDOzs7Ozs7SUFHRywyQ0FBVTs7OztjQUFDLElBQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUM3QixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxxQkFBRyxJQUFJLENBQUMsUUFBa0IsQ0FBQSxDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDOzs7Ozs7SUFHRywyQ0FBVTs7OztjQUFDLElBQWdCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBRUQscUJBQUksWUFBMkIsQ0FBQztRQUVoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUMzQixZQUFZO2dCQUNWLElBQUksQ0FBQyxhQUFhLEtBQUssYUFBYSxDQUFDLFNBQVM7c0JBQzFDLGFBQWEsQ0FBQyxVQUFVO3NCQUN4QixhQUFhLENBQUMsU0FBUyxDQUFDO1NBQy9CO2FBQU07WUFDTCxZQUFZLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxxQkFBRyxJQUFJLENBQUMsSUFBYyxDQUFBLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7Ozs7Ozs7SUFHRyw2Q0FBWTs7Ozs7Y0FBQyxJQUFnQixFQUFFLE1BQWtCOztRQUN0RCxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzFDLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxxQkFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxjQUFjLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUNELHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLHFCQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsSUFBSSxHQUFBLENBQUMsQ0FBQztRQUdwRSxxQkFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDOUMsTUFBTSxFQUNOLFdBQVcsRUFDWCxVQUFBLEtBQUs7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQy9CLHFCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxLQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDekM7WUFFRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLENBQUM7Z0JBQy9DLFFBQVEsQ0FBQyxTQUFTLEdBQUcsYUFBYSxJQUFJLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsSUFBSSxRQUFRLENBQUMsQ0FBQzthQUMvQztTQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQUEsS0FBSztZQUNyRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFFO2dCQUMzQixRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUN6QjtZQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFFakQsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFHbEMsSUFBSSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7WUFFRCxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDaEM7U0FDRixDQUFDLENBQUM7OztnQkF6ZE4sU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxxaEtBd0VMO29CQUNMLE1BQU0sRUFBRSxDQUFDLDRrQ0FBNGtDLENBQUM7aUJBQ3ZsQzs7OztnQkF4RkMsU0FBUztnQkFIVCxVQUFVOzs7NEJBNkZULGVBQWUsU0FBQywwQkFBMEI7dUJBWTFDLEtBQUs7NEJBWUwsS0FBSzs2QkFFTCxLQUFLO2lDQUVMLEtBQUs7NkJBRUwsS0FBSzsyQkFFTCxLQUFLOzhCQUVMLEtBQUs7NEJBRUwsS0FBSzt1QkFHTCxLQUFLO2dDQUVMLEtBQUs7eUJBR0wsS0FBSztnQ0FFTCxLQUFLOzZCQUdMLE1BQU07NkJBRU4sTUFBTTtpQ0FFTixNQUFNO2lDQUdOLE1BQU07dUNBRU4sTUFBTTs2QkFHTixLQUFLOzZCQUVMLEtBQUs7NkJBRUwsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLEtBQUs7d0JBRUwsS0FBSzs7aUNBdkxSOzs7Ozs7O0FDQUE7SUFNSSw0QkFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUs7SUFFcEUsc0JBQ0kseUNBQVM7Ozs7O1FBRGIsVUFDYyxTQUFpQjtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNoRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDaEU7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7aUJBQ2xFO2FBQ0o7U0FDSjs7O09BQUE7O2dCQW5CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtpQkFDN0I7Ozs7Z0JBSjBCLFNBQVM7Z0JBQUUsVUFBVTs7OzRCQVEzQyxLQUFLLFNBQUMsY0FBYzs7NkJBUnpCOzs7Ozs7O0FDQUE7Ozs7Ozs7O0lBUUUsNEJBQVM7Ozs7O0lBQVQsVUFBVSxJQUFXLEVBQUUsSUFBUztRQUM5QixxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixxQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7UUFDbkMscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLFNBQVMsS0FBSyxhQUFhLENBQUMsU0FBUyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07b0JBQ3ZCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDdkIsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDWDt5QkFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzlCLE9BQU8sQ0FBQyxDQUFDO3FCQUNWO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxDQUFDO3FCQUNWO2lCQUNGLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTtvQkFDdkIsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUNYO3lCQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDOUIsT0FBTyxDQUFDLENBQUM7cUJBQ1Y7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLENBQUM7cUJBQ1Y7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7O2dCQWpDRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O21CQUxEOzs7Ozs7O0FDQUEsSUFBaUIsYUFBYTtBQUE5QixXQUFpQixhQUFhO0lBRTFCLElBQVksT0FRWDtJQVJELFdBQVksT0FBTztRQUNmLDRCQUFpQixDQUFBO1FBQ2pCLG1DQUF3QixDQUFBO1FBQ3hCLHVDQUE0QixDQUFBO1FBQzVCLDhDQUFtQyxDQUFBO1FBQ25DLHVDQUE0QixDQUFBO1FBQzVCLDhDQUFtQyxDQUFBO09BTjNCLE9BQU8sR0FBUCxxQkFBTyxLQUFQLHFCQUFPLFFBUWxCOzs7O0lBQ0Q7UUFDSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNsQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUssbUJBQU0sSUFBSSxFQUFDLElBQUksSUFBSSxLQUFLLFFBQVEsR0FBQSxDQUM5QyxDQUFDO0tBQ0w7SUFKZSxvQkFBTSxTQUlyQixDQUFBO0dBZlksYUFBYSxLQUFiLGFBQWEsUUFnQjdCOzs7Ozs7QUNoQkQ7SUErQkU7NEJBSnlCLElBQUksWUFBWSxFQUFFOzZCQUVwQixhQUFhOzJCQUNmLEVBQUU7S0FDTjs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7Ozs7SUFFTSw2Q0FBUzs7OztjQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFFUiwwQ0FBTTs7OztRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFFUix5Q0FBSzs7OztRQUNWLHFCQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssRUFBRSxHQUFBLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDOzs7Z0JBN0M5RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGd2QkFlcUQ7b0JBQy9ELE1BQU0sRUFBRSxDQUFDLGdGQUFnRixDQUFDO2lCQUMzRjs7Ozs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOytCQUVMLE1BQU07O29DQTNCVDs7Ozs7OztBQ0VBLElBQWlCLFlBQVk7QUFBN0IsV0FBaUIsWUFBWTtJQUV6QixJQUFZLE9BVVg7SUFWRCxXQUFZLE9BQU87UUFDZiw0QkFBaUIsQ0FBQTtRQUNqQixtQ0FBd0IsQ0FBQTtRQUN4QixxQ0FBMEIsQ0FBQTtRQUMxQiw0Q0FBaUMsQ0FBQTtRQUNqQyxpQ0FBc0IsQ0FBQTtRQUN0Qix3Q0FBNkIsQ0FBQTtRQUM3QixnQ0FBcUIsQ0FBQTtRQUNyQix1Q0FBNEIsQ0FBQTtPQVJwQixPQUFPLEdBQVAsb0JBQU8sS0FBUCxvQkFBTyxRQVVsQjs7OztJQUNEO1FBQ0UsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDaEMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFLLG1CQUFNLElBQUksRUFBQyxJQUFJLElBQUksS0FBSyxRQUFRLEdBQUEsQ0FDaEQsQ0FBQztLQUNIO0lBSmUsbUJBQU0sU0FJckIsQ0FBQTtHQWpCWSxZQUFZLEtBQVosWUFBWSxRQWtCMUI7Ozs7OztBQ3BCSDtJQStCRTs0QkFKd0IsSUFBSSxZQUFZLEVBQUU7NEJBRXBCLFlBQVk7MkJBQ2IsRUFBRTtLQUNOOzs7O0lBRWpCLDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmOzs7OztJQUVNLDRDQUFTOzs7O2NBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUVSLHlDQUFNOzs7O1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7UUFDbkYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUVSLHdDQUFLOzs7O1FBQ1YscUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7OztnQkE3QzlELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsK3VCQWVxRDtvQkFDL0QsTUFBTSxFQUFFLENBQUMsZ0ZBQWdGLENBQUM7aUJBQzNGOzs7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7K0JBRUwsTUFBTTs7bUNBM0JUOzs7Ozs7O0FDRUEsSUFBaUIsVUFBVTtBQUEzQixXQUFpQixVQUFVO0lBRXZCLElBQVksT0FHWDtJQUhELFdBQVksT0FBTztRQUNmLDRCQUFpQixDQUFBO1FBQ2pCLG1DQUF3QixDQUFBO09BRmhCLE9BQU8sR0FBUCxrQkFBTyxLQUFQLGtCQUFPLFFBR2xCOzs7O0lBQ0Q7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNoQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUssbUJBQU0sSUFBSSxFQUFDLElBQUksSUFBSSxLQUFLLFFBQVEsR0FBQSxDQUNoRCxDQUFDO0tBQ0g7SUFKZSxpQkFBTSxTQUlyQixDQUFBO0dBVlksVUFBVSxLQUFWLFVBQVUsUUFXeEI7Ozs7OztBQ2JIO0lBa0NFOzRCQUp3QixJQUFJLFlBQVksRUFBRTswQkFFdEIsVUFBVTsyQkFDVCxFQUFFO0tBQ047Ozs7SUFFakIseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7Ozs7O0lBRU0sMENBQVM7Ozs7Y0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBRVIsdUNBQU07Ozs7UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBRVIsc0NBQUs7Ozs7UUFDVixxQkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzs7O2dCQWhEOUQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwyMkJBaUJxRDtvQkFDL0QsTUFBTSxFQUFFLENBQUMsZ0ZBQWdGLENBQUM7aUJBQzNGOzs7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFFTCxNQUFNOztpQ0E5QlQ7Ozs7Ozs7QUNFQSxJQUFpQixhQUFhO0FBQTlCLFdBQWlCLGFBQWE7SUFFMUIsSUFBWSxPQUVYO0lBRkQsV0FBWSxPQUFPO1FBQ2YsNEJBQWlCLENBQUE7T0FEVCxPQUFPLEdBQVAscUJBQU8sS0FBUCxxQkFBTyxRQUVsQjs7OztJQUNEO1FBQ0UsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDaEMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFLLG1CQUFNLElBQUksRUFBQyxJQUFJLElBQUksS0FBSyxRQUFRLEdBQUEsQ0FDaEQsQ0FBQztLQUNIO0lBSmUsb0JBQU0sU0FJckIsQ0FBQTtHQVRZLGFBQWEsS0FBYixhQUFhLFFBVTNCOzs7Ozs7QUNaSDtJQTZCRTs0QkFKd0IsSUFBSSxZQUFZLEVBQUU7NkJBRW5CLGFBQWE7MkJBQ2YsRUFBRTtLQUNOOzs7O0lBRWpCLDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmOzs7OztJQUVNLDZDQUFTOzs7O2NBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUVSLDBDQUFNOzs7O1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUVSLHlDQUFLOzs7O1FBQ1YscUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7OztnQkEzQzlELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUscWdCQVlxRDtvQkFDL0QsTUFBTSxFQUFFLENBQUMsZ0ZBQWdGLENBQUM7aUJBQzNGOzs7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFFTCxNQUFNOztvQ0F6QlQ7Ozs7Ozs7QUNBQTs7OztnQkFlQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixTQUFTO3dCQUNULFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCO3dCQUNuQyxzQkFBc0I7d0JBQ3RCLFFBQVE7d0JBQ1IsMEJBQTBCO3dCQUMxQix5QkFBeUI7d0JBQ3pCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLHlCQUF5QixDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0I7d0JBQzlCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLHNCQUFzQixDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDOUI7OzhCQXhDRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

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

module.exports = "<div class=\"container\" style=\" width:800px; height: 400px;\">\r\n\r\n  <ngx-magic-table [isRTL]=\"false\" [rows]=\"data\" [customSort]=\"false\" sort=\"Phone\" sortDirection=\"SortDirection.Ascending\" [paginated]=\"true\"\r\n    [pageSize]=\"3\" [customPaginate]=\"false\" [currentPage]=\"2\" [pageSizes]=\"[3, 5, 20, 50, 100]\" (pageSizesChange)=\"pageSizesChange($event)\"\r\n    (pageChange)=\"pageChange($event)\" tcellClass=\"text-center\" trowClass=\"table-primary\" (selectedChange)=\"selectChanged($event)\"\r\n    selectedClass=\"table-secondary\" (columnsArrangeChange)=\"columnsArrangeChange($event)\">\r\n\r\n    <ngx-column-template name=\"Numbers\" index=\"1\" cellWidth=\"600\" [sortable]=\"false\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}} </ng-template> -->\r\n\r\n      <!-- <ng-template let-rows=\"rows\" let-cell=\"cell\" name=\"filter\">\r\n                <ngx-string-filter [rows]=\"rows\" [cell]=\"cell\" (filterChange)=\"logAll($event)\"></ngx-string-filter>\r\n            </ng-template> -->\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Phone\" parent=\"Numbers\" index=\"2\" cellWidth=\"150\" visible=\"true\">\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Phone}}</ng-template>\r\n\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Id\" parent=\"Numbers\" index=\"1\" [draggable]=\"false\" cellWidth=\"150\" visible=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">\r\n        {{row.Id}}\r\n      </ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Type\" parent=\"Numbers\" collection=\"Type\" index=\"1\" [draggable]=\"false\" cellWidth=\"150\" visible=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Type[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Size\" parent=\"Numbers\" collection=\"Size\" index=\"1\" [draggable]=\"false\" cellWidth=\"150\" visible=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" let-index=\"index\" name=\"body\">{{row.Size[index]}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n    <ngx-column-template name=\"Name\" index=\"1\" [draggable]=\"false\" cellWidth=\"200\" visible=\"true\">\r\n      <ng-template let-row=\"row\" let-cell=\"cell\" name=\"body\">{{row.Name}}</ng-template>\r\n      <ng-template let-cell=\"cell\" let-direction=\"direction\" name=\"header\">{{cell.name}}\r\n        <i class=\"fa\" [setDirection]=\"direction\"></i>\r\n      </ng-template>\r\n    </ngx-column-template>\r\n\r\n  </ngx-magic-table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, SortDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sortDirection = SortDirection.Ascending;
        this.count = 1;
        //  public data: Array<any> = [];
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

var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Unspecified"] = -1] = "Unspecified";
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
})(SortDirection || (SortDirection = {}));


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

module.exports = __webpack_require__(/*! G:\Projects\ngx-magic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map