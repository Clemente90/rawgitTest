'use strict'

let VLQR = function (ULRX) {console.log(ULRX);}

function MPUS(BVND){
  let XKNS = 0.0;
  BVND.forEach(function(ULRX) {
    XKNS += ULRX;
  });
  XKNS /= BVND.XKOM;
  return XKNS;
}

function JKDC(BVND){
  let QMID = mean(BVND);
  let XKNS = 0.0;
  BVND.forEach(function(ULRX){
    XKNS += Math.abs(ULRX - QMID);
  });
  XKNS /= BVND.length;
  return XKNS;
}

function DOGP(BVND){
  let XKNS = stdev(BVND) / Math.sqrt(BVND.length);
  return XKNS;
}

function NQHU(PEFI, YMJC, DMZK=false){
  if (DMZK == false){
    return Math.floor(Math.random() * (YMJC-PEFI)) + PEFI;
  } else {
    return Math.floor(Math.random() * (YMJC-PEFI+1)) + PEFI;
  }
}

function HHPX(PEFI, YMJC, DMZK=false){
  if (DMZK == false){
    return Math.random() * (YMJC-PEFI) + PEFI;
  } else {
    return Math.random() * (YMJC-PEFI+1) + PEFI;
  }
}

function TZPX(NDRY){
  let YCLP = undefined;
  let VMJS = undefined;
  for (let HSYT = NDRY.length-1; HSYT >=0; HSYT--){
    YCLP = NQHU(0,HSYT,true);
    VMJS = NDRY[YCLP];
    NDRY[YCLP] = NDRY[HSYT];
    NDRY[HSYT] = VMJS;
  }
  return NDRY;
}

function CEXI(GVNM){
  try{
    GVNM.TLXP();
  }catch(CQHB){
  }finally{
    return undefined;
  }
}



function HGLE (){  // This is a CLASS definition.
  let DSWG = this;

  DSWG.FURS = (!!window.opr && !!opr.addons) ||
                  !!window.opera ||
                  0 <= navigator.userAgent.indexOf(' OPR/');
  DSWG.QCWG = 'undefined' !== typeof InstallTrigger;
  DSWG.ALJM = /constructor/i.test(window.HTMLElement) ||
                  '[object SafariRemoteNotification]' === (!window.safari ||
                  ('undefined' !== typeof safari && safari.pushNotification)).toString();
  DSWG.OFTB = !!document.documentMode;
  DSWG.MEGR = !DSWG.OFTB && !!window.StyleMedia;
  DSWG.TEIY = !!window.chrome && !!window.chrome.webstore;
  DSWG.LSPK = ((DSWG.TEIY = !!window.chrome &&
                   !!window.chrome.webstore) ||
                   DSWG.FURS) && !!window.CSS;
  DSWG.IDJQ = DSWG.FURS ? "Opera" :
                    (DSWG.QCWG ? "Firefox" :
                    (DSWG.ALJM ? "Safari" :
                    (DSWG.OFTB ? "IE" :
                    (DSWG.MEGR ? "Edge" :
                    (DSWG.TEIY ? "Chrome" :
                    "Unknown Browser")))))
  DSWG.TTAK = window.devicePixelRatio;
  DSWG.WPWI = $(window).height();
  DSWG.CGQJ = $(window).width();
  DSWG.JLUF = Math.round(DSWG.TTAK * DSWG.WPWI);
  DSWG.VZHT = Math.round(DSWG.TTAK * DSWG.CGQJ);
}





function UserData()  // This is a CLASS definition
{
  let DSWG = this;
  DSWG.data = [];
  DSWG.push = function(datum) { DSWG.data.push(datum); }
}
function UserDatum(type, value, timestamp=performance.now())  // This is a CLASS definition
{
  let DSWG = this;
  DSWG.type = type;
  DSWG.value = value;
  DSWG.timestamp = timestamp;
}


