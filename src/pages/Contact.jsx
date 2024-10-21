import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import ContactImg from "../assets/ContactImg.png";

const Contact = ({ language, translations }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [open, setOpen] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setError(null);
		setSuccess(null);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					access_key: "a3a80027-282e-487d-9072-0d00a22180bc",
					...data,
				}),
			});

			if (!response.ok) {
				throw new Error("Ошибка при отправке сообщения");
			}

			setSuccess("Сообщение отправлено успешно!");
			setOpen(true);
			reset();
		} catch (error) {
			setError(error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<StyledFlexBoxFormImg>
					<StyledFlexBoxForm>
						<StyledBox>
							<StyledContact>{translations[language].contactMe}</StyledContact>
							<StyledLine></StyledLine>
						</StyledBox>
						<br />
						<StyledInput
							{...register("name", { required: "Введите ваше имя" })}
							label={translations[language].inputLabelName}
							error={!!errors.name}
							helperText={errors.name ? translations[language].yourName : ""}
						/>
						<StyledInput
							{...register("email", {
								required: "Введите ваш Email",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: "Введите корректный Email",
								},
							})}
							label={translations[language].inputLabelEmail}
							type="email"
							error={!!errors.email}
							helperText={errors.email ? translations[language].yourEmail : ""}
						/>
						<StyledInputMessage
							{...register("message", { required: "Напишите сообщения" })}
							label={translations[language].inputLabelMessage}
							multiline
							rows={4}
							error={!!errors.message}
							helperText={
								errors.message ? translations[language].yourMessage : ""
							}
						/>
						<StyledButtonSubmit
							type="submit"
							disabled={isSubmitting}
							variant="contained"
							endIcon={
								isSubmitting ? (
									<CircularProgress size={20} color="inherit" />
								) : null
							}>
							{isSubmitting
								? translations[language].buttonLoading
								: translations[language].buttonSubmit}
						</StyledButtonSubmit>
					</StyledFlexBoxForm>
					<img style={{ height: "470px" }} src={ContactImg} alt="Contact" />
				</StyledFlexBoxFormImg>
				{error && <p className="error-message">{error}</p>}
			</form>

			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						borderRadius: "15px",
						padding: "20px",
						backgroundColor: "#f9f9f9",
					},
				}}>
				<DialogTitle
					sx={{
						fontSize: "24px",
						fontWeight: "bold",
						color: "#333",
						textAlign: "center",
					}}>
					{translations[language].success}
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						sx={{
							fontSize: "18px",
							color: "#666",
							textAlign: "center",
							padding: "10px 0",
						}}>
						{translations[language].messageSent}
					</DialogContentText>
				</DialogContent>
				<DialogActions sx={{ justifyContent: "center" }}>
					<Button
						variant="contained"
						onClick={handleClose}
						sx={{
							backgroundColor: "#1976d2",
							color: "#fff",
							borderRadius: "10px",
							width: "150px",
							height: "40px",
							"&:hover": {
								backgroundColor: "#1565c0",
							},
						}}>
						{translations[language].okButton}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Contact;

const StyledFlexBoxFormImg = styled(Box)(() => ({
	display: "flex",
	gap: "40px",
}));

const StyledFlexBoxForm = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "10px",
	marginLeft: "20px",
}));

const StyledBox = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "30px",
}));

const StyledContact = styled(Typography)(() => ({
	fontSize: "40px",
	fontFamily: "sans-serif",
}));

const StyledLine = styled(Box)(() => ({
	width: "252px",
	border: "1px solid red",
}));

const StyledInput = styled(TextField)(() => ({
	width: "422px",
	height: "85px",
	borderRadius: "10px",
	"& .MuiOutlinedInput-root": {
		borderRadius: "10px",
	},
}));

const StyledInputMessage = styled(TextField)(() => ({
	width: "422px",
	height: "85px",
	borderRadius: "10px",
	"& .MuiOutlinedInput-root": {
		borderRadius: "10px",
	},
	"& .MuiInputBase-input": {
		maxHeight: "150px",
		overflowY: "auto",
		"&::-webkit-scrollbar": {
			width: "8px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "#888",
			borderRadius: "10px",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			backgroundColor: "#555",
		},
	},
}));

const StyledButtonSubmit = styled(Button)(() => ({
	marginTop: "70px",
	width: "422px",
	borderRadius: "10px",
	"& .MuiOutlinedInput-root": {
		borderRadius: "10px",
	},
}));
