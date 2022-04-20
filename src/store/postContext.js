import { createContext, useState } from "react";

 export  const postContext =createContext(null)

function Post({children}){
  
    const [postD, setPostD] = useState();

    return(
    <postContext.Provider value={{postD,setPostD}}>
        {children}
    </postContext.Provider>
    )
}

export default Post;