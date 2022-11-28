import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_gU8mxiB7n",
    ClientId: "4mnj7pdqbc9ev1arahf01odg8s"
}

export default new CognitoUserPool(poolData);