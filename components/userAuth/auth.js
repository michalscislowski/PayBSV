const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default function Authuser () {
    //const client = new MoneyButtonClient('d7e15422218ad2a1c62da5fb500036bb');
    const client = new MoneyButtonClient('857b9f01487e0170e16a9535a0bf7643');
    //client.setRefreshToken(refreshToken)
    client.requestAuthorization('auth.user_identity:read users.profiles:read users.profiles.email:read users.balance:read','http://localhost:3000/home');
    //client.handleAuthorizationResponse();
    //const refreshToken = client.getRefreshToken();
    // console.log(refreshToken);
}