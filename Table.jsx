import React from 'react'
const Table =({data})=>{
    return(
      <table>
      <tbody>
          <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Speciality</th>
              <th>Rate</th>
             </tr>
             
             {data.map((item)=>(
                   <tr key={item.id}>
                   <td>{item.first_name}</td>
                   <td>{item.last_name}</td>
                   <td>{item.speciality}</td>
                   <td>{item.rate}</td>
               </tr>
             ))}
          
       </tbody>
      </table>
    );
}
export default Table