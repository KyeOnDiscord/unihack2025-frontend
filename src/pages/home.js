import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  //   if (localStorage.getItem("JWT_TOKEN") == null) {
  //     alert("You are not logged in, please log in");
  //     window.location.href = "/login";
  //   }
  const style = { backgroundColor: "#004185" };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <title>AllocateUs - Home</title>
      <meta
        name="description"
        content="A calendar to sync schedules with friends"
      />
      <link rel="icon" href="/favicon.ico" />

      <header className="text-white py-12" style={style}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">AllocateUs</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            A calendar to make groups to sync schedules with uni friends
          </p>
        </div>
      </header>

      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Welcome</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            People create their own profile and upload their calendar (.ics)
            from Allocate+. Users can join or create a group. Up to 10 people
            can join a group, and their schedules can be synced. Within the
            rooms, users can view other people&apos;s calendars.
          </p>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            People can put their hobbies and interests on their profile, and AI
            can suggest activities for groups of people depending on their
            interests.
          </p>
        </div>
      </section>
    </div>
  );
}
