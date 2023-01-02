import create from "zustand";

const pillStore = create(
	(set, get) => (
		{
			pillsPerPage: 21,
			activePage: 1,
			totalPages: 1,
			setActivePage: (n) => (
				set(
					state => ({ activePage: n })
				)
			),
			setTotalPages: (n) => (
				set(
					state => ({ totalPages: n })
				)
			)

		}
	)
);

export default pillStore;