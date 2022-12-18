# management-web-ui

## How to run:
```
./start.sh
./stop.sh
```

## Endpoint:
```
http://localhost:3001
```

## .env structure
```
REACT_APP_IDP_SERVER_URL="https://cognito-idp.us-east-1.amazonaws.com/<user_pool>"
REACT_APP_IDP_CLIENT_ID="<client_id>"
REACT_APP_IDP_CLIENT_SECRET="<client_secret>"
REACT_APP_IDP_REDIRECT_URI="http://localhost:3001"
```