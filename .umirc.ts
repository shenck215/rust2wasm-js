import { defineConfig } from "umi";

export default defineConfig({
	routes: [
		{ path: "/", component: "demo1" },
		{ path: "/demo1", component: "demo1" },
		{ path: "/demo2", component: "demo2" },
		{ path: "/demo3", component: "demo3" },
	],
	npmClient: "pnpm",
	copy: ["public"],
	chainWebpack(config) {
		// 这段代码首先获取当前的 experiments 配置，然后将其与一个新的对象合并，
		// 该对象设置了 asyncWebAssembly 为 true。这意味着启用了 Webpack 的异步 WebAssembly 实验性功能。
		config.set("experiments", {
			...config.get("experiments"),
			asyncWebAssembly: true,
		});

		// 这里定义了一个正则表达式 REG，用于匹配 .wasm 文件。然后，它将 .wasm 文件从 asset 规则中排除。
		// 这意味着 Webpack 不会将 .wasm 文件视为常规的资产(asset)。
		const REG = /\.wasm$/;

		config.module.rule("asset").exclude.add(REG).end();

		config.module
			.rule("wasm")
			.test(REG) // 只适用于 .wasm 文件
			.exclude.add(/node_modules/) // 该规则不适用于 node_modules 目录下的 .wasm 文件
			.end()
			.type("webassembly/async") // .wasm 文件应该被视为异步的 WebAssembly 模块。
			.end();
	},
});
