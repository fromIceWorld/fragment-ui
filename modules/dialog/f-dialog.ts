import { Component, EventEmitter, Input, Output, ViewChild } from 'mark5';
@Component({
    selector: 'f-dialog',
    template: `
        <div
            class="f-dialog-container"
            #dialog
            &style="{display:display ? 'block' : 'none'}"
        >
            <div &style="style" class="f-dialog-modal">
                <div class="f-dialog-header">
                    <span class="f-dialog-header-item f-dialog-header-title">{{
                        title
                    }}</span>
                    <span
                        class="f-dialog-header-item f-dialog-header-btn"
                        @click="closeDialog($event)"
                        >X</span
                    >
                </div>
                <slot></slot>
            </div>
        </div>
    `,
    styles: `
    .f-dialog-container{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--dialog-color);
    }
    .f-dialog-header{
        position:relative;
        height:32px;
        border-bottom:1px solid var(--border-color);
    }
    .f-dialog-modal{
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: white;
        transform: translateX(-50%) translateY(-50%);
    }
    .f-dialog-header-item{
        position:absolute;
        top: 6px;
    }
    .f-dialog-header-title{
        left: 10px;
        color:var(--text-color);
    }
    .f-dialog-header-btn{
        right: 10px;
        cursor: pointer;
    }
    `,
})
class FragmentDialog {
    @Input('style') style;
    @Input('display') display;
    @Input('title') title;
    @Output('OnCancel') OnCancel = new EventEmitter('OnCancel');
    @ViewChild('dialog') dialogRef;
    OnInputChanges(obj) {
        console.log('OnInputChanges', obj);
    }
    closeDialog(e) {
        this.dialogRef.attributeStyleMap.set('display', 'none');
        this.OnCancel.emit('');
        console.log(this.dialogRef);
    }
}
export { FragmentDialog };
