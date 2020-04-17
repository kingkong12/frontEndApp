import React from 'react'
import styled from 'styled-components'
import query from 'mediaQueries'

const Card = ({ item, ...props }) => {
  const { artworkUrl100, trackName, collectionName, artistName } = item
  return (
    <CardContainer>
      <ImgWrapper>
        <Image src={artworkUrl100} alt="" />
      </ImgWrapper>
      <DescriptionWrapper>
        <TrackTitle> {trackName}</TrackTitle>
        <TrackDescription> Album: {collectionName}</TrackDescription>
        <TrackDescription> Artist {artistName}</TrackDescription>
        <LinkContainer>
          <Link href="/">View More</Link>
        </LinkContainer>
      </DescriptionWrapper>
    </CardContainer>
  )
}

export default Card

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  border-top: 1px solid rgb(208, 210, 211, 0.4);
  margin: 1rem 1rem 0 1rem;
  padding: 1rem 0;
`

const Link = styled.a`
  text-align: center;
  color: rgb(10, 132, 174);
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
const DescriptionWrapper = styled.div``

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
