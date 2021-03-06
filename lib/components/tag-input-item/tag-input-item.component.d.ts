import { EventEmitter } from '@angular/core';
export declare class TagInputItemComponent {
    selected: boolean;
    text: string;
    index: number;
    tagRemoved: EventEmitter<number>;
    readonly isSelected: boolean;
    constructor();
    removeTag(): void;
}
