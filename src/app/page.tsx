import { LoginProvider } from "@/context/login/login";
import HeaderSec from "@/components/HeaderSec";


export default function Home() {
  return (
    <>
      <LoginProvider>
        <HeaderSec />
      </LoginProvider>
    </>
  );
}
