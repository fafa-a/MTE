const n=`date,value\r
2017-02-19,807329.6532255597\r
2017-03-11,785177.4792275208\r
2017-04-10,920169.9882387958\r
2017-04-20,936538.1061482374\r
2017-05-30,352973.73853852064\r
2017-06-19,50596.761714378365\r
2017-06-29,49019.29824702754\r
2017-07-04,63969.555904803405\r
2017-07-14,64555.409867069844\r
2017-07-24,56560.94140934879\r
2017-07-29,45928.21207226255\r
2017-08-13,73613.205266613\r
2017-08-18,76743.93005739385\r
2017-08-23,84481.99109767086\r
2017-09-02,89814.87277398484\r
2017-09-12,132527.55790948131\r
2017-09-17,127785.70299966705\r
2017-09-27,142230.13795880426\r
2017-10-07,136534.95179835992\r
2017-10-12,152221.96534241526\r
2017-10-17,167745.60277388175\r
2017-10-22,168626.72250375035\r
2017-10-27,163369.41975638544\r
2017-11-01,189429.64338252723\r
2017-11-11,195963.71901254714\r
2017-11-16,182989.80467400304\r
2017-11-21,224027.02724401906\r
2017-11-26,242240.76399454934\r
2017-12-16,258934.9559437289\r
2017-12-21,293727.49734831764\r
2018-01-05,308390.2846327531\r
2018-01-20,535798.3758413662\r
2018-02-04,686349.5957622852\r
2018-02-09,736706.8735478001\r
2018-02-14,788568.480854399\r
2018-03-16,984509.4112957441\r
2018-04-05,969640.799715923\r
2018-04-20,945684.354280186\r
2018-04-25,1001351.1852303679\r
2018-04-30,986374.7332483699\r
2018-05-20,824547.3750227243\r
2018-06-09,1012646.290421853\r
2018-06-19,995723.7979113336\r
2018-07-04,831477.5778597649\r
2018-07-14,603786.3876855599\r
2018-07-19,578259.4655161867\r
2018-07-24,548828.861806957\r
2018-07-29,548828.861806957\r
2018-08-23,409034.76287023356\r
2018-09-07,284855.25539050164\r
2018-09-27,225023.0319279683\r
2018-10-02,218090.41625818898\r
2018-12-06,817641.793106844\r
2018-12-11,795369.0710712672\r
2019-01-05,805616.3634343103\r
2019-01-10,759942.9072915589\r
2019-01-15,753272.8186576437\r
2019-01-25,761614.325646528\r
2019-01-30,862967.341841483\r
2019-02-04,791965.6794813912\r
2019-02-14,843664.5831178412\r
2019-03-01,859443.9768359831\r
2019-03-11,870032.4067023875\r
2019-03-16,821091.5044909263\r
2019-03-21,887801.8464674127\r
2019-03-31,802194.4170536246\r
2019-04-05,927429.5925968081\r
2019-04-30,986374.7332483699\r
2019-05-05,945684.354280186\r
2019-05-30,797073.0879690965\r
2019-06-04,678369.4220270604\r
2019-06-19,448338.91339705506\r
2019-06-24,317563.7230556416\r
2019-06-29,383686.36680539086\r
2019-07-04,415479.07913312456\r
2019-07-19,371270.95382141694\r
2019-07-24,273927.72428077995\r
2019-07-29,301585.1993741685\r
2019-08-03,272844.9555768914\r
2019-08-08,332713.0789042406\r
2019-08-23,273927.72428077995\r
2019-09-07,141410.50005396447\r
2019-09-12,132527.55790948131\r
2019-09-17,210280.40627671411\r
2019-09-27,90491.19998746767\r
2019-10-02,186658.14468820722\r
2019-10-07,134124.43772274235\r
2019-10-27,905723.4528074516\r
2019-11-06,862967.341841483\r
2019-11-16,769994.768670179\r
2019-12-21,775041.6969101964\r
2019-12-26,743314.4974777594\r
2020-01-05,896743.6577439238\r
2020-02-04,756604.7449768845\r
2020-02-14,788568.480854399\r
2020-02-19,828009.4007818262\r
2020-02-24,862967.341841483\r
2020-03-15,918358.8695761457\r
2020-04-04,738356.4328906604\r
2020-04-09,778414.0831863971\r
2020-04-14,712151.6198578954\r
2020-04-24,809044.4867541493\r
2020-04-29,694369.3245970395\r
2020-05-04,821091.5044909263\r
2020-05-09,681556.740430264\r
2020-05-19,1097112.0483973697\r
2020-05-24,1041118.784021525\r
2020-06-08,927429.5925968081\r
2020-06-23,934713.3828868256\r
2020-06-28,864731.3169097204\r
2020-07-03,810760.8635235908\r
2020-07-08,795369.0710712672\r
2020-08-02,720297.4601633829\r
2020-08-07,534358.7488162372\r
2020-08-22,617489.5841120984\r
2020-08-27,410320.2066706706\r
2020-09-01,377457.0062286415\r
2020-09-06,510137.08120638086\r
2020-09-16,301585.1993741685\r
2020-09-26,282655.25225504226\r
2020-11-05,69323.49035750583\r
2020-11-20,83170.45616763792\r
2020-12-25,114750.94370463345\r
2021-01-14,79288.22602908364\r
2021-01-19,74858.8564449504\r
2021-01-24,91169.67829646783\r
2021-02-23,68117.97154600533\r
2021-02-28,52195.36893494739\r
2021-03-10,46437.45609706472\r
2021-03-15,40484.77274228263\r
2021-03-30,30486.27698023953\r
2021-04-19,45421.35206703386\r
2021-10-11,7.053830022483339\r
2021-10-16,207.071564976688\r
2021-10-26,78.34879906350169\r
2021-11-20,453.97147002604294\r
2021-11-30,606.7761205155705\r
2021-12-05,13326.74340796853\r
2021-12-20,3908.956074694102\r
2022-01-14,690.1192515610836\r
2022-01-24,7429.183847579898\r
2022-01-29,1282.167869373946\r
2022-02-08,1282.167869373946\r
2022-02-18,528.0275311427775\r
2022-02-23,384.71685389664685\r
2022-05-14,26746.832557992184\r
2022-05-29,45421.35206703386\r
2022-06-18,42922.95398111775\r
2022-07-03,61074.35790497343\r
2022-07-08,54906.43123331328\r
2022-07-13,50068.58627487033\r
2022-07-18,49542.763862720545\r
2022-08-02,41940.425938104236\r
2022-08-07,34431.23408268968\r
2022-08-22,43417.83301668521\r
2022-09-01,28798.693745748376\r
2022-09-11,47979.45262754207\r
2022-09-16,56560.94140934879\r
2022-09-26,49542.763862720545\r
2022-10-01,115.435007542657\r
2022-10-06,35791.229983694735\r
2022-10-26,64555.409867069844\r
2022-11-05,42922.95398111775\r
2022-11-20,21348.257612793186\r
2022-11-25,33093.652577437664\r
2022-11-30,37639.198340168936\r
2022-12-05,218090.41625818898\r
2023-01-04,507318.8528086482\r
2023-01-09,645286.2290692992\r
2023-01-19,617489.5841120984\r
2023-01-29,576772.4662926783\r
2023-02-03,615960.567585002\r
2023-02-08,597737.996072374\r
2023-02-13,626697.4252734086\r
2023-03-05,691156.6909187592\r
2023-03-25,773357.8334947027\r
2023-03-30,815919.2483236071\r
2023-04-14,802194.4170536246\r
2023-04-19,878898.0767287166\r
2023-04-24,861204.8949923335\r
2023-04-29,864731.3169097204\r
`;export{n as default};
