(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-admin-dashboard-admin-module"],{

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js ***!
  \***********************************************************/
/*! exports provided: ClipboardService, CLIPBOARD_SERVICE_PROVIDER_FACTORY, CLIPBOARD_SERVICE_PROVIDER, ClipboardDirective, ClipboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_SERVICE_PROVIDER_FACTORY", function() { return CLIPBOARD_SERVICE_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_SERVICE_PROVIDER", function() { return CLIPBOARD_SERVICE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
    }
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!this.document.queryCommandSupported &&
                !!this.document.queryCommandSupported('copy'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                // tslint:disable-next-line:max-line-length
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            var /** @type {?} */ re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re;
        }
        catch (/** @type {?} */ error) {
            return false;
        }
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @return {?}
     */
    function (content) {
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            this.document.body.appendChild(this.tempTextArea);
        }
        this.tempTextArea.value = content;
        return this.copyFromInputElement(this.tempTextArea);
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.tempTextArea) {
            this.document.body.removeChild(this.tempTextArea);
            this.tempTextArea = undefined;
        }
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.blur();
        window.getSelection().removeAllRanges();
    };
    /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        var /** @type {?} */ isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        var /** @type {?} */ ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        var /** @type {?} */ yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    ClipboardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] },] },
    ]; };
    return ClipboardService;
}());
/**
 * @param {?} doc
 * @param {?} win
 * @param {?} parentDispatcher
 * @return {?}
 */
function CLIPBOARD_SERVICE_PROVIDER_FACTORY(doc, win, parentDispatcher) {
    return parentDispatcher || new ClipboardService(doc, win);
}
var /** @type {?} */ CLIPBOARD_SERVICE_PROVIDER = {
    deps: [/** @type {?} */ (_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), /** @type {?} */ (ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]), [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ClipboardService]
    ],
    provide: ClipboardService,
    useFactory: CLIPBOARD_SERVICE_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined);
        }
        else if (this.targetElm &&
            this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent), this.cbContent);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @return {?}
     */
    function (succeeded, copiedContent) {
        if (succeeded) {
            this.cbOnSuccess.emit({ isSuccess: true, content: copiedContent });
        }
        else {
            this.cbOnError.emit({ isSuccess: false });
        }
    };
    ClipboardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxClipboard]'
                },] },
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService, },
    ]; };
    ClipboardDirective.propDecorators = {
        "targetElm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngxClipboard',] },],
        "cbContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cbOnSuccess": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "cbOnError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event.target'],] },],
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["NgxWindowTokenModule"]],
                    // tslint:disable-next-line:object-literal-sort-keys
                    declarations: [ClipboardDirective],
                    exports: [ClipboardDirective],
                    providers: [CLIPBOARD_SERVICE_PROVIDER]
                },] },
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNsaXBib2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2xpcGJvYXJkL2xpYi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ25neC13aW5kb3ctdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XG4gIHByaXZhdGUgdGVtcFRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luZG93OiBhbnlcbiAgKSB7fVxuICBwdWJsaWMgZ2V0IGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhIXRoaXMuZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkICYmXG4gICAgICAhIXRoaXMuZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKCdjb3B5JylcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzVGFyZ2V0VmFsaWQoXG4gICAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgKSB7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhcmdldCBzaG91bGQgYmUgaW5wdXQgb3IgdGV4dGFyZWEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb3B5RnJvbUlucHV0RWxlbWVudFxuICAgKi9cbiAgcHVibGljIGNvcHlGcm9tSW5wdXRFbGVtZW50KFxuICAgIHRhcmdldEVsbTogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KHRhcmdldEVsbSk7XG4gICAgICBjb25zdCByZSA9IHRoaXMuY29weVRleHQoKTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24odGFyZ2V0RWxtLCB0aGlzLndpbmRvdyk7XG4gICAgICByZXR1cm4gcmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZha2UgdGV4dGFyZWEgZWxlbWVudCwgc2V0cyBpdHMgdmFsdWUgZnJvbSBgdGV4dGAgcHJvcGVydHksXG4gICAqIGFuZCBtYWtlcyBhIHNlbGVjdGlvbiBvbiBpdC5cbiAgICovXG4gIHB1YmxpYyBjb3B5RnJvbUNvbnRlbnQoY29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBUZXh0QXJlYSkge1xuICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB0aGlzLmNyZWF0ZVRlbXBUZXh0QXJlYSh0aGlzLmRvY3VtZW50LCB0aGlzLndpbmRvdyk7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xuICAgIH1cbiAgICB0aGlzLnRlbXBUZXh0QXJlYS52YWx1ZSA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIHRoaXMuY29weUZyb21JbnB1dEVsZW1lbnQodGhpcy50ZW1wVGV4dEFyZWEpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHRlbXBvcmFyeSB0ZXh0YXJlYSBpZiBhbnlcbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGVtcFRleHRBcmVhKSB7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xuICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VsZWN0IHRoZSB0YXJnZXQgaHRtbCBpbnB1dCBlbGVtZW50XG4gIHByaXZhdGUgc2VsZWN0VGFyZ2V0KFxuICAgIGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgaW5wdXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3B5VGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICB9XG4gIC8vIFJlbW92ZXMgY3VycmVudCBzZWxlY3Rpb24gYW5kIGZvY3VzIGZyb20gYHRhcmdldGAgZWxlbWVudC5cbiAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbihcbiAgICBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICAgIHdpbmRvdzogV2luZG93XG4gICkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIGlucHV0RWxlbWVudCAmJiBpbnB1dEVsZW1lbnQuYmx1cigpO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBhIGZha2UgdGV4dGFyZWEgZm9yIGNvcHkgY29tbWFuZFxuICBwcml2YXRlIGNyZWF0ZVRlbXBUZXh0QXJlYShcbiAgICBkb2M6IERvY3VtZW50LFxuICAgIHdpbmRvdzogV2luZG93XG4gICk6IEhUTUxUZXh0QXJlYUVsZW1lbnQge1xuICAgIGNvbnN0IGlzUlRMID0gZG9jLmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJztcbiAgICBsZXQgdGE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdGEgPSBkb2MuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG4gICAgdGEuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7XG4gICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgdGEuc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgIHRhLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgdGEuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgIHRhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0YS5zdHlsZVtpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCddID0gJy05OTk5cHgnO1xuICAgIC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgY29uc3QgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRhLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XG4gICAgdGEuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICByZXR1cm4gdGE7XG4gIH1cbn1cbi8vIHRoaXMgcGF0dGVybiBpcyBtZW50aW9uZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTM4NTQgaW4gIzQzXG5leHBvcnQgZnVuY3Rpb24gQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShcbiAgZG9jOiBEb2N1bWVudCxcbiAgd2luOiBXaW5kb3csXG4gIHBhcmVudERpc3BhdGNoZXI6IENsaXBib2FyZFNlcnZpY2Vcbikge1xuICByZXR1cm4gcGFyZW50RGlzcGF0Y2hlciB8fCBuZXcgQ2xpcGJvYXJkU2VydmljZShkb2MsIHdpbik7XG59XG5cbmV4cG9ydCBjb25zdCBDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUiA9IHtcbiAgZGVwczogW1xuICAgIERPQ1VNRU5UIGFzIEluamVjdGlvblRva2VuPERvY3VtZW50PixcbiAgICBXSU5ET1cgYXMgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+LFxuICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIENsaXBib2FyZFNlcnZpY2VdXG4gIF0sXG4gIHByb3ZpZGU6IENsaXBib2FyZFNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IENMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUllcbn07XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xpcGJvYXJkU2VydmljZSB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd4Q2xpcGJvYXJkXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbmd4Q2xpcGJvYXJkJykgcHVibGljIHRhcmdldEVsbTogSFRNTElucHV0RWxlbWVudDtcblxuICBASW5wdXQoKSBwdWJsaWMgY2JDb250ZW50OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjYk9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNiT25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGlwYm9hcmRTcnY6IENsaXBib2FyZFNlcnZpY2UpIHt9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xpcGJvYXJkU3J2LmRlc3Ryb3koKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICghdGhpcy5jbGlwYm9hcmRTcnYuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KGZhbHNlLCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnRhcmdldEVsbSAmJlxuICAgICAgdGhpcy5jbGlwYm9hcmRTcnYuaXNUYXJnZXRWYWxpZCh0aGlzLnRhcmdldEVsbSlcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KFxuICAgICAgICB0aGlzLmNsaXBib2FyZFNydi5jb3B5RnJvbUlucHV0RWxlbWVudCh0aGlzLnRhcmdldEVsbSksXG4gICAgICAgIHRoaXMudGFyZ2V0RWxtLnZhbHVlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jYkNvbnRlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KFxuICAgICAgICB0aGlzLmNsaXBib2FyZFNydi5jb3B5RnJvbUNvbnRlbnQodGhpcy5jYkNvbnRlbnQpLFxuICAgICAgICB0aGlzLmNiQ29udGVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYW4gZXZlbnQgYmFzZWQgb24gdGhlIGNvcHkgb3BlcmF0aW9uIHJlc3VsdC5cbiAgICogQHBhcmFtIHN1Y2NlZWRlZFxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVSZXN1bHQoc3VjY2VlZGVkOiBib29sZWFuLCBjb3BpZWRDb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoc3VjY2VlZGVkKSB7XG4gICAgICB0aGlzLmNiT25TdWNjZXNzLmVtaXQoeyBpc1N1Y2Nlc3M6IHRydWUsIGNvbnRlbnQ6IGNvcGllZENvbnRlbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2JPbkVycm9yLmVtaXQoeyBpc1N1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpcGJvYXJkRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4V2luZG93VG9rZW5Nb2R1bGUgfSBmcm9tICduZ3gtd2luZG93LXRva2VuJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWNsaXBib2FyZC5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZ3gtY2xpcGJvYXJkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ3hXaW5kb3dUb2tlbk1vZHVsZV0sXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgZGVjbGFyYXRpb25zOiBbQ2xpcGJvYXJkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0NsaXBib2FyZERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW0NMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSXVxufSlcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmRNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWFFLDBCQUM0QixVQUNGO1FBREUsYUFBUSxHQUFSLFFBQVE7UUFDVixXQUFNLEdBQU4sTUFBTTtLQUM1QjswQkFDTyx5Q0FBVzs7Ozs7WUFDcEIsUUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUI7Z0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUM3Qzs7Ozs7Ozs7O0lBR0csd0NBQWE7Ozs7Y0FDbEIsT0FBK0M7UUFFL0MsSUFDRSxPQUFPLFlBQVksZ0JBQWdC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

