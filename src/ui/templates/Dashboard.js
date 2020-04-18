import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'react-redux'
import udpateListItems from 'actions/dashboardAction'
import Card from 'ui/organisms/Card'
import propTypes from 'prop-types'
import { push } from 'connected-react-router'

class Dasbaord extends Component {
  componentDidMount() {
    const { updateReduxList } = this.props
    const api = 'https://itunes.apple.com/search?term=ColdPlay'
    axios
      .get(api)
      .then((res) => updateReduxList(res.data))
      .catch((error) => console.log('error', error))
  }

  myFucntion() {
    this.props.push('/details')
  }

  render() {
    const { style, dashboardList } = this.props
    console.log('actual props', this.props)
    return (
      <Container style={style}>
        <Heading> Tracks of Coldplay </Heading>
        <CardContainer>
          {dashboardList.list.map((item) => (
            <Card
              key={item.trackId}
              item={item}
              viewMoreFunction={() => this.myFucntion()}
            />
          ))}
        </CardContainer>
      </Container>
    )
  }
}

Dasbaord.propTypes = {
  updateReduxList: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    dashboardList: state.list,
    router: state.router
  }
}

export default connect(mapStateToProps, {
  updateReduxList: udpateListItems,
  push
})(Dasbaord)
const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-shadow-offset: 10px 5px;
`
const Heading = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: larger;
  -webkit-box-shadow: 0px 1px 1px #888;
  -moz-box-shadow: 0px 1px 1px #888;
  box-shadow: 0px 1px 1px #888;
  background-color: ${(props) => props.theme.static.plainwhite};
`
const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`
