import { Module } from 'mark5';
import { forof } from './forOf';
import { bIf } from './if';
@Module({
    declarations: [bIf, forof],
    exports: [],
})
class CommonModule {}
export { CommonModule };
