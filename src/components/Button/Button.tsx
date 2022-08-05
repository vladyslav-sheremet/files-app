import './Button.css'

interface ButtonProps {
    text: string
    filteredDataHandler: () => void
    active: boolean
}

export const Button = ({ text, filteredDataHandler, active }: ButtonProps) => (
    <button className={`button ${active ? 'active' : ''}`} onClick={filteredDataHandler}>{text}</button>
)