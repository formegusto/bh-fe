export type Response<T> = { status: boolean } & T;

export type CommonStoreShape<T> = { error: boolean } & T;
