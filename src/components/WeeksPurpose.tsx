import styled, { css } from '@emotion/native'
import { Dimensions, useWindowDimensions, View } from 'react-native'

const weeks = ['월', '화', '수', '목', '금', '토', '일']

const WeeksPurpose = () => {
	const weekBtnWidth = (Dimensions.get('window').width - 8) / 7
	console.log(
		'🚀 ~ file: WeeksPurpose.tsx:8 ~ WeeksPurpose ~ weekBtnWidth',
		weekBtnWidth,
	)

	return (
		<WeekContainer
			style={css`
				border-radius: 10px;
			`}
		>
			{weeks.map((day, i) => {
				return (
					<ValueView key={i}>
						<ValueView2></ValueView2>
						<Day>{day}</Day>
					</ValueView>
				)
			})}
		</WeekContainer>
	)
}

export default WeeksPurpose

const WeekContainer = styled.View`
	flex: 1;
	/* border: 1px solid red; */
	/* align-items: center; */
	flex-direction: row;
	justify-content: space-around;
`
const ValueView = styled.View`
	justify-content: center;
	background: white;
	/* width: auto; */
	border: 0.5px solid;
	border-radius: 10px;
`

const ValueView2 = styled.View`
	height: 50%;
	background: red;
	border: 1px solid red;
	border-radius: 10px;
`

const Day = styled.Text`
	margin: 2px;
	text-align: center;
	display: ;
`
