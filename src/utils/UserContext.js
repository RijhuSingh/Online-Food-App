import { createContext } from "react";

const UserContext=createContext({
    name:'dummy',
    email:'dummy@gmail.com'
});

export default UserContext;