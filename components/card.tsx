"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface WomensDayInvitationProps {
    title?: string
    date?: string
    time?: string
    location?: string
    address?: string
    message?: string
}

export default function WomensDayInvitationCard({
    title = "Thư mời ngày Quốc tế Phụ nữ",
    date = "7, Tháng 3, 2025",
    time = "11:30 AM",
    location = "5b Ô Quan Chưởng",
    message = "Sự hiện diện của bạn là niềm vinh dự của chúng tôi. Hãy cùng chia sẻ niềm vui và sự tự hào trong ngày quan trọng này.",
}: WomensDayInvitationProps) {
    const [isAttending, setIsAttending] = useState<boolean | null>(null)

    return (
        <Card className="w-full max-w-md mx-auto border-2 mt-2 border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 h-16 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-500 mr-2" />
                <span className="text-xl font-medium text-purple-700">Women's Day 2025</span>
            </div>

            <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-purple-800 pb-2">{title}</CardTitle>
                <CardDescription className="text-base py-2">
                    

          Để tôn vinh những đóa hồng kiêu hãnh, kính mời chị em đến và cùng nhau nâng ly bia mát lạnh và thả hồn theo những câu chuyện bay bổng.


                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span>{date}</span>
                </div>

                <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span>{time}</span>
                </div>

                <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div className="flex flex-col">
                        <span className="font-medium">{location}</span>
                    </div>
                </div>

                <Separator className="bg-purple-100" />

                <div>
                    <p className="text-center">{message}</p>
                </div>


            </CardContent>
        </Card>
    )
}

