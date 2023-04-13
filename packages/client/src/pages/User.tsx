import { useState } from 'react'



const User =  (props2 : { onSend2 : ( user: string | undefined ) => void}) => {  

    //const navigate = useNavigate();
    
    const [user,setUser]= useState<string|undefined>()
    
   
    return( <div>
        ange din username  <input type="text" value={user} onChange={(e) =>  setUser(e.target.value)  } />
        <button onClick={(e) =>  props2.onSend2(user)}>send</button>  
    </div>
    )

}

export default User;