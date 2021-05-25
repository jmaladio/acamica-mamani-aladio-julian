import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Layout from './common/Layout';
import { Home, History } from './pages';

export const UserContext = React.createContext({
  _id: null,
  name: null,
  points: null,
  redeemHistory: [],
  createDate: null
})

const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`
}

function App() {

  const [ userInfo, setUserInfo ] = useState(() => ({
    id: null,
    name: null,
    points: null,
    redeemHistory: [],
    createDate: null
  }))

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfoFromAPI = await axios.get(`${API_URI}/user/me`, { headers })
      setUserInfo(userInfoFromAPI.data)
    }
    getUserInfo()
  }, [])

  return (
    <UserContext.Provider value={userInfo}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
        </Switch>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
