/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import query from 'mediaQueries'
import propTypes from 'prop-types'

const Card = ({ item, viewMoreFunction = () => {}, ...props }) => {
  const { artworkUrl100, trackName, artistName } = item
  return (
    <CardContainer {...props}>
      <ImgWrapper>
        <Image src={artworkUrl100} alt="" />
      </ImgWrapper>
      <TrackTitle> {trackName}</TrackTitle>
      <TrackDescription> Artist {artistName}</TrackDescription>
      <LinkContainer onClick={() => viewMoreFunction()}>
        <Button>View More</Button>
      </LinkContainer>
    </CardContainer>
  )
}

Card.propTypes = {
  item: propTypes.instanceOf(Object)
}

export default Card

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.branding.lightGray};
  margin: 1rem 1rem 0 1rem;
  padding: 1rem 0;
  cursor: pointer;
`

const Button = styled.div`
  text-align: center;
  color: ${(props) => props.theme.components.lik};
  text-decoration: none;
`
const CardContainer = styled.div`
  display: block;
  width: calc(100vw / 6);
  margin: 2rem;
  background: #fff;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in;

  @media ${query.lessThanMedium} {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-out;
  }
`

const ImgWrapper = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`

const TrackTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: normal;
  overflow-wrap: normal;
  text-align: center;
  color: rgb(33, 33, 33);
  padding: 0 1.5rem;
`
const TrackDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: normal;
  overflow-wrap: normal;
  text-align: center;
  color: rgb(117, 117, 117);
  padding: 0.55rem 1rem 0 1rem;
`
