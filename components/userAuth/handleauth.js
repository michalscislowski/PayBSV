const { MoneyButtonClient } = require('@moneybutton/api-client')

export default async function handleAuthuser () {
    const client = new MoneyButtonClient('d7e15422218ad2a1c62da5fb500036bb');
    //const client = new MoneyButtonClient('857b9f01487e0170e16a9535a0bf7643');
    
    client.handleAuthorizationResponse();
    
}