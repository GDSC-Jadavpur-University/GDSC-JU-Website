import React ,{useState} from 'react';
import HashLoader from "react-spinners/HashLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Loader = () => {
    let [loading, setLoading] = useState(true);
  return (
    <div style={{marginTop:"100px"}}>
       <div className="sweet-loading">


      <HashLoader
        color='#ff6600'
        loading={loading}
        cssOverride={override}
        size={50}
       
      />
    </div>
    </div>
  )
}

export default Loader
