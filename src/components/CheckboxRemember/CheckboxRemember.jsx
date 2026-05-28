import "./CheckboxRemember.css";

export const CheckboxRemember = ({ label }) => {
	return (
		<label className="checkbox-remember">
			<input type="checkbox" />
			<span>title {label}</span>
		</label>
	);
};
