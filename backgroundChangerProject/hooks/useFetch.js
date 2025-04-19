import React,{ useEffect, useState } from "react";

export function useFetch (url) {

    const [news, setNews] = useState(null);

    useEffect (()=>{
        const fetchApi = async()=>{
            const data = await fetch(url).then((res)=>{
                res.json();
            }).then((info)=>{
                setNews(info);
            })
        }

        fetchApi();
    },[url]);
}