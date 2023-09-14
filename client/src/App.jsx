
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState();
    useEffect(() => {
      const dataFetch = async () => {
        const data = await (await fetch('/users')).json();
        setData(data)
      }
      dataFetch();
    }, [])

  return (
    <>
      <h1 className="text-center text-5xl text-purple-400">Hello World</h1>
      
       {data && data.map(user => {
        console.log(user);
          return (
            <div className="my-4 w-[30%] border-[1px] text-center mx-auto" key={user.id}>
              <ul>
                <li>First Name: {user.firstname}</li>
                <li>Last Name: {user.lastname}</li>
                <li>Age: {user.age}</li>
              </ul>
            </div>
          )
       })}
      
    </>
  )
}

export default App
