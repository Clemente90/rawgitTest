'use strict'

let OANX = function (GXGJ) {console.log(GXGJ);}

function OGTB(SSMV){
  let NIGM = 0.0;
  SSMV.forEach(function(GXGJ) {
    NIGM += GXGJ;
  });
  NIGM /= SSMV.BLWE;
  return NIGM;
}

function BOXE(SSMV){
  let ECZC = mean(SSMV);
  let NIGM = 0.0;
  SSMV.forEach(function(GXGJ){
    NIGM += Math.abs(GXGJ - ECZC);
  });
  NIGM /= SSMV.length;
  return NIGM;
}

function HBRN(SSMV){
  let NIGM = stdev(SSMV) / Math.sqrt(SSMV.length);
  return NIGM;
}

function AKJP(KTWN, CYUF, UMDW=false){
  if (UMDW == false){
    return Math.floor(Math.random() * (CYUF-KTWN)) + KTWN;
  } else {
    return Math.floor(Math.random() * (CYUF-KTWN+1)) + KTWN;
  }
}

function VFQB(KTWN, CYUF, UMDW=false){
  if (UMDW == false){
    return Math.random() * (CYUF-KTWN) + KTWN;
  } else {
    return Math.random() * (CYUF-KTWN+1) + KTWN;
  }
}

function BJWV(ZCHY){
  let WRJM = undefined;
  let EATA = undefined;
  for (let XKKJ = ZCHY.length-1; XKKJ >=0; XKKJ--){
    WRJM = AKJP(0,XKKJ,true);
    EATA = ZCHY[WRJM];
    ZCHY[WRJM] = ZCHY[XKKJ];
    ZCHY[XKKJ] = EATA;
  }
  return ZCHY;
}

function QRZG(KHEZ){
  try{
    KHEZ.ILQR();
  }catch(IDFL){
  }finally{
    return undefined;
  }
}



