import React from 'react';
import './App.scss';
import './Typography.scss';
import FieldsList from './contianers/FieldsList/FieldsList';
import SelectedFields from './contianers/SelectedFields/SelectedFields';
import Schema from './contianers/Schema/Schema';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function App() {

    return (
        <div>
            <div className="App">
                <div className="container">
                    <div className="fields-list custom-scrollbar">
                        <FieldsList/>
                    </div>
                    <div>
                    <Router>
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>


                                </li>
                                <li><Link to="/user/232313">232313</Link></li>
                                <li><Link to="/user/525">525</Link></li>

                                <li>
                                    <li><Link to="/user/525/account">525 account</Link></li>
                                </li>
                                <li>
                                    <li><Link to="/user/525/payment">525 payment</Link></li>
                                </li>
                                <li>
                                    <li><Link to="/user/525/settings">525 settings</Link></li>
                                </li>
                            </ul>
                        </div>
                        <br/>

                        <Switch>
                            <Route path="/user/:id/account" children={<Child title={'account'} />} />
                            <Route path="/user/:id/payment" children={<Child title={'payment'} />} />
                            <Route path="/user/:id/settings" children={<Child title={'settings'} />} />
                            <Route path="/user/:id" children={<Child />} />

                            <Route path="/about">
                                <h2>About</h2>
                            </Route>
                            <Route path="/users">
                                <h2>Users</h2>
                            </Route>
                            <Route path="/">
                                <h2>Home</h2>
                            </Route>
                        </Switch>
                    </Router>
                    </div>

                    {/*<div className="selected-fields custom-scrollbar">*/}
                    {/*    <SelectedFields/>*/}
                    {/*</div>*/}
                    {/*<div className="generated-schema custom-scrollbar">*/}
                    {/*    <Schema/>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
}

function Child( props ) {
    let { id } = useParams();
    console.log(props);
    return (
        <div>
            { props.title }
            <h3>ID: {id}</h3>
        </div>
    );
}