import { AwesomeButton } from "react-awesome-button";
import './Users.css';
import { useAuth } from "react-oidc-context";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScreenNavbar from "../../components/Navbar/Navbar";
import AWS from 'aws-sdk';

const Users = () => {
    const auth = useAuth();
    const location = useLocation();
    const [usersList, setUsersList] = useState();

    AWS.config.credentials = new AWS.Credentials({
        accessKeyId: 'AKIAYV57IAJ4DNJJ6OEJ',
        secretAccessKey: 'n5Pzz8/Z7D3jiK4UF5Q4TEx7lfBFGSwOhYMhmXIq'
    });

    // Configure the AWS SDK with your Cognito user pool id and region
    AWS.config.update({
        region: 'us-east-1'
    });

    // Create a new Cognito Identity service client
    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

    // Use the listUserPoolClients method to get a list of Cognito user pool clients
    cognitoIdentityServiceProvider.describeUserPoolClient({
        UserPoolId: 'us-east-1_vzXeRCMqq',
        ClientId: 'a9011ac4-a071-4429-9d91-ae0ddf329ff1',
    }, (err, data) => {
        if (err) {
            console.log(err)
            // There was an error, handle it here
        } else {
            // The list of Cognito user pool clients is in the data.UserPoolClients array
            console.log("clients")
            console.log(data.UserPoolClient.ClientName);
        }
    });

    useEffect(() => {
        let result = []
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('https://gxdowy8at3.execute-api.eu-west-3.amazonaws.com/test/sitesmanagement/v1/company/?id=' + location.state.company[0].id, requestOptions)
            .then(response => response.json())
            .then(data => {
                result.push(data[0].managers);
                console.log(data[0].managers);
                let users = [];
                for (let i = 0; i < data[0].managers.length; i++)
                    users.push(
                        <div className='users-list-item'>
                            <p>{data[0].managers[i].idp_id}</p>
                            <AwesomeButton type="primary">Edit</AwesomeButton>
                        </div>
                    )
                setUsersList(users);
            });
        // eslint-disable-next-line
    }, [auth.user?.access_token])

    return (
        <>
            <ScreenNavbar />
            <div className='users'>
                <h2 className='users-header'>Manage Users</h2>
                <div className='users-list'>
                    {usersList}
                </div>
            </div>
        </>
    )
}

export default Users;