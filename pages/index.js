import Link from "next/link";
import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/loginButton";
import LogoutButton from "../components/logoutButton";
import Loading from "../components/loading";

export default function Home() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <Loading />;

  if (!isAuthenticated) return <LoginButton />;

  if (isAuthenticated)
    return (
      <div className="w-full h-full bg-blue-100">
        <Head>
          <title>The miracle tutorial: Admin</title>
          <link rel="icon" href="/tmt.png" />
        </Head>
        <div className="flex flex-row justify-evenly">
          <div className="py-10 text-4xl font-bold text-center text-red-500">
            ADMIN CONTROL
          </div>
          <LogoutButton />
        </div>
        <div className="grid grid-cols-2 gap-16 py-8 mx-32 text-xl font-bold text-center text-white">
          <Link href="/notice">
            <a>
              <div className="py-12 bg-pink-600 h-36 rounded-3xl hover:bg-pink-700">
                MANAGE NOTICE
              </div>
            </a>
          </Link>
          <Link href="/result">
            <a>
              <div className="py-12 bg-green-400 h-36 rounded-3xl hover:bg-green-500">
                MANAGE RESULT
              </div>
            </a>
          </Link>
          <Link href="/admission">
            <a>
              <div className="py-12 bg-yellow-400 h-36 rounded-3xl hover:bg-yellow-500">
                MANAGE ADMISSION
              </div>
            </a>
          </Link>
          <Link href="/demo">
            <a>
              <div className="py-12 bg-blue-400 h-36 rounded-3xl hover:bg-blue-500">
                MANAGE DEMO
              </div>
            </a>
          </Link>
          <Link href="/gallery">
            <a>
              <div className="py-12 bg-red-400 h-36 rounded-3xl hover:bg-red-500">
                MANAGE GALLERY
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
}
