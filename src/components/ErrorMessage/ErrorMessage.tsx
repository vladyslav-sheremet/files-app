import './ErrorMessage.css'

interface ErrorMessageProps {
    error: string
}

export const ErrorMessage = ({error}: ErrorMessageProps) => (
    <p className="error">{error}</p>
)