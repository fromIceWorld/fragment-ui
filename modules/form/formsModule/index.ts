import { Module } from 'mark5';
import { formGroupDirective } from '../form-group-directive';
import { formControlDirective } from '../index';

@Module({
    declarations: [formGroupDirective, formControlDirective],
    exports: [],
})
class FormModule {}
export { FormModule };
