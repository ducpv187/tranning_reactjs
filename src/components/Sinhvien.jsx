import { useState } from "react"

export default function Sinhvien() {
    const [danhsach , setDanhsach] = useState([]);
    // console.log(typeof setDanhsach);
    console.log(danhsach);
    console.log(danhsach.length);
    // const  clickTang = () => {
        
    //     setDanhsach(  
    //         // [...danhsach ,1 ]
            
    //         (danhsach) => {
    //             const newArr = [...danhsach , danhsach.length];
    //             return newArr ;
    //         }
    //     );
    // }
    const onClickTang = () => {
        const newData = (danhsach) => {
            return [...danhsach , danhsach.length]
        }

        setDanhsach(newData);
    }
    return <div>
        {/* c1 */}
       {/* <div onClick={()=> setDanhsach(
         (danhsach) => {
            const newArr = [...danhsach , danhsach.length];
            return newArr ;
            }
            )}>
         click tang them  
        </div> */}

        {/* //c2 */}
        <div onClick={onClickTang}>
            click tang
        </div>
       <div> so luong phan tu : {danhsach.length}</div>
    </div>
}