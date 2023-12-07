"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { Skeleton } from "@/components/ui/skeleton"
import Player from "@/components/Player"

import FollowButton from "./FollowButton"

export default function VideoList() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMuteUnmute = () => {
    setIsMuted(!isMuted)
  }

  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
 
  const [error, setError] = useState(null)
  const { data: session } = useSession()

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://kwiks-data.com/video?type=popular&limit=20",
        { cache: "force-cache" }
      )
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      const shuffledData = shuffleArray(data.data)
      setData(shuffledData)

      setIsLoading(false)
    } catch (error: any) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

  useEffect(() => {
    fetchData()
  }, [session])

  const checkLogin = (id) => {
    const url = "/user/" + id
    if (session?.user?.token) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      if (newWindow) newWindow.opener = null
    } else {
    }
  }

  if (isLoading) {
    return (
      <>
        <div className="flex justify-between items-center w-[70%] mt-5">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
        <div className="flex justify-center w-[70%] mt-5">
          <Skeleton className="h-[480px] w-[420px]" />
        </div>
        <div className="flex justify-between items-center w-[70%] mt-10">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
        <div className="flex justify-center w-[70%] mt-5">
          <Skeleton className="h-[480px] w-[420px]" />
        </div>
      </>
    )
  }
  return (
    <div>
      
      {data &&
        data.map((videoList: any, index: any) => (
          <div
            key={index}
            className="mb-[20px] relative max-lg:flex max-lg:justify-center"
          >
            <div className="flex justify-between border-b pb-10 mt-5 max-lg:w-10/12 max-md:w-full">
              <div className="flex items-start">
                <div
                  onClick={() => checkLogin(videoList.uploader._id)}
                  className="cursor-pointer"
                >
                  <img
                    className="w-[46px] min-w-[46px] flex h-[46px] rounded-full shrink-0"
                    src={videoList.uploader?.avatar}
                    alt=""
                  />
                </div>
                <div className="ml-2">
                  <div className="flex">
                    <div>
                      <h4
                        className="font-bold cursor-pointer"
                        onClick={() => checkLogin(videoList.uploader._id)}
                      >
                        {videoList.uploader?.name}
                      </h4>
                      <h6
                        className="text-[12px] text-gray-300 cursor-pointer"
                        onClick={() => checkLogin(videoList.uploader._id)}
                      >
                        @{videoList.uploader?.username}
                      </h6>
                      <div className="caaption mt-4 w-[300px]">
                        <p>{videoList.caption}</p>
                      </div>
                    </div>
                    <div className="followBtn max-sm:hidden">
                      <FollowButton uploaderId={videoList.uploader._id} />
                    </div>
                  </div>
                  <div className="mt-5 flex items-end">
                    <Player
                      src={videoList.playbackUrls["480"][0]}
                      poster={videoList.thumbnailUrl}
                    />
                    <div className="reaction-wrap flex items-end pl-5">
                      <ul className="[&>li]:pt-5 [&>li]:text-[11px] [&>li]:text-center">
                        <li>
                          <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                            <img src="./loveIcon.svg" alt="" />
                            <span>{videoList.likes.length}</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                            <img src="./commentIcon.svg" alt="" />
                            <span>{videoList.comments}</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://apps.apple.com/us/app/kwiks/id6448708199">
                            <img src="./shareIcon.svg" alt="" />
                            <span>11</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
