import { Text, Box, VStack, Heading } from '@chakra-ui/react';
import { iResults, iToleranciaProps } from '../../interfaces/iDaysProps';

const ALTA_COLOR = "#de350b";
const MEDIA_COLOR = "#ff7c22";
const BAJA_COLOR = "#00875a";

const ALTA = "ALTA";
const MEDIA = "MEDIA";
const BAJA = "BAJA";

const BAJA_TITLE = "Tolerancia Baja";
const MEDIA_TITLE = "Tolerancia Media";
const ALTA_TITLE = "Tolerancia Alta";


const CalcularResultado = ({ tolerancia, days }: iToleranciaProps) => {
	switch (tolerancia) {
		case ALTA:
			return (<Resultado title={ALTA_TITLE} color={ALTA_COLOR} days={days}>
				Entre la &uacute;ltima toma y la fecha de hoy, pasaron <strong>{days}</strong> dias. Son <strong>menos de 30 dias</strong>,
				por lo tanto tu tolerancia es alta.
				<br />
				<br />
				Te recomendamos esperar un poco para volver a tomar MDMA, o consumir otra sustancia que no tenga sinergia con el MDMA.
				<br />
				No solo vas a tener una mejor experiencia, sino que vas a proteger a tus neuronas de la neurotoxicidad.
			</Resultado>)

		case MEDIA:
			return (<Resultado title={MEDIA_TITLE} color={MEDIA_COLOR} days={days}>
				Entre la &uacute;ltima toma y la fecha de hoy, pasaron <strong>{days}</strong> dias. Son <strong>menos de 120 dias</strong>, por lo tanto tu tolerancia se puede considerar media.</Resultado>)

		case BAJA:
			return (<Resultado title={BAJA_TITLE} color={BAJA_COLOR} days={days}>
				Entre la &uacute;ltima toma y la fecha de hoy pasaron {days} dias. Son mas de <strong>120 dias</strong>, por lo tanto tu tolerancia se puede considerar baja.
				<br />
				<br />
				Ten&eacute; en cuenta que tambi&eacute;n influye
				hace cuantos a&ntilde;os tom&aacute;s (tomar respetando descansos, pero durante muchos a&ntilde;os tambi&eacute;n sube la tolerancia)</Resultado>)
	}

	return null;
}

const Resultado = ({ title, color, days, children }: iResults) => {

	return (
		<Box w="100%" bgColor={color} p={90} justifyContent="center" justifyItems="center">
			<VStack>
				<Heading m={10} fontSize="6xl">
					{title}
				</Heading>
				<Text>
					{children}
				</Text>
			</VStack>
		</Box>
	);
};

export default CalcularResultado;