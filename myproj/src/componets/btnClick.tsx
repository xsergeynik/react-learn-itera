import { FC } from "react";

type BtnProps = {
	onClick: (val: string) => void;
};

const Btn: FC<BtnProps> = (props) => (
	<button onClick={() => props.onClick("hello!")}/>
);

export default () =>  <Btn onClick = {(v) => alert(v)} />