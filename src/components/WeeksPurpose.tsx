import styled, { css } from '@emotion/native'
import { Dimensions, useWindowDimensions, View } from 'react-native'

const weeks = [
	{ day: '월', value: `100%`, id: 0, today: false },
	{ day: '화', value: `0%`, id: 1, today: false },
	{ day: '수', value: `100%`, id: 2, today: false },
	{ day: '목', value: `50%`, id: 3, today: true },
	{ day: '금', value: `0%`, id: 4, today: false },
	{ day: '토', value: `0%`, id: 5, today: false },
	{ day: '일', value: `0%`, id: 6, today: false },
]

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
					<ValueView key={day.id}>
						<ValueView2
							style={[
								css`
								height: ${day?.value};
								
								{backgroundColor: day.today ? '#7D8491' : red}`,
							]}
						></ValueView2>
						<Day>{day.day}</Day>
					</ValueView>
				)
			})}
		</WeekContainer>
	)
}

export default WeeksPurpose

const WeekContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
`
const ValueView = styled.View`
	justify-content: flex-end;
	background: white;
	border: 0.5px solid #62e295;
	border-radius: 10px;
	display: flex;
	height: 100%;
	align-items: center;
`

const ValueView2 = styled.View`
	background: #62e295;
	border-radius: 10px;
	position: relative;
	width: 30px;
`

const Day = styled.Text`
	text-align: center;
	position: absolute;
	top: 50%;
	width: 100%;
	text-align: center;
`
