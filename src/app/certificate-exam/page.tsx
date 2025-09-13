import { Button } from "@/components/ui/button"

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      {/* Certificate Container */}
      <div className="relative bg-white p-8 max-w-2xl w-full shadow-lg">
        {/* Decorative Borders */}
        <div className="absolute top-0 left-0 w-full h-3" style={{background: "linear-gradient(to right, #B1983E, #B1983E, #154D71)"}}></div>
        <div className="absolute top-0 right-0 w-3 h-64" style={{backgroundColor: "#154D71"}}></div>
        <div className="absolute bottom-0 left-0 w-64 h-3" style={{backgroundColor: "#154D71"}}></div>
        <div className="absolute bottom-0 right-0 w-full h-3" style={{background: "linear-gradient(to left, #B1983E, #B1983E, #154D71)"}}></div>
        <div className="absolute bottom-0 left-0 w-3 h-64" style={{backgroundColor: "#154D71"}}></div>

        {/* Corner Decorations */}
        <div className="absolute top-4 right-4 w-16 h-16">
          <div className="w-full h-3" style={{backgroundColor: "#B1983E"}}></div>
          <div className="w-3 h-16 absolute top-0 right-0" style={{backgroundColor: "#B1983E"}}></div>
        </div>
        <div className="absolute bottom-4 left-4 w-16 h-16">
          <div className="w-full h-3 absolute bottom-0" style={{backgroundColor: "#B1983E"}}></div>
          <div className="w-3 h-16 absolute bottom-0 left-0" style={{backgroundColor: "#B1983E"}}></div>
        </div>

        {/* Certificate Content */}
        <div className="relative z-10 pt-8 pb-8 px-4">
          {/* College Logo */}
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center border-4" style={{borderColor: "#154D71"}}>
              <img 
                src="/9987eb512151b450fd789b926391e339764420c7.png" 
                alt="Ashridge College Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* College Name */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Ashridge College</h1>

          {/* Certificate Title */}
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">Certificate of Achievement</h2>

          {/* Certificate Text */}
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">This is to certify that</p>
            <p className="text-2xl font-bold text-gray-800 mb-2">John leo</p>
            <p className="text-gray-600 mb-4">has successfully completed the</p>
            <p className="text-xl font-bold text-gray-800">Time Management Strategies Exam</p>
          </div>

          {/* Certificate Details */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-8">
            <div>
              <span className="font-semibold">Completion Date:</span> 2 of August 2025
            </div>
            <div>
              <span className="font-semibold">Certificate ID:</span> 698320
            </div>
            <div>
              <span className="font-semibold">Expiration Date:</span> 3 of August 2025
            </div>
            <div>
              <span className="font-semibold">Number Of Hours:</span> 3 Hours
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <Button style={{backgroundColor: "#154D71"}} className="hover:opacity-90 text-white px-8 py-2">Share on LinkedIn</Button>
        <Button style={{backgroundColor: "#154D71"}} className="hover:opacity-90 text-white px-8 py-2">Download</Button>
      </div>
    </div>
  )
}