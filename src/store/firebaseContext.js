import React, {createContext, useState} from "react";

export const FirebaseContext=createContext(null);

export const Authcontext=createContext(null)


export default function Context({children}){
       const [user, setUser] = useState();
    return(
        <Authcontext.Provider  value={{user,setUser}}>
            {children}
        </Authcontext.Provider>
    )
}