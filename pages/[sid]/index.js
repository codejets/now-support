import React from "react";
import Head from "next/head";

export async function getServerSideProps({ query }) {
	return {
		props: {
			...query,
		},
	};
}

export default (props) => {
	const { sid } = props;

	return (
		<div className="sid-page">
			<h1>{sid}</h1>
		</div>
	);
};
