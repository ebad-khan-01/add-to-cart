import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../slices/CartSlice";

export default function App() {
    const {cart,totalQuantity} = useSelector((state)=> state.allcart)
     const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getCartTotal())
    },[cart])
 return (
    <MDBNavbar bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span >
            <Link to="/">ALL PRODUCT</Link>
        </span>
        <MDBBtn color="dark">
         <Link to="/cart"> cart({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
