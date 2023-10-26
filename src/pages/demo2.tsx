import { useCallback, useEffect } from "react";
import initWasm,{ add } from "../../../rust-demo/web/rust_demo";

export default function Demo2() {
	const init = useCallback(async () => {
		await initWasm();
		console.log(add(1, 2));
	}, []);

	useEffect(() => {
		init();
	}, []);

	return <div>demo2</div>;
}
