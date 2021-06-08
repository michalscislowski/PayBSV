const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function getUserData () {
    const client = new MoneyButtonClient('d7e15422218ad2a1c62da5fb500036bb');
    //const client = new MoneyButtonClient('857b9f01487e0170e16a9535a0bf7643');

    //const refreshToken = client.getRefreshToken();

    const { id } = await client.getIdentity()
    const status = await fetch( 'https://kyc.blockpass.org/kyc/1.0/connect/banach_group/refId/'+id, {
        headers: {
            'Authorization': '73e01eca9e43ed8039e302484954fec3'
        },
    });
    const userStatus = await status.json()
    //console.log(`The id is ${id} and the name is ${name}`)
    const profile = await client.getUserProfile(id)
    const balance = await client.getBalance(id)
    // const payments = await client.getOwnPayments(id)
    const profileJSON = JSON.stringify(status)
    console.log(userStatus);

    return {
        profile: profile,
        balance: balance,
        userStatus: userStatus
        // status: status
        // payments: payments
        //refreshToken: refreshToken
    }
}