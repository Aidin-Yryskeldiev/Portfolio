import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Project = ({ language, translations }) => {
	return (
		<>
			<StyledBox>
				<StyledAboutMe>{translations[language].myProject}</StyledAboutMe>
				<StyledLine></StyledLine>
			</StyledBox>
			<StyledTextNoProject>
				{translations[language].noProject}
			</StyledTextNoProject>
		</>
	);
};

export default Project;

const StyledBox = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "30px",
}));

const StyledAboutMe = styled(Typography)(() => ({
	fontSize: "40px",
	fontFamily: "sans-serif",
	marginTop: "10px",
	marginLeft: "20px",
}));

const StyledLine = styled(Box)(() => ({
	width: "252px",
	border: "1px solid red",
	marginTop: "10px",
}));

const StyledTextNoProject = styled(Typography)(() => ({
	textAlign: "center",
	fontSize: "30px",
}));
