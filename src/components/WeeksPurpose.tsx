import styled, { css } from '@emotion/native'
import { Dimensions, useWindowDimensions, View } from 'react-native'

const weeks = [
	{ day: '월', value: `100%`, id: 0 },
	{ day: '화', value: `0%`, id: 1 },
	{ day: '수', value: `100%`, id: 2 },
	{ day: '목', value: `50%`, id: 3, today: true },
	{ day: '금', value: `0%`, id: 4 },
	{ day: '토', value: `0%`, id: 5 },
	{ day: '일', value: `0%`, id: 6 },
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
				console.log(day.value)
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
	/* border: 1px solid red; */
	/* align-items: center; */
	flex-direction: row;
	justify-content: space-around;
`
const ValueView = styled.View`
	justify-content: flex-end;
	background: white;
	/* width: auto; */
	border: 0.5px solid #62e295;
	border-radius: 10px;
	display: flex;
	height: 100%;
	align-items: center;
`

const ValueView2 = styled.View`
	/* height: 100%; */
	background: #62e295;
	/* border: 1px solid #62e295; */
	border-radius: 10px;
	position: relative;
	width: 30px;
`

const Day = styled.Text`
	/* margin: 2px; */
	text-align: center;
	position: absolute;
	top: 50%;
	width: 100%;
	text-align: center;
`
