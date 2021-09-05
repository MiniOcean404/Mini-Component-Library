// ⽤于构建时的⼊⼝
import MyButton from '../components/my-button';
import SfcButton from '../components/sfc-button';
import JsxButton from '../components/jsx-button';
import { version } from './package.json';

const components = [MyButton, SfcButton, JsxButton];

const install = (app, opts = {}) => {
	app.use(setupGlobalOptions(opts));
	components.forEach((component) => {
		app.use(component);
	});
};

const setupGlobalOptions = (opts = { size: '', zIndex: '' }) => {
	return (app) => {
		app.config.globalProperties.$ELEMENT = {
			size: opts.size || '',
			zIndex: opts.zIndex || 2000,
		};
	};
};

export { MyButton, SfcButton, JsxButton, install }; //按需加载

export default {
	//全部加载
	version,
	install,
};
