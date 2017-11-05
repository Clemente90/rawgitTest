'use strict'

let NHSS = function (UVSN) {console.log(UVSN);}

function GGQS(NWHC){
  let CSEF = 0.0;
  NWHC.forEach(function(UVSN) {
    CSEF += UVSN;
  });
  CSEF /= NWHC.CRQP;
  return CSEF;
}

function PBLS(NWHC){
  let TGSZ = mean(NWHC);
  let CSEF = 0.0;
  NWHC.forEach(function(UVSN){
    CSEF += Math.abs(UVSN - TGSZ);
  });
  CSEF /= NWHC.length;
  return CSEF;
}

function YQAT(NWHC){
  let CSEF = stdev(NWHC) / Math.sqrt(NWHC.length);
  return CSEF;
}

function MFGD(HQOT, ENEE, UEEV=false){
  if (UEEV == false){
    return Math.floor(Math.random() * (ENEE-HQOT)) + HQOT;
  } else {
    return Math.floor(Math.random() * (ENEE-HQOT+1)) + HQOT;
  }
}

function WSKV(HQOT, ENEE, UEEV=false){
  if (UEEV == false){
    return Math.random() * (ENEE-HQOT) + HQOT;
  } else {
    return Math.random() * (ENEE-HQOT+1) + HQOT;
  }
}

function EWMT(OZFK){
  let SEAA = undefined;
  let DWLT = undefined;
  for (let WDZZ = OZFK.length-1; WDZZ >=0; WDZZ--){
    SEAA = MFGD(0,WDZZ,true);
    DWLT = OZFK[SEAA];
    OZFK[SEAA] = OZFK[WDZZ];
    OZFK[WDZZ] = DWLT;
  }
  return OZFK;
}

function XIIQ(GZXM){
  try{
    GZXM.QTTD();
  }catch(ZSLA){
  }finally{
    return undefined;
  }
}



