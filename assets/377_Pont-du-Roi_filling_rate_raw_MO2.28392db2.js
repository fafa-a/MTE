const n=`date,value\r
2017-02-12,84.7000725867986\r
2017-02-15,84.7000725867986\r
2017-02-19,84.7000725867986\r
2017-03-14,100.0\r
2017-03-17,100.0\r
2017-04-03,97.89740198350468\r
2017-04-06,97.89740198350468\r
2017-04-10,97.89740198350468\r
2017-04-23,93.56528079797972\r
2017-04-30,93.56528079797972\r
2017-06-02,86.80952488284984\r
2017-06-05,86.80952488284984\r
2017-06-09,86.80952488284984\r
2017-06-12,87.94809987389522\r
2017-07-17,82.32249272577656\r
2017-07-19,81.69953316032681\r
2017-07-22,81.69953316032681\r
2017-07-24,81.69953316032681\r
2017-08-26,94.04786601771694\r
2017-08-29,94.04786601771694\r
2017-10-05,76.75734333405302\r
2017-10-07,76.75734333405302\r
2017-10-10,76.75734333405302\r
2017-10-12,76.75734333405302\r
2017-10-13,76.75734333405302\r
2017-10-15,79.80657694318826\r
2017-10-17,79.31183819007053\r
2017-10-18,79.31183819007053\r
2017-10-22,79.31183819007053\r
2017-10-25,79.31183819007053\r
2017-11-04,73.797732825232\r
2017-11-06,73.797732825232\r
2017-11-11,71.46847962020377\r
2017-11-14,71.46847962020377\r
2018-02-22,97.08559688196686\r
2018-02-24,97.08559688196686\r
2018-02-25,97.08559688196686\r
2018-02-27,97.08559688196686\r
2018-03-24,93.08329417269249\r
2018-04-18,98.15752298243514\r
2018-04-20,98.15752298243514\r
2018-04-21,98.15752298243514\r
2018-04-25,97.66993253437202\r
2018-04-26,97.66993253437202\r
2018-06-22,88.07482842115381\r
2018-06-27,91.51299577673988\r
2018-07-02,84.04148182618385\r
2018-07-04,90.3953068077621\r
2018-07-07,89.7262846052707\r
2018-07-09,83.82222696646971\r
2018-07-12,83.35286008439995\r
2018-07-17,76.63474533699286\r
2018-07-19,76.54282781697917\r
2018-07-22,76.54282781697917\r
2018-07-24,76.05305019823275\r
2018-07-25,76.05305019823275\r
2018-07-27,76.05305019823275\r
2018-08-06,71.92081716078201\r
2018-08-11,71.92081716078201\r
2018-08-16,71.92081716078201\r
2018-08-21,64.94393784524829\r
2018-08-23,64.94393784524829\r
2018-08-26,70.20560359703887\r
2018-08-28,70.20560359703887\r
2018-09-02,64.97338571251292\r
2018-09-05,64.97338571251292\r
2018-09-10,60.563600315088586\r
2018-09-12,60.563600315088586\r
2018-09-17,60.563600315088586\r
2018-09-18,60.563600315088586\r
2018-09-20,62.2194409183208\r
2018-09-25,60.73739195486546\r
2018-09-27,60.73739195486546\r
2018-09-28,60.73739195486546\r
2018-09-30,59.43688769519697\r
2018-10-05,56.17296300176263\r
2018-10-10,61.17239488979265\r
2018-10-12,55.57658751397714\r
2018-10-13,55.57658751397714\r
2018-10-15,55.57658751397714\r
2018-10-20,49.28510584699061\r
2018-10-22,49.28510584699061\r
2018-10-23,49.28510584699061\r
2019-02-17,88.6456499498385\r
2019-02-19,88.6456499498385\r
2019-02-20,88.6456499498385\r
2019-02-22,100.0\r
2019-02-24,100.0\r
2019-02-25,100.0\r
2019-02-27,90.07657556338248\r
2019-03-24,94.20886050275239\r
2019-03-26,94.20886050275239\r
2019-03-27,94.20886050275239\r
2019-03-29,95.88712105093113\r
2019-03-31,95.88712105093113\r
2019-04-10,92.47363960603002\r
2019-04-11,92.47363960603002\r
2019-04-13,95.33767430692151\r
2019-05-13,98.74340214732244\r
2019-05-15,98.74340214732244\r
2019-05-16,98.74340214732244\r
2019-05-23,99.68908062482248\r
2019-05-28,98.48290776759409\r
2019-05-30,100.0\r
2019-05-31,100.0\r
2019-06-02,96.14594704494336\r
2019-06-04,96.14594704494336\r
2019-06-17,89.31272857213492\r
2019-06-19,89.31272857213492\r
2019-06-24,89.31272857213492\r
2019-06-25,89.31272857213492\r
2019-06-27,98.12499876987346\r
2019-06-29,98.12499876987346\r
2019-06-30,98.12499876987346\r
2019-07-02,97.92990801754964\r
2019-07-04,98.48290776759409\r
2019-07-05,98.48290776759409\r
2019-07-07,98.67826302062318\r
2019-07-09,98.67826302062318\r
2019-07-10,98.67826302062318\r
2019-07-15,95.33767430692151\r
2019-07-17,96.63169809395139\r
2019-07-22,93.05118305361376\r
2019-07-24,96.89100611843868\r
2019-07-25,96.89100611843868\r
2019-07-29,96.89100611843868\r
2019-08-01,96.89100611843868\r
2019-08-04,90.20403552882458\r
2019-08-21,81.01559644984732\r
2019-08-23,81.01559644984732\r
2019-08-24,81.01559644984732\r
2019-08-26,83.07154490377032\r
2019-08-28,83.07154490377032\r
2019-08-29,83.07154490377032\r
2019-08-31,77.95513978267599\r
2019-09-02,77.95513978267599\r
2019-09-03,77.95513978267599\r
2019-09-07,79.93037728791074\r
2019-09-10,76.51219454743435\r
2019-09-12,77.9243713362479\r
2019-09-13,77.9243713362479\r
2019-09-15,75.99188126274771\r
2019-09-17,78.75614412847072\r
2019-09-18,78.75614412847072\r
2019-09-20,73.43355141492067\r
2019-09-22,73.43355141492067\r
2019-09-30,75.28929172492255\r
2020-02-07,93.37241422689517\r
2020-02-15,90.5228751679474\r
2020-02-22,93.56528079797972\r
2020-03-18,95.62846317359525\r
2020-03-23,95.62846317359525\r
2020-03-25,95.62846317359525\r
2020-03-26,95.62846317359525\r
2020-03-28,95.7254401614867\r
2020-03-30,95.79010463312132\r
2020-03-31,95.79010463312132\r
2020-04-02,91.80093520574759\r
2020-04-04,94.08005960994639\r
2020-04-05,94.08005960994639\r
2020-04-07,90.3953068077621\r
2020-04-09,90.3953068077621\r
2020-04-10,90.3953068077621\r
2020-04-12,95.30537759998033\r
2020-04-14,95.20850329174266\r
2020-04-15,95.20850329174266\r
2020-04-17,95.20850329174266\r
2020-04-20,97.37765916917446\r
2020-04-22,96.69650941130519\r
2020-04-24,98.22257919255044\r
2020-04-25,98.22257919255044\r
2020-04-27,97.54000722294597\r
2020-05-04,98.71083129017563\r
2020-05-07,95.88712105093113\r
2020-05-09,92.18519292053826\r
2020-05-10,92.18519292053826\r
2020-05-12,93.37241422689517\r
2020-05-17,93.56528079797972\r
2020-05-19,93.56528079797972\r
2020-05-20,93.56528079797972\r
2020-05-27,95.40227562431967\r
2020-05-29,95.79010463312132\r
2020-05-30,95.79010463312132\r
2020-06-01,94.9502878436612\r
2020-06-03,100.0\r
2020-06-08,100.0\r
2020-07-06,89.88546702552605\r
2020-07-08,89.88546702552605\r
2020-07-09,89.88546702552605\r
2020-07-11,89.88546702552605\r
2020-07-13,89.88546702552605\r
2020-07-14,89.88546702552605\r
2020-07-18,89.88546702552605\r
2020-07-19,89.88546702552605\r
2020-07-21,89.88546702552605\r
2020-07-31,84.85706218307658\r
2020-08-05,88.77261966532762\r
2020-08-07,88.77261966532762\r
2020-08-08,88.77261966532762\r
2020-08-10,83.47796251943372\r
2020-08-12,83.47796251943372\r
2020-08-13,83.47796251943372\r
2020-08-15,83.47796251943372\r
2020-08-17,87.15704361607408\r
2020-08-20,83.10279083481818\r
2020-08-25,84.13549039557586\r
2020-09-04,84.95128952862456\r
2020-09-07,77.5553783047039\r
2020-09-09,80.79827090059631\r
2020-09-11,80.79827090059631\r
2020-09-12,80.79827090059631\r
2020-09-14,77.83208354967458\r
2020-09-16,77.83208354967458\r
2020-09-17,77.83208354967458\r
2020-09-19,77.83208354967458\r
2020-09-21,83.22780284446372\r
2020-09-22,83.22780284446372\r
2020-11-18,77.43247440850078\r
2020-11-20,77.43247440850078\r
2020-11-21,77.43247440850078\r
2020-11-23,77.43247440850078\r
2020-11-25,77.43247440850078\r
2020-11-26,77.43247440850078\r
2020-11-28,78.94127092817004\r
2020-12-06,75.47242439765363\r
2020-12-10,75.47242439765363\r
2020-12-13,81.07771527232832\r
2021-02-21,90.87391134153333\r
2021-02-23,90.87391134153333\r
2021-02-24,90.87391134153333\r
2021-02-28,90.87391134153333\r
2021-03-01,90.87391134153333\r
2021-03-08,86.6516724131508\r
2021-03-10,86.6516724131508\r
2021-03-23,92.05706407848977\r
2021-03-25,92.05706407848977\r
2021-03-28,96.92343138330973\r
2021-03-30,96.92343138330973\r
2021-03-31,96.92343138330973\r
2021-04-02,90.20403552882458\r
2021-04-04,95.14393360137184\r
2021-04-09,84.07281520403517\r
2021-04-27,94.04786601771694\r
2021-06-01,94.2410673545748\r
2021-06-03,94.2410673545748\r
2021-06-11,94.2410673545748\r
2021-06-16,92.53776832499922\r
2021-06-19,92.53776832499922\r
2021-06-21,92.53776832499922\r
2021-06-23,92.53776832499922\r
2021-06-26,92.89066748815836\r
2021-07-21,91.83294191612818\r
2021-07-23,91.83294191612818\r
2021-07-29,91.83294191612818\r
2021-08-15,90.10843648596921\r
2021-08-25,87.31511712181981\r
2021-09-04,90.29965897388887\r
2021-09-06,90.10843648596921\r
2021-09-07,90.10843648596921\r
2021-09-09,90.10843648596921\r
2021-09-24,86.80952488284984\r
2021-10-01,86.80952488284984\r
2021-10-14,87.63147088109528\r
2021-10-16,87.63147088109528\r
2021-10-19,92.92276526233194\r
2021-10-24,87.53653583033689\r
2021-10-29,92.47363960603002\r
2022-02-26,87.06223262956071\r
2022-02-28,87.06223262956071\r
2022-03-03,87.06223262956071\r
2022-03-05,87.06223262956071\r
2022-03-06,87.06223262956071\r
2022-03-23,95.95181179768052\r
2022-03-25,95.95181179768052\r
2022-03-26,95.95181179768052\r
2022-03-28,96.04886761093616\r
2022-04-17,97.96241664986573\r
2022-04-20,97.96241664986573\r
2022-04-22,97.96241664986573\r
2022-04-27,98.09247715290348\r
2022-05-04,95.46688747665567\r
2022-05-07,95.46688747665567\r
2022-05-17,87.47325956504017\r
2022-05-25,87.47325956504017\r
2022-06-11,93.37241422689517\r
2022-06-13,93.37241422689517\r
2022-06-16,97.92990801754964\r
2022-06-18,97.92990801754964\r
2022-06-19,97.92990801754964\r
2022-06-21,95.40227562431967\r
2022-07-11,97.47506018733857\r
2022-07-13,97.47506018733857\r
2022-07-14,97.47506018733857\r
2022-07-18,95.11165271211364\r
2022-07-19,95.11165271211364\r
2022-07-21,95.11165271211364\r
2022-08-10,89.78994942037737\r
2022-08-12,89.78994942037737\r
2022-08-13,89.78994942037737\r
2022-08-17,89.78994942037737\r
2022-08-20,89.78994942037737\r
2022-09-04,87.06223262956071\r
2022-09-11,84.85706218307658\r
2022-10-09,78.44783224515501\r
2022-10-12,78.44783224515501\r
2022-10-16,78.44783224515501\r
2022-10-17,78.44783224515501\r
2022-10-19,79.18826934481204\r
2023-05-27,91.44903882745272\r
2023-05-29,91.44903882745272\r
2023-06-01,99.81968918700207\r
2023-06-03,99.81968918700207\r
2023-06-04,99.81968918700207\r
2023-06-06,99.81968918700207\r
2023-06-08,95.7254401614867\r
`;export{n as default};
