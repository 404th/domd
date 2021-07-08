import { Route, Switch } from "react-router-dom";

function Layout() {
    return (
        <Switch>
            <Route path={"/hello"} component={<h1>Hello world!</h1>} />
        </Switch>
    );
}

export default Layout;
