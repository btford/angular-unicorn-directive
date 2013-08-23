/*
 * angular-unicorn-directive v0.0.2
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

angular.module('unicorn-directive', []).
  directive('unicorn', function () {
    var baseWidth = 236;
    var baseHeight = 157;

    // Based on "Invisible Pink Unicorn SVG"
    // http://en.wikipedia.org/wiki/File:Invisible_Pink_Unicorn.svg
    // used under CCA 2.5

    // canvas draw code automagically generated from canvg
    // https://code.google.com/p/canvg/
    var draw = function(ctx, options) {
      var xr = options.scale * options.width / baseWidth;
      var yr = options.scale * options.height / baseHeight;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(xr*236.10677,0);
      ctx.lineTo(xr*236.10677,yr*157.18086);
      ctx.lineTo(0,yr*157.18086);
      ctx.closePath();
      ctx.clip();
      ctx.strokeStyle = 'rgba(0,0,0,0)';
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'miter';
      ctx.miterLimit = 4;
      ctx.save();
      ctx.restore();
      ctx.save();
      ctx.restore();
      ctx.save();
      ctx.translate(xr*-13.44662,yr*-12.909571);
      ctx.save();
      g=ctx.createLinearGradient(xr*52.086075,yr*43.064625,xr*237.03638,yr*108.04962);
      g.addColorStop(0,options.color);
      g.addColorStop(0.11504425,options.color);
      g.addColorStop(0.28733653,options.color);
      g.addColorStop(1,options.color);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(xr*178.19663,yr*169.89899);
      ctx.bezierCurveTo(xr*174.02871,yr*168.73791,xr*178.78745,yr*160.57526,xr*183.65118,yr*160.54282);
      ctx.bezierCurveTo(xr*188.34077,yr*160.51153,xr*188.70956,yr*159.5331,xr*188.29123,yr*148.23219);
      ctx.bezierCurveTo(xr*187.83836,yr*135.9981,xr*187.61601,yr*135.62017,xr*176.40619,yr*128.03075);
      ctx.bezierCurveTo(xr*168.25205,yr*122.51013,xr*161.87331,yr*115.1573,xr*158.90733,yr*107.85965);
      ctx.bezierCurveTo(xr*157.68684,yr*104.85671,xr*156.2964,yr*102.03847,xr*155.81745,yr*101.59688);
      ctx.bezierCurveTo(xr*155.3385,yr*101.15529,xr*149.99663,yr*101.1763,xr*143.94663,yr*101.64358);
      ctx.bezierCurveTo(xr*136.8594,yr*102.19096,xr*130.81239,yr*102.11987,xr*126.94663,yr*101.44371);
      ctx.bezierCurveTo(xr*120.99554,yr*100.40282,xr*118.45086,yr*99.323519,xr*104.94663,yr*92.112637);
      ctx.bezierCurveTo(xr*98.134816,yr*88.475323,xr*97.744996,yr*88.392208,xr*90.446627,yr*89.021082);
      ctx.bezierCurveTo(xr*86.321617,yr*89.376519,xr*80.410127,yr*90.14127,xr*77.309967,yr*90.720529);
      ctx.bezierCurveTo(xr*71.859677,yr*91.738905,xr*71.653397,yr*91.894147,xr*71.070977,yr*95.415919);
      ctx.bezierCurveTo(xr*69.498487,yr*104.92432,xr*71.320527,yr*110.55813,xr*75.968137,yr*110.55813);
      ctx.bezierCurveTo(xr*77.325517,yr*110.55813,xr*78.827937,yr*111.40211,xr*79.411437,yr*112.49239);
      ctx.bezierCurveTo(xr*80.759827,yr*115.01188,xr*80.752127,yr*122.55813,xr*79.401167,yr*122.55813);
      ctx.bezierCurveTo(xr*78.173437,yr*122.55813,xr*73.446617,yr*118.01871,xr*73.446617,yr*116.83965);
      ctx.bezierCurveTo(xr*73.446617,yr*116.39449,xr*71.759117,yr*114.98647,xr*69.696617,yr*113.71072);
      ctx.lineTo(xr*65.946617,yr*111.39118);
      ctx.lineTo(xr*65.724197,yr*99.857369);
      ctx.bezierCurveTo(xr*65.601867,yr*93.513779,xr*65.935627,yr*87.512922,xr*66.465877,yr*86.522126);
      ctx.bezierCurveTo(xr*66.996137,yr*85.531331,xr*68.896227,yr*84.427418,xr*70.688307,yr*84.068987);
      ctx.bezierCurveTo(xr*76.558677,yr*82.894858,xr*83.446617,yr*80.416148,xr*83.446617,yr*79.477749);
      ctx.bezierCurveTo(xr*83.446617,yr*78.971951,xr*83.012457,yr*78.558116,xr*82.481807,yr*78.558116);
      ctx.bezierCurveTo(xr*81.098577,yr*78.558116,xr*79.681027,yr*75.555658,xr*77.978867,yr*69.020607);
      ctx.bezierCurveTo(xr*76.761077,yr*64.345183,xr*76.701617,yr*62.108185,xr*77.648417,yr*56.586882);
      ctx.bezierCurveTo(xr*78.716417,yr*50.358773,xr*78.639717,yr*49.541164,xr*76.624777,yr*45.675411);
      ctx.bezierCurveTo(xr*75.426787,yr*43.377026,xr*74.446617,yr*40.696394,xr*74.446617,yr*39.718452);
      ctx.bezierCurveTo(xr*74.446617,yr*38.74051,xr*73.785937,yr*37.066867,xr*72.978427,yr*35.999246);
      ctx.bezierCurveTo(xr*71.207607,yr*33.658021,xr*71.093777,yr*34.247499,xr*72.524267,yr*38.351019);
      ctx.bezierCurveTo(xr*73.347687,yr*40.71307,xr*73.221337,yr*43.308315,xr*71.988707,yr*49.351758);
      ctx.bezierCurveTo(xr*71.019657,yr*54.102929,xr*70.637277,yr*58.89823,xr*71.031097,yr*61.361025);
      ctx.bezierCurveTo(xr*71.782667,yr*66.061096,xr*70.120597,yr*68.558116,xr*66.240557,yr*68.558116);
      ctx.bezierCurveTo(xr*62.195687,yr*68.558116,xr*59.692527,yr*65.931965,xr*58.518217,yr*60.456334);
      ctx.bezierCurveTo(xr*57.916067,yr*57.648624,xr*55.547787,yr*51.685416,xr*53.255367,yr*47.204761);
      ctx.bezierCurveTo(xr*50.962937,yr*42.724106,xr*48.800547,yr*38.413125,xr*48.450047,yr*37.624803);
      ctx.bezierCurveTo(xr*48.099547,yr*36.836482,xr*46.267897,yr*35.671333,xr*44.379697,yr*35.035584);
      ctx.bezierCurveTo(xr*41.737947,yr*34.146114,xr*40.946617,yr*33.323992,xr*40.946617,yr*31.468896);
      ctx.bezierCurveTo(xr*40.946617,yr*29.297332,xr*41.313867,yr*29.090128,xr*44.647637,yr*29.380731);
      ctx.lineTo(xr*48.348657,yr*29.703346);
      ctx.lineTo(xr*47.414747,yr*26.446962);
      ctx.bezierCurveTo(xr*46.186547,yr*22.164507,xr*46.841387,yr*21.734529,xr*50.486867,yr*24.429748);
      ctx.lineTo(xr*53.502507,yr*26.659312);
      ctx.lineTo(xr*56.048587,yr*24.656568);
      ctx.bezierCurveTo(xr*57.448927,yr*23.555058,xr*59.926387,yr*20.815437,xr*61.554047,yr*18.568519);
      ctx.bezierCurveTo(xr*65.413457,yr*13.240748,xr*67.868867,yr*12.380139,xr*75.416787,yr*13.70968);
      ctx.bezierCurveTo(xr*80.056457,yr*14.526942,xr*81.825717,yr*14.488385,xr*82.962117,yr*13.54525);
      ctx.bezierCurveTo(xr*83.778597,yr*12.867637,xr*84.439727,yr*12.705826,xr*84.431307,yr*13.18567);
      ctx.bezierCurveTo(xr*84.405367,yr*14.663384,xr*83.036167,yr*16.17086,xr*81.053497,yr*16.904595);
      ctx.bezierCurveTo(xr*77.313927,yr*18.288511,xr*80.443707,yr*18.758295,xr*85.431507,yr*17.56174);
      ctx.bezierCurveTo(xr*90.308987,yr*16.391651,xr*90.690737,yr*16.455284,xr*94.4587,yr*19.066482);
      ctx.bezierCurveTo(xr*97.249096,yr*21.00023,xr*99.257746,yr*21.666067,xr*101.36702,yr*21.356491);
      ctx.bezierCurveTo(xr*105.12239,yr*20.80532,xr*104.28119,yr*22.311467,xr*99.784236,yr*24.190413);
      ctx.bezierCurveTo(xr*97.904206,yr*24.975939,xr*96.625206,yr*26.038055,xr*96.942026,yr*26.550669);
      ctx.bezierCurveTo(xr*97.290156,yr*27.113959,xr*98.459946,yr*27.053537,xr*99.898816,yr*26.397945);
      ctx.bezierCurveTo(xr*101.72295,yr*25.566816,xr*103.3929,yr*25.692536,xr*107.04125,yr*26.935656);
      ctx.bezierCurveTo(xr*109.66016,yr*27.828009,xr*112.84775,yr*28.558116,xr*114.12477,yr*28.558116);
      ctx.bezierCurveTo(xr*117.34559,yr*28.558116,xr*117.02609,yr*30.207105,xr*113.44663,yr*32.058116);
      ctx.bezierCurveTo(xr*111.79663,yr*32.911364,xr*110.44663,yr*33.801719,xr*110.44663,yr*34.036681);
      ctx.bezierCurveTo(xr*110.44663,yr*34.271644,xr*112.62217,yr*34.206225,xr*115.28117,yr*33.891307);
      ctx.bezierCurveTo(xr*119.72406,yr*33.365112,xr*120.50534,yr*33.616141,xr*124.92541,yr*36.990058);
      ctx.bezierCurveTo(xr*127.57075,yr*39.009291,xr*130.34521,yr*40.427277,xr*131.09087,yr*40.141138);
      ctx.bezierCurveTo(xr*133.58189,yr*39.185246,xr*132.48399,yr*40.487435,xr*129.49629,yr*42.032436);
      ctx.bezierCurveTo(xr*127.8736,yr*42.87156,xr*125.6236,yr*43.558116,xr*124.49629,yr*43.558116);
      ctx.bezierCurveTo(xr*121.55384,yr*43.558116,xr*121.92293,yr*45.114877,xr*126.54871,yr*52.214791);
      ctx.bezierCurveTo(xr*130.95208,yr*58.97335,xr*136.12303,yr*62.347906,xr*145.44663,yr*64.547567);
      ctx.bezierCurveTo(xr*160.30383,yr*68.052736,xr*169.33874,yr*70.446594,xr*172.1568,yr*71.624605);
      ctx.bezierCurveTo(xr*174.94561,yr*72.790386,xr*175.83397,yr*72.743832,xr*178.92478,yr*71.269929);
      ctx.bezierCurveTo(xr*180.95666,yr*70.300989,xr*182.9502,yr*68.390616,xr*183.57289,yr*66.815724);
      ctx.bezierCurveTo(xr*185.90206,yr*60.924864,xr*187.45858,yr*58.97517,xr*191.62567,yr*56.728827);
      ctx.bezierCurveTo(xr*197.63021,yr*53.491978,xr*205.74458,yr*54.040611,xr*209.07149,yr*57.908384);
      ctx.bezierCurveTo(xr*211.44005,yr*60.66199,xr*211.60476,yr*61.337988,xr*213.4076,yr*75.704029);
      ctx.bezierCurveTo(xr*214.88499,yr*87.47668,xr*216.9591,yr*93.933259,xr*220.59315,yr*98.072209);
      ctx.bezierCurveTo(xr*223.44233,yr*101.31726,xr*224.06346,yr*101.55812,xr*229.58234,yr*101.55812);
      ctx.bezierCurveTo(xr*237.08462,yr*101.55812,xr*242.05682,yr*99.540909,xr*246.25001,yr*94.796079);
      ctx.lineTo(xr*249.55339,yr*91.058116);
      ctx.lineTo(xr*247.94933,yr*95.058119);
      ctx.bezierCurveTo(xr*246.29101,yr*99.193429,xr*241.44372,yr*104.89611,xr*237.94663,yr*106.82599);
      ctx.bezierCurveTo(xr*236.84663,yr*107.43302,xr*233.69663,yr*108.48282,xr*230.94663,yr*109.15886);
      ctx.lineTo(xr*225.94663,yr*110.38804);
      ctx.lineTo(xr*232.05571,yr*110.47308);
      ctx.bezierCurveTo(xr*236.87662,yr*110.5402,xr*239.34049,yr*109.96509,xr*243.74052,yr*107.74567);
      ctx.bezierCurveTo(xr*248.74774,yr*105.21998,xr*249.20709,yr*105.13719,xr*248.24562,yr*106.93372);
      ctx.bezierCurveTo(xr*246.47458,yr*110.24294,xr*238.4029,yr*118.42204,xr*234.5711,yr*120.79022);
      ctx.bezierCurveTo(xr*231.69491,yr*122.5678,xr*229.45938,yr*123.013,xr*223.30877,yr*123.03308);
      ctx.bezierCurveTo(xr*216.20468,yr*123.05627,xr*215.34952,yr*122.82816,xr*211.79078,yr*119.96077);
      ctx.bezierCurveTo(xr*209.6765,yr*118.25722,xr*203.24085,yr*117.17997,xr*201.94663,yr*107.20774);
      ctx.bezierCurveTo(xr*201.2171,yr*101.58655,xr*201.94663,yr*89.561592,xr*201.94663,yr*89.561592);
      ctx.bezierCurveTo(xr*201.94663,yr*89.561592,xr*203.72566,yr*79.371761,xr*201.32261,yr*72.046313);
      ctx.bezierCurveTo(xr*199.45,yr*66.337852,xr*193.19646,yr*63.482012,xr*189.00707,yr*70.031087);
      ctx.bezierCurveTo(xr*187.08151,yr*73.041221,xr*184.65137,yr*76.037815,xr*183.60676,yr*76.690184);
      ctx.bezierCurveTo(xr*181.76323,yr*77.841489,xr*181.77953,yr*78.015188,xr*184.1619,yr*82.607098);
      ctx.bezierCurveTo(xr*187.61375,yr*89.260398,xr*188.03464,yr*96.962279,xr*185.58005,yr*108.55813);
      ctx.lineTo(xr*183.56911,yr*118.05813);
      ctx.lineTo(xr*186.00804,yr*121.61213);
      ctx.bezierCurveTo(xr*187.34946,yr*123.56683,xr*190.0219,yr*126.69261,xr*191.9468,yr*128.5583);
      ctx.bezierCurveTo(xr*195.9045,yr*132.39424,xr*196.0382,yr*133.5785,xr*194.79944,yr*153.82443);
      ctx.bezierCurveTo(xr*194.23996,yr*162.96854,xr*193.90119,yr*164.4675,xr*192.29944,yr*164.88637);
      ctx.bezierCurveTo(xr*191.2804,yr*165.15286,xr*190.44663,yr*166.0577,xr*190.44663,yr*166.89712);
      ctx.bezierCurveTo(xr*190.44663,yr*167.73655,xr*189.65913,yr*168.65469,xr*188.69663,yr*168.93742);
      ctx.bezierCurveTo(xr*185.46457,yr*169.88686,xr*179.96198,yr*170.39077,xr*178.19663,yr*169.89899);
      ctx.closePath();
      ctx.moveTo(xr*55.446617,yr*44.435671);
      ctx.bezierCurveTo(xr*55.446617,yr*42.63358,xr*55.213077,yr*42.507054,xr*53.899287,yr*43.5974);
      ctx.bezierCurveTo(xr*52.663387,yr*44.623103,xr*52.613067,yr*45.047214,xr*53.649287,yr*45.704532);
      ctx.bezierCurveTo(xr*55.433577,yr*46.836388,xr*55.446617,yr*46.827179,xr*55.446617,yr*44.435671);
      ctx.closePath();
      ctx.moveTo(xr*129.69663,yr*159.54999);
      ctx.bezierCurveTo(xr*128.45913,yr*159.03991,xr*127.44663,yr*158.12346,xr*127.44663,yr*157.51343);
      ctx.bezierCurveTo(xr*127.44663,yr*155.77523,xr*133.10401,yr*150.55813,xr*134.9889,yr*150.55813);
      ctx.bezierCurveTo(xr*137.08919,yr*150.55813,xr*147.97832,yr*144.14513,xr*151.69663,yr*140.71834);
      ctx.bezierCurveTo(xr*156.40825,yr*136.37613,xr*155.30327,yr*130.6279,xr*147.89004,yr*120.91605);
      ctx.bezierCurveTo(xr*144.93486,yr*117.04456,xr*140.59067,yr*106.08075,xr*141.60854,yr*105.06289);
      ctx.bezierCurveTo(xr*141.79935,yr*104.87207,xr*144.64567,yr*104.56794,xr*147.9337,yr*104.38704);
      ctx.lineTo(xr*153.91192,yr*104.05813);
      ctx.lineTo(xr*157.10311,yr*110.05813);
      ctx.bezierCurveTo(xr*161.19743,yr*117.75614,xr*160.86154,yr*116.98781,xr*163.44197,yr*124.55813);
      ctx.bezierCurveTo(xr*167.39208,yr*136.14669,xr*167.45977,yr*135.78204,xr*160.34706,yr*141.22994);
      ctx.bezierCurveTo(xr*156.88006,yr*143.88545,xr*152.44665,yr*147.44559,xr*150.49503,yr*149.14138);
      ctx.bezierCurveTo(xr*148.54341,yr*150.83716,xr*146.15238,yr*152.51313,xr*145.18162,yr*152.86575);
      ctx.bezierCurveTo(xr*144.21087,yr*153.21837,xr*143.00113,yr*154.5997,xr*142.49331,yr*155.93537);
      ctx.bezierCurveTo(xr*141.98549,yr*157.27103,xr*141.20474,yr*158.58066,xr*140.75831,yr*158.84564);
      ctx.bezierCurveTo(xr*138.88799,yr*159.9558,xr*131.77932,yr*160.40844,xr*129.69663,yr*159.54999);
      ctx.closePath();
      ctx.moveTo(xr*38.446617,yr*115.49603);
      ctx.bezierCurveTo(xr*38.446617,yr*113.23559,xr*41.213087,yr*104.23857,xr*42.889827,yr*101.04592);
      ctx.bezierCurveTo(xr*43.471067,yr*99.939197,xr*46.049387,yr*95.880929,xr*48.619437,yr*92.027531);
      ctx.bezierCurveTo(xr*51.189487,yr*88.174134,xr*53.572717,yr*83.904626,xr*53.915507,yr*82.539735);
      ctx.bezierCurveTo(xr*54.440207,yr*80.450518,xr*56.073177,yr*79.522496,xr*64.242687,yr*76.670757);
      ctx.bezierCurveTo(xr*69.579847,yr*74.80771,xr*74.419257,yr*73.106547,xr*74.996927,yr*72.890397);
      ctx.bezierCurveTo(xr*75.574597,yr*72.674246,xr*76.771877,yr*74.01698,xr*77.657547,yr*75.87425);
      ctx.lineTo(xr*79.267857,yr*79.251104);
      ctx.lineTo(xr*70.107237,yr*82.020787);
      ctx.bezierCurveTo(xr*59.574507,yr*85.205324,xr*57.539217,yr*86.74503,xr*54.010317,yr*94.198179);
      ctx.bezierCurveTo(xr*52.397107,yr*97.605329,xr*50.555677,yr*99.946357,xr*49.033677,yr*100.52502);
      ctx.bezierCurveTo(xr*45.793497,yr*101.75695,xr*45.044447,yr*104.65983,xr*46.851057,yr*108.98365);
      ctx.lineTo(xr*48.343667,yr*112.55598);
      ctx.lineTo(xr*44.663007,yr*115.05706);
      ctx.bezierCurveTo(xr*40.187847,yr*118.09801,xr*38.446617,yr*118.22097,xr*38.446617,yr*115.49603);
      ctx.closePath();
      ctx.moveTo(xr*33.681887,yr*31.249891);
      ctx.bezierCurveTo(xr*29.586874,yr*29.422645,xr*31.205427,yr*26.09302,xr*35.577327,yr*27.350654);
      ctx.bezierCurveTo(xr*37.689077,yr*27.958122,xr*37.886897,yr*28.354169,xr*36.976917,yr*30.152706);
      ctx.bezierCurveTo(xr*36.104617,yr*31.87679,xr*35.521767,yr*32.070868,xr*33.681887,yr*31.249891);
      ctx.closePath();
      ctx.moveTo(xr*26.281764,yr*28.796255);
      ctx.bezierCurveTo(xr*23.462976,yr*28.200291,xr*23.166967,yr*25.558115,xr*25.918988,yr*25.558115);
      ctx.bezierCurveTo(xr*27.244267,yr*25.558115,xr*28.550451,yr*25.917101,xr*28.82162,yr*26.355861);
      ctx.bezierCurveTo(xr*29.632943,yr*27.66861,xr*28.066599,yr*29.173615,xr*26.281764,yr*28.796255);
      ctx.closePath();
      ctx.moveTo(xr*18.44662,yr*25.0895);
      ctx.bezierCurveTo(xr*18.44662,yr*24.194907,xr*19.032909,yr*23.845865,xr*19.94662,yr*24.196489);
      ctx.bezierCurveTo(xr*21.887827,yr*24.9414,xr*21.887827,yr*26.558115,xr*19.94662,yr*26.558115);
      ctx.bezierCurveTo(xr*19.12162,yr*26.558115,xr*18.44662,yr*25.897238,xr*18.44662,yr*25.0895);
      ctx.closePath();
      ctx.moveTo(xr*13.44662,yr*23.5895);
      ctx.bezierCurveTo(xr*13.44662,yr*23.056761,xr*14.12162,yr*22.879906,xr*14.94662,yr*23.196489);
      ctx.bezierCurveTo(xr*16.86729,yr*23.933519,xr*16.86729,yr*24.558115,xr*14.94662,yr*24.558115);
      ctx.bezierCurveTo(xr*14.12162,yr*24.558115,xr*13.44662,yr*24.122238,xr*13.44662,yr*23.5895);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    };

    return {
      restrict: 'E',
      template: '<canvas></canvas>',
      link: function (scope, elt, attr) {
        var canvas = elt.find('canvas')[0];
        var context = canvas.getContext('2d');
        var options = {
          scale:  attr.scale  || 1.0,
          width:  attr.width  || baseWidth,
          height: attr.height || baseHeight,
          color:  attr.color  || "rgba(255, 192, 203, 1)"
        };
        canvas.width = options.width * options.scale;
        canvas.height = options.height * options.scale;
        draw(context, options);
      }
    };
  });
