import { useCallback, useEffect } from "react";
import initWasm,{ add } from "../../../rust2wasm-rust/web/rust_demo";

export default function Demo2() {
	const init = useCallback(async () => {
		await initWasm('http://192.168.120.102:8000/rust_demo_bg.wasm');
		console.log(add(1, 2));
	}, []);

	useEffect(() => {
		init();
	}, []);

	return <div>demo2</div>;
}
