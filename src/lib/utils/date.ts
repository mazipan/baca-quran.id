import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import 'dayjs/locale/id'

dayjs.locale('id')
dayjs.extend(relativeTime);
dayjs.extend(duration);

export const getDayjs = () => {
  return dayjs();
};

export const getDayjsFormatted = (dateString: string, format: string) => {
  return dayjs(dateString, format)
};

export const getDayInMonth = (dateString: string) => {
  return dayjs(dateString).daysInMonth()
};

export const getMonthName = () => {
  return dayjs().format('MMMM')
};

export const getCurrentDate = () => {
  return dayjs().toDate().getDate();
};

export const formatDate = (date: string, format: string) => {
  return dayjs(date).format(format);
};

export const formatYYYYMMDD = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const getMinuteDuration = (diffTime: number) => {
  return dayjs.duration(diffTime, "minutes").humanize(true);
};
