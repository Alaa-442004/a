"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mic, Camera, Monitor, GraduationCap, Check } from "lucide-react";

export default function ExamProctoringInterface() {
  const router = useRouter();
  const [permissions, setPermissions] = useState({
    microphone: true,
    camera: true,
    screenMonitoring: true,
  });

  const [agreedToRules, setAgreedToRules] = useState(false);

  const togglePermission = (permission: keyof typeof permissions) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const canStartExam =
    permissions.microphone &&
    permissions.camera &&
    permissions.screenMonitoring &&
    agreedToRules;

  const handleStartExam = () => {
    router.push('/quiz-login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-blue-100 p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-[#154D71] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-5 h-5" />
            <span className="font-medium">Ashridge College</span>
          </div>
        </div>

        {/* Spacer to center content */}
        <div className="flex-1"></div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Exam Proctoring</h1>

        <p className="text-gray-600 text-sm mb-6">
          Please complete the following steps before starting your exam
        </p>

        {/* Permission Controls */}
        <div className="space-y-4">
          {/* Microphone */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mic className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium">Microphone</span>
            </div>
            <button
              onClick={() => togglePermission("microphone")}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                permissions.microphone ? "bg-[#154D71]" : "bg-[#F5F5F5]"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  permissions.microphone ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Camera */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium">Camera</span>
            </div>
            <button
              onClick={() => togglePermission("camera")}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                permissions.camera ? "bg-[#154D71]" : "bg-[#F5F5F5]"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  permissions.camera ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Screen Monitoring */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium">Screen Monitoring</span>
            </div>
            <button
              onClick={() => togglePermission("screenMonitoring")}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                permissions.screenMonitoring ? "bg-[#154D71]" : "bg-[#F5F5F5]"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  permissions.screenMonitoring ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom spacer to center content */}
        <div className="flex-1"></div>
      </div>

      {/* Right Sidebar */}
      <div className="w-2/3 bg-white border-l border-gray-200 p-6 flex flex-col">
        {/* Spacer to center content */}
        <div className="flex-1"></div>
        <div className="h-16"></div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">Exam Rules Notice</h2>

        <div className="bg-gray-100 p-6 rounded-lg border mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">No switching tabs.</span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">No mobile phones or external help.</span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">Camera & screen must remain on.</span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">Violations may lead to disqualification.</span>
            </div>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setAgreedToRules(!agreedToRules)}
            className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
              agreedToRules
                ? "bg-[#154D71] border-[#154D71] text-white"
                : "bg-[#F5F5F5] border-gray-300 hover:border-gray-400"
            }`}
          >
            {agreedToRules && <Check className="w-3 h-3" />}
          </button>
          <span className="text-gray-600 text-sm">I agree to the exam rules</span>
        </div>

        {/* Start Exam Button */}
        <button
          onClick={handleStartExam}
          disabled={!canStartExam}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
            canStartExam
              ? "bg-[#154D71] text-white hover:bg-[#0f3a5a]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Start Exam
        </button>

        {/* Bottom spacer to center content */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
