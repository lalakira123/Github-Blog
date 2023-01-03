import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./styles";

export default function DefaultLayout() {
	return (
		<DefaultLayoutContainer>
			<Header />
			<Outlet />
		</DefaultLayoutContainer>
	)
}