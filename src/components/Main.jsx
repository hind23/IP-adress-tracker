import { AppContext   } from "../App"
import { useContext } from "react"
export const Main=()=>
{
    const {ip,result}=useContext(AppContext)
    return (
        
<div className='flex w-[100%] flex-row justify-center  '>
 <div className='result p-4 flex sm:flex-row flex-col sm:justify-around '>
<div className='sm:h-[140px] h-[60px] p-4'>
<h4 className='text-2xl sm:mb-3'> 
  IP ADDRESS
</h4>
<h3>
{ip}
</h3>
</div>
<div  className='sm:h-[140px] h-[60px] p-4' >
<h4 className='text-2xl sm:mb-3'>
  Location
</h4>
<h3>
  {result.location}
</h3>

</div>

<div className='sm:h-[140px] h-[60px] p-4' >
<h4 className='text-2xl sm:mb-3'>
Timezone</h4>
<h3>
{result.timezone}
</h3>
</div>
<div  className='sm:h-[140px] h-[60px] p-4' >
<h4 className='text-2xl sm:mb-3'>
Isp</h4>
<h3>
{result.isp}
</h3>
</div>
</div>
</div>
    )
}