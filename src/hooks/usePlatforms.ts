import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => 
  useQuery ({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: {count: platforms.length, results: platforms}
  })

export default usePlatforms;
