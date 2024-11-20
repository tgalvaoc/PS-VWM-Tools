export function genShape() {
  var links = [
    "https://imgur.com/vWUDick.png",
    "https://imgur.com/t3RMerU.png",
    "https://imgur.com/Cx0CRPZ.png",
    "https://imgur.com/Q0phCbo.png",
    "https://imgur.com/Fi2Lvh1.png",
    "https://imgur.com/nrbqk1S.png",
    "https://imgur.com/SUwImBj.png",
    "https://imgur.com/EyNE00c.png",
    "https://imgur.com/rSAYNzU.png",
    "https://imgur.com/pV19bxU.png",
    "https://imgur.com/WH941dS.png",
    "https://imgur.com/ihxbSML.png",
    "https://imgur.com/3mrQ3C8.png",
    "https://imgur.com/yENIClI.png",
    "https://imgur.com/pKNGuVZ.png",
    "https://imgur.com/vT728OW.png",
    "https://imgur.com/H3bhhIM.png",
    "https://imgur.com/bB88H6E.png",
    "https://imgur.com/8wamRLZ.png",
    "https://imgur.com/caMxg1o.png",
    "https://imgur.com/jP3LSmN.png",
    "https://imgur.com/lw7P9Ol.png",
    "https://imgur.com/5uB1mDF.png",
    "https://imgur.com/dwxaR0c.png",
    "https://imgur.com/PCKLmkt.png",
    "https://imgur.com/fll2c1z.png",
    "https://imgur.com/zzVeGzP.png",
    "https://imgur.com/8KPkfXG.png",
    "https://imgur.com/oHaXuUZ.png",
    "https://imgur.com/D1bghso.png",
    "https://imgur.com/CtPvAAQ.png",
    "https://imgur.com/M6DhkAd.png",
    "https://imgur.com/pCB6WLi.png",
    "https://imgur.com/JLU7GRe.png",
    "https://imgur.com/eSeMEWT.png",
    "https://imgur.com/5TeCiIQ.png",
    "https://imgur.com/CNcev9q.png",
    "https://imgur.com/v4wUiTS.png",
    "https://imgur.com/T6nlWYG.png",
    "https://imgur.com/MqB69Mx.png",
    "https://imgur.com/jGpgiSK.png",
    "https://imgur.com/PU3PkCe.png",
    "https://imgur.com/RUpG5fv.png",
    "https://imgur.com/kWXcBdo.png",
    "https://imgur.com/YzK4YGO.png",
    "https://imgur.com/a0cwbYF.png",
    "https://imgur.com/npYQviv.png",
    "https://imgur.com/CtgVY6W.png",
    "https://imgur.com/ZnpEaPl.png",
    "https://imgur.com/Q8owgwt.png",
    "https://imgur.com/CMNDVVZ.png",
    "https://imgur.com/9hKhe37.png",
  ];

  var questionsArray = [];
  var keys = links.sort(() => 0.5 - Math.random()).slice(0, 48);

  for (let i = 0; i < 48; i++) {
    var key = keys[i];
    var options = [];

    var linksWithoutKey = links.filter(function (item) {
      return item !== key;
    });

    options = linksWithoutKey.sort(() => 0.5 - Math.random()).slice(0, 4);
    options.push(key);

    questionsArray.push([key, options.sort(() => 0.5 - Math.random())]);
  }
  return questionsArray;
}
