"use client"

import { PageLoading } from "@/components/page-loading";
import { useGetSession } from "@/hooks/use-get-sessions"

export default function Dashboard() {
  const { data, isPending } = useGetSession()

  if (isPending){
    return <PageLoading />
  }

  if (data) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <h1> Hello world! </h1>
      </div>
    );
  }
}
