export interface ButtonProps {
    o?: {
        onClick: Function,
        text: String,
        type?: String,
        variant?: 'text' | 'outlined' | 'contained',
        color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    }
}
