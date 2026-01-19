import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useMousePosition } from "../../hooks/useMousePosition";
import Navbar from "../../components/Navbar";
import {
  Calendar,
  Clock,
  Eye,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Dnsworking = () => {
  const { darkMode, setDarkMode, theme } = useTheme();
  const mousePosition = useMousePosition();

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
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-6 ${
              darkMode
                ? "bg-neutral-800 border border-neutral-700 text-neutral-400"
                : "bg-neutral-200 border border-neutral-300 text-neutral-600"
            }`}
          >
            Network Architecture
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            How DNS Resolution Works
          </h1>
          <div
            className={`flex flex-wrap gap-6 text-sm font-medium ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={1.5} /> January 18, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} strokeWidth={1.5} /> 7 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div
          className={`w-full aspect-video rounded-2xl overflow-hidden mb-16 border ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
        >
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250423151312675710/DNS-SERVER.webp"
            alt="DNS Resolution Overview"
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
              What is DNS (Domain Name System)
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                → It is the phonebook of the internet. Humans access info using
                domain names but in the background each site is running on a
                machine which can be hosted on cloud machines or bare metal
                which have a unique public IP which is hard for humans to
                remember, so we use domain names that are easy to read.
              </p>
              <p>
                → For now, in short, we can say DNS translates domain names to
                IP addresses where the site is hosted. But it is not that simple
                (domain name ↔ IP). Before getting the IP, it sends recursive
                requests to different types of servers to finally get the IP.
              </p>
              <div
                className={`p-5 rounded-xl border ${
                  darkMode
                    ? "bg-neutral-900/50 border-neutral-800 text-neutral-200"
                    : "bg-neutral-100 border-neutral-200 text-neutral-800"
                }`}
              >
                <strong>Example:</strong> Recursive server, Root server,
                Authoritative DNS server
                <p
                  className={`mt-2 text-sm ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
                >
                  We will discuss more about each server and the entire
                  lifecycle of how a request is processed and resolved.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Dig Command */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              What is the dig command and when is it used
            </h2>
            <p className="text-base leading-relaxed mb-6">
              The <strong>dig</strong> command, short for{" "}
              <strong>Domain Information Groper</strong>, is a command-line tool
              used to query DNS servers. It retrieves detailed DNS information
              such as IP addresses (A/AAAA records), mail servers (MX records),
              name servers (NS records), and other DNS record types.
            </p>
            <h3
              className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              It's mainly used for:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Troubleshooting DNS issues",
                "Verifying DNS record propagation",
                "Diagnosing network problems",
                "Querying specific DNS servers",
                "Performing reverse DNS lookups",
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-lg border text-sm ${
                    darkMode
                      ? "border-neutral-800 bg-neutral-900/30"
                      : "border-neutral-200 bg-neutral-50"
                  }`}
                >
                  <div
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${darkMode ? "bg-neutral-500" : "bg-neutral-400"}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: DNS Recursor */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Before discussing further, let's discuss DNS Recursor
            </h2>
            <div className="space-y-6 text-base leading-relaxed">
              <p
                className={`pl-5 border-l-2 ${darkMode ? "border-neutral-700" : "border-neutral-300"}`}
              >
                → It is the first layer where the server connects to query the
                IP address for the particular domain name. It receives queries
                from a client and first checks if there is already a cache
                present in the recursive server for a previous request.
              </p>
              <p>
                → If not cached, it will start recursively querying the DNS
                hierarchy. First, it will go to the root name server (resolving
                example: ".com"), then to the particular TLD nameserver (in this
                case, .com), and finally the authoritative name server, which
                will finally return the IP and also cache it for future queries.
                Recursive servers do not host any records—they just cache to
                reduce the load on the main servers.
              </p>
            </div>

            {/* DNS Server Diagram */}
            <div
              className={`mt-8 w-full rounded-xl overflow-hidden border ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
            >
              <img
                src="https://cdn.umbrella.marketops.umbrella.com/wp-content/uploads/2020/06/16092413/What-is-the-difference-between-Authoritative-and-Recursive-DNS-Nameservers_Cisco-Umbrella-blog_DNS-server-diagram.jpg"
                alt="Authoritative vs Recursive DNS Nameservers Diagram"
                className="w-full h-auto"
              />
            </div>
            <p
              className={`mt-3 text-xs text-center ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
            >
              Authoritative vs Recursive DNS Nameservers (Source: Cisco
              Umbrella)
            </p>
          </section>

          {/* Section 4: Dig . NS */}
          <section
            className={`p-6 rounded-xl border ${darkMode ? "bg-neutral-900/40 border-neutral-800" : "bg-neutral-50 border-neutral-200"}`}
          >
            <h2
              className={`text-2xl font-bold mb-5 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Understanding dig, NS, and Root Name Servers
            </h2>
            <p className="mb-6">
              The <strong>dig</strong> command is a powerful Linux utility used
              to query DNS servers for detailed information about domain names.
            </p>

            <div className="space-y-5">
              <div>
                <h4
                  className={`font-bold text-sm uppercase tracking-wider mb-3 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  NS Records (Name Server Records)
                </h4>
                <p
                  className={`mb-4 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  NS records specify the authoritative name servers for a
                  domain.
                </p>
                <div
                  className={`rounded-lg p-4 font-mono text-sm border ${
                    darkMode
                      ? "bg-black/60 border-neutral-800 text-green-400"
                      : "bg-neutral-900 border-neutral-800 text-green-400"
                  }`}
                >
                  $ dig example.com NS
                </div>
              </div>

              <div
                className={`pt-5 border-t ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
              >
                <h4
                  className={`font-bold mb-3 ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  Key Points:
                </h4>
                <ul
                  className={`space-y-2 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  <li>
                    • If no record type is specified, dig defaults to A records.
                  </li>
                  <li>• The AUTHORITY SECTION contains the NS records.</li>
                  <li>
                    • Use <code>dig +short example.com NS</code> for concise
                    output.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Root Servers */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              What are Root Name Servers
            </h2>
            <p className="text-base leading-relaxed mb-8">
              Root servers are the first main step if cache is not in the
              recursor server. You can think of a root server like an index in a
              library that points to different racks of books. There are mainly
              13 logical root name servers, each identified by a unique name and
              IP address.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: "13", label: "Logical Servers" },
                { val: "1950+", label: "Instances" },
                { val: "12", label: "Organizations" },
                { val: "ICANN", label: "Maintenance" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border text-center ${
                    darkMode
                      ? "border-neutral-800 bg-neutral-900/20"
                      : "border-neutral-200 bg-neutral-50"
                  }`}
                >
                  <div
                    className={`text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    {stat.val}
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-widest font-bold ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Dig com NS */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Understanding dig com NS and TLD Name Servers
            </h2>
            <p className="mb-5">
              dig is a command-line tool used to query DNS servers for
              information about domain names.
            </p>
            <div
              className={`border rounded-xl p-5 font-mono text-sm space-y-3 ${
                darkMode
                  ? "bg-neutral-900 border-neutral-800"
                  : "bg-neutral-900 border-neutral-800"
              }`}
            >
              <div className="text-green-500">$ dig example.com NS</div>
              <div className="text-neutral-500 leading-loose">
                example.com. 3600 IN NS a.iana-servers.net.
                <br />
                example.com. 3600 IN NS b.iana-servers.net.
              </div>
            </div>
          </section>

          {/* Section 7: TLD */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              What are TLD Name Servers
            </h2>
            <p className="text-base leading-relaxed mb-8">
              → TLD is like the specific rack of books. This nameserver is the
              next step in the search for a specific IP address and it hosts the
              last portion of the hostname.
            </p>

            <div className="space-y-3">
              <h4
                className={`font-bold mb-3 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                Example (accessing google.com):
              </h4>
              <ul className="space-y-3">
                {[
                  "A recursive resolver connects this request to a root server",
                  "The root server directs the resolver to the '.com' TLD server",
                  "The '.com' TLD server responds with the authoritative name servers for google.com",
                  "The resolver queries these authoritative name servers to get the IP address",
                ].map((step, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 p-4 rounded-lg border ${
                      darkMode
                        ? "bg-neutral-900/30 border-neutral-800/50"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <span
                      className={`font-bold ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                      }
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 8: Auth Servers */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Authoritative Name Servers
            </h2>
            <div className="space-y-5">
              <p>
                dig google.com NS queries the authoritative name servers for the
                domain by requesting NS records.
              </p>
              <div
                className={`p-5 rounded-xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-neutral-100 border-neutral-200"}`}
              >
                <p
                  className={`text-xs font-bold mb-3 uppercase tracking-widest ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
                >
                  Answer Section
                </p>
                <code
                  className={darkMode ? "text-neutral-300" : "text-neutral-700"}
                >
                  ns1.google.com
                  <br />
                  ns2.google.com
                  <br />
                  ns3.google.com
                  <br />
                  ns4.google.com
                </code>
              </div>
              <p
                className={`text-base leading-relaxed pl-5 border-l-2 ${darkMode ? "border-neutral-700 text-neutral-400" : "border-neutral-300 text-neutral-600"}`}
              >
                The authoritative nameserver is the last stop in the query. It
                returns the IP address for the requested hostname back to the
                DNS Recursor.
              </p>
            </div>
          </section>

          {/* Final Flows Cycle */}
          <section
            className={`pt-16 border-t ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
          >
            <h2
              className={`text-3xl font-bold mb-12 tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              Final DNS Resolution Cycle
            </h2>

            {/* DNS Lookup Journey Diagram */}
            <div
              className={`mb-12 w-full rounded-xl overflow-hidden border ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
            >
              <img
                src="https://miro.medium.com/1%2A-kCFoSB3-pMwajK6LTJY6Q.jpeg"
                alt="The DNS Lookup Journey"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "1. Client → DNS Recursor",
                  items: [
                    "User enters a domain name in the browser",
                    "The browser sends the DNS query to the DNS recursor",
                    "The recursor first checks its cache",
                    "If cached, the IP is returned immediately",
                    "If not cached, the recursor starts the recursive resolution process",
                  ],
                },
                {
                  title: "2. DNS Recursor → Root Name Server",
                  items: [
                    "The recursor sends a query to a root name server",
                    "Root servers do not know IP addresses",
                    "They respond with a referral to the appropriate TLD name server",
                  ],
                },
                {
                  title: "3. DNS Recursor → TLD Name Server",
                  items: [
                    "The recursor queries the TLD name server",
                    "The TLD server responds with the authoritative name servers",
                  ],
                },
                {
                  title: "4. DNS Recursor → Authoritative Name Server",
                  items: [
                    "The recursor queries the authoritative name server",
                    "This server holds the actual DNS records",
                    "It returns the final IP address",
                    "The recursor caches the response and sends the IP back to the client",
                  ],
                },
              ].map((flow, i) => (
                <div key={i}>
                  <h3
                    className={`text-xl font-bold mb-4 flex items-center gap-3 ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    <span
                      className={`flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold ${
                        darkMode
                          ? "bg-neutral-800 border border-neutral-700 text-neutral-400"
                          : "bg-neutral-200 border border-neutral-300 text-neutral-600"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {flow.title}
                  </h3>
                  <ul
                    className={`space-y-3 pl-10 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                  >
                    {flow.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 leading-relaxed">
                        <ArrowRight
                          size={14}
                          className={`mt-1.5 shrink-0 ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer
          className={`mt-24 pt-12 border-t flex flex-col sm:flex-row justify-between items-center gap-8 ${
            darkMode ? "border-neutral-800" : "border-neutral-200"
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

export default Dnsworking;
