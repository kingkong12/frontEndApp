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
    // compare previous and present propps to avoid rerendering of component
    const { updateReduxList } = this.props
    const api = 'https://itunes.apple.com/search?term=ColdPlay'
    axios
      .get(api)
      .then((res) => updateReduxList(res.data))
      .catch((error) => console.log('error', error))
  }

  navigateUser(id) {
    this.props.push({
      pathname: '/details',
      state: { trackId: id }
    })
  }

  render() {
    const { style, dashboardList } = this.props
    return (
      <Container style={style}>
        <Heading> Tracks of Coldplay </Heading>
        <CardWrapper>
          {dashboardList.list.map((item) => (
            <Card
              key={item.trackId}
              item={item}
              viewMoreFunction={() => this.navigateUser(item.trackId)}
            />
          ))}
        </CardWrapper>
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
  -webkit-box-shadow: 0px 1px 1px ${(props) => props.theme.static.shadow};
  -moz-box-shadow: 0px 1px 1px ${(props) => props.theme.static.shadow};
  box-shadow: 0px 1px 1px ${(props) => props.theme.static.shadow};
  background-color: ${(props) => props.theme.static.plainwhite};
`
const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`
