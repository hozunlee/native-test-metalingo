import styled, { css } from '@emotion/native'
import { useRef, useState } from 'react'
import { Animated, Dimensions, Pressable, Text, View } from 'react-native'

import { STATUS, SwipeablePanel } from '@app/components/SwipeablePanel'
import WeeksPurpose from '@app/components/WeeksPurpose'
import MyPurpose from '@app/components/MyPurpose'

const HomeScreen: React.FC = () => {
	const [panelStatus, setPanelStatus] = useState(2)
	const panelHeight = Dimensions.get('window').height * 0.8
	const minimizedHeight = Dimensions.get('window').height * 0.35
	// const weekBtnWidth = (Dimensions.get('window').width - 8) / 7

	const opacityAnim = useRef(new Animated.Value(0.5)).current

	const [panelProps, setPanelProps] = useState({
		fullWidth: true,
		openLarge: true,
		canClose: false,
		canScroll: false,
		orientation: 'portrait',
		showCloseButton: false,
		largePanelHeight: panelHeight,
		smallPanelHeight: minimizedHeight,
		bigBackgroundOpacity: 0.0,
		smallBackgroundOpacity: 0.0,
		onChangeStatus: (status: STATUS) => changedStatus(status),
		statusChangeDone: (status: STATUS) => statusChangeDone(status),
	})

	const [isPanelActive, setIsPanelActive] = useState(true)

	const statusChangeDone = (status: STATUS) => {
		setPanelStatus(status)
	}
	const changedStatus = (status: STATUS) => {
		if (status == 2) {
			setPanelStatus(status)
			Animated.timing(opacityAnim, {
				toValue: 0.6,
				duration: 700,
				useNativeDriver: true,
			}).start()
		} else {
			Animated.timing(opacityAnim, {
				toValue: 0.0,
				duration: 700,
				useNativeDriver: true,
			}).start()
		}
	}

	// static data to build front-end UI
	const userData = {
		targetMinutes: 20,
		targetDaysPerWeek: 6,
		targetDaysPerMonth: 20,
	}
	const data = {
		todayMinutes: 6,
		currentDays: 5,
	}

	const todayPurpose = userData.targetMinutes - data.todayMinutes

	return (
		<View
			style={css`
				flex: 1;
				background: #000;
			`}
		>
			<SwipeablePanel {...panelProps} isActive={isPanelActive}>
				<View
					style={[
						css`
							padding: 24px;
							padding-bottom: 50px;
							padding-top: 30px;
							flex-direction: column;
						`,
						{ height: panelHeight },
					]}
				>
					<Text
						style={css`
							font-size: 18px;
							text-align: center;
						`}
					>
						이번 주에 4일 연속으로 접속하셨어요.
					</Text>
					<Text
						style={css`
							font-size: 18px;
							text-align: center;
							margin-bottom: 50px;
						`}
					>
						{`${todayPurpose}분 더 대화하시면 오늘의 목표가 달성돼요!`}
					</Text>
					<View
						style={[
							css`
								flex: 0.35;
								/* flex-direction: row; */
								/* justify-content: flex-end; */
								// background-color: red;
							`,
						]}
					>
						{/* <MBText>{JSON.stringify(greetings.data)}</MBText> */}
						{/* Enter statistics */}
						<WeeksPurpose />
					</View>
					<MyPurposeContainer>
						<MyPurpose
							title="TODAY"
							doing={data.todayMinutes}
							purpose={userData.targetMinutes}
						/>
						<MyPurpose
							title="WEEK"
							doing={data.currentDays}
							purpose={userData.targetDaysPerWeek}
						/>
						<MyPurpose
							title="MONTH"
							doing={data.currentDays}
							purpose={userData.targetDaysPerMonth}
						/>
					</MyPurposeContainer>
					<Pressable
						onPress={() => {
							console.log('축하해요')
						}}
						style={({ pressed }) => [
							css`
								border-radius: 10px;
								align-items: center;
								justify-content: center;
								height: 40px;
							`,
							{
								backgroundColor: pressed ? '#7D8491' : '#62e295',
							},
						]}
					>
						{({ pressed }) => (
							<Text
								style={css`
									font-weight: 800;
									/* font-size: 20px; */
								`}
							>
								{pressed ? 'metalingo 화이팅!' : '시작하기'}
							</Text>
						)}
					</Pressable>
				</View>
			</SwipeablePanel>
		</View>
	)
}

export default HomeScreen

const MyPurposeContainer = styled.View`
	flex: 0.4;
	padding-top: 30px;
	flex-direction: row;
	/* border: 1px solid red; */
	justify-content: space-around;
	/* align-items: center; */
`

const Btn = styled.Pressable`
	background-color: '#62e295';
	justify-content: 'center';
	align-items: 'center';
`
