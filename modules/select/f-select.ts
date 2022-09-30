import {
    CheckDetectChange,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from 'mark5';
@Component({
    selector: 'f-select',
    template: `
        <div class="f-select-container">
            <div class="f-select-exhibition-container" @click="extendOptions($event)">
                <input class="f-select-input"></input>
                <div class="f-select-exhibition">
                    {{ value }}
                </div>
                <span class="f-select-drop">></span>
            </div>
            <div class="f-select-options" &class="{expend:!expend}">
                <slot @select="selectOptions($event)"></slot>
            </div>
        </div>
    `,
    styles: `
    .f-select-container{
        width: 180px;
        height: 30px;
        position: relative;
        display: inline-block;
        background-color: white;
    }
    .f-select-exhibition{
        font-size: var(--font-size);
        padding: 3px;
        color: var(--border-color);
        cursor:pointer;
        box-sizing: border-box;
        width: 180px;
        height: 28px;
        border: 1px solid var(--border-color);
    }
    .f-select-exhibition-container:hover  input{
        border-color:var(--default-color);
        box-shadow: 1px 1px 6px -2px var(--default-color);
    }
    .f-select-exhibition-container:hover  .f-select-exhibition{
        border-color:var(--default-color);
        box-shadow: 1px 1px 6px -2px var(--default-color);
    }
    .f-select-options{
        z-index: 10;
        position: absolute;
        background: white;
        width: 100%;
        cursor: pointer;
        margin-top: 4px;
        box-shadow: 0 2px 2px 2px var(--shadow-color);
    }
    .expend{
        display:none;
    }
    .f-select-drop{
        position: absolute;
        right: 6px;
        font-size: 17px;
        top: 2px;
        color:var(--border-color);
        transform: rotate(0.25turn);
        cursor: pointer;
    }
    .f-selected-status{
        color: var(--text-color);
    }
    .f-select-exhibition-container{
        height: 100%;
        width: 100%;
    }
    .f-select-exhibition-container > input{
        opacity: 0;
        cursor: pointer;
        position: absolute;
        width: 180px;
        padding: 0;
        border: 1px solid var(--border-color);
        box-sizing: border-box;
        height: 100%;
    }
    }
    `,
})
class FragmentSelect {
    @Input('placeholder') placeholder;
    @Output('input') inputEvent = new EventEmitter('input');
    value = '';
    selectedLabel: string = '';
    expend: boolean = false;
    constructor(@Inject(CheckDetectChange) private cd: CheckDetectChange) {}
    extendOptions(e) {
        this.expend = !this.expend;
        this.cd.detectChanges();
    }
    selectOptions(e) {
        this.value = e.detail.value;
        this.expend = false;
        e.stopPropagation();
        this.inputEvent.emit(this.value);
        this.cd.detectChanges();
    }
}
export { FragmentSelect };
