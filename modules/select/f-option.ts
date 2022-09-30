import { Component, EventEmitter, Input, Output } from 'mark5';
@Component({
    selector: 'f-option',
    template: `
        <div class="f-option-item" @click="targetItem($event)">
            <slot></slot>
        </div>
    `,
    styles: `
        .f-option-item:hover{
            background-color: #dfdfdf;
        }
    `,
})
class FragmentOption {
    @Input('value') value;
    @Output('select') selectItem = new EventEmitter('select', {
        bubbles: true,
    });
    targetItem(e) {
        this.selectItem.emit(this.value);
    }
}
export { FragmentOption };
