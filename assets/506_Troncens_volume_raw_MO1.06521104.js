const n=`date,value\r
2017-01-26,45540.68020359011\r
2017-01-29,68281.8295637084\r
2017-02-15,51002.45377515406\r
2017-02-18,61743.52352231475\r
2017-02-25,65637.13615677069\r
2017-03-10,73686.94158959332\r
2017-03-30,58357.49912599156\r
2017-04-06,91791.7392953991\r
2017-04-09,89325.58949750838\r
2017-04-19,62601.099155480995\r
2017-04-29,85432.01874115791\r
2017-05-09,80656.51794188164\r
2017-05-26,84468.74930894365\r
2017-06-18,71868.22379375286\r
2017-07-05,90802.27935234668\r
2017-07-18,76910.22504291225\r
2017-08-02,64329.424587179754\r
2017-08-12,58776.85693601652\r
2017-08-14,77840.57304506723\r
2017-08-22,49418.499234951305\r
2017-08-24,68281.8295637084\r
2017-08-29,57939.26031687618\r
2017-09-08,72775.4673758979\r
2017-09-21,73230.67649635069\r
2017-09-23,61316.38923285607\r
2017-10-08,62601.099155480995\r
2017-10-11,55043.09515582876\r
2017-10-13,55043.09515582876\r
2017-10-16,51002.45377515406\r
2017-10-23,58776.85693601652\r
2017-10-26,49812.7424656802\r
2017-10-31,64764.23943738093\r
2017-11-17,55864.92374930289\r
2017-11-20,48633.51775753979\r
2017-11-22,51401.34363779386\r
2017-11-27,54633.88353468448\r
2017-11-30,52202.58866744584\r
2017-12-05,49812.7424656802\r
2017-12-12,56691.27853267744\r
2017-12-25,43271.054352650135\r
2018-01-09,64329.424587179754\r
2018-01-24,102419.73970903626\r
2018-02-25,122730.53491022011\r
2018-03-02,116169.33447460507\r
2018-03-22,127739.00123543873\r
2018-03-30,107106.14498775707\r
2018-04-19,114012.20880035649\r
2018-04-21,130553.59514918782\r
2018-04-24,109743.2997666889\r
2018-05-11,129425.01740690702\r
2018-05-21,129988.85025853274\r
2018-06-20,136825.69764242656\r
2018-06-23,119980.39789615995\r
2018-06-25,132253.2919836108\r
2018-07-08,91791.7392953991\r
2018-07-10,132821.6749778166\r
2018-07-13,107631.66417922109\r
2018-07-15,115088.8899583185\r
2018-07-23,107106.14498775707\r
2018-07-25,108158.14044210172\r
2018-08-02,109743.2997666889\r
2018-08-04,101388.94669009047\r
2018-08-12,100875.0072320929\r
2018-08-19,92785.18636303916\r
2018-08-22,88835.36514691713\r
2018-08-27,88346.14594371813\r
2018-09-03,82554.44038105583\r
2018-09-08,102936.5907630265\r
2018-09-11,99339.03222421888\r
2018-09-16,80184.60911627993\r
2018-09-23,83988.6411074169\r
2018-09-26,83509.55255726738\r
2018-10-03,88346.14594371813\r
2018-10-06,95286.17612807007\r
2018-10-23,71868.22379375286\r
2018-11-15,94783.99819458617\r
2018-11-17,83031.48514909342\r
2018-11-27,82078.4197589437\r
2018-12-07,87857.93330633815\r
2018-12-27,84949.87567874663\r
2019-01-16,80184.60911627993\r
2019-02-03,140873.8297622471\r
2019-02-13,60041.623993786765\r
2019-02-15,112404.26316405028\r
2019-02-20,100362.04082242429\r
2019-02-23,103973.19573437849\r
2019-02-25,100875.0072320929\r
2019-03-22,92287.9651251576\r
2019-03-25,113475.28230396897\r
2019-03-27,100875.0072320929\r
2019-03-30,92785.18636303916\r
2019-05-01,77840.57304506723\r
2019-05-06,103454.40985134408\r
2019-05-14,112939.30004443835\r
2019-06-08,132821.6749778166\r
2019-06-13,35325.702917517454\r
2019-06-28,111337.03013384352\r
2019-07-05,99850.0487286887\r
2019-07-10,88835.36514691713\r
2019-07-15,108685.57258458908\r
2019-07-23,61316.38923285607\r
2019-07-25,64329.424587179754\r
2019-08-04,70066.48297356487\r
2019-08-09,63031.53662082514\r
2019-08-14,68726.38483806008\r
2019-08-17,53008.438940295906\r
2019-08-22,51401.34363779386\r
2019-08-24,59197.3317027608\r
2019-08-29,75522.52835603533\r
2019-09-08,55864.92374930289\r
2019-09-11,58776.85693601652\r
2019-09-13,63895.70124097125\r
2019-09-16,57106.147943254975\r
2019-10-08,61316.38923285607\r
2019-10-11,53008.438940295906\r
2019-10-13,56277.53643115676\r
2019-10-26,57939.26031687618\r
2019-12-05,108158.14044210172\r
2019-12-10,91296.51024514862\r
2019-12-15,55453.44261145378\r
2019-12-25,79713.73208233716\r
2019-12-27,110273.59244811434\r
2019-12-30,83031.48514909342\r
2020-01-09,137401.30937562892\r
2020-01-11,135677.17567994882\r
2020-01-14,117253.53338003095\r
2020-01-16,128300.09187652524\r
2020-01-19,120528.56783550621\r
2020-01-29,100875.0072320929\r
2020-02-05,129988.85025853274\r
2020-02-15,77840.57304506723\r
2020-02-20,95789.34137610122\r
2020-03-11,125503.81012265437\r
2020-03-21,113475.28230396897\r
2020-03-24,88346.14594371813\r
2020-03-26,89325.58949750838\r
2020-04-03,112404.26316405028\r
2020-04-05,83509.55255726738\r
2020-04-10,93782.60961009187\r
2020-05-03,111337.03013384352\r
2020-05-05,125503.81012265437\r
2020-05-18,101388.94669009047\r
2020-05-20,117253.53338003095\r
2020-05-25,145553.85866773486\r
2020-05-28,116169.33447460507\r
2020-05-30,120528.56783550621\r
2020-06-24,102936.5907630265\r
2020-07-07,83988.6411074169\r
2020-07-09,109213.95941998961\r
2020-07-19,103973.19573437849\r
2020-07-22,94282.80890879608\r
2020-07-24,56277.53643115676\r
2020-07-27,72775.4673758979\r
2020-08-06,45923.13877455773\r
2020-08-08,74602.63300939222\r
2020-08-21,71416.19272561844\r
2020-08-23,55453.44261145378\r
2020-08-31,54633.88353468448\r
2020-09-02,51801.38936390346\r
2020-09-05,58357.49912599156\r
2020-09-10,66514.37652352158\r
2020-09-12,45540.68020359011\r
2020-09-17,48633.51775753979\r
2020-09-30,58357.49912599156\r
2020-11-09,28315.830921246496\r
2020-11-11,30918.115568797588\r
2020-11-14,25491.34341573215\r
2020-11-21,49418.499234951305\r
2020-11-26,36023.05484795309\r
2020-11-29,24878.781024651253\r
2020-12-26,49418.499234951305\r
2021-01-03,97304.74776865801\r
2021-02-02,147915.1685190632\r
2021-02-14,136250.98608783906\r
2021-02-17,139712.7388580055\r
2021-02-19,100875.0072320929\r
2021-02-24,128862.09760728075\r
2021-02-27,124947.31038116443\r
2021-03-01,113475.28230396897\r
2021-03-04,103973.19573437849\r
2021-03-24,91791.7392953991\r
2021-03-29,122730.53491022011\r
2021-03-31,125503.81012265437\r
2021-04-05,99850.0487286887\r
2021-04-15,129988.85025853274\r
2021-04-23,122730.53491022011\r
2021-05-03,119433.15884798189\r
2021-05-20,99850.0487286887\r
2021-05-30,150290.59750047154\r
2021-06-09,110273.59244811434\r
2021-06-14,118886.85177831333\r
2021-07-02,99850.0487286887\r
2021-07-22,111337.03013384352\r
2021-08-11,109743.2997666889\r
2021-08-26,86884.53343753006\r
2021-08-28,74602.63300939222\r
2021-08-31,94783.99819458617\r
2021-09-05,83031.48514909342\r
2021-09-12,99850.0487286887\r
2021-10-07,93782.60961009187\r
2021-10-12,97304.74776865801\r
2021-10-15,79243.88839304229\r
2021-10-17,76446.61449374862\r
2021-10-27,78307.3073009898\r
2021-11-19,82554.44038105583\r
2021-12-14,133961.16107156928\r
2021-12-16,131685.81701505836\r
2021-12-19,129425.01740690702\r
2022-01-13,90802.27935234668\r
2022-01-15,109213.95941998961\r
2022-01-23,143792.1769035189\r
2022-01-25,115088.8899583185\r
2022-02-09,110273.59244811434\r
2022-03-01,138555.2295234606\r
2022-03-21,138555.2295234606\r
2022-03-24,137401.30937562892\r
2022-03-26,117253.53338003095\r
2022-04-05,115628.64235897984\r
2022-05-08,90802.27935234668\r
2022-05-10,130553.59514918782\r
2022-05-15,67838.34929964716\r
2022-06-17,111870.1728098834\r
2022-06-22,125503.81012265437\r
2022-07-12,108685.57258458908\r
2022-07-14,110804.8362926987\r
2022-07-17,95789.34137610122\r
2022-08-01,83509.55255726738\r
2022-08-03,79243.88839304229\r
2022-08-28,84949.87567874663\r
2022-09-05,58357.49912599156\r
2022-09-10,60890.35990019679\r
2022-09-20,69172.01334270752\r
2022-09-22,68281.8295637084\r
2022-10-02,50208.15086333001\r
2022-10-05,53008.438940295906\r
2022-10-07,61316.38923285607\r
2022-11-11,57939.26031687618\r
2022-11-16,59197.3317027608\r
2022-12-04,55864.92374930289\r
2022-12-21,55043.09515582876\r
2022-12-24,57939.26031687618\r
2023-01-10,56277.53643115676\r
2023-01-18,70066.48297356487\r
2023-02-02,80184.60911627993\r
2023-02-04,79713.73208233716\r
2023-02-09,68281.8295637084\r
2023-02-12,69618.71330780652\r
2023-02-14,70965.2244175677\r
2023-02-17,66954.62097372912\r
2023-02-24,68281.8295637084\r
2023-03-09,69618.71330780652\r
2023-03-16,86399.34907791874\r
2023-04-05,78307.3073009898\r
2023-04-08,75062.05601617588\r
2023-04-10,79243.88839304229\r
2023-04-18,71868.22379375286\r
2023-04-20,81603.42479624104\r
2023-05-05,90309.0480015435\r
2023-05-28,89816.81758395304\r
2023-06-24,88835.36514691713\r
2023-07-14,93283.4016441614\r
2023-07-17,92287.9651251576\r
2023-07-22,93782.60961009187\r
2023-07-27,78307.3073009898\r
2023-07-29,94783.99819458617\r
2023-08-08,88346.14594371813\r
2023-08-11,69618.71330780652\r
2023-08-18,86884.53343753006\r
2023-08-21,76446.61449374862\r
2023-08-23,79243.88839304229\r
2023-08-31,72321.31591100534\r
2023-09-05,93283.4016441614\r
2023-09-07,74144.26098207779\r
2023-09-10,72321.31591100534\r
2023-09-20,57522.14256585622\r
2023-09-25,47464.84400667549\r
2023-09-30,59197.3317027608\r
2023-10-02,57522.14256585622\r
2023-10-05,58357.49912599156\r
2023-10-07,58357.49912599156\r
2023-10-10,56691.27853267744\r
2023-10-12,62601.099155480995\r
2023-11-06,63895.70124097125\r
2023-11-19,49025.423537787625\r
2023-11-26,44400.46767956091\r
2023-12-06,52604.93927794305\r
`;export{n as default};
