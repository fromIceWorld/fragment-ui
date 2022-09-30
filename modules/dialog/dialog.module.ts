import { Module } from 'mark5';
import { FragmentDialog } from './f-dialog';

@Module({
    declarations: [FragmentDialog],
    exports: [FragmentDialog],
})
class DialogModule {}
export { DialogModule };
