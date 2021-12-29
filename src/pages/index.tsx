import { useState } from "react";
import WelcomePage from "../components/home";

export default function HomePage(): JSX.Element {
  const [loggedUser, setLoggedUser] = useState(false);
  return (
    <>
      {loggedUser ? 
          (
            <>
              <div>We are going to create a new experience</div>
            </>
          )  : (
          <WelcomePage />
        )
      }
    </>
    
  )
}