"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Loader2, Pencil, PlusCircle } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import Player from "@/components/Player"
import CoverPhoto from "@/components/profile/CoverPhoto"
import EditProfileBtn from "@/components/profile/EditProfileBtn"
import ModerationBtn from "@/components/profile/ModerationBtn"

export default function SingleUser({ params }) {
  const { toast } = useToast()
  const userId = params.userId
  const [userData, setUserData] = useState()
  const [videoData, setVideoData] = useState()
  const [likedVideo, setlikedVideo] = useState()
  const { data: session } = useSession()

  const fetchData = async () => {
    fetch(`https://kwiks-data.com/user/${userId}`, {
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
        setUserData(data.data)
        return
      })

    fetch(`https://kwiks-data.com/video/user?_id=${userId}`, {
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
        setVideoData(data.data)
        return
      })

    fetch(`https://kwiks-data.com/video/user/liked?_id=${userId}`, {
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
        setlikedVideo(data.data)
        return
      })
  }

  useEffect(() => {
    fetchData()
  }, [session])

  const [name, setName] = useState()
  const [username, setUserName] = useState()
  const [bio, setBio] = useState()
  const [Loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://logoproject.vercel.app/user", {
        method: "POST",
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          bio,
        }),
      })

      if (res.ok) {
        const responseData = await res.json()
        console.log("profile updated!")
        setLoading(false)

        setTimeout(() => {
          window.location.reload()
        }, 3000)

        if (responseData.errors.length) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: responseData.errors,
          })
        }
        console.log(responseData.errors)
      } else {
        console.log("profile update failed!")
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem profile update failed!.",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0])
  }

  const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("avatar", avatar)

    console.log(formData)

    try {
      const res = await fetch("https://kwiks-data.com/user/avatar", {
        method: "POST",
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.token}`,
          // "Content-Type": "application/json",
        },
        body: formData,
      })

      if (res.ok) {
        console.log("profile updated!")
        setLoading(false)
        window.location.reload()
      } else {
        console.log("image upload failed!")
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem. image upload failed!.",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="container">
        <CoverPhoto />
        <div className="mt-2 ml-5 flex justify-between w-full">
          <div className="flex">
            <div className="thumb mr-5 relative">
              {userData ? (
                <>
                  {userData && userData.avatar != undefined && (
                    <img
                      className="w-[130px] rounded-full ml-10 -mt-14 z-40 border-white border-2"
                      src={userData && userData.avatar}
                    />
                  )}
                  {userData && userData.avatar == undefined && (
                    <img
                      className="w-[130px] rounded-full ml-10 -mt-14 z-40 border-white border-2"
                      src="../user.png"
                    />
                  )}
                </>
              ) : (
                <img
                  className="w-[130px] rounded-full ml-10 -mt-14 z-40 border-white border-2"
                  src="../user.png"
                />
              )}

              {userData &&
                session &&
                session?.user?.email == userData.email && (
                  <div className="cursor-pointer absolute top-10 -mt-6 right-0 inline-block bg-[#f4f4f4] p-2 rounded-full border-[#878787] border-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Pencil className="w-[18px] h-[18px]" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Upload Profile Image</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleImageSubmit}>
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Input
                              accept="image/*"
                              type="file"
                              className="mb-4"
                              onChange={handleFileChange}
                            />
                          </div>
                          <DialogFooter>
                            <Button type="submit">
                              {Loading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              )}
                              Save changes
                            </Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
            </div>
            <div className="mt-2">
              <h1 className="text-xl font-semibold">
                {userData ? <> {userData.name}</> : <p>Loading...</p>}
              </h1>
              <h4 className="text-sm  text-gray-500">
                @{userData && userData.username}
                {userData && userData.username == undefined && "username"}{" "}
                <small>{userData && userData.errors}</small>
              </h4>
              <p className="pt-2">{userData ? <> {userData.bio}</> : "..."}</p>
              <div className="mt-10 flex">
                <h4 className="text-gray-500 text-xl mr-20">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? <> {userData.postCount}</> : "..."}
                  </span>
                  Post Count
                </h4>
                <h4 className="text-gray-500 text-xl mr-20">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? <> {userData.likes}</> : "..."}
                  </span>
                  Likes
                </h4>
                <h4 className="text-gray-500 text-xl mr-20">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? <> {userData.followers}</> : "..."}
                  </span>
                  followers
                </h4>
                <h4 className="text-gray-500 text-xl">
                  <span className="mr-2 font-semibold text-black">
                    {userData ? <> {userData.following.length}</> : "..."}
                  </span>
                  following
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-start">
            <EditProfileBtn data={userData} session={session} />

            <ModerationBtn data={userData} />
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <Button className="mb-5 flex items-center">
          <PlusCircle /> <span className="ml-2">Upload Video</span>
        </Button>

        <Tabs defaultValue="posts">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="liked">Liked</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="min-h-[500px]">
            {videoData ? (
              <div className="grid grid-cols-6 mb-10">
                {videoData &&
                  videoData != null &&
                  videoData.map((videoList, index) => (
                    <>
                      <div
                        key={index}
                        className="m-2 rounded-md max-h-[367.4px] overflow-hidden flex items-center bg-black"
                      >
                        <video playsInline controls className="h-full w-full">
                          <source
                            src={videoList.playbackUrls["480"][0]}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </>
                  ))}
                {videoData.length == 0 && (
                  <div className="text-xl mt-4">No Post...</div>
                )}
              </div>
            ) : (
              <div className="text-center text-xl mt-10">Loading...</div>
            )}
          </TabsContent>
          <TabsContent value="liked" className="min-h-[500px]">
            {likedVideo ? (
              <div className="grid grid-cols-6 mb-10">
                {likedVideo &&
                  likedVideo != null &&
                  likedVideo.map((likedVideo, index) => (
                    <>
                      <div
                        key={index}
                        className="m-2 rounded-md max-h-[367.4px] overflow-hidden flex items-center bg-black"
                      >
                        <video playsInline controls className="h-full w-full">
                          <source
                            src={likedVideo.playbackUrls["480"][0]}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </>
                  ))}
                {likedVideo.length == 0 && (
                  <div className="text-xl mt-4">No Post...</div>
                )}
              </div>
            ) : (
              <div className="text-center text-xl mt-10">Loading...</div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
