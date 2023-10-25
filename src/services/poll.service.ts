import type { TResponse } from '../types/api.types';
import type { TPoll } from '../types/poll.type';
import ApiInstance from './api.service';

export namespace PollService {
  export const getPolls = async (): Promise<TPoll[]> => {
    try {
      const res = await ApiInstance.get<TResponse<TPoll[]>>('/Polls');
      return res.data.data || []; // Return an empty array if the data is undefined
    } catch (err) {
      console.log(err);
      return []; // Return an empty array if the API call fails
    }
  };
}
