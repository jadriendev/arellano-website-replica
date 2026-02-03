import { Search, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#004ea8] flex flex-col">
        {/* Top bar */}
        <div className="bg-[#DA291C] flex items-center justify-end px-5 py-3">
          <ul className="flex gap-7 flex-wrap">
            <li className="flex items-center">
              <Search className="mr-1 text-white h-4 w-4" />
              <Link href="#" className="uppercase tracking-wide text-[17px] text-white">
                search
              </Link>
            </li>
            <li className="flex items-center">
              <LogOut className="mr-1 text-white h-4 w-4" />
              <Link href="#" className="uppercase tracking-wide text-[17px] text-white">
                online library
              </Link>
            </li>
            <li className="flex items-center">
              <LogOut className="mr-1 text-white h-4 w-4" />
              <Link href="#" className="uppercase tracking-wide text-[17px] text-white">
                learning management system
              </Link>
            </li>
            <li className="flex items-center">
              <LogOut className="mr-1 text-white h-4 w-4" />
              <Link href="#" className="uppercase tracking-wide text-[17px] text-white">
                competency-based evaluation
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo section */}
        <div className="py-4 px-8 flex items-center mb-2">
          <Image
            src="https://www.arellano.edu.ph/images/Arellano_University_New_Logo.png"
            alt="Arellano University"
            width={90}
            height={90}
            className="h-[90px] w-auto"
          />
          <h1 className="text-white uppercase text-5xl ml-5 font-normal font-serif">
            arellano university
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center py-4 relative">
          <ul className="flex gap-20 flex-wrap justify-center">
            <li>
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold border-b-4 border-transparent hover:border-white transition-all duration-200 pb-1"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold border-b-4 border-transparent hover:border-white transition-all duration-200 pb-1"
              >
                admission
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold flex items-center gap-2 pb-1"
              >
                academics
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <ul className="absolute top-[22px] left-0 mt-3 hidden group-hover:block bg-white text-blue-700 shadow-lg w-[330px] px-3 py-6 z-50">
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Elementary and Junior High School
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Senior High School
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Undergraduate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Graduate School
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    International Nursing Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-2 py-2 hover:bg-gray-100">
                    International Programs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold border-b-4 border-transparent hover:border-white transition-all duration-200 pb-1"
              >
                news
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold border-b-4 border-transparent hover:border-white transition-all duration-200 pb-1"
              >
                alumni
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold border-b-4 border-transparent hover:border-white transition-all duration-200 pb-1"
              >
                research
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="capitalize text-white text-[19px] font-semibold border-b-4 border-transparent hover:border-white transition-all duration-200 pb-1"
              >
                industry partnership
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 h-[470px]"></main>

      {/* Footer */}
      <footer className="flex justify-between items-center bg-[#004ea8] px-10 py-4 pb-[43px] flex-wrap gap-8">
        <div className="flex">
          <div className="mr-5">
            <Image
              src="https://www.arellano.edu.ph/images/Arellano_University_New_Logo.png"
              alt="Arellano University"
              width={80}
              height={80}
              className="h-[80px] w-auto"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-white uppercase text-3xl font-normal tracking-wider font-serif">
              arellano university
            </h2>
            <p className="text-white text-[18px] font-normal tracking-wide">
              2600 Legarda St., Sampaloc, Manila
            </p>
            <p className="text-white text-[18px] font-normal tracking-wide">
              1008 Metro Manila, Philippines
            </p>
            <p className="text-white text-[18px] font-normal tracking-wide mb-3">
              8-734-7371 to 79
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" aria-label="Facebook">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-10 flex-wrap mb-4">
            <li className="text-white capitalize text-[20px] tracking-wide font-light">
              <Link href="#">about</Link>
            </li>
            <li className="text-white capitalize text-[20px] tracking-wide font-light">
              <Link href="#">administration</Link>
            </li>
            <li className="text-white capitalize text-[20px] tracking-wide font-light">
              <Link href="#">contact</Link>
            </li>
            <li className="text-white capitalize text-[20px] tracking-wide font-light">
              <Link href="#">community development</Link>
            </li>
            <li className="text-white capitalize text-[20px] tracking-wide font-light">
              <Link href="#">data privacy</Link>
            </li>
            <li className="text-white capitalize text-[20px] tracking-wide font-light">
              <Link href="#">trade mark policy</Link>
            </li>
          </ul>
          <div className="flex items-center ml-2">
            <Image
              className="h-[90px] w-auto mr-5"
              src="https://www.dbm.gov.ph/images/npc-registration-seal-logo.png"
              alt="NPC Registration Seal"
              width={90}
              height={90}
            />
            <div>
              <p className="text-white font-semibold text-lg tracking-wide">
                NPC Registration No.
              </p>
              <p className="text-white font-semibold text-lg tracking-wide">
                PIC-002-370-2023
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
