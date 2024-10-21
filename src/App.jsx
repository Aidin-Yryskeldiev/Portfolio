import { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const WrapperPages = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import("./pages/WrapperPages")), 1000); // Задержка в 3 секунды
		})
);

const App = () => {
	return (
		<Suspense
			fallback={
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100vh",
					}}>
					<CircularProgress
						sx={{
							color: "#1976d2",
							size: "80px",
						}}
						thickness={4}
					/>
				</Box>
			}>
			<WrapperPages />
		</Suspense>
	);
};

export default App;
