import { CheckDetectChange, Directive, Inject, Input } from 'mark5';
import { formControlGroup } from './index';

@Directive({
    selector: '[formgroup]',
})
class formGroupDirective {
    @Input('formgroup') formGroup?: formControlGroup;
    form?: HTMLFormElement;
    constructor(@Inject(CheckDetectChange) private cd: CheckDetectChange) {
        console.log('formGroup 实例化');
    }
    OnBind(native: HTMLFormElement) {
        this.form = native;
        console.log('bind', native);
    }
    OnInit() {
        this.form = this.form;
    }
    change() {
        this.cd.detectChanges();
    }
}
export { formGroupDirective };
