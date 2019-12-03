import { Children } from '@wordpress/element';
import { default as SlickSlider } from 'react-slick';
import './style.scss';

export default function Slider( { children, settings = {} } ) {
	return (
		<SlickSlider { ...settings }>
			{ Children.map( children, ( item ) => <div>{ item }</div> ) }
		</SlickSlider>
	);
}
