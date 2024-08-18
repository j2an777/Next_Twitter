"use client";

import Trend from "@/app/(afterLogin)/_component/_trend/Trend"
import { getTrends } from "@/app/(afterLogin)/_component/_trendSection/_hooks/getTrends"
import { HashTag } from "@/model/HashTag"
import { useQuery } from "@tanstack/react-query"

const ExploreSection = () => {

    const { data } = useQuery<HashTag[]>({
        queryKey: ['trends'],
        queryFn: getTrends,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });

    return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)
}

export default ExploreSection