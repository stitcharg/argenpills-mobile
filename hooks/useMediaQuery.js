import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		const updateMatch = (e) => {
			setMatches(e.matches);
		};

		// Set the initial value
		setMatches(media.matches);

		// Add the callback as a listener for changes to the media query
		media.addEventListener('change', updateMatch);

		// Remove the listener when the component is unmounted
		return () => {
			media.removeEventListener('change', updateMatch);
		};
	}, [query]);

	return matches;
}

export default useMediaQuery;