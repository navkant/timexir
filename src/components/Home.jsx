import Container from "@mui/material/Container";
import { useEffect } from "react";

const Signin = () => {
  async function oAuthSignIN() {
    const OAUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
    const CLIENT_ID = "";
    const REDIRECT_URI = "http://127.0.0.1:1234";
    const RESPONSE_TYPE = "token";
    const SCOPE =
      "https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/userinfo.email";
    const STATE = "pass-throught value";

    const response = await fetch(
      `${OAUTH_ENDPOINT}?scope=${SCOPE}&include_granted_scopes=true&response_type=${RESPONSE_TYPE}&state=${STATE}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`,
    );
    console.log("resp: ", response);
  }

  /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */
  function newoauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
      client_id:
        "885602923697-ecpqclobua71m1pogtvc7p4qrplngj2f.apps.googleusercontent.com",
      redirect_uri: "http://127.0.0.1:1234/redirect",
      response_type: "token",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
      include_granted_scopes: "true",
      state: "pass-through value",
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  useEffect(() => {
    // oAuthSignIN();
    newoauthSignIn();
  });

  return (
    <Container>
      <h1>Sign In</h1>
    </Container>
  );
};

export default Signin;
