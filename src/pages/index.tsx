import Header from "../components/header";
import WelcomePage from "../components/home";

const loggedHomePage = false;

export default function HomePage(): JSX.Element {
  return (
    <>
      {loggedHomePage ? 
          (
            <>
              <Header />
              <div>We are going to create a new experience</div>
            </>
          )  : (
          <WelcomePage />
        )
      }
    </>
    
  )
}