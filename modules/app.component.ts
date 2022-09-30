import { CheckDetectChange, Component, Inject } from 'mark5';
@Component({
    selector: 'app-component',
    template: `<h3>fragment-ui</h3>
        <h4>按钮：</h4>
        <ul>
            <li><f-button>提交</f-button></li>
            <li><f-button type="primary">提交</f-button></li>
            <li><f-button type="dashed">提交</f-button></li>
            <li><f-button type="link">提交</f-button></li>
        </ul>
        <h4>select：</h4>
        <p>选中的值：{{ selectItem }}</p>
        <f-select placeholder="请选择" %="selectItem">
            <f-option *forOf="options" &value="item.value">{{
                item.label
            }}</f-option>
        </f-select>
        <h4>dialog：</h4>
        <f-button type="primary" @click="expendDialog($event)">dialog</f-button>
        <f-dialog style="width:400px" title="对话框" &display="diaDisplay">
            基础对话框
        </f-dialog> `,
    styles: `h3{
        color: #e29d33
    }
    li{
        margin-bottom:2px
    }
    `,
})
class AppComponent {
    constructor(@Inject(CheckDetectChange) private cd: CheckDetectChange) {}
    options = [
        {
            label: 'node1',
            value: 'node1',
        },
        {
            label: 'node2',
            value: 'node2',
        },
        {
            label: 'node3',
            value: 'node3',
        },
    ];
    value = true;
    diaDisplay = false;
    selectItem = '';
    expendDialog(e) {
        this.diaDisplay = true;
        this.cd.detectChanges();
    }
}
export { AppComponent };
