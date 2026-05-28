import "./InputField.css";

export const InputField = ({ type = "text", placeholder }) => {
	return (
		<input className="input-field" type={type} placeholder={placeholder} />
	);
};
