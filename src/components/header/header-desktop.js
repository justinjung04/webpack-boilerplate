import './header-desktop.scss';

import React from 'react';
import Header from './header';
import signal from '../../signal/signal';

export default class HeaderDesktop extends Header {
	constructor() {
		super();
		this.setCount = (count) => this.setState({ count });
	}

	componentDidMount() {
		super.componentDidMount();
		signal.event.count.add(this.setCount);
	}

	componentWillUnmount() {
		super.componentWillUnmount();
		signal.event.count.remove(this.setCount);
	}

	onClick(url) {
		super.onClick(url);
	}

	render() {
		return (
			<div className='header desktop'>
				<div className='title'>
					desktop {this.state.count}
				</div>
				<div className='links'>
					<div className={'link' + (this.state.url == '/' ? ' active' : '')} onClick={this.onClick.bind(this, '/')}>
						home
					</div>
					<div className={'link' + (this.state.url == '/page1' ? ' active' : '')} onClick={this.onClick.bind(this, '/page1')}>
						page 1
					</div>
				</div>
			</div>
		);
	}
}