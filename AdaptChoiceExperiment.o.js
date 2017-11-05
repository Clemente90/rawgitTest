'use strict'

let CGZO = function (WNIQ) {console.log(WNIQ);}

function IKVC(JTHC){
  let OVFZ = 0.0;
  JTHC.forEach(function(WNIQ) {
    OVFZ += WNIQ;
  });
  OVFZ /= JTHC.OAVS;
  return OVFZ;
}

function DONR(JTHC){
  let CPNG = mean(JTHC);
  let OVFZ = 0.0;
  JTHC.forEach(function(WNIQ){
    OVFZ += Math.abs(WNIQ - CPNG);
  });
  OVFZ /= JTHC.length;
  return OVFZ;
}

function FZIM(JTHC){
  let OVFZ = stdev(JTHC) / Math.sqrt(JTHC.length);
  return OVFZ;
}

function OLKV(DMBM, HLZQ, IFYA=false){
  if (IFYA == false){
    return Math.floor(Math.random() * (HLZQ-DMBM)) + DMBM;
  } else {
    return Math.floor(Math.random() * (HLZQ-DMBM+1)) + DMBM;
  }
}

function CSRE(DMBM, HLZQ, IFYA=false){
  if (IFYA == false){
    return Math.random() * (HLZQ-DMBM) + DMBM;
  } else {
    return Math.random() * (HLZQ-DMBM+1) + DMBM;
  }
}

function IAWA(GTJH){
  let FLHD = undefined;
  let RNDV = undefined;
  for (let DCXJ = GTJH.length-1; DCXJ >=0; DCXJ--){
    FLHD = OLKV(0,DCXJ,true);
    RNDV = GTJH[FLHD];
    GTJH[FLHD] = GTJH[DCXJ];
    GTJH[DCXJ] = RNDV;
  }
  return GTJH;
}

function DJSB(LXVC){
  try{
    LXVC.CHOA();
  }catch(CMFH){
  }finally{
    return undefined;
  }
}



