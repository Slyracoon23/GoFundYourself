import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis } from "react-moralis";

import {
  BodyCon, RandomizingHeader, SubHeader, PeopleBlobs
} from "../components/HomePage/HomePageElements"

import OrangeBlob from "../assets/People/Orange_Blob.png"
import BlueBlob from "../assets/People/Blue_Blob.png"
import PurpleBlob from "../assets/People/Purple_Blob.png"

const wordArray = [
  'NFT project', 'Hackathon scholarship', 'Trip to ETHDenver', 'recording equipment', 'Guitar lessons', 'Word bank', 'economic justice', 'literacy program', 'Animation', 'Dream journal', 'Dream vaction', 'Dream job', 'Dream life', 'Data pipeline', 'Production guild bounty', 'Medical bills', 'School', 'College Tuition', 'Language lessons'
]

function Home () {
  const { 
    authenticate, 
    isAuthenticated, 
    user,
  } = useMoralis();

  const [randomItem, setRandomItem] = useState('');

  const timoutId = setTimeout(() => {
    var randomItem = wordArray[Math.floor(Math.random() * wordArray.length)];
    setRandomItem(randomItem);
  }, 8000);

  if(!isAuthenticated)
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>GoFundYourself</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <BodyCon>
        <RandomizingHeader>
          a home for <span style={{fontWeight: "650"}}>anyone</span> to <span style={{fontWeight: "650"}}>fund their <span style={{textDecoration: "underline"}}>{randomItem}</span></span>
        </RandomizingHeader>
        <SubHeader>
          don&apos;t let your <span style={{fontWeight: "650"}}>dreams</span> be <span style={{fontWeight: "650"}}>web3 memes</span>
        </SubHeader>
        <PeopleBlobs>
          <Image src={OrangeBlob} height="250px" width="250px" alt="Person Blob"/>
          <Image src={BlueBlob} height="250px" width="250px" alt="Person Blob"/>
          <Image src={PurpleBlob} height="250px" width="250px" alt="Person Blob"/>
        </PeopleBlobs>
      </BodyCon>
    </>
  )
  if(isAuthenticated)
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>GoFundYourself</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <h1>Hey you are logged in authenticated!</h1>
    </>
  )
}

export default Home
