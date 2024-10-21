import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Box, Button, Typography, Select, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import Aidin from "../assets/Aidin.jpg";
import Telegram from "../assets/Telegram.svg";
import WhatsApp from "../assets/WhatsApp.svg";
import GitHub from "../assets/GitHub.svg";
import Linkedin from "../assets/Linkedin.svg";
import Phone from "../assets/Phone.svg";
import Email from "../assets/Email.svg";
import Location from "../assets/Location.svg";
import Download from "../assets/Download.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import ResumeIcon from "../assets/ResumeIcon.svg";
import ProjectIcon from "../assets/ProjectIcon.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import AidinResume from "../assets/AidinResume.pdf";

import Home from "./Home";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import NotFound from "./NotFound";

const WrapperPages = () => {
	const translations = {
		russian: {
			name: "Айдин Ырыскелдиев",
			developer: "Фронтенд Разработчик",
			download: "Скачать Резюме",
			phone: "Телефон",
			email: "Электронная почта",
			location: "Локация",
			bishkek: "Бишкек",
			home: "Дом",
			resume: "Резюме",
			project: "Проекты",
			contact: "Контакты",
			aboutMe: "Обо мне",
			myResume: "Резюме",
			myProject: "Проекты",
			contactMe: "Контакты",
			me: "Привет! Я Айдин, Frontend разработчик из Кыргызстана, создающий эффективные и красивые веб-приложения с использованием React.",
			whatido: "Что я делаю!",
			first:
				"Я занимаюсь разработкой интерфейсов, создавая удобные веб-приложения. В своей работе использую современные библиотеки, такие как React и Redux, для эффективного управления состоянием и создания отзывчивых интерфейсов.",
			second:
				"Я интегрирую API с помощью Axios для передачи данных между клиентской и серверной частями. Часто использую Redux Toolkit для управления состоянием в крупных проектах, что делает код более структурированным и удобным для поддержки.",
			third:
				"Я разрабатываю адаптивные компоненты, которые корректно отображаются на мобильных устройствах, применяя медиазапросы, гибкие сетки и оптимизируя производительность для улучшения пользовательского опыта.",
			fourth:
				"Я реализую сложные пользовательские сценарии, такие как модальные окна и формы с валидацией. Также работаю над улучшением интерфейсов, добавляя анимации и переходы, чтобы повысить их интерактивность и визуальную привлекательность для пользователей.",
			webDevelopment: "Веб разработка",
			integration: "Интеграция",
			adaptive: "Адаптивка",
			interface: "Интерфейс",
			inputLabelName: "Имя",
			inputLabelEmail: "Электронная почта",
			inputLabelMessage: "Ваше сообщение",
			buttonSubmit: "Отправить",
			buttonLoading: "Загрузка...",
			success: "Успех!",
			messageSent: "Сообщение успешно отправлено!",
			okButton: "Ок",
			yourName: "Введите ваше имя",
			yourEmail: "Введите вашу электронную почту",
			yourMessage: "Напишите сообщения",
			noProject: "На данный момент нету проектов",
			aboutResume:
				"Фронтенд-разработчик с опытом работы с React и TypeScript. Владею MUI и Redux Toolkit, участвовал в разработке коммерческих проектов в команде. Несмотря на скромность, я энергичен и увлечен своей работой, всегда стремлюсь сделать ее качественно и в срок. Активно использую Git, VS Code, React Router и Styled-Components для создания отзывчивых интерфейсов. Постоянно развиваюсь, изучая и внедряя новые технологии.",
			ProgrammingLanguages: "Языки программирование",
			FrameworksLibraries: "Фреймоврки и библиотеки",
		},
		english: {
			name: "Aidin Yryskeldiev",
			developer: "Frontend Developer",
			download: "Download Resume",
			phone: "Phone",
			email: "Gmail",
			location: "Location",
			bishkek: "Bishkek",
			home: "Home",
			resume: "Resume",
			project: "Project",
			contact: "Contact",
			aboutMe: "About me",
			myResume: "Resume",
			myProject: "Project",
			contactMe: "Contact",
			me: "Hello! I'm Aidin, a Frontend developer from Kyrgyzstan, creator of efficient and beautiful web applications using React.",
			whatido: "What I do!",
			first:
				"I deal with interfaces and creating user-friendly web applications. In your work, use modern libraries such as React and Redux to effectively manage state and create responsive interfaces.",
			second:
				"I'm integrating an API using Axios to transfer data between the client and backend. Redux Toolkit is often used to manage state in large projects, making the code more structured and maintainable.",
			third:
				"I develop responsive components that display correctly on mobile devices, using media queries, responsive grids, and performance optimizations to improve the user experience.",
			fourth:
				"I implement complex user scenarios such as modals and forms with validation. I'm also working on improving the interfaces by adding animations and transitions to make them more interactive and visually appealing to users.",
			webDevelopment: "Web Development",
			integration: "Integration",
			adaptive: "Adaptive",
			interface: "Interface",
			inputLabelName: "Name",
			inputLabelEmail: "Email",
			inputLabelMessage: "Your message",
			buttonSubmit: "Submit",
			buttonLoading: "Loading...",
			success: "Success",
			messageSent: "Message sent successfully!",
			okButton: "Okey",
			yourName: "Enter your name",
			yourEmail: "Enter your Email",
			yourMessage: "Write messages",
			noProject: "There are no projects at the moment",
			aboutResume:
				"Front-end developer with experience in React and TypeScript. I am proficient in MUI and Redux Toolkit, and participated in the development of commercial projects in a team. Despite my modesty, I am energetic and passionate about my work, I always strive to do it efficiently and on time. I actively use Git, VS Code, React Router and Styled-Components to create responsive interfaces. I am constantly developing, studying and implementing new technologies.",
			ProgrammingLanguages: "Programming languages",
			FrameworksLibraries: "Frameworks and libraries",
		},
	};

	const [language, setLanguage] = useState("russian");

	const handleChange = (e) => {
		setLanguage(e.target.value);
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = AidinResume;
		link.download = "AidinResume.pdf";
		link.click();
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
				}}>
				<StyledBox>
					<StyledImg>
						<img
							style={{
								width: "180px",
								height: "180px",
								borderRadius: "20px",
							}}
							src={Aidin}
							alt="Aidin"
						/>
					</StyledImg>
					<StyledName>{translations[language].name}</StyledName>
					<StyledDeveloper>{translations[language].developer}</StyledDeveloper>
					<StyledFlexContact>
						<a href="https://t.me/aidin_yryskeldiev">
							<StyledBoxContactColor>
								<img style={{ width: "35px" }} src={Telegram} alt="Telegram" />
							</StyledBoxContactColor>
						</a>
						<a href="http://wa.me/+996709987557">
							<StyledBoxContactColor>
								<img style={{ width: "35px" }} src={WhatsApp} alt="WhatsApp" />
							</StyledBoxContactColor>
						</a>
						<a href="https://github.com/Aidin-Yryskeldiev">
							<StyledBoxContactColor>
								<img style={{ width: "35px" }} src={GitHub} alt="GitHub" />
							</StyledBoxContactColor>
						</a>
						<a href="https://www.linkedin.com/in/aidinyryskeldiev/">
							<StyledBoxContactColor>
								<img style={{ width: "35px" }} src={Linkedin} alt="Linkedin" />
							</StyledBoxContactColor>
						</a>
					</StyledFlexContact>

					{/* Contact */}
					<StyledBoxContact>
						<StyledBoxContactFirst>
							<StyledBoxContactSecond>
								<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
									<Box sx={{ width: 24, height: 24 }}>
										<img
											src={Phone}
											alt="Phone"
											style={{ width: "100%", height: "100%" }}
										/>
									</Box>
									<Box>
										<Typography sx={{ color: "gray", fontSize: "16px" }}>
											{translations[language].phone}
										</Typography>
										<Typography sx={{ fontSize: "18px" }}>
											+996 709 98 75 57
										</Typography>
									</Box>
								</Box>
								<Box sx={{ width: "90%", border: "1px solid gray" }}></Box>

								<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
									<Box sx={{ width: 24, height: 24 }}>
										<img
											src={Email}
											alt="Email"
											style={{ width: "100%", height: "100%" }}
										/>
									</Box>
									<Box>
										<Typography sx={{ color: "gray", fontSize: "16px" }}>
											{translations[language].email}
										</Typography>
										<Typography sx={{ fontSize: "18px" }}>
											aidinjavascript@gmail.com
										</Typography>
									</Box>
								</Box>
								<Box sx={{ width: "90%", border: "1px solid gray" }}></Box>
								<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
									<Box sx={{ width: 24, height: 24 }}>
										<img
											src={Location}
											alt="Location"
											style={{ width: "100%", height: "100%" }}
										/>
									</Box>
									<Box>
										<Typography sx={{ color: "gray", fontSize: "16px" }}>
											{translations[language].location}
										</Typography>
										<Typography sx={{ fontSize: "18px" }}>
											{translations[language].bishkek}
										</Typography>
									</Box>
								</Box>
								<Box sx={{ width: "90%", border: "1px solid gray" }}></Box>
							</StyledBoxContactSecond>
						</StyledBoxContactFirst>
						<StyledFlexButton>
							<StyledButton onClick={handleDownload} variant="contained">
								<img src={Download} alt="Download" />
								{translations[language].download}
							</StyledButton>
						</StyledFlexButton>
					</StyledBoxContact>
					{/* Contact */}
				</StyledBox>
				<Box
					sx={{
						width: "100%",
						padding: "20px",
					}}>
					<Box sx={{ display: "flex", justifyContent: "end" }}>
						<StyledSelect
							value={language}
							onChange={handleChange}
							variant="outlined">
							<MenuItem value="english">English</MenuItem>
							<MenuItem value="russian">Русский</MenuItem>
						</StyledSelect>
					</Box>
					<StyledBoxedSecond>
						<StyledLink to="/" icon={HomeIcon}>
							<img src={HomeIcon} alt="Home" />
							{translations[language].home}
						</StyledLink>
						<StyledLink to="/resume" icon={ResumeIcon}>
							<img src={ResumeIcon} alt="Resume" />
							{translations[language].resume}
						</StyledLink>
						<StyledLink to="/project" icon={ProjectIcon}>
							<img src={ProjectIcon} alt="Project" />
							{translations[language].project}
						</StyledLink>
						<StyledLink to="/contact" icon={ContactIcon}>
							<img src={ContactIcon} alt="Contact" />
							{translations[language].contact}
						</StyledLink>
					</StyledBoxedSecond>

					<StyledBoxed>
						<Routes>
							<Route
								path="/"
								element={
									<Home language={language} translations={translations} />
								}
							/>
							<Route
								path="/resume"
								element={
									<Resume language={language} translations={translations} />
								}
							/>
							<Route
								path="/project"
								element={
									<Project language={language} translations={translations} />
								}
							/>
							<Route
								path="/contact"
								element={
									<Contact language={language} translations={translations} />
								}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</StyledBoxed>
				</Box>
			</Box>
		</>
	);
};

