(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-page-module"],{

/***/ "./src/app/common/core/module/material-patient/page-material.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/common/core/module/material-patient/page-material.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PageMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMaterialModule", function() { return PageMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PageMaterialModule = /** @class */ (function () {
    function PageMaterialModule() {
    }
    PageMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ]
        })
    ], PageMaterialModule);
    return PageMaterialModule;
}());



/***/ }),

/***/ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Doctor</mat-label>\n      <input matInput type=\"text\" formControlName=\"recipient\">\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\" appearance=\"outline\">\n      <mat-label>Message</mat-label>\n      <textarea\n        matInput cdkTextareaAutosize cdkAutosizeMaxRows=\"10\"\n        maxLength=\"200\" #textarea\n        formControlName=\"message\"></textarea>\n      <mat-hint align=\"end\">\n        {{ textarea.value.length }} / 200\n      </mat-hint>\n      <mat-hint *ngIf=\"isDisable\" align=\"start\">Message must be greater than 10 characters.</mat-hint>\n    </mat-form-field>\n\n    <button mat-raised-button [disabled]=\"isDisable\">\n      <span>SEND</span>\n    </button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n  .mat-form-field textarea {\n    overflow-y: hidden; }\n  .mat-raised-button {\n  float: right; }\n  .mat-raised-button span {\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbWVzc2FnZS1kb2N0b3ItZGlhbG9nL0M6XFxVc2Vyc1xcVUlVWFxcRGVza3RvcFxcaGQtZGFzaGJvYXJkLW1hc3Rlci9zcmNcXGFwcFxcY29tbW9uXFxzaGFyZWRcXGNvbXBvbmVudFxcbWVzc2FnZS1kb2N0b3ItZGlhbG9nXFxtZXNzYWdlLWRvY3Rvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7RUFEYjtJQUlJLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L21lc3NhZ2UtZG9jdG9yLWRpYWxvZy9tZXNzYWdlLWRvY3Rvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcblxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcblxuICBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MessageDoctorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDoctorDialogComponent", function() { return MessageDoctorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MessageDoctorDialogComponent = /** @class */ (function () {
    function MessageDoctorDialogComponent(fb, data, dialog, firestoreService) {
        this.fb = fb;
        this.data = data;
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isDisable = true;
        this.form = fb.group({
            'recipient': ["Dr. " + data.doctor.fullname],
            'message': ['']
        });
    }
    MessageDoctorDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.get('recipient').disable();
        this.form.valueChanges.subscribe(function (response) {
            _this.isDisable = response.message.length < 10 ? true : false;
        });
    };
    MessageDoctorDialogComponent.prototype.onSubmit = function () {
        var to = this.data.doctor.fullname;
        var from = this.data.patient.fullname;
        var message = this.form.value.message;
        this.firestoreService.sendMessageToDoctor(to, from, message);
        this.dialog.closeAll();
    };
    MessageDoctorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-doctor-dialog',
            template: __webpack_require__(/*! ./message-doctor-dialog.component.html */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.html"),
            styles: [__webpack_require__(/*! ./message-doctor-dialog.component.scss */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], MessageDoctorDialogComponent);
    return MessageDoctorDialogComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.component */ "./src/app/entry-patient/dashboard-patient/page/page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] }
];
var PageRoutingModule = /** @class */ (function () {
    function PageRoutingModule() {
    }
    PageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PageRoutingModule);
    return PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  <div id=\"col-01\">\n\n    <mat-card>\n      <mat-card-content>\n\n        <p>Patient details</p>\n        <div id=\"spinner\" *ngIf=\"patientDetails === undefined\">\n          <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\n        </div>\n        <h4>{{ patientDetails?.patientNo }}</h4>\n        <h4>{{ patientDetails?.fullname }}</h4>\n\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-content>\n\n        <p>Assigned doctor/s</p>\n        <div id=\"spinner\" *ngIf=\"isDoctorsLoading\">\n          <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\n        </div>\n        <mat-nav-list>\n          <mat-list-item *ngFor=\"let doctor of patientDoctors | async\">\n            <h5 mat-line>{{ doctor?.fullname }}</h5>\n            <button mat-icon-button matTooltip=\"{{ 'Message Dr. ' + doctor?.fullname }}\" (click)=\"messageDoctor(doctor)\">\n              <mat-icon>comment</mat-icon>\n            </button>\n          </mat-list-item>\n        </mat-nav-list>\n\n      </mat-card-content>\n    </mat-card>\n\n  </div>\n\n  <div id=\"col-02\">\n    <mat-card>\n      <mat-card-content>\n\n        <h3>Latest</h3>\n\n        <div id=\"heading\">\n          <span>SBP</span>\n          <span>DBP</span>\n          <span>HR</span>\n        </div>\n        <div id=\"content\">\n          <div id=\"spinner\" *ngIf=\"readings === undefined\">\n            <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\n          </div>\n          <h5>{{ readings?.sbpVal }}</h5>\n          <h5>{{ readings?.dbpVal }}</h5>\n          <h5>{{ readings?.hrVal }}</h5>\n        </div>\n\n      </mat-card-content>\n    </mat-card>\n\n    <mat-divider></mat-divider>\n\n    <h3>Readings History</h3>\n\n    <div id=\"spinner\" *ngIf=\"readings === undefined\">\n      <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\n    </div>\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" *ngIf=\"readings !== undefined\">\n\n      <ng-container matColumnDef=\"sbp\">\n        <th mat-header-cell *matHeaderCellDef> SBP </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.sbpVal}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"dbp\">\n        <th mat-header-cell *matHeaderCellDef> DBP </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.dbpVal}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"hr\">\n        <th mat-header-cell *matHeaderCellDef> HR </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.hrVal}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[6, 10, 30, 100]\" showFirstLastButtons></mat-paginator>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  margin-top: 30px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #wrapper #spinner {\n    width: 100%;\n    display: flex; }\n  #wrapper #spinner .mat-progress-spinner {\n      margin: auto; }\n  #wrapper #col-01:nth-child(1) {\n    flex-basis: calc(30% - 10px); }\n  #wrapper #col-01:nth-child(1) p {\n      color: #b3b3b3;\n      margin-bottom: 5px; }\n  #wrapper #col-01:nth-child(1) .mat-card {\n      margin-bottom: 20px; }\n  #wrapper #col-02:nth-child(2) {\n    flex-basis: calc(70% - 10px); }\n  #wrapper #col-02:nth-child(2) #heading {\n      display: flex;\n      flex-flow: row wrap;\n      margin-top: 15px; }\n  #wrapper #col-02:nth-child(2) #heading span {\n        flex-grow: 1; }\n  #wrapper #col-02:nth-child(2) #content {\n      display: flex;\n      flex-flow: row wrap;\n      margin-top: 7px; }\n  #wrapper #col-02:nth-child(2) #content h5 {\n        flex-grow: 1; }\n  #wrapper #col-02:nth-child(2) .mat-divider {\n      margin: 30px 0; }\n  #wrapper #col-02:nth-child(2) .mat-table {\n      width: 100%;\n      margin: 20px auto auto; }\n  @media (max-width: 991px) {\n  #col-01 {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between; }\n    #col-01 .mat-card {\n      flex-basis: 48%; }\n  #col-02 {\n    flex-grow: 1; } }\n  @media (max-width: 569px) {\n  #col-01 {\n    display: flex;\n    flex-flow: column;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n    #col-01 .mat-card {\n      flex-basis: 20%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktcGF0aWVudC9kYXNoYm9hcmQtcGF0aWVudC9wYWdlL0M6XFxVc2Vyc1xcVUlVWFxcRGVza3RvcFxcaGQtZGFzaGJvYXJkLW1hc3Rlci9zcmNcXGFwcFxcZW50cnktcGF0aWVudFxcZGFzaGJvYXJkLXBhdGllbnRcXHBhZ2VcXHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUpoQztJQU9JLFdBQVc7SUFDWCxhQUFhLEVBQUE7RUFSakI7TUFXTSxZQUFZLEVBQUE7RUFYbEI7SUFnQkksNEJBQTRCLEVBQUE7RUFoQmhDO01BbUJNLGNBQXlCO01BQ3pCLGtCQUFrQixFQUFBO0VBcEJ4QjtNQXdCTSxtQkFBbUIsRUFBQTtFQXhCekI7SUE2QkksNEJBQTRCLEVBQUE7RUE3QmhDO01BZ0NNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7RUFsQ3RCO1FBcUNRLFlBQVksRUFBQTtFQXJDcEI7TUEwQ00sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUE1Q3JCO1FBK0NRLFlBQVksRUFBQTtFQS9DcEI7TUFvRE0sY0FBYyxFQUFBO0VBcERwQjtNQXdETSxXQUFXO01BQ1gsc0JBQXNCLEVBQUE7RUFLNUI7RUFDRTtJQUNFLFlBQVk7SUFFWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0lBTGhDO01BUUksZUFBZSxFQUFBO0VBSW5CO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7RUFHSDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsOEJBQThCLEVBQUE7SUFKaEM7TUFPSSxlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1wYXRpZW50L2Rhc2hib2FyZC1wYXRpZW50L3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICNzcGlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cblxuICAjY29sLTAxOm50aC1jaGlsZCgxKSB7XG4gICAgZmxleC1iYXNpczogY2FsYygzMCUgLSAxMHB4KTtcblxuICAgIHAge1xuICAgICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAubWF0LWNhcmQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIH1cblxuICAjY29sLTAyOm50aC1jaGlsZCgyKSB7XG4gICAgZmxleC1iYXNpczogY2FsYyg3MCUgLSAxMHB4KTtcblxuICAgICNoZWFkaW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcblxuICAgICAgaDUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1kaXZpZGVyIHtcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIH1cblxuICAgIC5tYXQtdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDIwcHggYXV0byBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2NvbC0wMSB7XG4gICAgZmxleC1ncm93OiAxO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5tYXQtY2FyZCB7XG4gICAgICBmbGV4LWJhc2lzOiA0OCU7XG4gICAgfVxuICB9XG5cbiAgI2NvbC0wMiB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjlweCkge1xuICAjY29sLTAxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAubWF0LWNhcmQge1xuICAgICAgZmxleC1iYXNpczogMjAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.component.ts ***!
  \************************************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/shared/component/message-doctor-dialog/message-doctor-dialog.component */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageComponent = /** @class */ (function () {
    function PageComponent(dialog, firestoreService, databaseService) {
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
        this.displayedColumns = ['sbp', 'dbp', 'hr'];
        this.isDoctorsLoading = true;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreService.getOnlinePatient().subscribe(function (patient) {
            if (patient === undefined)
                return;
            _this.databaseService.getPatientReadings(patient.patientNo).subscribe(function (response) {
                _this.readings = response[0];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response.slice(1));
                _this.dataSource.paginator = _this.paginator;
            });
            _this.patientDetails = patient;
            _this.patientDoctors = _this.firestoreService.getPatientDoctors(patient.fullname);
            _this.patientDoctors.subscribe(function () { return (_this.isDoctorsLoading = false); });
        });
    };
    PageComponent.prototype.messageDoctor = function (doctor) {
        this.dialgoRef = this.dialog.open(_common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MessageDoctorDialogComponent"], { data: { doctor: doctor, patient: this.patientDetails } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PageComponent.prototype, "paginator", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/entry-patient/dashboard-patient/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/entry-patient/dashboard-patient/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.module.ts ***!
  \*********************************************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-routing.module */ "./src/app/entry-patient/dashboard-patient/page/page-routing.module.ts");
/* harmony import */ var _common_core_module_material_patient_page_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/module/material-patient/page-material.module */ "./src/app/common/core/module/material-patient/page-material.module.ts");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.component */ "./src/app/entry-patient/dashboard-patient/page/page.component.ts");
/* harmony import */ var _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/shared/component/message-doctor-dialog/message-doctor-dialog.component */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _page_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageRoutingModule"],
                _common_core_module_material_patient_page_material_module__WEBPACK_IMPORTED_MODULE_4__["PageMaterialModule"]
            ],
            declarations: [
                _page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"],
                _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDoctorDialogComponent"],
            ],
            entryComponents: [
                _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDoctorDialogComponent"]
            ]
        })
    ], PageModule);
    return PageModule;
}());



/***/ })

}]);
//# sourceMappingURL=page-page-module.js.map