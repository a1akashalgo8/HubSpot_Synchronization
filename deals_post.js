// const hubspot = require("@hubspot/api-client");
// require("dotenv").config();

// // const hubspotClient = new hubspot.Client({"accessToken":"YOUR_ACCESS_TOKEN"});
// async function postDeals() {
//   const hubspotClient1 = new hubspot.Client({
//     accessToken: process.env.HUBSPOT_TOKEN_1,
//   });
//   const hubspotClient2 = new hubspot.Client({
//     accessToken: process.env.HUBSPOT_TOKEN_2,
//   });
//   const properties = {
//     amount: "1500.00",
//     closedate: "2019-12-07T16:50:06.678Z",
//     dealname: "Custom data integrations",
//     dealstage: "presentationscheduled",
//     hubspot_owner_id: "447263398",
//     pipeline: "default",
//   };
//   const SimplePublicObjectInputForCreate = {
//     properties,
//     associations: [
//       {
//         to: { id: "101" },
//         types: [
//           { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 2 },
//         ],
//       },
//     ],
//   };

//   try {
//     const apiResponse = await hubspotClient1.crm.deals.basicApi.create(
//       SimplePublicObjectInputForCreate
//     );
//     console.log(JSON.stringify(apiResponse, null, 2));
//   } catch (e) {
//     e.message === "HTTP request failed"
//       ? console.error(JSON.stringify(e.response, null, 2))
//       : console.error(e);
//   }
//   try {
//     const apiResponse = await hubspotClient1.crm.deals.basicApi.create(
//       SimplePublicObjectInputForCreate
//     );
//     console.log(JSON.stringify(apiResponse, null, 2));
//   } catch (e) {
//     e.message === "HTTP request failed"
//       ? console.error(JSON.stringify(e.response, null, 2))
//       : console.error(e);
//   }
// }
// postDeals();

// // const hubspot = require("@hubspot/api-client");
// // require("dotenv").config();
// // async function dealsPost() {
// //   const hubspotClient = new hubspot.Client({
// //     accessToken: process.env.HUBSPOT_TOKEN_1,
// //   });

// //   const properties = {
// //     amount: "1500.00",
// //     closedate: "2019-12-07T16:50:06.678Z",
// //     dealname: "Custom data integrations",
// //     dealstage: "presentationscheduled",
// //     hubspot_owner_id: "910901",
// //     pipeline: "default",
// //   };
// //   const SimplePublicObjectInputForCreate = {
// //     properties,
// //     associations: [
// //       {
// //         to: { id: "101" },
// //         types: [
// //           { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 2 },
// //         ],
// //       },
// //     ],
// //   };

// //   try {
// //     const apiResponse = await hubspotClient.crm.deals.basicApi.create(
// //       SimplePublicObjectInputForCreate
// //     );
// //     console.log(JSON.stringify(apiResponse, null, 2));
// //   } catch (e) {
// //     e.message === "HTTP request failed"
// //       ? console.error(JSON.stringify(e.response, null, 2))
// //       : console.error(e);
// //   }
// // }
// // dealsPost();

const hubspot = require("@hubspot/api-client");
require("dotenv").config();
async function postDeals() {
  const hubspotClient1 = new hubspot.Client({
    accessToken: process.env.HUBSPOT_TOKEN_1,
  });
  const hubspotClient2 = new hubspot.Client({
    accessToken: process.env.HUBSPOT_TOKEN_2,
  });

  const properties = {
    amount: "15000.00",
    closedate: "2019-12-07T16:50:06.678Z",
    dealname: "Test deal",
    dealstage: "presentationscheduled",
    hubspot_owner_id: "447263398",
    pipeline: "default",
  };

  const associations = [
    {
      from: { id: "101", type: "DEAL" },
      to: { id: "CONTACT_ID", type: "CONTACT" },
    },
  ];

  const SimplePublicObjectInputForCreate = { properties, associations };

  try {
    const apiResponse = await hubspotClient1.crm.deals.basicApi.create(
      SimplePublicObjectInputForCreate
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
  try {
    const apiResponse = await hubspotClient2.crm.deals.basicApi.create(
      SimplePublicObjectInputForCreate
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
}
postDeals();
