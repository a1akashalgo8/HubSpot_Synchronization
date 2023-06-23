const axios = require('axios');
require('dotenv').config();

// Function to authenticate and obtain access token for a HubSpot account
async function authenticate(clientId, clientSecret) {
  try {
    const response = await axios.post('https://api.hubapi.com/oauth/v1/token', {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    });

    // Return the access token
    return response.data.access_token;
  } catch (error) {
    console.error('Error authenticating:', error.response.data);
    throw error;
  }
}

// Function to authenticate and obtain access tokens for both accounts
async function authenticateAccounts() {
  const account1ClientId = process.env.ACCOUNT1_CLIENT_ID;
  const account1ClientSecret = process.env.ACCOUNT1_CLIENT_SECRET;
  const account2ClientId = process.env.ACCOUNT2_CLIENT_ID;
  const account2ClientSecret = process.env.ACCOUNT2_CLIENT_SECRET;

  try {
    const account1AccessToken = await authenticate(account1ClientId, account1ClientSecret);
    const account2AccessToken = await authenticate(account2ClientId, account2ClientSecret);

    console.log('Account 1 Access Token:', account1AccessToken);
    console.log('Account 2 Access Token:', account2AccessToken);
  } catch (error) {
    console.error('Error authenticating accounts:', error);
  }
}

// Call the function to authenticate the accounts
authenticateAccounts();
