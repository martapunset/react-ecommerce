import { useContext } from "react"
import { AuthProvider } from "../auth/context"
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}) => {
    const { isLogged} = useContext(AuthContext)

    console.log(isLogged);
  return (
   isLogged? children:<Navigate to='/login'></Navigate>
  )
}

export default PrivateRoutes