import { Viewport } from '@stage-ui/core'
import Themer from '@stage-ui/docs/components/Themer'
import { Block, Button, Flexbox, Paragraph, Modal } from '@stage-ui/core'
import dt from '@stage-ui/docs/utils/types'
import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import ModalTypes from '@stage-ui/core/layout/Modal/types'

declare global {
    interface Window { dt: any }
}

window.dt = dt

const Playground = () => {
	const modal = useRef<ModalTypes.Ref>(null)

	return (
		<Viewport theme="dark">
			{/* <Themer /> */}
			<Flexbox alignItems="center" direction="column" h="200vh" backgroundColor="hardest">
				<Button 
					mt="5rem" 
					onClick={() => modal.current?.open()}
				>
					Open Moadel
				</Button>
				<Modal
					title="Hello"
					subtitle="I'm modal window, please do not close me 🙄"
					ref={modal}
				/>
				<Paragraph color='primary'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet voluptatibus voluptatum est, dolore quidem rem provident alias autem mollitia quaerat inventore fuga quia, enim magnam similique totam, maxime sapiente? Debitis.
				</Paragraph>
			</Flexbox>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)