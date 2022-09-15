export const GetPaymentProviderIcon = (name) => {
  const getIcon = (name) => {
    switch (name) {
      case "Generic":
        return (
          <>
            {" "}
            <path
              d="M116 0H4C1.79086 0 0 1.79086 0 4V76C0 78.2091 1.79086 80 4 80H116C118.209 80 120 78.2091 120 76V4C120 1.79086 118.209 0 116 0Z"
              fill="url(#paint0_linear_116_40)"
            />
            <path
              d="M97.52 63.0134H83.52"
              stroke="white"
              strokeWidth="4"
              stroke-linecap="round"
            />
            <path
              d="M76.3467 63.0134H62.3467"
              stroke="white"
              strokeWidth="4"
              stroke-linecap="round"
            />
            <path
              d="M55.1733 63.0134H41.1733"
              stroke="white"
              strokeWidth="4"
              stroke-linecap="round"
            />
            <path
              d="M34 63.0134H20"
              stroke="white"
              strokeWidth="4"
              stroke-linecap="round"
            />
            <path
              d="M32.6667 22H19.3333C16.3878 22 14 24.3878 14 27.3333V36.6667C14 39.6122 16.3878 42 19.3333 42H32.6667C35.6122 42 38 39.6122 38 36.6667V27.3333C38 24.3878 35.6122 22 32.6667 22Z"
              fill="#F7F7F7"
            />
            <path
              d="M23.0134 23.0134V41.0134M23.0134 35.0134H15.0134M37.0134 35.0134H29.0134M23.0134 29.0134H15.0134M36.9867 29.0134H28.7467V41.0667M19.3334 22.6667H32.6667C35.244 22.6667 37.3334 24.756 37.3334 27.3333V36.6667C37.3334 39.244 35.244 41.3333 32.6667 41.3333H19.3334C16.756 41.3333 14.6667 39.244 14.6667 36.6667V27.3333C14.6667 24.756 16.756 22.6667 19.3334 22.6667Z"
              stroke="#666666"
              strokeWidth="1.333"
            />
            <path
              d="M106.987 13.0134H92.9867"
              stroke="#EDEDED"
              strokeWidth="4"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_116_40"
                x1="34.9333"
                y1="15.4667"
                x2="54.9376"
                y2="59.9923"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#353535" />
                <stop offset="1" stop-color="#0E0E0E" />
              </linearGradient>
            </defs>
          </>
        );
      case "Visa":
        return (
          <g
            id="export-badges"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="production" transform="translate(-1062.000000, -38.000000)">
              <g id="card_visa" transform="translate(1062.000000, 38.000000)">
                <rect
                  id="Rectangle-11"
                  fill="#FFFFFE"
                  x="0"
                  y="0"
                  width="120"
                  height="80"
                  rx="4"
                ></rect>
                <g
                  id="Group-29"
                  transform="translate(16.142857, 26.150000)"
                  fill="#182E66"
                >
                  <polyline
                    id="Fill-1"
                    points="35.6040065 25.675 28.5714286 25.675 32.9666995 -2.30926389e-14 40 -2.30926389e-14 35.6040065 25.675"
                  ></polyline>
                  <path
                    d="M23.2637262,-2.30926389e-14 L16.874068,17.6587738 L16.1187389,13.8560113 L16.1194274,13.8573848 L13.8637679,2.31242577 C13.8637679,2.31242577 13.5917943,-2.30926389e-14 10.6847753,-2.30926389e-14 L0.123248793,-2.30926389e-14 L1.75859327e-13,0.434052001 C1.75859327e-13,0.434052001 3.23063318,1.10436015 7.00934479,3.37008413 L12.8316453,25.675 L19.814137,25.675 L30.4761905,-2.30926389e-14 L23.2637262,-2.30926389e-14"
                    id="Fill-2"
                  ></path>
                  <path
                    d="M67.6190476,17.775 L71.2762763,7.9 L73.3333333,17.775 L67.6190476,17.775 L67.6190476,17.775 Z M81.9047619,25.675 L76.7609971,-2.30926389e-14 L69.6906859,-2.30926389e-14 C67.3049613,-2.30926389e-14 66.7247035,1.91340012 66.7247035,1.91340012 L57.1428571,25.675 L63.8392573,25.675 L65.1793296,21.8619356 L73.3471686,21.8619356 L74.1003816,25.675 L81.9047619,25.675 Z"
                    id="Fill-3"
                  ></path>
                  <path
                    d="M58.139031,6.40863181 L59.047619,1.08148564 C59.047619,1.08148564 56.2419934,-2.30926389e-14 53.3172301,-2.30926389e-14 C50.1555008,-2.30926389e-14 42.6478665,1.40128692 42.6478665,8.21132904 C42.6478665,14.6199608 51.4594687,14.6995794 51.4594687,18.0641277 C51.4594687,21.428676 43.5557999,20.8275558 40.9478642,18.7050572 L40,24.2737131 C40,24.2737131 42.8442472,25.675 47.192116,25.675 C51.5393301,25.675 58.0991002,23.3919374 58.0991002,17.1830155 C58.0991002,10.7339109 49.2076366,10.1334541 49.2076366,7.32955332 C49.2076366,4.52565251 55.4126122,4.88592656 58.139031,6.40863181"
                    id="Fill-4"
                  ></path>
                  <path
                    d="M15.2380952,13.825 L13.1057643,2.30702161 C13.1057643,2.30702161 12.8486609,2.30926389e-14 10.1005836,2.30926389e-14 L0.116510147,2.30926389e-14 L8.52651283e-14,0.433037617 C8.52651283e-14,0.433037617 4.79904644,1.48068717 9.40282448,5.40269242 C13.8028725,9.15203078 15.2380952,13.825 15.2380952,13.825"
                    id="Fill-5"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        );
      case "MasterCard":
        return (
          <g
            id="export-badges"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="production" transform="translate(-608.000000, -288.000000)">
              <g id="card_master" transform="translate(608.000000, 288.000000)">
                <rect
                  id="bg"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="120"
                  height="80"
                  rx="4"
                ></rect>
                <g id="logo" transform="translate(22.000000, 16.000000)">
                  <polygon
                    id="Fill-2"
                    fill="#FF5F00"
                    points="28.0135314 42.5734984 48.7093014 42.5734984 48.7093014 5.38287122 28.0135314 5.38287122"
                  ></polygon>
                  <path
                    d="M29.3275486,23.9788418 C29.3275486,16.4337554 32.8602837,9.71387171 38.3614164,5.38287122 C34.3385529,2.21608991 29.2618477,0.32653326 23.7442897,0.32653326 C10.6823023,0.32653326 0.0939522256,10.9155404 0.0939522256,23.9788418 C0.0939522256,37.0414862 10.6823023,47.6304933 23.7442897,47.6304933 C29.2618477,47.6304933 34.3385529,45.7409367 38.3614164,42.5741554 C32.8602837,38.2431549 29.3275486,31.5232712 29.3275486,23.9788418"
                    id="Fill-3"
                    fill="#EB001B"
                  ></path>
                  <path
                    d="M75.890403,38.634732 L75.890403,37.716891 L75.6505948,37.716891 L75.3753082,38.3482762 L75.0993646,37.716891 L74.8595565,37.716891 L74.8595565,38.634732 L75.0290647,38.634732 L75.0290647,37.9422449 L75.2872691,38.5394657 L75.4626904,38.5394657 L75.7215518,37.9409309 L75.7215518,38.634732 L75.890403,38.634732 Z M74.3727132,38.634732 L74.3727132,37.873259 L74.6795362,37.873259 L74.6795362,37.718205 L73.897696,37.718205 L73.897696,37.873259 L74.204519,37.873259 L74.204519,38.634732 L74.3727132,38.634732 L74.3727132,38.634732 Z"
                    id="Fill-4"
                    fill="#F79E1B"
                  ></path>
                  <path
                    d="M76.6288806,23.9788418 C76.6288806,37.0414862 66.0405305,47.6304933 52.9785431,47.6304933 C47.4609851,47.6304933 42.3842799,45.7409367 38.3614164,42.5741554 C43.8625492,38.2431549 47.3952843,31.5232712 47.3952843,23.9788418 C47.3952843,16.4337554 43.8625492,9.71387171 38.3614164,5.38287122 C42.3842799,2.21608991 47.4609851,0.32653326 52.9785431,0.32653326 C66.0405305,0.32653326 76.6288806,10.9155404 76.6288806,23.9788418"
                    id="Fill-5"
                    fill="#F79E1B"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        );
      case "PayPal":
        return (
          <g
            id="assets-various"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            sketchType="MSPage"
          >
            <g
              id="Artboard-2"
              sketchType="MSArtboardGroup"
              transform="translate(-36.000000, -531.000000)"
            >
              <g
                id="card_paypal"
                sketchType="MSLayerGroup"
                transform="translate(36.000000, 531.000000)"
              >
                <rect
                  id="Rectangle-11"
                  fill="#FFFFFF"
                  sketchType="MSShapeGroup"
                  x="0"
                  y="0"
                  width="120"
                  height="80"
                  rx="4"
                ></rect>
                <path
                  d="M75.3592403,41.9722372 C74.983654,39.5079201 73.1004075,39.5079201 71.2782823,39.5079201 L70.2418767,39.5079201 L70.9691323,44.109041 C71.0125373,44.3869848 71.2525936,44.5914594 71.5342834,44.5914594 L72.009967,44.5914594 C73.2501105,44.5914594 74.4211603,44.5914594 75.0252874,43.8859778 C75.3867006,43.463751 75.4956561,42.8370497 75.3592403,41.9722372 M74.5664343,48.4021222 L67.6960392,48.4021222 C67.2256705,48.4021222 66.8261672,48.060446 66.7526444,47.5966162 L63.9747229,29.9923277 C63.9198023,29.6453405 64.1890906,29.3311047 64.539874,29.3311047 L68.0654248,29.3311047 C68.3940629,29.3311047 68.673981,29.570101 68.7253583,29.8940737 L69.5137353,34.8855551 C69.5863723,35.3493849 69.9867615,35.6910611 70.4562444,35.6910611 L72.6300388,35.6910611 C77.1556767,35.6910611 79.7679504,37.8792048 80.4500294,42.2174297 C80.7574078,44.1134668 80.4624308,45.6040954 79.5739566,46.6477125 C78.5969006,47.7948946 76.8651288,48.4021222 74.5664343,48.4021222"
                  id="Shape"
                  fill="#009CDE"
                  sketchType="MSShapeGroup"
                  transform="translate(72.267704, 38.866613) scale(1, -1) translate(-72.267704, -38.866613) "
                ></path>
                <path
                  d="M26.3561213,41.9722372 C25.9805349,39.5079201 24.0972884,39.5079201 22.2751633,39.5079201 L21.2387577,39.5079201 L21.9660132,44.109041 C22.0094183,44.3869848 22.2494746,44.5914594 22.5311644,44.5914594 L23.006848,44.5914594 C24.2469915,44.5914594 25.4180413,44.5914594 26.0221683,43.8859778 C26.3835816,43.463751 26.492537,42.8370497 26.3561213,41.9722372 M25.5633152,48.4021222 L18.6929202,48.4021222 C18.2225515,48.4021222 17.8230481,48.060446 17.7495253,47.5966162 L14.9716039,29.9923277 C14.9166832,29.6453405 15.1850857,29.3311047 15.536755,29.3311047 L18.8178204,29.3311047 C19.2873033,29.3311047 19.6868066,29.6727808 19.7603294,30.1357255 L20.5106163,34.8855551 C20.5832532,35.3493849 20.9836424,35.6910611 21.4531253,35.6910611 L23.6269197,35.6910611 C28.1525577,35.6910611 30.7648314,37.8792048 31.4469103,42.2174297 C31.7542888,44.1134668 31.4593118,45.6040954 30.5708375,46.6477125 C29.5937816,47.7948946 27.8620098,48.4021222 25.5633152,48.4021222"
                  id="Shape"
                  fill="#003087"
                  sketchType="MSShapeGroup"
                  transform="translate(23.264575, 38.866613) scale(1, -1) translate(-23.264575, -38.866613) "
                ></path>
                <path
                  d="M41.5135981,41.9986153 C41.1955898,40.1202817 39.7038744,38.8589124 37.8002541,38.8589124 C36.8462294,38.8589124 36.0817695,39.1660669 35.591027,39.7467393 C35.1047136,40.3221007 34.9213495,41.1426546 35.0754817,42.0552663 C35.3713445,43.9176669 36.8878628,45.2188688 38.7622511,45.2188688 C39.6967878,45.2188688 40.455047,44.9090589 40.9555335,44.3230754 C41.4595633,43.7326661 41.6579862,42.9076864 41.5135981,41.9986153 M46.0985858,48.3975193 L42.8086622,48.3975193 C42.5269725,48.3975193 42.2869161,48.1930447 42.2426253,47.9142157 L42.0982372,46.9954078 L41.8688106,47.3282323 C41.1557281,48.3612273 39.5674586,48.7073293 37.9818465,48.7073293 C34.3473403,48.7073293 31.2425524,45.9544463 30.6384254,42.0942139 C30.3239604,40.1680809 30.7704121,38.3278096 31.86351,37.0434259 C32.8671404,35.8634925 34.2995061,35.3722224 36.0064751,35.3722224 C38.936757,35.3722224 40.561345,37.2523264 40.561345,37.2523264 L40.4142994,36.3388295 C40.3593788,35.9918423 40.6277813,35.6776065 40.9803364,35.6776065 L43.9425077,35.6776065 C44.4128764,35.6776065 44.8123798,36.0183975 44.8859026,36.4822273 L46.6646227,47.7362963 C46.7195433,48.0832834 46.450255,48.3975193 46.0985858,48.3975193"
                  id="Shape"
                  fill="#003087"
                  sketchType="MSShapeGroup"
                  transform="translate(38.605839, 42.039776) scale(1, -1) translate(-38.605839, -42.039776) "
                ></path>
                <path
                  d="M90.5168057,41.9986153 C90.1987975,40.1202817 88.707082,38.8589124 86.8034617,38.8589124 C85.849437,38.8589124 85.0849771,39.1660669 84.5942346,39.7467393 C84.1070354,40.3221007 83.9245571,41.1426546 84.0786893,42.0552663 C84.3745521,43.9176669 85.8910704,45.2188688 87.7654587,45.2188688 C88.6999955,45.2188688 89.4582546,44.9090589 89.9587411,44.3230754 C90.4627709,43.7326661 90.6611938,42.9076864 90.5168057,41.9986153 M95.1017934,48.3975193 L91.8118698,48.3975193 C91.5301801,48.3975193 91.2901237,48.1930447 91.2458329,47.9142157 L91.1014448,46.9954078 L90.8711324,47.3282323 C90.1589357,48.3612273 88.5706662,48.7073293 86.9850541,48.7073293 C83.3505479,48.7073293 80.24576,45.9544463 79.641633,42.0942139 C79.327168,40.1680809 79.7736197,38.3278096 80.8667176,37.0434259 C81.870348,35.8634925 83.3027138,35.3722224 85.0096827,35.3722224 C87.9399646,35.3722224 89.5645526,37.2523264 89.5645526,37.2523264 L89.4175071,36.3388295 C89.3625864,35.9918423 89.6309889,35.6776065 89.983544,35.6776065 L92.9457153,35.6776065 C93.416084,35.6776065 93.8155874,36.0183975 93.8891102,36.4822273 L95.6678303,47.7362963 C95.722751,48.0832834 95.4534627,48.3975193 95.1017934,48.3975193"
                  id="Shape"
                  fill="#009CDE"
                  sketchType="MSShapeGroup"
                  transform="translate(87.609047, 42.039776) scale(1, -1) translate(-87.609047, -42.039776) "
                ></path>
                <path
                  d="M63.6206619,52.850905 L60.3139079,52.850905 C59.9976713,52.850905 59.7018085,52.6942297 59.5246451,52.432219 L54.9626886,45.7190792 L53.0298364,52.1702082 C52.9084795,52.5738464 52.5364365,52.850905 52.1147877,52.850905 L48.8647259,52.850905 C48.472309,52.850905 48.1959342,52.4649703 48.322606,52.0940835 L51.963313,41.4136056 L48.5387453,36.5849957 C48.2703428,36.2061423 48.5414027,35.6821209 49.0064566,35.6821209 L52.3096674,35.6821209 C52.6223607,35.6821209 52.915566,35.8352555 53.094501,36.0919552 L64.0910307,51.9524561 C64.3541182,52.3321946 64.0830583,52.850905 63.6206619,52.850905"
                  id="Shape"
                  fill="#003087"
                  sketchType="MSShapeGroup"
                  transform="translate(56.242795, 44.266513) scale(1, -1) translate(-56.242795, -44.266513) "
                ></path>
                <path
                  d="M98.9793678,47.9192612 L96.159813,29.9927703 C96.1048923,29.6457831 96.3732948,29.3315473 96.7249641,29.3315473 L99.5613494,29.3315473 C100.030832,29.3315473 100.431222,29.6732234 100.503858,30.1370532 L103.284437,47.7413417 C103.339358,48.0883289 103.070956,48.4025648 102.7184,48.4025648 L99.5454047,48.4025648 C99.2628292,48.4025648 99.0227728,48.1980902 98.9793678,47.9192612"
                  id="Shape"
                  fill="#009CDE"
                  sketchType="MSShapeGroup"
                  transform="translate(99.722125, 38.867056) scale(1, -1) translate(-99.722125, -38.867056) "
                ></path>
              </g>
            </g>
          </g>
        );
      case "AMEX":
        return (
          <g
            id="export-badges"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="production" transform="translate(-1215.000000, -746.000000)">
              <g
                id="card_amex_digital_v01"
                transform="translate(1215.000000, 746.000000)"
              >
                <rect
                  id="Rectangle-11"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="120"
                  height="80"
                  rx="4"
                ></rect>
                <g
                  id="amex_digital_svg"
                  transform="translate(28.000000, 8.000000)"
                  fillRule="nonzero"
                >
                  <polygon
                    id="Path"
                    fill="#FFFFFF"
                    points="64 64 32.1916172 64 0 64 0 31.6819219 0 0 31.7630703 0 64 0 64 31.9968008"
                  ></polygon>
                  <path
                    d="M64,64 L64,53.8589375 L56.2789219,53.8589375 L52.3037422,49.4634219 L48.3084844,53.8589375 L22.8514609,53.8589375 L22.8514609,33.3730547 L14.6350098,33.3730547 L24.826625,10.3083516 L34.6554844,10.3083516 L38.1641016,18.2099219 L38.1641016,10.3083516 L50.3303672,10.3083516 L52.4427578,16.2626562 L54.5689609,10.3083516 L64,10.3083516 L64,0 L0,0 L0,64 L64,64 L64,64 Z M57.5795234,51.2940781 L64,51.2940781 L55.5068125,42.2874883 L64,33.3832969 L57.6816641,33.3832969 L52.4366094,39.1148789 L47.2419844,33.3832969 L40.8199688,33.3832969 L49.2634922,42.3386875 L40.8199688,51.2940781 L47.0632969,51.2940781 L52.3340781,45.5114297 L57.5795234,51.2940781 L57.5795234,51.2940781 Z M59.0816016,42.2950391 L64,47.5275508 L64,37.1061758 L59.0816016,42.2950391 L59.0816016,42.2950391 Z M30.4573437,47.1490547 L30.4573437,44.3599375 L40.5638437,44.3599375 L40.5638437,40.3171797 L30.4573437,40.3171797 L30.4573437,37.5284492 L40.8195859,37.5284492 L40.8195859,33.3832969 L25.5700469,33.3832969 L25.5700469,51.2940781 L40.8195859,51.2940781 L40.8195859,47.1490547 L30.4573437,47.1490547 L30.4573437,47.1490547 Z M59.1639063,30.7841289 L64,30.7841289 L64,12.8733437 L56.4773125,12.8733437 L52.4600312,24.0289297 L48.4686094,12.8733437 L40.8183047,12.8733437 L40.8183047,30.7841289 L45.6540156,30.7841289 L45.6540156,18.2466563 L50.2598359,30.7841289 L54.5582031,30.7841289 L59.1639063,18.2208008 L59.1639063,30.7841289 L59.1639063,30.7841289 Z M35.317125,30.7841289 L40.8183047,30.7841289 L32.9123828,12.8733438 L26.6178594,12.8733438 L18.7111699,30.7841289 L24.0844844,30.7841289 L25.5687656,27.2020469 L33.8074922,27.2020469 L35.317125,30.7841289 L35.317125,30.7841289 Z M32.1190391,23.1847695 L27.2572188,23.1847695 L29.6881953,17.3254375 L32.1190391,23.1847695 L32.1190391,23.1847695 Z"
                    id="Shape"
                    fill="#0690FF"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        );
      case "Klarna":
        return (
          <g
            id="export-badges"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="production" transform="translate(-36.000000, -7917.000000)">
              <g id="card_klarna" transform="translate(36.000000, 7917.000000)">
                <rect
                  id="Rectangle-11"
                  fill="#FEB3C7"
                  x="0"
                  y="0"
                  width="120"
                  height="80"
                  rx="4"
                ></rect>
                <g
                  id="klarna"
                  transform="translate(17.000000, 30.000000)"
                  fill="#000000"
                >
                  <path
                    d="M18.6524659,19.4190345 L22.8927229,19.4190345 L22.8927229,6.89655172e-05 L18.6524659,6.89655172e-05 L18.6524659,19.4190345 Z M45.502008,8.19006897 L45.502008,6.45317241 L45.4486426,6.45317241 L45.4486426,6.45248276 L41.7480482,6.45248276 L41.7480482,6.45317241 L41.540241,6.45317241 L41.540241,19.4190345 L45.5504257,19.4190345 L45.5504257,12.6238621 C45.5504257,10.6521379 47.8295904,9.78731034 49.3937992,10.2245517 C49.4093494,10.2290345 49.4248996,10.2262759 49.4411566,10.2262759 L49.4411566,6.45351724 C47.7991968,6.45351724 46.2897671,7.14972414 45.502008,8.19006897 L45.502008,8.19006897 Z M31.8616546,16.415931 C29.7842892,16.415931 28.1006265,14.858 28.1006265,12.935931 C28.1006265,11.0138621 29.7842892,9.45593103 31.8616546,9.45593103 C33.9386667,9.45593103 35.6226827,11.0138621 35.6226827,12.935931 C35.6226827,14.858 33.9386667,16.415931 31.8616546,16.415931 L31.8616546,16.415931 Z M35.5848675,7.35144828 C34.4408675,6.56041379 33.0445301,6.09386207 31.5358072,6.09386207 C27.6631004,6.09386207 24.5237269,9.15731034 24.5237269,12.935931 C24.5237269,16.7145517 27.6631004,19.778 31.5358072,19.778 C33.0445301,19.778 34.4408675,19.3114483 35.5848675,18.5207586 L35.5848675,19.4190345 L39.0486747,19.4190345 L39.0486747,6.45317241 L35.5848675,6.45317241 L35.5848675,7.35144828 Z M59.3568835,6.10386207 C57.7672289,6.10386207 56.2631004,6.58524138 55.2576386,7.91351724 L55.2576386,6.45317241 L55.2042731,6.45317241 L55.2042731,6.45248276 L51.5036787,6.45248276 L51.5036787,6.45317241 L51.2958715,6.45317241 L51.2958715,19.4190345 L55.3060562,19.4190345 L55.3060562,12.3269655 C55.3060562,10.3552414 56.6613976,9.38972414 58.2931084,9.38972414 C60.0417992,9.38972414 61.0469076,10.4090345 61.0469076,12.300069 L61.0469076,19.4190345 L65.0210442,19.4190345 L65.0210442,11.1735172 C65.0210442,8.15558621 62.561992,6.10386207 59.3568835,6.10386207 L59.3568835,6.10386207 Z M85.1762249,14.8197241 C83.7968514,14.8197241 82.6786506,15.9107586 82.6786506,17.2566207 C82.6786506,18.6021379 83.7968514,19.6931724 85.1762249,19.6931724 C86.555245,19.6931724 87.6734458,18.6021379 87.6734458,17.2566207 C87.6734458,15.9107586 86.555245,14.8197241 85.1762249,14.8197241 L85.1762249,14.8197241 Z M73.7648514,16.415931 C71.6874859,16.415931 70.0038233,14.858 70.0038233,12.935931 C70.0038233,11.0138621 71.6874859,9.45593103 73.7648514,9.45593103 C75.8418635,9.45593103 77.5255261,11.0138621 77.5255261,12.935931 C77.5255261,14.858 75.8418635,16.415931 73.7648514,16.415931 L73.7648514,16.415931 Z M77.4880643,7.35144828 C76.3440643,6.56041379 74.9477269,6.09386207 73.439004,6.09386207 C69.5662972,6.09386207 66.4265703,9.15731034 66.4265703,12.935931 C66.4265703,16.7145517 69.5662972,19.778 73.439004,19.778 C74.9477269,19.778 76.3440643,19.3114483 77.4880643,18.5207586 L77.4880643,19.4190345 L80.9515181,19.4190345 L80.9515181,6.45317241 L77.4880643,6.45317241 L77.4880643,7.35144828 Z M83.4699438,6.68972414 L83.663261,6.68972414 C83.7844819,6.68972414 83.8360803,6.74731034 83.8360803,6.83558621 C83.8360803,6.92351724 83.802506,6.98903448 83.663261,6.98903448 L83.4699438,6.98903448 L83.4699438,6.68972414 Z M83.4727711,7.14731034 L83.6657349,7.14731034 L83.8283052,7.50937931 L84.0216225,7.50937931 L83.8410281,7.11696552 C83.9573012,7.06696552 84.0163213,6.96868966 84.0163213,6.83558621 C84.0163213,6.6517931 83.8721285,6.52868966 83.663261,6.52868966 L83.2946506,6.52868966 L83.2946506,7.50696552 L83.4727711,7.50696552 L83.4727711,7.14731034 Z M0,19.4190345 L4.41979116,19.4190345 L4.41979116,6.89655172e-05 L0,6.89655172e-05 L0,19.4190345 Z M15.7636627,0.00179310345 L11.4725141,0.00179310345 C11.3848675,4.38558621 8.78939759,8.16972414 5.02660241,10.0424828 L11.620241,19.4190345 L17.0041446,19.4190345 L11.0106024,10.890069 C14.0033092,8.02558621 15.7032289,4.1642069 15.7636627,0.00179310345 L15.7636627,0.00179310345 Z M83.6194378,6.28213793 C84.0396466,6.28213793 84.3799839,6.61937931 84.3799839,7.0342069 C84.3799839,7.44903448 84.0396466,7.78593103 83.6194378,7.78593103 C83.1995823,7.78593103 82.859245,7.44903448 82.859245,7.0342069 C82.859245,6.61937931 83.1995823,6.28213793 83.6194378,6.28213793 L83.6194378,6.28213793 Z M83.6194378,7.96455172 C84.1400161,7.96455172 84.5626988,7.54696552 84.5626988,7.0342069 C84.5626988,6.52110345 84.1400161,6.10386207 83.6194378,6.10386207 C83.0988594,6.10386207 82.6786506,6.52110345 82.6786506,7.0342069 C82.6786506,7.54696552 83.0988594,7.96455172 83.6194378,7.96455172 L83.6194378,7.96455172 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        );
      case "Maestro":
        return (
          <g fill="none" fillRule="evenodd">
            <rect width="120" height="80" fill="#000000" rx="4" />
            <g transform="translate(22 10)">
              <path
                fill="#FFFFFF"
                d="M64.7120591,58.7021115 L64.7120591,58.8565085 L64.85463,58.8565085 C64.8874804,58.8565085 64.9131038,58.8499384 64.932814,58.8374552 C64.9518673,58.8249721 64.9617224,58.8052618 64.9617224,58.7783245 C64.9617224,58.7533581 64.9518673,58.7343049 64.932814,58.7211647 C64.9131038,58.7086816 64.8874804,58.7021115 64.85463,58.7021115 L64.7120591,58.7021115 Z M64.855944,58.5937051 C64.930843,58.5937051 64.9880027,58.6101303 65.0280803,58.6429807 C65.0688148,58.6764881 65.0885251,58.7211647 65.0885251,58.7783245 C65.0885251,58.8262861 65.0727569,58.8663636 65.0405634,58.897243 C65.00837,58.9281224 64.9630364,58.9471757 64.9032486,58.9544028 L65.0931241,59.1731866 L64.9446402,59.1731866 L64.7692189,58.9563738 L64.7120591,58.9563738 L64.7120591,59.1731866 L64.5885415,59.1731866 L64.5885415,58.5937051 L64.855944,58.5937051 Z M64.8191515,59.3722602 C64.8868234,59.3722602 64.9492392,59.3597771 65.007713,59.3341537 C65.0661868,59.3085304 65.1167764,59.2737089 65.160796,59.2303464 C65.2048156,59.1863268 65.23898,59.1344231 65.2639463,59.0752923 C65.2889127,59.0161616 65.3013958,58.9530887 65.3013958,58.8854169 C65.3013958,58.818402 65.2889127,58.7553292 65.2639463,58.6961984 C65.23898,58.6370676 65.2048156,58.5851639 65.160796,58.5411444 C65.1167764,58.4977818 65.0661868,58.4636174 65.007713,58.437994 C64.9492392,58.4130277 64.8868234,58.4005445 64.8191515,58.4005445 C64.7508227,58.4005445 64.6870928,58.4130277 64.627305,58.437994 C64.5675173,58.4636174 64.5162706,58.4977818 64.472251,58.5411444 C64.4282314,58.5851639 64.394067,58.6370676 64.3691007,58.6961984 C64.3441344,58.7553292 64.3316512,58.818402 64.3316512,58.8854169 C64.3316512,58.9530887 64.3441344,59.0161616 64.3691007,59.0752923 C64.394067,59.1344231 64.4282314,59.1863268 64.472251,59.2303464 C64.5162706,59.2737089 64.5675173,59.3085304 64.627305,59.3341537 C64.6870928,59.3597771 64.7508227,59.3722602 64.8191515,59.3722602 Z M64.8191515,58.2612587 C64.9071907,58.2612587 64.9893168,58.2776839 65.0668438,58.3105344 C65.1437138,58.3433848 65.2107287,58.3874044 65.2685454,58.4445641 C65.3257052,58.5010668 65.3716958,58.5674247 65.4045462,58.6429807 C65.4373966,58.7191937 65.4544788,58.8000057 65.4544788,58.8854169 C65.4544788,58.971485 65.4373966,59.052297 65.4045462,59.127853 C65.3716958,59.202752 65.3257052,59.2691099 65.2685454,59.3256126 C65.2107287,59.3821153 65.1437138,59.4267919 65.0668438,59.4602994 C64.9893168,59.4931498 64.9071907,59.510232 64.8191515,59.510232 C64.7297984,59.510232 64.6457013,59.4931498 64.5675173,59.4602994 C64.4899903,59.4267919 64.4223184,59.3821153 64.3651586,59.3256126 C64.3079989,59.2691099 64.2626653,59.202752 64.2298149,59.127853 C64.1963074,59.052297 64.1798822,58.971485 64.1798822,58.8854169 C64.1798822,58.8000057 64.1963074,58.7191937 64.2298149,58.6429807 C64.2626653,58.5674247 64.3079989,58.5010668 64.3651586,58.4445641 C64.4223184,58.3874044 64.4899903,58.3433848 64.5675173,58.3105344 C64.6457013,58.2776839 64.7297984,58.2612587 64.8191515,58.2612587 Z M55.3720253,52.7450148 C55.6479689,52.7450148 56.041517,52.7975754 56.343084,52.915837 L55.9232555,54.2016028 C55.6348287,54.0833412 55.345745,54.0439207 55.0704584,54.0439207 C54.1782407,54.0439207 53.7321319,54.6214312 53.7321319,55.6581908 L53.7321319,59.1745006 L52.3675251,59.1745006 L52.3675251,52.9026968 L53.7189917,52.9026968 L53.7189917,53.6635127 C54.0731194,53.1122826 54.584929,52.7450148 55.3720253,52.7450148 Z M50.6494477,54.1490421 L48.4189036,54.1490421 L48.4189036,56.9833771 C48.4189036,57.6127913 48.6422865,58.0332767 49.3242614,58.0332767 C49.678389,58.0332767 50.1244979,57.9150152 50.5318432,57.6784921 L50.9253913,58.8466534 C50.4924227,59.1482203 49.8097908,59.3321827 49.21914,59.3321827 C47.605527,59.3321827 47.0411566,58.4662454 47.0411566,57.0096574 L47.0411566,54.1490421 L45.768531,54.1490421 L45.768531,52.9026968 L47.0411566,52.9026968 L47.0411566,51 L48.4189036,51 L48.4189036,52.9026968 L50.6494477,52.9026968 L50.6494477,54.1490421 Z M44.0925022,54.5031697 C43.7120942,54.2673036 42.9381381,53.9657367 42.1372447,53.9657367 C41.3895689,53.9657367 40.9434601,54.2410233 40.9434601,54.7002723 C40.9434601,55.1201007 41.4158493,55.2383623 42.0065,55.3165463 L42.6490543,55.4085275 C44.0136611,55.6056301 44.8401779,56.1831406 44.8401779,57.284944 C44.8401779,58.4787286 43.7909352,59.3321827 41.9802196,59.3321827 C40.9566003,59.3321827 40.0118219,59.0693793 39.2641462,58.5181491 L39.9067006,57.4557662 C40.3659496,57.8098938 41.0485815,58.1114608 41.9933598,58.1114608 C42.9249979,58.1114608 43.4236674,57.8361742 43.4236674,57.3506448 C43.4236674,56.9965172 43.0688828,56.7994147 42.3212071,56.6949503 L41.6779957,56.6029691 C40.2746254,56.4058665 39.5131524,55.7757953 39.5131524,54.752833 C39.5131524,53.5058307 40.5367718,52.7450148 42.1247615,52.7450148 C43.1214435,52.7450148 44.0268013,52.9683977 44.6831529,53.4013663 L44.0925022,54.5031697 Z M33.6749743,55.4873685 C33.8188592,54.5820107 34.3700893,53.9657367 35.341148,53.9657367 C36.2202255,53.9657367 36.7845958,54.5163099 36.9284807,55.4873685 L33.6749743,55.4873685 Z M38.3456482,56.0385987 C38.332508,54.0833412 37.1255833,52.7450148 35.3674284,52.7450148 C33.5304324,52.7450148 32.2446666,54.0833412 32.2446666,56.0385987 C32.2446666,58.0332767 33.5829931,59.3321827 35.4594096,59.3321827 C36.4041879,59.3321827 37.2701252,59.0956596 38.0309411,58.4531052 L37.3614494,57.442626 C36.8364995,57.8624545 36.1676648,58.0983206 35.5375936,58.0983206 C34.6585161,58.0983206 33.8582797,57.6916323 33.6611771,56.5635486 L38.3193679,56.5635486 C38.332508,56.3927263 38.3456482,56.2225611 38.3456482,56.0385987 Z M60.1195692,54.0281525 C59.8403406,54.0281525 59.5801652,54.0774281 59.3403571,54.1753224 C59.0998919,54.2738737 58.8929342,54.4111885 58.71817,54.5879238 C58.5434057,54.7646591 58.4060909,54.9768729 58.3055686,55.2232511 C58.2050463,55.4702863 58.1551136,55.7416309 58.1551136,56.0385987 C58.1551136,56.3355666 58.2050463,56.6075681 58.3055686,56.8539464 C58.4060909,57.1003246 58.5434057,57.3125383 58.71817,57.4892737 C58.8929342,57.666009 59.0998919,57.8033237 59.3403571,57.901875 C59.5801652,58.0004263 59.8403406,58.049045 60.1195692,58.049045 C60.3987979,58.049045 60.6589733,58.0004263 60.8987814,57.901875 C61.1392465,57.8033237 61.3475183,57.666009 61.5242536,57.4892737 C61.7009889,57.3125383 61.8396177,57.1003246 61.94014,56.8539464 C62.0406623,56.6075681 62.091252,56.3355666 62.091252,56.0385987 C62.091252,55.7416309 62.0406623,55.4702863 61.94014,55.2232511 C61.8396177,54.9768729 61.7009889,54.7646591 61.5242536,54.5879238 C61.3475183,54.4111885 61.1392465,54.2738737 60.8987814,54.1753224 C60.6589733,54.0774281 60.3987979,54.0281525 60.1195692,54.0281525 Z M60.1195692,52.7377877 C60.6044416,52.7377877 61.0531784,52.8218848 61.4657798,52.990079 C61.8783812,53.1582732 62.2351368,53.3895402 62.5360468,53.68388 C62.8376137,53.9788769 63.0734798,54.3270914 63.243645,54.7285236 C63.4138102,55.1306129 63.4992213,55.5668666 63.4992213,56.0385987 C63.4992213,56.5103309 63.4138102,56.9465846 63.243645,57.3480168 C63.0734798,57.7501061 62.8376137,58.0983206 62.5360468,58.3933174 C62.2351368,58.6876573 61.8783812,58.9189243 61.4657798,59.0871185 C61.0531784,59.2553127 60.6044416,59.3394098 60.1195692,59.3394098 C59.6353539,59.3394098 59.1866171,59.2553127 58.7740157,59.0871185 C58.3607573,58.9189243 58.0053157,58.6876573 57.7063768,58.3933174 C57.4067809,58.0983206 57.1722288,57.7501061 57.0020636,57.3480168 C56.8318984,56.9465846 56.7464872,56.5103309 56.7464872,56.0385987 C56.7464872,55.5668666 56.8318984,55.1306129 57.0020636,54.7285236 C57.1722288,54.3270914 57.4067809,53.9788769 57.7063768,53.68388 C58.0053157,53.3895402 58.3607573,53.1582732 58.7740157,52.990079 C59.1866171,52.8218848 59.6353539,52.7377877 60.1195692,52.7377877 Z M25.8427751,56.0385987 C25.8427751,54.9361383 26.5641705,54.0314375 27.7448149,54.0314375 C28.8735556,54.0314375 29.6343716,54.8967178 29.6343716,56.0385987 C29.6343716,57.1798226 28.8735556,58.0457599 27.7448149,58.0457599 C26.5641705,58.0457599 25.8427751,57.1404021 25.8427751,56.0385987 Z M30.9201373,56.0385987 L30.9201373,52.9026968 L29.5555305,52.9026968 L29.5555305,53.6635127 C29.1225619,53.0991424 28.4668673,52.7450148 27.5746497,52.7450148 C25.8158378,52.7450148 24.4387478,54.1227617 24.4387478,56.0385987 C24.4387478,57.9544357 25.8158378,59.3321827 27.5746497,59.3321827 C28.4668673,59.3321827 29.1225619,58.9773981 29.5555305,58.4136847 L29.5555305,59.1745006 L30.9201373,59.1745006 L30.9201373,56.0385987 Z M23.231166,59.1745006 L23.231166,55.2383623 C23.231166,53.7554939 22.2863877,52.7581549 20.7647559,52.7450148 C19.9645194,52.7318746 19.1373456,52.9815378 18.5604921,53.8606153 C18.1268665,53.1648432 17.4448916,52.7450148 16.4869731,52.7450148 C15.8174813,52.7450148 15.1617868,52.9421173 14.6499771,53.6766529 L14.6499771,52.9026968 L13.2853703,52.9026968 L13.2853703,59.1745006 L14.6631173,59.1745006 L14.6631173,55.6976113 C14.6631173,54.6082911 15.2669082,54.0314375 16.1985463,54.0314375 C17.1039041,54.0314375 17.5631531,54.6214312 17.5631531,55.6844711 L17.5631531,59.1745006 L18.9409001,59.1745006 L18.9409001,55.6976113 C18.9409001,54.6082911 19.5703143,54.0314375 20.4756721,54.0314375 C21.4073103,54.0314375 21.8534191,54.6214312 21.8534191,55.6844711 L21.8534191,59.1745006 L23.231166,59.1745006 L23.231166,59.1745006 Z"
              />
              <polygon
                fill="#7375CF"
                points="28.014 42.573 48.709 42.573 48.709 5.383 28.014 5.383"
              />
              <path
                fill="#EB001B"
                d="M29.3275486,23.9788418 C29.3275486,16.4337554 32.8602837,9.71387171 38.3614164,5.38287122 C34.3385529,2.21608991 29.2618477,0.32653326 23.7442897,0.32653326 C10.6823023,0.32653326 0.0939522256,10.9155404 0.0939522256,23.9788418 C0.0939522256,37.0414862 10.6823023,47.6304933 23.7442897,47.6304933 C29.2618477,47.6304933 34.3385529,45.7409367 38.3614164,42.5741554 C32.8602837,38.2431549 29.3275486,31.5232712 29.3275486,23.9788418"
              />
              <path
                fill="#00A1DF"
                d="M75.890403,38.634732 L75.890403,37.716891 L75.6505948,37.716891 L75.3753082,38.3482762 L75.0993646,37.716891 L74.8595565,37.716891 L74.8595565,38.634732 L75.0290647,38.634732 L75.0290647,37.9422449 L75.2872691,38.5394657 L75.4626904,38.5394657 L75.7215518,37.9409309 L75.7215518,38.634732 L75.890403,38.634732 Z M74.3727132,38.634732 L74.3727132,37.873259 L74.6795362,37.873259 L74.6795362,37.718205 L73.897696,37.718205 L73.897696,37.873259 L74.204519,37.873259 L74.204519,38.634732 L74.3727132,38.634732 L74.3727132,38.634732 Z"
              />
              <path
                fill="#00A2E5"
                d="M76.6288806,23.9788418 C76.6288806,37.0414862 66.0405305,47.6304933 52.9785431,47.6304933 C47.4609851,47.6304933 42.3842799,45.7409367 38.3614164,42.5741554 C43.8625492,38.2431549 47.3952843,31.5232712 47.3952843,23.9788418 C47.3952843,16.4337554 43.8625492,9.71387171 38.3614164,5.38287122 C42.3842799,2.21608991 47.4609851,0.32653326 52.9785431,0.32653326 C66.0405305,0.32653326 76.6288806,10.9155404 76.6288806,23.9788418"
              />
            </g>
          </g>
        );
      case "Vipps":
        return (
          <>
            {" "}
            <rect width="120" height="80" rx="4" fill="white" />
            <path
              d="M19.5226 28.995L23.3668 40.2261L27.1357 28.995H31.5829L24.9498 45.6533H21.6332L15 28.995H19.5226Z"
              fill="#FF5B24"
            />
            <path
              d="M41.6081 43.0151C44.397 43.0151 45.9799 41.6583 47.4875 39.6985C48.3166 38.6432 49.3719 38.4171 50.1257 39.0201C50.8794 39.6231 50.9548 40.7538 50.1257 41.8091C47.9397 44.6734 45.1508 46.407 41.6081 46.407C37.7638 46.407 34.3719 44.2965 32.0352 40.603C31.3568 39.6231 31.5076 38.5678 32.2613 38.0402C33.0151 37.5126 34.1457 37.7387 34.8241 38.794C36.4824 41.2814 38.7437 43.0151 41.6081 43.0151ZM46.8091 33.7437C46.8091 35.1005 45.7538 36.005 44.5478 36.005C43.3417 36.005 42.2865 35.1005 42.2865 33.7437C42.2865 32.3869 43.3417 31.4824 44.5478 31.4824C45.7538 31.4824 46.8091 32.4623 46.8091 33.7437Z"
              fill="#FF5B24"
            />
            <path
              d="M57.4372 28.995V31.2563C58.5679 29.6734 60.3016 28.5427 62.8644 28.5427C66.1056 28.5427 69.8744 31.2563 69.8744 37.0603C69.8744 43.1658 66.2563 46.1055 62.4875 46.1055C60.5277 46.1055 58.7186 45.3518 57.3619 43.4674V51.4573H53.2915V28.995H57.4372ZM57.4372 37.2864C57.4372 40.6784 59.397 42.4875 61.583 42.4875C63.6935 42.4875 65.8041 40.8292 65.8041 37.2864C65.8041 33.8191 63.6935 32.1608 61.583 32.1608C59.4724 32.1608 57.4372 33.7437 57.4372 37.2864Z"
              fill="#FF5B24"
            />
            <path
              d="M77.0352 28.995V31.2563C78.1659 29.6734 79.8995 28.5427 82.4624 28.5427C85.7036 28.5427 89.4724 31.2563 89.4724 37.0603C89.4724 43.1658 85.8543 46.1055 82.0855 46.1055C80.1257 46.1055 78.3166 45.3518 76.9598 43.4674V51.4573H72.8895V28.995H77.0352ZM77.0352 37.2864C77.0352 40.6784 78.995 42.4875 81.181 42.4875C83.2915 42.4875 85.4021 40.8292 85.4021 37.2864C85.4021 33.8191 83.2915 32.1608 81.181 32.1608C78.995 32.1608 77.0352 33.7437 77.0352 37.2864Z"
              fill="#FF5B24"
            />
            <path
              d="M98.1407 28.5427C101.533 28.5427 103.945 30.1256 105 34.0452L101.307 34.6483C101.231 32.6885 100.025 32.0101 98.2161 32.0101C96.8593 32.0101 95.804 32.6131 95.804 33.593C95.804 34.3467 96.3317 35.1005 97.9146 35.402L100.704 35.9297C103.417 36.4573 104.925 38.2663 104.925 40.6784C104.925 44.2965 101.683 46.1055 98.593 46.1055C95.3518 46.1055 91.7337 44.4472 91.206 40.3769L94.8995 39.7739C95.1256 41.8844 96.407 42.6382 98.5176 42.6382C100.101 42.6382 101.156 42.0352 101.156 41.0553C101.156 40.1508 100.628 39.4724 98.8945 39.1709L96.3317 38.7186C93.6181 38.191 91.9598 36.3065 91.9598 33.8945C92.0352 30.1256 95.4271 28.5427 98.1407 28.5427Z"
              fill="#FF5B24"
            />
          </>
        );
    }
  };

  return (
    <svg
      width="32"
      className=" flex self-center mr-8"
      viewBox="0 0 120 80"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getIcon(name)}
    </svg>
  );
};