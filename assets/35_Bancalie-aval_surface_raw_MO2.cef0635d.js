const r=`date,value\r
2017-01-26,659300\r
2017-02-22,807800\r
2017-02-25,793700\r
2017-03-07,769500\r
2017-03-17,821400\r
2017-03-27,821600\r
2017-04-03,790900\r
2017-04-06,790900\r
2017-04-23,803300\r
2017-05-03,803300\r
2017-05-16,811700\r
2017-05-23,811700\r
2017-05-26,821100\r
2017-06-02,814800\r
2017-06-05,814300\r
2017-06-12,767300\r
2017-06-25,804600\r
2017-07-02,805800\r
2017-07-05,811300\r
2017-07-07,801600\r
2017-07-10,801600\r
2017-07-12,801600\r
2017-07-17,797300\r
2017-07-22,791700\r
2017-07-27,797600\r
2017-08-04,798300\r
2017-08-06,797900\r
2017-08-11,799400\r
2017-08-14,789600\r
2017-08-19,804200\r
2017-08-21,776100\r
2017-08-24,776900\r
2017-08-26,770000\r
2017-08-29,749300\r
2017-09-03,727300\r
2017-09-05,715500\r
2017-09-08,724500\r
2017-09-10,698700\r
2017-09-13,700100\r
2017-09-20,700700\r
2017-09-23,702700\r
2017-09-28,709900\r
2017-10-03,694600\r
2017-10-05,672500\r
2017-10-08,673100\r
2017-10-10,668200\r
2017-10-13,669200\r
2017-10-15,666100\r
2017-10-18,653600\r
2017-10-25,626600\r
2017-10-28,630600\r
2017-10-30,628400\r
2017-11-17,607200\r
2017-11-19,607200\r
2017-11-22,609100\r
2017-11-24,609100\r
2017-11-27,609100\r
2017-11-29,572700\r
2017-12-09,595600\r
2017-12-14,595600\r
2017-12-19,627300\r
2018-02-25,796700\r
2018-02-27,796700\r
2018-03-02,799300\r
2018-03-14,783800\r
2018-03-19,783800\r
2018-03-22,783800\r
2018-04-01,831300\r
2018-04-21,819100\r
2018-04-23,819100\r
2018-04-26,819200\r
2018-05-06,799200\r
2018-05-11,803200\r
2018-05-18,803200\r
2018-05-21,803200\r
2018-06-20,806200\r
2018-06-22,806900\r
2018-06-25,812600\r
2018-06-27,812600\r
2018-07-02,802700\r
2018-07-07,803100\r
2018-07-10,802000\r
2018-07-12,801000\r
2018-07-15,806500\r
2018-07-17,806500\r
2018-07-25,812800\r
2018-07-27,819400\r
2018-07-30,809600\r
2018-08-01,807400\r
2018-08-04,801000\r
2018-08-06,804500\r
2018-08-11,791800\r
2018-08-16,806800\r
2018-08-19,801600\r
2018-08-21,781900\r
2018-08-26,803200\r
2018-08-31,789600\r
2018-09-03,778100\r
2018-09-08,781000\r
2018-09-10,780700\r
2018-09-13,791800\r
2018-09-20,771300\r
2018-09-23,777400\r
2018-09-25,773900\r
2018-09-28,771600\r
2018-09-30,771600\r
2018-10-03,770100\r
2018-10-05,765500\r
2018-10-23,764500\r
2018-10-25,764500\r
2018-10-30,749000\r
2018-11-24,752800\r
2018-11-27,752800\r
2018-11-29,761400\r
2019-01-11,764900\r
2019-01-16,793200\r
2019-01-23,789900\r
2019-01-28,780100\r
2019-02-12,800300\r
2019-02-15,801800\r
2019-02-17,786500\r
2019-02-20,795300\r
2019-02-22,786800\r
2019-02-25,786800\r
2019-02-27,790900\r
2019-03-12,775200\r
2019-03-22,784800\r
2019-03-24,779600\r
2019-03-27,775500\r
2019-03-29,786500\r
2019-04-01,773500\r
2019-04-08,776100\r
2019-04-13,793100\r
2019-05-01,794700\r
2019-05-06,820100\r
2019-05-11,820100\r
2019-05-13,803300\r
2019-05-16,803300\r
2019-05-23,795000\r
2019-05-31,818800\r
2019-06-02,800800\r
2019-06-12,815800\r
2019-06-17,780200\r
2019-06-22,780200\r
2019-06-25,780200\r
2019-06-27,784100\r
2019-06-30,783800\r
2019-07-02,783800\r
2019-07-05,805500\r
2019-07-07,805500\r
2019-07-10,805500\r
2019-07-12,813000\r
2019-07-15,819100\r
2019-07-17,805600\r
2019-07-22,797700\r
2019-07-25,805500\r
2019-08-01,804900\r
2019-08-04,782600\r
2019-08-09,781600\r
2019-08-11,795600\r
2019-08-14,781200\r
2019-08-16,789000\r
2019-08-21,783500\r
2019-08-24,786400\r
2019-08-26,764600\r
2019-08-29,771200\r
2019-08-31,728000\r
2019-09-03,733700\r
2019-09-05,733400\r
2019-09-13,706000\r
2019-09-15,668800\r
2019-09-18,662400\r
2019-09-20,668300\r
2019-10-05,674200\r
2019-10-08,597400\r
2019-10-13,630600\r
2019-10-25,627600\r
2020-01-06,760700\r
2020-01-11,786400\r
2020-01-16,765600\r
2020-01-18,765600\r
2020-02-05,763300\r
2020-02-07,763300\r
2020-02-15,767100\r
2020-02-20,752700\r
2020-02-22,747000\r
2020-03-01,747000\r
2020-03-08,797900\r
2020-03-11,764700\r
2020-03-13,800600\r
2020-03-18,800200\r
2020-03-21,794100\r
2020-03-28,792400\r
2020-03-31,795300\r
2020-04-05,806000\r
2020-04-07,797200\r
2020-04-10,826200\r
2020-04-12,797600\r
2020-04-15,797600\r
2020-04-25,820600\r
2020-05-07,774900\r
2020-05-17,774900\r
2020-05-20,824500\r
2020-05-22,784100\r
2020-05-25,790200\r
2020-05-27,799400\r
2020-05-30,799400\r
2020-06-19,770700\r
2020-06-21,796800\r
2020-06-24,781900\r
2020-06-26,783800\r
2020-07-01,783800\r
2020-07-04,789000\r
2020-07-09,799200\r
2020-07-11,801000\r
2020-07-14,800700\r
2020-07-19,802200\r
2020-07-21,790900\r
2020-07-24,784500\r
2020-07-26,790100\r
2020-07-29,790500\r
2020-07-31,771600\r
2020-08-03,771600\r
2020-08-05,766100\r
2020-08-08,775400\r
2020-08-10,775100\r
2020-08-15,758400\r
2020-08-20,757200\r
2020-08-23,769600\r
2020-08-25,750000\r
2020-09-02,713500\r
2020-09-04,714700\r
2020-09-07,678700\r
2020-09-12,696100\r
2020-09-14,679200\r
2020-09-17,693200\r
2020-09-19,681400\r
2020-11-08,660000\r
2020-11-11,655500\r
2020-11-18,653300\r
2020-11-21,655700\r
2020-11-23,648900\r
2020-11-26,649600\r
2021-02-06,837200\r
2021-02-11,837200\r
2021-02-14,839100\r
2021-02-19,820900\r
2021-02-24,809200\r
2021-03-01,788200\r
2021-03-23,793000\r
2021-03-26,788000\r
2021-03-28,810300\r
2021-03-31,806500\r
2021-04-02,825600\r
2021-04-05,821800\r
2021-04-07,821900\r
2021-04-15,831900\r
2021-04-17,830300\r
2021-04-20,831800\r
2021-04-22,830800\r
2021-05-27,815800\r
2021-05-30,820200\r
2021-06-09,815200\r
2021-06-11,801000\r
2021-06-14,798400\r
2021-06-16,799000\r
2021-06-19,799000\r
2021-06-21,807600\r
2021-06-26,799100\r
2021-07-19,788600\r
2021-07-21,788600\r
2021-07-26,788600\r
2021-07-29,815600\r
2021-08-05,805900\r
2021-08-10,800800\r
2021-08-13,800800\r
2021-08-18,800800\r
2021-08-20,804900\r
2021-08-23,799800\r
2021-08-25,799800\r
2021-08-28,785000\r
2021-08-30,785300\r
2021-09-04,718300\r
2021-09-07,718300\r
2021-09-22,660900\r
2021-09-24,664200\r
2021-09-29,664200\r
2021-10-14,635700\r
2021-10-17,625100\r
2021-10-24,623100\r
2021-10-27,614600\r
2021-12-16,693100\r
2021-12-18,717400\r
2021-12-21,697600\r
2021-12-23,709700\r
2022-01-15,781100\r
2022-01-17,780800\r
2022-01-22,791000\r
2022-01-25,780000\r
2022-01-27,780500\r
2022-01-30,780500\r
2022-02-01,780500\r
2022-02-06,782300\r
2022-02-09,785400\r
2022-02-26,787300\r
2022-03-01,787300\r
2022-03-03,787300\r
2022-03-08,809600\r
2022-03-23,772900\r
2022-03-26,781000\r
2022-04-05,822000\r
2022-04-10,824100\r
2022-04-15,822000\r
2022-04-17,809200\r
2022-04-27,789100\r
2022-05-15,790100\r
2022-05-17,807000\r
2022-05-20,807000\r
2022-05-22,807000\r
2022-05-27,802500\r
2022-06-01,797000\r
2022-06-04,797000\r
2022-06-06,810200\r
2022-06-11,811400\r
2022-06-14,809600\r
2022-06-16,801700\r
2022-06-19,791800\r
2022-06-29,798700\r
2022-07-01,784900\r
2022-07-04,784900\r
2022-07-06,783100\r
2022-07-11,776500\r
2022-07-14,772700\r
2022-07-16,773300\r
2022-07-19,765500\r
2022-07-21,743700\r
2022-07-24,732000\r
2022-07-26,715700\r
2022-07-29,700800\r
2022-07-31,693800\r
2022-08-03,688300\r
2022-08-05,691300\r
2022-08-08,681100\r
2022-08-10,663900\r
2022-08-13,651000\r
2022-08-15,654600\r
2022-08-20,644800\r
2022-08-23,629100\r
2022-08-28,548000\r
2022-08-30,545200\r
2022-09-02,545500\r
2022-09-04,536000\r
2022-09-12,528000\r
2022-09-19,504300\r
2022-09-22,487300\r
2022-10-02,486100\r
2022-10-04,475200\r
2022-10-07,475200\r
2022-10-09,476000\r
2022-10-12,476000\r
2022-10-22,463400\r
2022-10-24,467300\r
2022-10-27,462500\r
2022-11-01,462500\r
2022-11-06,468500\r
2022-11-11,452300\r
2022-11-13,456500\r
2022-11-16,455800\r
2023-02-06,471100\r
2023-02-09,471600\r
2023-02-11,471700\r
2023-02-14,472100\r
2023-02-16,471400\r
2023-02-19,476900\r
2023-02-21,477200\r
2023-02-26,464200\r
2023-03-01,472600\r
2023-03-03,480700\r
2023-03-16,515100\r
2023-03-28,540700\r
2023-04-05,562700\r
2023-04-07,553200\r
2023-04-15,569900\r
2023-04-17,576700\r
2023-04-20,577700\r
2023-05-27,634700\r
2023-05-30,643000\r
2023-06-04,646200\r
2023-07-09,678500\r
2023-07-11,684100\r
2023-07-14,687700\r
2023-07-16,687700\r
2023-07-19,687700\r
2023-07-21,696300\r
2023-07-29,701100\r
2023-07-31,704700\r
2023-08-03,704700\r
2023-08-05,704700\r
2023-08-08,699700\r
2023-08-10,707900\r
2023-08-13,707300\r
2023-08-15,696800\r
2023-08-18,686400\r
2023-08-20,676000\r
2023-08-23,676100\r
2023-09-04,187100\r
2023-09-07,643500\r
2023-09-14,598600\r
2023-09-24,624400\r
2023-09-27,635400\r
2023-09-29,617800\r
2023-10-02,619700\r
2023-10-04,619700\r
2023-10-07,611100\r
2023-10-12,586600\r
`;export{r as default};
