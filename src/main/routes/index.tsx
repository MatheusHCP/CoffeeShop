import { SignIn } from "./sign-in";
import { SignedIn } from "./signed-in";

export function Routes(){

  const logged = true;

  return logged ? <SignedIn/> : <SignIn/>


}