import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";


export default function Headers() {

    return <>
        <header  style={{maxWidth:'1200px',margin:'0 auto',padding:'0',display:'flex',justifyContent:'space-between',alignItems:'center',height:'70px'}} >

           <Logo />
           <Navbar />

        </header>
    </>


}