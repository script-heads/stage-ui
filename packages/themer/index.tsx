import { Block, Button, dialog, Flexbox, Viewport } from '@flow-ui/core'
import { ColorPalette, CodeDownload } from '@flow-ui/core/icons'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import original from './src/theme'
import ThemeConfigurator from './src/ThemeConfigurator'
import PreviewCube from './src/ThemeConfigurator/PreviewCube'

const Themer = () => {
	const [theme, updateTheme] = React.useState(original)

	return (
		<Viewport theme={theme}>
			<Flexbox column alignItems="center">
				<PreviewCube />
				<Button
					mt="l"
					size="l"
					children="Change theme"
					leftChild={<ColorPalette />}
					onClick={() => {
						dialog({
							decoration: 'panel',
							hideHeader: true,
							styles: {
								window: variant => variant({
									decoration: {
										panel: {
											marginTop: '50vh'
										}
									}
								})
							},
							customContent: (close) => (
								<Fragment>
									<ThemeConfigurator
										original={original}
										updateTheme={updateTheme}
									/>
									<Flexbox justifyContent="space-between" pt="4rem">
										<Block>
											<Button decoration="text" rightChild={<CodeDownload />}>Export</Button>
										</Block>
										<Block>
											<Button onClick={close}>Dismiss</Button>
										</Block>
									</Flexbox>
								</Fragment>
							)
						})
					}}
				/>
			</Flexbox>
		</Viewport>
	)
}

ReactDOM.render(
	<Themer />,
	document.getElementById('app')
)