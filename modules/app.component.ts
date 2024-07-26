import { CheckDetectChange, Component, Inject } from 'mark5';
import { formControl, formControlGroup } from './form/index';
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
        <f-button type="dashed" @click="refreshList($event)"
            >翻转列表值</f-button
        >
        <p>选中的值：{{ selectItem }}</p>
        <f-select placeholder="请选择" %="selectItem">
            <f-option *forOf="options" &value="item.value">{{
                item.label
            }}</f-option>
        </f-select>
        <h4>dialog：</h4>
        <f-button type="primary" @click="expendDialog($event)">dialog</f-button>
        <f-dialog style="width:400px" title="对话框" %display="value">
            基础对话框
        </f-dialog>
        {{value}}
        <h4>form</h4>
        <div &formgroup="form">
            <div><span>姓名：</span><input &formcontrol = "form.name"></input>{{form.name.value}}</div>
        </div> `,
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
    value = false;
    selectItem = '';
    form = new formControlGroup({
        name: new formControl({}),
    });
    refreshList(e) {
        this.options = this.options.reverse();
        this.cd.detectChanges();
    }
    expendDialog(e) {
        this.value = true;
        this.cd.detectChanges();
    }
}
export { AppComponent };
