import { Module } from 'mark5';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CommonModule } from './common/common.module';
import { DialogModule } from './dialog/dialog.module';
import { FormModule } from './form/formsModule/index';
import { SelectModule } from './select/select.module';
@Module({
    declarations: [AppComponent],
    imports: [
        ButtonModule,
        SelectModule,
        CommonModule,
        DialogModule,
        FormModule,
    ],
    bootstrap: [AppComponent],
})
class AppModule {}
export { AppModule };