export default WrapperPages;

const StyledBox = styled(Box)(() => ({
	width: "550px",
	height: "100vh",
	backgroundColor: "white",
}));

const StyledImg = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	paddingTop: "10px",
}));

const StyledName = styled(Typography)(() => ({
	fontFamily: "sans-serif",
	fontWeight: "bold",
	fontSize: "27px",
	textAlign: "center",
}));

const StyledDeveloper = styled(Typography)(() => ({
	textAlign: "center",
	color: "gray",
	fontSize: "18px",
}));

const StyledFlexContact = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	gap: "20px",
	marginTop: "5px",
}));

const StyledBoxContactColor = styled(Box)(() => ({
	width: "75px",
	height: "75px",
	backgroundColor: "#f2f5f7",
	borderRadius: "12px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const StyledBoxContact = styled(Typography)(() => ({
	width: "370px",
	height: "340px",
	backgroundColor: "#f2f5f9",
	margin: "0 auto",
	borderRadius: "20px",
	paddingTop: "10px",
	marginTop: "10px",
}));

const StyledBoxContactFirst = styled(Typography)(() => ({
	marginLeft: "35px",
	paddingTop: "20px",
}));

const StyledBoxContactSecond = styled(Typography)(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "15px",
}));

const StyledFlexButton = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	marginTop: "20px",
}));

