const r=`date,value\r
2017-01-19,682800\r
2017-01-29,682800\r
2017-02-08,808800\r
2017-02-18,809300\r
2017-02-21,770500\r
2017-03-30,846900\r
2017-04-02,846900\r
2017-04-09,860800\r
2017-04-12,855000\r
2017-04-19,846200\r
2017-04-22,833200\r
2017-04-29,840500\r
2017-05-09,830000\r
2017-05-19,814300\r
2017-06-18,832500\r
2017-06-21,867300\r
2017-06-28,867300\r
2017-07-01,851700\r
2017-10-04,758900\r
2017-10-06,775700\r
2017-10-11,775700\r
2017-10-14,754700\r
2017-10-16,772200\r
2017-10-19,758100\r
2017-10-21,758100\r
2017-11-05,765800\r
2017-11-08,765800\r
2017-11-13,774000\r
2017-11-15,749600\r
2017-11-23,762300\r
2017-11-25,742500\r
2017-12-18,785900\r
2017-12-28,820300\r
2018-01-19,855000\r
2018-01-27,855000\r
2018-02-21,827300\r
2018-02-26,878800\r
2018-02-28,831100\r
2018-03-05,873700\r
2018-04-17,867600\r
2018-04-19,880200\r
2018-04-22,880200\r
2018-04-24,866600\r
2018-05-04,868900\r
2018-05-07,864000\r
2018-05-09,864000\r
2018-05-14,864000\r
2018-05-17,875200\r
2018-05-19,875600\r
2018-05-22,875600\r
2018-06-23,863400\r
2018-06-26,868000\r
2018-06-28,858500\r
2018-07-01,865400\r
2018-07-06,833700\r
2018-07-08,836200\r
2018-07-16,858400\r
2018-07-18,860300\r
2018-07-21,836500\r
2018-07-23,847000\r
2018-07-26,873500\r
2018-07-28,873300\r
2018-07-31,874200\r
2018-08-02,864900\r
2018-08-05,841800\r
2018-09-01,824500\r
2018-09-11,824200\r
2018-09-14,821700\r
2018-09-26,800200\r
2018-09-29,800800\r
2018-10-01,800800\r
2018-10-04,815500\r
2018-10-09,814400\r
2018-10-19,774600\r
2018-10-21,813800\r
2018-10-24,772500\r
2018-11-03,767500\r
2018-11-08,750000\r
2018-11-13,729300\r
2018-11-15,737700\r
2018-11-18,709800\r
2018-11-23,714200\r
2018-12-25,768800\r
2019-01-17,751200\r
2019-01-22,751200\r
2019-01-24,751200\r
2019-02-01,783600\r
2019-02-03,821500\r
2019-02-13,817000\r
2019-02-16,817000\r
2019-02-23,791100\r
2019-02-26,785100\r
2019-03-10,786000\r
2019-03-23,797500\r
2019-03-25,797500\r
2019-03-30,877100\r
2019-04-12,877100\r
2019-04-17,789600\r
2019-04-19,872700\r
2019-04-22,872700\r
2019-04-27,837500\r
2019-05-12,853100\r
2019-05-14,820900\r
2019-05-24,831200\r
2019-05-27,831200\r
2019-06-01,853200\r
2019-06-08,805600\r
2019-06-26,777000\r
2019-06-28,805700\r
2019-07-03,798700\r
2019-07-06,801700\r
2019-07-08,784600\r
2019-07-11,794300\r
2019-07-16,791400\r
2019-07-23,782900\r
2019-07-28,813200\r
2019-07-31,813200\r
2019-08-02,726600\r
2019-08-07,726600\r
2019-08-10,780200\r
2019-08-20,760600\r
2019-08-22,761100\r
2019-08-25,761100\r
2019-08-27,803100\r
2019-08-30,803100\r
2019-09-01,773600\r
2019-09-06,773600\r
2019-09-11,784000\r
2019-09-14,747500\r
2019-09-16,757700\r
2019-09-19,744300\r
2019-09-21,734800\r
2019-09-24,734800\r
2019-11-13,828300\r
2019-11-18,828300\r
2019-12-03,741000\r
2019-12-13,738600\r
2019-12-23,854600\r
2019-12-25,862200\r
2019-12-30,829800\r
2020-01-04,800300\r
2020-01-17,805200\r
2020-01-19,785500\r
2020-01-22,784600\r
2020-02-06,855100\r
2020-02-11,848900\r
2020-02-18,848900\r
2020-03-27,829800\r
2020-04-01,825600\r
2020-04-08,825600\r
2020-04-11,789300\r
2020-04-13,792200\r
2020-04-16,792200\r
2020-04-18,786800\r
2020-04-23,845000\r
2020-04-26,837500\r
2020-05-08,840100\r
2020-05-18,865000\r
2020-05-21,851900\r
2020-05-26,856700\r
2020-05-28,860100\r
2020-05-31,845400\r
2020-06-02,857500\r
2020-06-22,855000\r
2020-06-25,858900\r
2020-07-07,845200\r
2020-07-12,824000\r
2020-07-17,827300\r
2020-07-20,827300\r
2020-07-22,811500\r
2020-07-27,817100\r
2020-07-30,808800\r
2020-08-04,808400\r
2020-08-06,811300\r
2020-08-09,790000\r
2020-08-11,776600\r
2020-08-21,766200\r
2020-09-08,807300\r
2020-09-13,817100\r
2020-09-15,817100\r
2020-11-04,713900\r
2020-11-12,740000\r
2020-11-19,740000\r
2020-11-22,720500\r
2020-11-29,750300\r
2020-12-04,766600\r
2020-12-12,766600\r
2020-12-17,743100\r
2020-12-19,743100\r
2021-01-01,840800\r
2021-02-10,846700\r
2021-02-27,871300\r
2021-03-02,871300\r
2021-03-07,846900\r
2021-03-09,853500\r
2021-03-19,838700\r
2021-03-22,821400\r
2021-03-24,821400\r
2021-03-29,865200\r
2021-04-01,875400\r
2021-04-03,875400\r
2021-04-06,875400\r
2021-04-08,875400\r
2021-04-13,829700\r
2021-04-18,829700\r
2021-04-23,847000\r
2021-04-26,843600\r
2021-05-03,843600\r
2021-05-21,837200\r
2021-05-23,829200\r
2021-05-28,834100\r
2021-05-31,815000\r
2021-06-05,809300\r
2021-06-12,804600\r
2021-06-15,816100\r
2021-07-17,809900\r
2021-07-20,838300\r
2021-07-22,828200\r
2021-08-14,814900\r
2021-09-13,846300\r
2021-09-23,855100\r
2021-09-30,812800\r
2021-10-03,808500\r
2021-10-08,820100\r
2021-10-15,822400\r
2021-10-28,799200\r
2021-11-09,781100\r
2021-11-19,788600\r
2021-11-22,796700\r
2021-11-24,786600\r
2022-01-01,834100\r
2022-01-06,849000\r
2022-01-13,840400\r
2022-01-21,813600\r
2022-02-05,799400\r
2022-02-12,805700\r
2022-02-17,856600\r
2022-02-25,859100\r
2022-02-27,848600\r
2022-03-07,834800\r
2022-03-09,857300\r
2022-03-14,827100\r
2022-03-17,827100\r
2022-03-22,825900\r
2022-03-24,822400\r
2022-03-27,832000\r
2022-03-29,832000\r
2022-04-03,844400\r
2022-04-16,831700\r
2022-04-21,833500\r
2022-04-26,833500\r
2022-05-01,847700\r
2022-05-06,847700\r
2022-05-08,849800\r
2022-05-13,797700\r
2022-05-28,818400\r
2022-05-31,818400\r
2022-06-02,815300\r
2022-06-12,806300\r
2022-06-15,816800\r
2022-06-17,803100\r
2022-06-27,793200\r
2022-07-10,810300\r
2022-07-12,804600\r
2022-07-15,809400\r
2022-07-17,810200\r
2022-07-20,807100\r
2022-07-27,770500\r
2022-07-30,793700\r
2022-08-04,793700\r
2022-08-06,775400\r
2022-08-09,783400\r
2022-08-11,781100\r
2022-09-18,732000\r
2022-09-25,732000\r
2022-11-02,704500\r
2022-11-04,722800\r
2022-11-19,746000\r
2022-11-22,750600\r
2022-11-29,739100\r
2022-12-07,738700\r
2022-12-09,758500\r
2022-12-27,830300\r
2022-12-29,848900\r
2023-01-08,832500\r
2023-01-11,841600\r
2023-01-13,830400\r
2023-01-16,830400\r
2023-01-18,830400\r
2023-01-21,833200\r
2023-01-23,850300\r
2023-02-07,836100\r
2023-02-12,836100\r
2023-02-15,846100\r
2023-02-27,806500\r
2023-03-02,847100\r
2023-03-04,847100\r
2023-05-26,849900\r
2023-05-28,833100\r
2023-05-31,857700\r
2023-06-02,829500\r
2023-06-05,849900\r
2023-06-07,837500\r
2023-06-12,836500\r
2023-06-15,837800\r
2023-06-22,861900\r
2023-06-25,833300\r
2023-07-07,803100\r
2023-07-15,803100\r
2023-08-21,801300\r
2023-09-03,807300\r
2023-09-05,807300\r
2023-09-15,784400\r
2023-09-18,784400\r
2023-09-30,772900\r
2023-10-03,755100\r
2023-10-08,761600\r
2023-10-10,767900\r
2023-11-07,813300\r
2023-11-17,801800\r
2023-12-02,790600\r
`;export{r as default};