/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm5/ngx-window-token.js ***!
  \*****************************************************************/
/*! exports provided: WINDOW, _window, NgxWindowTokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWindowTokenModule", function() { return NgxWindowTokenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
/**
 * @return {?}
 */
function _window() {
    return window;
}
var NgxWindowTokenModule = /** @class */ (function () {
    function NgxWindowTokenModule() {
    }
    NgxWindowTokenModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [{
                            provide: WINDOW,
                            useFactory: _window
                        }]
                },] },
    ];
    return NgxWindowTokenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdpbmRvdy10b2tlbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXdpbmRvdy10b2tlbi9saWIvbmd4LXdpbmRvdy10b2tlbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2luZG93PignV2luZG93VG9rZW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF93aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogV0lORE9XLFxuICAgICAgICB1c2VGYWN0b3J5OiBfd2luZG93XG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4V2luZG93VG9rZW5Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBR2EsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFTLGFBQWEsQ0FBQyxDQUFDOzs7O0FBRWhFO0lBQ0ksT0FBTyxNQUFNLENBQUM7Q0FDakI7Ozs7O2dCQUVBLFFBQVEsU0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQzs0QkFDUixPQUFPLEVBQUUsTUFBTTs0QkFDZixVQUFVLEVBQUUsT0FBTzt5QkFDdEIsQ0FBQztpQkFDTDs7K0JBZEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/app/common/core/module/material-admin/dashboard-material.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/core/module/material-admin/dashboard-material.module.ts ***!
  \********************************************************************************/
