const hubspot = require("@hubspot/api-client");
require("dotenv").config();

async function fetchContacts() {
  const hubspotClient1 = new hubspot.Client({
    accessToken: process.env.HUBSPOT_TOKEN_1,
  });
  const hubspotClient2 = new hubspot.Client({
    accessToken: process.env.HUBSPOT_TOKEN_2,
  });
  const limit = 10;
  const after = undefined;
  const properties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;

  try {
    const apiResponse = await hubspotClient1.crm.contacts.basicApi.getPage(
      limit,
      after,
      properties,
      propertiesWithHistory,
      associations,
      archived
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
  try {
    const apiResponse = await hubspotClient2.crm.contacts.basicApi.getPage(
      limit,
      after,
      properties,
      propertiesWithHistory,
      associations,
      archived
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
}
fetchContacts();
