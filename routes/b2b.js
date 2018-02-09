var request = require('request'),
  oauth_token = "ACCESS_TOKEN",
  url = "https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest"
  auth = "Bearer " + oauth_token;

  request(
    {
      method: 'POST'
      url : url,
      headers : {
        "Authorization" : auth
      },
    json : {
      "Initiator": " ",
      "SecurityCredential": " ",
      "CommandID": " ",
      "SenderIdentifierType": " ",
      "RecieverIdentifierType": " ",
      "Amount": " ",
      "PartyA": " ",
      "PartyB": " ",
      "AccountReference": " ",
      "Remarks": " ",
      "QueueTimeOutURL": "http://your_timeout_url",
      "ResultURL": "http://your_result_url"
    }
  },
    function (error, response, body) {
      // TODO: Use the body object to extract the response
      console.log(body)
    }
  )