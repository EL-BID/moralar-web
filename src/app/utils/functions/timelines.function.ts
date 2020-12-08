import { TIMELINE_STATUS_LIST } from '../interfaces/timelines.interface';

export const timelineStatusToString = (timelineStatus: number) => {
  const timelineStatusFound = TIMELINE_STATUS_LIST.find((item: any) => item.id === timelineStatus);
  return timelineStatusFound ? timelineStatusFound.name : '-';
};