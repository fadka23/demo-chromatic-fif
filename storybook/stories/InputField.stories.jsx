import { InputField } from "../../src/components/InputField/InputField";

const meta = {
	title: "Form/InputField",
	component: InputField,
	tags: ["autodocs"],
	args: {
		placeholder: "Masukkan Email",
		type: "text",
	},
};

export default meta;

export const Default = {};

export const Password = {
	args: {
		type: "password",
		placeholder: "Masukkan Password",
	},
};
