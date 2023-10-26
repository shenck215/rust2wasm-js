import { useEffect } from "react";
import { add, fib } from "../../../rust2wasm-rust/bundler/rust_demo";

// 斐波那契数列

// 递归
function fibonacci(n: number): number {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

// // 循环
// function fibonacci(n: number) {
// 	let a = 0,
// 		b = 1,
// 		temp;
// 	for (let i = 0; i < n; i++) {
// 		temp = a;
// 		a = b;
// 		b = temp + b;
// 	}
// 	return a;
// }

// // 动态规划
// function fibonacci(n: number) {
// 	if (n <= 1) return n;
// 	let dp = new Array(n + 1).fill(0);
// 	dp[1] = 1;
// 	for (let i = 2; i <= n; i++) {
// 		dp[i] = dp[i - 1] + dp[i - 2];
// 	}
// 	return dp[n];
// }

export default function Demo3() {
	useEffect(() => {
		console.log(add(1, 2));
		console.time("wasm");
		console.log(fib(40));
		console.timeLog("wasm");
		console.time("js");
		console.log(fibonacci(40));
		console.timeLog("js");
	}, []);

	return <div>demo2</div>;
}
