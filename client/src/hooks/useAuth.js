import { useState, useEffect } from "react";

const useAuth = () => {
  const [status, setStatus] = useState();

  const storedToken = sessionStorage.getItem("access_token");
  if (storedToken != null) {
    setStatus(true);
  } else {
    setStatus(false);
  }
  console.log(status);
  return status;
};

export default useAuth;
