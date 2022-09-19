export const getSeriePathByAttribute = (serie, attribute) => {
	return serie.filter((el) => el.includes(attribute))
}

export const getSeriePathByObsTypeAndObsDepth = (serie, obsType, obsDepth) => {
	return serie.filter((el) => el.includes(`${obsType}${obsDepth}`))
}