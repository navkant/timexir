// import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Redirect = () => {
  const urlHash = window.location.hash.substring(1);

  const hashParams = new URLSearchParams(urlHash);

  useEffect(() => {
    const getUserData = async () => {
      const resp = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${hashParams.get("access_token")}`,
          },
        },
      );
      const userInfo = await resp.json();
    };

    getUserData();
    // ewfbeiuf
    // bweufbo
  });

  return (
    <div>
      <h1>Logging you in</h1>
    </div>
  );
};

export default Redirect;
