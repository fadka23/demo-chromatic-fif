import "./PrimaryButton.css";

export const PrimaryButton = ({ text, disabled = false }) => {
	return (
		<button className="primary-button" disabled={disabled}>
			{text}
		</button>
	);
};