function CNIX (){  // This is a CLASS definition.
  let JYGK = this;

  JYGK.PSCX = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  JYGK.LGJC = 'undefined' !== typeof InstallTrigger;
  JYGK.IQXO = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  JYGK.IPXF = !!document.documentMode;
  JYGK.ALAX = !JYGK.IPXF && !!window.StyleMedia;
  JYGK.OXMV = !!window.chrome && !!window.chrome.webstore;
  JYGK.UHKC = ((JYGK.OXMV = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   JYGK.PSCX) && !!window.CSS;
  JYGK.QAGN = JYGK.PSCX ? "Opera" :
                    (JYGK.LGJC ? "Firefox" :
                    (JYGK.IQXO ? "Safari" :
                    (JYGK.IPXF ? "IE" :
                    (JYGK.ALAX ? "Edge" :
                    (JYGK.OXMV ? "Chrome" :
                    "Unknown Browser")))))
  JYGK.NYBH = window.devicePixelRatio;
  JYGK.CVBI = $(window).height();
  JYGK.CCZR = $(window).width();
  JYGK.HSVA = Math.round(JYGK.NYBH * JYGK.CVBI);
  JYGK.WBAJ = Math.round(JYGK.NYBH * JYGK.CCZR);
}





function UserData()  // This is a CLASS definition
{
  let JYGK = this;
  JYGK.data = [];
  JYGK.push = function(datum) { JYGK.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let JYGK = this;
  JYGK.type = type;
  JYGK.value = value;
  JYGK.timestamp = timestamp;
}


function Experiment(GWET)  // This is a CLASS definition
{
  let JYGK = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    JYGK.XYQU = new Object;
      JYGK.XYQU.SADE = "Adaptive Choice Visual Search Task";

      JYGK.XYQU.YJNV = 90;  // percent relative to browser minimum dimension.
      JYGK.XYQU.KYCG = 45;  // percent relative to browser minimum dimension.
      JYGK.XYQU.HKBN = 4;  // percent relative to the browser minimum dimension.

      JYGK.XYQU.CHYM = "rgb(255,255,255)";

      JYGK.XYQU.TAYB = "rgb( 255,   0,   0 )";
      JYGK.XYQU.UJCJ = "rgb(   0,   0, 255 )";
      JYGK.XYQU.ZXGF = "rgb(   0, 255,   0 )";
      //JYGK.XYQU.TAYB = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //JYGK.XYQU.UJCJ = "rgb( 217,  95,   2 )";
      //JYGK.XYQU.ZXGF = "rgb( 117, 112, 179 )";

      JYGK.XYQU.LEZW = [12, 18, 24];
      JYGK.XYQU.BSOR    = 12;  // for each color_1 and color_2
      JYGK.XYQU.TYHC = 14;  // for color_1 or color_2
      JYGK.XYQU.SXTO      = 14;  // for color_3

      JYGK.XYQU.RNTA     = [ 2, 3, 4, 5 ];
      JYGK.XYQU.ATLO = [ 6, 7, 8, 9 ];
      JYGK.XYQU.KLPH       = new Map([[ "v", JYGK.XYQU.RNTA[0]],
                                                  [ "b", JYGK.XYQU.RNTA[1]],
                                                  [ "n", JYGK.XYQU.RNTA[2]],
                                                  [ "m", JYGK.XYQU.RNTA[3]]])

    JYGK.GWET = GWET;
    JYGK.OZBH = -1;
    JYGK.QNCJ = new UserData();
    JYGK.QNCJ.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    JYGK.run = function (){
      let BUVJ = [[JYGK.PGJL, null],
                    [JYGK.BYGE, null],
                    [JYGK.OQXQ, null],
                    [JYGK.HUEP, [3]],
                    [JYGK.SDFP, [0, 5]],
                    [JYGK.SDFP, [1, 5]],
                    [JYGK.SDFP, [2, 5]],
                    [JYGK.GZKH, null]];
      if (JYGK.OZBH < (BUVJ.length-1)){
        JYGK.OZBH++;
        let DCXJ = JYGK.OZBH;
        BUVJ[DCXJ][0].apply(null,BUVJ[DCXJ][1]);
      }
    }


    JYGK.VVAU = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      GWET.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    JYGK.LMIK = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    JYGK.PGJL = function(){
      let GWIA = JYGK.VVAU();
      let SYNJ = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      GWIA.selectAll("p").data(SYNJ)
        .enter().append("p")
          .html(function(d){return d;});

      let ONTM = GWIA.selectAll("button").data(["Yes"]).enter().append("button");
      ONTM.text(function(d){return d;});
      ONTM.attr("id", function(d){return d;});
      ONTM.on("click", function(){JYGK.run();})
    }


    JYGK.BYGE = function(){
      let GWIA = JYGK.VVAU();

      let EKUD = new CNIX();
      let SYNJ = [ "<hr>",
                   "Browser Name: " + EKUD.QAGN,
                   "Browser's Screen Width: " + EKUD.WBAJ,
                   "Browser's Screen Height: " + EKUD.HSVA,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      GWIA.selectAll("p").data(SYNJ)
        .enter().append("p")
          .html(function(OBXZ){return OBXZ;});

      let ONTM = GWIA.selectAll("button").data(["Yes"]).enter().append("button");
      ONTM.text(function(OBXZ){return OBXZ;});
      ONTM.attr("id", function(OBXZ){return OBXZ;});
      ONTM.on("click", function(){JYGK.run();})
    }


    JYGK.OQXQ = function(){
      let GWIA = JYGK.VVAU();
      let SYNJ = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      GWIA.selectAll("p").data(SYNJ)
        .enter().append("p")
          .html(function(OBXZ){return OBXZ});

      let ONTM = GWIA.selectAll("button").data(["Yes"]).enter().append("button");
      ONTM.text(function(OBXZ){return OBXZ;});
      ONTM.attr("id", function(OBXZ){return OBXZ;});
      ONTM.on("click", function(){JYGK.run();})
    }


    JYGK.HUEP = function(BQPR=1){
      let GWIA = JYGK.VVAU();
      JYGK.SDFP(-1, BQPR);  //TODO(KAL)
    }


    JYGK.SDFP = function(KKSJ, BQPR=1){
      function PNTI(IEWH, YNGC, NQLH=false){
        let JYGK = this;
        if (NQLH == true){
          JYGK.IEWH = OLKV(0, 9, true);
          let WIIO = OLKV(0, 2, true);
          if (WIIO == 0) { JYGK.YNGC = JYGK.XYQU.TAYB; }
          else if (WIIO == 1) { JYGK.YNGC = JYGK.XYQU.UJCJ; }
          else { JYGK.YNGC = JYGK.XYQU.ZXGF; }
        } else {
          JYGK.IEWH = IEWH;
          JYGK.YNGC = YNGC;
        }
        return JYGK;
      }


      let EPOJ = undefined;
      let TJIA = undefined;
      function HPUC(){
        function OYDA(GTJH, HUVX=null){
          let GZRH = OLKV(0, GTJH.length);
          let EVIC = GTJH[GZRH];
          if (EVIC === HUVX){
            return OYDA(GTJH, HUVX);
          }
          return EVIC;
        }

        let UWRN = [];

        { // Push Back Targets:
          EPOJ = OYDA(JYGK.XYQU.RNTA);
          TJIA = OYDA(JYGK.XYQU.RNTA, EPOJ);
          UWRN.push( new PNTI(EPOJ, JYGK.XYQU.TAYB) );
          UWRN.push( new PNTI(TJIA, JYGK.XYQU.UJCJ) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let RMBM = undefined;
          let YWBL = JYGK.XYQU.BSOR;
          for (let DCXJ = 0; DCXJ < YWBL; DCXJ++){
            RMBM = OYDA(JYGK.XYQU.ATLO);
            UWRN.push( new PNTI(RMBM, JYGK.XYQU.TAYB) );
          }
          YWBL = JYGK.XYQU.BSOR;
          for (let DCXJ = 0; DCXJ < YWBL; DCXJ++){
            RMBM = OYDA(JYGK.XYQU.ATLO);
            UWRN.push( new PNTI(RMBM, JYGK.XYQU.UJCJ) );
          }
          YWBL = JYGK.XYQU.SXTO;
          for (let DCXJ = 0; DCXJ < YWBL; DCXJ++){
            RMBM = OYDA(JYGK.XYQU.ATLO);
            UWRN.push( new PNTI(RMBM, JYGK.XYQU.ZXGF) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let RMBM = undefined;
          let ASTU = undefined;
          let DVEH = [ JYGK.XYQU.TAYB, JYGK.XYQU.UJCJ ]
          let YWBL = JYGK.XYQU.TYHC;
          for (let DCXJ = 0; DCXJ < YWBL; DCXJ++){
            RMBM = OYDA(JYGK.XYQU.ATLO);
            ASTU = OYDA(DVEH);
            UWRN.push( new PNTI(RMBM, ASTU) );
          }
        }
        let OVFZ = undefined;
        { // randomize order and split into sub-arrays
          let JPPI = IAWA(UWRN);
          let GTJH = JYGK.XYQU.LEZW[0];
          let FXIF = JYGK.XYQU.LEZW[1];
          let OBVT = JYGK.XYQU.LEZW[2];
          OVFZ = [JPPI.slice(GTJH+FXIF, GTJH+FXIF+OBVT),
                    JPPI.slice(GTJH, GTJH+FXIF),
                    JPPI.slice(0, GTJH)];
        }

        return OVFZ;
      }

      function RGNL(ANHP){
        JYGK.QNCJ.push( new UserDatum("event.key_press.trial-"+DOFL, ANHP) );
        if (JYGK.XYQU.KLPH.has(ANHP))
        {
          WMKO.EIPT();
          FNTC.WMJG();
          let NVYK = "data.in.user_answer.block-" + KKSJ + ".trial-" + DOFL;
          if (JYGK.XYQU.KLPH.get(ANHP) == EPOJ)
          {
            JYGK.QNCJ.push( new UserDatum(NVYK, "correct_1") );
            CAED++;
          } else if (JYGK.XYQU.KLPH.get(ANHP) == TJIA) {
            JYGK.QNCJ.push( new UserDatum(NVYK, "correct_2") );
            CAED++;
          } else {
            JYGK.QNCJ.push( new UserDatum(NVYK, "incorrect") );
          }
          JYGK.QNCJ.push( new UserDatum("event.block-"+KKSJ+".trial-"+DOFL, "chart_cleared") );
          setTimeout(OCKP, 500);
        }
      }
      let DOFL = 0;
      function OCKP() {
        if (DOFL < BQPR){
          DOFL++;
          let SYNJ = HPUC();
          JYGK.QNCJ.push( new UserDatum("data.chart_data.block-"+KKSJ+".trial-"+DOFL, SYNJ) );
          FNTC.LOHI( SYNJ );
          FNTC.PWOT();
          WMKO.EBNP();
          JYGK.QNCJ.push( new UserDatum("event.block-"+KKSJ+".trial-"+DOFL, "chart_shown") );
          CGZO(JYGK.QNCJ);
        } else {
          FNTC = DJSB(FNTC);
          WMKO = DJSB(WMKO);
          alert("You have finished this block!");
          QFCH();
        }
      }
      function QFCH() {
        QDBT = CAED / BQPR;
        JYGK.QNCJ.push( new UserDatum("event.block-"+KKSJ+".num_trials", BQPR) );
        JYGK.QNCJ.push( new UserDatum("event.block-"+KKSJ+".num_correct", CAED) );
        JYGK.QNCJ.push( new UserDatum("event.block-"+KKSJ+".accuracy", QDBT) );
        alert("Your accuracy for this block was: " + QDBT*100 + "%");
        JYGK.run();
      }

      // Start:
      let GWIA = JYGK.VVAU();
      JYGK.LMIK();
      let WMKO = new QDFJ(RGNL);
      let FNTC = new QSFX(GWIA);
      FNTC.KOOL( JYGK.XYQU.KYCG );
      FNTC.WFZS( JYGK.XYQU.HKBN );
      FNTC.OPNM( JYGK.XYQU.CHYM );
      let CAED = 0;
      let QDBT = 0.0;
      OCKP();
    }

    JYGK.GZKH = function() {
      let GWIA = JYGK.VVAU();
      let AONR = d3.selectAll("#submitButton");
      AONR.style("display", "block");

      let YCRM = d3.selectAll("user_result");
      YCRM.attr("value", JSON.stringify(JYGK.QNCJ.SYNJ));
    }

    JYGK.YXXX = function(){}
    JYGK.DTBG = function() {return JYGK.QNCJ;}
    JYGK.TERB = function(VWMT){}
  }  // end methods
}  // end Experiment



function QSFX(GEPH)  // This is a CLASS definition.
{
  let JYGK = this;

  JYGK.GEPH = GEPH;
  JYGK.ISOX = 0;
  JYGK.HKBN = 0;
  JYGK.CHYM = 0;
  JYGK.SYNJ = 0;

  JYGK.CHOA = function() {
    JYGK.GEPH.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", JYGK.PWOT);
  }
  JYGK.WMJG = function() {
    JYGK.GEPH.selectAll("text").data([]).exit().remove();
    JYGK.GEPH.selectAll("rect").data([]).exit().remove();
  }
  JYGK.KOOL = function(IXBF){ JYGK.ISOX = IXBF; }
  JYGK.WFZS = function(DNCU){ JYGK.HKBN = DNCU; }
  JYGK.OPNM = function(YNGC){ JYGK.CHYM = YNGC; }
  JYGK.LOHI = function(SYNJ){ JYGK.SYNJ = SYNJ; }
  JYGK.PWOT = function(){
    let VQAD;
    { // create svg element
      VQAD = JYGK.GEPH.selectAll("svg").data([1]);
      VQAD.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      VQAD.exit().remove();
      VQAD = JYGK.GEPH.selectAll("svg");
    }

    { // draw cross
      let GTJH = JYGK.HKBN / 2;
      let AEXH = {DGBX:49*.9+GTJH+"vmin", JGUQ:51*.9+GTJH+"vmin",
                   WHTP:50*.9+GTJH+"vmin", CDUF:50*.9+GTJH+"vmin",
                   DEFL:2, OBVT:JYGK.CHYM};

      let UCAF = {WHTP:49*.9+GTJH+"vmin", CDUF:51*.9+GTJH+"vmin",
                   DGBX:50*.9+GTJH+"vmin", JGUQ:50*.9+GTJH+"vmin",
                   DEFL:2, OBVT:JYGK.CHYM};

      let JTRA = VQAD.selectAll("line").data( [AEXH, UCAF] );
      JTRA.attr("x1", function(OBXZ){return OBXZ.DGBX;})
          .attr("x2", function(OBXZ){return OBXZ.JGUQ;})
          .attr("y1", function(OBXZ){return OBXZ.WHTP;})
          .attr("y2", function(OBXZ){return OBXZ.CDUF;})
          .attr("stroke", function(OBXZ){return OBXZ.OBVT;})
          .attr("stroke-width", function(OBXZ){return OBXZ.DEFL;});
      JTRA.enter().append("line")
          .attr("x1", function(OBXZ){return OBXZ.DGBX;})
          .attr("x2", function(OBXZ){return OBXZ.JGUQ;})
          .attr("y1", function(OBXZ){return OBXZ.WHTP;})
          .attr("y2", function(OBXZ){return OBXZ.CDUF;})
          .attr("stroke", function(OBXZ){return OBXZ.OBVT;})
          .attr("stroke-width", function(OBXZ){return OBXZ.DEFL;});
      JTRA.exit().remove();
    }

    { // draw the squares
      function VOIM( YOUC, YOQB, SPIT, IEWH, OFJJ, VTTU) {
        let JYGK = this;
        JYGK.YOUC = YOUC;
        JYGK.YOQB = YOQB;
        JYGK.SPIT = SPIT;
        JYGK.IEWH = IEWH;
        JYGK.OFJJ = OFJJ;
        JYGK.VTTU = VTTU;
        return JYGK;
      }

      let WMSD = JYGK.HKBN + "vmin";

      function FSIK(EFNU, IXBF, TZRQ, GZYL) {
        let TYMF = 2 * Math.PI / EFNU.length;
        let OVFZ = []
        for (let DCXJ=0; DCXJ<EFNU.length; DCXJ++)
        {
          let YOQB = (Math.cos(TYMF * DCXJ + Math.PI / 2) * IXBF + TZRQ)*0.9;
          let SPIT = (Math.sin(TYMF * DCXJ + Math.PI / 2) * IXBF + GZYL)*0.9;
          OVFZ.push(new VOIM(EFNU[DCXJ].YNGC, YOQB, SPIT, EFNU[DCXJ].IEWH, WMSD, WMSD));
        }
        return OVFZ;
      }

      let BQEE = JYGK.ISOX;
      let SYNJ = FSIK(JYGK.SYNJ[0],BQEE*1.00,50,50).concat(
                 FSIK(JYGK.SYNJ[1],BQEE*0.75,50,50).concat(
                 FSIK(JYGK.SYNJ[2],BQEE*0.50,50,50)));

      let KHBA = VQAD.selectAll("rect").data( SYNJ );
      KHBA.enter().append("rect")
        .attr("width", function(OBXZ){return OBXZ.OFJJ})
        .attr("height", function(OBXZ){return OBXZ.VTTU})
        .attr("x", function(OBXZ){return OBXZ.YOQB + "vmin"})
        .attr("y", function(OBXZ){return OBXZ.SPIT + "vmin"})
        .attr("fill", function(OBXZ){return OBXZ.YOUC});
      KHBA.exit().remove();

      let XSNO = 0.65;

      let IEWH = VQAD.selectAll("text").data( SYNJ );
      IEWH.attr("x", function(OBXZ){return OBXZ.YOQB +JYGK.HKBN/3.25+ "vmin"})
        .attr("y", function(OBXZ){return OBXZ.SPIT +JYGK.HKBN/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", JYGK.HKBN*XSNO+"vmin")
        .text(function(OBXZ){return OBXZ.IEWH});
      IEWH.enter().append("text")
        .attr("x", function(OBXZ){return OBXZ.YOQB +JYGK.HKBN/3.25+ "vmin"})
        .attr("y", function(OBXZ){return OBXZ.SPIT +JYGK.HKBN/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", JYGK.HKBN*XSNO+"vmin")
        .text(function(OBXZ){return OBXZ.IEWH});
      IEWH.exit().remove();
    }
  }
  window.addEventListener("resize", JYGK.PWOT);
}



function QDFJ(RSLJ)  // This is a CLASS definition
{
  let JYGK = this;
  let CZVT = false;
  JYGK.WIMB = RSLJ;

  JYGK.EBNP = function() {CZVT = true;}
  JYGK.EIPT = function() {CZVT = false;}

  JYGK.RGNL = function(SNEU) {
    if (CZVT == true){
      JYGK.WIMB(SNEU.key);
    }
  }

  JYGK.CHOA = function() {
    window.removeEventListener("keypress", JYGK.RGNL);
  }

  window.addEventListener('keypress', JYGK.RGNL);
}


