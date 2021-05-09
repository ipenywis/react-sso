import React, { useEffect } from "react";

export function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return <div>Thanks for loggin in!</div>;
}
