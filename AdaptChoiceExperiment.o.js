'use strict'

let FVOZ = function (XZHN) {console.log(XZHN);}

function ROUU(XPES){
  let BMZF = 0.0;
  XPES.forEach(function(XZHN) {
    BMZF += XZHN;
  });
  BMZF /= XPES.NVPB;
  return BMZF;
}

function OVGL(XPES){
  let SDQT = mean(XPES);
  let BMZF = 0.0;
  XPES.forEach(function(XZHN){
    BMZF += Math.abs(XZHN - SDQT);
  });
  BMZF /= XPES.length;
  return BMZF;
}

function OGCE(XPES){
  let BMZF = stdev(XPES) / Math.sqrt(XPES.length);
  return BMZF;
}

function KGHK(KWQG, HMUO, VYIZ=false){
  if (VYIZ == false){
    return Math.floor(Math.random() * (HMUO-KWQG)) + KWQG;
  } else {
    return Math.floor(Math.random() * (HMUO-KWQG+1)) + KWQG;
  }
}

function VFKT(KWQG, HMUO, VYIZ=false){
  if (VYIZ == false){
    return Math.random() * (HMUO-KWQG) + KWQG;
  } else {
    return Math.random() * (HMUO-KWQG+1) + KWQG;
  }
}

function USGP(WJPM){
  let VILP = undefined;
  let IRFV = undefined;
  for (let ILPA = WJPM.length-1; ILPA >=0; ILPA--){
    VILP = KGHK(0,ILPA,true);
    IRFV = WJPM[VILP];
    WJPM[VILP] = WJPM[ILPA];
    WJPM[ILPA] = IRFV;
  }
  return WJPM;
}

function EBRT(VOXP){
  try{
    VOXP.MDSM();
  }catch(TSWQ){
  }finally{
    return undefined;
  }
}



