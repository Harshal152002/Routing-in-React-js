import React from 'react';
import { useParams, useNavigate} from "react-router-dom";
const User = () => {
    const params=useParams();
    console.log(params.id);
    const navigate=useNavigate();
  return (
    <div>
      User Hello
      <button onClick={()=>navigate('/about')}>
      Click Me
     </button>
    </div>
  )
}

export default User
