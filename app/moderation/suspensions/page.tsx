"use client"

import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { useToast } from "@/components/ui/use-toast"
import IsLoading from "@/components/IsLoading"
import Player from "@/components/Player"
import Userinfo from "@/components/Userinfo"

import Decline from "../Buttons/Decline"
import Prioritize from "../Buttons/Prioritize"
import Suspend from "../Buttons/Suspend"
import Unsuspend from "../Buttons/Unsuspend"
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
    fetch("https://kwiks-data.com/user/suspended?skip=0&limit=10", {
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
        // console.log(data)
        return
      })
  }

  useEffect(() => {
    fetchData()
  }, [session])

  const handleClick = (vidId: any) => {
    const vid_id = vidId
    fetch("https://kwiks-data.com/video/moderation/approve", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: vid_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("approve", data)
        toast({
          variant: "green",
          title: "Post Approved!",
        })
        window.location.reload()
        return
      })
  }

  const handlesuspendClick = (vidId: any, status: any) => {
    if (UntillDate) {
      const isoDate = new Date(`${UntillDate}T00:00:00`).toISOString()
      console.log(isoDate)
    }

    const vid_id = vidId
    fetch("https://kwiks-data.com/user/account-status", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        reason: Reason,
        suspendUntil: UntillDate,
        _id: vid_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("approve", data)
        toast({
          variant: "green",
          title: `user ${status}`,
        })
        window.location.reload()
        return
      })
  }

  const handleDecline = (videoId, reason) => {
    const vid_id = videoId
    const declineReason = reason
    fetch("https://kwiks-data.com/video/moderation/deny", {
      method: "POST",
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.token}`,
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reason: declineReason,
        _id: vid_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          variant: "green",
          title: `video declined!`,
        })
        window.location.reload()
        return
      })
  }

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
        <div className="lg:w-9/12 w-full max-md:w-full mt-5">
          <section className="max-md:pl-5 max-md:pr-5 container grid items-center lg:gap-6 pb-8">
            <div className="flex max-w-[980px] flex-col items-start gap-2 bg-white text-black">
              {userData &&
                // @ts-ignore
                userData.map((videoList, index) => (
                  <div
                    key={index}
                    className="mb-[20px] relative max-lg:flex max-lg:justify-center flex justify-between w-[500px] items-center"
                  >
                    <Userinfo data={videoList} />
                    <Unsuspend data={videoList._id} />
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
