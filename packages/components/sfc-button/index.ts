import SfcButton from './SfcButton.vue';
import type { App } from 'vue';

SfcButton.install = function (app: App): void {
	app.component(SfcButton.name, SfcButton);
};

export default SfcButton;
