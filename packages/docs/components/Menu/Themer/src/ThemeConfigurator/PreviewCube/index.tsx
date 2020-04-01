import { Flexbox, useTheme } from '@flow-ui/core'
import React from 'react'

const PreviewCube = () => {
	const theme = useTheme()

	React.useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.width = 400
        canvas.height = 360

        const cubes = [
            {
                //BACKGROUND VARIANT
                x: 200 / 2, y: 320 - 50,
                sizeX: 100, sizeZ: 200,
                sizeY: 30, 
                color: theme.color.backgroundVariant.hex()
            },
            {
                //BACKGROUND
                x: 200, y: 320,
                sizeX: 100, sizeZ: 200,
                sizeY: 30, 
                color: theme.color.background.hex()
            },
            {
                //SURFACE VARIANT
                x: 200 / 2 + 25, y: 320 - 73,
                sizeX: 75, sizeZ: 150,
                sizeY: 10, 
                color: theme.color.surfaceVariant.hex()
            },
            {
                //SURFACE
                x: 200, y: 320 - 35,
                sizeX: 75, sizeZ: 150,
                sizeY: 10, 
                color: theme.color.surface.hex()
            },
            {
                //PRIMARY
                x: 200, y: 270,
                sizeX: 50, sizeZ: 50,
                sizeY: 5, 
                color: theme.color.primary.hex()
            },
            {
                //SECONDARY
                x: 270, y: 230,
                sizeX: 50, sizeZ: 50,
                sizeY: 5, 
                color: theme.color.secondary.hex()
            },
            {
                //ON PRIMARY
                x: 195, y: 240, 
                sizeX: 20, sizeZ: 20, sizeY: 20, 
                color: theme.color.onPrimary.hex()
            },
            {
                //ON SECONDARY
                x: 270, y: 190, 
                sizeX: 20, sizeZ: 20, sizeY: 20, 
                color: theme.color.onSecondary.hex()
            },
            {
                //HARDEST
                x: 200, y: 80,
                sizeX: 20, sizeZ: 20,
                sizeY: 80, 
                color: theme.color.hardest.hex()
            },
            {
                //HARD
                x: 175, y: 115,
                sizeX: 20, sizeZ: 20,
                sizeY: 60, 
                color: theme.color.hard.hex()
            },
            {
                //LIGHT
                x: 150, y: 150,
                sizeX: 20, sizeZ: 20,
                sizeY: 40, 
                color: theme.color.light.hex()
            },
            {
                //LIGHTEST
                x: 125, y: 185,
                sizeX: 20, sizeZ: 20,
                sizeY: 20, 
                color: theme.color.lightest.hex()
            },
            {
                //INFO
                x: 125, y: 225, 
                sizeX: 10, sizeZ: 10, sizeY: 10, 
                color: theme.color.info.hex(),
            },
            {
                //ERROR
                x: 150, y: 200, 
                sizeX: 10, sizeZ: 10, sizeY: 20, 
                color: theme.color.error.hex(),
            },
            {
                //SUCCESS
                x: 180, y: 175, 
                sizeX: 10, sizeZ: 10, sizeY: 30, 
                color: theme.color.success.hex()
            },
            {
                //WARNING
                x: 210, y: 150, 
                sizeX: 10, sizeZ: 10, sizeY: 40, 
                color: theme.color.warning.hex()
            },
        ]

        function appleShader(color: string, percent: number) {
            color = color.substr(1)
            const num = parseInt(color, 16),
                amt = Math.round(2.55 * percent),
                R = (num >> 16) + amt,
                G = (num >> 8 & 0x00FF) + amt,
                B = (num & 0x0000FF) + amt
            return '#'
                + (0x1000000
                    + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000
                    + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100
                    + (B < 255 ? B < 1 ? 0 : B : 255)
                ).toString(16).slice(1)
        }

        function createCube(x: number, y: number, wx: number, wy: number, h: number, color: string) {
			//Left
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x - wx, y - wx * 0.5)
            ctx.lineTo(x - wx, y - h - wx * 0.5)
            ctx.lineTo(x, y - h * 1)
            ctx.closePath()
            ctx.fillStyle = appleShader(color, -10)
            ctx.strokeStyle = color
            ctx.stroke()
            ctx.fill()

			//Right
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + wy, y - wy * 0.5)
            ctx.lineTo(x + wy, y - h - wy * 0.5)
            ctx.lineTo(x, y - h * 1)
            ctx.closePath()
            ctx.fillStyle = appleShader(color, 10)
            ctx.strokeStyle = appleShader(color, 50)
            ctx.stroke()
            ctx.fill()
			
			//Top
            ctx.beginPath()
            ctx.moveTo(x, y - h)
            ctx.lineTo(x - wx, y - h - wx * 0.5)
            ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5))
            ctx.lineTo(x + wy, y - h - wy * 0.5)
			ctx.closePath()
            ctx.fillStyle = appleShader(color, 0)
            ctx.strokeStyle = appleShader(color, 20)
            ctx.stroke()
			ctx.fill()
		}
		
		(function main() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            //Sine wave
            const yOffset = Math.sin(Date.now() / 500) * canvas.height / 50
            cubes.map(cube => {
                createCube(
                    cube.x,
                    cube.y + cube.sizeY + yOffset,
                    Number(cube.sizeX),
                    Number(cube.sizeZ),
                    Number(cube.sizeY),
                    cube.color,
                )
            })
            requestAnimationFrame(main)
		})()
	})
	
	return (
        <Flexbox justifyContent="center">
            <canvas id="canvas" />
        </Flexbox>
	)
}

export default PreviewCube