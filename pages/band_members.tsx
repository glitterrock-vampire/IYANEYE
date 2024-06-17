import Head from "next/head";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../styles/BandMembers.module.scss";
import Image, { StaticImageData } from "next/image";
import rancePic from "../public/img_gallery/rance.jpg"; 
import philPic from "../public/img_gallery/Phil.jpg";
import boboPic from "../public/img_gallery/bobo.jpg";
import ragePic from "../public/img_gallery/rage.jpg";
import jefferyPic from "../public/img_gallery/jeffery.jpg";
import jacobPic from "../public/img_gallery/jacob.jpg";
import fyffePic from "../public/img_gallery/fyffe.jpg";

interface Member {
  name: string;
  description: string;
  bio: string;
  image: StaticImageData;
}

const BandMembers: React.FC = () => {
  const members: Member[] = [
    {
      name: "Rance ",
      description: "",
      bio: "Rance better know as Rage played with several bands including Ketch A Fyah band Natural Rage band to name a few presently Rage plays with the band Iyaneye of which he is a founding member Rage plays the rhyme guitarist lead and backup vocal.",
      image: rancePic,
    },
    {
      name: "Phil Soltau",
      description: "Vocals and piano.",
      bio: "Philip Soltau, aka Philossaffa, conned out of retirement to join the founding members to help produce and contribute to his first love, conscious music. Keyboard player with 2 consecutively top bands on the circuit in Scotland in the late 70's and early 80's before retiring from the music scene in1986 after signing a 'bad contract' with CSA records (ex Trojan records) with Skanga, the band at the time. Came out of retirement in the 90's to join Kool Vibration, formed by good friend Ash Gupta, to satisfy his love of Reggae Music. By then had studied and become one of the top piano tuner/technicians in Scotland. Returned to Jamaica in 2009 for family reasons and ended up staying, growing the Piano Maintenance business. Joined IYANEYE to work towards a first album of Conscious Reggae Music.",
      image: philPic,
    },
    {
      name: "Bobo Lloyd",
      description: "Piano.",
      bio: "Hugh 'bobo lloyd' Hall, music and me oh such company 🎶. Born and breadth in Montego Bay, Jamaica 🇯🇲, started playing music from a tender age , doing performances in church, tea parties, school', and theater concerts. The flag ship started sailing ⛵️ after the opening of Reggae Sunsplash at Jarrett Park 1979. Three more Sunsplash performances were don, including the backing of the reggae Icons Isreal Vibration in 1981. Future Wind band and the Ambasan band of which the band leadership was the responsibility of Bobo created wave in around Western Jamaica culminating with working as the resident band for the world famous venue popularly known as 'Disco Inferno'. Tours to Spanish Honduras, Cayman and the Bahamas was the next in the musical journey taken whilst the hotel circuit was like a playground with Bobo Lloyd working in most hotels on the North Coast of Jamaica. One year was the time spent in Japan touring that country with his Public Works band in 1993 when Bobo Lloyd and his band played reggae music awakening the Japanese people to the Jamacian cultur. The Era of dancehall was to follow with Bobo Lloyd joining forces with Jackie Mittoo both on keyboards accompanying Sugar Minott in the recording Studios of Youthman Promotions and on tour. The rest is left to come since music alone shall live, and Bobo plays on with the IYANEYE band.",
      image: boboPic,
    },
    {
      name: "Rage",
      description: "Bass guitar.",
      bio: "Rage known for their exceptional guitar skills and has been a part of the IYANEYE band, contributing to their unique sound.",

      image: ragePic,
    },
    {
      name: "Geoffrey",
      description: "Congo Drums/Precussions",
      bio: "Geoffrey Phillips aka Naphtali played with several bands (Black Safiyah, Natural Rage). Now a founding member of IYANEYE, plays percussion and sings back up vocals.",
      image: jefferyPic,
    },
    {
      name: "Jacob",
      description: "Bass guitar.",
      bio: "Jacob plays bass guitar and has been a part of various musical journeys with the IYANEYE band.",
      image: jacobPic,
    },
    {
      name: "Fyffe",
      description: "Percussion",
      bio: "Sylvester Fyffe is a bass/rhythm guitar player/ song writer/ singer etc. I started out singing with the first band in the early 1980s with the Dysastic band. Then with Pops and the crew as a bass player at Tuff Gong. Leroy Anderson, Rita Marley's father was the founder of that band. Then next was the Time and Space band also as a bassist. We were one of the top ten finalists in the 2001 festival song competition. I've been here and there doing what I like best as I continue moving forward as a musician the other band would be the Rotation band. We did a number of gigs in and around the corporate area that was well received the different audiences. The journey still continues.",

      image: fyffePic,
    }
  ];

  return (
    <>
      <Head>
        <title>Band Members</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Meet the Band</h1>
        <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
          {members.map((member, index) => (
            <div key={index} className={styles.member}>
              <div className={styles.image_container}>
                {member.image && (
                  <Image src={member.image} alt={member.name} className={styles.image} layout="responsive" />
                )}
              </div>
              <h3 className={styles.member_name}>{member.name}</h3>
              <p className={styles.member_description}>{member.description}</p>
              <div className={styles.text_container}>
                <p className={styles.member_bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default BandMembers;
