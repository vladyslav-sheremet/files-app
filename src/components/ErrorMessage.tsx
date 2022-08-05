interface ErrorMessageProps {
    error: string
}

export const ErrorMessage = ({error}: ErrorMessageProps) => (
    <p>{error}</p>
)