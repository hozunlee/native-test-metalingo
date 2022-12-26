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
				{/* <Text>{doing}</Text>
					<Text>
						/{purpose}
						{timeUnit[title][1]}
					</Text> */}
				<CircularProgress
					// titleFontSize={5}
					value={(doing / purpose) * 100}
					title={`${doing}/${purpose}${timeUnit[title][1]}`}
					activeStrokeColor={'#62e295'}
					// activeStrokeSecondaryColor={'#004643'}
					valueSuffix={'%'}
					progressValueStyle={{ color: '#0C1618' }}
					titleStyle={{ color: '#0C1618' }}
					// inActiveStrokeWidth={5}
					// activeStrokeWidth={6}
					radius={38}

					// activeStrokeWidth={12}
				/>
			</PurposeDetail>
		</View>
	)
}

export default MyPurpose

const PurposeDetail = styled.View`
	margin-top: 10px;
	/* flex-direction: row; */
`

const CircleView = styled.View``
