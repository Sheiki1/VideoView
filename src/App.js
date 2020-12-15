import React, {useState} from "react"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import People from './components/people';
import Chat from './components/chat';
import Settings from './components/settings';

function App() {

  const[backgroundM, setBackgroundM] = useState("#E7303D");
  const[countM, setCountM] = useState(0);

  const setStyleM = (backgroundM, countM) => {
    setCountM(countM +1)
    setBackgroundM(backgroundM = countM % 2 ==1 ? "#E7303D":"#25C06D");
  }

  const backgroundBtnM = {
    backgroundColor:(backgroundM)
  }
  
  const[backgroundV, setBackgroundV] = useState("#E7303D");
  const[countV, setCountV] = useState(0);

  const setStyleV = (backgroundV, countV) => {
    setCountV(countV +1)
    setBackgroundV(backgroundV= countV % 2 ==1 ? "#E7303D":"#25C06D");
  }

  const backgroundBtnV = {
    backgroundColor:(backgroundV)
  }

  const[backgroundS, setBackgroundS] = useState("#F9C50B");
  const[countS, setCountS] = useState(0);

  const setStyleS = (backgroundS, countS) => {
    setCountS(countS +1)
    setBackgroundS(backgroundS = countS % 2 ==1 ? "#F9C50B":"#25C06D");
  }

  const backgroundBtnS = {
    backgroundColor:(backgroundS)
  }

  const[backgroundF, setBackgroundF] = useState("#E7303D");

  const[countF, setCountF] = useState(0);

  const setStyleF = (backgroundF, countF) => {
    setCountF(countF +1)
    setBackgroundF(backgroundF = countF % 2 ==1 ? "#E7303D":"#25C06D");
  }

  const backgroundBtnF = {
    backgroundColor:(backgroundF)
  }
  return (
    <div className="App">
    <Router>
      <div className="svgLogo">
        <svg width="250" height="50" viewBox="0 0 435 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M109.5 54.56C106.94 54.56 104.513 54.3467 102.22 53.92C99.9533 53.4667 98.2067 52.96 96.98 52.4V44.48H105.78C105.78 45.3067 105.967 45.9067 106.34 46.28C106.713 46.6533 107.393 46.84 108.38 46.84C109.207 46.84 109.793 46.72 110.14 46.48C110.513 46.2133 110.7 45.8267 110.7 45.32C110.7 44.8933 110.527 44.5333 110.18 44.24C109.833 43.92 109.233 43.6 108.38 43.28L104.94 42.08C101.98 40.96 99.8467 39.64 98.54 38.12C97.26 36.6 96.62 34.5467 96.62 31.96C96.62 28.8133 97.6467 26.4267 99.7 24.8C101.78 23.1467 105.233 22.32 110.06 22.32C112.38 22.32 114.553 22.56 116.58 23.04C118.633 23.4933 120.287 24.1067 121.54 24.88V32.04H113.54C113.54 30.7067 112.713 30.04 111.06 30.04C110.26 30.04 109.687 30.1467 109.34 30.36C109.02 30.5467 108.86 30.8933 108.86 31.4C108.86 31.8533 109.047 32.2133 109.42 32.48C109.82 32.7467 110.46 33.0267 111.34 33.32L114.82 34.52C117.647 35.48 119.7 36.7333 120.98 38.28C122.287 39.8 122.94 41.8 122.94 44.28C122.94 47.6667 121.793 50.2267 119.5 51.96C117.233 53.6933 113.9 54.56 109.5 54.56ZM153.293 32.56H146.413V29.44H143.853V47.44H146.653V54H129.853V47.44H132.653V29.44H130.093V32.56H123.213V22.88H153.293V32.56ZM154.064 47.44H156.064V29.44H154.064V22.88H172.424C175.864 22.88 178.491 23.5867 180.304 25C182.117 26.4133 183.024 28.7067 183.024 31.88C183.024 33.6667 182.664 35.2133 181.944 36.52C181.224 37.8267 180.197 38.7333 178.864 39.24L178.904 39.64C181.464 40.04 182.744 41.6133 182.744 44.36V47.44H184.624V54H171.944V44.6C171.944 43.56 171.784 42.7733 171.464 42.24C171.171 41.7067 170.691 41.3467 170.024 41.16C169.384 40.9733 168.464 40.88 167.264 40.88V47.44H169.904V54H154.064V47.44ZM169.424 36C170.197 36 170.771 35.8 171.144 35.4C171.544 34.9733 171.744 34.32 171.744 33.44V32C171.744 31.12 171.544 30.48 171.144 30.08C170.771 29.6533 170.197 29.44 169.424 29.44H167.264V36H169.424ZM185.456 54V47.44H187.456V29.44H185.456V22.88H200.656V29.44H198.656V47.44H200.656V54H185.456ZM201.653 47.44H203.653V29.44H201.653V22.88H219.213C222.653 22.88 225.28 23.6267 227.093 25.12C228.906 26.5867 229.813 28.9733 229.813 32.28C229.813 35.5867 228.906 37.9867 227.093 39.48C225.28 40.9467 222.653 41.68 219.213 41.68H214.853V47.44H218.693V54H201.653V47.44ZM216.213 36C217.76 36 218.533 35.1467 218.533 33.44V32C218.533 31.12 218.333 30.48 217.933 30.08C217.56 29.6533 216.986 29.44 216.213 29.44H214.853V36H216.213ZM230.584 54V47.44H232.584V29.44H230.584V22.88H257.584V34.96H248.624V29.44H243.784V35.76H247.304V40.32H243.784V47.44H248.624V41.12H257.584V54H230.584ZM258.5 47.44H260.5V29.48H258.5V22.88H274.74C279.193 22.88 282.727 24.1067 285.34 26.56C287.98 28.9867 289.3 32.9467 289.3 38.44C289.3 43.9333 287.98 47.9067 285.34 50.36C282.727 52.7867 279.193 54 274.74 54H258.5V47.44ZM274.02 47.44C274.927 47.44 275.607 47.2 276.06 46.72C276.513 46.24 276.74 45.4933 276.74 44.48V32.4C276.74 30.4267 275.833 29.44 274.02 29.44H271.7V47.44H274.02ZM302.448 54.56C299.888 54.56 297.462 54.3467 295.168 53.92C292.902 53.4667 291.155 52.96 289.928 52.4V44.48H298.728C298.728 45.3067 298.915 45.9067 299.288 46.28C299.662 46.6533 300.342 46.84 301.328 46.84C302.155 46.84 302.742 46.72 303.088 46.48C303.462 46.2133 303.648 45.8267 303.648 45.32C303.648 44.8933 303.475 44.5333 303.128 44.24C302.782 43.92 302.182 43.6 301.328 43.28L297.888 42.08C294.928 40.96 292.795 39.64 291.488 38.12C290.208 36.6 289.568 34.5467 289.568 31.96C289.568 28.8133 290.595 26.4267 292.648 24.8C294.728 23.1467 298.182 22.32 303.008 22.32C305.328 22.32 307.502 22.56 309.528 23.04C311.582 23.4933 313.235 24.1067 314.488 24.88V32.04H306.488C306.488 30.7067 305.662 30.04 304.008 30.04C303.208 30.04 302.635 30.1467 302.288 30.36C301.968 30.5467 301.808 30.8933 301.808 31.4C301.808 31.8533 301.995 32.2133 302.368 32.48C302.768 32.7467 303.408 33.0267 304.288 33.32L307.768 34.52C310.595 35.48 312.648 36.7333 313.928 38.28C315.235 39.8 315.888 41.8 315.888 44.28C315.888 47.6667 314.742 50.2267 312.448 51.96C310.182 53.6933 306.848 54.56 302.448 54.56ZM331.442 54.56C326.562 54.56 322.788 53.28 320.122 50.72C317.482 48.16 316.162 44.0667 316.162 38.44C316.162 32.8133 317.482 28.72 320.122 26.16C322.788 23.6 326.562 22.32 331.442 22.32C336.322 22.32 340.082 23.6 342.722 26.16C345.388 28.72 346.722 32.8133 346.722 38.44C346.722 44.0667 345.388 48.16 342.722 50.72C340.082 53.28 336.322 54.56 331.442 54.56ZM331.442 47.44C332.348 47.44 333.028 47.2 333.482 46.72C333.935 46.24 334.162 45.4933 334.162 44.48V32.4C334.162 31.3867 333.935 30.64 333.482 30.16C333.028 29.68 332.348 29.44 331.442 29.44C330.535 29.44 329.855 29.68 329.402 30.16C328.948 30.64 328.722 31.3867 328.722 32.4V44.48C328.722 45.52 328.948 46.28 329.402 46.76C329.855 47.2133 330.535 47.44 331.442 47.44ZM363.001 54.56C357.961 54.56 354.068 53.28 351.321 50.72C348.601 48.16 347.241 44.0667 347.241 38.44C347.241 27.6933 352.468 22.32 362.921 22.32C365.455 22.32 367.801 22.6267 369.961 23.24C372.148 23.8533 373.775 24.5333 374.841 25.28V35.28H365.241V32.4C365.241 31.3867 365.015 30.64 364.561 30.16C364.108 29.68 363.428 29.44 362.521 29.44C361.615 29.44 360.935 29.68 360.481 30.16C360.028 30.64 359.801 31.3867 359.801 32.4V44.48C359.801 45.4933 360.028 46.24 360.481 46.72C360.935 47.2 361.615 47.44 362.521 47.44C363.428 47.44 364.108 47.2 364.561 46.72C365.015 46.24 365.241 45.4933 365.241 44.48V41.24H374.841V51.6C373.748 52.3467 372.121 53.0267 369.961 53.64C367.828 54.2533 365.508 54.56 363.001 54.56ZM405.708 47.44H407.708V54H396.788L390.788 41.6L388.948 43.12V47.44H390.868V54H375.748V47.44H377.748V29.44H375.748V22.88H390.868V29.44H388.948V34.72L395.148 29.44H392.628V22.88H407.508V29.44H405.508L398.828 34.96L405.708 47.44ZM420.947 54.56C418.387 54.56 415.96 54.3467 413.667 53.92C411.4 53.4667 409.654 52.96 408.427 52.4V44.48H417.227C417.227 45.3067 417.414 45.9067 417.787 46.28C418.16 46.6533 418.84 46.84 419.827 46.84C420.654 46.84 421.24 46.72 421.587 46.48C421.96 46.2133 422.147 45.8267 422.147 45.32C422.147 44.8933 421.974 44.5333 421.627 44.24C421.28 43.92 420.68 43.6 419.827 43.28L416.387 42.08C413.427 40.96 411.294 39.64 409.987 38.12C408.707 36.6 408.067 34.5467 408.067 31.96C408.067 28.8133 409.094 26.4267 411.147 24.8C413.227 23.1467 416.68 22.32 421.507 22.32C423.827 22.32 426 22.56 428.027 23.04C430.08 23.4933 431.734 24.1067 432.987 24.88V32.04H424.987C424.987 30.7067 424.16 30.04 422.507 30.04C421.707 30.04 421.134 30.1467 420.787 30.36C420.467 30.5467 420.307 30.8933 420.307 31.4C420.307 31.8533 420.494 32.2133 420.867 32.48C421.267 32.7467 421.907 33.0267 422.787 33.32L426.267 34.52C429.094 35.48 431.147 36.7333 432.427 38.28C433.734 39.8 434.387 41.8 434.387 44.28C434.387 47.6667 433.24 50.2267 430.947 51.96C428.68 53.6933 425.347 54.56 420.947 54.56Z" fill="white"/>
            <g clip-path="url(#clip0)">
          <path d="M61.6647 10.1872H51.8409V4.04297C51.8409 1.81363 50.0273 0 47.798 0H28.5593C26.3301 0 24.5163 1.81363 24.5163 4.04297V36.2603L16.2803 44.4963C13.7087 47.0677 12.2925 50.4986 12.2925 54.157C12.2925 57.8152 13.7088 61.2461 16.2803 63.8175C18.8428 66.3802 22.3573 67.8038 25.9637 67.8037C26.173 67.8037 26.3829 67.7971 26.5928 67.7874C27.1827 70.0667 28.3652 72.2229 30.147 74.0047C32.8103 76.6682 36.309 78 39.8076 78C43.3061 78 46.8048 76.6683 49.4683 74.0047L61.7197 61.7532C64.1764 59.2964 65.5877 56.0219 65.6974 52.5269C65.7028 52.4521 65.7073 52.3616 65.7073 52.2599V14.23C65.7075 12.0008 63.8938 10.1872 61.6647 10.1872ZM29.0862 18.8017H38.3828V23.6517H29.0862V18.8017ZM42.9528 28.9887H61.1376V33.8389H42.9528V28.9887ZM61.1376 24.4188H42.9528V14.757H61.1376V24.4188ZM47.2711 4.56987V10.1872H42.4258C40.1964 10.1872 38.3828 12.0008 38.3828 14.23V14.2318H29.0862V4.56987H47.2711ZM30.1468 54.6833C27.7661 57.064 26.4527 60.1121 26.2 63.2309C23.712 63.297 21.2717 62.3462 19.5117 60.5862C17.8033 58.8777 16.8624 56.5944 16.8624 54.1568C16.8624 51.7194 17.8033 49.4361 19.5117 47.7276L28.417 38.8223C28.8455 38.3938 29.0863 37.8127 29.0863 37.2067V28.2216H38.383V46.4473L30.1468 54.6833ZM61.131 52.3435C61.0674 54.6872 60.1289 56.8814 58.4883 58.522L46.2369 70.7735C42.6918 74.3185 36.9233 74.3185 33.3782 70.7735C29.833 67.2283 29.833 61.4598 33.3782 57.9148L42.2835 49.0095C42.712 48.581 42.9528 47.9998 42.9528 47.3939V38.4089H61.1376V52.2225C61.1344 52.2626 61.1321 52.303 61.131 52.3435Z" fill="white"/>
            </g>
          <defs>
            <clipPath id="clip0">
              <rect width="78" height="78" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="video">
        <div className="btnsVideo">

          <button 
          style={backgroundBtnM}
          onClick={()=> setStyleM(backgroundM, countM)} 
          
          className="micro">
            <svg width="30" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.4997 33.9223C27.0914 33.9223 29.3093 32.9996 31.1545 31.155C32.9995 29.3105 33.9221 27.0914 33.9221 24.5V9.42334C33.9221 6.83185 33.0002 4.61374 31.1545 2.76826C29.3093 0.923201 27.0914 0 24.4997 0C21.9083 0 19.6901 0.923201 17.8447 2.76826C15.9992 4.61343 15.0767 6.83185 15.0767 9.42334V24.5C15.0767 27.0913 15.9997 29.3105 17.8447 31.155C19.6898 32.9996 21.9083 33.9223 24.4997 33.9223Z" fill="white"/>
              <path d="M40.9012 19.4057C40.5293 19.0326 40.0866 18.8461 39.5762 18.8461C39.0663 18.8461 38.6246 19.0326 38.2512 19.4057C37.8785 19.7787 37.692 20.2203 37.692 20.7305V24.5C37.692 28.1319 36.4009 31.2384 33.8194 33.8199C31.2386 36.4014 28.1317 37.6922 24.4997 37.6922C20.8677 37.6922 17.7612 36.4014 15.1795 33.8199C12.5981 31.2391 11.3075 28.132 11.3075 24.5V20.7305C11.3075 20.2203 11.1209 19.7787 10.7481 19.4057C10.375 19.0326 9.93381 18.8461 9.42306 18.8461C8.91232 18.8461 8.47057 19.0326 8.09772 19.4057C7.72456 19.7787 7.53809 20.2203 7.53809 20.7305V24.5C7.53809 28.8385 8.98616 32.6128 11.8815 35.8222C14.7769 39.0317 18.3547 40.872 22.615 41.3428V45.2303H15.0767C14.5662 45.2303 14.1246 45.4171 13.7516 45.7901C13.3786 46.1629 13.192 46.6047 13.192 47.1152C13.192 47.6248 13.3786 48.0674 13.7516 48.4402C14.1246 48.8129 14.5662 49 15.0767 49H33.9222C34.4325 49 34.8748 48.813 35.2472 48.4402C35.6207 48.0675 35.8074 47.6249 35.8074 47.1152C35.8074 46.6048 35.6207 46.163 35.2472 45.7901C34.8749 45.4171 34.4326 45.2303 33.9222 45.2303H26.3848V41.3428C30.6443 40.872 34.2218 39.0317 37.1175 35.8222C40.0133 32.6128 41.4618 28.8385 41.4618 24.5V20.7305C41.4618 20.2204 41.2748 19.7791 40.9012 19.4057Z" fill="white"/>
            </svg>
          </button>

          <button 
          style={backgroundBtnV}
          onClick={()=> setStyleV(backgroundV, countV)}>
            <svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.5853 9.69312H5.14223C2.314 9.69312 0 12.0071 0 14.8353V32.1647C0 34.9929 2.314 37.3069 5.14223 37.3069H26.5853C29.4136 37.3069 31.7276 34.9929 31.7276 32.1647V14.8353C31.7276 11.9557 29.4136 9.69312 26.5853 9.69312Z" fill="white"/>
              <path d="M43.1947 12.5213C42.8861 12.5727 42.5776 12.727 42.3205 12.8813L34.2986 17.5093V29.4392L42.3719 34.0673C43.8631 34.9414 45.7143 34.4272 46.5885 32.936C46.8456 32.4732 46.9999 31.9589 46.9999 31.3933V15.5038C46.9999 13.6012 45.2001 12.0585 43.1947 12.5213Z" fill="white"/>
            </svg>
          </button>

          <button 
          style={backgroundBtnS}
          onClick={()=> setStyleS(backgroundS, countS)}>
            <svg width="30" height="30" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.1667 36C41.3209 36 43.0638 34.2 43.0638 32L43.0833 12C43.0833 9.78003 41.3208 8 39.1666 8H7.8333C5.65955 8 3.91661 9.78003 3.91661 12V32C3.9167 34.2 5.65955 36 7.8333 36H0V40.0001H47V36H39.1667ZM25.4583 28.94V24.56C20.0141 24.56 16.4304 26.26 13.7083 30C14.805 24.66 17.8404 19.34 25.4583 18.26V14L33.2916 21.46L25.4583 28.94Z" fill="white"/>
            </svg>
          </button>

          <button 
          style={backgroundBtnF}
          onClick={()=> setStyleF(backgroundF, countF)}>
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.3158 22.3863C29.2185 22.3863 27.1642 22.0589 25.2173 21.4164C24.267 21.0889 23.188 21.3413 22.5635 21.9783L18.7036 24.8934C14.2746 22.5295 11.4401 19.6968 9.10846 15.3L11.9447 11.5314C12.6587 10.8174 12.9147 9.7723 12.6087 8.79348C11.9609 6.83401 11.6316 4.7779 11.6316 2.68421C11.6316 1.20429 10.4273 0 8.9474 0H2.68421C1.20429 0 0 1.20429 0 2.68421C0 19.9508 14.0492 34 31.3158 34C32.7957 34 34 32.7957 34 31.3158V25.0705C34 23.5906 32.7957 22.3863 31.3158 22.3863Z" fill="white"/>
            </svg>
          </button>

        </div>
      </div>

      <div className="btnsOpt">
        <button className="people"><Link to="/People"><p>People</p></Link></button>
        <button className="chat"><Link to="/Chat"><p>Chat</p></Link></button>
        <button className="settings"><Link to="/Settings"><p>Settings</p></Link></button>
      </div>
      <Switch>
        <Route path="/People"><People/></Route>
        <Route path="/Chat"><Chat/></Route>
        <Route path="/Settings"><Settings/></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
