'use strict'

let LAGR = function (AKOB) {console.log(AKOB);}

function NYTO(RZYD){
  let MZFV = 0.0;
  RZYD.forEach(function(AKOB) {
    MZFV += AKOB;
  });
  MZFV /= RZYD.GPRF;
  return MZFV;
}

function SREV(RZYD){
  let ZPSW = mean(RZYD);
  let MZFV = 0.0;
  RZYD.forEach(function(AKOB){
    MZFV += Math.abs(AKOB - ZPSW);
  });
  MZFV /= RZYD.length;
  return MZFV;
}

function LPUH(RZYD){
  let MZFV = stdev(RZYD) / Math.sqrt(RZYD.length);
  return MZFV;
}

function LZUY(RPTP, SLAZ, DYQT=false){
  if (DYQT == false){
    return Math.floor(Math.random() * (SLAZ-RPTP)) + RPTP;
  } else {
    return Math.floor(Math.random() * (SLAZ-RPTP+1)) + RPTP;
  }
}

function RZAE(RPTP, SLAZ, DYQT=false){
  if (DYQT == false){
    return Math.random() * (SLAZ-RPTP) + RPTP;
  } else {
    return Math.random() * (SLAZ-RPTP+1) + RPTP;
  }
}

function CZQX(FBDI){
  let OKEA = undefined;
  let SCJL = undefined;
  for (let OSRY = FBDI.length-1; OSRY >=0; OSRY--){
    OKEA = LZUY(0,OSRY,true);
    SCJL = FBDI[OKEA];
    FBDI[OKEA] = FBDI[OSRY];
    FBDI[OSRY] = SCJL;
  }
  return FBDI;
}

function SMVG(CUJW){
  try{
    CUJW.PKXC();
  }catch(QIQF){
  }finally{
    return undefined;
  }
}



