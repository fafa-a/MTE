const n=`date,value\r
2017-01-19,67.4784274026623\r
2017-01-26,78.78492730650434\r
2017-01-29,74.69924034144574\r
2017-02-05,78.78492730650434\r
2017-02-15,85.69002890772222\r
2017-02-18,85.69002890772222\r
2017-02-25,84.86947837491577\r
2017-02-28,90.97125082487352\r
2017-03-27,100.0\r
2017-03-30,100.0\r
2017-04-06,100.0\r
2017-04-09,92.01684011647102\r
2017-04-19,89.9289347503877\r
2017-04-29,86.20396662906387\r
2017-05-16,97.61243197567164\r
2017-05-19,97.61243197567164\r
2017-05-26,97.61243197567164\r
2017-05-29,81.60899074180826\r
2017-06-05,85.17693198827025\r
2017-06-15,93.38097185393997\r
2017-06-18,90.34546730154388\r
2017-06-25,90.34546730154388\r
2017-08-02,77.38314019007595\r
2017-08-04,76.78448444543659\r
2017-08-14,72.33544453853155\r
2017-08-19,71.55214627155387\r
2017-08-22,78.98574292115454\r
2017-08-24,72.1394016138675\r
2017-08-27,72.43352048949453\r
2017-08-29,75.78955496895641\r
2017-09-03,72.23740490587319\r
2017-09-06,76.18710124207773\r
2017-09-18,58.60347533824296\r
2017-09-21,59.81033986890392\r
2017-09-28,59.81033986890392\r
2017-10-13,60.93030856493209\r
2017-10-16,60.93030856493209\r
2017-10-18,60.93030856493209\r
2017-10-21,60.93030856493209\r
2017-10-26,60.64978455696255\r
2017-10-28,63.28167940952256\r
2017-10-31,66.51817354923122\r
2017-11-05,66.51817354923122\r
2017-11-07,66.03945981412313\r
2017-11-15,69.60414566492635\r
2017-11-17,69.60414566492635\r
2018-02-08,85.58734218652326\r
2018-02-10,86.71874287498085\r
2018-02-18,86.71874287498085\r
2018-02-25,98.57153711237144\r
2018-02-28,99.85431886666312\r
2018-03-10,97.39964582670237\r
2018-03-20,94.53950834974573\r
2018-03-25,92.1215784190817\r
2018-04-19,89.40900952082453\r
2018-04-21,99.10547870220047\r
2018-04-24,87.23435538414137\r
2018-05-04,95.27878666721331\r
2018-05-06,100.0\r
2018-05-09,100.0\r
2018-05-11,100.0\r
2018-05-16,100.0\r
2018-05-19,90.76252520705613\r
2018-05-21,86.92488765315753\r
2018-05-24,86.92488765315753\r
2018-06-20,89.82488382825716\r
2018-06-23,93.48613195203576\r
2018-06-25,90.24128486882913\r
2018-06-28,93.06568570263521\r
2018-07-03,93.80180615819327\r
2018-07-08,92.54085692151317\r
2018-07-10,95.59610134006992\r
2018-07-13,89.30512337594388\r
2018-07-15,91.07566274027747\r
2018-07-18,91.07566274027747\r
2018-07-23,91.07566274027747\r
2018-07-25,94.6450231706508\r
2018-07-28,95.06740378669225\r
2018-08-02,95.06740378669225\r
2018-08-04,91.07566274027747\r
2018-08-07,88.99366305636165\r
2018-08-12,86.10111193018678\r
2018-08-17,88.88990904634886\r
2018-08-19,83.13299844538142\r
2018-08-22,77.88298882793197\r
2018-09-01,75.29342234215318\r
2018-09-08,71.64993104832254\r
2018-09-11,68.0563803897635\r
2018-09-16,69.99256906540698\r
2018-09-26,71.06377031245987\r
2018-09-28,74.69924034144574\r
2018-10-01,74.69924034144574\r
2018-10-06,64.60900859372288\r
2018-10-08,67.09387471966689\r
2018-10-11,74.89715806724365\r
2018-10-13,74.89715806724365\r
2018-10-18,70.57630964646026\r
2018-10-21,71.25901102041561\r
2018-10-23,69.41015561883263\r
2018-11-02,68.63567750524224\r
2018-12-10,78.4839659725767\r
2018-12-12,78.4839659725767\r
2018-12-17,79.0862030855682\r
2018-12-20,79.0862030855682\r
2019-02-13,85.38206971340583\r
2019-02-15,87.1311660892613\r
2019-02-18,87.1311660892613\r
2019-02-20,86.10111193018678\r
2019-02-23,86.92488765315753\r
2019-02-25,83.94894361176001\r
2019-03-10,85.79274926094507\r
2019-03-22,80.59727970748325\r
2019-03-27,80.59727970748325\r
2019-03-30,84.46001321810745\r
2019-04-01,84.46001321810745\r
2019-04-04,84.46001321810745\r
2019-04-11,94.85614924465166\r
2019-04-14,94.85614924465166\r
2019-04-19,98.35818130338605\r
2019-05-06,86.30685486887285\r
2019-05-14,91.18010737063695\r
2019-05-16,91.18010737063695\r
2019-05-29,86.61572065260403\r
2019-06-30,79.79039969506519\r
2019-07-03,79.79039969506519\r
2019-07-05,83.6427090580034\r
2019-07-08,83.6427090580034\r
2019-07-10,83.6427090580034\r
2019-07-15,78.88531765475214\r
2019-07-20,76.68483208584267\r
2019-07-23,66.03945981412313\r
2019-07-25,63.94440301983576\r
2019-07-30,63.94440301983576\r
2019-08-02,61.02389511931734\r
2019-08-22,31.05442840883993\r
2019-08-24,31.05442840883993\r
2019-08-29,31.05442840883993\r
2019-09-01,31.05442840883993\r
2019-09-03,31.05442840883993\r
2019-09-06,20.29461654017463\r
2019-09-11,20.29461654017463\r
2019-09-13,18.718242415229934\r
2019-09-16,18.718242415229934\r
2019-09-18,17.84285593122455\r
2019-09-21,17.44272204097001\r
2019-10-11,22.401976405233476\r
2019-10-13,22.401976405233476\r
2019-10-21,22.401976405233476\r
2019-11-22,41.097435261513375\r
2019-12-02,44.58132664345676\r
2019-12-05,43.55365578455327\r
2019-12-10,46.7431505929358\r
2019-12-20,45.270063537725875\r
2020-01-06,51.864196912206765\r
2020-01-11,51.864196912206765\r
2020-01-16,58.048734716200926\r
2020-01-19,55.114671981156135\r
2020-01-21,59.3453660404167\r
2020-01-24,60.36961460806726\r
2020-02-05,63.849612789382945\r
2020-02-15,67.57465933783244\r
2020-02-18,67.57465933783244\r
2020-03-19,84.76706137073997\r
2020-03-24,84.86947837491577\r
2020-03-26,84.25548368524164\r
2020-03-31,84.86947837491577\r
2020-04-05,86.40977663147227\r
2020-04-08,86.40977663147227\r
2020-04-10,87.75080191101569\r
2020-04-13,84.46001321810745\r
2020-04-15,89.51292865586095\r
2020-04-23,90.6582115387622\r
2020-05-15,88.47522395560479\r
2020-05-18,88.68250027603793\r
2020-05-20,84.46001321810745\r
2020-05-25,87.23435538414137\r
2020-05-28,84.56232877379135\r
2020-05-30,88.06106922735758\r
2020-06-02,88.78618811373408\r
2020-06-09,91.2845846989499\r
2020-06-14,93.90709547598834\r
2020-06-24,87.33757803967995\r
2020-07-07,88.47522395560479\r
2020-07-09,82.11613690145604\r
2020-07-12,88.06106922735758\r
2020-07-14,85.79274926094507\r
2020-07-19,87.02801017295371\r
2020-07-22,88.99366305636165\r
2020-07-24,90.24128486882913\r
2020-07-27,89.51292865586095\r
2020-07-29,88.68250027603793\r
2020-08-06,87.75080191101569\r
2020-08-08,82.21766907502541\r
2020-09-07,54.750851899633886\r
2020-09-10,56.57650637873065\r
2020-09-12,54.56918898698952\r
2020-09-15,58.23348804556381\r
2020-09-17,56.21006856297516\r
2020-09-22,56.21006856297516\r
2020-11-14,56.75996900698426\r
2020-11-19,60.64978455696255\r
2020-11-21,58.60347533824296\r
2020-11-29,60.93030856493209\r
2020-12-01,59.81033986890392\r
2020-12-04,59.81033986890392\r
2021-02-24,96.01963555200625\r
2021-02-27,96.23159436146196\r
2021-03-01,94.85614924465166\r
2021-03-06,94.85614924465166\r
2021-03-09,93.17074871269871\r
2021-03-24,93.90709547598834\r
2021-03-29,98.57153711237144\r
2021-03-31,90.76252520705613\r
2021-04-03,94.32857522147431\r
2021-04-08,94.11777088663553\r
2021-04-18,91.07566274027747\r
2021-04-23,89.9289347503877\r
2021-04-25,93.38097185393997\r
2021-05-03,89.30512337594388\r
2021-05-08,88.78618811373408\r
2021-05-28,89.40900952082453\r
2021-05-30,92.01684011647102\r
2021-06-14,91.2845846989499\r
2021-06-24,91.2845846989499\r
2021-07-19,96.3376216361341\r
2021-07-22,100.0\r
2021-08-26,87.85419110201151\r
2021-09-02,89.40900952082453\r
2021-09-05,89.40900952082453\r
2021-09-07,89.09745012627604\r
2021-09-17,84.86947837491577\r
2021-09-22,78.58425144519744\r
2021-09-30,78.58425144519744\r
2021-10-15,79.58902667489949\r
2021-10-17,79.58902667489949\r
2021-10-22,82.21766907502541\r
2021-10-27,89.09745012627604\r
2021-11-06,81.81174618692796\r
2021-11-09,84.86947837491577\r
2021-11-19,75.69025724290809\r
2021-11-29,80.6982955250148\r
2021-12-09,83.03115853920191\r
2021-12-16,79.0862030855682\r
2022-01-05,90.6582115387622\r
2022-01-20,87.95761354670552\r
2022-02-09,87.54412336120215\r
2022-02-12,95.17307919272692\r
2022-02-17,95.17307919272692\r
2022-02-19,95.17307919272692\r
2022-03-24,91.91213437661973\r
2022-03-26,95.70193692715566\r
2022-04-15,90.13713528792012\r
2022-05-03,99.85431886666312\r
2022-05-05,99.85431886666312\r
2022-05-08,99.85431886666312\r
2022-05-10,94.11777088663553\r
2022-05-13,94.11777088663553\r
2022-05-15,88.26808022569851\r
2022-05-18,89.51292865586095\r
2022-05-28,87.75080191101569\r
2022-05-30,80.3953518314215\r
2022-06-02,83.84683145555441\r
2022-06-04,83.84683145555441\r
2022-06-12,83.43872267221202\r
2022-06-14,70.77118389504534\r
2022-06-17,74.10634687293722\r
2022-06-19,72.62978125712092\r
2022-06-27,74.79818131885403\r
2022-06-29,74.89715806724365\r
2022-07-02,70.67372841917442\r
2022-07-04,68.82907434603432\r
2022-07-12,67.18995658316153\r
2022-07-14,67.67092873027181\r
2022-07-17,66.13512696092573\r
2022-07-19,66.90182375342161\r
2022-08-03,52.8516603869197\r
2022-08-06,53.12184977934555\r
2022-08-08,49.81606647405739\r
2022-08-11,49.81606647405739\r
2022-08-13,45.70198528167541\r
2022-08-18,42.617405504447106\r
2022-08-31,33.095853424754154\r
2022-09-05,33.095853424754154\r
2022-09-20,30.821177875558632\r
2022-09-22,31.366174967895265\r
2022-09-30,31.366174967895265\r
2022-10-20,38.68069274300624\r
2022-10-27,40.00912208917449\r
2022-11-01,37.03754696280058\r
2022-12-16,56.30161701203205\r
2023-01-15,67.95996140962507\r
2023-01-18,69.60414566492635\r
2023-01-20,69.60414566492635\r
2023-02-07,78.68457189658477\r
2023-02-09,84.97192915821071\r
2023-02-12,84.97192915821071\r
2023-02-14,77.98306400131662\r
2023-02-27,82.21766907502541\r
2023-03-01,85.2794839981567\r
2023-03-04,83.33678053080752\r
2023-03-14,82.52247113295006\r
2023-04-05,93.38097185393997\r
2023-04-08,93.38097185393997\r
2023-04-13,93.38097185393997\r
2023-04-20,95.49029775699503\r
2023-04-30,95.49029775699503\r
2023-05-03,81.50766458659099\r
2023-05-28,80.59727970748325\r
2023-05-30,85.2794839981567\r
2023-06-02,88.68250027603793\r
2023-06-04,88.68250027603793\r
2023-06-07,86.30685486887285\r
2023-06-12,88.57884555080517\r
2023-06-14,85.2794839981567\r
2023-06-24,81.10270420056099\r
2023-06-27,78.38371549898751\r
2023-07-07,63.28167940952256\r
2023-07-14,63.28167940952256\r
2023-07-22,70.28427377714452\r
2023-08-08,61.96191384607539\r
2023-08-21,46.7431505929358\r
2023-08-23,57.7719057682816\r
2023-09-02,58.23348804556381\r
2023-09-05,55.75293771982117\r
2023-09-07,56.02709385480632\r
2023-09-10,52.2226855705862\r
2023-09-15,54.65999982346313\r
2023-09-25,56.75996900698426\r
2023-09-30,56.75996900698426\r
2023-10-02,56.75996900698426\r
2023-10-05,56.75996900698426\r
2023-10-07,52.2226855705862\r
2023-10-10,50.43702099842927\r
2023-10-20,49.63903748944139\r
2023-11-04,56.851761146801884\r
2023-11-06,60.74325325636194\r
`;export{n as default};
