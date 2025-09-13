import {
  Search,
  Mic,
  User,
  Download,
  Eye,
  CheckCircle,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: "Time Management Strategies",
      status: "issued",
      statusText: "Issued",
      statusColor: "text-green-600",
      image: "/لقطة شاشة 2025-09-13 032243.png",
    },
    {
      id: 2,
      title: "Advanced PMP Exam Preparation",
      status: "verified",
      statusText: "Verified",
      statusColor: "text-blue-600",
      image: "/لقطة شاشة 2025-09-13 032243.png",
    },
    {
      id: 3,
      title: "Agile Methodologies",
      status: "pending",
      statusText: "Pending",
      statusColor: "text-red-500",
      image: "/لقطة شاشة 2025-09-13 032243.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header style={{ backgroundColor: "#154D71" }} className="text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/9987eb512151b450fd789b926391e339764420c7.png"
              alt="Graduation Icon"
              className="w-8 h-8"
            />
            <span
              className="font-semibold text-lg"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              Ashridge College
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/My Exams"
              className="text-gray-300 hover:text-white transition-colors"
            >
              My Exams
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link href="/Certificates" className="text-white font-medium">
              Certificates
            </Link>
          </nav>

          {/* User Avatar */}
           <Link href="/profile">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user.png" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                My Certificates
              </h1>
              <p className="text-gray-600 mt-1">Total Certificates: 3</p>
            </div>

            {/* Search Bar */}
            <div
              className="relative"
              style={{ width: "610px", maxWidth: "100%" }}
            >
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: "#1D1D1D" }}
              />
              <Mic
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-70"
                style={{ color: "#1D1D1D" }}
              />
              <Input
                placeholder="Search courses..."
                className="pl-10 pr-10 border-[#D9D9D9] rounded-full"
                style={{
                  height: "44px",
                  backgroundColor: "#D9D9D9",
                  color: "#151515",
                }}
              />
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="space-y-6">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="p-4 sm:p-6 bg-white border border-gray-200 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left Side - Certificate Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {certificate.title}
                  </h3>

                  {/* Status */}
                  <div className="flex items-center space-x-2 mb-4">
                    {certificate.status === "issued" ||
                    certificate.status === "verified" ? (
                      <CheckCircle
                        className={`h-4 w-4 ${certificate.statusColor}`}
                      />
                    ) : (
                      <Clock className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${certificate.statusColor}`}
                    >
                      {certificate.statusText}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={
                        certificate.status === "issued" ||
                        certificate.status === "verified"
                          ? "/certificate-exam"
                          : "#"
                      }
                    >
                      <Button
                        className="text-white px-6 hover:bg-opacity-80 w-full sm:w-auto"
                        style={{
                          backgroundColor:
                            certificate.status === "issued" ||
                            certificate.status === "verified"
                              ? "#154D71"
                              : "#6B7280",
                        }}
                        size="sm"
                        disabled={certificate.status === "pending"}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 bg-transparent w-full sm:w-auto"
                      size="sm"
                      disabled={certificate.status === "pending"}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download now
                    </Button>
                  </div>
                </div>

                {/* Right Side - Certificate Preview */}
                <div className="lg:ml-8 flex justify-center lg:justify-end">
                  <div className="relative">
                    {certificate.image ? (
                      <Image
                        src={certificate.image}
                        alt={`${certificate.title} Certificate`}
                        width={200}
                        height={150}
                        className="w-[200px] h-[150px] object-cover rounded-lg shadow-sm border border-gray-300"
                      />
                    ) : (
                      <div className="w-[200px] h-[150px] bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
                        <span className="text-gray-400 text-sm">
                          No preview available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#154D71] text-white mt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <img
              src="/9987eb512151b450fd789b926391e339764420c7.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <span
              className="font-semibold text-white text-xl"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              Ashridge College
            </span>
          </div>

          {/* Footer Links Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* About Us */}
            <div className="flex flex-col gap-4">
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
              <div className="flex gap-4">
                <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">Useful Links</h3>
              <ul className="space-y-2 text-white text-base">
                <li>Courses</li>
                <li>FAQs</li>
                <li>Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
