import React, { useEffect } from "react";
import { Nav, NavItem } from 'reactstrap';
import TabNew from "./TabNew";
import TabAccepted from "./TabAccepted";
import TabDeclined from "./TabDeclined";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "../redux/ActionCreators";

const NavTabs = ({ isOpen, toggle }) => {

    const state = useSelector(state => state.gqlReducer.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    console.log(state);

    return (
        <div>
            <div className="row mt-4">
                <div className="col">
                    <Nav pills>
                        <NavItem>
                            <NavLink className="navlinkBold mx-2 nav-link" to="/new" active="true">NEW</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navlinkBold mx-2 nav-link" to="/accepted">ACCEPTED</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navlinkBold mx-2 nav-link" to="/declined">DECLINED</NavLink>
                        </NavItem>
                    </Nav>
                    <Switch>
                        <Route exact path="/new" render={ () => <TabNew state={ state } isOpen={ isOpen } toggle={ toggle } /> } />
                        <Route exact path="/accepted" render={ () => <TabAccepted isOpen={ isOpen } toggle={ toggle } /> } />
                        <Route exact path="/declined" render={ () => <TabDeclined isOpen={ isOpen } toggle={ toggle } /> } />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default NavTabs;