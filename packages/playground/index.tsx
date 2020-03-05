import { Viewport, Tree, Modal, Button, dialog, Block, Flexbox } from '@flow-ui/core'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import custom from './themes/custom'
import ThemeConfigurator from '../themer/src/ThemeConfigurator'
import PreviewCube from '../themer/src/ThemeConfigurator/PreviewCube'

const Playground = () => {
	const [theme, updateTheme] = React.useState(custom)
	
	return (
		<Viewport theme={theme}>
			{/* <App /> */}
			<Button m="5rem" onClick={() => {
				dialog({
					decoration: 'panel',
					hideHeader: true,
					customContent: (close) => (
						<Fragment>
							<ThemeConfigurator
								original={custom}
								updateTheme={updateTheme}
							/>
							<Flexbox justifyContent="flex-end" p="1rem" pt="4rem">
								<Button onClick={close}>Close</Button>
							</Flexbox>
						</Fragment>
					)
				})
			}}>Panel</Button>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)