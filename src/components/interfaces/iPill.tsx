export interface iPill {
	id: string,
	name: string,
	color: string,
	multiple_batchs?: boolean,
	posted_date: string,
	substance?: PIllSubstanceEnum,
	load?: PIllLoadEnum,
	warning?: PillWarningEnum,
	image: string,
	lab_image?: string,
	lab_url?: string,
	notes?: string,
	ap_url: string
	published: string
}


export enum PIllSubstanceEnum {
	MDMA = 1,
	CATINONA = 2
}

export enum PIllLoadEnum {
	null = 0,
	BAJA = 1,
	MEDIA = 2,
	ALTA = 3
}

export enum PillWarningEnum {
	WARNING = 1,
	DANGEROUS = 2
}

