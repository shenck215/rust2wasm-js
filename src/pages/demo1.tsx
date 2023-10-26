import { useCallback, useEffect } from "react";

export default function Demo1() {
	const init = useCallback(async () => {
		// 当你已经有了 WebAssembly 模块的二进制代码（例如从其他来源获取或以非流的方式加载）时，可以使用此方法
		fetch("rust_demo_bg.wasm")
			.then((response) => response.arrayBuffer())
			.then((bytes) => WebAssembly.instantiate(bytes))
			.then((obj) => {
				console.log((obj.instance.exports.add as CallableFunction)(1, 2));
			});

		// 当你想从网络加载并直接实例化 WebAssembly 模块时，可以使用此方法。这通常可以提供更快的启动时间，因为它允许浏览器在下载的同时开始编译和实例化过程
		fetch("rust_demo_bg.wasm")
			.then((response) => WebAssembly.instantiateStreaming(response))
			.then((obj) => {
				console.log((obj.instance.exports.add as CallableFunction)(1, 2));
			});
	}, []);

	useEffect(() => {
		init();
	}, []);

	return <div>demo1</div>;
}
