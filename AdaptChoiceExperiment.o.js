'use strict'

let SKFW = function (JCOF) {console.log(JCOF);}

function MHER(TPRN){
  let HYFU = 0.0;
  TPRN.forEach(function(JCOF) {
    HYFU += JCOF;
  });
  HYFU /= TPRN.RXXV;
  return HYFU;
}

function ITDR(TPRN){
  let VJQY = mean(TPRN);
  let HYFU = 0.0;
  TPRN.forEach(function(JCOF){
    HYFU += Math.abs(JCOF - VJQY);
  });
  HYFU /= TPRN.length;
  return HYFU;
}

function CJUN(TPRN){
  let HYFU = stdev(TPRN) / Math.sqrt(TPRN.length);
  return HYFU;
}

function EIGB(MZZY, GMQL, OFTU=false){
  if (OFTU == false){
    return Math.floor(Math.random() * (GMQL-MZZY)) + MZZY;
  } else {
    return Math.floor(Math.random() * (GMQL-MZZY+1)) + MZZY;
  }
}

function UIUL(MZZY, GMQL, OFTU=false){
  if (OFTU == false){
    return Math.random() * (GMQL-MZZY) + MZZY;
  } else {
    return Math.random() * (GMQL-MZZY+1) + MZZY;
  }
}

function HITE(OGYK){
  let SBVF = undefined;
  let RRVE = undefined;
  for (let RDUX = OGYK.length-1; RDUX >=0; RDUX--){
    SBVF = EIGB(0,RDUX,true);
    RRVE = OGYK[SBVF];
    OGYK[SBVF] = OGYK[RDUX];
    OGYK[RDUX] = RRVE;
  }
  return OGYK;
}

function FAOQ(SZLW){
  try{
    SZLW.PCPW();
  }catch(XHQR){
  }finally{
    return undefined;
  }
}



