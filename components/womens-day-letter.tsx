"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { FallingFlowers } from "./falling-flowers"
import WomensDayInvitationCard from "./card"

export function WomensDayLetter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative max-w-3xl my-16 w-full mx-auto">
      {/* Flower Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
            filter: "brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />

        {/* Falling Flowers */}
        <FallingFlowers />
      </div>

      {/* Letter Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20">
              <Image src="/placeholder-logo.png" alt="qq" fill className="object-contain" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Baas team</h2>
          </div>
          <div className="text-sm text-gray-500">March 8th, 2025</div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">Happy International Women&apos;s Day</h1>

        <div className="space-y-4 text-gray-700">
          <p>Gửi những nàng thơ kiều diễm team Baas,</p>

          <p>
            Như những đóa sen vươn mình giữa bùn lầy, các chị em đã tỏa hương thơm ngát giữa những ngày làm việc tất bật. Đôi mắt tinh anh của các chị em soi rọi mọi khó khăn, đôi tay khéo léo hóa giải mọi bài toán phức tạp, và nụ cười rạng rỡ xua tan mọi mệt mỏi của cuộc sống thường nhật.
          </p>

          <p>
            Vẻ đẹp của chị em không chỉ nằm ở diện mạo mà còn ở sự kiên cường, dịu dàng và tài năng phi thường. Như Lưu Quang Vũ từng viết: "Đàn bà đẹp nhất khi họ mạnh mẽ", các chị em đã làm nên điều kỳ diệu mỗi ngày bằng sức mạnh nội tâm và trí tuệ sắc bén.
          </p>

          <p>
            Mong chị em hãy điểm tô thêm cho buổi gặp mặt bằng ánh mắt long lanh và tiếng cười ngân vang như chuông bạc!
          </p>

          <div className="pt-4">
            <p>Trân trọng và ngưỡng mộ,</p>
            <p className="font-semibold">Baas Team</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <Heart className="text-pink-500 h-8 w-8" fill="#ec4899" />
          </motion.div>
        </div>

        <WomensDayInvitationCard />
      </motion.div>
    </div>
  )
}

