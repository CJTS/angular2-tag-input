"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TagInputItemComponent = /** @class */ (function () {
    function TagInputItemComponent() {
        this.tagRemoved = new core_1.EventEmitter();
    }
    Object.defineProperty(TagInputItemComponent.prototype, "isSelected", {
        get: function () { return !!this.selected; },
        enumerable: true,
        configurable: true
    });
    TagInputItemComponent.prototype.removeTag = function () {
        this.tagRemoved.emit(this.index);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagInputItemComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TagInputItemComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TagInputItemComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TagInputItemComponent.prototype, "tagRemoved", void 0);
    __decorate([
        core_1.HostBinding('class.ng2-tag-input-item-selected'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TagInputItemComponent.prototype, "isSelected", null);
    TagInputItemComponent = __decorate([
        core_1.Component({
            selector: 'rl-tag-input-item',
            template: "\n    {{text}}\n    <span\n    class=\"ng2-tag-input-remove\"\n    (click)=\"removeTag()\">&times;</span>\n  ",
            styles: ["\n    :host {\n      font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n      font-size: 16px;\n      height: 32px;\n      line-height: 32px;\n      display: inline-block;\n      background: #e0e0e0;\n      padding: 0 12px;\n      border-radius: 90px;\n      margin-right: 10px;\n      transition: all 0.12s ease-out;\n    }\n\n     :host .ng2-tag-input-remove {\n      background: #a6a6a6;\n      border-radius: 50%;\n      color: #e0e0e0;\n      cursor: pointer;\n      display: inline-block;\n      font-size: 17px;\n      height: 24px;\n      line-height: 24px;\n      margin-left: 6px;\n      margin-right: -6px;\n      text-align: center;\n      width: 24px;\n    }\n\n    :host.ng2-tag-input-item-selected {\n      color: white;\n      background: #0d8bff;\n    }\n\n     :host.ng2-tag-input-item-selected .ng2-tag-input-remove {\n      background: white;\n      color: #0d8bff;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], TagInputItemComponent);
    return TagInputItemComponent;
}());
exports.TagInputItemComponent = TagInputItemComponent;
//# sourceMappingURL=tag-input-item.component.js.map