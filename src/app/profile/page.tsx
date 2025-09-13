"use client"
import React, { useState } from 'react';
import { User, Bell, Shield, HelpCircle, FileText, AlertTriangle, UserPlus, LogOut, Download, Eye } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
export default function EducationDashboard() {
  const [activeSection, setActiveSection] = useState('account');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activityData = [
    { label: 'Progress', value: 834, percentage: 11.23, color: 'bg-blue-500' },
    { label: 'Saved', value: 2956, percentage: 39.58, color: 'bg-yellow-500' },
    { label: 'Complete', value: 3476, percentage: 46.11, color: 'bg-green-500' },
    { label: 'Cancelled', value: 826, percentage: 11.42, color: 'bg-gray-400' }
  ];

  const ActivityChart = () => {
    const total = activityData.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="16"
          />
          {activityData.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const strokeDasharray = `${percentage * 5.03} 502`;
            const strokeDashoffset = -currentAngle * 5.03;
            currentAngle += percentage;

            return (
              <circle
                key={index}
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={item.color.replace('bg-', '').replace('blue-500', '#3b82f6').replace('yellow-500', '#eab308').replace('green-500', '#22c55e').replace('gray-400', '#9ca3af')}
                strokeWidth="16"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-700">Activity</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white px-4 sm:px-6 py-4" style={{ backgroundColor: "#154D71" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-semibold text-base sm:text-lg" style={{ fontFamily: 'Caveat, cursive' }}>Ashridge College</span>
          </div>


          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
             <Link href="/" className="hover:text-blue-200 transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link href="/my-exam" className="hover:text-gray-300 transition-colors text-sm lg:text-base">
              My Exams
            </Link>
            <Link href="/courses" className="hover:text-gray-300 transition-colors text-sm lg:text-base">
              Courses
            </Link>
            <Link href="/Certificates" className="hover:text-blue-200 transition-colors text-sm lg:text-base">
              Certificates
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/profile">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
                <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" />
              </Avatar>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <Link 
                href="/Home" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/my-exam" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Exams
              </Link>
              <Link 
                href="/courses" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <a 
                href="/Certificates" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Certificates
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Settings</h2>
            
            <div className="space-y-6">
              {/* Account Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Account</h3>
                <nav className="space-y-2">
                  <button 
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg ${activeSection === 'account' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveSection('account')}
                  >
                    <User size={18} />
                    <span>Edit profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <Shield size={18} />
                    <span>Security</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </button>
                </nav>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Support & About</h3>
                <nav className="space-y-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <HelpCircle size={18} />
                    <span>Help & Support</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <FileText size={18} />
                    <span>Terms and Policies</span>
                  </button>
                </nav>
              </div>

              {/* Actions Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Actions</h3>
                <nav className="space-y-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <AlertTriangle size={18} />
                    <span>Report a problem</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <UserPlus size={18} />
                    <span>Add account</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg">
                    <LogOut size={18} />
                    <span>Log out</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Profile Section */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/9b47a023caf29f113237d61170f34ad9.jpg" 
                        alt="John" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">John leo...</h3>
                    <p className="text-gray-600 mt-1">john44@gmail.com</p>
                  </div>

                  {/* Activity Chart */}
                  <div className="mt-8">
                    <ActivityChart />
                    
                    {/* Activity Legend */}
                    <div className="mt-6 space-y-3">
                      {activityData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                            <span className="text-sm text-gray-600">{item.label}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-gray-800">{item.value}</span>
                            <span className="text-sm text-gray-500">{item.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Course Progress */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Course-wise Progress</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Project Management Basics</span>
                        <span className="text-sm text-gray-800 font-medium">40/48</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">PHP Fundamentals</span>
                        <span className="text-sm text-gray-800 font-medium">6/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 text-sm font-medium mt-3">more</button>
                </div>

                {/* Quizzes Progress */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quizzes Progress</h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">3 of 5 quizzes completed</span>
                    <span className="text-sm text-gray-800 font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  
                  <button className="text-blue-600 text-sm font-medium mt-3">more</button>
                </div>

                {/* Latest Certificate */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Certificate</h3>
                  
                  <div className="flex items-center justify-center py-8">
                    <div className="w-24 h-16 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <FileText size={32} className="text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 justify-center">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-[#154D71] text-white rounded-lg text-sm hover:bg-blue-700">
                      <Eye size={16} />
                      <span>View Certificate</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-[#154D71] text-white rounded-lg text-sm hover:bg-green-700">
                      <Download size={16} />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}