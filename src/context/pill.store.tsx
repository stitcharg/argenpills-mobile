import {create} from "zustand";


interface PillState {
	pillsPerPage: number,
	activePage: number,
	totalPages: number,
	setActivePage: Function,
	setTotalPages: Function
}

const pillStore = create<PillState>(
	(set, get) => (
		{
			pillsPerPage: 10,
			activePage: 1,
			totalPages: 1,
			setActivePage: (n:number) => (
				set(
					() => ({ activePage: n })
				)
			),
			setTotalPages: (n:number) => (
				set(
					() => ({ totalPages: n })
				)
			)

		}
	)
);

export default pillStore;