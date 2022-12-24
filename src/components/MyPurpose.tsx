import styled, { css } from '@emotion/native'
import { Button, Text, View } from 'react-native'

interface IProps {
	title: string
	doing: number
	purpose: number
}

const timeUnit = {
	TODAY: ['오늘의', '분'],
	WEEK: ['이번 주', '일'],
	MONTH: ['이번 달의', '일'],
}

const MyPurpose = ({ title, doing, purpose }: IProps) => {
	// console.log(
	// 	'🚀 ~ file: MyPurpose.tsx:17 ~ MyPurpose ~ title',
	// 	timeUnit[title][0],
	// )
	return (
		<View>
			<Text>{title && timeUnit[title][0]} 목표</Text>
			<PurposeDetail>
				<Text>{doing}</Text>
				<Text>
					/{purpose}
					{timeUnit[title][1]}
				</Text>
			</PurposeDetail>
		</View>
	)
}

export default MyPurpose

const PurposeDetail = styled.Text`
	flex-direction: row;
`
