import { PrimaryButton } from "../../src/components/PrimaryButton/PrimaryButton";

const meta = {
	title: "Buttons/PrimaryButton",
	component: PrimaryButton,
	tags: ["autodocs"],
	args: {
		text: "LOGIN",
	},
};

export default meta;

export const Default = {};

export const Disabled = {
	args: {
		disabled: true,
	},
};
