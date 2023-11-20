import type { TResponse } from '../types/api.types';
import type { TPoll, TPollQuestion } from '../types/poll.type';
import ApiInstance from './api.service';

export namespace PollService {
  export const getPolls = async (id: number): Promise<TPoll[]> => {
    try {
      const res = await ApiInstance.get<TResponse<TPoll[]>>(`/Poll/` + id);
      return res.data.data || []; // Return an empty array if the data is undefined
    } catch (err) {
      console.log(err);
      return []; // Return an empty array if the API call fails
    }
  };

  export const createPoll = async (payload: TPollQuestion): Promise<TResponse<TPoll[]>> => {
    const response: TResponse<TPoll[]> = await ApiInstance.post(`/poll`, payload).then(
      (res) => res.data
    );
    return response;
  };
  export const updatePoll = async (
    payload: TPollQuestion,
    id: number
  ): Promise<TResponse<TPoll[]>> => {
    const response: TResponse<TPoll[]> = await ApiInstance.put(`/poll` + id, payload).then(
      (res) => res.data
    );
    return response;
  };
}
