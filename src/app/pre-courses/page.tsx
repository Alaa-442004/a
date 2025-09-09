"use client";

import { Button } from "@/components/ui/button";
import { Share2, Bookmark, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function CoursePage() {
  const activityData = [
    { name: "Planning", value: 12, percentage: 30, color: "#33A1E0" },
    { name: "Execution", value: 20, percentage: 50, color: "#F59E0B" },
    { name: "Monitoring", value: 8, percentage: 20, color: "#10B981" },
  ];

  const strokeWidth = 20;
  const radius = 100;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const chartElements = (() => {
    let cumulativePercentage = 0;
    return activityData.map((item, index) => {
      const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
      const strokeDashoffset = (-cumulativePercentage * circumference) / 100;
      cumulativePercentage += item.percentage;
      return (
        <circle
          key={index}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={normalizedRadius}
          fill="transparent"
          stroke={item.color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-in-out"
        />
      );
    });
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white px-6 py-4" style={{ backgroundColor: "#154D71" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
            <span className="font-semibold text-lg">Acbridge College</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <a href="#" className="hover:text-blue-200 transition-colors">My Exams</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Courses</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Certificates</a>
          </nav>

          <Avatar className="w-10 h-10">
            <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" />
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-screen-xl mx-auto px-6 py-12">
        {/* Course Header */}
        <div className="pb-8 border-b border-gray-300">
          <div className="flex items-center justify-between">
            {/* Left: Title + Meta info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Advanced PMP Exam Preparation</h1>
              <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
                <span>Beginner</span>
                <span>•</span>
                <span>4 hours</span>
                <span>•</span>
                <span>Earn Certification</span>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-2">
              <Link href="/courses-overview">
              <Button className="bg-[#154D71] hover:bg-[#0f3b57] text-white text-base px-6 py-2">Start Lesson</Button>
              </Link>
              <Button variant="outline" size="icon" aria-label="Bookmark"><Bookmark className="w-5 h-5" /></Button>
              <Button variant="outline" size="icon" aria-label="Share"><Share2 className="w-5 h-5" /></Button>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-black font-medium text-[28px] leading-[120%] tracking-[0%] font-inter mt-10 mb-12">
          Get fully prepared for the <span className="text-[#1C6EA4] font-bold">Project Management Professional (PMP®) </span>exam with advanced strategies, practice questions, and real-world case studies. This comprehensive course is designed to deepen your understanding of PMI&apos;s domains — People, Process, and Business Environment — while equipping you with the latest techniques. Through short, focused modules, you&apos;ll review complex project management concepts, tackle situational questions with confidence, and practice under exam-like conditions. Designed for professionals aiming to achieve certification, this course provides the tools and confidence needed to pass the PMP exam on your first attempt.
        </p>

        {/* What You'll Learn Section */}
        <section className="mt-16 max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#1C6EA4]">What You&apos;ll Learn</h2>
              <ul className="space-y-4">
                {[
                  "Master advanced PMP® exam strategies",
                  "Solve complex situational project management questions",
                  "Apply PMI’s People, Process, and Business Environment domains",
                  "Build confidence with practice under real exam conditions",
                  "Gain practical tools to pass the PMP exam on your first attempt",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="text-black font-medium text-[28px] leading-[120%] tracking-[0%] font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src="/f5c55bd4524d927b076dff8f7d3f3636f3db9d50.png"
                alt="PMP Exam Preparation"
                width={459}
                height={336.6}
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Activity Chart Section */}
        <section className="mt-16 max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Chart + Legend */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <svg
                  width={2 * (radius + strokeWidth / 2)}
                  height={2 * (radius + strokeWidth / 2)}
                  className="transform -rotate-90"
                >
                  {chartElements}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">Activity</span>
                </div>
              </div>

              {/* Legend/List */}
              <div className="flex flex-col gap-2 mt-4">
                {activityData.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 w-[353px] h-[46px] border-b border-[#E5E5E5] pb-[9px]"
                  >
                    <div className="w-[13.6px] h-[13.6px] rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="font-roboto font-normal text-[18px] text-[#404040] flex-1">{item.name}</span>
                    <span className="font-roboto font-medium text-[18px] text-[#0A0A0A] text-right flex-1">{item.value}</span>
                    <span className="font-roboto font-medium text-[18px] text-[#0A0A0A] text-right flex-1">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-4xl font-bold text-[#1C6EA4]">By the End of This Course</h2>
              <p className="text-black font-medium text-[28px] leading-[120%] tracking-[0%] font-inter">
                You’ll be confident in your ability to approach the PMP exam with advanced knowledge, practical techniques, and a clear strategy for success.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#154D71" }} className="text-white flex justify-center">
        <div
          className="flex justify-between"
          style={{
            width: "1440px",
            height: "380px",
            opacity: 1,
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "21.58px",
            lineHeight: "150%",
            letterSpacing: "-1.1%",
            padding: "50px 40px",
            boxSizing: "border-box",
            alignItems: "flex-start",
          }}
        >
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-10 h-10" />
              <span className="font-semibold text-white text-xl">Acbridge College</span>
            </div>
            <h3 className="font-semibold text-white text-lg">About Us</h3>
            <ul className="space-y-2 text-white text-base">
              <li>Who we are</li>
              <li>Our story</li>
              <li>Privacy policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white text-lg">Follow us</h3>
            <div className="flex gap-4 mt-2">
              <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white text-lg">Useful Links</h3>
                        <ul className="space-y-2 text-white text-base mt-2">
              <li>Courses</li>
              <li>FAQs</li>
              <li>Certificates</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

