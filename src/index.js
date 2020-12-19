import DesignSystem from './components/DesignSystem/DesignSystem';

export default (config) => {
	config.addonRoutes.push({
		path: '/designsystem',
		component: DesignSystem,
		exact: true,
	});

	return {
		...config,
	};
};
