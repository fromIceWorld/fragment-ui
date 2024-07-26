import { ObjectInterface } from 'mark5';

class formControlGroup {
    constructor(private fromControls: ObjectInterface<any>) {
        for (let [key, fromControl] of Object.entries(fromControls)) {
            fromControl.group = this;
            Object.defineProperty(this, key, {
                get() {
                    return this.fromControls[key];
                },
            });
        }
    }
    getRawValue(name) {
        return this.fromControls[name];
    }
}
export { formControlGroup };
