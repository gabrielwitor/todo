import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route path="/components" element={<PageComponents />}></Route>
					<Route index element={<PageHome />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