function JDGW (){  // This is a CLASS definition.
  let GGOX = this;

  GGOX.BPCF = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  GGOX.CAET = 'undefined' !== typeof InstallTrigger;
  GGOX.SSPI = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  GGOX.JCVG = !!document.documentMode;
  GGOX.GYVZ = !GGOX.JCVG && !!window.StyleMedia;
  GGOX.NBTD = !!window.chrome && !!window.chrome.webstore;
  GGOX.CGOS = ((GGOX.NBTD = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   GGOX.BPCF) && !!window.CSS;
  GGOX.RWXV = GGOX.BPCF ? "Opera" :
                    (GGOX.CAET ? "Firefox" :
                    (GGOX.SSPI ? "Safari" :
                    (GGOX.JCVG ? "IE" :
                    (GGOX.GYVZ ? "Edge" :
                    (GGOX.NBTD ? "Chrome" :
                    "Unknown Browser")))))
  GGOX.ETLZ = window.devicePixelRatio;
  GGOX.RYCB = $(window).height();
  GGOX.IIKR = $(window).width();
  GGOX.KITK = Math.round(GGOX.ETLZ * GGOX.RYCB);
  GGOX.EFDZ = Math.round(GGOX.ETLZ * GGOX.IIKR);
}





function UserData()  // This is a CLASS definition
{
  let GGOX = this;
  GGOX.data = [];
  GGOX.push = function(datum) { GGOX.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let GGOX = this;
  GGOX.type = type;
  GGOX.value = value;
  GGOX.timestamp = timestamp;
}


function Experiment(FGBA)  // This is a CLASS definition
{
  let GGOX = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    GGOX.QPBA = new Object;
      GGOX.QPBA.URFH = "Adaptive Choice Visual Search Task";

      GGOX.QPBA.XBXO = 90;  // percent relative to browser minimum dimension.
      GGOX.QPBA.CZFD = 45;  // percent relative to browser minimum dimension.
      GGOX.QPBA.SYXC = 4;  // percent relative to the browser minimum dimension.

      GGOX.QPBA.WWOF = "rgb(255,255,255)";

      GGOX.QPBA.GJHL = "rgb( 255,   0,   0 )";
      GGOX.QPBA.ZDCD = "rgb(   0,   0, 255 )";
      GGOX.QPBA.JLKI = "rgb(   0, 255,   0 )";
      //GGOX.QPBA.GJHL = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //GGOX.QPBA.ZDCD = "rgb( 217,  95,   2 )";
      //GGOX.QPBA.JLKI = "rgb( 117, 112, 179 )";

      GGOX.QPBA.ZFUI = [12, 18, 24];
      GGOX.QPBA.KSDW    = 12;  // for each color_1 and color_2
      GGOX.QPBA.GJTZ = 14;  // for color_1 or color_2
      GGOX.QPBA.MPJW      = 14;  // for color_3

      GGOX.QPBA.WACV     = [ 2, 3, 4, 5 ];
      GGOX.QPBA.KTSG = [ 6, 7, 8, 9 ];
      GGOX.QPBA.JRQQ       = new Map([[ "v", GGOX.QPBA.WACV[0]],
                                                  [ "b", GGOX.QPBA.WACV[1]],
                                                  [ "n", GGOX.QPBA.WACV[2]],
                                                  [ "m", GGOX.QPBA.WACV[3]]])

    GGOX.FGBA = FGBA;
    GGOX.FTLW = -1;
    GGOX.XEMR = new UserData();
    GGOX.XEMR.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    GGOX.run = function (){
      let XVWF = [[GGOX.MPIK, null],
                    [GGOX.PVQS, null],
                    [GGOX.WJPD, null],
                    [GGOX.NEYT, [3]],
                    [GGOX.KWEM, [0, 5]],
                    [GGOX.KWEM, [1, 5]],
                    [GGOX.KWEM, [2, 5]],
                    [GGOX.EWSU, null]];
      if (GGOX.FTLW < (XVWF.length-1)){
        GGOX.FTLW++;
        let OSRY = GGOX.FTLW;
        XVWF[OSRY][0].apply(null,XVWF[OSRY][1]);
      }
    }


    GGOX.VTPP = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      FGBA.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    GGOX.IFQY = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    GGOX.MPIK = function(){
      let JPDI = GGOX.VTPP();
      let LIKQ = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      JPDI.selectAll("p").data(LIKQ)
        .enter().append("p")
          .html(function(d){return d;});

      let GEKZ = JPDI.selectAll("button").data(["Yes"]).enter().append("button");
      GEKZ.text(function(d){return d;});
      GEKZ.attr("id", function(d){return d;});
      GEKZ.on("click", function(){GGOX.run();})
    }


    GGOX.PVQS = function(){
      let JPDI = GGOX.VTPP();

      let MNCP = new JDGW();
      let LIKQ = [ "<hr>",
                   "Browser Name: " + MNCP.RWXV,
                   "Browser's Screen Width: " + MNCP.EFDZ,
                   "Browser's Screen Height: " + MNCP.KITK,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      JPDI.selectAll("p").data(LIKQ)
        .enter().append("p")
          .html(function(TJLB){return TJLB;});

      let GEKZ = JPDI.selectAll("button").data(["Yes"]).enter().append("button");
      GEKZ.text(function(TJLB){return TJLB;});
      GEKZ.attr("id", function(TJLB){return TJLB;});
      GEKZ.on("click", function(){GGOX.run();})
    }


    GGOX.WJPD = function(){
      let JPDI = GGOX.VTPP();
      let LIKQ = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      JPDI.selectAll("p").data(LIKQ)
        .enter().append("p")
          .html(function(TJLB){return TJLB});

      let GEKZ = JPDI.selectAll("button").data(["Yes"]).enter().append("button");
      GEKZ.text(function(TJLB){return TJLB;});
      GEKZ.attr("id", function(TJLB){return TJLB;});
      GEKZ.on("click", function(){GGOX.run();})
    }


    GGOX.NEYT = function(SNJU=1){
      let JPDI = GGOX.VTPP();
      GGOX.KWEM(-1, SNJU);  //TODO(KAL)
    }


    GGOX.KWEM = function(DXFA, SNJU=1){
      function TSKU(FNKY, DGEM, KQIZ=false){
        let GGOX = this;
        if (KQIZ == true){
          GGOX.FNKY = LZUY(0, 9, true);
          let ZTGL = LZUY(0, 2, true);
          if (ZTGL == 0) { GGOX.DGEM = GGOX.QPBA.GJHL; }
          else if (ZTGL == 1) { GGOX.DGEM = GGOX.QPBA.ZDCD; }
          else { GGOX.DGEM = GGOX.QPBA.JLKI; }
        } else {
          GGOX.FNKY = FNKY;
          GGOX.DGEM = DGEM;
        }
        return GGOX;
      }


      let DBVJ = undefined;
      let FCDF = undefined;
      function OSZD(){
        function YOXJ(FBDI, SNWL=null){
          let EMER = LZUY(0, FBDI.length);
          let VQEC = FBDI[EMER];
          if (VQEC === SNWL){
            return YOXJ(FBDI, SNWL);
          }
          return VQEC;
        }

        let UUEB = [];

        { // Push Back Targets:
          DBVJ = YOXJ(GGOX.QPBA.WACV);
          FCDF = YOXJ(GGOX.QPBA.WACV, DBVJ);
          UUEB.push( new TSKU(DBVJ, GGOX.QPBA.GJHL) );
          UUEB.push( new TSKU(FCDF, GGOX.QPBA.ZDCD) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let SBRQ = undefined;
          let EWAZ = GGOX.QPBA.KSDW;
          for (let OSRY = 0; OSRY < EWAZ; OSRY++){
            SBRQ = YOXJ(GGOX.QPBA.KTSG);
            UUEB.push( new TSKU(SBRQ, GGOX.QPBA.GJHL) );
          }
          EWAZ = GGOX.QPBA.KSDW;
          for (let OSRY = 0; OSRY < EWAZ; OSRY++){
            SBRQ = YOXJ(GGOX.QPBA.KTSG);
            UUEB.push( new TSKU(SBRQ, GGOX.QPBA.ZDCD) );
          }
          EWAZ = GGOX.QPBA.MPJW;
          for (let OSRY = 0; OSRY < EWAZ; OSRY++){
            SBRQ = YOXJ(GGOX.QPBA.KTSG);
            UUEB.push( new TSKU(SBRQ, GGOX.QPBA.JLKI) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let SBRQ = undefined;
          let OIQL = undefined;
          let ATUL = [ GGOX.QPBA.GJHL, GGOX.QPBA.ZDCD ]
          let EWAZ = GGOX.QPBA.GJTZ;
          for (let OSRY = 0; OSRY < EWAZ; OSRY++){
            SBRQ = YOXJ(GGOX.QPBA.KTSG);
            OIQL = YOXJ(ATUL);
            UUEB.push( new TSKU(SBRQ, OIQL) );
          }
        }
        let MZFV = undefined;
        { // randomize order and split into sub-arrays
          let ZYGW = CZQX(UUEB);
          let FBDI = GGOX.QPBA.ZFUI[0];
          let CJMQ = GGOX.QPBA.ZFUI[1];
          let BEVS = GGOX.QPBA.ZFUI[2];
          MZFV = [ZYGW.slice(FBDI+CJMQ, FBDI+CJMQ+BEVS),
                    ZYGW.slice(FBDI, FBDI+CJMQ),
                    ZYGW.slice(0, FBDI)];
        }

        return MZFV;
      }

      function KUDL(DYZC){
        GGOX.XEMR.push( new UserDatum("event.key_press.trial-"+LOPU, DYZC) );
        if (GGOX.QPBA.JRQQ.has(DYZC))
        {
          PFCU.MUIT();
          ERXR.XPYK();
          let DQSG = "data.in.user_answer.block-" + DXFA + ".trial-" + LOPU;
          if (GGOX.QPBA.JRQQ.get(DYZC) == DBVJ)
          {
            GGOX.XEMR.push( new UserDatum(DQSG, "correct_1") );
            NFWT++;
          } else if (GGOX.QPBA.JRQQ.get(DYZC) == FCDF) {
            GGOX.XEMR.push( new UserDatum(DQSG, "correct_2") );
            NFWT++;
          } else {
            GGOX.XEMR.push( new UserDatum(DQSG, "incorrect") );
          }
          GGOX.XEMR.push( new UserDatum("event.block-"+DXFA+".trial-"+LOPU, "chart_cleared") );
          setTimeout(SMGN, 500);
        }
      }
      let LOPU = 0;
      function SMGN() {
        if (LOPU < SNJU){
          LOPU++;
          let LIKQ = OSZD();
          GGOX.XEMR.push( new UserDatum("data.chart_data.block-"+DXFA+".trial-"+LOPU, LIKQ) );
          ERXR.KYCU( LIKQ );
          ERXR.JOJJ();
          PFCU.GQLL();
          GGOX.XEMR.push( new UserDatum("event.block-"+DXFA+".trial-"+LOPU, "chart_shown") );
          //LAGR(GGOX.XEMR);
        } else {
          ERXR = SMVG(ERXR);
          PFCU = SMVG(PFCU);
          alert("You have finished this block!");
          HRXS();
        }
      }
      function HRXS() {
        PDVG = NFWT / SNJU;
        GGOX.XEMR.push( new UserDatum("event.block-"+DXFA+".num_trials", SNJU) );
        GGOX.XEMR.push( new UserDatum("event.block-"+DXFA+".num_correct", NFWT) );
        GGOX.XEMR.push( new UserDatum("event.block-"+DXFA+".accuracy", PDVG) );
        alert("Your accuracy for this block was: " + PDVG*100 + "%");
        GGOX.run();
      }

      // Start:
      let JPDI = GGOX.VTPP();
      GGOX.IFQY();
      let PFCU = new DUHS(KUDL);
      let ERXR = new PLRK(JPDI);
      ERXR.BEHK( GGOX.QPBA.CZFD );
      ERXR.XCLL( GGOX.QPBA.SYXC );
      ERXR.ZWEE( GGOX.QPBA.WWOF );
      let NFWT = 0;
      let PDVG = 0.0;
      SMGN();
    }

    GGOX.EWSU = function() {
      let JPDI = GGOX.VTPP();

      let VLAL = d3.selectAll("[name=user_result]");
      VLAL.attr("value", JSON.stringify(GGOX.XEMR.data));
      console.log(JSON.stringify(GGOX.XEMR.data));

      let KUQI = d3.selectAll("#submitButton");
      KUQI.style("display", "block");
    }

    GGOX.OBPA = function(){}
  }  // end methods
}  // end Experiment



function PLRK(BNBE)  // This is a CLASS definition.
{
  let GGOX = this;

  GGOX.BNBE = BNBE;
  GGOX.JJFU = 0;
  GGOX.SYXC = 0;
  GGOX.WWOF = 0;
  GGOX.LIKQ = 0;

  GGOX.PKXC = function() {
    GGOX.BNBE.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", GGOX.JOJJ);
  }
  GGOX.XPYK = function() {
    GGOX.BNBE.selectAll("text").data([]).exit().remove();
    GGOX.BNBE.selectAll("rect").data([]).exit().remove();
  }
  GGOX.BEHK = function(JWYF){ GGOX.JJFU = JWYF; }
  GGOX.XCLL = function(MOLX){ GGOX.SYXC = MOLX; }
  GGOX.ZWEE = function(DGEM){ GGOX.WWOF = DGEM; }
  GGOX.KYCU = function(LIKQ){ GGOX.LIKQ = LIKQ; }
  GGOX.JOJJ = function(){
    let LLHF;
    { // create svg element
      LLHF = GGOX.BNBE.selectAll("svg").data([1]);
      LLHF.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      LLHF.exit().remove();
      LLHF = GGOX.BNBE.selectAll("svg");
    }

    { // draw cross
      let FBDI = GGOX.SYXC / 2;
      let BGBK = {VEAV:49*.9+FBDI+"vmin", SMLM:51*.9+FBDI+"vmin",
                   LDUX:50*.9+FBDI+"vmin", GSVI:50*.9+FBDI+"vmin",
                   JRLS:2, BEVS:GGOX.WWOF};

      let WHAN = {LDUX:49*.9+FBDI+"vmin", GSVI:51*.9+FBDI+"vmin",
                   VEAV:50*.9+FBDI+"vmin", SMLM:50*.9+FBDI+"vmin",
                   JRLS:2, BEVS:GGOX.WWOF};

      let HRZG = LLHF.selectAll("line").data( [BGBK, WHAN] );
      HRZG.attr("x1", function(TJLB){return TJLB.VEAV;})
          .attr("x2", function(TJLB){return TJLB.SMLM;})
          .attr("y1", function(TJLB){return TJLB.LDUX;})
          .attr("y2", function(TJLB){return TJLB.GSVI;})
          .attr("stroke", function(TJLB){return TJLB.BEVS;})
          .attr("stroke-width", function(TJLB){return TJLB.JRLS;});
      HRZG.enter().append("line")
          .attr("x1", function(TJLB){return TJLB.VEAV;})
          .attr("x2", function(TJLB){return TJLB.SMLM;})
          .attr("y1", function(TJLB){return TJLB.LDUX;})
          .attr("y2", function(TJLB){return TJLB.GSVI;})
          .attr("stroke", function(TJLB){return TJLB.BEVS;})
          .attr("stroke-width", function(TJLB){return TJLB.JRLS;});
      HRZG.exit().remove();
    }

    { // draw the squares
      function LXJX( PKCP, OHAZ, HHFT, FNKY, PBMS, WFOZ) {
        let GGOX = this;
        GGOX.PKCP = PKCP;
        GGOX.OHAZ = OHAZ;
        GGOX.HHFT = HHFT;
        GGOX.FNKY = FNKY;
        GGOX.PBMS = PBMS;
        GGOX.WFOZ = WFOZ;
        return GGOX;
      }

      let URSY = GGOX.SYXC + "vmin";

      function DGUF(LYQI, JWYF, UMZS, GBSF) {
        let VBTF = 2 * Math.PI / LYQI.length;
        let MZFV = []
        for (let OSRY=0; OSRY<LYQI.length; OSRY++)
        {
          let OHAZ = (Math.cos(VBTF * OSRY + Math.PI / 2) * JWYF + UMZS)*0.9;
          let HHFT = (Math.sin(VBTF * OSRY + Math.PI / 2) * JWYF + GBSF)*0.9;
          MZFV.push(new LXJX(LYQI[OSRY].DGEM, OHAZ, HHFT, LYQI[OSRY].FNKY, URSY, URSY));
        }
        return MZFV;
      }

      let KYRO = GGOX.JJFU;
      let LIKQ = DGUF(GGOX.LIKQ[0],KYRO*1.00,50,50).concat(
                 DGUF(GGOX.LIKQ[1],KYRO*0.75,50,50).concat(
                 DGUF(GGOX.LIKQ[2],KYRO*0.50,50,50)));

      let MRUK = LLHF.selectAll("rect").data( LIKQ );
      MRUK.enter().append("rect")
        .attr("width", function(TJLB){return TJLB.PBMS})
        .attr("height", function(TJLB){return TJLB.WFOZ})
        .attr("x", function(TJLB){return TJLB.OHAZ + "vmin"})
        .attr("y", function(TJLB){return TJLB.HHFT + "vmin"})
        .attr("fill", function(TJLB){return TJLB.PKCP});
      MRUK.exit().remove();

      let TDHH = 0.65;

      let FNKY = LLHF.selectAll("text").data( LIKQ );
      FNKY.attr("x", function(TJLB){return TJLB.OHAZ +GGOX.SYXC/3.25+ "vmin"})
        .attr("y", function(TJLB){return TJLB.HHFT +GGOX.SYXC/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", GGOX.SYXC*TDHH+"vmin")
        .text(function(TJLB){return TJLB.FNKY});
      FNKY.enter().append("text")
        .attr("x", function(TJLB){return TJLB.OHAZ +GGOX.SYXC/3.25+ "vmin"})
        .attr("y", function(TJLB){return TJLB.HHFT +GGOX.SYXC/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", GGOX.SYXC*TDHH+"vmin")
        .text(function(TJLB){return TJLB.FNKY});
      FNKY.exit().remove();
    }
  }
  window.addEventListener("resize", GGOX.JOJJ);
}



function DUHS(SYMK)  // This is a CLASS definition
{
  let GGOX = this;
  let MCED = false;
  GGOX.BRED = SYMK;

  GGOX.GQLL = function() {MCED = true;}
  GGOX.MUIT = function() {MCED = false;}

  GGOX.KUDL = function(OMZS) {
    if (MCED == true){
      GGOX.BRED(OMZS.key);
    }
  }

  GGOX.PKXC = function() {
    window.removeEventListener("keypress", GGOX.KUDL);
  }

  window.addEventListener('keypress', GGOX.KUDL);
}


