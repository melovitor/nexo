import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

interface PrivateProps {
  Item: React.ComponentType;
}

const Private: React.FC<PrivateProps> = ({ Item }) => {
    
    const signed = localStorage.getItem("isAuth") ? true : false ;
    return signed ? <Item/> : <SignIn/>
}

const RoutesApp: React.FC = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/home' element={<Private Item={Home}/>} />
                    <Route path="/" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="*" element={<SignIn/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}
    
export default RoutesApp;
