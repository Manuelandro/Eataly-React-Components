import { StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
    basic: {
        color: '#fff',
        fontSize: '50px',
        '@media (max-width: 414px)': {
            fontSize: '40px'
        }
    }
})


export default styles