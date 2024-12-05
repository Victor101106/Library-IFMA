export type Result<E, S> = Error<E, S> | Success<E, S>

export class Error<E, S> {

    constructor(readonly value: E) {}

    isError(): this is Error<E, S> {
        return true
    }

    isSuccess(): this is Success<E, S> {
        return false
    }

}

export class Success<E, S> {

    constructor(readonly value: S) {}

    isError (): this is Error<E, S> {
        return false
    }

    isSuccess (): this is Success<E, S> {
        return true
    }

}

export function error<E, S>(E: E): Result<E, S> {
    return new Error<E, S>(E)
}

export function success<E, S>(S: S): Result<E, S> {
    return new Success<E, S>(S)
}