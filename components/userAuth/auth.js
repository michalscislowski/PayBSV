const { MoneyButtonClient } = require('@moneybutton/api-client')
const url = process.env.NEXT_PUBLIC_HOST_URL + "/home";
const token = process.env.NEXT_PUBLIC_MONEY_BUTTON_TOKEN;

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default function Authuser () {
    const client = new MoneyButtonClient(token);
    //client.setRefreshToken(refreshToken)
    client.requestAuthorization('auth.user_identity:read users.profiles:read users.profiles.email:read users.balance:read', url);
    //client.handleAuthorizationResponse();
    //const refreshToken = client.getRefreshToken();
    // console.log(refreshToken);
}