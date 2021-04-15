import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.greyLight};
  border-radius: 20px;
  height: 8px;
  margin: auto;
  position: relative;
  width: 90%;
`
export const ProgressTrack = styled.div`
  background-color: ${({ theme }) => theme.color.yellowBase};
  border-radius: 20px;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0%;
  width: ${({ width }) => width + '%'};
`
export const ProgressNumbers = styled.div`
  font-size: ${({ theme }) => theme.size.font.xs};
  font-weight: 700;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 0.25rem;
  color: ${({ theme }) => theme.color.greyBase};
`
export const ProgressPercentege = styled.div`
  font-size: ${({ theme }) => theme.size.font.xs};
  font-weight: 700;
  text-align: right;
  width: 90%;
  margin: 0.25rem auto 0;
  color: ${({ theme }) => theme.color.greyBase};
`
