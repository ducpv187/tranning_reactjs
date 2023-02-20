import { useState } from "react"

export default function Sinhvien() {
    const [danhsach , setDanhsach] = useState([1]);
    // const  clickTang = () => {
        
    //     setDanhsach(  
    //         // [...danhsach ,1 ]
            
    //         (danhsach) => {
    //             const newArr = [...danhsach , danhsach.length];
    //             return newArr ;
    //         }
    //     );
    // }
    return <div>
       <div onClick={()=> setDanhsach(
         (danhsach) => {
            const newArr = [...danhsach , danhsach.length];
            return newArr ;
            }
        )}>
         click tang them  
        </div>
       <div> so luong phan tu : {danhsach.length}</div>
    </div>
}