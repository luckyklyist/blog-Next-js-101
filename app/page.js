import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftargettrend.com%2Fwp-content%2Fuploads%2F2020%2F12%2Flearn-JavaScript-online-free-1-1-1536x1024.jpeg&f=1&nofb=1&ipt=6620c0005b9c8e7589d0c1a3a2b0b02b3e97eb3a1d4fa8d8d7a2f94928a7da12&ipo=images" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Next Learn Blog</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">
              <Link href="/blogs/new">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
