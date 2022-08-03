import { Link } from "react-router-dom";

function PhonesList({phones}) {


return(

<div class="col-5" style={{maxHeight: "90vh", overflowY:"scroll"}} >
            <div class="list-group">

                {phones.map((phone,index)=>{
                    return(
                        <Link class="list-group-item list-group-item-action"  to={`/${phone.name}`}>{phone.name}</Link>
                    )
                })}
         
            </div>
          </div>

)
         
  }
  
  export default PhonesList;