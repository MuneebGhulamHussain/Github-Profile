// import { TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from "./Profile.module.css"
// import { BorderAll } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Co2Sharp } from '@mui/icons-material';
import { toast } from 'react-toast';

const Profile = () => {



    const [name, setName] = useState("")
    const [data, setData] = useState({})
    const [status,setStatus]=useState(false)

// toast("testing")

    const getName = async () => {
        try {
            
            console.log(name)
            const api = await axios.get(`https://api.github.com/users/${name}`);
            // console.log(api.data)
            setData({...api.data})
            setStatus(true)
        } catch (error) {
            console.log(error.message)
             toast.error("Profile Not Exist !");
        }
    }
    console.log(data)


    return (
        <div className={styles.forFlex}>
            <div className={styles.inputContainer}>
                <input type="text" placeholder='Enter Github Profile...  ' onChange={(eve) => setName(eve.target.value)} />
                <button onClick={getName }>Search <SearchIcon /></button>
            </div>

           {status?<div className={styles.secondMainParent}>
                <div className={styles.imageAndText}>
                    <img src={`${data.avatar_url}`} alt="" />
                    <p>{`${data.login}`}</p>
                    <p>Bio</p>
                    <p className={styles.bio}>{`${data.bio}`} </p>

                </div>


                <div className={styles.bottomContainer}>
                    <div className={styles.repoDiv}>
                        <p className={styles.para}>Repos</p>
                        <p>{`${data.public_repos}`}</p>
                    </div>
                    <div className={styles.repoDiv}>
                       <p className={styles.para}> Followers</p>
                        <p>{`${data.followers}`}</p>
                </div>
                <div className={styles.repoDiv}>
                       <p className={styles.para}> Following</p>
                        <p>{`${data.following}`}</p>
            </div>
        </div>

        </div >:null} 
           
           
    </div >
  )
}

export default Profile