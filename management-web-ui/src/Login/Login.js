import './Login.css';
import background from './video.mp4';
import { toast, ToastContainer } from 'react-toastify';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    if (!localStorage.getItem('code')) {
        const idpUrl = "https://seccom.auth.us-east-1.amazoncognito.com/login?client_id=6d029pl6uc77rebq5s8gl35m29&response_type=code&scope=aws.cognito.signin.user.admin+email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcompanies%2Flist"
        const redirectToCompanies = () => {
            toast.info('Redirecting....', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000
            });
            setTimeout(() => window.location.replace(idpUrl), 1300);
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
                    <button className='login-button' onClick={redirectToCompanies}>
                        Login
                    </button>
                </div>
            </>
        )
    } else {
        toast.warn('Redirecting....', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
        });
        setTimeout(() => window.location.replace("/companies/list"), 1300);

        return (
            <ToastContainer />
        )
    }
}

export default Login;