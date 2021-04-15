import styled from 'styled-components'
import { ParagraphBase } from '../Text/Paragraph/styles'

export const AsideWrapper = styled.aside`
  align-content: space-between;
  background-color: ${({ theme }) => theme.color.blueBase};
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 42px ${({ theme }) => theme.size.space.xxxl};
  text-align: center;
  position: relative;
  &:before {
    background-image: url('assets/images/Cloud-background.png');
    background-position-y: 120px;
    background-position-x: -77px;
    background-repeat: no-repeat;
    background-size: 137% auto;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    opacity: 0.1;
    right: 0;
    top: 0;
  }
  @media (max-width: 960px) {
    padding: ${({ theme }) => theme.size.space.xl};
  }
`
export const AsideHead = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-bottom: 6rem;
  position: relative;
  width: 100%;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xxxxl};
  }
`
export const AsideFooter = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-content: center;
  grid-gap: 20px 0;
  margin-top: ${({ theme }) => theme.size.space.xxxl};
  position: relative;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xxxxl};
    margin-top: ${({ theme }) => theme.size.space.xxl};
  }
`
export const AsideImg = styled.img`
  margin-bottom: ${({ theme }) => theme.size.space.xxxxxl};
  position: relative;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xxxl};
  }
`
export const AsideLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    margin-right: 5px;
    fill: ${({ theme }) => theme.color.greyDark};
  }
  ${ParagraphBase} {
    margin-bottom: 0;
  }
`
export const AsideTextDegree = styled.h4`
  color: ${({ theme }) => theme.color.greyLight};
  font-size: ${({ theme }) => theme.size.font.xxxxxl};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.size.space.xxxxxl};
  padding-bottom: ${({ theme }) => theme.size.space.sm};
  font-weight: 500;
  position: relative;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xl};
  }
`
export const AsideTextSecondary = styled.span`
  color: ${({ theme }) => theme.color.greyDark};
  font-size: ${({ theme }) => theme.size.font.xxxl};
  position: relative;
`
