export default function PrimaryButton({ className, onClick, text, disabled }) {
    return (
        <button
            className={`rounded-full px-6 py-3 font-semibold text-sm mt-4 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}