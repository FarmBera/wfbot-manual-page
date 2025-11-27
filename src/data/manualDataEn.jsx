import React from "react";
import { Info, Zap, Settings, HelpCircle, FileText,Globe } from "lucide-react";
import { COMMON } from "../constants/common";

export const manualDataEn = [
  {
    id: "intro",
    title: "Not Supported Yet",
    icon: <Info size={18} />,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">We're Sorry.</h1>
        
        <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                    <Globe size={50} className="text-indigo-400" />
                </div>
            </div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-2 py-5">Translation in Progress</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The <strong>English Version</strong> of the {COMMON.name} manual is currently under development.<br/>
              We are working hard to provide high-quality documentation for our global users.
            </p>
            <p className="text-sm text-gray-500">
                Please refer to the Korean version for the time being.
            </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <p className="text-sm text-blue-700">
            <strong>Note:</strong> This document system is running on version {COMMON.version}.
          </p>
        </div>
      </div>
    ),
  },
];

const manualDataEn_test = [
  {
    id: "intro",
    title: "1. Introduction",
    icon: <Info size={18} />,
    content: (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to the {COMMON.name} Guide
        </h1>
        <p className="text-gray-600 leading-relaxed">
          This document covers everything from installation to advanced features
          of <strong>{COMMON.name}</strong>. Use the table of contents on the
          left to navigate quickly.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-sm text-blue-700">
            <strong>Note:</strong> This document is based on the latest version
            ({COMMON.version}).
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "installation",
    title: "2. Installation & Start",
    icon: <Zap size={18} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">How to Install</h2>
        <p className="text-gray-600">
          Check system requirements and follow the steps below.
        </p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm my-4">
          npm install superapp-core
          <br />
          npm start
        </div>

        <h3 className="text-xl font-medium text-gray-800 mt-6">
          Initial Setup
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Run the app and follow the setup wizard.</li>
          <li>Enter your license key to activate the product.</li>
          <li>Create a user profile.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "features",
    title: "3. Key Features",
    icon: <Settings size={18} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Explore Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              Real-time Sync
            </h4>
            <p className="text-sm text-gray-500">
              All data syncs with the cloud in real-time, accessible from
              anywhere.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              Strong Security
            </h4>
            <p className="text-sm text-gray-500">
              End-to-end encryption keeps your data safe.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              AI Analysis
            </h4>
            <p className="text-sm text-gray-500">
              Built-in AI engine analyzes usage patterns to suggest optimized
              workflows.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              Plugin System
            </h4>
            <p className="text-sm text-gray-500">
              Extend functionality infinitely with various third-party plugins.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "troubleshooting",
    title: "4. Troubleshooting",
    icon: <HelpCircle size={18} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">FAQ</h2>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-900 mb-2">Q. Cannot login.</h4>
            <p className="text-gray-600">
              A. Check your network connection and request a password reset
              email.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Q. How to backup data?
            </h4>
            <p className="text-gray-600">
              A. Go to Settings &gt; Data Management &gt; Export Backup.
            </p>
          </div>
          <div className="pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Q. Refund Policy?
            </h4>
            <p className="text-gray-600">
              A. Full refund is available within 14 days of purchase without
              conditions.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "legal",
    title: "5. Legal",
    icon: <FileText size={18} />,
    content: (
      <div className="space-y-4 text-sm text-gray-500">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Terms & Privacy
        </h2>
        <p>
          Copyright belongs to {COMMON.company}. Unauthorized reproduction and
          distribution are prohibited by law. By installing this software, you
          agree to the EULA.
        </p>
      </div>
    ),
  },
];
