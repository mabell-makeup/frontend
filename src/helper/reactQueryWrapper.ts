import {
    useQuery,
    QueryKey,
    UseQueryOptions,
    UseQueryResult,
    useMutation,
    MutationKey,
    UseMutationOptions,
    UseMutationResult,
} from "react-query"

type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
type RequestOptions = {
  method?: Method;
  params?: Object;
};
type AdditionalQueryOptions = {
  path?: string;
  requestOptions?: RequestOptions;
  queryKey?: string;
  deps?: QueryKey;
  queryOptions?: Omit<UseQueryOptions, "QueryKey" | "QueryFunction">;
};
type AdditionalMutationOptions = {
  path?: string;
  requestOptions?: RequestOptions;
  mutationKey?: string;
  deps?: MutationKey;
  mutationOptions?: Omit<
    UseMutationOptions<unknown, unknown, Object | undefined, unknown>,
    "mutationFn" | "mutationKey"
  >;
};

/**
 * React Queryを用いて、取得系APIレスポンスの即時利用/キャッシュを行うためのヘルパー関数です。
 */
export const useQueryWrapper = <T>(
    path = "/",
    { queryKey, deps, requestOptions, queryOptions }: AdditionalQueryOptions
) => {
    const k = Array.isArray(deps) ? [queryKey, ...deps] : [queryKey]
    return useQuery(
        k,
        async () => {
            const res = await apiRequest<T>(path, requestOptions)
            return res
        },
        queryOptions
    ) as UseQueryResult<T>
}

/**
 * React Queryを用いて、更新系APIレスポンスの即時利用を行うためのヘルパー関数です。
 */
export const useMutationWrapper = <T>(
    path = "/",
    {
        mutationKey,
        deps,
        requestOptions,
        mutationOptions,
    }: AdditionalMutationOptions
) => {
    const k = Array.isArray(deps) ? [mutationKey, ...deps] : [mutationKey]
    return useMutation(
        k,
        async (params?: Object) => {
            const res = await apiRequest<T>(path, {
                method: "POST",
                ...requestOptions,
                params,
            })
            return res
        },
        mutationOptions
    ) as UseMutationResult<T>
}

/**
 * paramsは、GETの場合はクエリパラメータに、それ以外はリクエストボディに入ります。
 */
const apiRequest = async <T>(
    path = "/",
    { method = "GET", params = {} }: RequestOptions = {}
): Promise<T> => {
    const regex = /^http(s)?:\/\//g
    const endpoint = path.match(regex)
        ? path
        : createEndpoint(path, { method, params })
    return fetch(endpoint, {
        method,
        body: method !== "GET" ? JSON.stringify(params) : undefined,
    })
        .then((res) => res.json())
        .then((data) => data)
}

const createEndpoint = (
    path = "/",
    { method = "GET", params = {} }: RequestOptions = {}
) => {
    const endpoint = new URL(process.env.API_ROOT + path)
    if (method === "GET")
        Object.entries(params).forEach(([key, value]) =>
            endpoint.searchParams.append(key, value)
        )
    return endpoint.toString()
}
