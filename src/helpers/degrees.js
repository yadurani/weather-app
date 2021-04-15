import intNumber from './intNumber'

const toFahrenheit = (temp) => {
  return temp * 1.8 + 32
}

export const setNameDegrees = (isCelcius) => {
  return isCelcius ? '°C' : '°F'
}

export const setConvertDegrees = (temp, isCelcius) => {
  return isCelcius ? temp : intNumber(toFahrenheit(temp))
}
