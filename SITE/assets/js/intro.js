const COLORS = {
        white:   '#ffffff',
        black:   '#000000',
        green:   '#49F2CC',
        pink:    '#777',
        grey:    '#29363B',
        cyan:    'cyan',
        yellow:  '#FFE202',
        hotpink: 'deeppink',
      };
const blendMode = 'screen';

const y = -50;

const staticTriangle = new mojs.Shape({
  shape:        'polygon',
  duration:     4360,
  radius:       { 60: 65 },
  angle:       -60,
  fill:         'none',
  stroke:       COLORS.white,
  strokeWidth:  { 30 : 5 },
  easing:       'cubic.out',
  isShowEnd:    false,
  width:        170,
  height:       170,
  y
}).play();

// small triangles

let shift1 = 87,
    shift2 = 50,
    SMALL_OPTS = {
      shape:        'polygon',
      duration:     4360,
      radius:       14,
      angle:       -60,
      fill:         'none',
      stroke:       COLORS.white,
      strokeWidth:  { 14 : 4 },
      easing:       'expo.out',
      isShowEnd:    false
    };

    let small1 = new mojs.Shape({
      ...SMALL_OPTS,
      x: { 0: -shift1 },
      y: { [y]: -shift2 + y }
    }).play();

    let small2 = new mojs.Shape({
      ...SMALL_OPTS,
      x: { 0: shift1 },
      y: { [y]: -shift2 + y }
    }).play();

    let small3 = new mojs.Shape({
      ...SMALL_OPTS,
      y: { [y]: 1.15*shift1 + y }
    }).play();
const LINE_OPTS = {
  shape:        'polygon',
  duration:     4500,
  radius:       { 150 : 100 },
  angle:        { '-50': '-60' },
  fill:         'none',
  isShowEnd:    false,
  stroke:       COLORS.white,
  strokeWidth:  2,
  strokeDasharray:  {'40% 100%' : '60% 100%'},
  strokeDashoffset: { '80%' : '-66%' },
  y: y
};
const LINE_OPTSsec = {
  shape:        'polygon',
  duration:     4500,
  isShowEnd:    false,
  radius:       { 150 : 200 },
  angle:        { '-50': '-60' },
  fill:         'none',
  stroke:       COLORS.white,
  strokeWidth:  2,
  strokeDasharray:  {'40% 100%' : '60% 100%'},
  strokeDashoffset: { '80%' : '-66%' },
  y: y
};

let trangleLine4 = new mojs.Transit(LINE_OPTSsec);
trangleLine4.el.style[ 'mix-blend-mode' ] = blendMode;

let trangleLine5 = new mojs.Transit({
  ...LINE_OPTSsec,
  stroke: COLORS.white,
  strokeDasharray: {'20% 100%' : '70% 120%'},
  strokeDashoffset: { '42%' : '-76%' },
  angle: { [-20] : -60 },
  delay: 45

});
trangleLine5.el.style[ 'mix-blend-mode' ] = blendMode;

let trangleLine6  = new mojs.Transit({
  ...LINE_OPTSsec,
  stroke: COLORS.white,
  strokeDasharray: {'20% 100%' : '80% 120%'},
  strokeDashoffset: { '42%' : '-86%' },
  angle: { [-40] : -60 },
  delay: 90
});
trangleLine6.el.style[ 'mix-blend-mode' ] = blendMode;

let trangleLine1 = new mojs.Transit(LINE_OPTS);
trangleLine1.el.style[ 'mix-blend-mode' ] = blendMode;

let trangleLine2 = new mojs.Transit({
  ...LINE_OPTS,
  stroke: COLORS.white,
  strokeDasharray: {'20% 100%' : '70% 120%'},
  strokeDashoffset: { '42%' : '-76%' },
  angle: { [-20] : -60 },
  delay: 45
});
trangleLine2.el.style[ 'mix-blend-mode' ] = blendMode;

let trangleLine3  = new mojs.Transit({
  ...LINE_OPTS,
  stroke: COLORS.white,
  strokeDasharray: {'20% 100%' : '80% 120%'},
  strokeDashoffset: { '42%' : '-86%' },
  angle: { [-40] : -60 },
  delay: 90
});
trangleLine3.el.style[ 'mix-blend-mode' ] = blendMode;
// supporting large triangles

let SUPP_OPTS = {
  shape:        'polygon',
  duration:     4000,
  radius:       { 40: 20 },
  angle:       -60,
  fill:         'white',
  fillOpacity:  { 0: 1 },
  stroke:       COLORS.white,
  strokeWidth:  { 7 : 0 },
  easing:       'cubic.out',
  delay:        40,
  y,
  // x:            1,
  isShowEnd:    false
}
let support1 = new mojs.Shape(SUPP_OPTS).play();

let support2 = new mojs.Transit({
  ...SUPP_OPTS,
  strokeWidth: { 4 : 0 },
  fill:         'none',
  // duration:     810,
  radius:       { 85 : 95 }
});

const timeline = new mojs.Timeline();
timeline
  .add( trangleLine1, trangleLine3, trangleLine4, trangleLine5 )
  .add(
    staticTriangle,
    [ small1, small2, small3 ],
    [ support1, support2 ]
  ).play();

  $("#os-phrases > a")
      .css('opacity', 1).lettering( 'words' )
      .children( "span" ).lettering()
      .children( "span" ).lettering();
