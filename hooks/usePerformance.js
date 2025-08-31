import { useEffect, useRef } from 'react';

export const usePerformance = (componentName) => {
	const renderCount = useRef(0);
	const startTime = useRef(performance.now());

	useEffect(() => {
		renderCount.current += 1;
		const endTime = performance.now();
		const renderTime = endTime - startTime.current;

		if (process.env.NODE_ENV === 'development') {
			console.log(`${componentName} render #${renderCount.current}: ${renderTime.toFixed(2)}ms`);
		}

		// Log slow renders
		if (renderTime > 16) { // 60fps threshold
			console.warn(`${componentName} slow render: ${renderTime.toFixed(2)}ms`);
		}

		startTime.current = performance.now();
	});
};

export const useRenderCount = (componentName) => {
	const renderCount = useRef(0);

	useEffect(() => {
		renderCount.current += 1;
		if (process.env.NODE_ENV === 'development') {
			console.log(`${componentName} rendered ${renderCount.current} times`);
		}
	});
}; 