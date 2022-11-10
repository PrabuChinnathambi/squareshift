import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {

    const [userData, setUserData] = useState([])

    const getUserDetails = async () => {
        const { data: userData} = await axios.get("https://jsonplaceholder.typicode.com/users")
        const { data: imagesData} = await axios.get("https://jsonplaceholder.typicode.com/photos/")
        
        if(imagesData && userData){
            userData.map((item, i) => {
                var value = imagesData.find((x) => x.id === item.id)
                if(value){
                    let final = { ...item, ...value }
                    setUserData([...userData, final])
                }
            })

        }

    }


    console.log(userData)

    useEffect(() => {
        getUserDetails()
    }, [])


    const handleChange = (e) => {
        console.log(e.target.value, "vkjhvj")


    }
    


  return (
    <div>
        <select onChange={handleChange}>
            <option>Select User</option>
            {
                userData.map((item, i) => {
                    return(
                    <option value={item.id} >{item.name}</option>
                    )
                })
            }
        </select>

    </div>
  )
}

export default Home