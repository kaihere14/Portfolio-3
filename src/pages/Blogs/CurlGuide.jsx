import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import Navbar from "../../components/Navbar";
import {
  Calendar,
  Clock,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const CurlGuide = () => {
  const { darkMode, setDarkMode, theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen ${theme.mainBg} ${theme.text} font-sans ${theme.selection} transition-colors duration-300`}
    >
      <Navbar theme={theme} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-32 relative z-10">
        {/* Meta Header */}
        <header className="mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-6 ${darkMode
              ? "bg-neutral-800 border border-neutral-700 text-neutral-400"
              : "bg-neutral-200 border border-neutral-300 text-neutral-600"
              }`}
          >
            Developer Tools
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight ${darkMode ? "text-white" : "text-neutral-900"
              }`}
          >
            What is cURL and How to Use It
          </h1>
          <div
            className={`flex flex-wrap gap-6 text-sm font-medium ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={1.5} /> January 18, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} strokeWidth={1.5} /> 6 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div
          className={`w-full  rounded-2xl overflow-hidden mb-16 border ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
        >
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2y8c8YOxNhSdrtc2KdVJh2_e1xO0rvUsNdu2343oCbFxi-Z8r"
            alt="cURL Command Line Tool"
            className="w-full h-full object-cover"
          />
        </div>

        <article
          className={`space-y-16 ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}
        >
          {/* Section 1: Intro */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              What is cURL (in very simple terms)
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                cURL is a very fundamental tool for communicating with a server.
                It stands for <strong>Client URL</strong> and it is a command
                line tool that basically lets you request and also send the data
                you want directly from the command line.
              </p>
              <p>
                cURL supports almost every type of protocol including HTTP and
                HTTPS. Essentially, curl prints the web response in the
                terminal.
              </p>
              <div
                className={`p-5 rounded-xl border ${darkMode
                  ? "bg-neutral-900/50 border-neutral-800 text-neutral-200"
                  : "bg-neutral-100 border-neutral-200 text-neutral-800"
                  }`}
              >
                <strong>In this article we will have a deep dive into:</strong>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>• Why programmers need cURL</li>
                  <li>• Making your first request using cURL</li>
                  <li>• Understanding request and response</li>
                  <li>• Using cURL to talk to APIs</li>
                  <li>• Common mistakes beginners make with cURL</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Why programmers need cURL */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Why programmers need cURL
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                Before using cURL, we should understand what was the need of
                cURL or what pain point cURL solved.
              </p>
              <p>
                If you are a developer and you want to test any REST API—what is
                the response type, how the response is formatted, are headers,
                auth, and payload working correctly, is the API valid, how much
                time is it taking to respond—everything related to API testing,
                you would have to specially have different tools and software
                which was a little inconvenient.
              </p>
              <p>
                So cURL was made which lets developers like you and us test any
                API directly from the terminal without any other software tools,
                drastically increasing productivity and performance.
              </p>
            </div>

            {/* Usage Table */}
            <div className="mt-8">
              <h3
                className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                Some Usage:
              </h3>
              <div
                className={`overflow-hidden rounded-xl border ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      className={darkMode ? "bg-neutral-800" : "bg-neutral-100"}
                    >
                      <th className="text-left p-4 font-bold">
                        Question while using an API
                      </th>
                      <th className="text-left p-4 font-bold">
                        How cURL helps
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={darkMode ? "bg-neutral-900/50" : "bg-white"}
                  >
                    {[
                      [
                        "Is the API valid?",
                        "Faster → Instant requests without GUI overhead",
                      ],
                      [
                        "What is the response type?",
                        "Scriptable → Reusable commands inside scripts",
                      ],
                      [
                        "How is the response formatted?",
                        "Lightweight → No UI, minimal system resources",
                      ],
                      [
                        "What status code does it return?",
                        "Automation-friendly → Easy CI/CD and cron usage",
                      ],
                    ].map(([q, a], i) => (
                      <tr
                        key={i}
                        className={`border-t ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
                      >
                        <td className="p-4">{q}</td>
                        <td
                          className={`p-4 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                        >
                          {a}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* cURL Scenarios Image */}
            <div
              className={`mt-8 w-full rounded-xl overflow-hidden border ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
            >
              <img
                src="https://accountgram-production.sfo2.cdn.digitaloceanspaces.com/nubelaco_ghost/2022/12/TLC_Using_cURL_In_5_Actual_Scenarios_Using_cURL.png"
                alt="Using cURL In 5 Actual Scenarios"
                className="w-full h-auto"
              />
            </div>
            <p
              className={`mt-3 text-xs text-center ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
            >
              Using cURL In 5 Actual Scenarios
            </p>
          </section>

          {/* Section 3: Making your first request */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Making your first request using cURL
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                The simplest cURL request is a GET request. (You can send almost
                any type of REST API request)
              </p>

              {/* Code Block */}
              <div
                className={`rounded-xl p-5 font-mono text-sm border ${darkMode
                  ? "bg-neutral-900 border-neutral-800 text-green-400"
                  : "bg-neutral-900 border-neutral-800 text-green-400"
                  }`}
              >
                $ curl https://backend.novadrive.space
              </div>

              <p>
                <strong>What happens here:</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li>• curl sends an HTTP GET request</li>
                <li>• The URL is the API endpoint</li>
                <li>• The response is printed directly in the terminal</li>
              </ul>

              <p>This lets you quickly verify:</p>
              <ul className="space-y-2 text-sm">
                <li>• Whether the API is reachable</li>
                <li>• The response format (JSON, HTML, etc.)</li>
                <li>• The returned data</li>
              </ul>

              <p
                className={`pl-5 border-l-2 ${darkMode ? "border-neutral-700" : "border-neutral-300"}`}
              >
                That's your first API request (no browser, no extra tools, just
                the terminal).
              </p>
            </div>

            {/* POST Example */}
            <div className="mt-8">
              <h3
                className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                Sending data with a POST request:
              </h3>
              <div
                className={`rounded-xl p-5 font-mono text-sm border overflow-x-auto ${darkMode
                  ? "bg-neutral-900 border-neutral-800"
                  : "bg-neutral-900 border-neutral-800"
                  }`}
              >
                <pre className="text-green-400">
                  {`#!/bin/bash

curl -X POST \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Ba3a", "email": "someMail@gmail.com"}' \\
  https://crud.ba3a.tech/users`}
                </pre>
              </div>

              <div className="mt-6 space-y-3">
                <h4
                  className={`font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  Explanation:
                </h4>
                <ul className="space-y-3">
                  {[
                    [
                      "-X POST",
                      "Specifies the HTTP method for creating a new resource",
                    ],
                    [
                      '-H "Content-Type: application/json"',
                      "Sets the content type header to indicate JSON data",
                    ],
                    [
                      "-d '{...}'",
                      "Includes the user data in JSON format using the -d flag",
                    ],
                  ].map(([flag, desc], i) => (
                    <li
                      key={i}
                      className={`flex gap-3 p-4 rounded-lg border ${darkMode
                        ? "bg-neutral-900/30 border-neutral-800/50"
                        : "bg-neutral-50 border-neutral-200"
                        }`}
                    >
                      <code
                        className={`shrink-0 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                      >
                        {flag}
                      </code>
                      <span
                        className={
                          darkMode ? "text-neutral-400" : "text-neutral-600"
                        }
                      >
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Understanding request and response */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Understanding Request and Response
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Request */}
              <div
                className={`p-5 rounded-xl border ${darkMode
                  ? "bg-neutral-900/50 border-neutral-800"
                  : "bg-neutral-50 border-neutral-200"
                  }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  Request
                </h3>
                <p className="text-sm mb-4">
                  A request is sent by the client to the server to ask for data
                  or to perform an action.
                </p>
                <ul
                  className={`space-y-2 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  <li>• Sent by client</li>
                  <li>• Contains method and URL</li>
                  <li>• May include headers</li>
                  <li>• May include body data</li>
                </ul>
              </div>

              {/* Response */}
              <div
                className={`p-5 rounded-xl border ${darkMode
                  ? "bg-neutral-900/50 border-neutral-800"
                  : "bg-neutral-50 border-neutral-200"
                  }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  Response
                </h3>
                <p className="text-sm mb-4">
                  A response is sent by the server back to the client after
                  processing the request.
                </p>
                <ul
                  className={`space-y-2 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  <li>• Sent by server</li>
                  <li>• Contains status code</li>
                  <li>• Includes headers</li>
                  <li>• Returns data or error</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Using cURL to Talk to APIs */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Using cURL to Talk to APIs
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                cURL is a command-line tool that allows you to communicate with
                APIs by sending HTTP requests directly from the terminal. Using
                cURL, you can specify the request method, pass headers, send
                data in the request body, and inspect the server's response in
                raw form.
              </p>
              <p>
                This makes it extremely useful for quickly testing APIs,
                debugging issues, and understanding how an API behaves without
                relying on browsers or GUI tools.
              </p>

              <div
                className={`p-5 rounded-xl border ${darkMode
                  ? "bg-neutral-900/50 border-neutral-800"
                  : "bg-neutral-100 border-neutral-200"
                  }`}
              >
                <h4
                  className={`font-bold mb-3 ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  Gist:
                </h4>
                <ul
                  className={`space-y-2 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  <li>• Sends HTTP requests via terminal</li>
                  <li>• Supports all HTTP methods</li>
                  <li>• Can send headers and data</li>
                  <li>• Shows raw API responses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Common Mistakes */}
          <section
            className={`pt-16 border-t ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
          >
            <h2
              className={`text-2xl font-bold mb-8 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Common Mistakes Beginners Make with cURL
            </h2>
            <p className="mb-8 text-base leading-relaxed">
              General usage and syntax mistakes that beginners tend to make:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Forgetting the protocol in the URL",
                  desc: "Always start your URL with a protocol (e.g., http:// or https://). Omitting it (e.g., curl example.com) will likely result in a connection error.",
                },
                {
                  title: "Not using quotes for URLs with special characters",
                  desc: "URLs containing characters like &, ?, or spaces must be enclosed in double quotes to prevent the command line from misinterpreting them.",
                },
                {
                  title: "Incorrect HTTP method specification",
                  desc: "Beginners sometimes use the -X flag unnecessarily, which can cause issues with redirects. It's better to use specific options like -d (for POST data) which automatically set the method.",
                },
                {
                  title: "Ignoring case sensitivity",
                  desc: "URLs and API endpoints are case-sensitive. Ensure the path is typed exactly as specified in the API documentation to avoid 404 errors.",
                },
              ].map((mistake, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${darkMode
                    ? "bg-neutral-900/30 border-neutral-800"
                    : "bg-neutral-50 border-neutral-200"
                    }`}
                >
                  <h4
                    className={`font-bold mb-2 flex items-center gap-3 ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold ${darkMode
                        ? "bg-neutral-800 border border-neutral-700 text-neutral-400"
                        : "bg-neutral-200 border border-neutral-300 text-neutral-600"
                        }`}
                    >
                      {i + 1}
                    </span>
                    {mistake.title}
                  </h4>
                  <p
                    className={`text-sm pl-9 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                  >
                    {mistake.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer
          className={`mt-24 pt-12 border-t flex flex-col sm:flex-row justify-between items-center gap-8 ${darkMode ? "border-neutral-800" : "border-neutral-200"
            }`}
        >
          <div className="space-y-1 text-center sm:text-left">
            <p
              className={`font-bold text-lg ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Arman Thakur
            </p>
            <p
              className={`text-sm ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
            >
              Computer Science Student • Full Stack Developer
            </p>
          </div>
          <div className="flex gap-6">
            <Twitter
              className={`cursor-pointer transition-colors ${darkMode ? "text-neutral-500 hover:text-white" : "text-neutral-400 hover:text-neutral-900"}`}
              size={20}
            />
            <Linkedin
              className={`cursor-pointer transition-colors ${darkMode ? "text-neutral-500 hover:text-white" : "text-neutral-400 hover:text-neutral-900"}`}
              size={20}
            />
            <Github
              className={`cursor-pointer transition-colors ${darkMode ? "text-neutral-500 hover:text-white" : "text-neutral-400 hover:text-neutral-900"}`}
              size={20}
            />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CurlGuide;
