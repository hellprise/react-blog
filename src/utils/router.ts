export const serializeSearchParams = (params: Record<string, string>) => {
    const stringParams = new URLSearchParams(params);

    return stringParams.toString();
};
