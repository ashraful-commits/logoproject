"use client"

import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { useToast } from "@/components/ui/use-toast"
import IsLoading from "@/components/IsLoading"
import Player from "@/components/Player"

import Decline from "../Buttons/Decline"
import Prioritize from "../Buttons/Prioritize"
import Suspend from "../Buttons/Suspend"
import Unsuspend2 from "../Buttons/Unsuspend2"
import SideMenu from "../SideMenu"

export default function Moderation() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setuserData] = useState()
  const { data: session } = useSession()

  const [Reason, setReason] = useState("null")
  const [UntillDate, setUntillDate] = useState()
  const [declineReason, setdeclineReason] = useState()

  const fetchData = async () => {
    fetch("https://kwiks-data.com/video/moderation?skip=0&limit=10", {
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
        setIsLoading(false)
        setuserData(data.data)
        console.log(data)
        return
      })
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
    return <IsLoading />
  }

  return (
    <>
      <div className="max-md:pl-0 max-md:pr-0 container flex relative justify-center lg:justify-between mt-16">
        <SideMenu />
        <div className="lg:w-9/12 w-full max-md:w-full">
          <section className="max-md:pl-5 max-md:pr-5 container grid items-center lg:gap-6 pb-8">
            <div className="flex max-w-[980px] flex-col items-start gap-2 bg-white text-black">
              {userData &&
                // @ts-ignore
                userData.map((videoList, index) => (
                  <div
                    key={index}
                    className="mb-[20px] relative max-lg:flex max-lg:justify-center w-full"
                  >
                    {videoList.status == "deprioritized" && (
                      <div className="flex justify-between w-8/12 border-b pb-10 mt-5 max-lg:w-10/12 max-md:w-full">
                        <div className="flex items-start">
                          <div
                            onClick={() => checkLogin(videoList.uploader._id)}
                            className="cursor-pointer"
                          >
                            <img
                              className="w-[46px] h-[46px] rounded-full"
                              src={videoList.uploader?.avatar}
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
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
                            <div className="caaption mt-4">
                              <p>{videoList.caption}</p>
                            </div>
                            <div className="mt-5 flex items-end max-md:flex-col max-md:items-center">
                              <Player src={videoList.playbackUrls["480"][0]} />
                              <div className="followBtn flex flex-col justify-center ml-5 max-md:mt-5">
                                {/* Prioritize button */}
                                <Prioritize videoList={videoList._id} />

                                {/* Decline button */}
                                <Decline videoList={videoList} />

                                {/* Suspend button */}
                                <Suspend videoList={videoList} />

                                {/* Unsuspend button */}
                                <Unsuspend2 videoList={videoList} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
