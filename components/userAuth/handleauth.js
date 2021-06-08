const { MoneyButtonClient } = require('@moneybutton/api-client')
const token = process.env.NEXT_PUBLIC_MONEY_BUTTON_TOKEN;

export default async function handleAuthuser () {
    const client = new MoneyButtonClient(token);
    
    client.handleAuthorizationResponse();
    
}