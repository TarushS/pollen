"use client";
import CookieChecker from "~/app/_components/AuthInOut";

function WriteHive() {

const user_detail = () => {
  const { sessionExists, username, signOut } = CookieChecker();
  const my_keychain = window.hive_keychain;
  my_keychain.requestPost('anonimbus', 'Hello World!', '## This is a blog post \
  \
  And this is some text', 'Blog', [], {format:'markdown',description:'A blog post',tags:['Blog']},'hello-world', {"author":"anonimbus","permlink":"hi","max_accepted_payout":"100000.000 SBD","percent_steem_dollars":10000,"allow_votes":true,"allow_curation_rewards":true,"extensions":[[0,{"beneficiaries":[{"account":"yabapmatt","weight":1000},{"account":"steemplus-pay","weight":500}]}]]}, (response) => {
  console.log(response);
  });
  }

  return(
    user_detail()
  )
}

export default WriteHive;