//Mocking the data for frontend
const usersdata = {
    'nigilan' : [1000223232, 762183618236, 962384672364],
    'kumar' : [8763282763, 237492734, 902948238402],
    'shiva' : [87638168361, 736478632, 2387647836],
    'john' : [87263823622, 090930293029, 23623567223]
};


const getAccountDetails = (user) => usersdata[user];

module.exports.getAccountDetails = getAccountDetails;