function YMAR (){  // This is a CLASS definition.
  let AVAD = this;

  AVAD.UZXI = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  AVAD.EALN = 'undefined' !== typeof InstallTrigger;
  AVAD.JKQK = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  AVAD.XAGM = !!document.documentMode;
  AVAD.MEEU = !AVAD.XAGM && !!window.StyleMedia;
  AVAD.ZVAP = !!window.chrome && !!window.chrome.webstore;
  AVAD.XNBN = ((AVAD.ZVAP = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   AVAD.UZXI) && !!window.CSS;
  AVAD.QBMU = AVAD.UZXI ? "Opera" :
                    (AVAD.EALN ? "Firefox" :
                    (AVAD.JKQK ? "Safari" :
                    (AVAD.XAGM ? "IE" :
                    (AVAD.MEEU ? "Edge" :
                    (AVAD.ZVAP ? "Chrome" :
                    "Unknown Browser")))))
  AVAD.QHRK = window.devicePixelRatio;
  AVAD.GOXC = $(window).height();
  AVAD.CBTE = $(window).width();
  AVAD.KFAI = Math.round(AVAD.QHRK * AVAD.GOXC);
  AVAD.ZHNC = Math.round(AVAD.QHRK * AVAD.CBTE);
}





function UserData()  // This is a CLASS definition
{
  let AVAD = this;
  AVAD.data = [];
  AVAD.push = function(datum) { AVAD.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let AVAD = this;
  AVAD.type = type;
  AVAD.value = value;
  AVAD.timestamp = timestamp;
}


function Experiment(GUML)  // This is a CLASS definition
{
  let AVAD = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AVAD.RDHJ = new Object;
      AVAD.RDHJ.RRBI = "Adaptive Choice Visual Search Task";

      AVAD.RDHJ.VZMY = 90;  // percent relative to browser minimum dimension.
      AVAD.RDHJ.ALUL = 45;  // percent relative to browser minimum dimension.
      AVAD.RDHJ.MXLW = 4;  // percent relative to the browser minimum dimension.

      AVAD.RDHJ.AXZW = "rgb(255,255,255)";

      AVAD.RDHJ.PCWP = "rgb( 255,   0,   0 )";
      AVAD.RDHJ.UFQA = "rgb(   0,   0, 255 )";
      AVAD.RDHJ.SADT = "rgb(   0, 255,   0 )";
      //AVAD.RDHJ.PCWP = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //AVAD.RDHJ.UFQA = "rgb( 217,  95,   2 )";
      //AVAD.RDHJ.SADT = "rgb( 117, 112, 179 )";

      AVAD.RDHJ.VXHW = [12, 18, 24];
      AVAD.RDHJ.ZIHX    = 12;  // for each color_1 and color_2
      AVAD.RDHJ.KBUL = 14;  // for color_1 or color_2
      AVAD.RDHJ.XEAZ      = 14;  // for color_3

      AVAD.RDHJ.QIQI     = [ 2, 3, 4, 5 ];
      AVAD.RDHJ.ZWVV = [ 6, 7, 8, 9 ];
      AVAD.RDHJ.GKRP       = new Map([[ "v", AVAD.RDHJ.QIQI[0]],
                                                  [ "b", AVAD.RDHJ.QIQI[1]],
                                                  [ "n", AVAD.RDHJ.QIQI[2]],
                                                  [ "m", AVAD.RDHJ.QIQI[3]]])

    AVAD.GUML = GUML;
    AVAD.VBOI = -1;
    AVAD.QAQJ = new UserData();
    AVAD.QAQJ.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AVAD.run = function (){
      let KIBP = [[AVAD.GSQF, null],
                    [AVAD.XVLX, null],
                    [AVAD.ZLQE, null],
                    [AVAD.DJJB, [3]],
                    [AVAD.BTGR, [0, 5]],
                    [AVAD.BTGR, [1, 5]],
                    [AVAD.BTGR, [2, 5]],
                    [AVAD.JOTE, null]];
      if (AVAD.VBOI < (KIBP.length-1)){
        AVAD.VBOI++;
        let WDZZ = AVAD.VBOI;
        KIBP[WDZZ][0].apply(null,KIBP[WDZZ][1]);
      }
    }


    AVAD.CESI = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      GUML.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    AVAD.TFZF = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    AVAD.GSQF = function(){
      let GGVF = AVAD.CESI();
      let ABFK = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      GGVF.selectAll("p").data(ABFK)
        .enter().append("p")
          .html(function(d){return d;});

      let WVFY = GGVF.selectAll("button").data(["Yes"]).enter().append("button");
      WVFY.text(function(d){return d;});
      WVFY.attr("id", function(d){return d;});
      WVFY.on("click", function(){AVAD.run();})
    }


    AVAD.XVLX = function(){
      let GGVF = AVAD.CESI();

      let XAAX = new YMAR();
      let ABFK = [ "<hr>",
                   "Browser Name: " + XAAX.QBMU,
                   "Browser's Screen Width: " + XAAX.ZHNC,
                   "Browser's Screen Height: " + XAAX.KFAI,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      GGVF.selectAll("p").data(ABFK)
        .enter().append("p")
          .html(function(VAIL){return VAIL;});

      let WVFY = GGVF.selectAll("button").data(["Yes"]).enter().append("button");
      WVFY.text(function(VAIL){return VAIL;});
      WVFY.attr("id", function(VAIL){return VAIL;});
      WVFY.on("click", function(){AVAD.run();})
    }


    AVAD.ZLQE = function(){
      let GGVF = AVAD.CESI();
      let ABFK = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      GGVF.selectAll("p").data(ABFK)
        .enter().append("p")
          .html(function(VAIL){return VAIL});

      let WVFY = GGVF.selectAll("button").data(["Yes"]).enter().append("button");
      WVFY.text(function(VAIL){return VAIL;});
      WVFY.attr("id", function(VAIL){return VAIL;});
      WVFY.on("click", function(){AVAD.run();})
    }


    AVAD.DJJB = function(CIDF=1){
      let GGVF = AVAD.CESI();
      AVAD.BTGR(-1, CIDF);  //TODO(KAL)
    }


    AVAD.BTGR = function(NLZN, CIDF=1){
      function QXCM(IVEF, RJXY, HYVC=false){
        let AVAD = this;
        if (HYVC == true){
          AVAD.IVEF = MFGD(0, 9, true);
          let TXQA = MFGD(0, 2, true);
          if (TXQA == 0) { AVAD.RJXY = AVAD.RDHJ.PCWP; }
          else if (TXQA == 1) { AVAD.RJXY = AVAD.RDHJ.UFQA; }
          else { AVAD.RJXY = AVAD.RDHJ.SADT; }
        } else {
          AVAD.IVEF = IVEF;
          AVAD.RJXY = RJXY;
        }
        return AVAD;
      }


      let YOJH = undefined;
      let XJEU = undefined;
      function QEFI(){
        function HMPW(OZFK, IYBE=null){
          let MIJU = MFGD(0, OZFK.length);
          let OXTL = OZFK[MIJU];
          if (OXTL === IYBE){
            return HMPW(OZFK, IYBE);
          }
          return OXTL;
        }

        let PEFJ = [];

        { // Push Back Targets:
          YOJH = HMPW(AVAD.RDHJ.QIQI);
          XJEU = HMPW(AVAD.RDHJ.QIQI, YOJH);
          PEFJ.push( new QXCM(YOJH, AVAD.RDHJ.PCWP) );
          PEFJ.push( new QXCM(XJEU, AVAD.RDHJ.UFQA) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let KUDX = undefined;
          let LHQN = AVAD.RDHJ.ZIHX;
          for (let WDZZ = 0; WDZZ < LHQN; WDZZ++){
            KUDX = HMPW(AVAD.RDHJ.ZWVV);
            PEFJ.push( new QXCM(KUDX, AVAD.RDHJ.PCWP) );
          }
          LHQN = AVAD.RDHJ.ZIHX;
          for (let WDZZ = 0; WDZZ < LHQN; WDZZ++){
            KUDX = HMPW(AVAD.RDHJ.ZWVV);
            PEFJ.push( new QXCM(KUDX, AVAD.RDHJ.UFQA) );
          }
          LHQN = AVAD.RDHJ.XEAZ;
          for (let WDZZ = 0; WDZZ < LHQN; WDZZ++){
            KUDX = HMPW(AVAD.RDHJ.ZWVV);
            PEFJ.push( new QXCM(KUDX, AVAD.RDHJ.SADT) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let KUDX = undefined;
          let EKHQ = undefined;
          let GHFI = [ AVAD.RDHJ.PCWP, AVAD.RDHJ.UFQA ]
          let LHQN = AVAD.RDHJ.KBUL;
          for (let WDZZ = 0; WDZZ < LHQN; WDZZ++){
            KUDX = HMPW(AVAD.RDHJ.ZWVV);
            EKHQ = HMPW(GHFI);
            PEFJ.push( new QXCM(KUDX, EKHQ) );
          }
        }
        let CSEF = undefined;
        { // randomize order and split into sub-arrays
          let REKI = EWMT(PEFJ);
          let OZFK = AVAD.RDHJ.VXHW[0];
          let XSCP = AVAD.RDHJ.VXHW[1];
          let YLGT = AVAD.RDHJ.VXHW[2];
          CSEF = [REKI.slice(OZFK+XSCP, OZFK+XSCP+YLGT),
                    REKI.slice(OZFK, OZFK+XSCP),
                    REKI.slice(0, OZFK)];
        }

        return CSEF;
      }

      function GUOD(ACWV){
        AVAD.QAQJ.push( new UserDatum("event.key_press.trial-"+YFSJ, ACWV) );
        if (AVAD.RDHJ.GKRP.has(ACWV))
        {
          MBFL.RPAT();
          HOFE.UWFZ();
          let SRKR = "data.in.user_answer.block-" + NLZN + ".trial-" + YFSJ;
          if (AVAD.RDHJ.GKRP.get(ACWV) == YOJH)
          {
            AVAD.QAQJ.push( new UserDatum(SRKR, "correct_1") );
            TYQO++;
          } else if (AVAD.RDHJ.GKRP.get(ACWV) == XJEU) {
            AVAD.QAQJ.push( new UserDatum(SRKR, "correct_2") );
            TYQO++;
          } else {
            AVAD.QAQJ.push( new UserDatum(SRKR, "incorrect") );
          }
          AVAD.QAQJ.push( new UserDatum("event.block-"+NLZN+".trial-"+YFSJ, "chart_cleared") );
          setTimeout(ZNFY, 500);
        }
      }
      let YFSJ = 0;
      function ZNFY() {
        if (YFSJ < CIDF){
          YFSJ++;
          let ABFK = QEFI();
          AVAD.QAQJ.push( new UserDatum("data.chart_data.block-"+NLZN+".trial-"+YFSJ, ABFK) );
          HOFE.XXDS( ABFK );
          HOFE.ADZL();
          MBFL.MNAM();
          AVAD.QAQJ.push( new UserDatum("event.block-"+NLZN+".trial-"+YFSJ, "chart_shown") );
          NHSS(AVAD.QAQJ);
        } else {
          HOFE = XIIQ(HOFE);
          MBFL = XIIQ(MBFL);
          alert("You have finished this block!");
          LLDN();
        }
      }
      function LLDN() {
        ZLZN = TYQO / CIDF;
        AVAD.QAQJ.push( new UserDatum("event.block-"+NLZN+".num_trials", CIDF) );
        AVAD.QAQJ.push( new UserDatum("event.block-"+NLZN+".num_correct", TYQO) );
        AVAD.QAQJ.push( new UserDatum("event.block-"+NLZN+".accuracy", ZLZN) );
        alert("Your accuracy for this block was: " + ZLZN*100 + "%");
        AVAD.run();
      }

      // Start:
      let GGVF = AVAD.CESI();
      AVAD.TFZF();
      let MBFL = new IOZY(GUOD);
      let HOFE = new YJSM(GGVF);
      HOFE.WORE( AVAD.RDHJ.ALUL );
      HOFE.AKAI( AVAD.RDHJ.MXLW );
      HOFE.JYOU( AVAD.RDHJ.AXZW );
      let TYQO = 0;
      let ZLZN = 0.0;
      ZNFY();
    }

    AVAD.JOTE = function() {
      let GGVF = AVAD.CESI();
      let HSMK = d3.selectAll("#submitButton");
      HSMK.style("display", "block");

      let YNHE = d3.selectAll("[name=user_result]");
      YNHE.attr("value", JSON.stringify(AVAD.QAQJ.data));
    }

    AVAD.YFTN = function(){}
    AVAD.CLHE = function() {return AVAD.QAQJ;}
    AVAD.GPVM = function(RMRL){}
  }  // end methods
}  // end Experiment



function YJSM(FLWX)  // This is a CLASS definition.
{
  let AVAD = this;

  AVAD.FLWX = FLWX;
  AVAD.HZDA = 0;
  AVAD.MXLW = 0;
  AVAD.AXZW = 0;
  AVAD.ABFK = 0;

  AVAD.QTTD = function() {
    AVAD.FLWX.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", AVAD.ADZL);
  }
  AVAD.UWFZ = function() {
    AVAD.FLWX.selectAll("text").data([]).exit().remove();
    AVAD.FLWX.selectAll("rect").data([]).exit().remove();
  }
  AVAD.WORE = function(LYHU){ AVAD.HZDA = LYHU; }
  AVAD.AKAI = function(QKRJ){ AVAD.MXLW = QKRJ; }
  AVAD.JYOU = function(RJXY){ AVAD.AXZW = RJXY; }
  AVAD.XXDS = function(ABFK){ AVAD.ABFK = ABFK; }
  AVAD.ADZL = function(){
    let LNBZ;
    { // create svg element
      LNBZ = AVAD.FLWX.selectAll("svg").data([1]);
      LNBZ.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      LNBZ.exit().remove();
      LNBZ = AVAD.FLWX.selectAll("svg");
    }

    { // draw cross
      let OZFK = AVAD.MXLW / 2;
      let AWHL = {SBXC:49*.9+OZFK+"vmin", BAQH:51*.9+OZFK+"vmin",
                   CHTP:50*.9+OZFK+"vmin", BRRE:50*.9+OZFK+"vmin",
                   LEIU:2, YLGT:AVAD.AXZW};

      let VUUV = {CHTP:49*.9+OZFK+"vmin", BRRE:51*.9+OZFK+"vmin",
                   SBXC:50*.9+OZFK+"vmin", BAQH:50*.9+OZFK+"vmin",
                   LEIU:2, YLGT:AVAD.AXZW};

      let ORJI = LNBZ.selectAll("line").data( [AWHL, VUUV] );
      ORJI.attr("x1", function(VAIL){return VAIL.SBXC;})
          .attr("x2", function(VAIL){return VAIL.BAQH;})
          .attr("y1", function(VAIL){return VAIL.CHTP;})
          .attr("y2", function(VAIL){return VAIL.BRRE;})
          .attr("stroke", function(VAIL){return VAIL.YLGT;})
          .attr("stroke-width", function(VAIL){return VAIL.LEIU;});
      ORJI.enter().append("line")
          .attr("x1", function(VAIL){return VAIL.SBXC;})
          .attr("x2", function(VAIL){return VAIL.BAQH;})
          .attr("y1", function(VAIL){return VAIL.CHTP;})
          .attr("y2", function(VAIL){return VAIL.BRRE;})
          .attr("stroke", function(VAIL){return VAIL.YLGT;})
          .attr("stroke-width", function(VAIL){return VAIL.LEIU;});
      ORJI.exit().remove();
    }

    { // draw the squares
      function HAQO( BURN, SVLX, TFML, IVEF, VDUG, RQSD) {
        let AVAD = this;
        AVAD.BURN = BURN;
        AVAD.SVLX = SVLX;
        AVAD.TFML = TFML;
        AVAD.IVEF = IVEF;
        AVAD.VDUG = VDUG;
        AVAD.RQSD = RQSD;
        return AVAD;
      }

      let KCBJ = AVAD.MXLW + "vmin";

      function UTEY(QIZH, LYHU, OLZE, UJKY) {
        let JXTG = 2 * Math.PI / QIZH.length;
        let CSEF = []
        for (let WDZZ=0; WDZZ<QIZH.length; WDZZ++)
        {
          let SVLX = (Math.cos(JXTG * WDZZ + Math.PI / 2) * LYHU + OLZE)*0.9;
          let TFML = (Math.sin(JXTG * WDZZ + Math.PI / 2) * LYHU + UJKY)*0.9;
          CSEF.push(new HAQO(QIZH[WDZZ].RJXY, SVLX, TFML, QIZH[WDZZ].IVEF, KCBJ, KCBJ));
        }
        return CSEF;
      }

      let OIZO = AVAD.HZDA;
      let ABFK = UTEY(AVAD.ABFK[0],OIZO*1.00,50,50).concat(
                 UTEY(AVAD.ABFK[1],OIZO*0.75,50,50).concat(
                 UTEY(AVAD.ABFK[2],OIZO*0.50,50,50)));

      let ZPWR = LNBZ.selectAll("rect").data( ABFK );
      ZPWR.enter().append("rect")
        .attr("width", function(VAIL){return VAIL.VDUG})
        .attr("height", function(VAIL){return VAIL.RQSD})
        .attr("x", function(VAIL){return VAIL.SVLX + "vmin"})
        .attr("y", function(VAIL){return VAIL.TFML + "vmin"})
        .attr("fill", function(VAIL){return VAIL.BURN});
      ZPWR.exit().remove();

      let LRJD = 0.65;

      let IVEF = LNBZ.selectAll("text").data( ABFK );
      IVEF.attr("x", function(VAIL){return VAIL.SVLX +AVAD.MXLW/3.25+ "vmin"})
        .attr("y", function(VAIL){return VAIL.TFML +AVAD.MXLW/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", AVAD.MXLW*LRJD+"vmin")
        .text(function(VAIL){return VAIL.IVEF});
      IVEF.enter().append("text")
        .attr("x", function(VAIL){return VAIL.SVLX +AVAD.MXLW/3.25+ "vmin"})
        .attr("y", function(VAIL){return VAIL.TFML +AVAD.MXLW/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", AVAD.MXLW*LRJD+"vmin")
        .text(function(VAIL){return VAIL.IVEF});
      IVEF.exit().remove();
    }
  }
  window.addEventListener("resize", AVAD.ADZL);
}



function IOZY(ECKD)  // This is a CLASS definition
{
  let AVAD = this;
  let VKGS = false;
  AVAD.DIDF = ECKD;

  AVAD.MNAM = function() {VKGS = true;}
  AVAD.RPAT = function() {VKGS = false;}

  AVAD.GUOD = function(RCTZ) {
    if (VKGS == true){
      AVAD.DIDF(RCTZ.key);
    }
  }

  AVAD.QTTD = function() {
    window.removeEventListener("keypress", AVAD.GUOD);
  }

  window.addEventListener('keypress', AVAD.GUOD);
}


