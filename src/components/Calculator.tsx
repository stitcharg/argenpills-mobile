import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import CalcularResultado from "./results/resultados";

export const CalculatorComponent = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [numberOfDays, setNumberOfDays] = useState(0);
	const [toleranciaBaja, setToleranciaBaja] = useState(false);
	const [toleranciaMedia, setToleranciaMedia] = useState(false);
	const [toleranciaAlta, setToleranciaAlta] = useState(false);

	const calculateTolerance = (date: Date) => {
		setStartDate(date)
		const now = new Date();

		const difference = now.getTime() - date.getTime();
		const TOLERANCIA_ALTA = 30;
		//const TOLERANCIA_MEDIA = 60;
		const TOLERANCIA_BAJA = 120

		const days = Math.ceil(difference / (1000 * 3600 * 24));
		setNumberOfDays(days);

		//reset
		setToleranciaMedia(false); setToleranciaBaja(false); setToleranciaAlta(false);

		if (days <= TOLERANCIA_ALTA)
			setToleranciaAlta(true);
		else if (days <= TOLERANCIA_BAJA)
			setToleranciaMedia(true);
		else
			setToleranciaBaja(true);
	}

	return (
		<Box bgColor="#0077cc" w="100%" textColor="white">
			<VStack>
				<Box p={30}>
					<Text>Por favor, ingres&aacute; la fecha de la ultima toma:</Text>
					<Box justifyContent="center" textColor="black">
						<DatePicker
							className="datePicker"
							selected={startDate}
							onChange={(date: any) => calculateTolerance(date)}
							popperPlacement="bottom"
							todayButton="hoy"
							maxDate={new Date()}
						/></Box>
				</Box>
				{toleranciaBaja &&
					<CalcularResultado days={numberOfDays} tolerancia="BAJA" ></CalcularResultado>
				}

				{toleranciaMedia &&
					<CalcularResultado days={numberOfDays} tolerancia="MEDIA" ></CalcularResultado>
				}

				{toleranciaAlta &&
					<CalcularResultado days={numberOfDays} tolerancia="ALTA" ></CalcularResultado>
				}
			</VStack>
		</Box>
	)

}