function RRII (){  // This is a CLASS definition.
  let BSUK = this;

  BSUK.OZVC = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  BSUK.ZAKH = 'undefined' !== typeof InstallTrigger;
  BSUK.GLFW = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  BSUK.ACOP = !!document.documentMode;
  BSUK.EQQV = !BSUK.ACOP && !!window.StyleMedia;
  BSUK.VQZA = !!window.chrome && !!window.chrome.webstore;
  BSUK.DZNS = ((BSUK.VQZA = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   BSUK.OZVC) && !!window.CSS;
  BSUK.APAU = BSUK.OZVC ? "Opera" :
                    (BSUK.ZAKH ? "Firefox" :
                    (BSUK.GLFW ? "Safari" :
                    (BSUK.ACOP ? "IE" :
                    (BSUK.EQQV ? "Edge" :
                    (BSUK.VQZA ? "Chrome" :
                    "Unknown Browser")))))
  BSUK.EXKR = window.devicePixelRatio;
  BSUK.EQLL = $(window).height();
  BSUK.NUYZ = $(window).width();
  BSUK.IUIP = Math.round(BSUK.EXKR * BSUK.EQLL);
  BSUK.CUOC = Math.round(BSUK.EXKR * BSUK.NUYZ);
}





function UserData()  // This is a CLASS definition
{
  let BSUK = this;
  BSUK.data = [];
  BSUK.push = function(datum) { BSUK.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let BSUK = this;
  BSUK.type = type;
  BSUK.value = value;
  BSUK.timestamp = timestamp;
}


function Experiment(JFTI)  // This is a CLASS definition
{
  let BSUK = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    BSUK.FOZL = new Object;
      BSUK.FOZL.BWLA = "Adaptive Choice Visual Search Task";

      BSUK.FOZL.JBIE = 90;  // percent relative to browser minimum dimension.
      BSUK.FOZL.YYJI = 45;  // percent relative to browser minimum dimension.
      BSUK.FOZL.YTOG = 4;  // percent relative to the browser minimum dimension.

      BSUK.FOZL.FOTI = "rgb(255,255,255)";

      BSUK.FOZL.GBYL = "rgb( 255,   0,   0 )";
      BSUK.FOZL.RZRM = "rgb(   0,   0, 255 )";
      BSUK.FOZL.OODZ = "rgb(   0, 255,   0 )";
      //BSUK.FOZL.GBYL = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //BSUK.FOZL.RZRM = "rgb( 217,  95,   2 )";
      //BSUK.FOZL.OODZ = "rgb( 117, 112, 179 )";

      BSUK.FOZL.KBPV = [12, 18, 24];
      BSUK.FOZL.MGMA    = 12;  // for each color_1 and color_2
      BSUK.FOZL.SUXM = 14;  // for color_1 or color_2
      BSUK.FOZL.AAID      = 14;  // for color_3

      BSUK.FOZL.CWRI     = [ 2, 3, 4, 5 ];
      BSUK.FOZL.DGJO = [ 6, 7, 8, 9 ];
      BSUK.FOZL.MDIJ       = new Map([[ "v", BSUK.FOZL.CWRI[0]],
                                                  [ "b", BSUK.FOZL.CWRI[1]],
                                                  [ "n", BSUK.FOZL.CWRI[2]],
                                                  [ "m", BSUK.FOZL.CWRI[3]]])

    BSUK.JFTI = JFTI;
    BSUK.HGCP = -1;
    BSUK.BPSK = new UserData();
    BSUK.BPSK.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    BSUK.run = function (){
      let YZFM = [[BSUK.TLDE, null],
                    [BSUK.FPTH, null],
                    [BSUK.RLNU, null],
                    [BSUK.CSQE, [3]],
                    [BSUK.LNJY, [0, 5]],
                    [BSUK.LNJY, [1, 5]],
                    [BSUK.LNJY, [2, 5]],
                    [BSUK.SARR, null]];
      if (BSUK.HGCP < (YZFM.length-1)){
        BSUK.HGCP++;
        let XKKJ = BSUK.HGCP;
        YZFM[XKKJ][0].apply(null,YZFM[XKKJ][1]);
      }
    }


    BSUK.HTHN = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      JFTI.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    BSUK.UTLN = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    BSUK.TLDE = function(){
      let AWWD = BSUK.HTHN();
      let CYMA = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      AWWD.selectAll("p").data(CYMA)
        .enter().append("p")
          .html(function(d){return d;});

      let HRWN = AWWD.selectAll("button").data(["Yes"]).enter().append("button");
      HRWN.text(function(d){return d;});
      HRWN.attr("id", function(d){return d;});
      HRWN.on("click", function(){BSUK.run();})
    }


    BSUK.FPTH = function(){
      let AWWD = BSUK.HTHN();

      let QMWS = new RRII();
      let CYMA = [ "<hr>",
                   "Browser Name: " + QMWS.APAU,
                   "Browser's Screen Width: " + QMWS.CUOC,
                   "Browser's Screen Height: " + QMWS.IUIP,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      AWWD.selectAll("p").data(CYMA)
        .enter().append("p")
          .html(function(TWKW){return TWKW;});

      let HRWN = AWWD.selectAll("button").data(["Yes"]).enter().append("button");
      HRWN.text(function(TWKW){return TWKW;});
      HRWN.attr("id", function(TWKW){return TWKW;});
      HRWN.on("click", function(){BSUK.run();})
    }


    BSUK.RLNU = function(){
      let AWWD = BSUK.HTHN();
      let CYMA = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      AWWD.selectAll("p").data(CYMA)
        .enter().append("p")
          .html(function(TWKW){return TWKW});

      let HRWN = AWWD.selectAll("button").data(["Yes"]).enter().append("button");
      HRWN.text(function(TWKW){return TWKW;});
      HRWN.attr("id", function(TWKW){return TWKW;});
      HRWN.on("click", function(){BSUK.run();})
    }


    BSUK.CSQE = function(XHQT=1){
      let AWWD = BSUK.HTHN();
      BSUK.LNJY(-1, XHQT);  //TODO(KAL)
    }


    BSUK.LNJY = function(VABP, XHQT=1){
      function JJGE(THDV, DYHI, GBEO=false){
        let BSUK = this;
        if (GBEO == true){
          BSUK.THDV = AKJP(0, 9, true);
          let TFVA = AKJP(0, 2, true);
          if (TFVA == 0) { BSUK.DYHI = BSUK.FOZL.GBYL; }
          else if (TFVA == 1) { BSUK.DYHI = BSUK.FOZL.RZRM; }
          else { BSUK.DYHI = BSUK.FOZL.OODZ; }
        } else {
          BSUK.THDV = THDV;
          BSUK.DYHI = DYHI;
        }
        return BSUK;
      }


      let XYXD = undefined;
      let IJBL = undefined;
      function UZYK(){
        function XNXQ(ZCHY, FYOE=null){
          let SEJG = AKJP(0, ZCHY.length);
          let DTGG = ZCHY[SEJG];
          if (DTGG === FYOE){
            return XNXQ(ZCHY, FYOE);
          }
          return DTGG;
        }

        let BATR = [];

        { // Push Back Targets:
          XYXD = XNXQ(BSUK.FOZL.CWRI);
          IJBL = XNXQ(BSUK.FOZL.CWRI, XYXD);
          BATR.push( new JJGE(XYXD, BSUK.FOZL.GBYL) );
          BATR.push( new JJGE(IJBL, BSUK.FOZL.RZRM) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let FAYF = undefined;
          let EIJL = BSUK.FOZL.MGMA;
          for (let XKKJ = 0; XKKJ < EIJL; XKKJ++){
            FAYF = XNXQ(BSUK.FOZL.DGJO);
            BATR.push( new JJGE(FAYF, BSUK.FOZL.GBYL) );
          }
          EIJL = BSUK.FOZL.MGMA;
          for (let XKKJ = 0; XKKJ < EIJL; XKKJ++){
            FAYF = XNXQ(BSUK.FOZL.DGJO);
            BATR.push( new JJGE(FAYF, BSUK.FOZL.RZRM) );
          }
          EIJL = BSUK.FOZL.AAID;
          for (let XKKJ = 0; XKKJ < EIJL; XKKJ++){
            FAYF = XNXQ(BSUK.FOZL.DGJO);
            BATR.push( new JJGE(FAYF, BSUK.FOZL.OODZ) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let FAYF = undefined;
          let EBSW = undefined;
          let HLFD = [ BSUK.FOZL.GBYL, BSUK.FOZL.RZRM ]
          let EIJL = BSUK.FOZL.SUXM;
          for (let XKKJ = 0; XKKJ < EIJL; XKKJ++){
            FAYF = XNXQ(BSUK.FOZL.DGJO);
            EBSW = XNXQ(HLFD);
            BATR.push( new JJGE(FAYF, EBSW) );
          }
        }
        let NIGM = undefined;
        { // randomize order and split into sub-arrays
          let SETL = BJWV(BATR);
          let ZCHY = BSUK.FOZL.KBPV[0];
          let QQUW = BSUK.FOZL.KBPV[1];
          let NIXX = BSUK.FOZL.KBPV[2];
          NIGM = [SETL.slice(ZCHY+QQUW, ZCHY+QQUW+NIXX),
                    SETL.slice(ZCHY, ZCHY+QQUW),
                    SETL.slice(0, ZCHY)];
        }

        return NIGM;
      }

      function RSGF(MRWE){
        BSUK.BPSK.push( new UserDatum("event.key_press.trial-"+RBPO, MRWE) );
        if (BSUK.FOZL.MDIJ.has(MRWE))
        {
          MVWU.TIXE();
          KRES.POPB();
          let DPMJ = "data.in.user_answer.block-" + VABP + ".trial-" + RBPO;
          if (BSUK.FOZL.MDIJ.get(MRWE) == XYXD)
          {
            BSUK.BPSK.push( new UserDatum(DPMJ, "correct_1") );
            MOOT++;
          } else if (BSUK.FOZL.MDIJ.get(MRWE) == IJBL) {
            BSUK.BPSK.push( new UserDatum(DPMJ, "correct_2") );
            MOOT++;
          } else {
            BSUK.BPSK.push( new UserDatum(DPMJ, "incorrect") );
          }
          BSUK.BPSK.push( new UserDatum("event.block-"+VABP+".trial-"+RBPO, "chart_cleared") );
          setTimeout(DAAJ, 500);
        }
      }
      let RBPO = 0;
      function DAAJ() {
        if (RBPO < XHQT){
          RBPO++;
          let CYMA = UZYK();
          BSUK.BPSK.push( new UserDatum("data.chart_data.block-"+VABP+".trial-"+RBPO, CYMA) );
          KRES.QWLN( CYMA );
          KRES.XSZZ();
          MVWU.SXIH();
          BSUK.BPSK.push( new UserDatum("event.block-"+VABP+".trial-"+RBPO, "chart_shown") );
          //OANX(BSUK.BPSK);
        } else {
          KRES = QRZG(KRES);
          MVWU = QRZG(MVWU);
          alert("You have finished this block!");
          NAHG();
        }
      }
      function NAHG() {
        NDZJ = MOOT / XHQT;
        BSUK.BPSK.push( new UserDatum("event.block-"+VABP+".num_trials", XHQT) );
        BSUK.BPSK.push( new UserDatum("event.block-"+VABP+".num_correct", MOOT) );
        BSUK.BPSK.push( new UserDatum("event.block-"+VABP+".accuracy", NDZJ) );
        alert("Your accuracy for this block was: " + NDZJ*100 + "%");
        BSUK.run();
      }

      // Start:
      let AWWD = BSUK.HTHN();
      BSUK.UTLN();
      let MVWU = new RWXW(RSGF);
      let KRES = new FLBV(AWWD);
      KRES.RPRT( BSUK.FOZL.YYJI );
      KRES.GWMW( BSUK.FOZL.YTOG );
      KRES.WWBZ( BSUK.FOZL.FOTI );
      let MOOT = 0;
      let NDZJ = 0.0;
      DAAJ();
    }

    BSUK.SARR = function() {
      let AWWD = BSUK.HTHN();

      let MNRK = d3.selectAll("#user_result");
      MNRK.attr("value", JSON.stringify(BSUK.BPSK.data));
      console.log("HERE:");
      console.log(JSON.stringify(BSUK.BPSK.data));

      let HQVI = d3.selectAll("#submitButton");
      HQVI.style("display", "block");
    }

    BSUK.BSJY = function(){}
  }  // end methods
}  // end Experiment



function FLBV(OHBN)  // This is a CLASS definition.
{
  let BSUK = this;

  BSUK.OHBN = OHBN;
  BSUK.XMJT = 0;
  BSUK.YTOG = 0;
  BSUK.FOTI = 0;
  BSUK.CYMA = 0;

  BSUK.ILQR = function() {
    BSUK.OHBN.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", BSUK.XSZZ);
  }
  BSUK.POPB = function() {
    BSUK.OHBN.selectAll("text").data([]).exit().remove();
    BSUK.OHBN.selectAll("rect").data([]).exit().remove();
  }
  BSUK.RPRT = function(RNCI){ BSUK.XMJT = RNCI; }
  BSUK.GWMW = function(LUTJ){ BSUK.YTOG = LUTJ; }
  BSUK.WWBZ = function(DYHI){ BSUK.FOTI = DYHI; }
  BSUK.QWLN = function(CYMA){ BSUK.CYMA = CYMA; }
  BSUK.XSZZ = function(){
    let BYMI;
    { // create svg element
      BYMI = BSUK.OHBN.selectAll("svg").data([1]);
      BYMI.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      BYMI.exit().remove();
      BYMI = BSUK.OHBN.selectAll("svg");
    }

    { // draw cross
      let ZCHY = BSUK.YTOG / 2;
      let HKZK = {JVOF:49*.9+ZCHY+"vmin", BZQW:51*.9+ZCHY+"vmin",
                   ALML:50*.9+ZCHY+"vmin", LEBZ:50*.9+ZCHY+"vmin",
                   LZLM:2, NIXX:BSUK.FOTI};

      let LSBE = {ALML:49*.9+ZCHY+"vmin", LEBZ:51*.9+ZCHY+"vmin",
                   JVOF:50*.9+ZCHY+"vmin", BZQW:50*.9+ZCHY+"vmin",
                   LZLM:2, NIXX:BSUK.FOTI};

      let KEIK = BYMI.selectAll("line").data( [HKZK, LSBE] );
      KEIK.attr("x1", function(TWKW){return TWKW.JVOF;})
          .attr("x2", function(TWKW){return TWKW.BZQW;})
          .attr("y1", function(TWKW){return TWKW.ALML;})
          .attr("y2", function(TWKW){return TWKW.LEBZ;})
          .attr("stroke", function(TWKW){return TWKW.NIXX;})
          .attr("stroke-width", function(TWKW){return TWKW.LZLM;});
      KEIK.enter().append("line")
          .attr("x1", function(TWKW){return TWKW.JVOF;})
          .attr("x2", function(TWKW){return TWKW.BZQW;})
          .attr("y1", function(TWKW){return TWKW.ALML;})
          .attr("y2", function(TWKW){return TWKW.LEBZ;})
          .attr("stroke", function(TWKW){return TWKW.NIXX;})
          .attr("stroke-width", function(TWKW){return TWKW.LZLM;});
      KEIK.exit().remove();
    }

    { // draw the squares
      function MUCF( QXYM, PUGQ, PIQC, THDV, SNVR, FHKM) {
        let BSUK = this;
        BSUK.QXYM = QXYM;
        BSUK.PUGQ = PUGQ;
        BSUK.PIQC = PIQC;
        BSUK.THDV = THDV;
        BSUK.SNVR = SNVR;
        BSUK.FHKM = FHKM;
        return BSUK;
      }

      let EBMD = BSUK.YTOG + "vmin";

      function ECHF(UKEE, RNCI, LKQY, CDKL) {
        let FERA = 2 * Math.PI / UKEE.length;
        let NIGM = []
        for (let XKKJ=0; XKKJ<UKEE.length; XKKJ++)
        {
          let PUGQ = (Math.cos(FERA * XKKJ + Math.PI / 2) * RNCI + LKQY)*0.9;
          let PIQC = (Math.sin(FERA * XKKJ + Math.PI / 2) * RNCI + CDKL)*0.9;
          NIGM.push(new MUCF(UKEE[XKKJ].DYHI, PUGQ, PIQC, UKEE[XKKJ].THDV, EBMD, EBMD));
        }
        return NIGM;
      }

      let CVSM = BSUK.XMJT;
      let CYMA = ECHF(BSUK.CYMA[0],CVSM*1.00,50,50).concat(
                 ECHF(BSUK.CYMA[1],CVSM*0.75,50,50).concat(
                 ECHF(BSUK.CYMA[2],CVSM*0.50,50,50)));

      let GXAP = BYMI.selectAll("rect").data( CYMA );
      GXAP.enter().append("rect")
        .attr("width", function(TWKW){return TWKW.SNVR})
        .attr("height", function(TWKW){return TWKW.FHKM})
        .attr("x", function(TWKW){return TWKW.PUGQ + "vmin"})
        .attr("y", function(TWKW){return TWKW.PIQC + "vmin"})
        .attr("fill", function(TWKW){return TWKW.QXYM});
      GXAP.exit().remove();

      let RPDE = 0.65;

      let THDV = BYMI.selectAll("text").data( CYMA );
      THDV.attr("x", function(TWKW){return TWKW.PUGQ +BSUK.YTOG/3.25+ "vmin"})
        .attr("y", function(TWKW){return TWKW.PIQC +BSUK.YTOG/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", BSUK.YTOG*RPDE+"vmin")
        .text(function(TWKW){return TWKW.THDV});
      THDV.enter().append("text")
        .attr("x", function(TWKW){return TWKW.PUGQ +BSUK.YTOG/3.25+ "vmin"})
        .attr("y", function(TWKW){return TWKW.PIQC +BSUK.YTOG/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", BSUK.YTOG*RPDE+"vmin")
        .text(function(TWKW){return TWKW.THDV});
      THDV.exit().remove();
    }
  }
  window.addEventListener("resize", BSUK.XSZZ);
}



function RWXW(AQXC)  // This is a CLASS definition
{
  let BSUK = this;
  let SPLM = false;
  BSUK.ACAP = AQXC;

  BSUK.SXIH = function() {SPLM = true;}
  BSUK.TIXE = function() {SPLM = false;}

  BSUK.RSGF = function(RHYF) {
    if (SPLM == true){
      BSUK.ACAP(RHYF.key);
    }
  }

  BSUK.ILQR = function() {
    window.removeEventListener("keypress", BSUK.RSGF);
  }

  window.addEventListener('keypress', BSUK.RSGF);
}


