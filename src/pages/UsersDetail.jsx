import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"

export default function UsersDetail(){
  const {id} =useParams()

  const {data , loading , error} = useFetch(`https://dummyjson.com/users/${id}`)

  if(loading){
    return <p>Loading User...</p>
  }
  if(error){
    return <p style={{fontSize:"30px"}}>Error Loading User</p>
  }
  if(!data){
    return <p>User not Found</p>
  }

    return (
        <div>
            <h2>User Details</h2>

            <table border="1" cellPadding="8">
               <tbody>
                <tr>
                    <td>Name</td>
                    <td>{data.firstName} {data.lastName}</td>
                </tr>
                <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{data.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td>{data.bloodGroup}</td>
          </tr>
               </tbody>
            </table>

            <br />
            <Link to="/users">Back to Users</Link>
        </div>
    )
}