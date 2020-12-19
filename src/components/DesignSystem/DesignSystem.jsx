/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Input } from 'theme-ui';
import { Container } from 'semantic-ui-react';

const DesignSystem = () => {
	return (
		<Container>
			<Box
				sx={{
					position: 'relative',
					'input:focus~label': {
						transform: 'scale(.8) translateY(-2.9rem) translateX(-.75rem)',
					},
				}}
			>
				<Input id="input22" name="input22" />
				<label
					htmlFor="input22"
					sx={{
						position: 'absolute',
						fontSize: '1rem',
						lineHeight: '1.5rem',
						fontWeight: '500',
						background: ' #fff',
						color: ' #8296a6',
						left: '.75rem',
						top: 'calc(.5rem + 2px)',
						maxWidth: 'calc(100% - 1.5rem)',
						pointerEvents: 'none',
						transformOrigin: 'bottom left',
						transition: 'transform .15s cubic-bezier(.4,0,.2,1)',
					}}
				>
					Label
				</label>
			</Box>
		</Container>
	);
};

export default DesignSystem;
