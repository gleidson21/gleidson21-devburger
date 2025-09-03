import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export function Userlayout(){
    return(
        <>
          
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}