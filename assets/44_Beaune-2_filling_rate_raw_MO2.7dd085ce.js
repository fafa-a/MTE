const n=`date,value\r
2017-01-26,68.76548452948043\r
2017-01-29,72.13463858955373\r
2017-02-15,74.16318582433053\r
2017-02-18,74.16318582433053\r
2017-02-25,75.91447203665312\r
2017-02-28,72.13463858955373\r
2017-03-17,87.34325165243469\r
2017-03-27,99.28870469812094\r
2017-03-30,99.28870469812094\r
2017-04-06,99.28870469812094\r
2017-05-16,63.69344862081601\r
2017-05-19,63.69344862081601\r
2017-05-26,91.63709359117087\r
2017-06-05,90.25061478390583\r
2017-06-25,97.3989254961004\r
2017-07-03,100.0\r
2017-07-05,100.0\r
2017-08-14,91.94600645795914\r
2017-08-17,91.94600645795914\r
2017-08-19,91.94600645795914\r
2017-08-22,91.94600645795914\r
2017-08-24,91.94600645795914\r
2017-09-28,76.7944136468675\r
2017-10-03,76.7944136468675\r
2017-10-06,76.7944136468675\r
2017-10-31,89.94331743987922\r
2017-11-02,92.33255857214027\r
2017-11-05,92.33255857214027\r
2017-11-07,88.870103963026\r
2017-11-15,87.0387762624592\r
2017-11-17,87.0387762624592\r
2017-11-20,80.11943054925382\r
2017-11-22,83.25824730712868\r
2017-11-25,83.25824730712868\r
2017-11-27,82.35798333893055\r
2017-12-05,84.99142216205017\r
2017-12-07,84.99142216205017\r
2018-02-10,97.63458846941889\r
2018-02-18,97.63458846941889\r
2018-02-25,92.1778829693172\r
2018-03-02,92.1778829693172\r
2018-04-21,98.02771594777845\r
2018-04-26,98.02771594777845\r
2018-05-06,97.08495764876912\r
2018-05-11,99.20976013873253\r
2018-05-19,92.40992373205779\r
2018-05-21,92.56470873552065\r
2018-06-20,88.02941366738976\r
2018-06-23,88.02941366738976\r
2018-06-25,91.09720077514763\r
2018-06-28,91.09720077514763\r
2018-07-08,80.78917230939535\r
2018-07-10,82.35798333893055\r
2018-07-15,80.26812642609771\r
2018-07-18,80.26812642609771\r
2018-07-20,79.7480305623904\r
2018-07-23,74.8185697440261\r
2018-07-25,74.8185697440261\r
2018-08-19,54.95370202390028\r
2018-08-22,54.95370202390028\r
2018-09-08,49.87528954065061\r
2018-09-11,49.87528954065061\r
2018-09-16,49.87528954065061\r
2018-09-28,55.221271721114505\r
2018-10-06,55.221271721114505\r
2018-10-13,56.29519602569821\r
2018-10-16,56.29519602569821\r
2018-10-18,63.55412880399365\r
2018-10-21,63.55412880399365\r
2018-10-23,56.90182870883819\r
2019-02-15,74.01776550741498\r
2019-02-18,74.01776550741498\r
2019-02-20,80.41689985543505\r
2019-02-23,80.41689985543505\r
2019-02-25,73.72716599427307\r
2019-03-05,80.19376878968627\r
2019-03-07,80.19376878968627\r
2019-03-12,67.9835412125415\r
2019-03-22,67.77072123296918\r
2019-03-25,67.77072123296918\r
2019-03-27,71.19821539318775\r
2019-03-30,71.19821539318775\r
2019-04-01,70.62366996853751\r
2019-04-09,76.86787079616205\r
2019-04-14,76.28076753564822\r
2019-05-06,79.30299229490281\r
2019-05-14,79.30299229490281\r
2019-05-16,79.30299229490281\r
2019-05-31,88.25846977737851\r
2019-06-13,88.25846977737851\r
2019-06-25,98.02771594777845\r
2019-06-28,98.02771594777845\r
2019-06-30,98.02771594777845\r
2019-07-03,98.02771594777845\r
2019-07-05,99.6046595416251\r
2019-07-08,99.6046595416251\r
2019-07-10,92.1778829693172\r
2019-07-13,93.8833179162479\r
2019-07-15,90.48128122105948\r
2019-07-23,92.56470873552065\r
2019-07-25,82.80777105700868\r
2019-07-28,85.8996640012878\r
2019-08-02,70.83897097148316\r
2019-08-04,70.83897097148316\r
2019-08-09,70.83897097148316\r
2019-09-13,51.50889970627267\r
2019-09-16,55.0205601568952\r
2019-09-18,53.95358261482613\r
2019-09-21,59.414848992558646\r
2019-10-13,61.26781383751353\r
2019-10-16,61.26781383751353\r
2019-10-26,61.26781383751353\r
2020-01-06,96.14476845748034\r
2020-01-11,96.14476845748034\r
2020-01-16,96.92808074565559\r
2020-01-19,96.92808074565559\r
2020-01-21,96.84966907130452\r
2020-01-24,97.00651027358126\r
2020-02-15,98.97303252243465\r
2020-02-18,98.97303252243465\r
2020-02-20,98.97303252243465\r
2020-02-23,99.68369237333444\r
2020-03-21,90.5582068405369\r
2020-03-24,90.5582068405369\r
2020-03-26,97.94905489567498\r
2020-03-31,93.49494710509616\r
2020-04-03,93.49494710509616\r
2020-04-05,97.71317839616317\r
2020-04-08,96.45787872451646\r
2020-04-10,96.92808074565559\r
2020-04-13,93.26214221341476\r
2020-04-15,95.1291420414638\r
2020-04-25,93.9610464180867\r
2020-05-20,87.0387762624592\r
2020-05-25,90.17376280144205\r
2020-05-28,90.17376280144205\r
2020-05-30,80.78917230939535\r
2020-06-02,80.78917230939535\r
2020-07-09,31.50471384549486\r
2020-07-12,31.50471384549486\r
2020-07-14,31.50471384549486\r
2020-07-19,31.90554469036833\r
2020-07-24,30.197809237768663\r
2020-07-27,35.221714444462215\r
2020-07-29,29.1859696205082\r
2020-08-06,34.692005805630984\r
2020-08-08,17.369375031737253\r
2020-08-11,17.369375031737253\r
2020-09-17,6.731086686248899\r
2021-01-10,21.559390677973916\r
2021-01-18,21.559390677973916\r
2021-02-14,79.52542382676107\r
2021-02-17,79.52542382676107\r
2021-02-19,79.52542382676107\r
2021-02-24,94.42779725634627\r
2021-02-27,94.34996026509673\r
2021-03-01,98.10639476561613\r
2021-03-04,98.10639476561613\r
2021-03-06,95.44131912592083\r
2021-03-09,100.0\r
2021-03-14,98.57884040454682\r
2021-03-31,96.22301916462403\r
2021-04-03,96.22301916462403\r
2021-04-05,96.22301916462403\r
2021-04-08,96.22301916462403\r
2021-04-15,90.94311068369969\r
2021-04-18,90.94311068369969\r
2021-04-23,90.94311068369969\r
2021-06-14,91.55991110054332\r
2021-06-19,91.55991110054332\r
2021-07-19,95.51940834973038\r
2021-07-22,95.51940834973038\r
2021-07-29,96.37957430450503\r
2021-08-28,81.38581316638887\r
2021-08-31,81.38581316638887\r
2021-09-02,81.38581316638887\r
2021-09-05,80.04511171266667\r
2021-09-22,78.85865570193475\r
2021-09-30,77.89834178939695\r
2021-10-02,77.89834178939695\r
2021-10-12,80.4913156326706\r
2021-10-15,80.4913156326706\r
2021-10-17,80.4913156326706\r
2021-12-16,84.76478667026885\r
2021-12-19,84.76478667026885\r
2021-12-21,93.18457688821323\r
2022-01-05,97.63458846941889\r
2022-01-13,97.63458846941889\r
2022-01-15,98.10639476561613\r
2022-01-18,92.10057253978472\r
2022-01-23,92.10057253978472\r
2022-01-25,94.89519820988572\r
2022-01-28,92.56470873552065\r
2022-01-30,92.56470873552065\r
2022-02-09,92.10057253978472\r
2022-03-06,93.6502410636937\r
2022-03-09,93.6502410636937\r
2022-03-26,90.5582068405369\r
2022-04-10,89.86653920421911\r
2022-04-15,96.45787872451646\r
2022-05-30,83.40855878204712\r
2022-06-02,83.40855878204712\r
2022-06-14,73.94508547609479\r
2022-06-17,73.94508547609479\r
2022-06-19,73.94508547609479\r
2022-06-29,57.51028675712762\r
2022-07-02,60.648381057178035\r
2022-07-07,60.648381057178035\r
2022-07-14,50.33120550722153\r
2022-07-17,50.33120550722153\r
2022-07-19,50.33120550722153\r
2022-07-22,50.33120550722153\r
2022-07-24,42.556299860243115\r
2022-07-27,42.556299860243115\r
2022-08-01,37.42289908183732\r
2022-08-03,38.50720452338443\r
2022-08-06,36.64523725565576\r
2022-08-08,37.603010624370356\r
2022-08-11,37.603010624370356\r
2022-08-13,36.347363460124626\r
2022-08-18,39.72214166847473\r
2022-09-12,39.052611772716304\r
2022-09-20,39.052611772716304\r
2022-09-22,39.174106082147816\r
2022-09-30,36.52600565289547\r
2022-10-22,50.461681409645124\r
2022-11-01,50.461681409645124\r
2022-11-11,58.93707346535144\r
2022-12-06,71.91823548652326\r
2022-12-16,72.78494396507942\r
2023-02-09,92.40992373205779\r
2023-02-12,92.40992373205779\r
2023-02-14,96.14476845748034\r
2023-04-05,87.0387762624592\r
2023-04-08,87.0387762624592\r
2023-04-30,100.0\r
2023-05-03,100.0\r
2023-05-25,87.6480260045808\r
2023-05-28,87.6480260045808\r
2023-05-30,98.50005512294612\r
2023-06-02,98.50005512294612\r
2023-06-04,93.18457688821323\r
2023-06-07,93.6502410636937\r
2023-06-14,93.02950073547697\r
2023-06-17,93.02950073547697\r
2023-06-24,93.72791523249245\r
2023-06-27,91.25136424457054\r
2023-06-29,91.25136424457054\r
2023-07-09,95.05114275525179\r
2023-07-14,95.75378380478465\r
2023-07-19,89.71303810151376\r
2023-07-22,90.48128122105948\r
2023-07-27,86.2788987492941\r
2023-08-08,68.19654882917565\r
2023-08-23,62.51197354537255\r
2023-08-26,62.51197354537255\r
2023-09-02,61.68175134435623\r
2023-09-07,59.75678085391727\r
2023-09-10,59.75678085391727\r
2023-09-15,59.75678085391727\r
2023-10-02,66.14536283167715\r
2023-10-05,66.14536283167715\r
2023-10-07,68.8366949414254\r
2023-10-10,68.8366949414254\r
2023-10-15,67.9835412125415\r
2023-11-26,97.16342286491265\r
2023-11-29,97.16342286491265\r
2023-12-16,95.1291420414638\r
2023-12-26,95.1291420414638\r
`;export{n as default};