/*! exports provided: DashboardMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMaterialModule", function() { return DashboardMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardMaterialModule = /** @class */ (function () {
    function DashboardMaterialModule() {
    }
    DashboardMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"]
            ]
        })
    ], DashboardMaterialModule);
    return DashboardMaterialModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DashboardAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminRoutingModule", function() { return DashboardAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-admin.component */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__["DashboardAdminComponent"] }
];
var DashboardAdminRoutingModule = /** @class */ (function () {
    function DashboardAdminRoutingModule() {
    }
    DashboardAdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardAdminRoutingModule);
    return DashboardAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n\n  <div id=\"row-01\">\n\n    <button mat-raised-button [routerLink]=\"['/', 'a', 'z']\">REFRESH</button>\n    <button mat-raised-button [disabled]=\"isExpanded\" (click)=\"expandAllPanels()\">EXPAND ALL PANELS</button>\n    <button mat-raised-button [disabled]=\"panelState\" (click)=\"onCollapsePanels()\">COLLAPSE PANELS</button>\n\n  </div>\n\n  <div id=\"row-02\">\n    <div id=\"col-01\">\n      <mat-accordion [multi]=\"true\">\n\n        <h5>Generate account numbers</h5>\n\n        <mat-divider></mat-divider>\n\n        <mat-expansion-panel #panel1 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Patient no.</mat-panel-title>\n            <mat-panel-description>Generate patient no</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-generate [isPatient]=\"true\"></app-generate>\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #panel2 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Doctor no.</mat-panel-title>\n            <mat-panel-description>Generate doctor no.</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-generate [isDoctor]=\"true\"></app-generate>\n          </ng-template>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n\n\n      <mat-accordion [multi]=\"true\">\n\n        <h5>Generate account</h5>\n\n        <mat-divider></mat-divider>\n\n        <mat-expansion-panel #panel3 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Details</mat-panel-title>\n            <mat-panel-description>Generate random account details.</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-generate [isAccount]=\"true\"></app-generate>\n          </ng-template>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n\n\n      <mat-accordion [multi]=\"false\">\n\n        <h5>Show list of registered accounts</h5>\n\n        <mat-divider></mat-divider>\n\n        <mat-expansion-panel #panel4 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Patient</mat-panel-title>\n            <mat-panel-description>List of patients registerd</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-list [isPatient]=\"true\"></app-list>\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #panel5 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Doctor</mat-panel-title>\n            <mat-panel-description>List of doctors registered</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-list [isDoctor]=\"true\"></app-list>\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #panel6 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Admin</mat-panel-title>\n            <mat-panel-description>List of admins registered</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-list [isAdmin]=\"true\"></app-list>\n          </ng-template>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n    </div>\n\n    <div id=\"col-02\">\n      <mat-accordion [multi]=\"false\">\n\n        <h5>Add patients or doctors</h5>\n\n        <mat-divider></mat-divider>\n\n        <mat-expansion-panel #panel7 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Doctor</mat-panel-title>\n            <mat-panel-description>Add patient to doctor</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-join [isDoctor]=\"true\"></app-join>\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #panel8 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Patient</mat-panel-title>\n            <mat-panel-description>Add doctor to patient</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-join [isPatient]=\"true\"></app-join>\n          </ng-template>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n\n\n      <mat-accordion [multi]=\"false\">\n\n        <h5>Account registration</h5>\n\n        <mat-divider></mat-divider>\n\n        <mat-expansion-panel #panel9 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Patient</mat-panel-title>\n            <mat-panel-description>Patient account registration form</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-register [isPatient]=\"true\"></app-register>\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #panel10 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Doctor</mat-panel-title>\n            <mat-panel-description>Doctor account registration form</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-register [isDoctor]=\"true\"></app-register>\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #panel11 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>Admin</mat-panel-title>\n            <mat-panel-description>Admin account registration form</mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-register [isAdmin]=\"true\"></app-register>\n          </ng-template>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  margin: 50px auto; }\n\n#row-01 {\n  display: flex;\n  flex-flow: row wrap; }\n\n#row-01 .mat-raised-button:nth-child(1),\n  #row-01 .mat-raised-button:nth-child(2) {\n    margin-right: 15px; }\n\n#row-02 {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n#row-02 #col-01 {\n    flex-basis: 49%; }\n\n#row-02 #col-01 h5 {\n      margin-top: 24px; }\n\n#row-02 #col-01 .mat-divider {\n      margin: 12px 0; }\n\n#row-02 #col-02 {\n    flex-basis: 49%; }\n\n#row-02 #col-02 h5 {\n      margin-top: 24px; }\n\n#row-02 #col-02 .mat-divider {\n      margin: 12px 0; }\n\n@media (max-width: 752px) {\n  #row-02 {\n    flex-direction: column; } }\n\n@media (max-width: 473px) {\n  #row-01 {\n    flex-direction: column; }\n    #row-01 .mat-raised-button:nth-child(1),\n    #row-01 .mat-raised-button:nth-child(2),\n    #row-01 .mat-raised-button:nth-child(3) {\n      margin: 5px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL0M6XFxVc2Vyc1xcVUlVWFxcRGVza3RvcFxcaGQtZGFzaGJvYXJkLW1hc3Rlci9zcmNcXGFwcFxcZW50cnktYWRtaW5cXGRhc2hib2FyZC1hZG1pblxcZGFzaGJvYXJkLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUZyQjs7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUhoQztJQU1JLGVBQWUsRUFBQTs7QUFObkI7TUFTTSxnQkFBZ0IsRUFBQTs7QUFUdEI7TUFhTSxjQUFjLEVBQUE7O0FBYnBCO0lBa0JJLGVBQWUsRUFBQTs7QUFsQm5CO01BcUJNLGdCQUFnQixFQUFBOztBQXJCdEI7TUF5Qk0sY0FBYyxFQUFBOztBQUtwQjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUEsRUFDdkI7O0FBR0g7RUFDRTtJQUNFLHNCQUFzQixFQUFBO0lBRHhCOzs7TUFRSSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWFkbWluL2Rhc2hib2FyZC1hZG1pbi9kYXNoYm9hcmQtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4jcm93LTAxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcblxuICAubWF0LXJhaXNlZC1idXR0b246bnRoLWNoaWxkKDEpLFxuICAubWF0LXJhaXNlZC1idXR0b246bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuI3Jvdy0wMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAjY29sLTAxIHtcbiAgICBmbGV4LWJhc2lzOiA0OSU7XG5cbiAgICBoNSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC5tYXQtZGl2aWRlciB7XG4gICAgICBtYXJnaW46IDEycHggMDtcbiAgICB9XG4gIH1cblxuICAjY29sLTAyIHtcbiAgICBmbGV4LWJhc2lzOiA0OSU7XG5cbiAgICBoNSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC5tYXQtZGl2aWRlciB7XG4gICAgICBtYXJnaW46IDEycHggMDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MnB4KSB7XG4gICNyb3ctMDIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3M3B4KSB7XG4gICNyb3ctMDEge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBUbG9va3MgdWdseSBidXQgaXQgZG9lc250IHdvcmsgdGhlIG90aGVyIHdheSBhcm91bmRcbiAgICAvLyB3b3JrIG9ubHkgaW4gdGhpcyB3YXkuLiBzb29vb29vLi4geWVhXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uOm50aC1jaGlsZCgxKSxcbiAgICAubWF0LXJhaXNlZC1idXR0b246bnRoLWNoaWxkKDIpLFxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbjpudGgtY2hpbGQoMykge1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG5cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminComponent", function() { return DashboardAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent(router, authService, sharedService) {
        this.router = router;
        this.authService = authService;
        this.sharedService = sharedService;
        this.panelState = true;
        this.isExpanded = false;
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
        this.authService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user !== null; })).subscribe(function (state) {
            // state ? 0 : this.router.navigate(['/']);
        });
    };
    DashboardAdminComponent.prototype.onExpandPanel = function () {
        var condition = this.panel1.expanded || this.panel2.expanded || this.panel3.expanded || this.panel4.expanded || this.panel5.expanded
            || this.panel6.expanded || this.panel7.expanded || this.panel8.expanded || this.panel9.expanded || this.panel10.expanded || this.panel11.expanded;
        this.panelState = !condition;
    };
    DashboardAdminComponent.prototype.onClosePanel = function () {
        this.isExpanded = false;
        this.sharedService.setPanel = true;
    };
    DashboardAdminComponent.prototype.newMethod = function () {
        return this.panel1.open();
    };
    // expandAllPanels() {
    //   this.newMethod() || this.panel2.open() || this.panel3.open() || this.panel4.open() || this.panel5.open()
    //   || this.panel6.open() || this.panel7.open() || this.panel8.open() || this.panel9.open() || this.panel10.open() || this.panel11.open();
    //   this.isExpanded = true;
    //   this.panelState = false;
    DashboardAdminComponent.prototype.onCollapsePanels = function () {
        this.panel1.close();
        this.panel2.close();
        this.panel3.close();
        this.panel4.close();
        this.panel5.close();
        this.panel6.close();
        this.panel7.close();
        this.panel8.close();
        this.panel9.close();
        this.panel10.close();
        this.panel11.close();
        this.panelState = true;
        this.isExpanded = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel2'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel3'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel4'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel5'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel6'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel7'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel7", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel8'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel8", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel9'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel9", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel10'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel10", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel11'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel11", void 0);
    DashboardAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__(/*! ./dashboard-admin.component.html */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-admin.component.scss */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.module.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminModule", function() { return DashboardAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-admin-routing.module */ "./src/app/entry-admin/dashboard-admin/dashboard-admin-routing.module.ts");
/* harmony import */ var _common_core_module_material_admin_dashboard_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/module/material-admin/dashboard-material.module */ "./src/app/common/core/module/material-admin/dashboard-material.module.ts");
/* harmony import */ var _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-admin.component */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/entry-admin/dashboard-admin/generate/generate.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/entry-admin/dashboard-admin/register/register.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./join/join.component */ "./src/app/entry-admin/dashboard-admin/join/join.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/entry-admin/dashboard-admin/list/list.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardAdminModule = /** @class */ (function () {
    function DashboardAdminModule() {
    }
    DashboardAdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                _dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardAdminRoutingModule"],
                _common_core_module_material_admin_dashboard_material_module__WEBPACK_IMPORTED_MODULE_5__["DashboardMaterialModule"]
            ],
            declarations: [
                _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_6__["DashboardAdminComponent"],
                _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__["GenerateComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _join_join_component__WEBPACK_IMPORTED_MODULE_9__["JoinComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"]
            ],
            providers: [
                _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"],
                _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_12__["DatabaseService"]
            ]
        })
    ], DashboardAdminModule);
    return DashboardAdminModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/generate/generate.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/generate/generate.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <form [formGroup]=\"form\">\n\n\n    <!-- GENERATE PATIENR NUMBER FORM -->\n    <div formGroupName=\"patientForm\" id=\"row-01\" *ngIf=\"isPatient\">\n\n      <div>\n        <button mat-raised-button type=\"button\" (click)=\"onGenerate()\">GENERATE</button>\n      </div>\n      <div>\n        <mat-form-field color=\"accent\" appearance=\"outline\">\n          <mat-label>Patient No.</mat-label>\n          <input matInput type=\"text\" formControlName=\"random\" #patientNo>\n          <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"patientNo.value\" color=\"accent\" [disabled]=\"patientNo.value === ''\"\n            [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\n        </mat-form-field>\n      </div>\n    <!-- END GENERATE PATIENR NUMBER FORM -->\n    </div>\n\n\n    <!-- GENERATE DOCTOR NUMBER FORM -->\n    <div formGroupName=\"doctorForm\" id=\"row-02\" *ngIf=\"isDoctor\">\n\n      <div>\n        <button mat-raised-button type=\"button\" (click)=\"onGenerate()\">GENERATE</button>\n      </div>\n      <div>\n        <mat-form-field color=\"accent\" appearance=\"outline\">\n          <mat-label>Doctor No.</mat-label>\n          <input matInput type=\"text\" formControlName=\"random\" #doctorNo>\n          <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"doctorNo.value\" color=\"accent\" [disabled]=\"doctorNo.value === ''\"\n            [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\n        </mat-form-field>\n      </div>\n    <!-- END GENERATE DOCTOR NUMBER FORM -->\n    </div>\n\n\n    <!-- GENERATE ACCOUNT FORM -->\n    <div formGroupName=\"accountForm\" id=\"row-03\" *ngIf=\"isAccount\">\n\n      <div class=\"inside\">\n        <div>\n          <button mat-raised-button type=\"button\" (click)=\"onGenerate('fullname')\">GENERATE</button>\n        </div>\n        <div>\n          <mat-form-field color=\"accent\" appearance=\"outline\">\n            <mat-label>Fullname</mat-label>\n            <input matInput type=\"text\" formControlName=\"fullname\" #fullname>\n            <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"fullname.value\" color=\"accent\" [disabled]=\"fullname.value === ''\"\n              [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <div class=\"inside\">\n        <div>\n          <button mat-raised-button type=\"button\" (click)=\"onGenerate('email')\">GENERATE</button>\n        </div>\n        <div>\n          <mat-form-field color=\"accent\" appearance=\"outline\">\n            <mat-label>Email address</mat-label>\n            <input matInput type=\"text\" formControlName=\"email\" #email>\n            <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"email.value\" color=\"accent\" [disabled]=\"email.value === ''\"\n              [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <div class=\"inside\">\n        <div>\n          <button mat-raised-button type=\"button\" (click)=\"onGenerate('password')\">GENERATE</button>\n        </div>\n        <div>\n          <mat-form-field color=\"accent\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput type=\"text\" formControlName=\"password\" #password>\n            <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"password.value\" color=\"accent\" [disabled]=\"password.value === ''\"\n              [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\n          </mat-form-field>\n        </div>\n      </div>\n    <!-- END GENERATE ACCOUNT FORM -->\n    </div>\n\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/generate/generate.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/generate/generate.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row-01, #row-02 {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #row-01 div:last-child, #row-02 div:last-child {\n    flex-grow: 1; }\n  #row-01 .mat-raised-button, #row-02 .mat-raised-button {\n    margin-top: 12px;\n    margin-right: 15px; }\n  #row-01 .mat-form-field, #row-02 .mat-form-field {\n    width: 100%; }\n  #row-03 {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #row-03 .inside {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    width: 100%; }\n  #row-03 .inside div:last-child {\n      flex-grow: 1; }\n  #row-03 .inside .mat-raised-button {\n      margin-top: 12px;\n      margin-right: 15px; }\n  #row-03 .inside .mat-form-field {\n      width: 100%; }\n  @media (max-width: 429px) {\n  #row-01, #row-02, .inside {\n    flex-direction: column; }\n    #row-01 div:last-child,\n    #row-01 div:first-child, #row-02 div:last-child,\n    #row-02 div:first-child, .inside div:last-child,\n    .inside div:first-child {\n      flex-grow: 1; }\n    #row-01 .mat-raised-button, #row-02 .mat-raised-button, .inside .mat-raised-button {\n      margin: 8px 0;\n      width: 100%; } }\n  @media (max-width: 846px) and (min-width: 753px) {\n  #row-01, #row-02, .inside {\n    flex-direction: column; }\n    #row-01 div:last-child,\n    #row-01 div:first-child, #row-02 div:last-child,\n    #row-02 div:first-child, .inside div:last-child,\n    .inside div:first-child {\n      flex-grow: 1; }\n    #row-01 .mat-raised-button, #row-02 .mat-raised-button, .inside .mat-raised-button {\n      margin: 8px 0;\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2dlbmVyYXRlL0M6XFxVc2Vyc1xcVUlVWFxcRGVza3RvcFxcaGQtZGFzaGJvYXJkLW1hc3Rlci9zcmNcXGFwcFxcZW50cnktYWRtaW5cXGRhc2hib2FyZC1hZG1pblxcZ2VuZXJhdGVcXGdlbmVyYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUhoQztJQU1JLFlBQVksRUFBQTtFQU5oQjtJQVVJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQVh0QjtJQWVJLFdBQVcsRUFBQTtFQUlmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUhoQztJQU1JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVcsRUFBQTtFQVRmO01BWU0sWUFBWSxFQUFBO0VBWmxCO01BZ0JNLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQWpCeEI7TUFxQk0sV0FBVyxFQUFBO0VBS2pCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtJQUR4Qjs7OztNQUtJLFlBQVksRUFBQTtJQUxoQjtNQVNJLGFBQWE7TUFDYixXQUFXLEVBQUEsRUFDWjtFQUlMO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtJQUR4Qjs7OztNQUtJLFlBQVksRUFBQTtJQUxoQjtNQVNJLGFBQWE7TUFDYixXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWFkbWluL2Rhc2hib2FyZC1hZG1pbi9nZW5lcmF0ZS9nZW5lcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3ctMDEsICNyb3ctMDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiNyb3ctMDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLmluc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjlweCkge1xuICAjcm93LTAxLCAjcm93LTAyLCAuaW5zaWRlICB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGRpdjpsYXN0LWNoaWxkLFxuICAgIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg0NnB4KSBhbmQgKG1pbi13aWR0aDogNzUzcHgpIHtcbiAgI3Jvdy0wMSwgI3Jvdy0wMiwgLmluc2lkZSAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBkaXY6bGFzdC1jaGlsZCxcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/generate/generate.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/generate/generate.component.ts ***!
  \****************************************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chance */ "./node_modules/chance/chance.js");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_2__);
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



