import React, { Component } from 'react';

export default class CTr extends Component {
	render() {
		const { href, txt } = this.props;
		return (
			<li>
				<a href={href}>{txt}</a>
			</li>
		);
	}
}