function VVEO (){  // This is a CLASS definition.
  let KDSI = this;

  KDSI.FPZA = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  KDSI.WRSK = 'undefined' !== typeof InstallTrigger;
  KDSI.OACP = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  KDSI.KSKY = !!document.documentMode;
  KDSI.EAXH = !KDSI.KSKY && !!window.StyleMedia;
  KDSI.PLEC = !!window.chrome && !!window.chrome.webstore;
  KDSI.AQTY = ((KDSI.PLEC = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   KDSI.FPZA) && !!window.CSS;
  KDSI.PYFN = KDSI.FPZA ? "Opera" :
                    (KDSI.WRSK ? "Firefox" :
                    (KDSI.OACP ? "Safari" :
                    (KDSI.KSKY ? "IE" :
                    (KDSI.EAXH ? "Edge" :
                    (KDSI.PLEC ? "Chrome" :
                    "Unknown Browser")))))
  KDSI.EQXM = window.devicePixelRatio;
  KDSI.CAJZ = $(window).height();
  KDSI.GZCY = $(window).width();
  KDSI.ANXW = Math.round(KDSI.EQXM * KDSI.CAJZ);
  KDSI.SYRV = Math.round(KDSI.EQXM * KDSI.GZCY);
}





function UserData()  // This is a CLASS definition
{
  let KDSI = this;
  KDSI.data = [];
  KDSI.push = function(datum) { KDSI.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let KDSI = this;
  KDSI.type = type;
  KDSI.value = value;
  KDSI.timestamp = timestamp;
}


function Experiment(WAFU)  // This is a CLASS definition
{
  let KDSI = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    KDSI.LHAS = new Object;
      KDSI.LHAS.TIIA = "Adaptive Choice Visual Search Task";

      KDSI.LHAS.PCOE = 90;  // percent relative to browser minimum dimension.
      KDSI.LHAS.ZRKD = 45;  // percent relative to browser minimum dimension.
      KDSI.LHAS.HMSM = 4;  // percent relative to the browser minimum dimension.

      KDSI.LHAS.HLUG = "rgb(255,255,255)";

      KDSI.LHAS.DJYY = "rgb( 255,   0,   0 )";
      KDSI.LHAS.ONCB = "rgb(   0,   0, 255 )";
      KDSI.LHAS.QJJD = "rgb(   0, 255,   0 )";
      //KDSI.LHAS.DJYY = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //KDSI.LHAS.ONCB = "rgb( 217,  95,   2 )";
      //KDSI.LHAS.QJJD = "rgb( 117, 112, 179 )";

      KDSI.LHAS.VCCL = [12, 18, 24];
      KDSI.LHAS.REJA    = 12;  // for each color_1 and color_2
      KDSI.LHAS.TGIS = 14;  // for color_1 or color_2
      KDSI.LHAS.ASYR      = 14;  // for color_3

      KDSI.LHAS.ZPFZ     = [ 2, 3, 4, 5 ];
      KDSI.LHAS.IHYB = [ 6, 7, 8, 9 ];
      KDSI.LHAS.GAVA       = new Map([[ "v", KDSI.LHAS.ZPFZ[0]],
                                                  [ "b", KDSI.LHAS.ZPFZ[1]],
                                                  [ "n", KDSI.LHAS.ZPFZ[2]],
                                                  [ "m", KDSI.LHAS.ZPFZ[3]]])

    KDSI.WAFU = WAFU;
    KDSI.EDKB = -1;
    KDSI.PNTT = new UserData();
    KDSI.PNTT.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    KDSI.run = function (){
      let IIIJ = [[KDSI.WFUN, null],
                    [KDSI.AAAF, null],
                    [KDSI.NYST, null],
                    [KDSI.TGYO, [3]],
                    [KDSI.NQVV, [0, 5]],
                    [KDSI.NQVV, [1, 5]],
                    [KDSI.NQVV, [2, 5]],
                    [KDSI.LMBB, null]];
      if (KDSI.EDKB < (IIIJ.length-1)){
        KDSI.EDKB++;
        let RDUX = KDSI.EDKB;
        IIIJ[RDUX][0].apply(null,IIIJ[RDUX][1]);
      }
    }


    KDSI.VPAR = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      WAFU.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    KDSI.VIEH = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    KDSI.WFUN = function(){
      let MNLX = KDSI.VPAR();
      let ORCH = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      MNLX.selectAll("p").data(ORCH)
        .enter().append("p")
          .html(function(d){return d;});

      let KIOV = MNLX.selectAll("button").data(["Yes"]).enter().append("button");
      KIOV.text(function(d){return d;});
      KIOV.attr("id", function(d){return d;});
      KIOV.on("click", function(){KDSI.run();})
    }


    KDSI.AAAF = function(){
      let MNLX = KDSI.VPAR();

      let SXFB = new VVEO();
      let ORCH = [ "<hr>",
                   "Browser Name: " + SXFB.PYFN,
                   "Browser's Screen Width: " + SXFB.SYRV,
                   "Browser's Screen Height: " + SXFB.ANXW,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      MNLX.selectAll("p").data(ORCH)
        .enter().append("p")
          .html(function(DSNM){return DSNM;});

      let KIOV = MNLX.selectAll("button").data(["Yes"]).enter().append("button");
      KIOV.text(function(DSNM){return DSNM;});
      KIOV.attr("id", function(DSNM){return DSNM;});
      KIOV.on("click", function(){KDSI.run();})
    }


    KDSI.NYST = function(){
      let MNLX = KDSI.VPAR();
      let ORCH = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      MNLX.selectAll("p").data(ORCH)
        .enter().append("p")
          .html(function(DSNM){return DSNM});

      let KIOV = MNLX.selectAll("button").data(["Yes"]).enter().append("button");
      KIOV.text(function(DSNM){return DSNM;});
      KIOV.attr("id", function(DSNM){return DSNM;});
      KIOV.on("click", function(){KDSI.run();})
    }


    KDSI.TGYO = function(GFII=1){
      let MNLX = KDSI.VPAR();
      KDSI.NQVV(-1, GFII);  //TODO(KAL)
    }


    KDSI.NQVV = function(JNIV, GFII=1){
      function ADDP(ZJHQ, FBAO, MURB=false){
        let KDSI = this;
        if (MURB == true){
          KDSI.ZJHQ = EIGB(0, 9, true);
          let HFJH = EIGB(0, 2, true);
          if (HFJH == 0) { KDSI.FBAO = KDSI.LHAS.DJYY; }
          else if (HFJH == 1) { KDSI.FBAO = KDSI.LHAS.ONCB; }
          else { KDSI.FBAO = KDSI.LHAS.QJJD; }
        } else {
          KDSI.ZJHQ = ZJHQ;
          KDSI.FBAO = FBAO;
        }
        return KDSI;
      }


      let IBIU = undefined;
      let IDEH = undefined;
      function YOLY(){
        function JFDR(OGYK, XQWR=null){
          let JOWP = EIGB(0, OGYK.length);
          let ZDHG = OGYK[JOWP];
          if (ZDHG === XQWR){
            return JFDR(OGYK, XQWR);
          }
          return ZDHG;
        }

        let BDBH = [];

        { // Push Back Targets:
          IBIU = JFDR(KDSI.LHAS.ZPFZ);
          IDEH = JFDR(KDSI.LHAS.ZPFZ, IBIU);
          BDBH.push( new ADDP(IBIU, KDSI.LHAS.DJYY) );
          BDBH.push( new ADDP(IDEH, KDSI.LHAS.ONCB) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let RHOC = undefined;
          let CKEW = KDSI.LHAS.REJA;
          for (let RDUX = 0; RDUX < CKEW; RDUX++){
            RHOC = JFDR(KDSI.LHAS.IHYB);
            BDBH.push( new ADDP(RHOC, KDSI.LHAS.DJYY) );
          }
          CKEW = KDSI.LHAS.REJA;
          for (let RDUX = 0; RDUX < CKEW; RDUX++){
            RHOC = JFDR(KDSI.LHAS.IHYB);
            BDBH.push( new ADDP(RHOC, KDSI.LHAS.ONCB) );
          }
          CKEW = KDSI.LHAS.ASYR;
          for (let RDUX = 0; RDUX < CKEW; RDUX++){
            RHOC = JFDR(KDSI.LHAS.IHYB);
            BDBH.push( new ADDP(RHOC, KDSI.LHAS.QJJD) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let RHOC = undefined;
          let NOFZ = undefined;
          let ZCXZ = [ KDSI.LHAS.DJYY, KDSI.LHAS.ONCB ]
          let CKEW = KDSI.LHAS.TGIS;
          for (let RDUX = 0; RDUX < CKEW; RDUX++){
            RHOC = JFDR(KDSI.LHAS.IHYB);
            NOFZ = JFDR(ZCXZ);
            BDBH.push( new ADDP(RHOC, NOFZ) );
          }
        }
        let HYFU = undefined;
        { // randomize order and split into sub-arrays
          let IGAH = HITE(BDBH);
          let OGYK = KDSI.LHAS.VCCL[0];
          let KPSX = KDSI.LHAS.VCCL[1];
          let BUTI = KDSI.LHAS.VCCL[2];
          HYFU = [IGAH.slice(OGYK+KPSX, OGYK+KPSX+BUTI),
                    IGAH.slice(OGYK, OGYK+KPSX),
                    IGAH.slice(0, OGYK)];
        }

        return HYFU;
      }

      function NGAR(JOEA){
        KDSI.PNTT.push( new UserDatum("event.key_press.trial-"+ZFGU, JOEA) );
        if (KDSI.LHAS.GAVA.has(JOEA))
        {
          ZVRU.VKTB();
          JGDF.UKYA();
          let ZIEO = "data.in.user_answer.block-" + JNIV + ".trial-" + ZFGU;
          if (KDSI.LHAS.GAVA.get(JOEA) == IBIU)
          {
            KDSI.PNTT.push( new UserDatum(ZIEO, "correct_1") );
            YAVR++;
          } else if (KDSI.LHAS.GAVA.get(JOEA) == IDEH) {
            KDSI.PNTT.push( new UserDatum(ZIEO, "correct_2") );
            YAVR++;
          } else {
            KDSI.PNTT.push( new UserDatum(ZIEO, "incorrect") );
          }
          KDSI.PNTT.push( new UserDatum("event.block-"+JNIV+".trial-"+ZFGU, "chart_cleared") );
          setTimeout(CFJG, 500);
        }
      }
      let ZFGU = 0;
      function CFJG() {
        if (ZFGU < GFII){
          ZFGU++;
          let ORCH = YOLY();
          KDSI.PNTT.push( new UserDatum("data.chart_data.block-"+JNIV+".trial-"+ZFGU, ORCH) );
          JGDF.RTVJ( ORCH );
          JGDF.JNFB();
          ZVRU.ZESQ();
          KDSI.PNTT.push( new UserDatum("event.block-"+JNIV+".trial-"+ZFGU, "chart_shown") );
          SKFW(KDSI.PNTT);
        } else {
          JGDF = FAOQ(JGDF);
          ZVRU = FAOQ(ZVRU);
          alert("You have finished this block!");
          ZKEY();
        }
      }
      function ZKEY() {
        OPLM = YAVR / GFII;
        KDSI.PNTT.push( new UserDatum("event.block-"+JNIV+".num_trials", GFII) );
        KDSI.PNTT.push( new UserDatum("event.block-"+JNIV+".num_correct", YAVR) );
        KDSI.PNTT.push( new UserDatum("event.block-"+JNIV+".accuracy", OPLM) );
        alert("Your accuracy for this block was: " + OPLM*100 + "%");
        KDSI.run();
      }

      // Start:
      let MNLX = KDSI.VPAR();
      KDSI.VIEH();
      let ZVRU = new WXOB(NGAR);
      let JGDF = new JICI(MNLX);
      JGDF.YQCO( KDSI.LHAS.ZRKD );
      JGDF.SZZG( KDSI.LHAS.HMSM );
      JGDF.DBAJ( KDSI.LHAS.HLUG );
      let YAVR = 0;
      let OPLM = 0.0;
      CFJG();
    }

    KDSI.LMBB = function() {
      let MNLX = KDSI.VPAR();
      let VGCV = d3.selectAll("#submitButton");
      VGCV.style("display", "block");

      let STAJ = d3.selectAll("user_output");
      STAJ.attr("value", JSON.stringify(KDSI.PNTT.ORCH));
    }

    KDSI.DSYH = function(){}
    KDSI.YSRM = function() {return KDSI.PNTT;}
    KDSI.NASH = function(FVHO){}
  }  // end methods
}  // end Experiment



function JICI(MEJT)  // This is a CLASS definition.
{
  let KDSI = this;

  KDSI.MEJT = MEJT;
  KDSI.TGKJ = 0;
  KDSI.HMSM = 0;
  KDSI.HLUG = 0;
  KDSI.ORCH = 0;

  KDSI.PCPW = function() {
    KDSI.MEJT.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", KDSI.JNFB);
  }
  KDSI.UKYA = function() {
    KDSI.MEJT.selectAll("text").data([]).exit().remove();
    KDSI.MEJT.selectAll("rect").data([]).exit().remove();
  }
  KDSI.YQCO = function(MEJM){ KDSI.TGKJ = MEJM; }
  KDSI.SZZG = function(WGVI){ KDSI.HMSM = WGVI; }
  KDSI.DBAJ = function(FBAO){ KDSI.HLUG = FBAO; }
  KDSI.RTVJ = function(ORCH){ KDSI.ORCH = ORCH; }
  KDSI.JNFB = function(){
    let WAKP;
    { // create svg element
      WAKP = KDSI.MEJT.selectAll("svg").data([1]);
      WAKP.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      WAKP.exit().remove();
      WAKP = KDSI.MEJT.selectAll("svg");
    }

    { // draw cross
      let OGYK = KDSI.HMSM / 2;
      let JRCB = {RQKA:49*.9+OGYK+"vmin", WFAV:51*.9+OGYK+"vmin",
                   OWQG:50*.9+OGYK+"vmin", XXAL:50*.9+OGYK+"vmin",
                   MYMH:2, BUTI:KDSI.HLUG};

      let CAWC = {OWQG:49*.9+OGYK+"vmin", XXAL:51*.9+OGYK+"vmin",
                   RQKA:50*.9+OGYK+"vmin", WFAV:50*.9+OGYK+"vmin",
                   MYMH:2, BUTI:KDSI.HLUG};

      let SROJ = WAKP.selectAll("line").data( [JRCB, CAWC] );
      SROJ.attr("x1", function(DSNM){return DSNM.RQKA;})
          .attr("x2", function(DSNM){return DSNM.WFAV;})
          .attr("y1", function(DSNM){return DSNM.OWQG;})
          .attr("y2", function(DSNM){return DSNM.XXAL;})
          .attr("stroke", function(DSNM){return DSNM.BUTI;})
          .attr("stroke-width", function(DSNM){return DSNM.MYMH;});
      SROJ.enter().append("line")
          .attr("x1", function(DSNM){return DSNM.RQKA;})
          .attr("x2", function(DSNM){return DSNM.WFAV;})
          .attr("y1", function(DSNM){return DSNM.OWQG;})
          .attr("y2", function(DSNM){return DSNM.XXAL;})
          .attr("stroke", function(DSNM){return DSNM.BUTI;})
          .attr("stroke-width", function(DSNM){return DSNM.MYMH;});
      SROJ.exit().remove();
    }

    { // draw the squares
      function MCSA( WMQA, QSLH, RZJC, ZJHQ, XDSI, PGIW) {
        let KDSI = this;
        KDSI.WMQA = WMQA;
        KDSI.QSLH = QSLH;
        KDSI.RZJC = RZJC;
        KDSI.ZJHQ = ZJHQ;
        KDSI.XDSI = XDSI;
        KDSI.PGIW = PGIW;
        return KDSI;
      }

      let WCWZ = KDSI.HMSM + "vmin";

      function QIZO(XNHT, MEJM, NYLG, DSNI) {
        let EBPA = 2 * Math.PI / XNHT.length;
        let HYFU = []
        for (let RDUX=0; RDUX<XNHT.length; RDUX++)
        {
          let QSLH = (Math.cos(EBPA * RDUX + Math.PI / 2) * MEJM + NYLG)*0.9;
          let RZJC = (Math.sin(EBPA * RDUX + Math.PI / 2) * MEJM + DSNI)*0.9;
          HYFU.push(new MCSA(XNHT[RDUX].FBAO, QSLH, RZJC, XNHT[RDUX].ZJHQ, WCWZ, WCWZ));
        }
        return HYFU;
      }

      let OORK = KDSI.TGKJ;
      let ORCH = QIZO(KDSI.ORCH[0],OORK*1.00,50,50).concat(
                 QIZO(KDSI.ORCH[1],OORK*0.75,50,50).concat(
                 QIZO(KDSI.ORCH[2],OORK*0.50,50,50)));

      let EGUL = WAKP.selectAll("rect").data( ORCH );
      EGUL.enter().append("rect")
        .attr("width", function(DSNM){return DSNM.XDSI})
        .attr("height", function(DSNM){return DSNM.PGIW})
        .attr("x", function(DSNM){return DSNM.QSLH + "vmin"})
        .attr("y", function(DSNM){return DSNM.RZJC + "vmin"})
        .attr("fill", function(DSNM){return DSNM.WMQA});
      EGUL.exit().remove();

      let UOYZ = 0.65;

      let ZJHQ = WAKP.selectAll("text").data( ORCH );
      ZJHQ.attr("x", function(DSNM){return DSNM.QSLH +KDSI.HMSM/3.25+ "vmin"})
        .attr("y", function(DSNM){return DSNM.RZJC +KDSI.HMSM/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", KDSI.HMSM*UOYZ+"vmin")
        .text(function(DSNM){return DSNM.ZJHQ});
      ZJHQ.enter().append("text")
        .attr("x", function(DSNM){return DSNM.QSLH +KDSI.HMSM/3.25+ "vmin"})
        .attr("y", function(DSNM){return DSNM.RZJC +KDSI.HMSM/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", KDSI.HMSM*UOYZ+"vmin")
        .text(function(DSNM){return DSNM.ZJHQ});
      ZJHQ.exit().remove();
    }
  }
  window.addEventListener("resize", KDSI.JNFB);
}



function WXOB(XLDT)  // This is a CLASS definition
{
  let KDSI = this;
  let RJVV = false;
  KDSI.EZZC = XLDT;

  KDSI.ZESQ = function() {RJVV = true;}
  KDSI.VKTB = function() {RJVV = false;}

  KDSI.NGAR = function(QVOB) {
    if (RJVV == true){
      KDSI.EZZC(QVOB.key);
    }
  }

  KDSI.PCPW = function() {
    window.removeEventListener("keypress", KDSI.NGAR);
  }

  window.addEventListener('keypress', KDSI.NGAR);
}