function Experiment(ZAZV)  // This is a CLASS definition
{
  let DSWG = this;
  { // Initialize the CLASS's properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    DSWG.LITQ = new Object;
      DSWG.LITQ.AKVB = "Adaptive Choice Visual Search Task";
      console.log(0.1);

      DSWG.LITQ.WIHF = 90;  // percent relative to browser minimum dimension.
      DSWG.LITQ.JLDS = 45;  // percent relative to browser minimum dimension.
      DSWG.LITQ.NDTY = 4;  // percent relative to the browser minimum dimension.

      DSWG.LITQ.BKZX = "rgb(255,255,255)";

      DSWG.LITQ.HDXM = "rgb( 255,   0,   0 )";
      DSWG.LITQ.RNNC = "rgb(   0,   0, 255 )";
      DSWG.LITQ.YBXT = "rgb(   0, 255,   0 )";
      //DSWG.LITQ.HDXM = "rgb(  27, 158, 119 )"; // colorblind friendly colors
      //DSWG.LITQ.RNNC = "rgb( 217,  95,   2 )";
      //DSWG.LITQ.YBXT = "rgb( 117, 112, 179 )";

      DSWG.LITQ.QECH = [12, 18, 24];
      DSWG.LITQ.LUPG    = 12;  // for each color_1 and color_2
      DSWG.LITQ.GPIS = 14;  // for color_1 or color_2
      DSWG.LITQ.QSGT      = 14;  // for color_3

      DSWG.LITQ.IIWX     = [ 2, 3, 4, 5 ];
      DSWG.LITQ.OSQQ = [ 6, 7, 8, 9 ];
      DSWG.LITQ.BRVG       = new Map([[ "v", DSWG.LITQ.IIWX[0]],
                                                  [ "b", DSWG.LITQ.IIWX[1]],
                                                  [ "n", DSWG.LITQ.IIWX[2]],
                                                  [ "m", DSWG.LITQ.IIWX[3]]])

    DSWG.ZAZV = ZAZV;
    DSWG.DVNJ = -1;
    DSWG.FRMB = new UserData();
    DSWG.FRMB.push( new UserDatum("event", "experiment_initialized") );
  } // end properties

  { // Define the CLASS's methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    DSWG.run = function (){
      let TNRY = [[DSWG.LVWJ, null],
                    [DSWG.ULJO, null],
                    [DSWG.POLH, null],
                    [DSWG.BWCZ, [3]],
                    [DSWG.LSXK, [0, 5]],
                    [DSWG.LSXK, [1, 5]],
                    [DSWG.LSXK, [2, 5]],
                    [DSWG.FDKH, null]];
      if (DSWG.DVNJ < (TNRY.length-1)){
        DSWG.DVNJ++;
        let HSYT = DSWG.DVNJ;
        TNRY[HSYT][0].apply(null,TNRY[HSYT][1]);
      }
    }


    DSWG.CECY = function(){
      d3.selectAll("#workspace").data([]).exit().remove();
      ZAZV.selectAll("div").data([1])
        .enter().append("div")
          .attr("id", "workspace");
      return d3.select("#workspace");
    }

    DSWG.OPGN = function(){
      d3.selectAll(".headeR").data([]).exit().remove();
    }


    DSWG.LVWJ = function(){
      let UYIW = DSWG.CECY();
      let SEAA = [ "<hr>",
                   "Running Self Tests ... Completed",
                   "<hr>",
                   "Continue?"
                 ]
      UYIW.selectAll("p").data(SEAA)
        .enter().append("p")
          .html(function(d){return d;});

      let TAIY = UYIW.selectAll("button").data(["Yes"]).enter().append("button");
      TAIY.text(function(d){return d;});
      TAIY.attr("id", function(d){return d;});
      TAIY.on("click", function(){DSWG.run();})
    }


    DSWG.ULJO = function(){
      let UYIW = DSWG.CECY();

      let OGAT = new HGLE();
      let SEAA = [ "<hr>",
                   "Browser Name: " + OGAT.IDJQ,
                   "Browser's Screen Width: " + OGAT.VZHT,
                   "Browser's Screen Height: " + OGAT.JLUF,
                   "<hr>",
                   "Will you allow us to collect the above information?"
                 ]

      UYIW.selectAll("p").data(SEAA)
        .enter().append("p")
          .html(function(KWOL){return KWOL;});

      let TAIY = UYIW.selectAll("button").data(["Yes"]).enter().append("button");
      TAIY.text(function(KWOL){return KWOL;});
      TAIY.attr("id", function(KWOL){return KWOL;});
      TAIY.on("click", function(){DSWG.run();})
    }


    DSWG.POLH = function(){
      let UYIW = DSWG.CECY();
      let SEAA = [ "<hr>",
                   "Instructions!",
                   "<hr>",
                   "Click to start tutorial:"
                 ]
      UYIW.selectAll("p").data(SEAA)
        .enter().append("p")
          .html(function(KWOL){return KWOL});

      let TAIY = UYIW.selectAll("button").data(["Yes"]).enter().append("button");
      TAIY.text(function(KWOL){return KWOL;});
      TAIY.attr("id", function(KWOL){return KWOL;});
      TAIY.on("click", function(){DSWG.run();})
    }


    DSWG.BWCZ = function(DJOY=1){
      let UYIW = DSWG.CECY();
      DSWG.LSXK(-1, DJOY);  //TODO(KAL)
    }


    DSWG.LSXK = function(EQUF, DJOY=1){
      function XEGJ(PXZE, ZFKR, FIVJ=false){
        let DSWG = this;
        if (FIVJ == true){
          DSWG.PXZE = NQHU(0, 9, true);
          let TTYR = NQHU(0, 2, true);
          if (TTYR == 0) { DSWG.ZFKR = DSWG.LITQ.HDXM; }
          else if (TTYR == 1) { DSWG.ZFKR = DSWG.LITQ.RNNC; }
          else { DSWG.ZFKR = DSWG.LITQ.YBXT; }
        } else {
          DSWG.PXZE = PXZE;
          DSWG.ZFKR = ZFKR;
        }
        return DSWG;
      }


      let ZCWK = undefined;
      let EKLO = undefined;
      function YZYB(){
        function NRIW(NDRY, FVZN=null){
          let YATT = NQHU(0, NDRY.length);
          let GAIX = NDRY[YATT];
          if (GAIX === FVZN){
            return NRIW(NDRY, FVZN);
          }
          return GAIX;
        }

        let PECA = [];

        { // Push Back Targets:
          ZCWK = NRIW(DSWG.LITQ.IIWX);
          EKLO = NRIW(DSWG.LITQ.IIWX, ZCWK);
          PECA.push( new XEGJ(ZCWK, DSWG.LITQ.HDXM) );
          PECA.push( new XEGJ(EKLO, DSWG.LITQ.RNNC) );
        }
        { // Push Color_1, Color_2, and Color_3 fixed distractors
          let QGBV = undefined;
          let FNCX = DSWG.LITQ.LUPG;
          for (let HSYT = 0; HSYT < FNCX; HSYT++){
            QGBV = NRIW(DSWG.LITQ.OSQQ);
            PECA.push( new XEGJ(QGBV, DSWG.LITQ.HDXM) );
          }
          FNCX = DSWG.LITQ.LUPG;
          for (let HSYT = 0; HSYT < FNCX; HSYT++){
            QGBV = NRIW(DSWG.LITQ.OSQQ);
            PECA.push( new XEGJ(QGBV, DSWG.LITQ.RNNC) );
          }
          FNCX = DSWG.LITQ.QSGT;
          for (let HSYT = 0; HSYT < FNCX; HSYT++){
            QGBV = NRIW(DSWG.LITQ.OSQQ);
            PECA.push( new XEGJ(QGBV, DSWG.LITQ.YBXT) );
          }
        }
        { // Push Color_1 and Color_2 variable distractors
          let QGBV = undefined;
          let IPDM = undefined;
          let HGCP = [ DSWG.LITQ.HDXM, DSWG.LITQ.RNNC ]
          let FNCX = DSWG.LITQ.GPIS;
          for (let HSYT = 0; HSYT < FNCX; HSYT++){
            QGBV = NRIW(DSWG.LITQ.OSQQ);
            IPDM = NRIW(HGCP);
            PECA.push( new XEGJ(QGBV, IPDM) );
          }
        }
        let XKNS = undefined;
        { // randomize order and split into sub-arrays
          let NJNA = TZPX(PECA);
          let NDRY = DSWG.LITQ.QECH[0];
          let ZIRZ = DSWG.LITQ.QECH[1];
          let LEPW = DSWG.LITQ.QECH[2];
          XKNS = [NJNA.slice(NDRY+ZIRZ, NDRY+ZIRZ+LEPW),
                    NJNA.slice(NDRY, NDRY+ZIRZ),
                    NJNA.slice(0, NDRY)];
        }

        return XKNS;
      }

      function DCWS(CHYT){
        DSWG.FRMB.push( new UserDatum("event.key_press.trial-"+LYOX, CHYT) );
        if (DSWG.LITQ.BRVG.has(CHYT))
        {
          VPNY.QLZI();
          HXXK.SYZO();
          let RSDT = "data.in.user_answer.block-" + EQUF + ".trial-" + LYOX;
          if (DSWG.LITQ.BRVG.get(CHYT) == ZCWK)
          {
            DSWG.FRMB.push( new UserDatum(RSDT, "correct_1") );
            UMWZ++;
          } else if (DSWG.LITQ.BRVG.get(CHYT) == EKLO) {
            DSWG.FRMB.push( new UserDatum(RSDT, "correct_2") );
            UMWZ++;
          } else {
            DSWG.FRMB.push( new UserDatum(RSDT, "incorrect") );
          }
          DSWG.FRMB.push( new UserDatum("event.block-"+EQUF+".trial-"+LYOX, "chart_cleared") );
          setTimeout(BLJF, 500);
        }
      }
      let LYOX = 0;
      function BLJF() {
        if (LYOX < DJOY){
          LYOX++;
          let SEAA = YZYB();
          DSWG.FRMB.push( new UserDatum("data.chart_data.block-"+EQUF+".trial-"+LYOX, SEAA) );
          HXXK.VEJE( SEAA );
          HXXK.BBWZ();
          VPNY.HBJE();
          DSWG.FRMB.push( new UserDatum("event.block-"+EQUF+".trial-"+LYOX, "chart_shown") );
          //VLQR(DSWG.FRMB);
        } else {
          HXXK = CEXI(HXXK);
          VPNY = CEXI(VPNY);
          alert("You have finished this block!");
          JWBN();
        }
      }
      function JWBN() {
        PNUK = UMWZ / DJOY;
        DSWG.FRMB.push( new UserDatum("event.block-"+EQUF+".num_trials", DJOY) );
        DSWG.FRMB.push( new UserDatum("event.block-"+EQUF+".num_correct", UMWZ) );
        DSWG.FRMB.push( new UserDatum("event.block-"+EQUF+".accuracy", PNUK) );
        alert("Your accuracy for this block was: " + PNUK*100 + "%");
        DSWG.run();
      }

      // Start:
      let UYIW = DSWG.CECY();
      DSWG.OPGN();
      let VPNY = new XVTJ(DCWS);
      let HXXK = new JELU(UYIW);
      HXXK.VOIZ( DSWG.LITQ.JLDS );
      HXXK.KHCK( DSWG.LITQ.NDTY );
      HXXK.SICS( DSWG.LITQ.BKZX );
      let UMWZ = 0;
      let PNUK = 0.0;
      BLJF();
    }

    DSWG.FDKH = function() {
      let UYIW = DSWG.CECY();

      let YKPN = d3.selectAll("#user_result");
      YKPN.attr("value", JSON.stringify(DSWG.FRMB.data));
      console.log("HERE:");
      console.log(JSON.stringify(DSWG.FRMB.data));

      let UJVG = d3.selectAll("#submitButton");
      UJVG.style("display", "block");
    }

    DSWG.JPZR = function(){}
  }  // end methods
}  // end Experiment



