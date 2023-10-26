import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
	return (
		<div className={styles.navs}>
			<ul>
				<li>
					<Link to="/demo1">demo1</Link>
				</li>
				<li>
					<Link to="/demo2">demo2</Link>
				</li>
				<li>
					<Link to="/demo3">demo3</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	);
}