var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(fb) {
        this.fb = fb;
        this.form = fb.group({
            'patientForm': fb.group({
                'random': ''
            }),
            'doctorForm': fb.group({
                'random': ''
            }),
            'accountForm': fb.group({
                'fullname': '',
                'email': '',
                'password': ''
            })
        });
    }
    GenerateComponent.prototype.ngOnInit = function () {
        this.form.get('patientForm').get('random').disable();
        this.form.get('doctorForm').get('random').disable();
        this.form.get('accountForm').get('fullname').disable();
        this.form.get('accountForm').get('email').disable();
        this.form.get('accountForm').get('password').disable();
    };
    GenerateComponent.prototype.onGenerate = function (option) {
        var fullname = this.form.get('accountForm').get('fullname').value;
        var email = this.form.get('accountForm').get('email').value;
        var password = this.form.get('accountForm').get('password').value;
        var chance = new chance__WEBPACK_IMPORTED_MODULE_2__();
        var randomChance = chance.integer({ min: 100000000000, max: 999999999999 });
        var randomFullname = option === 'fullname' ? chance.name() : fullname;
        var randomEmail = option === 'email' ? chance.email() : email;
        var randomPassword = option === 'password' ? chance.geohash({ length: 7 }) : password;
        this.form.setValue({
            patientForm: { random: "PX-" + randomChance },
            doctorForm: { random: "DX-" + randomChance },
            accountForm: {
                fullname: randomFullname,
                email: randomEmail,
                password: randomPassword
            }
        });
    };
    GenerateComponent.prototype.onClipboard = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateComponent.prototype, "isDoctor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateComponent.prototype, "isAccount", void 0);
    GenerateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generate',
            template: __webpack_require__(/*! ./generate.component.html */ "./src/app/entry-admin/dashboard-admin/generate/generate.component.html"),
            styles: [__webpack_require__(/*! ./generate.component.scss */ "./src/app/entry-admin/dashboard-admin/generate/generate.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/join/join.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/join/join.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <form [formGroup]=\"form\">\n\n    <mat-form-field color=\"accent\" *ngIf=\"isPatient\">\n      <mat-label *ngIf=\"patients.length === 0\">Initializing patient list</mat-label>\n      <mat-label *ngIf=\"patients.length !== 0\">Patient</mat-label>\n      <input matInput [matAutocomplete]=\"reactiveAutoPatient\" formControlName=\"patient\" (focus)=\"onFocus()\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear(true)\"><mat-icon>clear</mat-icon></button>\n      <mat-autocomplete #reactiveAutoPatient [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let patient of reactivePatients | async\" [value]=\"patient\">\n          <span>{{ patient.fullname }}</span>\n          <span> ({{ patient.patientNo }}) </span>\n        </mat-option>\n      </mat-autocomplete>\n      <mat-error *ngIf=\"patientError?.required\">This is required.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\">\n      <mat-label *ngIf=\"doctors.length === 0\">Initializing doctor list</mat-label>\n      <mat-label *ngIf=\"doctors.length !== 0\">Doctor</mat-label>\n      <input matInput [matAutocomplete]=\"reactiveAutoDoctor\" formControlName=\"doctor\" (focus)=\"onFocus()\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear(false)\"><mat-icon>clear</mat-icon></button>\n      <mat-autocomplete #reactiveAutoDoctor [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let doctor of reactiveDoctors | async\" [value]=\"doctor\">\n          <span>{{ doctor.fullname }}</span>\n          <span> ({{ doctor.doctorNo }}) </span>\n        </mat-option>\n      </mat-autocomplete>\n      <mat-error *ngIf=\"doctorError?.required\">This is required.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\" *ngIf=\"isDoctor\">\n      <mat-label *ngIf=\"patients.length === 0\">Initializing patient list</mat-label>\n      <mat-label *ngIf=\"patients.length !== 0\">Patient</mat-label>\n      <input matInput [matAutocomplete]=\"reactiveAutoPatient\" formControlName=\"patient\" (focus)=\"onFocus()\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear(true)\"><mat-icon>clear</mat-icon></button>\n      <mat-autocomplete #reactiveAutoPatient [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let patient of reactivePatients | async\" [value]=\"patient\">\n          <span>{{ patient.fullname }}</span>\n          <span> ({{ patient.patientNo }}) </span>\n        </mat-option>\n      </mat-autocomplete>\n      <mat-error *ngIf=\"patientError?.required\">This is required.</mat-error>\n    </mat-form-field>\n\n    <button mat-raised-button [disabled]=\"isFormInvalid\" (click)=\"addDoctorToPatient()\" *ngIf=\"isPatient\">SUBMIT</button>\n    <button mat-raised-button [disabled]=\"isFormInvalid\" (click)=\"addPatientToDoctor()\" *ngIf=\"isDoctor\">SUBMIT</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/join/join.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/join/join.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n.mat-raised-button {\n  display: block;\n  margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2pvaW4vQzpcXFVzZXJzXFxVSVVYXFxEZXNrdG9wXFxoZC1kYXNoYm9hcmQtbWFzdGVyL3NyY1xcYXBwXFxlbnRyeS1hZG1pblxcZGFzaGJvYXJkLWFkbWluXFxqb2luXFxqb2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2pvaW4vam9pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/join/join.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/join/join.component.ts ***!
  \********************************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
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





var JoinComponent = /** @class */ (function () {
    function JoinComponent(fb, firestoreService, sharedService) {
        this.fb = fb;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
        this.patients = [];
        this.doctors = [];
        this.isFormInvalid = true;
        this.form = fb.group({
            'patient': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'doctor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    Object.defineProperty(JoinComponent.prototype, "patientError", {
        get: function () { return this.form.get('patient').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinComponent.prototype, "doctorError", {
        get: function () { return this.form.get('doctor').errors; },
        enumerable: true,
        configurable: true
    });
    JoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reactivePatients = this.form.get('patient').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterPatients(name); }));
        this.reactiveDoctors = this.form.get('doctor').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterDoctors(name); }));
        this.firestoreService.getPatientDetails()
            .subscribe(function (response) { return (_this.patients = response); });
        this.firestoreService.getDoctorDetails()
            .subscribe(function (response) { return (_this.doctors = response); });
        this.form.valueChanges.subscribe(function () {
            _this.isFormInvalid = _this.form.invalid;
        });
        this.sharedService.panelChanged.subscribe(function (state) {
            state ? _this.form.reset() : 0;
        });
    };
    JoinComponent.prototype.onClear = function (option) {
        option
            ? this.form.patchValue({
                'patient': ''
            })
            : this.form.patchValue({
                'doctor': ''
            });
    };
    JoinComponent.prototype.onFocus = function () {
        this.form.patchValue({
            'patient': this.form.get('patient').value || '',
            'doctor': this.form.get('doctor').value || ''
        });
    };
    JoinComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.fullname : value;
    };
    JoinComponent.prototype.filterPatients = function (val) {
        return val ? this._filter(this.patients, val) : this.patients;
    };
    JoinComponent.prototype.filterDoctors = function (val) {
        return val ? this._filter(this.doctors, val) : this.doctors;
    };
    JoinComponent.prototype.addPatientToDoctor = function () {
        var form = this.form.value;
        delete form.doctor['patientNo'];
        delete form.patient['doctorNo'];
        this.firestoreService.addPatientToDoctor(form);
    };
    JoinComponent.prototype.addDoctorToPatient = function () {
        var form = this.form.value;
        delete form.doctor['patientNo'];
        delete form.patient['doctorNo'];
        this.firestoreService.addDoctorToPatient(form);
    };
    // helper functions
    JoinComponent.prototype._filter = function (values, val) {
        var filterValue = val.toLowerCase();
        return values.filter(function (value) { return value.fullname.toLowerCase().startsWith(filterValue); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JoinComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JoinComponent.prototype, "isDoctor", void 0);
    JoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! ./join.component.html */ "./src/app/entry-admin/dashboard-admin/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.scss */ "./src/app/entry-admin/dashboard-admin/join/join.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/list/list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/list/list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  <div *ngIf=\"isAdmin\">\n    no preview available.\n  </div>\n\n  <div *ngIf=\"!isAdmin\">\n\n    <p *ngIf=\"isPatient\">Number of patients registerd: {{ patients.length }}</p>\n    <p *ngIf=\"isDoctor\">Number of doctors registerd: {{ doctors.length }}</p>\n\n    <mat-form-field color=\"accent\" appearance=\"fill\" *ngIf=\"isPatient\">\n      <mat-label *ngIf=\"patients.length === 0\">Initializing patient list</mat-label>\n      <mat-label *ngIf=\"patients.length !== 0\">Patient</mat-label>\n      <input matInput [matAutocomplete]=\"reactiveAutoPatient\" [formControl]=\"patientControl\" (focus)=\"onFocus()\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear()\"><mat-icon>clear</mat-icon></button>\n      <mat-autocomplete #reactiveAutoPatient [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let patient of reactivePatients | async\" [value]=\"patient\">\n          <span>{{ patient.fullname }}</span>\n          <span> ({{ patient.patientNo }}) </span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\" appearance=\"fill\" *ngIf=\"isDoctor\">\n      <mat-label *ngIf=\"doctors.length === 0\">Initializing doctor list</mat-label>\n      <mat-label *ngIf=\"doctors.length !== 0\">Doctor</mat-label>\n      <input matInput [matAutocomplete]=\"reactiveAutoDoctor\" [formControl]=\"doctorControl\" (focus)=\"onFocus()\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear()\"><mat-icon>clear</mat-icon></button>\n      <mat-autocomplete #reactiveAutoDoctor [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let doctor of reactiveDoctors | async\" [value]=\"doctor\">\n          <span>{{ doctor.fullname }}</span>\n          <span> ({{ doctor.doctorNo }}) </span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n\n    <div id=\"content\">\n\n      <div id=\"col-01\" *ngIf=\"patient || doctor\">\n        <p *ngIf=\"isPatient\">Patient details</p>\n        <p *ngIf=\"isDoctor\">Doctor details</p>\n\n        <mat-divider></mat-divider>\n\n        <div id=\"patient\" *ngIf=\"isPatient\">\n          <p>{{ patient?.fullname }}</p>\n          <p>{{ patient?.patientNo }}</p>\n          <p>{{ patient?.email }}</p>\n        </div>\n\n        <div id=\"patient\" *ngIf=\"isDoctor\">\n          <p>{{ doctor?.fullname }}</p>\n          <p>{{ doctor?.doctorNo }}</p>\n          <p>{{ doctor?.email }}</p>\n        </div>\n      </div>\n\n      <div id=\"col-02\" *ngIf=\"patient || doctor\">\n        <p *ngIf=\"isPatient\">Assigned doctors</p>\n        <p *ngIf=\"isDoctor\">Assigned patients</p>\n\n        <mat-divider></mat-divider>\n\n        <div *ngIf=\"isPatient\">\n          <p *ngIf=\"(patientDoctors | async)?.length === 0\">Please wait...</p>\n          <p *ngFor=\"let doctor of patientDoctors | async\">\n            {{ doctor?.fullname }} - {{ doctor?.doctorNo }}\n          </p>\n        </div>\n\n        <div *ngIf=\"isDoctor\">\n          <p *ngIf=\"(doctorPatients | async)?.length === 0\">Please wait...</p>\n          <p *ngFor=\"let patient of doctorPatients | async\">\n            {{ patient?.fullname }} - {{ patient?.patientNo }}\n          </p>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/list/list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/list/list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 7px; }\n\n.mat-form-field {\n  width: 100%; }\n\n#content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n#content #col-01 > p,\n  #content #col-02 > p {\n    color: #b3b3b3; }\n\n#content #col-01 {\n    margin-right: 30px; }\n\n#content #col-01 > div {\n      margin-top: 10px; }\n\n#content #col-02 {\n    flex-grow: 1; }\n\n#content #col-02 div > p:first-child {\n      margin-top: 10px; }\n\n@media (max-width: 453px) {\n  #content {\n    flex-direction: column; }\n  #col-01 {\n    flex-grow: 1; }\n  #col-02 {\n    flex-grow: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2xpc3QvQzpcXFVzZXJzXFxVSVVYXFxEZXNrdG9wXFxoZC1kYXNoYm9hcmQtbWFzdGVyL3NyY1xcYXBwXFxlbnRyeS1hZG1pblxcZGFzaGJvYXJkLWFkbWluXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFIaEM7O0lBT0ksY0FBeUIsRUFBQTs7QUFQN0I7SUFXSSxrQkFBa0IsRUFBQTs7QUFYdEI7TUFjTSxnQkFBZ0IsRUFBQTs7QUFkdEI7SUFtQkksWUFBWSxFQUFBOztBQW5CaEI7TUFzQk0sZ0JBQWdCLEVBQUE7O0FBTXRCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1hZG1pbi9kYXNoYm9hcmQtYWRtaW4vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICNjb2wtMDEgPiBwLFxuICAjY29sLTAyID4gcCB7XG4gICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcbiAgfVxuXG4gICNjb2wtMDEge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcblxuICAgID4gZGl2IHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgI2NvbC0wMiB7XG4gICAgZmxleC1ncm93OiAxO1xuXG4gICAgZGl2ID4gcDpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTNweCkge1xuICAjY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICNjb2wtMDEge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gICNjb2wtMDIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/list/list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/list/list.component.ts ***!
  \********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(firestoreService) {
        this.firestoreService = firestoreService;
        this.patients = [];
        this.doctors = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.doctorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.reactivePatients = this.patientControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterPatients(name); }));
        this.reactiveDoctors = this.doctorControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterDoctors(name); }));
        this.firestoreService.getPatientDetails(true)
            .subscribe(function (response) { return (_this.patients = response); });
        this.firestoreService.getDoctorDetails(true)
            .subscribe(function (response) { return (_this.doctors = response); });
        this.patientControl.valueChanges.subscribe(function (control) {
            _this.patient = control;
        });
        this.doctorControl.valueChanges.subscribe(function (control) {
            _this.doctor = control;
        });
    };
    ListComponent.prototype.onClear = function () {
        this.patientControl.reset();
        this.doctorControl.reset();
    };
    ListComponent.prototype.onFocus = function () {
        this.patientControl.patchValue(this.patientControl.value || '');
        this.doctorControl.patchValue(this.doctorControl.value || '');
    };
    ListComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.fullname : value;
    };
    ListComponent.prototype.filterPatients = function (val) {
        this.patientDoctors = this.firestoreService.getPatientDoctors(val);
        return val ? this._filter(this.patients, val) : this.patients;
    };
    ListComponent.prototype.filterDoctors = function (val) {
        this.doctorPatients = this.firestoreService.getDoctorPatients(val);
        return val ? this._filter(this.doctors, val) : this.doctors;
    };
    ListComponent.prototype._filter = function (values, val) {
        var filterValue = val.toLowerCase();
        return values.filter(function (value) { return value.fullname.toLowerCase().startsWith(filterValue); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "isDoctor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "isAdmin", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/entry-admin/dashboard-admin/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/entry-admin/dashboard-admin/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/register/register.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/register/register.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <form [formGroup]=\"form\">\n\n    <mat-form-field color=\"accent\" *ngIf=\"!isAdmin && !isDoctor\">\n      <mat-label>Patient No.</mat-label>\n      <input matInput type=\"text\" formControlName=\"patientNo\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('patientNo')\"><mat-icon>clear</mat-icon></button>\n      <mat-error *ngIf=\"patientNoError?.required\">This is required.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\" *ngIf=\"!isAdmin && !isPatient\">\n      <mat-label>Doctor No.</mat-label>\n      <input matInput type=\"text\" formControlName=\"doctorNo\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('doctorNo')\"><mat-icon>clear</mat-icon></button>\n      <mat-error *ngIf=\"doctorNoError?.required\">This is required.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\" *ngIf=\"!isAdmin\">\n      <mat-label>Fullname</mat-label>\n      <input matInput type=\"text\" formControlName=\"fullname\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('fullname')\"><mat-icon>clear</mat-icon></button>\n      <mat-error *ngIf=\"fullnameError?.required\">This is required.</mat-error>\n      <mat-error *ngIf=\"fullnameError?.minlength || fullnameError?.containsNumber\">Invalid name.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\">\n      <mat-label>Email</mat-label>\n      <input matInput type=\"email\" formControlName=\"email\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('email')\"><mat-icon>clear</mat-icon></button>\n      <mat-error *ngIf=\"emailError?.required\">This is required.</mat-error>\n      <mat-error *ngIf=\"emailError?.email\">Invalid email.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field color=\"accent\">\n      <mat-label>Password</mat-label>\n      <input matInput type=\"text\" formControlName=\"password\">\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('password')\"><mat-icon>clear</mat-icon></button>\n      <mat-error *ngIf=\"passwordError?.required\">This is required.</mat-error>\n      <mat-error *ngIf=\"passwordError?.minlength\">Password is too short.</mat-error>\n    </mat-form-field>\n\n    <div *ngIf=\"isPatientFormInvalid; else else1\">\n      <button mat-raised-button [disabled]=\"isProcessing\" (click)=\"patientCreate()\" *ngIf=\"isPatient\">SUBMIT</button>\n    </div>\n    <ng-template #else1>\n      <button mat-raised-button [disabled]=\"true\" *ngIf=\"isPatient\">SUBMIT</button>\n    </ng-template>\n    <div *ngIf=\"isDoctorFormInvalid; else else2\">\n      <button mat-raised-button [disabled]=\"isProcessing\" (click)=\"doctorCreate()\" *ngIf=\"isDoctor\">SUBMIT</button>\n    </div>\n    <ng-template #else2>\n      <button mat-raised-button [disabled]=\"true\" *ngIf=\"isDoctor\">SUBMIT</button>\n    </ng-template>\n    <div *ngIf=\"isAdminFormInvalid; else else3\">\n      <button mat-raised-button [disabled]=\"isProcessing\" (click)=\"adminCreate()\" *ngIf=\"isAdmin\">SUBMIT</button>\n    </div>\n    <ng-template #else3>\n      <button mat-raised-button [disabled]=\"true\" *ngIf=\"isAdmin\">SUBMIT</button>\n    </ng-template>\n\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/register/register.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/register/register.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n.mat-raised-button {\n  display: block;\n  margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcVUlVWFxcRGVza3RvcFxcaGQtZGFzaGJvYXJkLW1hc3Rlci9zcmNcXGFwcFxcZW50cnktYWRtaW5cXGRhc2hib2FyZC1hZG1pblxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/register/register.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/register/register.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterComponent, CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
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




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, firestoreService, sharedService) {
        this.fb = fb;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
        this.isProcessing = false;
        this.isPatientFormInvalid = false;
        this.isDoctorFormInvalid = false;
        this.isAdminFormInvalid = false;
        this.form = fb.group({
            'patientNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'doctorNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'fullname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), CustomValidator.containNum]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
        });
    }
    Object.defineProperty(RegisterComponent.prototype, "patientNoError", {
        get: function () { return this.form.get('patientNo').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "doctorNoError", {
        get: function () { return this.form.get('doctorNo').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "fullnameError", {
        get: function () { return this.form.get('fullname').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "emailError", {
        get: function () { return this.form.get('email').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordError", {
        get: function () { return this.form.get('password').errors; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function () {
            var doctorCondition = _this.form.get('doctorNo').valid && _this.form.get('fullname').valid && _this.form.get('email').valid && _this.form.get('password').valid;
            _this.isDoctorFormInvalid = doctorCondition;
            var patientCondition = _this.form.get('patientNo').valid && _this.form.get('fullname').valid && _this.form.get('email').valid && _this.form.get('password').valid;
            _this.isPatientFormInvalid = patientCondition;
            var adminCondition = _this.form.get('email').valid && _this.form.get('password').valid;
            _this.isAdminFormInvalid = adminCondition;
        });
        this.sharedService.panelChanged.subscribe(function (state) {
            state ? _this.form.reset() : 0;
        });
    };
    RegisterComponent.prototype.onClear = function (option) {
        option === 'patientNo'
            ? this.form.patchValue({
                'patientNo': ''
            })
            : option === 'doctorNo'
                ? this.form.patchValue({
                    'doctorNo': ''
                })
                : option === 'fullname'
                    ? this.form.patchValue({
                        'fullname': ''
                    })
                    : option === 'email'
                        ? this.form.patchValue({
                            'email': ''
                        })
                        : option === 'password'
                            ? this.form.patchValue({
                                'password': ''
                            }) : 0;
    };
    RegisterComponent.prototype.patientCreate = function () {
        var _this = this;
        delete this.form.value['doctorNo'];
        var userDetails = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 10000000);
        this.isProcessing = true;
        this.firestoreService.createUser(userDetails, 'patient')
            .then(function (user) { return (_this.resetFormThen(user, 'patient')); })
            .catch(function (e) { return (_this.resetFormCatch(e)); });
    };
    RegisterComponent.prototype.doctorCreate = function () {
        var _this = this;
        delete this.form.value['patientNo'];
        var userDetails = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 10000000);
        this.isProcessing = true;
        this.firestoreService.createUser(userDetails, 'doctor')
            .then(function (user) { return (_this.resetFormThen(user, 'doctor')); })
            .catch(function (e) { return (_this.resetFormCatch(e)); });
    };
    RegisterComponent.prototype.adminCreate = function () {
        var _this = this;
        delete this.form.value['patientNo'];
        delete this.form.value['doctorNo'];
        delete this.form.value['fullname'];
        var userDetails = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 10000000);
        this.isProcessing = true;
        this.firestoreService.createUser(userDetails, 'admin')
            .then(function (user) { return (_this.resetFormThen(user, 'admin')); })
            .catch(function (e) { return (_this.resetFormCatch(e)); });
    };
    // helper functions
    RegisterComponent.prototype.resetFormThen = function (user, option) {
        this.form.reset();
        this.isProcessing = false;
        this.sharedService.closeAllSnackBar();
        option === 'admin'
            ? this.sharedService.snackbar("Successfully created an admin account.")
            : option === 'patient'
                ? this.sharedService.snackbar("Successfully created an account for " + user + ".")
                : option === 'doctor'
                    ? this.sharedService.snackbar("Successfully created an account for Dr. " + user + ".") : 0;
    };
    RegisterComponent.prototype.resetFormCatch = function (e) {
        this.form.reset();
        this.isProcessing = false;
        this.sharedService.closeAllSnackBar();
        this.sharedService.snackbar("Error: " + e.message);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isDoctor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isAdmin", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/entry-admin/dashboard-admin/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/entry-admin/dashboard-admin/register/register.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    CustomValidator.containNum = function (control) {
        var CONTAIN_NUMBER_REGEXP = /\d/;
        return CONTAIN_NUMBER_REGEXP.test(control.value) ? { containsNumber: true } : null;
    };
    return CustomValidator;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-admin-dashboard-admin-module.js.map