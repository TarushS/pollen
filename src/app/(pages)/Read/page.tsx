"use client";
import CookieChecker from "~/app/_components/AuthInOut";

function ReadHive() {

const user_detail = () => {
  const { sessionExists, username, signOut } = CookieChecker();
  const my_keychain = window.hive_keychain;
  my_keychain.requestVerifyKey(username, 'bro idk', 'Posting', (response) => {
    if (response.success === true) {
      const decodedMessage = response.result;
      console.log(decodedMessage)
    }
    console.log(response.result)
  });
  }

  return(
    user_detail()
  )
}

export default ReadHive;