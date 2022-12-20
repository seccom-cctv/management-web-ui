import './Login.css';
import background from './video.mp4';
import { toast, ToastContainer } from 'react-toastify';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "react-oidc-context";
import { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner'

const Login = () => {
    const auth = useAuth();

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return (
            <>
                <div className='loading-section'>
                    <BallTriangle
                        height={80}
                        width={80}
                        radius={5}
                        color="#ccc"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                    <p>Redirecting...</p>
                </div>
            </>
        )
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        // exemplo de GET Request com JWT access_token
        const token = auth.user?.access_token;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };
        fetch('https://gxdowy8at3.execute-api.eu-west-3.amazonaws.com/test/sitesmanagement/v1/company/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

        return (
            <div>
                Hello {auth.user?.profile.name}{" "}
                Hello {auth.user?.access_token}{" "}
                <button onClick={() => auth.removeUser()}>Log out</button>
            </div>
        );
    }

    return (
        <>
            <ToastContainer />
            <div className='login'>
                <video src={background} autoPlay loop muted />
            </div>
            <div className='login-content'>
                <h1>Welcome to SecCom!</h1>
                <p>The best security service!</p>
                <button className='login-button' onClick={() => auth.signinRedirect()}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;