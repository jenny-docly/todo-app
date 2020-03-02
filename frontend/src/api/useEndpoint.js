import { useState, useEffect } from 'react'

/**
 * Hook for accessing an API endpoint. Returns the current state of the request in
 * a result object { data, error, loading }.
 * 
 * @param {} request - An object that represent the server request.
 */
export function useEndpoint(request) {
    const [result, setResult] = useState({
        data: null,
        error: null,
        loading: false
    })
    useEffect(() => {
        setResult({
            data: null,
            error: null,
            loading: true
        })
        fetch(request.url, {
            method: request.method,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return null
            })
            .then(data => {
                console.log("data", data)
                setResult({
                    data: data,
                    error: false,
                    loading: false
                })
            })
            .catch(error => {
                console.log("error", error)
                setResult({
                    data: null,
                    error: error,
                    loading: false
                })
            })
    }, [request.url, request.method])
    return result
}