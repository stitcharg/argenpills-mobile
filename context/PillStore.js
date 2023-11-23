import { create } from "zustand";

const pillStore = create(
	(set, get) => (
		{
			pillsPerPage: 9,
			activePage: 1,
			totalPages: 1,
			lastEvaluatedKey: '',
			lastUpdate: '',
			filter: '',
			setActivePage: (n) => (
				set(
					() => ({ activePage: n })
				)
			),
			setTotalPages: (n) => (
				set(
					() => ({ totalPages: n })
				)
			),
			setLastEvaluatedKey: (n) => (
				set(
					() => ({ lastEvaluatedKey: n })
				)
			),
			setLastUpdate: (d) => (
				set(
					() => ({ lastUpdate: d })
				)
			),
			setFilter: (s) => (
				set(
					() => ({ filter: s })
				)
			)
		}
	)
);

export default pillStore;