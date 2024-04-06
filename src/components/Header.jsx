import { FiShoppingCart } from "react-icons/fi";
import CartIcon from "./CartIcon";
import Product from "./Product";
const  Header = () =>{
    return(
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">React ve Tailwind Css Sepet Uygulaması</h1>
            <CartIcon/>
            
        </div>
            
            
        
         
    )
}

export default Header