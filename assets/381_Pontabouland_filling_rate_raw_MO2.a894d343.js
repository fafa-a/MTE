const n=`date,value\r
2017-03-14,51.48677174117699\r
2017-03-17,51.48677174117699\r
2017-04-23,7.408167096678042\r
2017-05-03,7.408167096678042\r
2017-05-23,1.5608949804250307\r
2017-05-26,1.5608949804250307\r
2017-06-02,2.461963440091986\r
2017-06-05,1.5608949804250307\r
2017-06-12,1.5608949804250307\r
2017-07-07,18.127544081858908\r
2017-07-12,20.413001505640697\r
2017-07-17,16.68446220613153\r
2017-08-21,40.56620024451092\r
2017-08-24,40.56620024451092\r
2017-08-26,40.56620024451092\r
2017-08-29,40.56620024451092\r
2017-10-05,34.05522470984172\r
2017-10-10,34.05522470984172\r
2017-10-13,34.05522470984172\r
2017-10-15,63.8135802684524\r
2017-10-18,62.37378763118508\r
2017-10-25,62.37378763118508\r
2018-03-14,47.691480036476364\r
2018-03-19,47.691480036476364\r
2018-03-22,47.691480036476364\r
2018-04-18,45.24767288064083\r
2018-04-21,45.24767288064083\r
2018-04-23,45.24767288064083\r
2018-04-26,45.24767288064083\r
2018-06-22,39.43858068809808\r
2018-06-25,39.43858068809808\r
2018-06-27,44.05158727941655\r
2018-07-02,41.7108849177944\r
2018-07-07,30.052045125960937\r
2018-07-10,21.207229744150162\r
2018-07-12,30.052045125960937\r
2018-07-15,30.052045125960937\r
2018-07-17,24.547385490786045\r
2018-07-20,52.786552560946156\r
2018-07-22,52.786552560946156\r
2018-07-27,62.37378763118508\r
2018-07-30,50.204353943052006\r
2018-08-01,59.5469924041941\r
2018-08-04,59.5469924041941\r
2018-08-06,59.5469924041941\r
2018-08-11,44.05158727941655\r
2018-08-16,59.5469924041941\r
2018-08-19,59.5469924041941\r
2018-08-21,44.05158727941655\r
2018-08-26,40.56620024451092\r
2018-09-03,31.02769748300332\r
2018-09-05,31.02769748300332\r
2018-09-20,47.691480036476364\r
2018-09-23,47.691480036476364\r
2018-09-25,50.204353943052006\r
2018-09-28,50.204353943052006\r
2018-10-05,37.234396980400476\r
2018-10-20,45.24767288064083\r
2018-10-23,45.24767288064083\r
2018-10-25,45.24767288064083\r
2018-10-30,50.204353943052006\r
2018-11-04,35.098049951702485\r
2018-11-09,35.098049951702485\r
2019-02-12,82.4747764639348\r
2019-02-15,82.4747764639348\r
2019-02-17,100.0\r
2019-02-20,100.0\r
2019-02-22,54.103727856945525\r
2019-02-25,54.103727856945525\r
2019-02-27,59.5469924041941\r
2019-03-04,37.234396980400476\r
2019-03-07,51.48677174117699\r
2019-03-24,22.84457123513165\r
2019-03-27,22.84457123513165\r
2019-03-29,30.052045125960937\r
2019-04-01,30.052045125960937\r
2019-04-08,30.052045125960937\r
2019-05-13,26.316015160678642\r
2019-05-16,26.316015160678642\r
2019-05-23,26.316015160678642\r
2019-05-26,26.316015160678642\r
2019-05-31,20.413001505640697\r
2019-06-02,25.423452355210628\r
2019-06-05,25.423452355210628\r
2019-06-12,32.020086079568514\r
2019-06-17,36.157761873272115\r
2019-06-27,37.234396980400476\r
2019-06-30,37.234396980400476\r
2019-07-02,37.234396980400476\r
2019-07-05,22.84457123513165\r
2019-07-07,22.84457123513165\r
2019-07-10,22.84457123513165\r
2019-07-12,39.43858068809808\r
2019-07-15,37.234396980400476\r
2019-07-17,55.438328780267994\r
2019-07-20,55.438328780267994\r
2019-07-22,35.098049951702485\r
2019-07-25,35.098049951702485\r
2019-08-01,31.02769748300332\r
2019-08-04,38.32799135953246\r
2019-08-06,38.32799135953246\r
2019-08-09,30.052045125960937\r
2019-08-11,30.052045125960937\r
2019-08-14,30.052045125960937\r
2019-08-16,30.052045125960937\r
2019-08-26,28.15079354319311\r
2019-08-29,28.15079354319311\r
2019-08-31,37.234396980400476\r
2019-09-03,37.234396980400476\r
2019-09-15,51.48677174117699\r
2019-09-18,47.691480036476364\r
2019-09-20,51.48677174117699\r
2019-09-30,36.157761873272115\r
2019-10-03,37.234396980400476\r
2019-10-25,60.95160149518827\r
2019-10-30,60.95160149518827\r
2019-11-04,60.95160149518827\r
2020-02-07,100.0\r
2020-02-12,100.0\r
2020-02-15,100.0\r
2020-02-20,100.0\r
2020-02-22,100.0\r
2020-03-28,15.986944367276765\r
2020-03-31,15.986944367276765\r
2020-04-02,18.127544081858908\r
2020-04-05,18.127544081858908\r
2020-04-07,15.986944367276765\r
2020-04-10,15.986944367276765\r
2020-04-12,15.986944367276765\r
2020-04-15,21.207229744150162\r
2020-05-27,22.84457123513165\r
2020-05-30,22.84457123513165\r
2020-06-01,22.84457123513165\r
2020-06-21,24.547385490786045\r
2020-06-24,24.547385490786045\r
2020-06-26,24.547385490786045\r
2020-06-29,24.547385490786045\r
2020-07-01,36.157761873272115\r
2020-07-04,36.157761873272115\r
2020-07-06,36.157761873272115\r
2020-07-09,35.098049951702485\r
2020-07-11,35.098049951702485\r
2020-07-14,35.098049951702485\r
2020-07-31,34.05522470984172\r
2020-08-05,55.438328780267994\r
2020-08-08,55.438328780267994\r
2020-08-10,55.438328780267994\r
2020-08-15,24.547385490786045\r
2020-08-18,38.32799135953246\r
2020-08-20,24.547385490786045\r
2020-08-25,25.423452355210628\r
2020-09-02,37.234396980400476\r
2020-09-04,30.052045125960937\r
2020-09-07,32.020086079568514\r
2020-09-09,32.020086079568514\r
2020-09-12,30.052045125960937\r
2020-09-14,37.234396980400476\r
2020-09-17,37.234396980400476\r
2021-02-21,12.134985386718835\r
2021-02-24,12.134985386718835\r
2021-02-26,39.43858068809808\r
2021-03-01,39.43858068809808\r
2021-03-06,36.157761873272115\r
2021-03-23,18.127544081858908\r
2021-03-28,22.84457123513165\r
2021-03-31,22.84457123513165\r
2021-04-02,16.68446220613153\r
2021-04-05,28.15079354319311\r
2021-04-07,28.15079354319311\r
2021-04-12,21.207229744150162\r
2021-04-22,18.127544081858908\r
2021-04-27,32.020086079568514\r
2021-05-05,22.0177381907673\r
2021-06-16,21.207229744150162\r
2021-06-26,21.207229744150162\r
2021-07-21,20.413001505640697\r
2021-07-29,20.413001505640697\r
2021-08-10,12.737578975728582\r
2021-08-13,12.737578975728582\r
2021-08-15,15.986944367276765\r
2021-08-20,15.305376162966548\r
2021-08-25,13.989886305432615\r
2021-08-28,16.68446220613153\r
2021-09-02,9.355380839613774\r
2021-09-04,23.687772625930215\r
2021-09-07,23.687772625930215\r
2021-09-12,23.687772625930215\r
2021-09-24,10.976642798619995\r
2021-10-14,18.127544081858908\r
2021-10-17,18.127544081858908\r
2021-10-19,26.316015160678642\r
2021-10-22,26.316015160678642\r
2021-10-24,18.873204763224162\r
2021-10-27,42.8726692168546\r
2022-02-26,14.639707223744617\r
2022-03-01,14.639707223744617\r
2022-03-06,14.639707223744617\r
2022-03-08,19.635008423758357\r
2022-04-17,13.355861255227527\r
2022-04-22,24.547385490786045\r
2022-04-27,13.355861255227527\r
2022-04-30,25.423452355210628\r
2022-05-02,25.423452355210628\r
2022-05-07,14.639707223744617\r
2022-06-11,34.05522470984172\r
2022-06-16,34.05522470984172\r
2022-06-19,34.05522470984172\r
2022-06-21,42.8726692168546\r
2022-06-29,24.547385490786045\r
2022-07-01,26.316015160678642\r
2022-07-06,18.873204763224162\r
2022-07-11,31.02769748300332\r
2022-07-14,31.02769748300332\r
2022-07-16,23.687772625930215\r
2022-07-19,37.234396980400476\r
2022-07-21,28.15079354319311\r
2022-07-24,34.05522470984172\r
2022-07-26,20.413001505640697\r
2022-07-31,26.316015160678642\r
2022-08-03,19.635008423758357\r
2022-08-05,19.635008423758357\r
2022-08-10,27.22511528187914\r
2022-08-13,27.22511528187914\r
2022-09-19,24.547385490786045\r
2022-09-22,24.547385490786045\r
2022-10-04,22.84457123513165\r
2022-10-07,22.84457123513165\r
2022-10-09,24.547385490786045\r
2022-10-12,24.547385490786045\r
2023-02-11,51.48677174117699\r
2023-02-14,51.48677174117699\r
2023-02-16,71.27765380401037\r
2023-02-21,48.93926740195399\r
2023-02-26,63.8135802684524\r
2023-03-28,44.05158727941655\r
2023-03-31,44.05158727941655\r
2023-04-05,44.05158727941655\r
2023-04-07,44.05158727941655\r
`;export{n as default};