function VIDH (){  // This is a CLASS definition.
  let SNQV = this;

  SNQV.WJIK = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  SNQV.WNFI = 'undefined' !== typeof InstallTrigger;
  SNQV.KUSN = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  SNQV.ASTE = !!document.documentMode;
  SNQV.ZXJW = !SNQV.ASTE && !!window.StyleMedia;
  SNQV.TCAG = !!window.chrome && !!window.chrome.webstore;
  SNQV.IPIW = ((SNQV.TCAG = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   SNQV.WJIK) && !!window.CSS;
  SNQV.OPXI = SNQV.WJIK ? "Opera" :
                    (SNQV.WNFI ? "Firefox" :
                    (SNQV.KUSN ? "Safari" :
                    (SNQV.ASTE ? "IE" :
                    (SNQV.ZXJW ? "Edge" :
                    (SNQV.TCAG ? "Chrome" :
                    "Unknown Browser")))))
  SNQV.QFTE = window.devicePixelRatio;
  SNQV.CSUE = $(window).height();
  SNQV.MPWI = $(window).width();
  SNQV.TZBJ = Math.round(SNQV.QFTE * SNQV.CSUE);
  SNQV.TCJC = Math.round(SNQV.QFTE * SNQV.MPWI);
}





function UserData()  // This is a CLASS definition
{
  let SNQV = this;
  SNQV.data = [];
  SNQV.push = function(datum) { SNQV.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let SNQV = this;
  SNQV.type = type;
  SNQV.value = value;
  SNQV.timestamp = timestamp;
}


function Experiment(MDAP)  // This is a CLASS definition
{
  let SNQV = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    SNQV.CNBP = new Object;
      SNQV.CNBP.XRDN = "Adaptive Choice Visual Search Task";

      SNQV.CNBP.IGAM = 90;  // percent relative to browser minimum dimension.
      SNQV.CNBP.VRFE = 45;  // percent relative to browser minimum dimension.
      SNQV.CNBP.KDSO = 4;  // percent relative to the browser minimum dimension.

      SNQV.CNBP.KOCX = "rgb(255,255,255)";

      SNQV.CNBP.TLPJ = "rgb( 255,   0,   0 )";
      SNQV.CNBP.CFAX = "rgb(   0,   0, 255 )";
      SNQV.CNBP.SOST = "rgb(   0, 255,   0 )";
      //SNQV.CNBP.TLPJ = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //SNQV.CNBP.CFAX = "rgb( 217,  95,   2 )";
      //SNQV.CNBP.SOST = "rgb( 117, 112, 179 )";

      SNQV.CNBP.LXIC = [12, 18, 24];
      SNQV.CNBP.NHOG    = 12;  // for each color_1 and color_2
      SNQV.CNBP.DXOM = 14;  // for color_1 or color_2
      SNQV.CNBP.BTVB      = 14;  // for color_3

      SNQV.CNBP.ZWTR     = [ 2, 3, 4, 5 ];
      SNQV.CNBP.DCGC = [ 6, 7, 8, 9 ];
      SNQV.CNBP.EHBB       = new Map([[ "v", SNQV.CNBP.ZWTR[0]],
                                                  [ "b", SNQV.CNBP.ZWTR[1]],
                                                  [ "n", SNQV.CNBP.ZWTR[2]],
                                                  [ "m", SNQV.CNBP.ZWTR[3]]])

    SNQV.MDAP = MDAP;
    SNQV.YDQR = -1;
    SNQV.KLQP = new UserData();
    SNQV.KLQP.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    SNQV.run = function (){
      let NSJE = [[SNQV.TISI, null],
                    [SNQV.GWUK, null],
                    [SNQV.JXNM, null],
                    [SNQV.EVFJ, [3]],
                    [SNQV.YSBO, [0, 5]],
                    [SNQV.YSBO, [1, 5]],
                    [SNQV.YSBO, [2, 5]],
                    [SNQV.XTED, null]];
      if (SNQV.YDQR < (NSJE.length-1)){
        SNQV.YDQR++;
        let ILPA = SNQV.YDQR;
        NSJE[ILPA][0].apply(null,NSJE[ILPA][1]);
      }
    }


    SNQV.DQEF = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      MDAP.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    SNQV.HGJY = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    SNQV.TISI = function(){
      let IXDP = SNQV.DQEF();
      let BYDU = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      IXDP.selectAll("p").data(BYDU)
        .enter().append("p")
          .html(function(d){return d;});

      let OLID = IXDP.selectAll("button").data(["Yes"]).enter().append("button");
      OLID.text(function(d){return d;});
      OLID.attr("id", function(d){return d;});
      OLID.on("click", function(){SNQV.run();})
    }


    SNQV.GWUK = function(){
      let IXDP = SNQV.DQEF();

      let COGT = new VIDH();
      let BYDU = [ "<hr>",
                   "Browser Name: " + COGT.OPXI,
                   "Browser's Screen Width: " + COGT.TCJC,
                   "Browser's Screen Height: " + COGT.TZBJ,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      IXDP.selectAll("p").data(BYDU)
        .enter().append("p")
          .html(function(JIGV){return JIGV;});

      let OLID = IXDP.selectAll("button").data(["Yes"]).enter().append("button");
      OLID.text(function(JIGV){return JIGV;});
      OLID.attr("id", function(JIGV){return JIGV;});
      OLID.on("click", function(){SNQV.run();})
    }


    SNQV.JXNM = function(){
      let IXDP = SNQV.DQEF();
      let BYDU = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      IXDP.selectAll("p").data(BYDU)
        .enter().append("p")
          .html(function(JIGV){return JIGV});

      let OLID = IXDP.selectAll("button").data(["Yes"]).enter().append("button");
      OLID.text(function(JIGV){return JIGV;});
      OLID.attr("id", function(JIGV){return JIGV;});
      OLID.on("click", function(){SNQV.run();})
    }


    SNQV.EVFJ = function(UTYL=1){
      let IXDP = SNQV.DQEF();
      SNQV.YSBO(-1, UTYL);  //TODO(KAL)
    }


    SNQV.YSBO = function(JFRS, UTYL=1){
      function BKQT(PKYF, NOAT, CEVI=false){
        let SNQV = this;
        if (CEVI == true){
          SNQV.PKYF = KGHK(0, 9, true);
          let AWOX = KGHK(0, 2, true);
          if (AWOX == 0) { SNQV.NOAT = SNQV.CNBP.TLPJ; }
          else if (AWOX == 1) { SNQV.NOAT = SNQV.CNBP.CFAX; }
          else { SNQV.NOAT = SNQV.CNBP.SOST; }
        } else {
          SNQV.PKYF = PKYF;
          SNQV.NOAT = NOAT;
        }
        return SNQV;
      }


      let YNOH = undefined;
      let MNSW = undefined;
      function CUUF(){
        function WXTT(WJPM, HFEM=null){
          let OTBX = KGHK(0, WJPM.length);
          let GFOH = WJPM[OTBX];
          if (GFOH === HFEM){
            return WXTT(WJPM, HFEM);
          }
          return GFOH;
        }

        let MLCL = [];

        { // Push Back Targets:
          YNOH = WXTT(SNQV.CNBP.ZWTR);
          MNSW = WXTT(SNQV.CNBP.ZWTR, YNOH);
          MLCL.push( new BKQT(YNOH, SNQV.CNBP.TLPJ) );
          MLCL.push( new BKQT(MNSW, SNQV.CNBP.CFAX) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let AOIM = undefined;
          let MDLO = SNQV.CNBP.NHOG;
          for (let ILPA = 0; ILPA < MDLO; ILPA++){
            AOIM = WXTT(SNQV.CNBP.DCGC);
            MLCL.push( new BKQT(AOIM, SNQV.CNBP.TLPJ) );
          }
          MDLO = SNQV.CNBP.NHOG;
          for (let ILPA = 0; ILPA < MDLO; ILPA++){
            AOIM = WXTT(SNQV.CNBP.DCGC);
            MLCL.push( new BKQT(AOIM, SNQV.CNBP.CFAX) );
          }
          MDLO = SNQV.CNBP.BTVB;
          for (let ILPA = 0; ILPA < MDLO; ILPA++){
            AOIM = WXTT(SNQV.CNBP.DCGC);
            MLCL.push( new BKQT(AOIM, SNQV.CNBP.SOST) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let AOIM = undefined;
          let PHGI = undefined;
          let YVOS = [ SNQV.CNBP.TLPJ, SNQV.CNBP.CFAX ]
          let MDLO = SNQV.CNBP.DXOM;
          for (let ILPA = 0; ILPA < MDLO; ILPA++){
            AOIM = WXTT(SNQV.CNBP.DCGC);
            PHGI = WXTT(YVOS);
            MLCL.push( new BKQT(AOIM, PHGI) );
          }
        }
        let BMZF = undefined;
        { // randomize order and split into sub-arrays
          let QRLB = USGP(MLCL);
          let WJPM = SNQV.CNBP.LXIC[0];
          let TGDB = SNQV.CNBP.LXIC[1];
          let HZED = SNQV.CNBP.LXIC[2];
          BMZF = [QRLB.slice(WJPM+TGDB, WJPM+TGDB+HZED),
                    QRLB.slice(WJPM, WJPM+TGDB),
                    QRLB.slice(0, WJPM)];
        }

        return BMZF;
      }

      function ZYAU(KFSJ){
        SNQV.KLQP.push( new UserDatum("event.key_press.trial-"+EFEQ, KFSJ) );
        if (SNQV.CNBP.EHBB.has(KFSJ))
        {
          TCJF.GQVT();
          RCZT.CCJN();
          let HTEZ = "data.in.user_answer.block-" + JFRS + ".trial-" + EFEQ;
          if (SNQV.CNBP.EHBB.get(KFSJ) == YNOH)
          {
            SNQV.KLQP.push( new UserDatum(HTEZ, "correct_1") );
            CZUS++;
          } else if (SNQV.CNBP.EHBB.get(KFSJ) == MNSW) {
            SNQV.KLQP.push( new UserDatum(HTEZ, "correct_2") );
            CZUS++;
          } else {
            SNQV.KLQP.push( new UserDatum(HTEZ, "incorrect") );
          }
          SNQV.KLQP.push( new UserDatum("event.block-"+JFRS+".trial-"+EFEQ, "chart_cleared") );
          setTimeout(GLZD, 500);
        }
      }
      let EFEQ = 0;
      function GLZD() {
        if (EFEQ < UTYL){
          EFEQ++;
          let BYDU = CUUF();
          SNQV.KLQP.push( new UserDatum("data.chart_data.block-"+JFRS+".trial-"+EFEQ, BYDU) );
          RCZT.JFKI( BYDU );
          RCZT.OYQV();
          TCJF.TUKO();
          SNQV.KLQP.push( new UserDatum("event.block-"+JFRS+".trial-"+EFEQ, "chart_shown") );
          FVOZ(SNQV.KLQP);
        } else {
          RCZT = EBRT(RCZT);
          TCJF = EBRT(TCJF);
          alert("You have finished this block!");
          YUNV();
        }
      }
      function YUNV() {
        PWCE = CZUS / UTYL;
        SNQV.KLQP.push( new UserDatum("event.block-"+JFRS+".num_trials", UTYL) );
        SNQV.KLQP.push( new UserDatum("event.block-"+JFRS+".num_correct", CZUS) );
        SNQV.KLQP.push( new UserDatum("event.block-"+JFRS+".accuracy", PWCE) );
        alert("Your accuracy for this block was: " + PWCE*100 + "%");
        SNQV.run();
      }

      // Start:
      let IXDP = SNQV.DQEF();
      SNQV.HGJY();
      let TCJF = new MWBV(ZYAU);
      let RCZT = new GXZJ(IXDP);
      RCZT.WZMH( SNQV.CNBP.VRFE );
      RCZT.WRBB( SNQV.CNBP.KDSO );
      RCZT.XIXD( SNQV.CNBP.KOCX );
      let CZUS = 0;
      let PWCE = 0.0;
      GLZD();
    }

    SNQV.XTED = function() {
      let IXDP = SNQV.DQEF();
      let RLRJ = d3.selectAll("#submitButton");
      RLRJ.style("display", "block");

      let IPVY = d3.selectAll("[name=user_result]");
      IPVY.attr("value", JSON.stringify(SNQV.KLQP.BYDU));
    }

    SNQV.UYRI = function(){}
    SNQV.KFVF = function() {return SNQV.KLQP;}
    SNQV.XLZO = function(XJRB){}
  }  // end methods
}  // end Experiment



function GXZJ(VLCA)  // This is a CLASS definition.
{
  let SNQV = this;

  SNQV.VLCA = VLCA;
  SNQV.ZXEL = 0;
  SNQV.KDSO = 0;
  SNQV.KOCX = 0;
  SNQV.BYDU = 0;

  SNQV.MDSM = function() {
    SNQV.VLCA.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", SNQV.OYQV);
  }
  SNQV.CCJN = function() {
    SNQV.VLCA.selectAll("text").data([]).exit().remove();
    SNQV.VLCA.selectAll("rect").data([]).exit().remove();
  }
  SNQV.WZMH = function(DIAD){ SNQV.ZXEL = DIAD; }
  SNQV.WRBB = function(NDRM){ SNQV.KDSO = NDRM; }
  SNQV.XIXD = function(NOAT){ SNQV.KOCX = NOAT; }
  SNQV.JFKI = function(BYDU){ SNQV.BYDU = BYDU; }
  SNQV.OYQV = function(){
    let TLET;
    { // create svg element
      TLET = SNQV.VLCA.selectAll("svg").data([1]);
      TLET.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      TLET.exit().remove();
      TLET = SNQV.VLCA.selectAll("svg");
    }

    { // draw cross
      let WJPM = SNQV.KDSO / 2;
      let KKVV = {HSJX:49*.9+WJPM+"vmin", KTYP:51*.9+WJPM+"vmin",
                   EJAF:50*.9+WJPM+"vmin", HEHA:50*.9+WJPM+"vmin",
                   LLXF:2, HZED:SNQV.KOCX};

      let BYEG = {EJAF:49*.9+WJPM+"vmin", HEHA:51*.9+WJPM+"vmin",
                   HSJX:50*.9+WJPM+"vmin", KTYP:50*.9+WJPM+"vmin",
                   LLXF:2, HZED:SNQV.KOCX};

      let XHMD = TLET.selectAll("line").data( [KKVV, BYEG] );
      XHMD.attr("x1", function(JIGV){return JIGV.HSJX;})
          .attr("x2", function(JIGV){return JIGV.KTYP;})
          .attr("y1", function(JIGV){return JIGV.EJAF;})
          .attr("y2", function(JIGV){return JIGV.HEHA;})
          .attr("stroke", function(JIGV){return JIGV.HZED;})
          .attr("stroke-width", function(JIGV){return JIGV.LLXF;});
      XHMD.enter().append("line")
          .attr("x1", function(JIGV){return JIGV.HSJX;})
          .attr("x2", function(JIGV){return JIGV.KTYP;})
          .attr("y1", function(JIGV){return JIGV.EJAF;})
          .attr("y2", function(JIGV){return JIGV.HEHA;})
          .attr("stroke", function(JIGV){return JIGV.HZED;})
          .attr("stroke-width", function(JIGV){return JIGV.LLXF;});
      XHMD.exit().remove();
    }

    { // draw the squares
      function CYZB( EBEO, KJJO, QFKP, PKYF, XMVJ, ORRT) {
        let SNQV = this;
        SNQV.EBEO = EBEO;
        SNQV.KJJO = KJJO;
        SNQV.QFKP = QFKP;
        SNQV.PKYF = PKYF;
        SNQV.XMVJ = XMVJ;
        SNQV.ORRT = ORRT;
        return SNQV;
      }

      let CPZY = SNQV.KDSO + "vmin";

      function AIEZ(RMUE, DIAD, OEOR, OUQK) {
        let WTDN = 2 * Math.PI / RMUE.length;
        let BMZF = []
        for (let ILPA=0; ILPA<RMUE.length; ILPA++)
        {
          let KJJO = (Math.cos(WTDN * ILPA + Math.PI / 2) * DIAD + OEOR)*0.9;
          let QFKP = (Math.sin(WTDN * ILPA + Math.PI / 2) * DIAD + OUQK)*0.9;
          BMZF.push(new CYZB(RMUE[ILPA].NOAT, KJJO, QFKP, RMUE[ILPA].PKYF, CPZY, CPZY));
        }
        return BMZF;
      }

      let VUJC = SNQV.ZXEL;
      let BYDU = AIEZ(SNQV.BYDU[0],VUJC*1.00,50,50).concat(
                 AIEZ(SNQV.BYDU[1],VUJC*0.75,50,50).concat(
                 AIEZ(SNQV.BYDU[2],VUJC*0.50,50,50)));

      let KHSX = TLET.selectAll("rect").data( BYDU );
      KHSX.enter().append("rect")
        .attr("width", function(JIGV){return JIGV.XMVJ})
        .attr("height", function(JIGV){return JIGV.ORRT})
        .attr("x", function(JIGV){return JIGV.KJJO + "vmin"})
        .attr("y", function(JIGV){return JIGV.QFKP + "vmin"})
        .attr("fill", function(JIGV){return JIGV.EBEO});
      KHSX.exit().remove();

      let ZYBA = 0.65;

      let PKYF = TLET.selectAll("text").data( BYDU );
      PKYF.attr("x", function(JIGV){return JIGV.KJJO +SNQV.KDSO/3.25+ "vmin"})
        .attr("y", function(JIGV){return JIGV.QFKP +SNQV.KDSO/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", SNQV.KDSO*ZYBA+"vmin")
        .text(function(JIGV){return JIGV.PKYF});
      PKYF.enter().append("text")
        .attr("x", function(JIGV){return JIGV.KJJO +SNQV.KDSO/3.25+ "vmin"})
        .attr("y", function(JIGV){return JIGV.QFKP +SNQV.KDSO/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", SNQV.KDSO*ZYBA+"vmin")
        .text(function(JIGV){return JIGV.PKYF});
      PKYF.exit().remove();
    }
  }
  window.addEventListener("resize", SNQV.OYQV);
}



function MWBV(MTYU)  // This is a CLASS definition
{
  let SNQV = this;
  let HWTY = false;
  SNQV.TMPD = MTYU;

  SNQV.TUKO = function() {HWTY = true;}
  SNQV.GQVT = function() {HWTY = false;}

  SNQV.ZYAU = function(JELS) {
    if (HWTY == true){
      SNQV.TMPD(JELS.key);
    }
  }

  SNQV.MDSM = function() {
    window.removeEventListener("keypress", SNQV.ZYAU);
  }

  window.addEventListener('keypress', SNQV.ZYAU);
}


