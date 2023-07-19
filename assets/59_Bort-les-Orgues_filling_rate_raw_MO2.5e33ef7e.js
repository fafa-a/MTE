const r=`date,value\r
2017-03-14,86.10569076548725\r
2017-03-17,88.80677139832261\r
2017-03-27,84.25428438627544\r
2017-04-03,81.61732120574057\r
2017-04-06,81.80019157201046\r
2017-04-23,79.04858065492108\r
2017-05-03,81.71779700024587\r
2017-05-16,84.58650030428977\r
2017-05-23,91.02634336061345\r
2017-05-26,92.30536679441063\r
2017-06-02,90.79926066372185\r
2017-06-05,90.80613857941799\r
2017-06-22,90.9454618016826\r
2017-06-25,90.72361752885976\r
2017-07-02,92.4629383030643\r
2017-07-05,92.75239131893635\r
2017-07-07,94.54398765952038\r
2017-07-12,94.54398765952038\r
2017-07-17,94.15977746421352\r
2017-08-14,90.07139973925037\r
2017-08-19,89.2263705172415\r
2017-08-21,89.90864342480774\r
2017-08-24,89.44672453236463\r
2017-08-26,89.14955467385035\r
2017-08-29,89.35958149739591\r
2017-09-03,89.8555592915024\r
2017-09-13,86.89810492900321\r
2017-10-05,70.95135029693243\r
2017-10-10,70.95446204314631\r
2017-10-13,74.56946415024437\r
2017-10-15,69.20207232357359\r
2018-04-06,72.21299379658586\r
2018-04-16,73.04387157219765\r
2018-05-06,78.4269983932892\r
2018-05-08,78.35247743325542\r
2018-05-11,80.50229633400193\r
2018-05-13,80.50229633400193\r
2018-05-18,77.82840445105508\r
2018-05-21,77.4717531643599\r
2018-06-20,95.7373088686407\r
2018-06-22,96.20154866006911\r
2018-06-25,94.82381144608529\r
2018-06-27,95.13550917708575\r
2018-07-02,93.10299802005022\r
2018-07-07,91.47947353897752\r
2018-07-10,91.22781336737474\r
2018-07-12,91.82466947815018\r
2018-07-15,92.27940392767803\r
2018-07-17,92.27940392767803\r
2018-08-11,88.17208024816455\r
2018-08-16,88.81529185282957\r
2018-08-19,88.29785078314933\r
2018-08-21,87.17868164517982\r
2018-08-26,86.40376515462007\r
2018-09-03,88.88346741640396\r
2018-09-05,88.3743683916382\r
2018-09-08,86.82041963604063\r
2018-09-10,83.81270936309716\r
2018-09-13,84.02588100067996\r
2018-09-18,83.54489116149321\r
2018-09-20,79.45538544683055\r
2018-09-23,76.57420631735454\r
2018-09-28,74.0241601215454\r
2018-09-30,73.64625624553294\r
2018-10-05,71.13503795363148\r
2018-10-08,70.8751297951727\r
2018-10-13,75.91582374683485\r
2019-03-22,86.03165798355722\r
2019-03-24,86.17638249741786\r
2019-03-27,86.58753276619129\r
2019-03-29,87.33772497799515\r
2019-04-01,87.17699032651417\r
2019-04-13,87.86475863350441\r
2019-04-18,83.17451211171787\r
2019-05-06,88.8357422954776\r
2019-05-13,92.04241342923116\r
2019-05-16,92.04241342923116\r
2019-05-23,96.0572555163339\r
2019-05-31,99.22877021720029\r
2019-06-02,97.43158190120724\r
2019-06-17,92.67089141594272\r
2019-06-25,92.67089141594272\r
2019-06-27,93.98360250656317\r
2019-06-30,93.75529761335972\r
2019-07-02,93.75878149226105\r
2019-07-05,96.06429216940833\r
2019-07-07,96.0730882795546\r
2019-07-10,96.92786168690023\r
2019-07-15,97.59972375646711\r
2019-07-17,97.19638076781891\r
2019-07-20,97.19284566732128\r
2019-07-22,96.98966505330189\r
2019-07-25,96.23675542620911\r
2019-08-04,92.10293495394872\r
2019-08-09,94.9480906079472\r
2019-08-14,87.16684269382549\r
2019-08-16,86.95723216875886\r
2019-08-21,85.2458166921479\r
2019-08-24,85.74586480942473\r
2019-08-26,86.28246418071544\r
2019-08-29,85.89375668318058\r
2019-09-03,83.96423852208973\r
2019-09-13,81.39842478644641\r
2019-09-15,80.85960894987674\r
2019-09-18,78.55991131248157\r
2019-09-20,78.2520815781098\r
2019-09-30,79.8940522514615\r
2019-10-03,74.69810011117036\r
2020-03-13,96.38468085748369\r
2020-03-18,96.77254091986978\r
2020-03-21,97.79987706220237\r
2020-03-23,97.79987706220237\r
2020-03-26,97.73255032310665\r
2020-03-28,96.65788019194478\r
2020-03-31,95.47569672303825\r
2020-04-02,95.47569672303825\r
2020-04-05,94.46884217283983\r
2020-04-07,93.8702933205865\r
2020-04-10,95.01463331963907\r
2020-04-12,95.03039620316392\r
2020-04-15,94.97785737995379\r
2020-05-20,100.0\r
2020-05-22,100.0\r
2020-05-25,100.0\r
2020-05-27,99.03990319940534\r
2020-05-30,100.0\r
2020-06-01,100.0\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-01,100.0\r
2020-07-04,99.89274004905572\r
2020-07-09,100.0\r
2020-07-11,99.10224882209646\r
2020-07-14,99.4998528540646\r
2020-07-19,97.62274178197352\r
2020-07-21,96.1276314484446\r
2020-07-24,97.79633308110223\r
2020-07-29,96.42696218001026\r
2020-07-31,94.46534762336958\r
2020-08-05,91.59678102798652\r
2020-08-08,93.37065233059249\r
2020-08-10,93.36891331108018\r
2020-08-15,90.82677359348787\r
2020-08-20,92.50278131362421\r
2020-08-25,90.98848027945346\r
2020-09-04,91.47257499613698\r
2020-09-07,91.21747718048171\r
2020-09-09,92.81310159935053\r
2020-09-12,93.85286605600461\r
2020-09-14,92.71423881301374\r
2020-09-17,92.27594243579104\r
2021-03-23,83.36875337000112\r
2021-03-26,83.36875337000112\r
2021-03-28,84.56311100319162\r
2021-03-31,83.49502555568857\r
2021-04-02,84.42449971488686\r
2021-04-05,83.11975932441419\r
2021-04-07,83.06667967001141\r
2021-04-15,80.34515113346532\r
2021-04-17,81.14854930398782\r
2021-04-22,81.0614948995092\r
2021-05-27,93.82150028493005\r
2021-05-30,93.82150028493005\r
2021-06-01,93.94350215307135\r
2021-06-16,93.12384301076642\r
2021-06-26,92.18769217645529\r
2021-07-01,96.03614681070147\r
2021-07-11,96.15050812441854\r
2021-07-19,99.00606509282366\r
2021-07-21,94.82906134320056\r
2021-07-29,96.65788019194478\r
2021-08-20,99.18599510126201\r
2021-08-25,98.99359960346699\r
2021-08-28,97.26002148826646\r
2021-08-30,97.26002148826646\r
2021-09-22,89.11030359926727\r
2021-09-24,90.60161090702435\r
2021-09-27,90.60161090702435\r
2021-10-02,90.60161090702435\r
2021-10-12,92.83045035109242\r
2021-10-14,93.22635839156742\r
2021-10-17,93.12558017870488\r
2022-03-08,95.14251838328276\r
2022-03-23,87.85797190829565\r
2022-03-26,90.24971185306708\r
2022-04-15,81.90570573033645\r
2022-04-17,81.34414904163121\r
2022-04-22,83.25583866330307\r
2022-04-27,87.46639909550686\r
2022-04-30,88.22136004242195\r
2022-05-02,88.22136004242195\r
2022-05-17,91.19336125720079\r
2022-05-27,94.45311711286035\r
2022-05-30,95.42130381953362\r
2022-06-01,95.28976005924048\r
2022-06-04,95.13726145901215\r
2022-06-06,95.17055730112875\r
2022-06-11,93.77794376415488\r
2022-06-14,93.74136262248717\r
2022-06-19,93.65080564787937\r
2022-06-21,93.8877218966865\r
2022-06-29,96.64553540009769\r
2022-07-01,97.15573025869074\r
2022-07-04,97.22466344794618\r
2022-07-06,95.93063149081159\r
2022-07-11,92.94324927108502\r
2022-07-14,95.13550917708575\r
2022-07-16,92.92242067623494\r
2022-07-19,93.62991292273412\r
2022-07-21,91.79703441179117\r
2022-07-24,92.88250449185472\r
2022-07-26,91.78667213116623\r
2022-07-31,92.13060730708304\r
2022-08-03,93.41413208502237\r
2022-08-08,91.89377189403535\r
2022-08-10,91.7037909566847\r
2022-08-13,91.85749049846326\r
2022-09-02,90.61707285172449\r
2022-09-04,90.95062358362699\r
2022-09-12,91.85058041489204\r
2022-09-19,92.69169714110369\r
2022-09-22,92.16001287414511\r
2022-10-04,87.88851384504348\r
2022-10-09,89.54758001210644\r
2022-10-12,89.2280778405606\r
2023-04-05,100.0\r
2023-04-07,99.81947258581812\r
2023-05-27,96.61203132961435\r
2023-05-30,96.17162701444686\r
2023-06-01,96.92609611106737\r
2023-06-06,96.03614681070147\r
2023-06-14,96.6472989026614\r
2023-06-16,96.11355459072252\r
2023-06-24,96.2526001744758\r
2023-06-26,95.87437587926429\r
2023-07-04,95.84976825535587\r
`;export{r as default};
