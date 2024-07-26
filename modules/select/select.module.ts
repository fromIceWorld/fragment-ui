import { Module } from 'mark5';
import { FragmentOption } from './f-option';
import { FragmentSelect } from './f-select';
@Module({
    declarations: [FragmentSelect, FragmentOption],
    exports: [],
})
class SelectModule {}
export { SelectModule };
