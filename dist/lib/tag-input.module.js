"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/do");
var tag_input_autocomplete_component_1 = require("./components/tag-input-autocomplete/tag-input-autocomplete.component");
var tag_input_component_1 = require("./components/tag-input/tag-input.component");
var tag_input_item_component_1 = require("./components/tag-input-item/tag-input-item.component");
var RlTagInputModule = /** @class */ (function () {
    function RlTagInputModule() {
    }
    RlTagInputModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                tag_input_autocomplete_component_1.TagInputAutocompleteComponent,
                tag_input_component_1.TagInputComponent,
                tag_input_item_component_1.TagInputItemComponent
            ],
            exports: [
                tag_input_component_1.TagInputComponent
            ]
        })
    ], RlTagInputModule);
    return RlTagInputModule;
}());
exports.RlTagInputModule = RlTagInputModule;
//# sourceMappingURL=tag-input.module.js.map