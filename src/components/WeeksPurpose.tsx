import styled, { css } from '@emotion/native'

const weeks = ['월', '화', '수', '목', '금', '토', '일']

const WeeksPurpose = () => {
	return (
		<WeekContainer
			style={css`
				border-radius: 10px;
			`}
		>
			{weeks.map(day => {
				return <Day>{day}</Day>
			})}
		</WeekContainer>
	)
}

export default WeeksPurpose

const WeekContainer = styled.View`
	flex: 1;
	flex-direction: row;
	/* border: 1px solid red; */
	justify-content: space-around;
	/* align-items: center; */
`
const Day = styled.Text`
	border: 0.5px solid;
	border-radius: 10px;
	margin: 2px;
	padding: 13px;
	text-align: center;
	background-color: green;
`
