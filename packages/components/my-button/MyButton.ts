interface MyButton {
	install?: Function;
	name: string;
	data: Function;
	template: string;
}

const button: MyButton = {
	name: 'MyButton',
	data: function () {
		return {
			count: 0,
		};
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
};

export default button;
