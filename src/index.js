import { CardEdit, CardSave } from "./testCard";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'mdlr/static-jsx-example', {
	title: __( 'WCPT card' ),
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