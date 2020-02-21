import css from '@emotion/css'

const styles = {
    container: css({
        justifyContent: 'space-around',
        margin: '2rem',
        '@media(max-width:980px)': {
            flexDirection:'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    })
}

export default styles