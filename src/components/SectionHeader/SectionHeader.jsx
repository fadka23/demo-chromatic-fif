import "./SectionHeader.css";

export const SectionHeader = ({ title, subtitle }) => {
	return (
		<div className="section-header">
			<h2>{title}</h2>
			<p>{subtitle}</p>
		</div>
	);
};
