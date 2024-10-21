import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const AboutMe = ({ language, translations }) => {
	return (
		<>
			<StyledContainer>
				<StyledBox>
					<StyledAboutMe>{translations[language].aboutMe}</StyledAboutMe>
					<StyledLine></StyledLine>
				</StyledBox>
				<Typography sx={{ width: "60%" }} variant="body1" paragraph>
					{translations[language].me}
				</Typography>

				<Typography variant="h5" component="h2" gutterBottom>
					{translations[language].whatido}
				</Typography>

				<Grid container spacing={4}>
					{/* Web Development Card */}
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<StyledCard backgroundColor="#FFF4E5">
							<CardContent>
								<StyledTitleText>
									{translations[language].webDevelopment}
								</StyledTitleText>
								<CardContentText variant="body2" paragraph>
									{translations[language].first}
								</CardContentText>
							</CardContent>
						</StyledCard>
					</Grid>

					{/* Integration Card */}
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<StyledCard backgroundColor="#FFF0F5">
							<CardContent>
								<StyledTitleText>
									{translations[language].integration}
								</StyledTitleText>
								<CardContentText variant="body2" paragraph>
									{translations[language].second}
								</CardContentText>
							</CardContent>
						</StyledCard>
					</Grid>

					{/* Adaptive Card */}
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<StyledCard backgroundColor="#E3F2FD">
							<CardContent>
								<StyledTitleText>
									{translations[language].adaptive}
								</StyledTitleText>
								<CardContentText variant="body2" paragraph>
									{translations[language].third}
								</CardContentText>
							</CardContent>
						</StyledCard>
					</Grid>

					{/* Interface Card */}
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<StyledCard backgroundColor="#E8F5E9">
							<CardContent>
								<StyledTitleText>
									{translations[language].interface}
								</StyledTitleText>
								<CardContentText variant="body2" paragraph>
									{translations[language].fourth}
								</CardContentText>
							</CardContent>
						</StyledCard>
					</Grid>
				</Grid>
			</StyledContainer>
		</>
	);
};

export default AboutMe;

const StyledBox = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "30px",
}));

const StyledTitleText = styled(Typography)(() => ({
	textAlign: "center",
	fontSize: "25px",
}));

const StyledAboutMe = styled(Typography)(() => ({
	fontSize: "40px",
	fontFamily: "sans-serif",
	marginTop: "10px",
}));

const StyledLine = styled(Box)(() => ({
	width: "252px",
	border: "1px solid red",
	marginTop: "10px",
}));

const StyledContainer = styled(Container)({
	maxWidth: "lg",
});

const StyledCard = styled(Card)(({ backgroundColor }) => ({
	height: "90%",
	backgroundColor: backgroundColor || "#fff",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
	},
}));

const CardContentText = styled(Typography)({
	color: "#757575",
});
