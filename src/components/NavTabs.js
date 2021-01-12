import React from "react";
import { Nav, NavItem } from 'reactstrap';
import TabNew from "./TabNew";
import TabAccepted from "./TabAccepted";
import TabDeclined from "./TabDeclined";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const REQS = gql`
    query requests {
        requests {
            id
            requesterName
            price
            profilePictureUrl
            status
            contentLink
        }
    }
`;


const NavTabs = () => {

    const { loading, error, data } = useQuery(REQS);

    if (error) return <p>Error :(</p>;
    const statusNew = data?.requests.filter(item => item.status === "new");
    const statusAccepted = data?.requests.filter(item => item.status === "accepted");
    const statusDeclined = data?.requests.filter(item => item.status === "declined");

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
                        <Route exact path="/new" render={ () => <TabNew loading={ loading } dataNew={ statusNew } /> } />
                        <Route exact path="/accepted" render={ () => <TabAccepted loading={ loading } dataAccepted={ statusAccepted } /> } />
                        <Route exact path="/declined" render={ () => <TabDeclined loading={ loading } dataDeclined={ statusDeclined } /> } />
                        <Redirect to="/new" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default NavTabs;