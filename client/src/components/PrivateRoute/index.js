import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const auth = sessionStorage.getItem("access_token") !== null ? true : false;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // auth.user ? (
                auth === true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;