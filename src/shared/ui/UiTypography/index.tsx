import { DynamicTagProps, TDynamicTagProps } from '@/shared/types/shared'
import { JSX } from 'react'

type TUiTypographyFonts =
	| 'Montserrat-L'
	| 'Montserrat-R'
	| 'Montserrat-M'
	| 'Montserrat-SB'
	| 'Montserrat-B'
type TUiTypographyTextProps = {
	font: TUiTypographyFonts
}
type TUiTypographyPropsFC = TDynamicTagProps<TUiTypographyTextProps>
type TUiTypographyProps = DynamicTagProps<
	keyof JSX.IntrinsicElements,
	TUiTypographyTextProps
>

type TFontInfo = [
	string,
	'T' | 'EL' | 'L' | 'R' | 'M' | 'SB' | 'B' | 'EB' | 'BL' | 'HE'
]
const UiTypography: TUiTypographyPropsFC = ({ tag: Tag, font, ...props }) => {
	const FONT_INFO: TFontInfo = font.split('-') as TFontInfo
	let WEIGHT:
		| 100
		| 200
		| 300
		| 400
		| 500
		| 600
		| 700
		| 800
		| 900
		| 1000
		| 'normal' = 'normal'

	switch (FONT_INFO[1]) {
		case 'T':
			WEIGHT = 100
			break
		case 'EL':
			WEIGHT = 200
			break
		case 'L':
			WEIGHT = 300
			break
		case 'R':
			WEIGHT = 400
			break
		case 'M':
			WEIGHT = 500
			break
		case 'SB':
			WEIGHT = 600
			break
		case 'B':
			WEIGHT = 700
			break
		case 'EB':
			WEIGHT = 800
			break
		case 'BL':
			WEIGHT = 900
			break
		case 'HE':
			WEIGHT = 1000
			break
	}

	return (
		//@ts-ignore
		<Tag
			{...props}
			style={{
				fontFamily: FONT_INFO[0],
				fontWeight: WEIGHT,
			}}
		/>
	)
}

export {
	UiTypography,
	type TUiTypographyProps,
	type TUiTypographyTextProps,
	type TUiTypographyFonts,
}
