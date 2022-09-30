import { Module } from 'mark5';
import { FragmentButton } from './f-button';
@Module({
    declarations: [FragmentButton],
    exports: [FragmentButton],
})
class ButtonModule {}
export { ButtonModule };
