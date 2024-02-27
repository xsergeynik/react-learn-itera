import { FC } from "react";

type H1Props = { userName: string };

const AppH1: FC<H1Props> = (props) => (
	<h1>Hello {props.userName}</h1>
)


const AppH1Title = () => {
	return <AppH1 userName="Serhii" />;
} 

export default AppH1Title