const StyledButton = styled(Button)(() => ({
	padding: "6px 20px",
	borderRadius: "20px",
	fontSize: "16px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "10px",
	backgroundColor: "#f45610",
}));

const StyledSelect = styled(Select)(() => ({
	minWidth: "150px",
	backgroundColor: "#f2f5f9",
	borderRadius: "8px",
	"& .MuiSelect-select": {
		padding: "8px 16px",
		fontSize: "16px",
		color: "#333",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderColor: "#ccc",
	},
	"&:hover .MuiOutlinedInput-notchedOutline": {
		borderColor: "#888",
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		borderColor: "#555",
	},
}));

const StyledBoxedSecond = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	gap: "30px",
}));

const StyledBoxed = styled(Box)(() => ({
	marginTop: "48px",
	backgroundColor: "white",
	borderRadius: "20px",
}));

const StyledLink = styled(Link)(({ icon }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	width: "80px",
	height: "80px",
	backgroundColor: "#f2f5f9",
	borderRadius: "20px",
	color: "#333",
	textDecoration: "none",
	fontSize: "16px",
	fontFamily: "sans-serif",
	transition: "transform 0.3s ease, background-color 0.3s ease",
	"&:hover": {
		backgroundColor: "#f45610",
		color: "#fff",
	},
	"& img": {
		width: "24px",
		height: "24px",
		marginBottom: "8px",
	},
}));