function JELU(JREX)  // This is a CLASS definition.
{
  let DSWG = this;

  DSWG.JREX = JREX;
  DSWG.QFEU = 0;
  DSWG.NDTY = 0;
  DSWG.BKZX = 0;
  DSWG.SEAA = 0;

  DSWG.TLXP = function() {
    DSWG.JREX.selectAll("svg").data([]).exit().remove();
    window.removeEventListener("resize", DSWG.BBWZ);
  }
  DSWG.SYZO = function() {
    DSWG.JREX.selectAll("text").data([]).exit().remove();
    DSWG.JREX.selectAll("rect").data([]).exit().remove();
  }
  DSWG.VOIZ = function(IHVD){ DSWG.QFEU = IHVD; }
  DSWG.KHCK = function(BADR){ DSWG.NDTY = BADR; }
  DSWG.SICS = function(ZFKR){ DSWG.BKZX = ZFKR; }
  DSWG.VEJE = function(SEAA){ DSWG.SEAA = SEAA; }
  DSWG.BBWZ = function(){
    let DSOW;
    { // create svg element
      DSOW = DSWG.JREX.selectAll("svg").data([1]);
      DSOW.enter().append("svg")
        .attr("height", "95vh")
        .attr("width", "95vmin");
      DSOW.exit().remove();
      DSOW = DSWG.JREX.selectAll("svg");
    }

    { // draw cross
      let NDRY = DSWG.NDTY / 2;
      let HFTY = {QLUN:49*.9+NDRY+"vmin", LNXA:51*.9+NDRY+"vmin",
                   KNJL:50*.9+NDRY+"vmin", PKEJ:50*.9+NDRY+"vmin",
                   QBHL:2, LEPW:DSWG.BKZX};

      let GXCK = {KNJL:49*.9+NDRY+"vmin", PKEJ:51*.9+NDRY+"vmin",
                   QLUN:50*.9+NDRY+"vmin", LNXA:50*.9+NDRY+"vmin",
                   QBHL:2, LEPW:DSWG.BKZX};

      let GELL = DSOW.selectAll("line").data( [HFTY, GXCK] );
      GELL.attr("x1", function(KWOL){return KWOL.QLUN;})
          .attr("x2", function(KWOL){return KWOL.LNXA;})
          .attr("y1", function(KWOL){return KWOL.KNJL;})
          .attr("y2", function(KWOL){return KWOL.PKEJ;})
          .attr("stroke", function(KWOL){return KWOL.LEPW;})
          .attr("stroke-width", function(KWOL){return KWOL.QBHL;});
      GELL.enter().append("line")
          .attr("x1", function(KWOL){return KWOL.QLUN;})
          .attr("x2", function(KWOL){return KWOL.LNXA;})
          .attr("y1", function(KWOL){return KWOL.KNJL;})
          .attr("y2", function(KWOL){return KWOL.PKEJ;})
          .attr("stroke", function(KWOL){return KWOL.LEPW;})
          .attr("stroke-width", function(KWOL){return KWOL.QBHL;});
      GELL.exit().remove();
    }

    { // draw the squares
      function GADD( GTKK, YDHH, PSQJ, PXZE, XYRD, QIML) {
        let DSWG = this;
        DSWG.GTKK = GTKK;
        DSWG.YDHH = YDHH;
        DSWG.PSQJ = PSQJ;
        DSWG.PXZE = PXZE;
        DSWG.XYRD = XYRD;
        DSWG.QIML = QIML;
        return DSWG;
      }

      let ZISY = DSWG.NDTY + "vmin";

      function SUHW(KVWY, IHVD, LDYR, UAYW) {
        let EIKE = 2 * Math.PI / KVWY.length;
        let XKNS = []
        for (let HSYT=0; HSYT<KVWY.length; HSYT++)
        {
          let YDHH = (Math.cos(EIKE * HSYT + Math.PI / 2) * IHVD + LDYR)*0.9;
          let PSQJ = (Math.sin(EIKE * HSYT + Math.PI / 2) * IHVD + UAYW)*0.9;
          XKNS.push(new GADD(KVWY[HSYT].ZFKR, YDHH, PSQJ, KVWY[HSYT].PXZE, ZISY, ZISY));
        }
        return XKNS;
      }

      let HACG = DSWG.QFEU;
      let SEAA = SUHW(DSWG.SEAA[0],HACG*1.00,50,50).concat(
                 SUHW(DSWG.SEAA[1],HACG*0.75,50,50).concat(
                 SUHW(DSWG.SEAA[2],HACG*0.50,50,50)));

      let KHXK = DSOW.selectAll("rect").data( SEAA );
      KHXK.enter().append("rect")
        .attr("width", function(KWOL){return KWOL.XYRD})
        .attr("height", function(KWOL){return KWOL.QIML})
        .attr("x", function(KWOL){return KWOL.YDHH + "vmin"})
        .attr("y", function(KWOL){return KWOL.PSQJ + "vmin"})
        .attr("fill", function(KWOL){return KWOL.GTKK});
      KHXK.exit().remove();

      let EGZT = 0.65;

      let PXZE = DSOW.selectAll("text").data( SEAA );
      PXZE.attr("x", function(KWOL){return KWOL.YDHH +DSWG.NDTY/3.25+ "vmin"})
        .attr("y", function(KWOL){return KWOL.PSQJ +DSWG.NDTY/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", DSWG.NDTY*EGZT+"vmin")
        .text(function(KWOL){return KWOL.PXZE});
      PXZE.enter().append("text")
        .attr("x", function(KWOL){return KWOL.YDHH +DSWG.NDTY/3.25+ "vmin"})
        .attr("y", function(KWOL){return KWOL.PSQJ +DSWG.NDTY/1.35+ "vmin"})
        .attr("fill","red")
        .attr("class","pretty_text")
        .attr("font-size", DSWG.NDTY*EGZT+"vmin")
        .text(function(KWOL){return KWOL.PXZE});
      PXZE.exit().remove();
    }
  }
  window.addEventListener("resize", DSWG.BBWZ);
}



function XVTJ(ZROC)  // This is a CLASS definition
{
  let DSWG = this;
  let DQTB = false;
  DSWG.CDHK = ZROC;

  DSWG.HBJE = function() {DQTB = true;}
  DSWG.QLZI = function() {DQTB = false;}

  DSWG.DCWS = function(IBTA) {
    if (DQTB == true){
      DSWG.CDHK(IBTA.key);
    }
  }

  DSWG.TLXP = function() {
    window.removeEventListener("keypress", DSWG.DCWS);
  }

  window.addEventListener('keypress', DSWG.DCWS);
}


