import {
    CheckDetectChange,
    Directive,
    Inject,
    Input,
    ObjectInterface,
} from 'mark5';
import { formControlGroup } from '../index';
@Directive({
    selector: '[formcontrol]',
})
class formControlDirective {
    @Input('formcontrol') formControl;
    constructor(@Inject(CheckDetectChange) private cd: CheckDetectChange) {}
    input?: HTMLInputElement;
    OnBind(input: HTMLInputElement) {
        this.input = input;
        console.log(this.input);
        input.addEventListener('input', () => {
            this.formControl.value = input.value;
            console.log('formGroupDirective绑定的input更改', input.value);
            this.cd.detectChanges();
        });
    }
}
class formControl {
    value: any;
    group?: formControlGroup;
    constructor(private config: ObjectInterface<any>) {
        this.value = this.config.value || '';
    }
}
export { formControlDirective, formControl };
