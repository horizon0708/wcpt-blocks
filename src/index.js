import { CardEdit, CardSave } from "./testCard";
import { TestComponentEdit, TestCoponentSave } from "./test";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'wcpt/simple-card', {
	title: __( 'wcpt card' ),
	icon: 'lock',
	category: 'common',
	edit(props) {
		return (
			<CardEdit {...props} />
		);
	},
	save(props) {
		return (
			<CardSave	 {...props} />
		);
	},
} );

registerBlockType( 'wcpt/tester', {
	title: __( 'wcpt test component' ),
	icon: 'lock',
	category: 'common',
	edit(props) {
		return (
			<TestComponentEdit {...props} />
		);
	},
	save(props) {
		return (
			<TestComponentSave	 {...props} />
		);
	},
} );