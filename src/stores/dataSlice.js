import { current } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { DataTypes, DurationTypes, ObservationTypes } from "./../config"

const initialState = {
	data: {},
	mode: {
		volume: {},
	},
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		addData: (state, action) => {
			const { id, fillingRate, surface, volume } = action.payload

			if (!state.data[id]) {
				state.data[id] = {
					[DataTypes.FILLING_RATE]: {
						[DurationTypes.DAY]: {
							raw: fillingRate.DAY.day,
							year: fillingRate.DAY.dayByYear,
						},
						[DurationTypes.PERIOD]: {
							raw: fillingRate.PERIOD.period,
							year: fillingRate.PERIOD.periodByYear,
						},
					},
					[DataTypes.SURFACE]: {
						[DurationTypes.DAY]: {
							raw: surface.DAY.day,
							year: surface.DAY.dayByYear,
						},
						[DurationTypes.PERIOD]: {
							raw: surface.PERIOD.period,
							year: surface.PERIOD.periodByYear,
						},
					},
					[DataTypes.VOLUME]: {
						[DurationTypes.DAY]: {
							raw: volume.DAY.day,
							year: volume.DAY.dayByYear,
							full: volume.DAY.dayFull,
						},
						[DurationTypes.PERIOD]: {
							raw: volume.PERIOD.period,
							year: volume.PERIOD.periodByYear,
							full: volume.PERIOD.periodFull,
						},
					},
        }

				if (Object.keys(state.mode.volume).length === 0) {
					state.mode.volume = {
						[DurationTypes.DAY]: {
							raw: volume.DAY.dayFull,
						},
						[DurationTypes.PERIOD]: {
							raw: volume.PERIOD.periodFull,
						},
					}
				} else {
					const modeVolumeDayFirstDate = state.mode.volume.DAY.raw[0][0].date
					const modeVolumeDayLastDate = state.mode.volume.DAY.raw[0].at(-1).date
					const modeVolumePeriodFirstDate =
						state.mode.volume.PERIOD.raw[0][0].date
					const modeVolumePeriodLastDate =
						state.mode.volume.PERIOD.raw[0].at(-1).date

					const volumeDayFirstDate = volume.DAY.dayFull[0][0].date
					const volumeDayLastDate = volume.DAY.dayFull[0].at(-1).date
					const volumePeriodFirstDate = volume.PERIOD.periodFull[0][0].date
					const volumePeriodLastDate = volume.PERIOD.periodFull[0].at(-1).date

					let dayFirstDate = modeVolumeDayFirstDate
					let dayLastDate = modeVolumeDayLastDate
					let periodFirstDate = modeVolumePeriodFirstDate
					let periodLastDate = modeVolumePeriodLastDate

					if (volumeDayFirstDate >= modeVolumeDayFirstDate) {
						dayFirstDate = volumeDayFirstDate
					}
					if (volumeDayLastDate <= modeVolumeDayLastDate) {
						dayLastDate = volumeDayLastDate
					}
					if (volumePeriodFirstDate >= modeVolumePeriodFirstDate) {
						periodFirstDate = volumePeriodFirstDate
					}
					if (volumePeriodLastDate <= modeVolumePeriodLastDate) {
						periodLastDate = volumePeriodLastDate
					}

					const volumeDayFilter = volume.DAY.dayFull.map((obs) => {
						return obs.filter((o) => {
							return o.date >= dayFirstDate && o.date <= dayLastDate
						})
					})

					const volumePeriodFilter = volume.PERIOD.periodFull.map((obs) => {
						return obs.filter((o) => {
							return o.date >= periodFirstDate && o.date <= periodLastDate
						})
					})

					state.mode.volume.DAY.raw = state.mode.volume.DAY.raw.map((obs) => {
						return obs.filter((o) => {
							return o.date >= dayFirstDate && o.date <= dayLastDate
						})
					})

					state.mode.volume.PERIOD.raw = state.mode.volume.PERIOD.raw.map(
						(obs) => {
							return obs.filter((o) => {
								return o.date >= periodFirstDate && o.date <= periodLastDate
							})
						}
					)

					state.mode.volume.DAY.raw = state.mode.volume.DAY.raw.map(
						(obs, index) => {
							return obs.map((el, i) => {
								const { date, value } = volumeDayFilter[index][i]
								if (el.date === date) {
									return {
										date: el.date,
										value: el.value + value,
									}
								}
							})
						}
					)

					state.mode.volume.PERIOD.raw = state.mode.volume.PERIOD.raw.map(
						(obs, index) => {
							return obs.map((el, i) => {
								const { date, value } = volumePeriodFilter[index][i]
								if (el.date === date) {
									return {
										date: el.date,
										value: el.value + value,
									}
								}
							})
						}
					)
				}
			}
		},
	},
})

export const { addData } = dataSlice.actions

export default dataSlice.reducer