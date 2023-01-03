import React, { useState } from "react";
import Styles from "./news.module.scss";
import { Layout, Heading, NewsCard, Button } from "../../../components/shared";

const civilianList = [
  {
    id: 1,
    src: "assets/images/officer.jpg",
    textFirst:
      "FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
  {
    id: 2,
    src: "assets/images/navyBradley.jpg",
    textFirst:
      "FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
  {
    id: 3,
    src: "assets/images/officer.jpg",
    textFirst:
      "FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
];
const defenceList = [
  {
    id: 1,
    src: "assets/images/navyBradley.jpg",
    textFirst:
      "FORCM James R. Song is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
  {
    id: 2,
    src: "assets/images/officer.jpg",
    textFirst:
      "FORCM Jason R. Tribe is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
  {
    id: 3,
    src: "assets/images/navyBradley.jpg",
    textFirst:
      "FORCM Jason R. Raghav is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
];
const stateLocaList = [
  {
    id: 1,
    src: "assets/images/navyBradley.jpg",
    textFirst:
      "FORCM Sachin R. Sand is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
  {
    id: 2,
    src: "assets/images/navyBradley.jpg",
    textFirst:
      "FORCM  Rajnath  Singh is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
  {
    id: 3,
    src: "assets/images/officer.jpg",
    textFirst:
      "FORCM Modi ji Raghav is the new Force Master Chief of Commander Navy Installations Command",
    textThird:
      "FORCM Jason R. Dunn recently became the new Force Master Chief of Commander Navy Installations Command. He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO and Acting LCPO onboard USS FIFE (DD 991) and USS JOHN S. MCCAIN (DDG 56), promoting to Chief at COMSEVENTHFLT onboard the USS BLUE RIDGE (LCC 19). His two shore tours included CSEL at ATG MIDPAC and CSEL at STRATCOM Cruise Missile Support Activity. In 2013, Chief Dunn was selected for Command Master Chief and ",
    isFisrtNewsCard: false,
    isSecondNewsCard: true,
  },
];

const News = () => {
  const [showDefense, setShowDefence] = useState(true);
  const [setCivilian, setShowCivilian] = useState(false);
  const [setstateLocal, setShowstateLocal] = useState(false);

  const showCivilianData = () => {
    setShowCivilian(true);
    setShowDefence(false);
    setShowstateLocal(false);
  };
  const showDefenceData = () => {
    setShowCivilian(false);
    setShowDefence(true);
    setShowstateLocal(false);
  };
  const showStateResultData = () => {
    setShowCivilian(false);
    setShowDefence(false);
    setShowstateLocal(true);
  };

  return (
    <Layout isFederal={false} isProfessional={true}>
      <div className={Styles.mainContainer}>
        <Heading
          className={Styles.newsHead}
          color={"secondary"}
          headingType={"h1"}
        >
          {" "}
          News{" "}
        </Heading>
        <div className={Styles.mainBtn}>
          <Button
          
            btnHandler={showCivilianData}
            btnClass={Styles.btnFirst}
            size={"xlg"}
            // variant={"solidPrimary"}
            variant={(!setCivilian) ? "solidPrimary" : "disabled"}
          >
            Civilian
          </Button>
          <Button
           btnHandler={showDefenceData}
            btnClass={Styles.btnFirst}
            size={"xlg"}
          variant={(showDefense) ?  "disabled" : "solidPrimary" }
          >
            {" "}
            Defense
          </Button>
          <Button
           btnHandler={showStateResultData}
            btnClass={Styles.btnFirst}
            size={"xlg"}
            variant={(!setstateLocal) ? "solidPrimary" : "disabled"}
          >
            State & Local
          </Button>
        </div>
        {/* First Box */}
        {showDefense && (
          <div className={Styles.newsCardBox}>
            {civilianList.map((data, index) => (
              <div key={index} className={`${Styles.cardBox} ${"mb20 "}`}>
                <NewsCard
                  src={data.src}
                  textFirst={data.textFirst}
                  textThird={data.textThird}
                  isFisrtNewsCard={data.isFisrtNewsCard}
                  isSecondNewsCard={data.isSecondNewsCard}
                />
              </div>
            ))}
          </div>
        )}
        {/* First Box End Here  */}
        {/* Second Box */}
        {setCivilian && (
          <div className={Styles.newsCardBox}>
            {defenceList.map((data, index) => (
              <div key={index} className={`${Styles.cardBox} ${"mb20 "}`}>
                <NewsCard
                  src={data.src}
                  textFirst={data.textFirst}
                  textThird={data.textThird}
                  isFisrtNewsCard={data.isFisrtNewsCard}
                  isSecondNewsCard={data.isSecondNewsCard}
                />
              </div>
            ))}
          </div>
        )}
        {/* Second Box End here */}
        {/* Third Box */}
        {setstateLocal && (
          <div className={Styles.newsCardBox}>
            {stateLocaList.map((data, index) => (
              <div key={index} className={`${Styles.cardBox} ${"mb20 "}`}>
                <NewsCard
                  src={data.src}
                  textFirst={data.textFirst}
                  textThird={data.textThird}
                  isFisrtNewsCard={data.isFisrtNewsCard}
                  isSecondNewsCard={data.isSecondNewsCard}
                />
              </div>
            ))}
          </div>
        )}
        {/* Third Box end here */}
      </div>
    </Layout>
  );
};

export default News;

