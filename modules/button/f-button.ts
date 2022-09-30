import { Component, Input } from 'mark5';
@Component({
    selector: 'f-button',
    template: `<div
        class="base rect"
        &class="{
            primary:type === 'primary',
            dashed:type === 'dashed',
            link:type === 'link',
            circle:shape=== 'circle',
    }"
    >
        <slot></slot>
    </div>`,
    styles: `
    .base{
        display:inline-block;
        background:white;
        border-radius: 2px;
        padding: 4px 10px;
        color: var(--text-color);
        border: 1px solid #dbdddf;
        font-size: 14px;
        cursor: pointer;
        transition:all .3s cubic-bezier(.645,.045,.355,1)
    }
    .link{
        border: none;
        padding: 0;
        color: var(--default-color);
    }

    .dashed{
        border: 1px dashed #dbdddf;
    }
    .base:hover{
        border-color: var(--default-color);
        color: var(--default-color);
    }
    .dash:hover{
        border-color: var(--default-color);
        color: var(--default-color);
    }
    .link:hover{
        color:var(--default-color)cc;
    }
    .primary{
        background:var(--default-color);
        color:white
    }
    .primary:hover{
        border-color: var(--default-color);
        background: var(--default-color);
        color:white;
    }
    .circle{
        border-radius:50%
    }
    `,
})
class FragmentButton {
    @Input('shape')
    shape;
    @Input('type')
    type;
}
export { FragmentButton };
