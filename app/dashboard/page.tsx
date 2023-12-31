"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useSession } from "next-auth/react"

import { Skeleton } from "@/components/ui/skeleton"

export default function Dashboard() {
  const [userData, setuserData] = useState<any>()
  const { data: session } = useSession()

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYwZjg4NWYwZDhjM2M5YjlkM2NmNWYiLCJlbWFpbCI6InJhamliQHdvcmRzcGhlcmUuY29tIiwibGFuZ3VhZ2VzIjpbXSwiYWNjb3VudFR5cGUiOiJ1c2VyIiwiYWNjb3VudExldmVsIjoiYWRtaW4iLCJ2ZXJpZmllZCI6ZmFsc2UsIm9ubGluZSI6ZmFsc2UsImZvbGxvd2VycyI6MSwicG9zdENvdW50IjowLCJsaWtlZFZpZGVvcyI6MCwibGlrZXMiOjAsImNyZWF0ZWRBdCI6IjIwMjMtMDgtMzFUMjA6MzE6MDEuMzgzWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDktMDRUMjI6Mjg6MjguOTAwWiIsIl9fdiI6MCwiaWF0IjoxNjkzODY2NTA4fQ.Yh6Xu0SiRqzHVryX1BKD1ShiTVmxK0Q-a3ZpGy1al7A"

  useEffect(() => {
    fetch("https://kwiks-data.com/user", {
      method: "GET",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setuserData(data.data)
        return
      })
  }, [session])

  if (!userData) {
    return (
      <>
        <div className="video-list-wrapper">
          <div className="flex flex-col justify-start mt-10">
            <Skeleton className="h-12 w-12 rounded-full mb-2" />
            <div>
              <Skeleton className="h-4 w-[250px] mb-2" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-4/12 mr-2">
              <Skeleton className="h-28 w-[200px]" />
            </div>
            <div className="w-4/12 mr-2">
              <Skeleton className="h-28 w-[200px]" />
            </div>
            <div className="w-4/12 mr-2">
              <Skeleton className="h-28 w-[200px]" />
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="video-list-wrapper w-8/12 max-lg:w-full">
        <div className="flex justify-between items-center max-lg:flex-col">
          <h1 className="m-5">
            {userData._id}
            {userData.avatar != undefined && (
              <img
                className="w-14 h-14 rounded-full mb-4"
                src={userData && userData.avatar}
              />
            )}
            {userData && userData.avatar == undefined && (
              <img className="w-14 h-14 rounded-full mb-4" src="user.png" />
            )}
            Hello, {userData && userData.name} 👋
          </h1>
          {userData && userData.accountLevel == "admin" && (
            <Link className="getBtn font-semibold" href="/moderation">
              Video Moderation
            </Link>
          )}
        </div>
        <div className="flex items-center justify-end mb-5 max-lg:justify-center">
          <div className="bg-gray-100 py-2 px-5 m-2 rounded-lg">
            <Link href="/message">
              <Mail />
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="text-center bg-gray-100 w-4/12 m-3 p-5 rounded-lg">
            <h1 className="text-4xl">{userData && userData.postCount}</h1>
            <h4 className="font-semibold max-md:text-[10px]">Post Count</h4>
          </div>
          <div className="text-center bg-gray-100 w-4/12 m-3 p-5 rounded-lg">
            <h1 className="text-4xl">{userData && userData.likes}</h1>
            <h4 className="font-semibold max-md:text-[10px]">Likes</h4>
          </div>
          <div className="text-center bg-gray-100 w-4/12 m-3 p-5 rounded-lg">
            <h1 className="text-4xl">{userData && userData.followers}</h1>
            <h4 className="font-semibold max-md:text-[10px]">followers</h4>
          </div>
        </div>
      </div>
    </>
  )
}
