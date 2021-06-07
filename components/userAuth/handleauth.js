const { MoneyButtonClient } = require('@moneybutton/api-client')

export default async function handleAuthuser () {
    //const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');
    const client = new MoneyButtonClient('cd8072b2a8b1557cc7ad71d96d038658');
    
    client.handleAuthorizationResponse();
    
}