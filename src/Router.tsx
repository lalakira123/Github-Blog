import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { Issue } from "./pages/Issue";
import { Posts } from "./pages/Posts";

export function Router() {
	return(
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Posts />}/>
				<Route path="/issue/:id" element={<Issue />}/>
			</Route>
		</Routes>
	)
}