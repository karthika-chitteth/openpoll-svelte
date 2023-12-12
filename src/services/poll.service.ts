import type { TResponse } from '../types/api.types';
import type {
  CreatePollResponse,
  PollQuestionResponse,
  PollVoteResponse,
  PublishPollResponse,
  TPoll,
  TPollQuestion,
  VoteResponse,
} from '../types/poll.type';
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

  export const listPoll = async (): Promise<TResponse<CreatePollResponse>> => {
    const response: TResponse<CreatePollResponse> = await ApiInstance.get(`/polls`).then(
      (res) => res.data
    );
    return response;
  };

  export const deletePoll = async (id: number): Promise<TResponse<CreatePollResponse>> => {
    const response: TResponse<CreatePollResponse> = await ApiInstance.delete(`/Poll/` + id).then(
      (res) => res.data
    );
    return response;
  };

  export const activatePoll = async (id: number): Promise<TResponse<PublishPollResponse>> => {
    const response: TResponse<PublishPollResponse> = await ApiInstance.post(
      `/Poll/` + id + '/Publish'
    ).then((res) => res.data);
    return response;
  };
  export const deactivatePoll = async (id: number): Promise<TResponse<PublishPollResponse>> => {
    const response: TResponse<PublishPollResponse> = await ApiInstance.post(
      `/Poll/` + id + '/unPublish'
    ).then((res) => res.data);
    return response;
  };
  export const getQuestion = async (id: string): Promise<TResponse<PollQuestionResponse>> => {
    const response: TResponse<PollQuestionResponse> = await ApiInstance.get(
      `/Poll/GetPublishedPoll/` + id
    ).then((res) => res.data);
    return response;
  };
  // export const vote = async (payload: VotePayload): Promise<TResponse<VoteResponse>> => {
  //   const response: TResponse<VoteResponse> = await ApiInstance.post(`/vote`, payload).then(
  //     (res) => res.data
  //   );
  //   return response;
  // };
  export const pollResults = async (id: number): Promise<TResponse<PollVoteResponse>> => {
    const response: TResponse<PollVoteResponse> = await ApiInstance.get(`/Vote/` + id).then(
      (res) => res.data
    );
    return response;
  };
}
