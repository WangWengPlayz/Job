import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../custom-fetch";
export const getHealthCheckUrl = () => {
  return `/api/healthz`;
};
export const healthCheck = async (options) => {
  return customFetch(getHealthCheckUrl(), {
    ...options,
    method: "GET"
  });
};
export const getHealthCheckQueryKey = () => {
  return [`/api/healthz`];
};
export const getHealthCheckQueryOptions = (options) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getHealthCheckQueryKey();
  const queryFn = ({
    signal
  }) => healthCheck({ signal, ...requestOptions });
  return { queryKey, queryFn, ...queryOptions };
};
export function useHealthCheck(options) {
  const queryOptions = getHealthCheckQueryOptions(options);
  const query = useQuery(queryOptions);
  return { ...query, queryKey: queryOptions.queryKey };
}
