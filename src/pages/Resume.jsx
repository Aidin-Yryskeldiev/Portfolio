import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Resume = ({ language, translations }) => {
	return (
		<StyledContainer>
			<StyledBox>
				<StyledAboutMe>{translations[language].myResume}</StyledAboutMe>
				<StyledLine />
			</StyledBox>
			<StyledScrollContainer>
				<StyledParagraph>{translations[language].aboutResume}</StyledParagraph>
				<StyledSection>
					<StyledHeading>
						{translations[language].ProgrammingLanguages}
					</StyledHeading>
					<StyledList>
						<StyledListItem>JavaScript</StyledListItem>
						<StyledListItem>TypeScript</StyledListItem>
					</StyledList>
				</StyledSection>
				<StyledSection>
					<StyledHeading>
						{translations[language].FrameworksLibraries}
					</StyledHeading>
					<StyledList>
						<StyledListItem>React</StyledListItem>
						<StyledListItem>Redux</StyledListItem>
						<StyledListItem>React Router</StyledListItem>
						<StyledListItem>Material-UI</StyledListItem>
						<StyledListItem>Styled-Components</StyledListItem>
						<StyledListItem>Vite</StyledListItem>
					</StyledList>
				</StyledSection>
			</StyledScrollContainer>
		</StyledContainer>
	);
};

export default Resume;

const StyledContainer = styled(Box)(() => ({
	maxHeight: "400px",
	padding: "10px",
	border: "1px solid #ddd",
	borderRadius: "8px",
}));

const StyledBox = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "30px",
}));

const StyledAboutMe = styled(Typography)(() => ({
	fontSize: "40px",
	fontFamily: "sans-serif",
	marginLeft: "20px",
}));

const StyledLine = styled(Box)(() => ({
	width: "252px",
	border: "1px solid red",
	marginTop: "5px",
}));

const StyledScrollContainer = styled(Box)(() => ({
	maxHeight: "300px",
	overflowY: "auto",
	"&::-webkit-scrollbar": {
		width: "8px",
	},
	"&::-webkit-scrollbar-track": {
		background: "#f1f1f1",
		borderRadius: "8px",
	},
	"&::-webkit-scrollbar-thumb": {
		background: "#888",
		borderRadius: "8px",
	},
	"&::-webkit-scrollbar-thumb:hover": {
		background: "#555",
	},
}));

const StyledSection = styled(Box)(() => ({
	margin: "10px 0",
}));

const StyledParagraph = styled(Typography)(() => ({
	fontSize: "18px",
	lineHeight: "1.5",
	color: "#333",
	margin: "10px 20px",
}));

const StyledHeading = styled(Typography)(() => ({
	fontSize: "24px",
	fontWeight: "bold",
	color: "#1976d2",
	margin: "10px 20px",
}));

const StyledList = styled(Box)(() => ({
	margin: "10px 30px",
}));

const StyledListItem = styled(Typography)(() => ({
	fontSize: "18px",
	color: "#555",
	margin: "5px 0",
}));
