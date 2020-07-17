import React, { useEffect, useState, useRef } from "react";

import { callApi } from "@packages/api";
import styles from "~/sass/App.module.scss";
import style2 from "~/sass/nested/div.module.scss";
import sum from "~/utils/sum";
import { Provider } from "react-redux";
import { store } from "./store";

function AppContent() {
	console.log(styles, style2);

	const [data, setdata] = useState({ name: null, country: null, ip: null });
	const loading = useRef(true);

	useEffect(() => {
		callApi().then((response: any) => {
			loading.current = false;
			setdata(response);
		});
	}, []);

	let content;

	if (loading.current) {
		content = <div>Loading ...</div>;
	} else if (data) {
		content = (
			<div>
				<div className={style2.Name}>You are from {data.name}</div>
				<div>Country code {data.country}</div>
				<div>ip {data.ip}</div>
				<div>
					{" "}
					1 + 2 ={">"} {sum(1, 2)}
				</div>
			</div>
		);
	} else {
		content = <div>Something went wrong</div>;
	}
	return content;
}

export function App(): JSX.Element {
	return (
		<div className={styles.AppBody}>
			<Provider store={store}>
				<AppContent />
			</Provider>
		</div>
	);
}
