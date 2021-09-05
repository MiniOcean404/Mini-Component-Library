import MyButton from './MyButton';

/* istanbul ignore next */
MyButton.install = function (app) {
	app.component(MyButton.name, MyButton);
};

export default MyButton;
