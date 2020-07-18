import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import axios from 'axios'

const fetchHeader = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'secret-key': '$2b$10$5nuQcJ7ZfFm7ND3hL59pnOtCwE8UyDerAhTOcB86u2V.zqnX2QKLS'
	}
}

const Home = ({experiences}) => {

	return (
		<div className="container">
			<SideBar />
			<Content experiences={experiences}/>
		</div>
	)
}

Home.getInitialProps = async () => {
  const response = await axios.get('https://api.jsonbin.io/b/5f124cc6c1edc4661759241f', fetchHeader)
  return {
    experiences: response.data
  }

}


export default Home
