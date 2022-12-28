import styled, { css } from '@emotion/native'
import { Button, Dimensions, Text, View } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'

const circle_width = (Dimensions.get('window').width - 4) / 3

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
	return (
		<View>
			<Text>{title && timeUnit[title][0]} 목표</Text>
			<PurposeDetail>
				<CircularProgress
					title={`${doing}/${purpose}${timeUnit[title][1]}`}
					activeStrokeColor={'#62e295'}
					valueSuffix={'%'}
					progressValueStyle={{ color: '#0C1618' }}
					titleStyle={{ color: '#0C1618' }}
					radius={38}
				/>
			</PurposeDetail>
		</View>
	)
}

export default MyPurpose

const PurposeDetail = styled.View`
	margin-top: 10px;
`

const CircleView = styled.View``
